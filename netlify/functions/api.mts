import { getStore } from "@netlify/blobs"
import type { Config, Context } from "@netlify/functions"
import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto"

/*
  Modelo de acesso:
  - Qualquer pessoa com o link VÊ tudo (sem login).
  - Duas contas apenas:
      accounts/admin  → Administrador (tudo: reservas, pagamentos, configurações, logins)
      accounts/editor → Editor (cria, edita e cancela reservas de qualquer família)
*/

type Role = "admin" | "editor"

interface Family { id: string; name: string; color: string; members: string[] }
interface AppConfig { dailyRate: number; allowOverlap: boolean; families: Family[]; maxCommon?: number; maxHoliday?: number }
interface Account { role: Role; username: string; name: string; salt: string; hash: string; updatedAt: string }
interface Booking {
  id: string; familyId: string; responsible: string; people?: number | null; guestNames: string
  checkIn: string; checkOut: string; nights: number; rate: number; amount: number
  paid: boolean; paidAt: string | null; paymentNote: string; notes: string
  createdBy: string; createdByName: string; createdAt: string; updatedAt: string
}

const DEFAULT_CONFIG: AppConfig = {
  dailyRate: 70,
  allowOverlap: false,
  maxCommon: 2,
  maxHoliday: 2,
  families: [
    { id: "maria-jose", name: "Maria José", color: "#D4899A", members: ["Maria José"] },
    { id: "angela-kadar", name: "Ângela Kadar", color: "#6EA6C4", members: ["Ângela Kadar"] },
    { id: "cleia-said", name: "Cleia Said", color: "#D3A867", members: ["Cleia Said"] },
    { id: "aloisio", name: "Aloísio", color: "#9A8DCB", members: ["Aloísio"] },
  ],
}
const SEED: Record<Role, { username: string; name: string; env: string }> = {
  admin: { username: "admin", name: "Administrador", env: "ADMIN_PASSWORD" },
  editor: { username: "editor", name: "Editor", env: "EDITOR_PASSWORD" },
}

const store = () => getStore({ name: "apto-rio", consistency: "strong" })
const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "cache-control": "no-store" } })
const fail = (msg: string, status = 400) => json({ error: msg }, status)
const now = () => new Date().toISOString()
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const br = (d: string) => d.split("-").reverse().join("/")
const pad = (n: number) => String(n).padStart(2, "0")
const ymd = (d: Date) => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`
/** data de hoje no horário de Brasília (AAAA-MM-DD) */
const todayBR = () => new Date().toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" })

/* ---------- feriados (mesma lista exibida no site) ---------- */
function easter(y: number) {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25),
    g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4,
    l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451)
  return new Date(Date.UTC(y, Math.floor((h + l - 7 * m + 114) / 31) - 1, ((h + l - 7 * m + 114) % 31) + 1))
}
const _hol: Record<number, string[]> = {}
function holidayDates(y: number) {
  if (_hol[y]) return _hol[y]
  const e = easter(y)
  const rel = (n: number) => { const d = new Date(e); d.setUTCDate(d.getUTCDate() + n); return ymd(d) }
  const fixed = ["01-01", "01-20", "04-21", "04-23", "05-01", "09-07", "10-12", "11-02", "11-15", "11-20", "12-24", "12-25", "12-31"]
  return (_hol[y] = [...fixed.map((md) => `${y}-${md}`), rel(-48), rel(-47), rel(-46), rel(-2), rel(0), rel(60)])
}
/** a estadia inclui algum feriado entre a entrada e a saída (inclusive)? */
function hasHoliday(a: string, b: string) {
  for (let y = +a.slice(0, 4); y <= +b.slice(0, 4); y++) if (holidayDates(y).some((d) => d >= a && d <= b)) return true
  return false
}

/* ---------- senhas e tokens ---------- */
function hashPassword(password: string, salt = randomBytes(16).toString("hex")) {
  return { salt, hash: scryptSync(password, salt, 64).toString("hex") }
}
function checkPassword(password: string, acc: Account) {
  const a = Buffer.from(scryptSync(password, acc.salt, 64).toString("hex"))
  const b = Buffer.from(acc.hash)
  return a.length === b.length && timingSafeEqual(a, b)
}
function secret() {
  const s = Netlify.env.get("AUTH_SECRET")
  if (!s) throw new Error("AUTH_SECRET não configurado")
  return s
}
function sign(payload: object) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url")
  const mac = createHmac("sha256", secret()).update(body).digest("base64url")
  return `${body}.${mac}`
}
function verify(token: string): { r: Role; h: string; exp: number } | null {
  const [body, mac] = token.split(".")
  if (!body || !mac) return null
  const expected = createHmac("sha256", secret()).update(body).digest("base64url")
  if (expected.length !== mac.length || !timingSafeEqual(Buffer.from(expected), Buffer.from(mac))) return null
  try {
    const p = JSON.parse(Buffer.from(body, "base64url").toString())
    return p.exp > Date.now() ? p : null
  } catch { return null }
}
// o token fica inválido quando a senha da conta muda (h = pedaço do hash)
const tokenFor = (acc: Account) => sign({ r: acc.role, h: acc.hash.slice(0, 16), exp: Date.now() + 60 * 86400000 })

/* ---------- dados ---------- */
async function getConfig(): Promise<AppConfig> {
  return ((await store().get("config", { type: "json" })) as AppConfig | null) ?? DEFAULT_CONFIG
}
async function getAccount(role: Role) {
  return (await store().get(`accounts/${role}`, { type: "json" })) as Account | null
}
async function listBookings(): Promise<Booking[]> {
  const s = store()
  const { blobs } = await s.list({ prefix: "bookings/" })
  const items = await Promise.all(blobs.map((b) => s.get(b.key, { type: "json" })))
  return (items.filter(Boolean) as Booking[]).sort((a, b) => a.checkIn.localeCompare(b.checkIn))
}
const publicAccount = (a: Account | null, role: Role) =>
  a ? { role, username: a.username, name: a.name, active: true } : { role, username: SEED[role].username, name: SEED[role].name, active: false }

async function currentAccount(req: Request) {
  const auth = req.headers.get("authorization") || ""
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : ""
  const p = token ? verify(token) : null
  if (!p || (p.r !== "admin" && p.r !== "editor")) return null
  const acc = await getAccount(p.r)
  return acc && acc.hash.slice(0, 16) === p.h ? acc : null
}

const nightsBetween = (a: string, b: string) =>
  Math.round((Date.parse(b + "T12:00:00Z") - Date.parse(a + "T12:00:00Z")) / 86400000)

async function validateBooking(input: any, cfg: AppConfig, ignoreId?: string) {
  const fam = cfg.families.find((f) => f.id === input.familyId)
  if (!fam) return { error: "Escolha uma família válida." }
  if (!DATE_RE.test(input.checkIn || "") || !DATE_RE.test(input.checkOut || "")) return { error: "Datas inválidas." }
  const nights = nightsBetween(input.checkIn, input.checkOut)
  if (nights < 1) return { error: "A saída precisa ser depois da entrada (mínimo 1 diária)." }
  if (nights > 60) return { error: "Estadia máxima de 60 diárias." }
  // quantidade de pessoas deixou de ser pedida; mantém o valor só se vier
  const people = input.people == null || input.people === "" ? null : Math.floor(Number(input.people))
  if (people !== null && !(people >= 1 && people <= 30)) return { error: "Quantidade de pessoas inválida." }
  const responsible = String(input.responsible || "").trim().slice(0, 80)
  if (!responsible) return { error: "Selecione o responsável pela reserva." }
  // o responsável precisa ser integrante da família escolhida
  // (exceção: ao editar uma reserva antiga, mantém o responsável que já estava nela)
  if (!fam.members.includes(responsible)) {
    let keep = false
    if (ignoreId) {
      const old = (await store().get(`bookings/${ignoreId}`, { type: "json" })) as Booking | null
      keep = !!old && old.familyId === fam.id && old.responsible === responsible
    }
    if (!keep) return { error: `${responsible} não está entre os integrantes da família ${fam.name}. Cadastre em Ajustes → Famílias.` }
  }

  const all = await listBookings()

  // Regra de marcações: cada família pode ter até N marcações EM ABERTO de tempo comum
  // e até N de feriado. Quando a estadia termina (passa o dia da saída), a vaga é liberada.
  if (input.checkOut > todayBR()) {
    const isHol = hasHoliday(input.checkIn, input.checkOut)
    const limit = isHol ? cfg.maxHoliday ?? 2 : cfg.maxCommon ?? 2
    if (limit > 0) {
      const open = all.filter((b) => b.id !== ignoreId && b.familyId === fam.id && b.checkOut > todayBR() && hasHoliday(b.checkIn, b.checkOut) === isHol)
      if (open.length >= limit) {
        const kind = isHol ? "feriado" : "tempo comum"
        const list = open.map((b) => `${br(b.checkIn)} a ${br(b.checkOut)}`).join(" e ")
        return { error: `A família ${fam.name} já tem ${open.length} ${open.length === 1 ? "marcação" : "marcações"} de ${kind} em aberto (${list}). O limite é ${limit}. Uma nova só pode ser feita depois que uma delas terminar.` }
      }
    }
  }

  if (!cfg.allowOverlap) {
    const clash = all.find((b) => b.id !== ignoreId && input.checkIn < b.checkOut && b.checkIn < input.checkOut)
    if (clash) {
      const f = cfg.families.find((x) => x.id === clash.familyId)
      return { error: `Conflito: o apartamento já está reservado para ${f?.name ?? "outra família"} de ${br(clash.checkIn)} a ${br(clash.checkOut)}.` }
    }
  }
  return {
    data: {
      familyId: fam.id, responsible, people, nights,
      guestNames: String(input.guestNames || "").trim().slice(0, 500),
      notes: String(input.notes || "").trim().slice(0, 500),
      checkIn: input.checkIn, checkOut: input.checkOut,
    },
  }
}

/* ---------- rotas ---------- */
export default async (req: Request, _context: Context) => {
  try {
    const url = new URL(req.url)
    const [resource, id, action] = url.pathname.replace(/^\/api\/?/, "").split("/").filter(Boolean)
    const method = req.method
    const body = method === "GET" || method === "DELETE" ? {} : await req.json().catch(() => ({}))

    /* ---------- login ---------- */
    if (resource === "login" && method === "POST") {
      const username = String(body.username || "").trim().toLowerCase()
      const password = String(body.password || "")
      for (const role of ["admin", "editor"] as Role[]) {
        let acc = await getAccount(role)
        // primeiro acesso: usa a senha definida nas variáveis do Netlify
        if (!acc && username === SEED[role].username) {
          const envPass = Netlify.env.get(SEED[role].env)
          if (envPass && password === envPass) {
            acc = { role, username: SEED[role].username, name: SEED[role].name, ...hashPassword(password), updatedAt: now() }
            await store().setJSON(`accounts/${role}`, acc, { onlyIfNew: true })
            acc = await getAccount(role)
          }
        }
        if (acc && acc.username === username && checkPassword(password, acc)) {
          return json({ token: tokenFor(acc), me: { role, username: acc.username, name: acc.name } })
        }
      }
      await new Promise((r) => setTimeout(r, 600)) // freia tentativas em série
      return fail("Usuário ou senha incorretos.", 401)
    }

    const me = await currentAccount(req)
    const cfg = await getConfig()

    /* ---------- visualização pública ---------- */
    if (resource === "state" && method === "GET") {
      const all = await listBookings()
      const out: any = {
        me: me ? { role: me.role, username: me.username, name: me.name } : null,
        // visitante sem login não recebe nenhum dado financeiro
        config: me ? cfg : { allowOverlap: cfg.allowOverlap, maxCommon: cfg.maxCommon ?? 2, maxHoliday: cfg.maxHoliday ?? 2, families: cfg.families },
        bookings: me ? all : all.map(({ amount, rate, paid, paidAt, paymentNote, ...rest }) => rest),
      }
      if (me?.role === "admin") out.accounts = [publicAccount(me, "admin"), publicAccount(await getAccount("editor"), "editor")]
      return json(out)
    }

    /* ---------- daqui pra baixo precisa de login ---------- */
    if (!me) return fail("Entre com seu login para fazer alterações.", 401)

    if (resource === "me" && id === "password" && method === "POST") {
      if (!checkPassword(String(body.current || ""), me)) return fail("Senha atual incorreta.")
      const np = String(body.next || "")
      if (np.length < 6) return fail("A nova senha precisa ter pelo menos 6 caracteres.")
      const upd = { ...me, ...hashPassword(np), updatedAt: now() }
      await store().setJSON(`accounts/${me.role}`, upd)
      return json({ token: tokenFor(upd) })
    }

    /* reservas: admin e editor */
    if (resource === "bookings") {
      if (method === "POST" && !id) {
        const v = await validateBooking(body, cfg)
        if (v.error) return fail(v.error)
        const b: Booking = {
          id: `${Date.now().toString(36)}${randomBytes(3).toString("hex")}`,
          ...v.data!, rate: cfg.dailyRate, amount: v.data!.nights * cfg.dailyRate,
          paid: false, paidAt: null, paymentNote: "",
          createdBy: me.role, createdByName: me.name, createdAt: now(), updatedAt: now(),
        }
        await store().setJSON(`bookings/${b.id}`, b)
        return json(b, 201)
      }
      if (!id) return fail("Rota não encontrada", 404)
      const existing = (await store().get(`bookings/${id}`, { type: "json" })) as Booking | null
      if (!existing) return fail("Agendamento não encontrado.", 404)

      if (action === "payment" && method === "POST") {
        if (me.role !== "admin") return fail("Só o administrador confirma pagamentos.", 403)
        const paid = !!body.paid
        const upd: Booking = {
          ...existing, paid,
          paidAt: paid ? (DATE_RE.test(body.paidAt || "") ? body.paidAt : now().slice(0, 10)) : null,
          paymentNote: paid ? String(body.paymentNote || "").slice(0, 200) : "", updatedAt: now(),
        }
        await store().setJSON(`bookings/${id}`, upd)
        return json(upd)
      }
      if (method === "PUT") {
        const v = await validateBooking(body, cfg, id)
        if (v.error) return fail(v.error)
        const rate = existing.rate ?? cfg.dailyRate
        const upd: Booking = { ...existing, ...v.data!, rate, amount: v.data!.nights * rate, updatedAt: now() }
        await store().setJSON(`bookings/${id}`, upd)
        return json(upd)
      }
      if (method === "DELETE") {
        if (existing.paid && me.role !== "admin") return fail("Reserva já paga: só o administrador pode cancelar.", 403)
        await store().delete(`bookings/${id}`)
        return json({ ok: true })
      }
    }

    /* ---------- só administrador ---------- */
    if (me.role !== "admin") return fail("Acesso restrito ao administrador.", 403)

    if (resource === "config" && method === "PUT") {
      const rate = Number(body.dailyRate)
      if (!(rate >= 0 && rate <= 100000)) return fail("Valor da diária inválido.")
      const fams: any[] = Array.isArray(body.families) ? body.families : cfg.families
      const clean: Family[] = fams.slice(0, 20).map((f, i) => ({
        id: String(f.id || `familia-${Date.now()}-${i}`).toLowerCase().replace(/[^a-z0-9-]/g, "-").slice(0, 40),
        name: String(f.name || "").trim().slice(0, 60) || `Família ${i + 1}`,
        color: /^#[0-9a-fA-F]{6}$/.test(f.color) ? f.color : "#888888",
        members: (Array.isArray(f.members) ? f.members : []).map((m: any) => String(m).trim().slice(0, 80)).filter(Boolean).slice(0, 60),
      }))
      const lim = (v: any, d: number) => { const n = Math.floor(Number(v ?? d)); return n >= 0 && n <= 50 ? n : d }
      const next: AppConfig = {
        dailyRate: rate, allowOverlap: !!body.allowOverlap, families: clean,
        maxCommon: lim(body.maxCommon, cfg.maxCommon ?? 2), maxHoliday: lim(body.maxHoliday, cfg.maxHoliday ?? 2),
      }
      await store().setJSON("config", next)
      return json(next)
    }

    /* editar os dois logins */
    if (resource === "accounts" && (id === "admin" || id === "editor") && method === "PUT") {
      const role = id as Role
      const other = role === "admin" ? "editor" : "admin"
      const current = role === "admin" ? me : await getAccount("editor")
      const username = String(body.username ?? current?.username ?? SEED[role].username).trim().toLowerCase()
      if (!/^[a-z0-9._-]{3,30}$/.test(username)) return fail("Usuário: 3 a 30 letras minúsculas, números, ponto ou traço (sem espaços/acentos).")
      const otherAcc = await getAccount(other)
      if ((otherAcc?.username ?? SEED[other].username) === username) return fail("Esse usuário já é usado pelo outro login.")
      const name = String(body.name ?? current?.name ?? SEED[role].name).trim().slice(0, 60) || SEED[role].name
      const pw = String(body.password || "")
      if (!current && pw.length < 6) return fail("Defina uma senha (mín. 6 caracteres) para ativar o editor.")
      if (pw && pw.length < 6) return fail("Senha precisa ter pelo menos 6 caracteres.")
      const upd: Account = { role, username, name, ...(pw ? hashPassword(pw) : { salt: current!.salt, hash: current!.hash }), updatedAt: now() }
      await store().setJSON(`accounts/${role}`, upd)
      return json({ account: publicAccount(upd, role), token: role === "admin" ? tokenFor(upd) : undefined })
    }

    return fail("Rota não encontrada", 404)
  } catch (err: any) {
    console.error(err)
    return fail("Erro no servidor: " + (err?.message || "desconhecido"), 500)
  }
}

export const config: Config = { path: "/api/*" }

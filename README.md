# 🏖️ Apê do Rio — Agenda das Famílias

Sistema de agendamento do apartamento no Rio para as famílias (Maria José, Ângela Kadar, Cleia Said e Aloísio).

## O que tem
- 📊 **Painel**: quem está no apê agora / próxima estadia, agendamentos e pessoas agendadas por família
- 📅 **Calendário**: mês a mês, cada família com sua cor, dias passados mais claros
- 📝 **Reservas**: filtros (próximas, passadas, pendentes, por família)
- 💰 **Financeiro**: diária de R$ 70, total gerado, recebido, a receber, por família e por ano
- ⚙️ **Admin**: valor da diária, famílias (nome, cor, integrantes) e usuários

## Acessos
🌐 **Link público:** qualquer pessoa com o link vê painel, calendário, reservas e financeiro, sem login.

| Login | Pode |
|---|---|
| 👑 Administrador (`admin`) | tudo: reservas, confirmar pagamentos, diária, famílias e os dois logins |
| ✏️ Editor (`editor`) | marcar, editar e cancelar reservas de qualquer família |

O nome, o usuário e a senha dos dois logins podem ser trocados na aba ⚙️ Admin.

## Tecnologia
- `public/index.html` — interface (HTML + JS puro, mobile-first)
- `netlify/functions/api.mts` — API (login, reservas, pagamentos, usuários)
- Dados salvos no **Netlify Blobs** (loja `apto-rio`)

## Variáveis de ambiente (já configuradas no projeto Netlify `ape-do-rio-familias`)
- `AUTH_SECRET` — chave que assina os logins
- `ADMIN_PASSWORD` — senha do primeiro acesso do usuário `admin`
- `EDITOR_PASSWORD` — senha do primeiro acesso do usuário `editor`

## Publicar
**Opção A — terminal (computador):**
```bash
cd ape-do-rio
npm install
npx netlify-cli login
npx netlify-cli deploy --prod --site ccb5bbab-d1dc-4cce-88a1-64a2666ef108
```

**Opção B — GitHub:** suba esta pasta para um repositório e, no Netlify, abra o projeto
`ape-do-rio-familias` → *Project configuration → Build & deploy → Link repository*.
Build command: (vazio) · Publish directory: `public` · Functions: `netlify/functions`.

## Primeiro acesso
Toque em 🔑 Entrar → usuário `admin` + a senha de `ADMIN_PASSWORD`. Depois troque a senha em 👤 Minha conta.
O editor entra com `editor` + a senha de `EDITOR_PASSWORD` (o admin pode mudar isso em ⚙️ Admin → Logins).

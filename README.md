# 🏖️ Apê do Rio — Agenda das Famílias

Sistema de agendamento do apartamento no Rio para as famílias (Maria José, Ângela Kadar, Cleia Said e Aloísio).

## O que tem
- 📊 **Painel**: quem está no apê agora / próxima estadia, agendamentos e pessoas agendadas por família
- 📅 **Calendário**: mês a mês, cada família com sua cor, dias passados mais claros e feriados destacados (nacionais, do Rio e datas de alta procura como Ano Novo, Carnaval e Natal — calculados automaticamente para qualquer ano)
- 📝 **Reservas**: filtros (próximas, passadas, pendentes, por família)
- 💰 **Financeiro**: diária de R$ 70, total gerado, recebido, a receber, por família e por ano
- ⚙️ **Admin**: valor da diária, famílias (nome, cor, integrantes) e usuários

## Regras de marcação
- Cada família pode ter até **2 marcações em aberto de tempo comum** e **2 de feriado** (ajustável em Ajustes → Cobrança e regras).
- Uma reserva que inclui qualquer feriado (da entrada à saída) conta como feriado.
- A vaga é liberada quando a estadia termina (passa o dia da saída).
- Duração máxima por estadia: **10 diárias** (com ou sem feriado) e **6 diárias em janeiro e julho**. Ajustável em Ajustes.
- A regra é verificada no servidor; o formulário mostra as vagas e avisa antes de salvar.

## Réveillon (Ano Novo)
- Sequência fixa entre as famílias (padrão: Ângela → Aloísio → Maria José → Cleia → recomeça), a partir do Réveillon 2025→2026 (Ângela).
- Só a família da vez pode marcar uma estadia que inclua a noite de 31/12. Quem não vai, perde a vez (a sequência anda todo ano).
- Ir fora da ordem só com **troca registrada** (admin ou editor, no quadro do Réveillon do Painel). O admin pode desfazer trocas.
- O quadro do Réveillon (vez do ano, histórico, sequência e trocas) é visível para todos, inclusive sem login.
- Ordem e ano de referência editáveis em Ajustes → Sequência do Réveillon.

## Acessos
🌐 **Link público:** qualquer pessoa com o link vê painel, calendário e reservas, sem login. Valores, diária e pagamentos (aba Financeiro) só aparecem para admin e editor — o servidor nem envia esses dados para quem não está logado.

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

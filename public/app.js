/* =========================================================
   Ícones (traço fino)
   ========================================================= */
const IC={
  logo:'<circle cx="12" cy="10" r="3.6"/><path d="M3 17c2.25 0 2.25-1.6 4.5-1.6S9.75 17 12 17s2.25-1.6 4.5-1.6S18.75 17 21 17"/>',
  grid:'<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
  cal:'<rect x="3.5" y="4.5" width="17" height="16" rx="2.5"/><path d="M16 2.5v4M8 2.5v4M3.5 10h17"/>',
  list:'<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r=".8"/><circle cx="4.5" cy="12" r=".8"/><circle cx="4.5" cy="18" r=".8"/>',
  wallet:'<path d="M4 7.5V18a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1v-3"/><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H17v2.5"/><path d="M4 7.5h15a1 1 0 0 1 1 1V12h-3.5a2 2 0 0 0 0 4H20"/>',
  sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  minus:'<path d="M5 12h14"/>',
  login:'<path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/><path d="m10 16 4-4-4-4M14 12H4"/>',
  logout:'<path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"/><path d="m16 16 4-4-4-4M20 12H10"/>',
  left:'<path d="m15 18-6-6 6-6"/>',
  right:'<path d="m9 18 6-6-6-6"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  edit:'<path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
  trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/>',
  undo:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
  shield:'<path d="M12 21s7.5-3.5 7.5-9.5V5.5L12 3 4.5 5.5v6C4.5 17.5 12 21 12 21z"/><path d="m9 12 2 2 4-4"/>',
  pen:'<path d="M12 20h8"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
  lock:'<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  bed:'<path d="M3 18V6M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.6"/>',
  people:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
  star:'<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
  inbox:'<path d="M3.5 13.5 6 5h12l2.5 8.5V19a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z"/><path d="M3.5 13.5H8l1.5 2.5h5l1.5-2.5h4.5"/>',
};
const ic=(n,s=20,w=1.8)=>`<svg class="i" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;

/* paleta suave para as famílias */
const PALETTE=["#D4899A","#6EA6C4","#D3A867","#9A8DCB","#7DAF8E","#DB9478","#5FADA8","#8F9DB2"];

/* =========================================================
   Estado e utilidades
   ========================================================= */
const S={token:null,me:null,config:null,bookings:[],accounts:[],tab:"painel",cal:null,listFilter:"proximas",famFilter:null,finYear:"todos"};
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{v==null?localStorage.removeItem(k):localStorage.setItem(k,v)}catch(e){}}};
const $=(s,el=document)=>el.querySelector(s);
const $$=(s,el=document)=>[...el.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const money=n=>(n||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const moneyS=n=>(n||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:Number.isInteger(n||0)?0:2});
const pad=n=>String(n).padStart(2,"0");
const ymd=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const today=()=>ymd(new Date());
const parse=s=>{const[y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d)};
const addDays=(s,n)=>{const d=parse(s);d.setDate(d.getDate()+n);return ymd(d)};
const nights=(a,b)=>Math.round((parse(b)-parse(a))/86400000);
const MES=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const SEM=["dom","seg","ter","qua","qui","sex","sáb"];

/* ---------- feriados (calculados para qualquer ano) ---------- */
function easter(y){
  const a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),
    h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451);
  return new Date(y,Math.floor((h+l-7*m+114)/31)-1,((h+l-7*m+114)%31)+1);
}
const HOL_TYPE={nacional:"Feriado nacional",rio:"Feriado no Rio",carnaval:"Carnaval",facultativo:"Ponto facultativo",data:"Data especial"};
const _hc={};
function holidaysOfYear(y){
  if(_hc[y]) return _hc[y];
  const L=[],e=easter(y);
  const add=(m,d,name,short,type,top)=>L.push({date:`${y}-${pad(m)}-${pad(d)}`,name,short,type,top:!!top});
  const rel=(n,name,short,type,top)=>{const d=new Date(e);d.setDate(d.getDate()+n);L.push({date:ymd(d),name,short,type,top:!!top})};
  add(1,1,"Ano Novo (Confraternização Universal)","Ano Novo","nacional",true);
  add(1,20,"São Sebastião, padroeiro do Rio","S. Sebastião","rio");
  rel(-48,"Carnaval (segunda-feira)","Carnaval","carnaval",true);
  rel(-47,"Carnaval (terça-feira)","Carnaval","carnaval",true);
  rel(-46,"Quarta-feira de Cinzas","Cinzas","facultativo");
  rel(-2,"Sexta-feira Santa","Sexta Santa","nacional");
  rel(0,"Páscoa","Páscoa","data");
  add(4,21,"Tiradentes","Tiradentes","nacional");
  add(4,23,"Dia de São Jorge","São Jorge","rio");
  add(5,1,"Dia do Trabalho","Trabalho","nacional");
  rel(60,"Corpus Christi","Corpus Christi","facultativo");
  add(9,7,"Independência do Brasil","Independência","nacional");
  add(10,12,"Nossa Senhora Aparecida","Aparecida","nacional");
  add(11,2,"Finados","Finados","nacional");
  add(11,15,"Proclamação da República","República","nacional");
  add(11,20,"Dia da Consciência Negra","Consc. Negra","nacional");
  add(12,24,"Véspera de Natal","Véspera","data",true);
  add(12,25,"Natal","Natal","nacional",true);
  add(12,31,"Réveillon (véspera de Ano Novo)","Réveillon","data",true);
  return _hc[y]=L.sort((a,b)=>a.date.localeCompare(b.date));
}
const holOn=s=>holidaysOfYear(+s.slice(0,4)).filter(x=>x.date===s);
function holBetween(a,b){ /* feriados de a até b, inclusive */
  const out=[];for(let y=+a.slice(0,4);y<=+b.slice(0,4);y++) out.push(...holidaysOfYear(y).filter(x=>x.date>=a&&x.date<=b));return out;
}
const holNames=list=>[...new Set(list.map(x=>x.short))].join(", ");
const bookingsOn=s=>S.bookings.filter(b=>b.checkIn<=s&&s<b.checkOut);

/* ---------- regra de marcações ----------
   Cada família pode ter até maxCommon marcações EM ABERTO de tempo comum e até maxHoliday
   de feriado. A vaga é liberada quando a estadia termina (passa o dia da saída). */
const isHolBooking=b=>holBetween(b.checkIn,b.checkOut).length>0;
const limits=()=>({common:S.config.maxCommon??2,hol:S.config.maxHoliday??2});
function openOf(famId,ignoreId){
  const t=today(),bs=S.bookings.filter(b=>b.familyId===famId&&b.id!==ignoreId&&b.checkOut>t);
  return{common:bs.filter(b=>!isHolBooking(b)),hol:bs.filter(isHolBooking)};
}
/* duração máxima: janeiro e julho → maxNightsPeak; tempo comum → maxNightsCommon; feriado fora disso → sem limite */
function touchesPeak(a,b){for(let d=a;d<b;d=addDays(d,1)){const m=+d.slice(5,7);if(m===1||m===7)return true}return false}
function maxNightsFor(a,b,isHol){
  if(touchesPeak(a,b)) return{max:S.config.maxNightsPeak??6,why:"janeiro e julho"};
  if(!isHol) return{max:S.config.maxNightsCommon??10,why:"tempo comum"};
  return{max:0,why:"feriado"};
}
const quotaTxt=(n,lim)=>lim>0?`${n}/${lim}`:`${n}`;

/* ---------- Réveillon: sequência entre as famílias ----------
   Ano Y = Réveillon da noite de 31/12/Y para 01/01/(Y+1). A vez segue a ordem a cada ano;
   quem não vai perde a vez; só dá para ir fora da ordem com troca registrada. */
const NY=()=>S.newYear||{order:[],anchorYear:2025,anchorFamily:"",sinceYear:2026,swaps:[]};
function nyOwners(years){
  const ny=NY(),order=ny.order.filter(id=>S.config.families.some(f=>f.id===id)),n=order.length,start=Math.max(0,order.indexOf(ny.anchorFamily));
  const base=y=>n?order[(((start+(y-ny.anchorYear))%n)+n)%n]:"";
  const m={},get=y=>(m[y]??=base(y));
  for(const s of ny.swaps){const A=get(s.a),B=get(s.b);m[s.a]=B;m[s.b]=A}
  years.forEach(get);return m;
}
const nyOwner=y=>nyOwners([y])[y];
function nyYearsIn(a,b){const out=[];for(let y=+a.slice(0,4);y<=+b.slice(0,4);y++){const d=`${y}-12-31`;if(a<=d&&d<b)out.push(y)}return out}
const nyBooking=y=>S.bookings.find(b=>nyYearsIn(b.checkIn,b.checkOut).includes(y));
const nySwapOf=y=>NY().swaps.filter(s=>s.a===y||s.b===y).slice(-1)[0];
const nyLabel=y=>`${y} → ${y+1}`;
const curNY=()=>+today().slice(0,4);
function newYearSection(){
  const ny=NY(),cy=curNY();if(!ny.order.length) return "";
  const owner=nyOwner(cy),f=fam(owner),bk=nyBooking(cy),sw=nySwapOf(cy);
  const other=s=>s?fam(s.a===cy?s.famB:s.famA).name:"";
  const now=bk?`<span class="pill acc">Marcado</span><span>${range(bk.checkIn,bk.checkOut)} · ${esc(bk.responsible)}</span>`
    :`<span class="pill warn">Ainda não marcou</span><span>${cy===+today().slice(0,4)&&today()>`${cy}-12-31`?"":"A família da vez pode marcar a qualquer momento."}</span>`;
  const rows=[];
  for(let y=cy-2;y<=cy+4;y++){
    if(y<ny.anchorYear) continue;
    const o=nyOwner(y),fo=fam(o),b=nyBooking(y),s=nySwapOf(y);
    let st;
    if(y<cy) st=b?`<span class="pill ok">Foi${b.familyId!==o?": "+esc(fam(b.familyId).name):""}</span>`:y<ny.sinceYear?`<span class="pill ok">Foi</span>`:`<span class="pill mute">Não foi · perdeu a vez</span>`;
    else if(y===cy) st=b?`<span class="pill acc">Marcado</span>`:`<span class="pill warn">Da vez</span>`;
    else st=b?`<span class="pill acc">Marcado</span>`:"";
    rows.push(`<div class="ny-row ${y===cy?"cur":""} ${y<cy?"past":""}" style="--fc:${fo.color}">
      <span class="ny-year num">${nyLabel(y)}</span>
      <span class="nm"><i class="dot"></i><span>${esc(fo.name)}</span>${s?`<span class="pill hot" title="Troca registrada">troca</span>`:""}</span>
      <span class="ny-side">${st}</span></div>`);
  }
  const swaps=ny.swaps.filter(s=>s.b>=cy).map(s=>`<div class="ny-swap">${ic("undo",16)}<span><b>${nyLabel(s.a)}</b> ↔ <b>${nyLabel(s.b)}</b>: ${esc(fam(s.famA).name)} e ${esc(fam(s.famB).name)} trocaram${s.by?` · por ${esc(s.by)}`:""}</span>${isAdmin()?`<button class="btn danger sm" data-unswap="${s.id}">Desfazer</button>`:""}</div>`).join("");
  const seq=ny.order.map(id=>esc(fam(id).name)).join(" → ");
  return `<section class="sec">
    <div class="sec-head"><h2>Réveillon</h2>${S.me?`<button class="link" id="nySwapBtn">${ic("undo",16)} Registrar troca</button>`:""}</div>
    <div class="card ny">
      <div class="ny-now" style="--fc:${f.color}">
        <div class="eyebrow">Réveillon ${nyLabel(cy)} · vez de</div>
        <div class="ny-fam"><i class="dot"></i>${esc(f.name)}</div>
        <div class="ny-st">${now}</div>
        ${sw?`<div class="muted">Por troca com a família ${esc(other(sw))}.</div>`:""}
      </div>
      <div class="ny-list">${rows.join("")}</div>
      ${swaps?`<div class="ny-swaps"><div class="eyebrow">Trocas registradas</div>${swaps}</div>`:""}
    </div>
    <p class="muted" style="display:flex;gap:6px;align-items:flex-start">${ic("info",16)}<span>Sequência: ${seq} → recomeça. Quem não vai perde a vez. Para ir fora da ordem, as famílias registram uma troca.</span></p>
  </section>`;
}
function bindNewYear(v){
  const sb=$("#nySwapBtn",v);if(sb) sb.onclick=openSwap;
  $$("[data-unswap]",v).forEach(b=>armConfirm(b,"Confirmar",async()=>{
    try{await api("newyear/swaps/"+b.dataset.unswap,{method:"DELETE"});toast("Troca desfeita");await refresh()}catch(e){toast(e.message,"info")}
  }));
}
function openSwap(){
  const cy=curNY(),years=[];for(let y=cy;y<=cy+6;y++)years.push(y);
  const opt=sel=>years.map(y=>`<option value="${y}" ${y===sel?"selected":""}>${nyLabel(y)} · ${esc(fam(nyOwner(y)).name)}</option>`).join("");
  openSheet(`${sheetHead("Registrar troca do Réveillon")}
    <p class="muted" style="font-size:14px">As duas famílias trocam de ano entre si. É a única forma de uma família ir fora da ordem.</p>
    <div class="form">
      <div id="swErr" class="err hidden"></div>
      <label class="field"><span>Réveillon<span class="req">*</span></span><select id="swA">${opt(cy)}</select></label>
      <label class="field"><span>Troca com o Réveillon<span class="req">*</span></span><select id="swB">${opt(cy+1)}</select></label>
      <div class="hol-note" id="swPrev"></div>
      <button class="btn full" id="swSave">${ic("check",18,2.2)}Registrar troca</button>
    </div>`);
  const prev=()=>{const a=+$("#swA").value,b=+$("#swB").value,oa=nyOwner(a),ob=nyOwner(b);
    $("#swSave").disabled=a===b||oa===ob;
    $("#swPrev").innerHTML=ic("star",18,2)+(a===b?"<span>Escolha dois anos diferentes.</span>":oa===ob?"<span>Esses dois anos já são da mesma família.</span>"
      :`<span>Com a troca, o Réveillon ${nyLabel(a)} fica com <b>${esc(fam(ob).name)}</b> e o ${nyLabel(b)} fica com <b>${esc(fam(oa).name)}</b>.</span>`)};
  $("#swA").onchange=prev;$("#swB").onchange=prev;prev();
  $("#swSave").onclick=async()=>{
    try{await api("newyear/swaps",{method:"POST",body:{a:+$("#swA").value,b:+$("#swB").value}});closeSheet();toast("Troca registrada");await refresh()}
    catch(e){$("#swErr").textContent=e.message;$("#swErr").classList.remove("hidden")}
  };
}
const yr=d=>d.getFullYear()!==new Date().getFullYear()?` ${d.getFullYear()}`:"";
const dm=s=>{const d=parse(s);return `${d.getDate()} ${MES[d.getMonth()]}${yr(d)}`};
const dmw=s=>{const d=parse(s);return `${SEM[d.getDay()]}, ${d.getDate()} ${MES[d.getMonth()]}${yr(d)}`};
const range=(a,b)=>{const A=parse(a),B=parse(b);return (A.getMonth()===B.getMonth()&&A.getFullYear()===B.getFullYear())?`${A.getDate()} – ${B.getDate()} ${MES[B.getMonth()]}${yr(B)}`:`${dm(a)} – ${dm(b)}`};
const plural=(n,s,p)=>`${n} ${n===1?s:(p||s+"s")}`;
const ppl=b=>b.people?` · ${plural(b.people,"pessoa")}`:"";
const ROLE_NAME={admin:"Administrador",editor:"Editor"};
const fam=id=>S.config.families.find(f=>f.id===id)||{id,name:"Família removida",color:"#A0A8AD",members:[]};
const initials=s=>s.split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]).join("").toUpperCase();
const isAdmin=()=>S.me?.role==="admin";
const canBook=()=>!!S.me;
const canSeeMoney=()=>!!S.me; /* financeiro: só administrador e editor */
const statusOf=b=>{const t=today();return b.checkOut<=t?"past":b.checkIn<=t?"now":"future"};

function toast(msg,icon="check"){
  $$(".toast").forEach(x=>x.remove());
  const t=document.createElement("div");t.className="toast";t.innerHTML=ic(icon,18)+`<span>${esc(msg)}</span>`;
  document.body.appendChild(t);setTimeout(()=>t.remove(),2600);
}
/* confirmação em dois toques (no lugar de confirm()) */
function armConfirm(btn,label,fn){
  btn.onclick=()=>{
    if(btn.classList.contains("armed")) return fn();
    const old=btn.innerHTML;btn.classList.add("armed");btn.innerHTML=ic("trash",18)+label;
    setTimeout(()=>{if(btn.isConnected){btn.classList.remove("armed");btn.innerHTML=old}},4000);
  };
}

/* =========================================================
   API
   ========================================================= */
async function api(path,opts={}){
  const res=await fetch("/api/"+path,{method:opts.method||"GET",
    headers:{"content-type":"application/json",...(S.token?{authorization:"Bearer "+S.token}:{})},
    body:opts.body?JSON.stringify(opts.body):undefined});
  const data=await res.json().catch(()=>({error:"Sem conexão. Verifique a internet e tente de novo."}));
  if(res.status===401&&path!=="login"){setToken(null);closeSheet();await refresh();throw new Error(data.error||"Sessão expirada. Entre de novo.")}
  if(!res.ok) throw new Error(data.error||"Algo deu errado.");
  return data;
}
function setToken(t){S.token=t;store.set("apto_token",t)}
async function load(){
  const d=await api("state");
  S.me=d.me;S.config=d.config;S.bookings=d.bookings;S.accounts=d.accounts||[];S.newYear=d.newYear||null;
  if(S.token&&!S.me) setToken(null);
}
async function refresh(){try{await load();render()}catch(e){}}

/* =========================================================
   Estrutura geral
   ========================================================= */
const TABS=[["painel","grid","Painel"],["calendario","cal","Calendário"],["reservas","list","Reservas"],["financeiro","wallet","Financeiro"],["admin","sliders","Ajustes"]];
$("#brandMark").innerHTML=ic("logo",22,2);
function render(){
  if(S.tab==="admin"&&!isAdmin()) S.tab="painel";
  if(S.tab==="financeiro"&&!canSeeMoney()) S.tab="painel";
  $("#meBtn").innerHTML=S.me?`<span class="av">${esc(initials(S.me.name))}</span><span>${esc(S.me.name.split(" ")[0])}</span>`:`${ic("login",18)}<span>Entrar</span>`;
  $("#roleLabel").textContent=S.me?`Conectado como ${ROLE_NAME[S.me.role].toLowerCase()}`:"Agenda das famílias";
  $("#tabs").innerHTML=TABS.filter(([k])=>(k!=="admin"||isAdmin())&&(k!=="financeiro"||canSeeMoney())).map(([k,i,l])=>`<button data-tab="${k}" class="${S.tab===k?"on":""}">${ic(i,22)}<span>${l}</span></button>`).join("");
  $("#fab").innerHTML=ic("plus",20,2.2)+"<span>Nova reserva</span>";
  $("#fab").classList.toggle("hidden",!canBook()||S.tab==="admin");
  ({painel:renderPainel,calendario:renderCalendario,reservas:renderReservas,financeiro:renderFinanceiro,admin:renderAdmin})[S.tab]($("#view"));
}
$("#tabs").addEventListener("click",e=>{const b=e.target.closest("[data-tab]");if(!b)return;S.tab=b.dataset.tab;store.set("apto_tab",S.tab);render();window.scrollTo({top:0})});
$("#fab").onclick=()=>openBooking();
$("#meBtn").onclick=()=>S.me?openMe():openLogin();

/* ---------- item de reserva ---------- */
function bookingItem(b){
  const f=fam(b.familyId),d=parse(b.checkIn),st=statusOf(b);
  const money_=canSeeMoney();
  const pill=st==="now"?`<span class="pill acc">Hospedados</span>`:!money_?(st==="past"?`<span class="pill mute">Concluída</span>`:`<span class="pill mute">Agendada</span>`):b.paid?`<span class="pill ok">Pago</span>`:`<span class="pill warn">Pendente</span>`;
  return `<button class="bk ${st==="past"?"past":""}" style="--fc:${f.color}" data-open="${b.id}">
    <span class="bk-date"><b class="num">${d.getDate()}</b><small>${MES[d.getMonth()]}</small></span>
    <span class="bk-main">
      <span class="bk-fam"><i class="dot"></i><span>${esc(f.name)}</span></span>
      <span class="bk-sub">${range(b.checkIn,b.checkOut)} · ${plural(b.nights,"diária")}</span>
      <span class="bk-sub">${esc(b.responsible)}${ppl(b)}</span>
      ${(()=>{const hs=holBetween(b.checkIn,b.checkOut);return hs.length?`<span class="bk-hol">${ic("star",13,2)}${esc(holNames(hs))}</span>`:""})()}
    </span>
    <span class="bk-side">${money_?`<b class="num">${moneyS(b.amount)}</b>`:""}${pill}</span>
  </button>`;
}
const listOf=(arr,emptyMsg,emptyIc="inbox")=>arr.length?`<div class="list card">${arr.map(bookingItem).join("")}</div>`:`<div class="card empty"><span class="ei">${ic(emptyIc,22)}</span>${emptyMsg}</div>`;
function holidayRows(list){
  return list.map(x=>{
    const d=parse(x.date),bs=bookingsOn(x.date);
    const nyY=x.date.endsWith("-12-31")?+x.date.slice(0,4):x.date.endsWith("-01-01")?+x.date.slice(0,4)-1:null;
    const side=bs.length?bs.map(b=>`<span class="pill mute" style="--fc:${fam(b.familyId).color}"><i class="dot"></i>${esc(fam(b.familyId).name)}</span>`).join("")
      :nyY!==null&&NY().order.length?`<span class="pill hot">Vez: ${esc(fam(nyOwner(nyY)).name)}</span>`:`<span class="pill ok">Livre</span>`;
    return `<button class="hrow ${x.top?"top":""}" data-hday="${x.date}" style="width:100%;text-align:left">
      <span class="hdate"><b class="num">${d.getDate()}</b><small>${MES[d.getMonth()]}</small></span>
      <span class="hmain"><b>${esc(x.name)}</b><span>${SEM[d.getDay()]} · ${HOL_TYPE[x.type]}${x.top?" · alta procura":""}</span></span>
      <span class="hside">${side}</span>
    </button>`;
  }).join("");
}
function bindItems(root){$$("[data-hday]",root).forEach(b=>b.onclick=()=>openDay(b.dataset.hday));$$("[data-open]",root).forEach(b=>b.onclick=()=>openDetail(b.dataset.open))}

/* =========================================================
   Painel
   ========================================================= */
function renderPainel(v){
  const t=today();
  const agora=S.bookings.find(b=>statusOf(b)==="now");
  const prox=S.bookings.filter(b=>b.checkIn>t);
  const fut=S.bookings.filter(b=>statusOf(b)!=="past");
  const destaque=agora||prox[0];

  let status;
  if(destaque){
    const f=fam(destaque.familyId),dias=agora?nights(t,destaque.checkOut):nights(t,destaque.checkIn);
    status=`<button class="card status" data-open="${destaque.id}" style="--fc:${f.color};width:100%;text-align:left">
      <div class="status-main">
        <span>${agora?`<span class="pill acc">No apartamento agora</span>`:`<span class="pill mute">Próxima estadia</span>`}</span>
        <div class="status-fam"><i class="dot"></i>${esc(f.name)}</div>
        <div class="status-meta">${range(destaque.checkIn,destaque.checkOut)} · ${plural(destaque.nights,"diária")} · ${esc(destaque.responsible)}</div>
      </div>
      <div class="status-count"><b class="num">${dias}</b><span>${agora?(dias===1?"dia para<br>a saída":"dias para<br>a saída"):(dias===1?"dia para<br>a chegada":"dias para<br>a chegada")}</span></div>
    </button>`;
  } else {
    status=`<div class="card status"><div class="status-main"><span><span class="pill ok">Apartamento livre</span></span>
      <div class="status-meta">Nenhuma estadia marcada.${canBook()?" Toque em Nova reserva para agendar.":""}</div></div></div>`;
  }
  const rows=S.config.families.map(f=>{
    const bs=S.bookings.filter(b=>b.familyId===f.id),o=openOf(f.id),L=limits();
    const q=(n,lim)=>`<div class="c num ${lim>0&&n>=lim?"full":""}">${quotaTxt(n,lim)}</div>`;
    return `<div class="n" style="--fc:${f.color}"><i class="dot"></i><span>${esc(f.name)}</span></div>
      <div class="c num">${bs.length}</div>${q(o.common.length,L.common)}${q(o.hol.length,L.hol)}`;
  }).join("");

  v.innerHTML=`
    ${status}
    <div class="card metrics">
      <div class="metric"><b class="num">${fut.length}</b><span>Reservas futuras</span></div>
      <div class="metric"><b class="num">${S.bookings.length}</b><span>Reservas no total</span></div>
      <div class="metric"><b class="num">${fut.reduce((s,b)=>s+b.nights,0)}</b><span>Diárias marcadas</span></div>
    </div>
    ${newYearSection()}
    <section class="sec">
      <div class="sec-head"><h2>Próximos feriados</h2><button class="link" data-go="calendario">Calendário ${ic("right",16)}</button></div>
      <div class="card list">${holidayRows(holBetween(t,addDays(t,400)).slice(0,4))}</div>
    </section>
    <section class="sec">
      <div class="sec-head"><h2>Por família</h2></div>
      <div class="card ftable">
        <div class="h n">Família</div><div class="h c">Reservas no total</div><div class="h c">Tempo comum em aberto</div><div class="h c">Feriados em aberto</div>
        ${rows}
      </div>
      <p class="muted" style="display:flex;gap:6px;align-items:flex-start">${ic("info",16)}<span>Cada família pode ter até ${limits().common||"∞"} marcações em aberto de tempo comum e ${limits().hol||"∞"} de feriado. A vaga é liberada quando a estadia termina. Duração máxima: ${(S.config.maxNightsCommon??10)||"∞"} diárias em tempo comum e ${(S.config.maxNightsPeak??6)||"∞"} em janeiro e julho.</span></p>
    </section>
    <section class="sec">
      <div class="sec-head"><h2>Próximas estadias</h2><button class="link" data-go="reservas">Ver todas ${ic("right",16)}</button></div>
      ${listOf(prox.slice(0,4),"Nenhuma estadia futura marcada.","cal")}
    </section>`;
  $$("[data-go]",v).forEach(b=>b.onclick=()=>{S.tab=b.dataset.go;render();window.scrollTo({top:0})});
  bindNewYear(v);
  bindItems(v);
}

/* =========================================================
   Calendário
   ========================================================= */
function renderCalendario(v){
  if(!S.cal){const d=new Date();S.cal={y:d.getFullYear(),m:d.getMonth()}}
  const{y,m}=S.cal,first=new Date(y,m,1),t=today();
  const start=new Date(first);start.setDate(1-first.getDay());
  const cellsN=Math.ceil((first.getDay()+new Date(y,m+1,0).getDate())/7)*7;
  const title=first.toLocaleDateString("pt-BR",{month:"long"});
  const mStart=ymd(first),mEnd=ymd(new Date(y,m+1,1));
  let cells="";
  for(let i=0;i<cellsN;i++){
    const d=new Date(start);d.setDate(start.getDate()+i);
    const s=ymd(d),inM=d.getMonth()===m,dow=d.getDay();
    const stays=bookingsOn(s),hs=holOn(s);
    const bars=stays.slice(0,2).map(b=>{
      const isS=b.checkIn===s||dow===0, isE=addDays(s,1)===b.checkOut||dow===6;
      const f=fam(b.familyId);
      return `<div class="bar ${isS?"s":""} ${isE?"e":""}" style="--fc:${f.color}">${isS?esc(f.name.split(" ")[0]):"&nbsp;"}</div>`;
    }).join("")+(stays.length>2?`<div class="more">+${stays.length-2}</div>`:"");
    const hol=hs.length&&inM?`<span class="hname">${esc(hs[0].short)}</span>`:"";
    cells+=`<button class="day ${inM?"":"out"} ${s<t?"past":""} ${s===t?"today":""} ${hs.length&&inM?"hol":""} ${hs.some(x=>x.top)&&inM?"top":""}" data-day="${s}" aria-label="${dmw(s)}${hs.length?" · "+esc(hs[0].name):""}"><span class="n num">${d.getDate()}</span>${bars}${hol}</button>`;
  }
  const monthBk=S.bookings.filter(b=>b.checkIn<mEnd&&b.checkOut>mStart);
  v.innerHTML=`
    <div class="cal-top">
      <h2>${title[0].toUpperCase()+title.slice(1)} <span style="color:var(--ink-3);font-weight:600">${y}</span></h2>
      <button class="btn-text" id="todayM">Hoje</button>
      <button class="ibtn" id="prevM" aria-label="Mês anterior">${ic("left",18)}</button>
      <button class="ibtn" id="nextM" aria-label="Próximo mês">${ic("right",18)}</button>
    </div>
    <div class="card cal">
      <div class="cal-dow">${SEM.map(d=>`<div>${d}</div>`).join("")}</div>
      <div class="cal-grid">${cells}</div>
    </div>
    <div class="legend">${S.config.families.map(f=>`<span style="--fc:${f.color}"><i class="dot"></i>${esc(f.name)}</span>`).join("")}
      <span><i class="lg-sw" style="background:var(--hol-bg)"></i>Feriado</span><span><i class="lg-sw" style="background:var(--hol-top)"></i>Alta procura</span></div>
    ${(()=>{const hm=holidaysOfYear(y).filter(x=>x.date>=mStart&&x.date<mEnd);return hm.length?`<section class="sec">
      <div class="sec-head"><h2>Feriados em ${MES[m]}</h2><span class="muted">${plural(hm.length,"data","datas")}</span></div>
      <div class="card list">${holidayRows(hm)}</div></section>`:""})()}
    <section class="sec">
      <div class="sec-head"><h2>Reservas em ${MES[m]}</h2><span class="muted">${plural(monthBk.length,"reserva")}</span></div>
      ${listOf(monthBk,"Nenhuma reserva neste mês.","cal")}
    </section>`;
  $("#prevM").onclick=()=>{S.cal.m--;if(S.cal.m<0){S.cal.m=11;S.cal.y--}render()};
  $("#nextM").onclick=()=>{S.cal.m++;if(S.cal.m>11){S.cal.m=0;S.cal.y++}render()};
  $("#todayM").onclick=()=>{S.cal=null;render()};
  $$("[data-day]",v).forEach(b=>b.onclick=()=>openDay(b.dataset.day));
  bindItems(v);
}
function openDay(s){
  const stays=bookingsOn(s),hs=holOn(s);
  const out=S.bookings.filter(b=>b.checkOut===s);
  const t=dmw(s);
  openSheet(`${sheetHead(t[0].toUpperCase()+t.slice(1))}
    ${hs.map(x=>`<div class="hol-note">${ic("star",18,2)}<span>${esc(x.name)} · ${HOL_TYPE[x.type]}${x.top?" · alta procura":""}</span></div>`).join("")}
    ${stays.length?`<div class="list card">${stays.map(bookingItem).join("")}</div>`:`<div class="card empty"><span class="ei">${ic("bed",22)}</span>Apartamento livre nesta noite.</div>`}
    ${out.length?`<p class="muted">Saída neste dia: ${out.map(b=>esc(fam(b.familyId).name)).join(", ")}</p>`:""}
    ${canBook()&&s>=today()?`<button class="btn full" id="bookDay">${ic("plus",18,2.2)}Reservar a partir deste dia</button>`:""}`);
  const bd=$("#bookDay");if(bd) bd.onclick=()=>openBooking(null,s);
  bindItems($(".sheet"));
}

/* =========================================================
   Reservas
   ========================================================= */
function renderReservas(v){
  const t=today();let list=S.bookings.slice();
  if(S.listFilter==="pendentes"&&!canSeeMoney()) S.listFilter="proximas";
  if(S.listFilter==="proximas") list=list.filter(b=>b.checkOut>t);
  if(S.listFilter==="passadas") list=list.filter(b=>b.checkOut<=t).reverse();
  if(S.listFilter==="pendentes") list=list.filter(b=>!b.paid);
  if(S.famFilter) list=list.filter(b=>b.familyId===S.famFilter);
  v.innerHTML=`
    <section class="sec">
      <div class="seg" role="tablist">${[["proximas","Próximas"],["passadas","Passadas"],["pendentes","Pendentes"],["todas","Todas"]].filter(([k])=>k!=="pendentes"||canSeeMoney()).map(([k,l])=>`<button class="${S.listFilter===k?"on":""}" data-lf="${k}">${l}</button>`).join("")}</div>
      <div class="chips">
        <button class="chip ${!S.famFilter?"on":""}" data-ff="">Todas as famílias</button>
        ${S.config.families.map(f=>`<button class="chip fam ${S.famFilter===f.id?"on":""}" style="--fc:${f.color}" data-ff="${f.id}"><i class="dot"></i>${esc(f.name)}</button>`).join("")}
      </div>
    </section>
    <section class="sec">
      <div class="sec-head"><h2>${{proximas:"Próximas reservas",passadas:"Reservas passadas",pendentes:"Pagamento pendente",todas:"Todas as reservas"}[S.listFilter]}</h2><span class="muted">${plural(list.length,"reserva")}</span></div>
      ${listOf(list,"Nenhuma reserva com esse filtro.")}
    </section>`;
  $$("[data-lf]",v).forEach(b=>b.onclick=()=>{S.listFilter=b.dataset.lf;render()});
  $$("[data-ff]",v).forEach(b=>b.onclick=()=>{S.famFilter=b.dataset.ff||null;render()});
  bindItems(v);
}

/* =========================================================
   Financeiro
   ========================================================= */
function renderFinanceiro(v){
  const years=[...new Set(S.bookings.map(b=>b.checkIn.slice(0,4)))].sort();
  const bs=S.finYear==="todos"?S.bookings:S.bookings.filter(b=>b.checkIn.startsWith(S.finYear));
  const total=bs.reduce((s,b)=>s+b.amount,0),pago=bs.filter(b=>b.paid).reduce((s,b)=>s+b.amount,0);
  const pend=bs.filter(b=>!b.paid);
  const pct=total?Math.round(pago/total*100):0;
  v.innerHTML=`
    <div class="chips">${["todos",...years].map(y=>`<button class="chip ${S.finYear===y?"on":""}" data-fy="${y}">${y==="todos"?"Todos os anos":y}</button>`).join("")}</div>
    <div class="card">
      <div class="fin-total">
        <div><div class="eyebrow">Total das reservas</div><div class="big num">${money(total)}</div><div class="muted">${plural(bs.length,"reserva")} · ${plural(bs.reduce((s,b)=>s+b.nights,0),"diária")}</div></div>
        <div class="prog" title="${pct}% recebido"><i style="width:${pct}%"></i></div>
        <div class="fin-split">
          <div><span class="lbl"><i style="background:var(--ok)"></i>Recebido</span><b class="num" style="color:var(--ok)">${money(pago)}</b></div>
          <div><span class="lbl"><i style="background:var(--line)"></i>A receber</span><b class="num" style="color:${total-pago?"var(--warn)":"var(--ink-3)"}">${money(total-pago)}</b></div>
        </div>
      </div>
      <div class="rate-line" style="border-top:1px solid var(--line-2)">${ic("bed",18)}<span>Diária atual: <b class="num">${money(S.config.dailyRate)}</b> por dia, por reserva</span></div>
    </div>
    <section class="sec">
      <div class="sec-head"><h2>Por família</h2></div>
      <div class="card">${S.config.families.map(f=>{
        const x=bs.filter(b=>b.familyId===f.id),t=x.reduce((s,b)=>s+b.amount,0),p=x.filter(b=>b.paid).reduce((s,b)=>s+b.amount,0);
        return `<div class="frow" style="--fc:${f.color}">
          <div class="frow-top"><i class="dot"></i><span class="nm">${esc(f.name)}</span><span class="vl num">${money(t)}</span></div>
          <div class="prog"><i style="width:${t?Math.round(p/t*100):0}%"></i></div>
          <div class="frow-sub"><span>${plural(x.length,"reserva")} · ${plural(x.reduce((s,b)=>s+b.nights,0),"diária")}</span><span class="num">${t-p?`Pendente ${money(t-p)}`:t?"Tudo pago":"Sem reservas"}</span></div>
        </div>`}).join("")}</div>
    </section>
    <section class="sec">
      <div class="sec-head"><h2>Pagamentos pendentes</h2><span class="muted">${plural(pend.length,"reserva")}</span></div>
      ${listOf(pend,"Tudo pago. Nenhuma pendência.","check")}
      ${S.me&&!isAdmin()?`<p class="muted" style="display:flex;gap:6px;align-items:center">${ic("info",16)}Pagamentos são confirmados pelo administrador.</p>`:""}
    </section>`;
  $$("[data-fy]",v).forEach(b=>b.onclick=()=>{S.finYear=b.dataset.fy;render()});
  bindItems(v);
}

/* =========================================================
   Ajustes (administrador)
   ========================================================= */
function renderAdmin(v){
  const c=S.config;
  v.innerHTML=`
    <section class="sec">
      <div class="sec-head"><h2>Cobrança e regras</h2></div>
      <div class="card">
        <div class="setting">
          <label class="field"><span>Valor da diária (R$)</span><input type="number" min="0" step="1" id="cfgRate" value="${c.dailyRate}" inputmode="decimal"></label>
          <div class="row2">
            <label class="field"><span>Máx. em aberto: tempo comum</span><input type="number" min="0" max="50" step="1" id="cfgMaxCommon" value="${c.maxCommon??2}" inputmode="numeric"></label>
            <label class="field"><span>Máx. em aberto: feriados</span><input type="number" min="0" max="50" step="1" id="cfgMaxHoliday" value="${c.maxHoliday??2}" inputmode="numeric"></label>
          </div>
          <p class="muted">Por família. Uma reserva que inclui qualquer feriado (da entrada à saída) conta como feriado. Use 0 para não limitar.</p>
          <div class="row2">
            <label class="field"><span>Máx. de diárias: tempo comum</span><input type="number" min="0" max="50" step="1" id="cfgMaxNightsCommon" value="${c.maxNightsCommon??10}" inputmode="numeric"></label>
            <label class="field"><span>Máx. de diárias: jan. e jul.</span><input type="number" min="0" max="50" step="1" id="cfgMaxNightsPeak" value="${c.maxNightsPeak??6}" inputmode="numeric"></label>
          </div>
          <p class="muted">Janeiro e julho valem para qualquer reserva com diária nesses meses, com ou sem feriado. Use 0 para não limitar.</p>
          <label class="check"><input type="checkbox" id="cfgOverlap" ${c.allowOverlap?"checked":""}>Permitir duas famílias no mesmo período</label>
          <p class="muted">A nova diária vale só para reservas feitas depois da mudança.</p>
          <button class="btn" id="saveCfg" style="align-self:flex-start">Salvar cobrança e regras</button>
        </div>
      </div>
    </section>
    <section class="sec">
      <div class="sec-head"><h2>Famílias e integrantes</h2><button class="link" id="addFam">${ic("plus",16)} Adicionar</button></div>
      ${(()=>{S.famTab=Math.min(Math.max(0,S.famTab||0),c.families.length-1);return ""})()}
      <div class="seg seg-scroll" id="famTabs" role="tablist">${c.families.map((f,i)=>`<button type="button" role="tab" class="${i===S.famTab?"on":""}" data-ftab="${i}" style="--fc:${f.color}"><i class="dot"></i><span>${esc(f.name.split(" ")[0])}</span></button>`).join("")}</div>
      <div class="card" id="famEdit">${c.families.map((f,i)=>`
        <div class="setting ${i===S.famTab?"":"hidden"}" data-i="${i}" data-color="${f.color}" role="tabpanel">
          <div class="row2" style="grid-template-columns:minmax(0,1fr) auto;align-items:end">
            <label class="field"><span>Nome da família</span><input id="famName${i}" data-k="name" value="${esc(f.name)}"></label>
            <button class="btn danger sm" data-rmfam="${i}" style="height:46px" aria-label="Remover família">${ic("trash",18)}</button>
          </div>
          <div class="field"><span>Cor</span><div class="swatches">${PALETTE.concat(PALETTE.includes(f.color.toUpperCase())?[]:[f.color]).map(col=>`<button type="button" style="--sw:${col}" class="${col.toUpperCase()===f.color.toUpperCase()?"on":""}" data-sw="${col}" aria-label="Cor ${col}"></button>`).join("")}</div></div>
          <label class="field"><span>Integrantes (um por linha) · <span class="muted" data-count>${plural(f.members.length,"integrante")}</span></span><textarea id="famMembers${i}" rows="${Math.max(4,Math.min(10,f.members.length+1))}" data-k="members" placeholder="Ex.: Tio João">${esc(f.members.join("\n"))}</textarea></label>
        </div>`).join("")}
      </div>
      <button class="btn" id="saveFams" style="align-self:flex-start">Salvar famílias</button>
    </section>
    <section class="sec">
      <div class="sec-head"><h2>Sequência do Réveillon</h2></div>
      <div class="card"><div class="setting">
        <div class="field"><span>Ordem das famílias</span><div id="nyOrder">${NY().order.map((id,i,arr)=>`<div class="ord-row" data-id="${id}" style="--fc:${fam(id).color}">
          <span class="num muted" style="width:18px">${i+1}</span><i class="dot"></i><span style="flex:1;font-weight:700">${esc(fam(id).name)}</span>
          <button class="ibtn" data-up="${i}" ${i===0?"disabled":""} aria-label="Subir">${ic("left",16)}</button>
          <button class="ibtn" data-down="${i}" ${i===arr.length-1?"disabled":""} aria-label="Descer">${ic("right",16)}</button></div>`).join("")}
          ${S.config.families.filter(f=>!NY().order.includes(f.id)).map(f=>`<div class="ord-row" style="--fc:${f.color}"><span class="num muted" style="width:18px">–</span><i class="dot"></i><span style="flex:1;font-weight:700">${esc(f.name)}</span><button class="btn ghost sm" data-addord="${f.id}">Incluir</button></div>`).join("")}
        </div></div>
        <div class="row2">
          <label class="field"><span>Ano de referência</span><input type="number" id="nyAnchorYear" min="2000" max="2100" value="${NY().anchorYear}" inputmode="numeric"></label>
          <label class="field"><span>Família desse Réveillon</span><select id="nyAnchorFam">${NY().order.map(id=>`<option value="${id}" ${id===NY().anchorFamily?"selected":""}>${esc(fam(id).name)}</option>`).join("")}</select></label>
        </div>
        <p class="muted">Ex.: Réveillon de ${NY().anchorYear} → ${NY().anchorYear+1} foi da família ${esc(fam(NY().anchorFamily).name)}. Os anos seguintes seguem a ordem acima. Trocas são registradas no Painel.</p>
        <button class="btn" id="saveNY" style="align-self:flex-start">Salvar sequência</button>
      </div></div>
    </section>
    <section class="sec">
      <div class="sec-head"><h2>Logins</h2></div>
      <div class="card">
        ${S.accounts.map(a=>`<div class="acc-row">
          <span class="acc-ic">${ic(a.role==="admin"?"shield":"pen",20)}</span>
          <div class="acc-main"><b>${esc(a.name)} <span class="pill ${a.role==="admin"?"acc":"mute"}" style="margin-left:4px">${ROLE_NAME[a.role]}</span></b>
            <span>Usuário: <strong>${esc(a.username)}</strong>${a.active?"":" · ainda não ativado"}</span>
            <span>${a.role==="admin"?"Reservas, pagamentos, famílias, diária e logins":"Marca, edita e cancela reservas"}</span></div>
          <button class="btn ghost sm" data-acc="${a.role}">Editar</button>
        </div>`).join("")}
      </div>
      <p class="muted" style="display:flex;gap:6px;align-items:flex-start">${ic("info",16)}<span>Qualquer pessoa com o link vê a agenda. Só esses dois logins podem fazer alterações.</span></p>
    </section>`;

  $("#saveCfg").onclick=async()=>{
    try{await api("config",{method:"PUT",body:{...S.config,dailyRate:Number($("#cfgRate").value),maxCommon:Number($("#cfgMaxCommon").value),maxHoliday:Number($("#cfgMaxHoliday").value),maxNightsCommon:Number($("#cfgMaxNightsCommon").value),maxNightsPeak:Number($("#cfgMaxNightsPeak").value),allowOverlap:$("#cfgOverlap").checked}});toast("Cobrança e regras salvas");await refresh()}catch(e){toast(e.message,"info")}
  };
  const readFams=()=>$$("#famEdit [data-i]").map(el=>{
    const f=S.config.families[+el.dataset.i]||{};
    return{id:f.id,name:$('[data-k="name"]',el).value,color:el.dataset.color,members:$('[data-k="members"]',el).value.split("\n").map(s=>s.trim()).filter(Boolean)};
  });
  $$("[data-sw]",v).forEach(b=>b.onclick=()=>{const box=b.closest("[data-i]");box.dataset.color=b.dataset.sw;$$("[data-sw]",box).forEach(x=>x.classList.toggle("on",x===b));
    const tab=$(`[data-ftab="${box.dataset.i}"]`,v);if(tab)tab.style.setProperty("--fc",b.dataset.sw)});
  /* abas das famílias: troca sem recarregar, para não perder o que foi digitado */
  $$("[data-ftab]",v).forEach(t=>t.onclick=()=>{S.famTab=+t.dataset.ftab;
    $$("[data-ftab]",v).forEach(x=>x.classList.toggle("on",x===t));
    $$("#famEdit [data-i]",v).forEach(p=>p.classList.toggle("hidden",+p.dataset.i!==S.famTab))});
  $$("#famEdit [data-i]",v).forEach(p=>{const i=p.dataset.i,tab=$(`[data-ftab="${i}"] span`,v);
    $('[data-k="name"]',p).oninput=e=>{if(tab)tab.textContent=e.target.value.split(" ")[0]||"Família"};
    $('[data-k="members"]',p).oninput=e=>{$("[data-count]",p).textContent=plural(e.target.value.split("\n").map(s=>s.trim()).filter(Boolean).length,"integrante")}});
  $("#saveFams").onclick=async()=>{try{await api("config",{method:"PUT",body:{...S.config,families:readFams()}});toast("Famílias salvas");await refresh()}catch(e){toast(e.message,"info")}};
  $("#addFam").onclick=()=>{
    const used=S.config.families.map(f=>f.color.toUpperCase());
    S.config.families=[...readFams(),{id:"familia-"+Date.now().toString(36),name:"Nova família",color:PALETTE.find(p=>!used.includes(p))||PALETTE[0],members:[]}];
    S.famTab=S.config.families.length-1;render();toast("Preencha e toque em Salvar famílias","info");
  };
  $$("[data-rmfam]",v).forEach(b=>{
    const i=+b.dataset.rmfam,f=S.config.families[i];
    if(S.bookings.some(x=>x.familyId===f.id)){b.onclick=()=>toast("Essa família tem reservas e não pode ser removida","info");return}
    armConfirm(b,"",()=>{const fs=readFams();fs.splice(i,1);S.config.families=fs;S.famTab=Math.max(0,i-1);render();toast("Toque em Salvar famílias para confirmar","info")});
  });
  $$("[data-acc]",v).forEach(b=>b.onclick=()=>openAccount(S.accounts.find(a=>a.role===b.dataset.acc)));
  /* sequência do Réveillon */
  const ord=()=>$$("#nyOrder [data-id]").map(x=>x.dataset.id);
  const mv=(i,d)=>{const o=ord();[o[i],o[i+d]]=[o[i+d],o[i]];S.newYear={...NY(),order:o};render()};
  $$("[data-up]",v).forEach(b=>b.onclick=()=>mv(+b.dataset.up,-1));
  $$("[data-down]",v).forEach(b=>b.onclick=()=>mv(+b.dataset.down,1));
  $$("[data-addord]",v).forEach(b=>b.onclick=()=>{S.newYear={...NY(),order:[...ord(),b.dataset.addord]};render()});
  $("#saveNY").onclick=async()=>{
    try{await api("newyear",{method:"PUT",body:{order:ord(),anchorYear:+$("#nyAnchorYear").value,anchorFamily:$("#nyAnchorFam").value}});toast("Sequência salva");await refresh()}
    catch(e){toast(e.message,"info")}
  };
}

/* =========================================================
   Folhas
   ========================================================= */
function openSheet(html){
  closeSheet();
  const bg=document.createElement("div");bg.className="sheet-bg";
  bg.innerHTML=`<div class="sheet" role="dialog" aria-modal="true"><div class="grab"></div>${html}</div>`;
  bg.addEventListener("click",e=>{if(e.target===bg||e.target.closest("[data-close]"))closeSheet()});
  document.body.appendChild(bg);document.body.style.overflow="hidden";
}
function closeSheet(){$$(".sheet-bg").forEach(x=>x.remove());document.body.style.overflow=""}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeSheet()});
function sheetHead(t){return `<div class="sheet-h"><h3>${t}</h3><button class="x" data-close aria-label="Fechar">${ic("x",18)}</button></div>`}

/* ---------- detalhes da reserva ---------- */
function openDetail(id){
  const b=S.bookings.find(x=>x.id===id);if(!b)return;
  const f=fam(b.familyId),st=statusOf(b);
  const row=(k,val)=>val?`<div><dt>${k}</dt><dd>${val}</dd></div>`:"";
  openSheet(`${sheetHead(`<span class="sheet-fam" style="--fc:${f.color}"><i class="dot"></i>${esc(f.name)}</span>`)}
    <dl class="dl">
      ${row("Entrada",dmw(b.checkIn))}
      ${row("Saída",dmw(b.checkOut))}
      ${row("Diárias",canSeeMoney()?`${b.nights} × ${money(b.rate)}`:String(b.nights))}
      ${b.people?row("Pessoas",String(b.people)):""}
      ${row("Responsável",esc(b.responsible))}
      ${row("Quem vai",esc(b.guestNames))}
      ${row("Observações",esc(b.notes))}
      ${canSeeMoney()?row("Valor",`<span class="num">${money(b.amount)}</span>`):""}
      ${canSeeMoney()?row("Pagamento",b.paid?`<span class="pill ok">Pago em ${dm(b.paidAt)}</span>`:`<span class="pill warn">Pendente</span>`):""}
      ${canSeeMoney()&&b.paid&&b.paymentNote?row("Obs. do pagamento",esc(b.paymentNote)):""}
      ${row("Situação",st==="now"?"Hospedados agora":st==="past"?"Concluída":"Agendada")}
      ${row("Tipo",isHolBooking(b)?"Feriado":"Tempo comum")}
      ${row("Feriados",esc(holBetween(b.checkIn,b.checkOut).map(x=>`${x.short} (${dm(x.date)})`).join(", ")))}
      ${row("Marcada por",esc(b.createdByName))}
    </dl>
    ${isAdmin()?(b.paid?`<button class="btn ghost full" id="payUndo">${ic("undo",18)}Desfazer pagamento</button>`:`
      <div class="box"><h4>${ic("wallet",18)}Registrar pagamento</h4>
        <div class="row2">
          <label class="field"><span>Data</span><input type="date" id="payDate" value="${today()}"></label>
          <label class="field"><span>Observação</span><input id="payNote" placeholder="Ex.: Pix"></label>
        </div>
        <button class="btn full" id="payOk">${ic("check",18,2.2)}Confirmar ${moneyS(b.amount)}</button></div>`):""}
    ${S.me?`<div class="actions">
      <button class="btn ghost" id="dEdit">${ic("edit",18)}Editar</button>
      ${!b.paid||isAdmin()?`<button class="btn danger" id="dDel">${ic("trash",18)}Cancelar</button>`:`<button class="btn ghost" disabled>Paga</button>`}
    </div>`:""}`);
  if($("#dEdit")) $("#dEdit").onclick=()=>openBooking(b);
  if($("#dDel")) armConfirm($("#dDel"),"Confirmar",async()=>{
    try{await api("bookings/"+b.id,{method:"DELETE"});closeSheet();toast("Reserva cancelada");await refresh()}catch(e){toast(e.message,"info")}
  });
  const pay=async paid=>{
    try{await api(`bookings/${b.id}/payment`,{method:"POST",body:{paid,paidAt:paid?$("#payDate").value:null,paymentNote:paid?$("#payNote").value:""}});
      closeSheet();toast(paid?"Pagamento confirmado":"Pagamento desfeito");await refresh()}catch(e){toast(e.message,"info")}
  };
  if($("#payOk")) $("#payOk").onclick=()=>pay(true);
  if($("#payUndo")) $("#payUndo").onclick=()=>pay(false);
}

/* ---------- nova reserva / editar ---------- */
function openBooking(b=null,startDay=null){
  const data=b?{...b}:{familyId:"",responsible:"",notes:"",checkIn:startDay||today(),checkOut:addDays(startDay||today(),2)};
  const rate=b?b.rate:S.config.dailyRate;
  openSheet(`${sheetHead(b?"Editar reserva":"Nova reserva")}
    <div class="form">
      <p class="req-note"><span class="req">*</span> Campos obrigatórios</p>
      <div id="bkErr" class="err hidden"></div>
      <div class="field" id="fFam"><span>Família<span class="req" aria-hidden="true">*</span></span>
        <div class="fam-pick">${S.config.families.map(f=>`<button type="button" style="--fc:${f.color}" data-fam="${f.id}" class="${data.familyId===f.id?"on":""}"><i class="dot"></i><span>${esc(f.name)}</span></button>`).join("")}</div>
        <div class="quota hidden" id="bkQuota"></div></div>
      <div class="row2">
        <label class="field" id="fIn"><span>Entrada<span class="req" aria-hidden="true">*</span></span><input type="date" id="bkIn" value="${data.checkIn}" required aria-required="true"></label>
        <label class="field" id="fOut"><span>Saída<span class="req" aria-hidden="true">*</span></span><input type="date" id="bkOut" value="${data.checkOut}" required aria-required="true"></label>
      </div>
      <small class="muted" id="bkLenHint" style="margin-top:-8px"></small>
      <label class="field" id="fResp"><span>Responsável<span class="req" aria-hidden="true">*</span></span><select id="bkResp" required aria-required="true"></select><small class="muted" id="bkRespHint"></small></label>
      <label class="field"><span>Observações <span style="color:var(--ink-3);font-weight:500">(opcional)</span></span><textarea id="bkNotes" rows="2" placeholder="Horário de chegada, pedidos…">${esc(data.notes)}</textarea></label>
      <div class="hol-note hidden" id="bkHol"></div>
      <div class="rule-warn hidden" id="bkRule"></div>
      <div class="rule-warn hidden" id="bkLen"></div>
      <div class="rule-warn hidden" id="bkNY"></div>
      <div class="total"><div><small>Valor a pagar</small><span id="bkCalc"></span></div><b class="num" id="bkTotal"></b></div>
      <button class="btn full" id="bkSave">${b?"Salvar alterações":"Confirmar reserva"}</button>
    </div>`);
  let famId=data.familyId;
  /* responsável: só integrantes da família escolhida */
  let respSel=data.responsible||"";
  const fill=()=>{
    const sel=$("#bkResp"),hint=$("#bkRespHint");
    if(!famId){sel.innerHTML=`<option value="">Escolha a família primeiro</option>`;sel.disabled=true;hint.textContent="";return}
    const f=fam(famId),members=[...f.members];
    const legacy=b&&b.familyId===famId&&b.responsible&&!members.includes(b.responsible)?b.responsible:null;
    sel.disabled=false;
    sel.innerHTML=`<option value="">Selecione o responsável</option>`+members.map(m=>`<option value="${esc(m)}">${esc(m)}</option>`).join("")
      +(legacy?`<option value="${esc(legacy)}">${esc(legacy)} (fora da lista)</option>`:"");
    sel.value=(members.includes(respSel)||respSel===legacy)?respSel:(members.length===1?members[0]:"");
    respSel=sel.value;if(sel.value)$("#fResp").classList.remove("invalid");
    hint.textContent=members.length?"":(isAdmin()?"Essa família ainda não tem integrantes. Cadastre em Ajustes → Famílias.":"Essa família ainda não tem integrantes cadastrados. Peça ao administrador para cadastrar.");
  };
  $("#bkResp").onchange=e=>{respSel=e.target.value;$("#fResp").classList.remove("invalid")};
  const calc=()=>{const vi=$("#bkIn").value,vo=$("#bkOut").value,n=vi&&vo?nights(vi,vo):0;
    $("#bkCalc").textContent=!vi||!vo?"Escolha a entrada e a saída":n>0?`${plural(n,"diária")} × ${money(rate)}`:"A saída precisa ser depois da entrada";
    $("#bkTotal").textContent=money(Math.max(0,n)*rate);
    const hs=n>0?holBetween($("#bkIn").value,$("#bkOut").value):[];
    $("#bkHol").classList.toggle("hidden",!hs.length);
    $("#bkHol").innerHTML=hs.length?ic("star",18,2)+`<span>Inclui ${hs.length>1?"feriados":"feriado"}: ${esc(hs.map(x=>`${x.short} (${dm(x.date)})`).join(", "))}</span>`:"";
    const qBlocked=rules(n>0?(hs.length>0):null);
    /* duração máxima */
    const lEl=$("#bkLen"),hint=$("#bkLenHint");let lBlocked=false;
    if(n>0){const r=maxNightsFor(vi,vo,hs.length>0);
      hint.textContent=r.max>0?`Máximo de ${r.max} diárias (${r.why}).`:"Estadia com feriado: sem limite de diárias.";
      lBlocked=r.max>0&&n>r.max;
      lEl.classList.toggle("hidden",!lBlocked);
      if(lBlocked) lEl.innerHTML=ic("info",18,2)+`<span>Em ${r.why} a estadia pode ter no máximo ${r.max} diárias. Esta tem ${n}. Ajuste a data de saída.</span>`;
    }else{hint.textContent="";lEl.classList.add("hidden")}
    /* Réveillon: só a família da vez */
    const nyEl=$("#bkNY");let nyBlocked=false;
    if(n>0&&famId){const bad=nyYearsIn(vi,vo).find(y=>{const o=nyOwner(y);return o&&o!==famId});
      if(bad!==undefined){nyBlocked=true;nyEl.innerHTML=ic("star",18,2)+`<span>O Réveillon ${nyLabel(bad)} é da família ${esc(fam(nyOwner(bad)).name)}, pela sequência. Para ${esc(fam(famId).name)} ir, registre antes uma troca no quadro do Réveillon, no Painel.</span>`}}
    nyEl.classList.toggle("hidden",!nyBlocked);
    $("#bkSave").disabled=qBlocked||lBlocked||nyBlocked;
  };
  /* vagas da família e aviso da regra de marcações */
  const rules=isHol=>{
    const qEl=$("#bkQuota"),wEl=$("#bkRule"),L=limits();
    if(!famId){qEl.classList.add("hidden");wEl.classList.add("hidden");return false}
    const o=openOf(famId,b?.id),cf=L.common>0&&o.common.length>=L.common,hf=L.hol>0&&o.hol.length>=L.hol;
    qEl.classList.remove("hidden");
    qEl.innerHTML=`<span class="muted" style="align-self:center">Em aberto:</span><span class="qchip ${cf?"full":""} ${isHol===false?"cur":""}">Tempo comum ${quotaTxt(o.common.length,L.common)}</span><span class="qchip ${hf?"full":""} ${isHol===true?"cur":""}">Feriados ${quotaTxt(o.hol.length,L.hol)}</span>`;
    const vo=$("#bkOut").value,blocked=isHol!==null&&vo>today()&&(isHol?hf:cf);
    wEl.classList.toggle("hidden",!blocked);
    if(blocked){const list=(isHol?o.hol:o.common).map(x=>range(x.checkIn,x.checkOut)).join(" e ");
      wEl.innerHTML=ic("info",18,2)+`<span>A família ${esc(fam(famId).name)} já tem ${isHol?L.hol:L.common} ${isHol?"marcações de feriado":"marcações de tempo comum"} em aberto (${esc(list)}). Uma nova só pode ser feita depois que uma delas terminar.</span>`}
    return blocked;
  };
  $$("[data-fam]").forEach(btn=>btn.onclick=()=>{famId=btn.dataset.fam;$("#fFam").classList.remove("invalid");$$("[data-fam]").forEach(x=>x.classList.toggle("on",x===btn));fill();calc()});
  $("#bkIn").onchange=()=>{$("#fIn").classList.remove("invalid");if($("#bkIn").value&&$("#bkOut").value<=$("#bkIn").value)$("#bkOut").value=addDays($("#bkIn").value,1);calc()};
  $("#bkOut").onchange=()=>{$("#fOut").classList.remove("invalid");calc()};
  fill();calc();
  $("#bkSave").onclick=async()=>{
    const btn=$("#bkSave");btn.disabled=true;$("#bkErr").classList.add("hidden");
    const body={familyId:famId,responsible:$("#bkResp").value,notes:$("#bkNotes").value,checkIn:$("#bkIn").value,checkOut:$("#bkOut").value};
    try{
      /* campos obrigatórios: família, entrada, saída e responsável */
      $$(".field.invalid").forEach(x=>x.classList.remove("invalid"));
      const miss=[];
      if(!famId){miss.push("família");$("#fFam").classList.add("invalid")}
      if(!body.checkIn){miss.push("entrada");$("#fIn").classList.add("invalid")}
      if(!body.checkOut){miss.push("saída");$("#fOut").classList.add("invalid")}
      if(!body.responsible){miss.push("responsável");$("#fResp").classList.add("invalid")}
      if(miss.length) throw new Error(`Preencha os campos obrigatórios: ${miss.join(", ")}.`);
      if(body.checkOut<=body.checkIn){$("#fOut").classList.add("invalid");throw new Error("A saída precisa ser depois da entrada.")}
      if(b) await api("bookings/"+b.id,{method:"PUT",body}); else await api("bookings",{method:"POST",body});
      closeSheet();toast(b?"Reserva atualizada":"Reserva confirmada");await refresh();
    }catch(e){$("#bkErr").textContent=e.message;$("#bkErr").classList.remove("hidden");$(".sheet").scrollTo({top:0,behavior:"smooth"});btn.disabled=false}
  };
}

/* ---------- entrar ---------- */
function openLogin(){
  openSheet(`${sheetHead("Entrar")}
    <p class="muted" style="font-size:14px">A agenda é aberta para todos. O login é só para quem marca e gerencia as reservas.</p>
    <form class="form" id="loginForm" autocomplete="on">
      <div id="loginErr" class="err hidden"></div>
      <label class="field"><span>Usuário</span><input id="lgUser" name="username" autocapitalize="none" autocomplete="username" required></label>
      <label class="field"><span>Senha</span><input id="lgPass" name="password" type="password" autocomplete="current-password" required></label>
      <button class="btn full" type="submit">${ic("login",18)}Entrar</button>
    </form>`);
  $("#loginForm").addEventListener("submit",async e=>{
    e.preventDefault();const btn=e.target.querySelector("button");btn.disabled=true;$("#loginErr").classList.add("hidden");
    try{const d=await api("login",{method:"POST",body:{username:$("#lgUser").value,password:$("#lgPass").value}});
      setToken(d.token);closeSheet();await refresh();toast(`Olá, ${d.me.name.split(" ")[0]}`)}
    catch(err){$("#loginErr").textContent=err.message;$("#loginErr").classList.remove("hidden");btn.disabled=false}
  });
}
function logout(){setToken(null);closeSheet();if(S.tab==="admin")S.tab="painel";refresh();toast("Você saiu. A agenda continua visível.","logout")}

/* ---------- minha conta ---------- */
function openMe(){
  openSheet(`${sheetHead("Minha conta")}
    <div class="acc-row" style="padding:0"><span class="acc-ic">${ic(S.me.role==="admin"?"shield":"pen",20)}</span>
      <div class="acc-main"><b>${esc(S.me.name)}</b><span>${ROLE_NAME[S.me.role]} · usuário ${esc(S.me.username)}</span></div></div>
    <div class="form">
      <div id="mErr" class="err hidden"></div>
      <label class="field"><span>Senha atual</span><input type="password" id="mCur" autocomplete="current-password"></label>
      <label class="field"><span>Nova senha</span><input type="password" id="mNew" autocomplete="new-password" placeholder="Mínimo 6 caracteres"></label>
      <button class="btn full" id="mSave">${ic("lock",18)}Trocar senha</button>
      <button class="btn ghost full" id="mOut">${ic("logout",18)}Sair</button>
    </div>`);
  $("#mOut").onclick=logout;
  $("#mSave").onclick=async()=>{
    try{const d=await api("me/password",{method:"POST",body:{current:$("#mCur").value,next:$("#mNew").value}});setToken(d.token);closeSheet();toast("Senha alterada")}
    catch(e){$("#mErr").textContent=e.message;$("#mErr").classList.remove("hidden")}
  };
}

/* ---------- logins (administrador) ---------- */
function openAccount(a){
  openSheet(`${sheetHead(a.role==="admin"?"Login do administrador":"Login do editor")}
    <div class="form">
      <div id="uErr" class="err hidden"></div>
      <label class="field"><span>Nome que aparece</span><input id="uName" value="${esc(a.name)}" placeholder="${a.role==="admin"?"Ex.: José":"Ex.: Tia Cleia"}"></label>
      <label class="field"><span>Usuário</span><input id="uUser" value="${esc(a.username)}" autocapitalize="none" placeholder="ex.: editor"></label>
      <label class="field"><span>${a.active?"Nova senha":"Senha"}</span><input id="uPass" type="text" autocomplete="new-password" placeholder="${a.active?"Deixe vazio para manter a atual":"Mínimo 6 caracteres"}"></label>
      <p class="muted">Use letras minúsculas, sem espaço nem acento. Ao trocar a senha, quem estava conectado com a antiga é desconectado.</p>
      <button class="btn full" id="uSave">Salvar login</button>
    </div>`);
  $("#uSave").onclick=async()=>{
    try{const d=await api("accounts/"+a.role,{method:"PUT",body:{name:$("#uName").value,username:$("#uUser").value,password:$("#uPass").value}});
      if(d.token)setToken(d.token);closeSheet();toast("Login atualizado");await refresh()}
    catch(e){$("#uErr").textContent=e.message;$("#uErr").classList.remove("hidden")}
  };
}

/* =========================================================
   Início
   ========================================================= */
(async()=>{
  S.token=store.get("apto_token");
  const saved=store.get("apto_tab");if(saved&&TABS.some(t=>t[0]===saved))S.tab=saved;
  try{await load();render()}
  catch(e){$("#view").innerHTML=`<div class="card empty" style="margin-top:40px"><span class="ei">${ic("info",22)}</span>Não foi possível carregar a agenda.<button class="btn ghost sm" id="retryLoad">Tentar de novo</button></div>`;const r=$("#retryLoad");if(r)r.onclick=()=>location.reload()}
  setInterval(()=>{if(!$(".sheet-bg"))refresh()},60000);
  document.addEventListener("visibilitychange",()=>{if(!document.hidden&&!$(".sheet-bg"))refresh()});
})();

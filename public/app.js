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
  /* ícones das despesas */
  ac:'<rect x="2.5" y="5" width="19" height="9" rx="2"/><path d="M6 11h12M8 17.5l-1 2.5M12 17.5V20M16 17.5l1 2.5"/>',
  microwave:'<rect x="2.5" y="5" width="19" height="14" rx="2"/><rect x="5.5" y="8" width="10" height="8" rx="1"/><path d="M18.5 9v.01M18.5 12v.01M18.5 15v.01"/>',
  airfryer:'<path d="M7.5 4h9A2.5 2.5 0 0 1 19 6.5V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6.5A2.5 2.5 0 0 1 7.5 4z"/><path d="M5 10h14M10 14.5h4"/><circle cx="12" cy="7" r=".8"/>',
  fridge:'<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M5 10h14M8.5 6v1.5M8.5 13v3"/>',
  stove:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 9h16"/><circle cx="8.5" cy="6" r=".9"/><circle cx="15.5" cy="6" r=".9"/><rect x="7.5" y="12" width="9" height="6" rx="1"/>',
  flame:'<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.4 1.2-3.9 2.5-5 .3 1.6 1.2 2.6 2.3 2.6C11 8 11 5.5 12 3z"/>',
  heater:'<rect x="4" y="4" width="16" height="12" rx="2"/><path d="M8 4v12M12 4v12M16 4v12M7 16v3.5M17 16v3.5"/>',
  window:'<rect x="4" y="3.5" width="16" height="17" rx="1.5"/><path d="M12 3.5v17M4 12h16"/>',
  wifi:'<path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r=".9"/>',
  wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.4-3.4a5.5 5.5 0 0 1-7.3 7.3l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a5.5 5.5 0 0 1 7.3-7.3z"/>',
  hammer:'<path d="m14 11-8.6 8.6a1.9 1.9 0 0 1-2.7-2.7L11.3 8.3"/><path d="m9.5 6.5 3-3a2 2 0 0 1 2.8 0l5.2 5.2a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0z"/>',
  droplet:'<path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z"/>',
  zap:'<path d="M13 2.5 4.5 13.5H12l-1 8 8.5-11H12z"/>',
  sparkles:'<path d="M11 3l1.8 4.7 4.7 1.8-4.7 1.8L11 16l-1.8-4.7L4.5 9.5l4.7-1.8z"/><path d="M18.5 14.5v5M16 17h5"/>',
  key:'<circle cx="8" cy="15" r="4.5"/><path d="M11.2 11.8 20 3M16.5 6.5 19 9M14 9l2 2"/>',
  bug:'<rect x="8" y="7" width="8" height="13" rx="4"/><path d="M12 7V5M9.5 4 10.5 6M14.5 4l-1 2M8 11H4.5M8 15H5M16 11h3.5M16 15h3M12 11v9"/>',
  fan:'<circle cx="12" cy="10" r="1.6"/><path d="M12 8.4C12 5 13 2.8 15.3 3.2s.9 4.5-2 5.9M13.4 11.2c3 1.4 4.8 3.3 3.4 5.2s-4.3-1.1-4.7-4.3M10.6 10.9C7.6 12 5 11.7 4.8 9.4s4.1-2.4 5.9-.4"/><path d="M12 12v9M8.5 21h7"/>',
  tv:'<rect x="2.5" y="5" width="19" height="13" rx="2"/><path d="M8 21h8M12 18v3"/>',
  cup:'<path d="M6 3h12l-1.6 16.6A1.6 1.6 0 0 1 14.8 21H9.2a1.6 1.6 0 0 1-1.6-1.4z"/><path d="M6.6 9h10.8"/>',
  plate:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/>',
  utensils:'<path d="M6 3v6a2 2 0 0 0 4 0V3M8 3v18"/><path d="M18 21V3c-2.2 1.3-3.5 4-3.5 7.5V13H18"/>',
  pot:'<path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M2 10h2M20 10h2M9 7c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5"/>',
  spray:'<path d="M8 9h6v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"/><path d="M9 9V6h4v3M13 6h3l2-2M17.5 8.5h2.5M17.5 11.5H20"/>',
  bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
  sofa:'<path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><path d="M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M6 18v2M18 18v2"/>',
  building:'<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h.01M12 7h.01M15 7h.01M9 11h.01M12 11h.01M15 11h.01M9 15h.01M15 15h.01M11 21v-4h2v4"/>',
  receipt:'<path d="M6 3h12v18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4L6 21z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  cart:'<circle cx="9" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/><path d="M2.5 3.5H5l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.4a1.5 1.5 0 0 0 1.5-1.2L20.5 8H6"/>',
  tag:'<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.3"/>',
  box:'<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/>',
  filter:'<path d="M3.5 4.5h17l-6.5 8v6.2l-4 2.3v-8.5z"/>',
  shower:'<path d="M4 21V7a4 4 0 0 1 8 0"/><path d="M8 7h8"/><path d="M10 11v.01M13 11v.01M16 11v.01M11.5 14v.01M14.5 14v.01M13 17v.01M16 17v.01"/>',
  inbox:'<path d="M3.5 13.5 6 5h12l2.5 8.5V19a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z"/><path d="M3.5 13.5H8l1.5 2.5h5l1.5-2.5h4.5"/>',
};
const ic=(n,s=20,w=1.8)=>`<svg class="i" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;

/* ---------- tipos de despesa (padrão) ---------- */
const EXP_GROUPS=["Serviços","Compras","Contas","Outros"];
const EXP_DEFAULT=[
  ["maodeobra","Mão de obra de terceiros","Serviços","hammer"],["ar-limpeza","Limpeza do ar-condicionado","Serviços","ac"],
  ["ar-conserto","Conserto do ar-condicionado","Serviços","ac"],["internet-tec","Internet / TV (técnico)","Serviços","wifi"],
  ["gas-manut","Gás (manutenção)","Serviços","flame"],["aquecedor","Aquecedor","Serviços","heater"],["janelas","Janelas","Serviços","window"],
  ["encanador","Encanador / vazamento","Serviços","droplet"],["eletricista","Eletricista","Serviços","zap"],["chaveiro","Chaveiro / fechadura","Serviços","key"],
  ["faxina","Faxina / limpeza","Serviços","sparkles"],["dedetizacao","Dedetização","Serviços","bug"],["reparo","Pequenos reparos","Serviços","wrench"],["filtro","Troca de filtro","Serviços","filter"],
  ["ar-compra","Ar-condicionado (compra)","Compras","ac"],["microondas","Micro-ondas","Compras","microwave"],["airfryer","Air fryer","Compras","airfryer"],
  ["geladeira","Geladeira","Compras","fridge"],["fogao","Fogão","Compras","stove"],["ventilador","Ventilador","Compras","fan"],["tv","Televisão","Compras","tv"],
  ["chuveiro","Chuveiro","Compras","shower"],["copos","Copos","Compras","cup"],["pratos","Pratos","Compras","plate"],["talheres","Talheres","Compras","utensils"],
  ["panelas","Panelas","Compras","pot"],["cama-banho","Roupa de cama e banho","Compras","bed"],["prod-limpeza","Produtos de limpeza","Compras","spray"],
  ["lampadas","Lâmpadas","Compras","bulb"],["moveis","Móveis","Compras","sofa"],["utilidades","Utilidades da casa","Compras","box"],
  ["condominio","Condomínio","Contas","building"],["luz","Conta de luz","Contas","zap"],["agua","Conta de água","Contas","droplet"],
  ["gas-conta","Conta de gás","Contas","flame"],["iptu","IPTU","Contas","receipt"],["internet-mensal","Internet (mensalidade)","Contas","wifi"],
  ["outros","Outros","Outros","tag"],
].map(([id,name,group,icon])=>({id,name,group,icon}));
const EXP_ICONS=["hammer","wrench","filter","ac","microwave","airfryer","fridge","stove","flame","heater","window","wifi","droplet","zap","sparkles","key","bug","fan","tv","shower","cup","plate","utensils","pot","bed","spray","bulb","sofa","box","building","receipt","cart","tag"];
const expTypes=()=>[...EXP_DEFAULT,...(S.expenseTypes||[])];
const expType=id=>expTypes().find(t=>t.id===id);

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
const limits=()=>({total:S.config.maxTotal??2,common:S.config.maxCommon??2,hol:S.config.maxHoliday??2});
function openOf(famId,ignoreId){
  const t=today(),bs=S.bookings.filter(b=>b.familyId===famId&&b.id!==ignoreId&&b.checkOut>t);
  return{all:bs,common:bs.filter(b=>!isHolBooking(b)),hol:bs.filter(isHolBooking)};
}
/* duração máxima (qualquer estadia, com ou sem feriado): janeiro e julho → maxNightsPeak; demais meses → maxNightsCommon */
function touchesPeak(a,b){for(let d=a;d<b;d=addDays(d,1)){const m=+d.slice(5,7);if(m===1||m===7)return true}return false}
function maxNightsFor(a,b,isHol){
  if(touchesPeak(a,b)) return{max:S.config.maxNightsPeak??6,why:"janeiro e julho"};
  return{max:S.config.maxNightsCommon??10,why:"demais meses"};
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
      <label class="field"><span>Réveillon</span><select id="swA">${opt(cy)}</select></label>
      <label class="field"><span>Troca com o Réveillon</span><select id="swB">${opt(cy+1)}</select></label>
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
  S.me=d.me;S.config=d.config;S.bookings=d.bookings;S.accounts=d.accounts||[];S.newYear=d.newYear||null;S.expenses=d.expenses||[];S.expenseTypes=d.expenseTypes||[];
  if(S.token&&!S.me) setToken(null);
}
async function refresh(){try{await load();render()}catch(e){}}

/* =========================================================
   Estrutura geral
   ========================================================= */
const TABS=[["painel","grid","Painel"],["calendario","cal","Calendário"],["reservas","list","Reservas"],["despesas","receipt","Despesas"],["financeiro","wallet","Financeiro"],["admin","sliders","Ajustes"]];
$("#brandMark").innerHTML=ic("logo",22,2);
function render(){
  if(S.tab==="admin"&&!isAdmin()) S.tab="painel";
  if(S.tab==="financeiro"&&!canSeeMoney()) S.tab="painel";
  $("#meBtn").innerHTML=S.me?`<span class="av">${esc(initials(S.me.name))}</span><span>${esc(S.me.name.split(" ")[0])}</span>`:`${ic("login",18)}<span>Entrar</span>`;
  $("#roleLabel").textContent=S.me?`Conectado como ${ROLE_NAME[S.me.role].toLowerCase()}`:"Agenda das famílias";
  const tabs=TABS.filter(([k])=>(k!=="admin"||isAdmin())&&(k!=="financeiro"||canSeeMoney()));
  $("#tabs").classList.toggle("n6",tabs.length>=6);
  $("#tabs").innerHTML=tabs.map(([k,i,l])=>`<button data-tab="${k}" class="${S.tab===k?"on":""}">${ic(i,22)}<span>${l}</span></button>`).join("");
  $("#fab").innerHTML=ic("plus",20,2.2)+`<span>${S.tab==="despesas"?"Nova despesa":"Nova reserva"}</span>`;
  $("#fab").classList.toggle("hidden",!canBook()||S.tab==="admin");
  ({painel:renderPainel,calendario:renderCalendario,reservas:renderReservas,despesas:renderDespesas,financeiro:renderFinanceiro,admin:renderAdmin})[S.tab]($("#view"));
}
$("#tabs").addEventListener("click",e=>{const b=e.target.closest("[data-tab]");if(!b)return;S.tab=b.dataset.tab;store.set("apto_tab",S.tab);render();window.scrollTo({top:0})});
$("#fab").onclick=()=>S.tab==="despesas"?openExpense():openBooking();
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
      <div class="c num">${bs.length}</div>${q(o.all.length,L.total)}${q(o.hol.length,L.hol)}`;
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
        <div class="h n">Família</div><div class="h c">Reservas no total</div><div class="h c">Futuras em aberto</div><div class="h c">Feriados em aberto</div>
        ${rows}
      </div>
      <p class="muted" style="display:flex;gap:6px;align-items:flex-start">${ic("info",16)}<span>Cada família pode ter até ${limits().total||"∞"} marcações futuras em aberto (no máximo ${limits().common||"∞"} de tempo comum e ${limits().hol||"∞"} de feriado). A vaga é liberada quando a estadia termina. Cada estadia pode ter até ${(S.config.maxNightsCommon??10)||"∞"} diárias (${(S.config.maxNightsPeak??6)||"∞"} em janeiro e julho).</span></p>
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
  const years=[...new Set([...S.bookings.map(b=>b.checkIn.slice(0,4)),...(S.expenses||[]).map(e=>e.date.slice(0,4))])].sort();
  const bs=S.finYear==="todos"?S.bookings:S.bookings.filter(b=>b.checkIn.startsWith(S.finYear));
  const ex=S.finYear==="todos"?(S.expenses||[]):(S.expenses||[]).filter(e=>e.date.startsWith(S.finYear));
  const total=bs.reduce((s,b)=>s+b.amount,0),pago=bs.filter(b=>b.paid).reduce((s,b)=>s+b.amount,0);
  const desp=ex.reduce((s,e)=>s+e.amount,0),saldo=pago-desp,previsto=total-desp;
  const pend=bs.filter(b=>!b.paid);
  const pct=total?Math.round(pago/total*100):0;
  v.innerHTML=`
    <div class="chips">${["todos",...years].map(y=>`<button class="chip ${S.finYear===y?"on":""}" data-fy="${y}">${y==="todos"?"Todos os anos":y}</button>`).join("")}</div>
    <div class="card saldo">
      <div class="fin-total">
        <div><div class="eyebrow">Saldo atual</div><div class="big num ${saldo<0?"neg":"pos"}">${money(saldo)}</div><div class="muted">Recebido das reservas menos as despesas</div></div>
        <div class="saldo-grid">
          <div><span class="lbl">${ic("wallet",15)}Recebido</span><b class="num" style="color:var(--ok)">${money(pago)}</b></div>
          <div><span class="lbl">${ic("receipt",15)}Despesas</span><b class="num" style="color:var(--bad)">− ${money(desp)}</b></div>
        </div>
      </div>
      <div class="rate-line" style="border-top:1px solid var(--line-2)">${ic("info",18)}<span>Saldo previsto, se todas as reservas forem pagas: <b class="num">${money(previsto)}</b></span></div>
    </div>
    <div class="card">
      <div class="fin-total">
        <div><div class="eyebrow">Valor total das reservas</div><div class="big num">${money(total)}</div><div class="muted">${plural(bs.length,"reserva")} · ${plural(bs.reduce((s,b)=>s+b.nights,0),"diária")}</div></div>
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
    </section>`;
  $$("[data-fy]",v).forEach(b=>b.onclick=()=>{S.finYear=b.dataset.fy;render()});
  $$("[data-go]",v).forEach(b=>b.onclick=()=>{S.tab=b.dataset.go;render();window.scrollTo({top:0})});
  bindItems(v);
}

/* =========================================================
   Despesas (visível para todos; admin e editor cadastram)
   ========================================================= */
function expItem(e){
  const f=fam(e.familyId),t=expType(e.typeId);
  return `<button class="bk ex" data-exp="${e.id}">
    <span class="ex-ic">${ic(t?.icon||e.icon||"tag",22)}</span>
    <span class="bk-main">
      <span class="bk-fam"><span>${esc(e.typeName)}</span></span>
      <span class="bk-sub"><i class="dot" style="--fc:${f.color};display:inline-block;margin-right:5px;vertical-align:1px"></i>${esc(f.name)} · ${esc(e.responsible)}</span>
      <span class="bk-sub">${dmw(e.date)}${e.notes?" · "+esc(e.notes):""}</span>
    </span>
    <span class="bk-side"><b class="num">${money(e.amount)}</b></span>
  </button>`;
}
function renderDespesas(v){
  S.expYear=S.expYear||"todos";
  const all=S.expenses||[],years=[...new Set(all.map(e=>e.date.slice(0,4)))].sort();
  const ex=S.expYear==="todos"?all:all.filter(e=>e.date.startsWith(S.expYear));
  const total=ex.reduce((s,e)=>s+e.amount,0);
  const byGroup=EXP_GROUPS.map(g=>[g,ex.filter(e=>(expType(e.typeId)?.group||"Outros")===g).reduce((s,e)=>s+e.amount,0)]);
  const GI={Serviços:"hammer",Compras:"cart",Contas:"receipt",Outros:"tag"};
  v.innerHTML=`
    ${years.length>1?`<div class="chips">${["todos",...years].map(y=>`<button class="chip ${S.expYear===y?"on":""}" data-ey="${y}">${y==="todos"?"Todos os anos":y}</button>`).join("")}</div>`:""}
    <div class="card">
      <div class="fin-total">
        <div><div class="eyebrow">Total de despesas</div><div class="big num">${money(total)}</div><div class="muted">${plural(ex.length,"despesa")} com reparos, compras e contas do apartamento</div></div>
        <div class="exp-groups">${byGroup.map(([g,s])=>`<div><span class="lbl">${ic(GI[g],15)}${g}</span><b class="num">${money(s)}</b></div>`).join("")}</div>
      </div>
    </div>
    <section class="sec">
      <div class="sec-head"><h2>Lançamentos</h2><span class="muted">${plural(ex.length,"despesa")}</span></div>
      ${ex.length?`<div class="list card">${ex.map(expItem).join("")}</div>`
        :`<div class="card empty"><span class="ei">${ic("receipt",22)}</span>Nenhuma despesa registrada.${S.me?"<br>Toque em Nova despesa para lançar a primeira.":""}</div>`}
    </section>`;
  $$("[data-ey]",v).forEach(b=>b.onclick=()=>{S.expYear=b.dataset.ey;render()});
  $$("[data-exp]",v).forEach(b=>b.onclick=()=>openExpenseDetail(b.dataset.exp));
}
function openExpenseDetail(id){
  const e=(S.expenses||[]).find(x=>x.id===id);if(!e)return;
  const f=fam(e.familyId),t=expType(e.typeId);
  const row=(k,val)=>val?`<div><dt>${k}</dt><dd>${val}</dd></div>`:"";
  openSheet(`${sheetHead(`<span class="sheet-fam"><span class="ex-ic sm">${ic(t?.icon||e.icon||"tag",18)}</span>${esc(e.typeName)}</span>`)}
    <dl class="dl">
      ${row("Valor",`<span class="num">${money(e.amount)}</span>`)}
      ${row("Data",dmw(e.date))}
      ${row("Categoria",esc(t?.group||"Outros"))}
      ${row("Família que contratou",`<span style="display:inline-flex;align-items:center;gap:6px"><i class="dot" style="--fc:${f.color}"></i>${esc(f.name)}</span>`)}
      ${row("Responsável",esc(e.responsible))}
      ${row("Observação",esc(e.notes))}
      ${row("Lançada por",esc(e.createdByName))}
    </dl>
    ${S.me?`<div class="actions"><button class="btn ghost" id="eEdit">${ic("edit",18)}Editar</button><button class="btn danger" id="eDel">${ic("trash",18)}Excluir</button></div>`:""}`);
  if($("#eEdit")) $("#eEdit").onclick=()=>openExpense(e);
  if($("#eDel")) armConfirm($("#eDel"),"Confirmar",async()=>{
    try{await api("expenses/"+e.id,{method:"DELETE"});closeSheet();toast("Despesa excluída");await refresh()}catch(err){toast(err.message,"info")}
  });
}
function parseMoney(s){s=String(s||"").trim().replace(/[^\d.,]/g,"");if(s.includes(","))s=s.replace(/\./g,"").replace(",",".");const n=parseFloat(s);return isFinite(n)?Math.round(n*100)/100:NaN}
function openExpense(e=null){
  const d=e?{...e}:{typeId:"",familyId:"",responsible:"",date:today(),amount:"",notes:""};
  let typeId=d.typeId,famId=d.familyId,respSel=d.responsible;
  openSheet(`${sheetHead(e?"Editar despesa":"Nova despesa")}
    <div class="form">
      <div id="exErr" class="err hidden"></div>
      <div class="field" id="fxType"><span>Tipo de despesa</span>
        <button type="button" class="type-btn" id="exTypeBtn"></button>
        <div class="type-panel hidden" id="exTypePanel">
          <input id="exTypeSearch" placeholder="Buscar tipo (ex.: micro-ondas)" autocomplete="off">
          <div id="exTypeList"></div>
          <div class="box hidden" id="exNewType">
            <h4>${ic("plus",18)}Criar tipo de despesa</h4>
            <label class="field"><span>Nome</span><input id="ntName" placeholder="Ex.: Inseticida" maxlength="40"></label>
            <label class="field"><span>Categoria</span><select id="ntGroup">${EXP_GROUPS.map(g=>`<option ${g==="Compras"?"selected":""}>${g}</option>`).join("")}</select></label>
            <div class="field"><span>Ícone</span><div class="icon-pick" id="ntIcons">${EXP_ICONS.map((k,i)=>`<button type="button" data-nti="${k}" class="${k==="tag"?"on":""}" aria-label="${k}">${ic(k,18)}</button>`).join("")}</div></div>
            <div class="actions"><button type="button" class="btn ghost" id="ntCancel">Cancelar</button><button type="button" class="btn" id="ntSave">Criar tipo</button></div>
          </div>
        </div>
      </div>
      <div class="field" id="fxFam"><span>Família que contratou</span>
        <div class="fam-pick">${S.config.families.map(f=>`<button type="button" style="--fc:${f.color}" data-xfam="${f.id}" class="${famId===f.id?"on":""}"><i class="dot"></i><span>${esc(f.name)}</span></button>`).join("")}</div></div>
      <label class="field" id="fxResp"><span>Responsável</span><select id="exResp"></select></label>
      <div class="row2">
        <label class="field" id="fxDate"><span>Data</span><input type="date" id="exDate" value="${d.date}"></label>
        <label class="field" id="fxAmt"><span>Valor</span><div class="money-in"><span>R$</span><input id="exAmount" inputmode="decimal" placeholder="0,00" value="${d.amount!==""?String(d.amount).replace(".",","):""}"></div></label>
      </div>
      <label class="field"><span>Observação <span style="color:var(--ink-3);font-weight:500">(opcional)</span></span><input id="exNotes" maxlength="300" placeholder="Ex.: troca do filtro, 2 aparelhos" value="${esc(d.notes)}"></label>
      <button class="btn full" id="exSave">${e?"Salvar alterações":"Lançar despesa"}</button>
    </div>`);
  const drawTypeBtn=()=>{const t=expType(typeId)||(e&&e.typeId===typeId?{name:e.typeName,icon:e.icon,group:""}:null);
    $("#exTypeBtn").innerHTML=t?`<span class="ex-ic sm">${ic(t.icon||"tag",18)}</span><span style="flex:1;text-align:left">${esc(t.name)}</span><span class="muted">Trocar</span>`
      :`<span class="ex-ic sm">${ic("tag",18)}</span><span style="flex:1;text-align:left;color:var(--ink-3)">Escolha o tipo</span>${ic("right",16)}`};
  const drawTypes=()=>{const q=$("#exTypeSearch").value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    const list=expTypes().filter(t=>!q||norm(t.name).includes(q));
    $("#exTypeList").innerHTML=EXP_GROUPS.map(g=>{const ts=list.filter(t=>t.group===g);return ts.length?`<div class="type-group">${g}</div><div class="type-grid">${ts.map(t=>`<button type="button" class="type-tile ${t.id===typeId?"on":""}" data-tid="${t.id}">${ic(t.icon,22)}<span>${esc(t.name)}</span></button>`).join("")}</div>`:""}).join("")
      +`<div class="type-grid" style="margin-top:8px"><button type="button" class="type-tile new" id="exNewBtn">${ic("plus",22)}<span>Criar novo tipo</span></button></div>`
      +(list.length?"":`<p class="muted" style="text-align:center;padding:6px 0">Nenhum tipo encontrado. Crie um novo.</p>`);
    $$("[data-tid]").forEach(b=>b.onclick=()=>{typeId=b.dataset.tid;$("#fxType").classList.remove("invalid");$("#exTypePanel").classList.add("hidden");drawTypeBtn()});
    $("#exNewBtn").onclick=()=>{$("#exNewType").classList.remove("hidden");$("#ntName").value=$("#exTypeSearch").value.trim();$("#ntName").focus()};
  };
  $("#exTypeBtn").onclick=()=>{$("#exTypePanel").classList.toggle("hidden");drawTypes()};
  $("#exTypeSearch").oninput=drawTypes;
  let ntIcon="tag";
  $$("[data-nti]").forEach(b=>b.onclick=()=>{ntIcon=b.dataset.nti;$$("[data-nti]").forEach(x=>x.classList.toggle("on",x===b))});
  $("#ntCancel").onclick=()=>$("#exNewType").classList.add("hidden");
  $("#ntSave").onclick=async()=>{
    try{const t=await api("expense-types",{method:"POST",body:{name:$("#ntName").value,group:$("#ntGroup").value,icon:ntIcon}});
      S.expenseTypes=[...(S.expenseTypes||[]),t];typeId=t.id;$("#exNewType").classList.add("hidden");$("#exTypePanel").classList.add("hidden");
      $("#fxType").classList.remove("invalid");drawTypeBtn();toast("Tipo criado")}
    catch(err){$("#exErr").textContent=err.message;$("#exErr").classList.remove("hidden")}
  };
  const fillResp=()=>{const sel=$("#exResp");
    if(!famId){sel.innerHTML=`<option value="">Escolha a família primeiro</option>`;sel.disabled=true;return}
    const m=fam(famId).members,legacy=e&&e.familyId===famId&&!m.includes(e.responsible)?e.responsible:null;
    sel.disabled=false;sel.innerHTML=`<option value="">Selecione o responsável</option>`+m.map(x=>`<option>${esc(x)}</option>`).join("")+(legacy?`<option>${esc(legacy)}</option>`:"");
    sel.value=m.includes(respSel)||respSel===legacy?respSel:(m.length===1?m[0]:"");respSel=sel.value};
  $$("[data-xfam]").forEach(b=>b.onclick=()=>{famId=b.dataset.xfam;$("#fxFam").classList.remove("invalid");$$("[data-xfam]").forEach(x=>x.classList.toggle("on",x===b));fillResp()});
  $("#exResp").onchange=ev=>{respSel=ev.target.value;$("#fxResp").classList.remove("invalid")};
  $("#exDate").onchange=()=>$("#fxDate").classList.remove("invalid");
  $("#exAmount").oninput=()=>$("#fxAmt").classList.remove("invalid");
  drawTypeBtn();fillResp();if(!typeId){$("#exTypePanel").classList.remove("hidden");drawTypes()}
  $("#exSave").onclick=async()=>{
    const btn=$("#exSave");btn.disabled=true;$("#exErr").classList.add("hidden");$$(".field.invalid").forEach(x=>x.classList.remove("invalid"));
    const t=expType(typeId)||(e&&e.typeId===typeId?{id:e.typeId,name:e.typeName,icon:e.icon}:null),amount=parseMoney($("#exAmount").value);
    const miss=[];
    if(!t){miss.push("tipo");$("#fxType").classList.add("invalid")}
    if(!famId){miss.push("família");$("#fxFam").classList.add("invalid")}
    if(!$("#exResp").value){miss.push("responsável");$("#fxResp").classList.add("invalid")}
    if(!$("#exDate").value){miss.push("data");$("#fxDate").classList.add("invalid")}
    if(!(amount>0)){miss.push("valor");$("#fxAmt").classList.add("invalid")}
    try{
      if(miss.length) throw new Error(`Preencha: ${miss.join(", ")}.`);
      const body={typeId:t.id,typeName:t.name,icon:t.icon,familyId:famId,responsible:$("#exResp").value,date:$("#exDate").value,amount,notes:$("#exNotes").value};
      if(e) await api("expenses/"+e.id,{method:"PUT",body}); else await api("expenses",{method:"POST",body});
      closeSheet();toast(e?"Despesa atualizada":"Despesa lançada");S.tab="despesas";await refresh();
    }catch(err){$("#exErr").textContent=err.message;$("#exErr").classList.remove("hidden");$(".sheet").scrollTo({top:0,behavior:"smooth"});btn.disabled=false}
  };
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
            <label class="field" style="grid-column:1/-1"><span>Máx. de marcações futuras em aberto (total)</span><input type="number" min="0" max="50" step="1" id="cfgMaxTotal" value="${c.maxTotal??2}" inputmode="numeric"></label>
            <label class="field"><span>Máx. em aberto: tempo comum</span><input type="number" min="0" max="50" step="1" id="cfgMaxCommon" value="${c.maxCommon??2}" inputmode="numeric"></label>
            <label class="field"><span>Máx. em aberto: feriados</span><input type="number" min="0" max="50" step="1" id="cfgMaxHoliday" value="${c.maxHoliday??2}" inputmode="numeric"></label>
          </div>
          <p class="muted">Por família. Uma reserva que inclui qualquer feriado (da entrada à saída) conta como feriado. Use 0 para não limitar.</p>
          <div class="row2">
            <label class="field"><span>Máx. de diárias por estadia</span><input type="number" min="0" max="50" step="1" id="cfgMaxNightsCommon" value="${c.maxNightsCommon??10}" inputmode="numeric"></label>
            <label class="field"><span>Máx. de diárias: jan. e jul.</span><input type="number" min="0" max="50" step="1" id="cfgMaxNightsPeak" value="${c.maxNightsPeak??6}" inputmode="numeric"></label>
          </div>
          <p class="muted">Vale para qualquer estadia, com ou sem feriado. Em janeiro e julho vale o limite menor. Use 0 para não limitar.</p>
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
    ${(S.expenseTypes||[]).length?`<section class="sec">
      <div class="sec-head"><h2>Tipos de despesa criados</h2></div>
      <div class="card">${S.expenseTypes.map(t=>`<div class="acc-row"><span class="ex-ic">${ic(t.icon,20)}</span>
        <div class="acc-main"><b>${esc(t.name)}</b><span>${esc(t.group)}${t.createdBy?" · criado por "+esc(t.createdBy):""}</span></div>
        <button class="btn danger sm" data-deltype="${t.id}" aria-label="Excluir tipo">${ic("trash",16)}</button></div>`).join("")}</div>
      <p class="muted">Excluir um tipo não apaga as despesas já lançadas com ele.</p>
    </section>`:""}
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
    try{await api("config",{method:"PUT",body:{...S.config,dailyRate:Number($("#cfgRate").value),maxTotal:Number($("#cfgMaxTotal").value),maxCommon:Number($("#cfgMaxCommon").value),maxHoliday:Number($("#cfgMaxHoliday").value),maxNightsCommon:Number($("#cfgMaxNightsCommon").value),maxNightsPeak:Number($("#cfgMaxNightsPeak").value),allowOverlap:$("#cfgOverlap").checked}});toast("Cobrança e regras salvas");await refresh()}catch(e){toast(e.message,"info")}
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
  $$("[data-deltype]",v).forEach(b=>armConfirm(b,"",async()=>{
    try{await api("expense-types/"+b.dataset.deltype,{method:"DELETE"});toast("Tipo excluído");await refresh()}catch(e){toast(e.message,"info")}
  }));
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
    ${S.me?(b.paid?(isAdmin()?`<button class="btn ghost full" id="payUndo">${ic("undo",18)}Desfazer pagamento</button>`:""):`
      <div class="box"><h4>${ic("wallet",18)}Registrar pagamento</h4>
        <div class="row2">
          <label class="field"><span>Data</span><input type="date" id="payDate" value="${today()}"></label>
          <label class="field"><span>Observação</span><input id="payNote" placeholder="Ex.: Pix"></label>
        </div>
        <button class="btn full" id="payOk">${ic("check",18,2.2)}Confirmar ${moneyS(b.amount)}</button></div>`):""}
    ${S.me&&st==="past"?`<p class="muted" style="display:flex;gap:6px;align-items:center">${ic("lock",16)}Estadia concluída: faz parte do histórico e não pode ser alterada.</p>
      ${isAdmin()?`<button class="btn danger full" id="dDel">${ic("trash",18)}Excluir do histórico</button>`:""}`
    :S.me?`<div class="actions">
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
  const data=b?{...b}:{familyId:"",responsible:"",notes:"",checkIn:startDay||"",checkOut:""};
  const rate=b?b.rate:S.config.dailyRate;
  openSheet(`${sheetHead(b?"Editar reserva":"Nova reserva")}
    <div class="form">
      <div id="bkErr" class="err hidden"></div>
      <div class="field" id="fFam"><span>Família</span>
        <div class="fam-pick">${S.config.families.map(f=>`<button type="button" style="--fc:${f.color}" data-fam="${f.id}" class="${data.familyId===f.id?"on":""}"><i class="dot"></i><span>${esc(f.name)}</span></button>`).join("")}</div>
        <div class="quota hidden" id="bkQuota"></div></div>
      <div class="field" id="fPeriod"><span>Período</span>
        <input type="hidden" id="bkIn" value="${data.checkIn}"><input type="hidden" id="bkOut" value="${data.checkOut}">
        <div class="rp" id="rp"></div>
      </div>
      <small class="muted" id="bkLenHint" style="margin-top:-8px"></small>
      <label class="field" id="fResp"><span>Responsável</span><select id="bkResp" required aria-required="true"></select><small class="muted" id="bkRespHint"></small></label>
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
      hint.textContent=r.max>0?`Máximo de ${r.max} diárias${r.why==="janeiro e julho"?" em janeiro e julho":""}.`:"";
      lBlocked=r.max>0&&n>r.max;
      lEl.classList.toggle("hidden",!lBlocked);
      if(lBlocked) lEl.innerHTML=ic("info",18,2)+`<span>${r.why==="janeiro e julho"?"Em janeiro e julho a":"A"} estadia pode ter no máximo ${r.max} diárias. Esta tem ${n}. Escolha uma saída mais cedo.</span>`;
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
    const o=openOf(famId,b?.id),cf=L.common>0&&o.common.length>=L.common,hf=L.hol>0&&o.hol.length>=L.hol,tf=L.total>0&&o.all.length>=L.total;
    qEl.classList.remove("hidden");
    qEl.innerHTML=`<span class="muted" style="align-self:center">Em aberto:</span><span class="qchip ${tf?"full":""}">Total ${quotaTxt(o.all.length,L.total)}</span><span class="qchip ${cf?"full":""} ${isHol===false?"cur":""}">Tempo comum ${quotaTxt(o.common.length,L.common)}</span><span class="qchip ${hf?"full":""} ${isHol===true?"cur":""}">Feriados ${quotaTxt(o.hol.length,L.hol)}</span>`;
    /* limite total: bloqueia assim que a família é escolhida */
    if(tf){const list=o.all.map(x=>range(x.checkIn,x.checkOut)).join(" e "),free=o.all.map(x=>x.checkOut).sort()[0];
      wEl.classList.remove("hidden");
      wEl.innerHTML=ic("info",18,2)+`<span>A família ${esc(fam(famId).name)} já tem ${o.all.length} marcações futuras em aberto (${esc(list)}). Ela só pode marcar de novo a partir de ${dm(free)}, quando a primeira terminar.</span>`;
      return true}
    const vo=$("#bkOut").value,blocked=isHol!==null&&vo>today()&&(isHol?hf:cf);
    wEl.classList.toggle("hidden",!blocked);
    if(blocked){const list=(isHol?o.hol:o.common).map(x=>range(x.checkIn,x.checkOut)).join(" e ");
      wEl.innerHTML=ic("info",18,2)+`<span>A família ${esc(fam(famId).name)} já tem ${isHol?L.hol:L.common} ${isHol?"marcações de feriado":"marcações de tempo comum"} em aberto (${esc(list)}). Uma nova só pode ser feita depois que uma delas terminar.</span>`}
    return blocked;
  };
  $$("[data-fam]").forEach(btn=>btn.onclick=()=>{famId=btn.dataset.fam;$("#fFam").classList.remove("invalid");$$("[data-fam]").forEach(x=>x.classList.toggle("on",x===btn));fill();calc()});
  /* calendário do período: 1º toque = entrada, 2º toque = saída */
  /* datas passadas bloqueadas para todos (ao editar estadia em andamento, mantém a entrada original) */
  const minDay=b&&b.checkIn<today()?b.checkIn:today();
  const busy=new Set();
  if(!S.config.allowOverlap) S.bookings.forEach(x=>{if(b&&x.id===b.id)return;for(let d=x.checkIn;d<x.checkOut;d=addDays(d,1))busy.add(d)});
  let rpSel={a:data.checkIn||"",b:data.checkOut||""},rpMsg="";
  const f0=parse(rpSel.a||today());let rpM={y:f0.getFullYear(),m:f0.getMonth()};
  const drawRP=()=>{
    const {y,m}=rpM,first=new Date(y,m,1),days=new Date(y,m+1,0).getDate(),t=today();
    const title=first.toLocaleDateString("pt-BR",{month:"long"});
    let cells="";for(let i=0;i<first.getDay();i++)cells+=`<span class="rp-d out"></span>`;
    /* depois de escolher a entrada: dias além do limite de diárias ficam travados */
    const tooFar=s=>{if(!rpSel.a||rpSel.b||s<=rpSel.a||s<=today())return false;const r=maxNightsFor(rpSel.a,s,false);return r.max>0&&nights(rpSel.a,s)>r.max};
    for(let dd=1;dd<=days;dd++){
      const s=`${y}-${pad(m+1)}-${pad(dd)}`,{a,b:z}=rpSel,off=s<minDay||tooFar(s);
      const cls=[off?"dis":"",busy.has(s)?"busy":"",holOn(s).length?"hol":"",s===t?"today":"",
        a&&s===a?"start":"",z&&s===z?"end":"",a&&z&&s>a&&s<z?"in":"",a&&z?"has":""].join(" ");
      cells+=`<button type="button" class="rp-d ${cls}" data-rp="${s}" ${off?"disabled":""} aria-label="${dmw(s)}${busy.has(s)?" · reservado":""}"><span>${dd}</span></button>`;
    }
    const nm=n=>n?plural(n,"diária"):"";
    const sum=rpSel.a?`<div class="rp-sum"><div><small>Entrada</small><b>${dmw(rpSel.a)}</b></div><div><small>Saída</small><b>${rpSel.b?dmw(rpSel.b):"—"}</b></div></div>`:"";
    const lastOut=()=>{let d=rpSel.a,last=null;for(let i=0;i<70;i++){d=addDays(d,1);const r=maxNightsFor(rpSel.a,d,false);if(r.max>0&&nights(rpSel.a,d)>r.max)break;last=d}return last};
    const hint=rpMsg||(!rpSel.a?"Toque no dia de entrada.":!rpSel.b?`Agora toque no dia de saída${(()=>{const l=lastOut();return l?` (até ${dm(l)})`:""})()}.`:`${nm(nights(rpSel.a,rpSel.b))} · toque em outro dia para recomeçar.`);
    $("#rp").innerHTML=`${sum}
      <div class="rp-head"><button type="button" class="ibtn" id="rpPrev" aria-label="Mês anterior">${ic("left",16)}</button>
        <b>${title[0].toUpperCase()+title.slice(1)} ${y}</b>
        <button type="button" class="ibtn" id="rpNext" aria-label="Próximo mês">${ic("right",16)}</button></div>
      <div class="rp-dow">${SEM.map(d=>`<div>${d[0].toUpperCase()}</div>`).join("")}</div>
      <div class="rp-grid">${cells}</div>
      <div class="rp-hint ${rpMsg?"warn":""}">${hint}</div>
      <div class="rp-legend"><span><i class="lg busy"></i>Já reservado</span><span><i class="lg hol"></i>Feriado</span></div>`;
    $("#rpPrev").onclick=()=>{rpM.m--;if(rpM.m<0){rpM.m=11;rpM.y--}drawRP()};
    $("#rpNext").onclick=()=>{rpM.m++;if(rpM.m>11){rpM.m=0;rpM.y++}drawRP()};
    $$("[data-rp]",$("#rp")).forEach(x=>x.onclick=()=>pickRP(x.dataset.rp));
  };
  const pickRP=s=>{
    rpMsg="";
    if(!rpSel.a||rpSel.b||s<=rpSel.a){
      if(busy.has(s)){rpMsg="Esse dia já está reservado. Escolha outro dia de entrada.";drawRP();return}
      rpSel={a:s,b:""};
    }else{
      let clash=false;for(let d=rpSel.a;d<s;d=addDays(d,1))if(busy.has(d)){clash=true;break}
      if(clash){rpMsg="O período passa por dias já reservados. Escolha uma saída antes deles.";drawRP();return}
      rpSel.b=s;
    }
    $("#bkIn").value=rpSel.a;$("#bkOut").value=rpSel.b;
    $("#fPeriod").classList.remove("invalid");drawRP();calc();
  };
  drawRP();
  fill();calc();
  $("#bkSave").onclick=async()=>{
    const btn=$("#bkSave");btn.disabled=true;$("#bkErr").classList.add("hidden");
    const body={familyId:famId,responsible:$("#bkResp").value,notes:$("#bkNotes").value,checkIn:$("#bkIn").value,checkOut:$("#bkOut").value};
    try{
      /* campos obrigatórios: família, entrada, saída e responsável */
      $$(".field.invalid").forEach(x=>x.classList.remove("invalid"));
      const miss=[];
      if(!famId){miss.push("família");$("#fFam").classList.add("invalid")}
      if(!body.checkIn||!body.checkOut){miss.push(!body.checkIn?"período":"dia de saída");$("#fPeriod").classList.add("invalid")}
      if(!body.responsible){miss.push("responsável");$("#fResp").classList.add("invalid")}
      if(miss.length) throw new Error(`Preencha os campos obrigatórios: ${miss.join(", ")}.`);
      if(body.checkOut<=body.checkIn){$("#fPeriod").classList.add("invalid");throw new Error("A saída precisa ser depois da entrada.")}
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

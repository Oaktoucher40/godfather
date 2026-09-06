const DATA = {
  contractAddress: "Dqdshp9irA9fhXkBpi5GaMUk3HEf3aTevVim94S3Hj2m",
  vaultWallet: "ATuoUTvtViKWrGaonZDPWTAdLE8Eq8V3Dq1AHCCpPiXn",
  totalSupply: 1000000000,
  sigmaRemainingSupply: 899682749,
  vaultStart: 100000000,
  vaultBalance: 100000000,
  xAth: null,
  fomoAth: null,
  links: {
    x: "https://x.com/godfatheronsf",
    fomo: "https://fomo.family/profile/godfatheronsf",
    dex: "https://x.com/godfatheronsf",
    stonkfun: "https://www.stonkfun.xyz/token/Dqdshp9irA9fhXkBpi5GaMUk3HEf3aTevVim94S3Hj2m"
  },
  burnLog: [],
  buybackLog: []
};

const fmt = n => new Intl.NumberFormat("en-US").format(Number(n)||0);
const linkMap = {
  x:["navX","footX","footerX"],
  fomo:["navFomo","footFomo","footerFomo"],
  dex:["navDex","heroDex","footDex","footerDex"],
  stonkfun:["navStonk","heroStonk","footStonk","footerStonk"]
};
Object.entries(linkMap).forEach(([k,ids])=>ids.forEach(id=>{
  const el=document.getElementById(id); if(!el) return;
  el.href=DATA.links[k]||"#";
  if(el.href !== location.href+"#"){ el.target="_blank"; el.rel="noopener noreferrer"; }
}));

document.getElementById("contractValue").textContent=DATA.contractAddress;
document.getElementById("vaultWallet").textContent=DATA.vaultWallet;
document.getElementById("vaultBalance").textContent=fmt(DATA.vaultBalance);
document.getElementById("vaultPercent").textContent=((DATA.vaultBalance/DATA.totalSupply)*100).toFixed(2)+"% of supply";
const remain=(DATA.vaultBalance/DATA.vaultStart)*100;
document.getElementById("vaultRemainPct").textContent=remain.toFixed(2)+"%";
document.getElementById("vaultProgress").style.width=Math.max(0,Math.min(100,remain))+"%";
document.getElementById("burnedToDate").textContent=fmt(DATA.vaultStart-DATA.vaultBalance);

const communityBurnTotal = (DATA.burnLog || []).reduce((sum, r) => sum + (Number(r.burned) || 0), 0);
const buybackBurnTotal = (DATA.buybackLog || []).reduce((sum, r) => sum + (Number(r.godfatherBurned) || 0), 0);
const totalGodfatherBurned = communityBurnTotal + buybackBurnTotal;
const godfatherRemaining = Math.max(0, (Number(DATA.totalSupply) || 0) - totalGodfatherBurned);

document.getElementById("godfatherRemainingSupply").textContent = fmt(godfatherRemaining);
document.getElementById("godfatherSupplyMeta").textContent =
  totalGodfatherBurned > 0
    ? `${fmt(totalGodfatherBurned)} $GODFATHER burned in verified logs.`
    : "Updates as verified burns are recorded.";

document.getElementById("sigmaRemainingSupply").textContent =
  DATA.sigmaRemainingSupply == null ? "TBA" : fmt(DATA.sigmaRemainingSupply);


function showAth(id,val){ document.getElementById(id).textContent=val==null?"—":fmt(val); }
showAth("xAth",DATA.xAth); showAth("fomoAth",DATA.fomoAth);
document.getElementById("combinedAth").textContent=(DATA.xAth==null||DATA.fomoAth==null)?"—":fmt((DATA.xAth||0)+(DATA.fomoAth||0));

document.querySelectorAll("[data-copy]").forEach(btn=>btn.addEventListener("click",async()=>{
  const target=document.getElementById(btn.dataset.copy);
  const value=target.textContent.trim();
  try{ await navigator.clipboard.writeText(value); btn.textContent="Copied"; }
  catch{ btn.textContent="Select"; }
  setTimeout(()=>btn.textContent="Copy",1400);
}));

if(DATA.burnLog.length){
  const body=document.getElementById("burnRows"); body.innerHTML="";
  DATA.burnLog.forEach(r=>body.insertAdjacentHTML("beforeend",`<tr>
    <td>${r.date}</td><td>${fmt(r.x)}</td><td>${fmt(r.fomo)}</td><td>${fmt(r.combined)}</td>
    <td>+${fmt(r.delta)}</td><td>${fmt(r.burned)}</td>
    <td>${r.tx?`<a href="${r.tx}" target="_blank" rel="noopener noreferrer">View ↗</a>`:"—"}</td>
  </tr>`));
}
if(DATA.buybackLog.length){
  const body=document.getElementById("buybackRows"); body.innerHTML="";
  DATA.buybackLog.forEach(r=>body.insertAdjacentHTML("beforeend",`<tr>
    <td>${r.date}</td><td>${fmt(r.sigmaSold)}</td><td>${fmt(r.godfatherBought)}</td><td>${fmt(r.godfatherBurned)}</td>
    <td>${r.tx?`<a href="${r.tx}" target="_blank" rel="noopener noreferrer">View ↗</a>`:"—"}</td>
  </tr>`));
}
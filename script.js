const DATA = {
  contractAddress: "Dqdshp9irA9fhXkBpi5GaMUk3HEf3aTevVim94S3Hj2m",
  vaultWallet: "6i9rmzmz1khmLH5j1sjkQdEAaziZVT7Ryo6KCYomuo5y",
  totalSupply: 1000000000,
  sigmaRemainingSupply: 899682749,
  vaultStart: 100000000,
  vaultBalance: 100000000,
  xAth: null,
  fomoAth: null,
  links: {
    x: "https://x.com/godfatheronsf",
    chat: "https://x.com/i/chat/group_join/g2096619881479147790/N0V3NB1Gpv",
    fomo: "https://fomo.family/profile/godfatheronsf",
    stonkfun: "https://www.stonkfun.xyz/token/Dqdshp9irA9fhXkBpi5GaMUk3HEf3aTevVim94S3Hj2m"
    // dex removed for now — no working Dexscreener URL until the token graduates. Add back as: dex: "https://dexscreener.com/solana/..."
  },
  burnLog: [],
  buybackLog: [],
  oathLog: [
    {
      date: "September 7, 2026",
      wallet: "99HwYT...ci4Apr",
      sentAmount: 500000, // amount the participant sent from their wallet — this is what the reward is calculated on, but NOT what's shown as "burned"
      burned: 485000, // net amount actually destroyed on-chain by the burn wallet's Burn instruction, after the 3% transfer tax — this is what's shown in the table and feeds the supply math
      rewardSent: 1000000,
      rewardTx: "https://orbmarkets.io/tx/NSv6AQAJnb4sHGkRx3U6H4jJm4ZgPtwn2tdzFj9J8sXuwhxFQmpvs9qudxCqCTYKL72fLczQPndLqKvEyVMTNfa"
    },
    {
      date: "September 8, 2026",
      wallet: "55zCZh...HgfWrA",
      sentAmount: 1000000,
      burned: 970000,
      rewardSent: 2000000,
      rewardTx: "https://orbmarkets.io/tx/2TqMCJrBjAWSUHRSERJSjRGPF4LzDEGgh6jiuF983twHzr4A6mjFhryXQ4YdFMynbMQcRvScggZuFf8c9HXsUmk3"
    },
    {
      date: "September 8, 2026",
      wallet: "D7GVcm...kKCrir",
      sentAmount: 1000000,
      burned: 970000,
      rewardSent: 2000000,
      rewardTx: "https://orbmarkets.io/tx/3vNyKZth5qLhFZctLm3mWUVsDe3HTGv7qfhZmB8LRT9hrbRk5kop6pq3mW2c6vf3nBY8PwewMCMq7QJVMKjMUYid"
    }
  ], // each entry: { date, wallet, sentAmount, burned, rewardSent, rewardTx } — only the reward tx is linked. "burned" is the net amount after the 3% transfer tax (shown in the table, feeds the remaining-supply total); "sentAmount" is what the participant sent and what the reward is based on (kept for reference, not displayed as a separate column)
  oathSubmitUrl: "https://x.com/i/chat/group_join/g2096619881479147790/N0V3NB1Gpv",
  oathReserveBalance: 200000000, // dev wallet's STARTING balance reserved to fund double-back rewards. Displayed balance is computed dynamically below (starting balance minus every rewardSent in oathLog) — do not hand-edit this number as rewards go out, just add entries to oathLog.
};

const fmt = n => new Intl.NumberFormat("en-US").format(Number(n)||0);
const linkMap = {
  x:["navX","footX","footerX"],
  chat:["navChat"],
  fomo:["navFomo","footFomo","footerFomo"],
  stonkfun:["navStonk","heroStonk","footStonk","footerStonk"]
};
Object.entries(linkMap).forEach(([k,ids])=>ids.forEach(id=>{
  const el=document.getElementById(id); if(!el) return;
  el.href=DATA.links[k]||"#";
  if(el.href !== location.href+"#"){ el.target="_blank"; el.rel="noopener noreferrer"; }
}));

document.getElementById("contractValue").textContent=DATA.contractAddress;
const oathSubmitEl=document.getElementById("oathSubmit");
if(oathSubmitEl){ oathSubmitEl.href=DATA.oathSubmitUrl||"#"; }
const oathRewardsPaid = (DATA.oathLog || []).reduce((sum, r) => sum + (Number(r.rewardSent) || 0), 0);
const oathReserveRemaining = Math.max(0, (Number(DATA.oathReserveBalance) || 0) - oathRewardsPaid);
const oathReserveEl=document.getElementById("oathReserveBalance");
if(oathReserveEl){ oathReserveEl.textContent=fmt(oathReserveRemaining); }

// Phase 2 (Family Vault) detail elements are hidden until Phase 1 closes.
// Guarded so the rest of the script keeps running even without them in the DOM.
const vaultWalletEl=document.getElementById("vaultWallet");
if(vaultWalletEl){ vaultWalletEl.textContent=DATA.vaultWallet; }
const vaultBalanceEl=document.getElementById("vaultBalance");
if(vaultBalanceEl){ vaultBalanceEl.textContent=fmt(DATA.vaultBalance); }
const vaultPercentEl=document.getElementById("vaultPercent");
if(vaultPercentEl){ vaultPercentEl.textContent=((DATA.vaultBalance/DATA.totalSupply)*100).toFixed(2)+"% of supply"; }
const remain=(DATA.vaultBalance/DATA.vaultStart)*100;
const vaultRemainPctEl=document.getElementById("vaultRemainPct");
if(vaultRemainPctEl){ vaultRemainPctEl.textContent=remain.toFixed(2)+"%"; }
const vaultProgressEl=document.getElementById("vaultProgress");
if(vaultProgressEl){ vaultProgressEl.style.width=Math.max(0,Math.min(100,remain))+"%"; }
const burnedToDateEl=document.getElementById("burnedToDate");
if(burnedToDateEl){ burnedToDateEl.textContent=fmt(DATA.vaultStart-DATA.vaultBalance); }

const communityBurnTotal = (DATA.burnLog || []).reduce((sum, r) => sum + (Number(r.burned) || 0), 0);
const buybackBurnTotal = (DATA.buybackLog || []).reduce((sum, r) => sum + (Number(r.godfatherBurned) || 0), 0);
const oathBurnTotal = (DATA.oathLog || []).reduce((sum, r) => sum + (Number(r.burned) || 0), 0);
const totalGodfatherBurned = communityBurnTotal + buybackBurnTotal + oathBurnTotal;
const godfatherRemaining = Math.max(0, (Number(DATA.totalSupply) || 0) - totalGodfatherBurned);

document.getElementById("godfatherRemainingSupply").textContent = fmt(godfatherRemaining);
document.getElementById("godfatherSupplyMeta").textContent =
  totalGodfatherBurned > 0
    ? `${fmt(totalGodfatherBurned)} $GODFATHER burned in verified logs.`
    : "Updates as verified burns are recorded.";

document.getElementById("sigmaRemainingSupply").textContent =
  DATA.sigmaRemainingSupply == null ? "TBA" : fmt(DATA.sigmaRemainingSupply);


function showAth(id,val){ const el=document.getElementById(id); if(el){ el.textContent=val==null?"—":fmt(val); } }
showAth("xAth",DATA.xAth); showAth("fomoAth",DATA.fomoAth);
const combinedAthEl=document.getElementById("combinedAth");
if(combinedAthEl){ combinedAthEl.textContent=(DATA.xAth==null||DATA.fomoAth==null)?"—":fmt((DATA.xAth||0)+(DATA.fomoAth||0)); }

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
if(DATA.oathLog && DATA.oathLog.length){
  const body=document.getElementById("oathRows"); body.innerHTML="";
  DATA.oathLog.forEach(r=>body.insertAdjacentHTML("beforeend",`<tr>
    <td>${r.date}</td><td>${r.wallet}</td><td>${fmt(r.burned)}</td><td>${fmt(r.rewardSent)}</td>
    <td>${r.rewardTx?`<a href="${r.rewardTx}" target="_blank" rel="noopener noreferrer">View ↗</a>`:"—"}</td>
  </tr>`));
}
# GODFATHER landing page v11

Optimized structure for GitHub + Vercel.

Files:
- index.html
- styles.css
- script.js
- assets/...

The large embedded images, CSS and JavaScript were removed from index.html and moved into separate files.
Upload the whole folder/repository, not only index.html.

- v12: added the previously generated walking-couple Family/legacy image before the FAQ.

- v13: added the loyalty hand-kissing image as an extra cinematic section before the FAQ.

- v14: clarified Family Vault copy and renamed the two burn ledgers to Family Vault Burn Log and $GODFATHER Buyback & Burn Log.

- v15 official data added:
  - Website: https://www.godfatheronsf.com/
  - X: https://x.com/godfatheronsf
  - Fomo: https://fomo.family/profile/godfatheronsf
  - $SIGMA CA: 5SVG3T9CNQsm2kEwzbRq6hASqh1oGfjqTtLXYUibpump
  - Family Vault wallet: [REDACTED — this was mistakenly the dev wallet, corrected in v29. Never publish the dev wallet address anywhere.]
- Still missing for full launch setup:
  - $GODFATHER CA
  - Dexscreener token/chart URL
  - StonkFun token page URL

- v16:
  - $GODFATHER mint / CA: Dqdshp9irA9fhXkBpi5GaMUk3HEf3aTevVim94S3Hj2m
  - Pool address: N4H42icHgbVorHS2gEvMcJna8pJ3ioW6DZ4FiECpP39
  - Dexscreener URL: https://dexscreener.com/solana/N4H42icHgbVorHS2gEvMcJna8pJ3ioW6DZ4FiECpP39
- Still missing:
  - StonkFun token page URL

- v17: top header reordered. X, Fomo and Dexscreener links sit to the left of the CA; CA + Copy is the rightmost element. StonkFun remains available in the lower official-links section.

- v18: added the live StonkFun token page: https://www.stonkfun.xyz/token/Dqdshp9irA9fhXkBpi5GaMUk3HEf3aTevVim94S3Hj2m

- v19: added $SIGMA Solscan link: https://solscan.io/token/5SVG3T9CNQsm2kEwzbRq6hASqh1oGfjqTtLXYUibpump

- v20:
  - removed the Solscan link from the site
  - removed the $SIGMA CA block from The Pairing section
  - added $GODFATHER CA + Copy below the $GODFATHER remaining supply number
  - added $SIGMA CA + Copy below the $SIGMA remaining supply number

- v21:
  - fixed project data in script.js (CA, Vault wallet and all official links)
  - added StonkFun to the top navigation
  - top X / Fomo / Dexscreener / StonkFun links now point to their live pages
  - set current displayed $SIGMA supply to 899,682,749 (static snapshot; automate later)

- v22: removed the pool address completely from the website and project data/config. Dexscreener link remains functional.

- v23:
  - fixed img-01 hero banner: removed the baked-in verbatim movie quote ("I'm gonna make him an offer he can't refuse") via a clean background patch — title and tagline artwork otherwise unchanged
  - fixed dex link in script.js: was mistakenly pointing to the X profile; now temporarily points to the StonkFun token page until the token graduates and a real Dexscreener URL exists
  - added assets/family-walk.jpg and assets/silent-oath.jpg (both reviewed: no verbatim text, no specific film-still reproduction, no identifiable real-person likeness)

- v24:
  - removed the last decorative ornament left over below the deleted hero quote — that area is now plain background, matching the rest of the banner
  - added the $GODFATHER coin icon next to its remaining-supply label; $SIGMA icon intentionally left out until a real asset is provided
  - added a new section, "The Oath", between Remaining Supply and The Family Vault: a limited, capped (100,000,000 $GODFATHER) loyalty program — buy + burn ≥100,000 $GODFATHER, submit the Solscan burn tx, get double sent back to the same wallet
  - moved the hand-kissing image (silent-oath.jpg) out of its old standalone cinematic-break spot and into The Oath section as its feature image, to avoid showing it twice
  - added a new "The Sworn" ledger (same accordion/table pattern as the other two logs) to publicly list participating wallets — currently empty
  - added DATA.oathLog and DATA.oathSubmitUrl to script.js — oathSubmitUrl is a placeholder ("#") and needs to be set to a real destination (form / Telegram / X DM) for burn-proof submissions

- v25: replaced assets/img-02-3c67414c04.png with the official wallet-visible $GODFATHER coin icon (circular badge, seated figure + cat + wordmark). Same filename, so it updates automatically in the nav, footer, and the $GODFATHER supply card.

- v26: added assets/sigma-icon.png — a simple gold Σ (Greek letter Sigma) coin badge, generated to match the site's visual style, since no usable official $SIGMA icon was available. Added next to the $SIGMA remaining-supply label.

- v27: set oathSubmitUrl to the X group chat invite (https://x.com/i/chat/group_join/g2096619881479147790/N0V3NB1Gpv) — the "Submit Your Burn" button now points here.

- v28: fixed index.html — the vault wallet address was hardcoded as "TBA — published at launch" in the HTML itself (only overwritten by script.js at runtime). Now the real address is baked into the HTML directly, so it's correct even if JavaScript fails to load.

- v29: **IMPORTANT CORRECTION** — the address previously used everywhere as the "Family Vault / burning wallet" was actually the dev wallet, mistakenly published in v15. It has been fully replaced with the correct burning wallet address: 6i9rmzmz1khmLH5j1sjkQdEAaziZVT7Ryo6KCYomuo5y — updated in script.js (vaultWallet) and index.html (fallback text). The dev wallet address must never be displayed anywhere on the site or in this file.
  - Also clarified Oath step 02: participants who don't want to self-burn may instead send their $GODFATHER to the burning wallet, and the team burns it on their behalf — reduction is verifiable on-chain via the $GODFATHER remaining supply counter either way.

- v30: restructured the site around the three agreed phases, clearly separated and labeled:
  - added a phase-tracker strip (Phase 1 / 2 / 3, with Phase 1 marked "Active") right before The Oath section
  - The Oath (Phase 1) is now tagged "Phase 1 · Active" and shown in full detail, as before
  - The Family Vault (Phase 2) and Buyback & Burn (Phase 3) are now teaser-only: eyebrow + "Coming" tag + one-line description + their burn log accordion (still empty). The detailed Vault balance/progress/wallet/follower card and the milestone list are hidden until Phase 1 closes — the markup was removed, not just visually hidden, so nothing half-loads.
  - script.js: guarded every Phase-2-only DOM lookup (vaultBalance, vaultWallet, xAth, fomoAth, combinedAth, etc.) with existence checks so the rest of the script (supply counters, copy buttons, log rendering) keeps working now that those elements aren't in the DOM. DATA still holds vaultWallet/xAth/fomoAth for when Phase 2 is revealed in full later — only the HTML display was removed.
  - changed the Oath CTA button text from "Submit Your Burn" to "Submit in the Family Chat", and updated the note beside it to make clear the button opens a chat where the wallet address and Solscan link should be sent.

- v31: header/nav redesign:
  - brand icon and wordmark enlarged (logo 38px → 50px, wordmark ~1.4rem); the Σ-for-E in $GODFATHΣR is unchanged
  - nav links (X, Fomo, Dexscreener) converted from plain text to small circular icon buttons with their familiar icons; StonkFun stays as the bordered text button
  - added a new nav icon linking to the X group chat (DATA.links.chat) — separate from the X profile icon
  - removed the old .header-right wrapper and all now-dead v17 CSS for it; nav layout is handled directly by .nav/.navlinks/.top-ca
  - the CA box is pushed to the far right of the header (margin-left:auto) with a bolder gold border, larger text, and a bigger, more visible Copy button (icon + label, gold border, fills gold on hover)
  - unified the header's typography to Fraunces (serif) across the wordmark, nav links, CA label, and Copy button — only the contract address itself stays in a legible monospace-style font
  - nav links no longer hide on mobile (icons are compact enough); the CA box still wraps to its own full-width row on narrow screens

- v32:
  - removed the Dexscreener nav icon for now, since the link isn't functional until graduation (still present in the "Official links" section and footer — flag if those should come out too)
  - CA box in the header no longer truncates — the full contract address is always shown in full, box grows to fit
  - added a "Reward reserve — dev wallet" box inside The Oath (Phase 1) section: shows the dev wallet's current $GODFATHER balance (starting at 200,000,000) WITHOUT showing its address, plus an explanation of why it's 200M — the Oath caps burns at 100,000,000 $GODFATHER and pays double, so 200,000,000 covers the full program up front. DATA.oathReserveBalance added to script.js; update this number as the reserve drains from paying out rewards.
  - Fomo nav icon: pending — user wants fomo.family's actual "two eyes" icon; waiting on the asset to be uploaded before swapping it in.

- v33: replaced the Fomo nav icon with plain text ("fomo"), styled to match the header's unified Fraunces typography, since the actual Fomo icon asset wasn't available.

- v34: removed every remaining Dexscreener reference site-wide for now (Official links button, footer link, DATA.links.dex, linkMap entry) — not just the nav icon. Add it back once a real Dexscreener URL exists post-graduation; a comment in script.js marks where.

- v35: added a new FAQ entry, "What is $SIGMA?", right before "Why is $SIGMA the reward pair?" — a short answer with a link to https://x.com/SigmaOnSol69 for anyone who wants the full story. Added visible link styling (gold, underlined) inside FAQ answers since links there previously inherited the invisible default anchor style.

- v36: reworked The Oath's numbers per the real program design:
  - reward pool is now stated as 200,000,000 $GODFATHER (not 100,000,000) — 100,000,000 is the aggregate qualifying-burn target across all wallets; the pool pays double on that, hence 200M.
  - added a hard per-wallet range: burn 50,000–1,000,000 $GODFATHER to qualify. Below 50,000 = not eligible (chosen deliberately over a "floor guarantee" reading, which would let someone Sybil the pool with many trivial burns across wallets — flagged to the user, confirmed this is the intended design). Above 1,000,000, only the first 1,000,000 counts.
  - resulting reward range: 100,000–2,000,000 $GODFATHER per wallet (double the qualifying, clamped burn).
  - updated: the intro paragraph, step 02, step 04, the oath-pool highlight, and the reserve-card note — all now consistent with the same figures.

- v37: added a prominent "Godfather Burn Wallet" box to The Oath (Phase 1) section, right after the Reward Reserve card — shows the full burn wallet address (6i9rmzmz1khmLH5j1sjkQdEAaziZVT7Ryo6KCYomuo5y) in a monospace code element with a large, visible Copy button (same style as the header's CA copy button). Reuses the existing id="vaultWallet" / DATA.vaultWallet binding from script.js, so no new JS was needed — the element was simply reintroduced into the DOM in a new location. Includes a one-line note clarifying this is not the dev wallet.

- v38: "The Sworn" ledger now only links the reward transaction, not the burn transaction — the burn amount is shown as a plain number in its own column instead (the burn is already verifiable on-chain via the burn wallet / remaining-supply counter, so a second link was redundant). index.html: table header changed from "Transaction" to "Reward tx". script.js: oathLog rows now render `r.rewardTx` instead of `r.tx`; each oathLog entry is `{ date, wallet, burned, rewardSent, rewardTx }`.

- v39: added the first live "The Sworn" entry — wallet 99HwYT...ci4Apr, burned 500,000 $GODFATHER (sent), rewarded 1,000,000 $GODFATHER, dated September 7, 2026, reward tx linked (orbmarkets.io, since Solscan's page is JS-rendered and wasn't fully readable via fetch — orbmarkets shows the same on-chain data via Helius). Also added `actualBurned` (485,000) to the oathLog entry schema — the net amount actually destroyed by the burn wallet's Burn instruction after the 3% transfer tax — and wired it into the site-wide $GODFATHER remaining-supply calculation (previously only burnLog and buybackLog fed that number; oathLog burns were invisible to the supply counter). The table itself still shows only the sent amount (500,000, the reward basis), not the net-burned figure.

- v40: corrected the "$GODFATHER burned" figure shown in The Sworn table — it now shows the NET amount (after the 3% transfer tax), not the amount the participant sent. First entry corrected: 500,000 sent → 485,000 shown as burned. oathLog schema updated: `burned` now holds the net/post-tax figure (feeds both the table and the site-wide remaining-supply total directly, no separate field needed); `sentAmount` added to hold the pre-tax amount the reward is calculated on, kept for reference but not rendered as its own column. Also added a note to the Sworn log's description (index.html) explaining the 3% transfer tax so the community understands why the burned figure is lower than what a participant actually sent.

- v41: added the second live "The Sworn" entry — wallet 55zCZh...HgfWrA, sent 1,000,000 $GODFATHER (the per-wallet cap), 970,000 net burned after the 3% transfer tax, rewarded 2,000,000 $GODFATHER (also the per-wallet cap), dated September 8, 2026, reward tx linked. Both the burn-side transfer and the reward-side transfer were verified on-chain (via orbmarkets.io/Helius) to land on the same wallet, per the Oath's "double sent back to the same wallet" rule.

- v42: added the third live "The Sworn" entry — wallet D7GVcm...kKCrir, sent 1,000,000 $GODFATHER (cap), 970,000 net burned after the 3% tax, rewarded 2,000,000 $GODFATHER (cap), dated September 8, 2026, reward tx linked. Verified burn-side and reward-side transactions both land on the same wallet.

- v43: two fixes to The Oath (Phase 1) section:
  - the "Reward reserve — dev wallet" balance is now computed dynamically (200,000,000 starting pool minus the sum of every rewardSent in oathLog) instead of being a hardcoded number that had to be manually edited after each payout — it now drains automatically as new Sworn entries are added.
  - renamed "The Sworn" ledger heading to "The Sworn — The Inner Family" for clarity, so it's immediately obvious this table lists the wallets that have been matched/rewarded, not just burned.

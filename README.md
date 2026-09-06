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
  - Family Vault wallet: ATuoUTvtViKWrGaonZDPWTAdLE8Eq8V3Dq1AHCCpPiXn
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

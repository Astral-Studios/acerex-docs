---
title: Changelogs
---

Below you will find a comprehensive list of all changes made to Cobbleco.re Skyblock. This includes updates to gameplay, plugins, balancing, bug fixes, and server infrastructure. Entries are listed in reverse chronological order, with the 
most recent update at the top.

## How to Read Changelogs

Each changelog entry follows a consistent format to make it easy to understand what changed and why. Here's what each tag means:

| Tag | Meaning |
|---|---|
| ✅ Added | New features or content introduced |
| 🔧 Changed | Adjustments to existing features or balancing |
| 🐛 Fixed | Bug fixes and patches |
| ❌ Removed | Features or content taken out |
| ⚠️ Known Issues | Active bugs or issues being investigated |

<br />

---

# v1.3.0 — June 8, 2026

:::note
This is just a temp changelog to see how they will look.
:::

**Summary:** Major island progression update introducing the Prestige 
system, a reworked minion economy, and a brand new Fishing Island 
alongside several community-requested quality of life changes.

### ✅ Added
- Island Prestige system — reset your island for exclusive cosmetic 
  rewards and a permanent +10% sell bonus per prestige level
- New Fishing Island accessible via /warp fishing — 
  includes 4 fishing zones with unique loot tables per zone
- Added Cobblestone Minion tier 11 and 12 — crafting recipes 
  available on the wiki
- New island block: Enchanted Compactor — automatically compresses 
  items in your island storage
- /is levels command now shows a full breakdown of your island 
  point sources
- Added 4 new crop types to the farming shop: 
  Cocoa Beans, Nether Wart, Kelp, and Bamboo
- Seasonal Challenge Board added at spawn — 
  refreshes every Monday at 12AM EST

### 🔧 Changed
- Minion sell rates rebalanced across all tiers — 
  higher tier minions now scale more aggressively
- Auction House listing limit increased from 12 to 20 active 
  listings per player
- Island border expansion costs reduced by 15% across all tiers
- Crop sell prices adjusted — Wheat reduced slightly, 
  Pumpkin and Melon increased to incentivise mid-game farming
- /is top now refreshes every 30 minutes instead of hourly
- Void protection now activates 3 blocks above the void 
  instead of 1, reducing accidental deaths

### 🐛 Fixed
- Fixed an issue where minions would stop collecting after a 
  server restart without being manually re-placed
- Fixed the Auction House search bar not returning results 
  for enchanted item names
- Resolved a bug where island co-op members could accidentally 
  break visitor-protected blocks
- Fixed /is go not working correctly after island deletion 
  and regeneration
- Resolved an exploit where hopper chains could bypass 
  sell chest permission checks

### ❌ Removed
- Removed the Legacy Starter Island template — 
  replaced with the updated Cobbleco.re Starter Island v2
- Removed /shop category: Miscellaneous — 
  items redistributed across relevant existing categories

### ⚠️ Known Issues
- Fishing Island loot table occasionally returns null 
  on first cast after joining — re-casting resolves this
- Enchanted Compactor does not currently support Kelp 
  compression — fix targeted for v1.3.1
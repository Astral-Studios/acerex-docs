---
title: Faction Relationships
---
Factions can set a relationship status with any other faction on the server. Your relationship determines whether you can PvP each other, how you appear on each other's `/f map`, and what access other factions have to your territory.

There are three relationship types: **Ally**, **Neutral**, and **Enemy**.

---

# Neutral

Neutral is the default state between all factions. You've made no agreement and no declaration, you're simply strangers.

- PvP is allowed between neutral factions
- Neither faction can build or loot in the other's claimed territory
- Neutral factions appear in **white** on `/f map`

Most factions you encounter will be neutral. Treat every neutral faction as a potential threat until you know otherwise.

---

# Ally

An alliance is a mutual agreement between two factions. Both factions must agree — one proposes it and the other accepts.

`/f ally <factionname>`

If the other faction runs the same command back, the alliance is confirmed. If they haven't proposed yet, they'll receive a pending request.

**What changes with an ally:**
- You cannot PvP each other (friendly fire is disabled). 
- Allies appear in **green** on `/f map` and in chat. 
- You can see allied faction members' name tags through walls. 

### Insiding

The biggest risk with allies is **insiding**, which is when a trusted faction (or member) deliberately abuses their access to steal your items, destroy your base, or leak your location to enemies before leaving or declaring war.

To protect yourself:
- Only ally factions you have an established relationship with, ideally people you know outside the game. 
- Avoid sharing your base coordinates or `/f home` with allies you haven't fully vetted. 
- If something feels off, drop the alliance with `/f neutral <factionname>` before it's too late.
:::tip
Don't trust strangers! You never know who might be pretending to be your friend just to steal your items.
:::

---

# Enemy

Declaring a faction an enemy is a public statement of war. Unlike alliances, **this is one-sided**, you don't need their agreement.

`/f enemy <factionname>`

**What changes with an enemy:**
- PvP is enabled (same as neutral, but now intentional.). 
- Enemies appear in **red** on `/f map` and in chat, making them easy to spot.
- Their name tags are visible through walls at close range.
- You can attempt to overclaim their land if their power is low enough.

Declaring an enemy doesn't give you any special mechanical advantage over neutral, the main benefit is the visual indicators. Knowing exactly who your enemies are on the map and in chat can make a real difference in a chaotic fight.

:::tip
 You don't need to formally declare enemies to raid or fight someone. Many factions keep others at neutral and raid them anyway. Declaring enemy is mainly a visual and political tool.
:::

### Removing the Enemy Status

To return to neutral:

`/f neutral <factionname>`

This is also how you break off an alliance, running `/f neutral` on an ally resets the relationship to neutral immediately.

---

# Relationship Summary

| | Ally | Neutral | Enemy |
|---|---|---|---|
| **Map color** | Green | White | Red |
| **PvP enabled** | No | Yes | Yes |
| **Can build in your territory** | — | No | No |
| **Name tags visible through walls** | Yes | No | Yes |
| **Requires mutual agreement** | Yes | — | No |

---

# Commands

| Command | Description |
|---|---|
| `/f ally <name>` | Propose or confirm an alliance |
| `/f enemy <name>` | Declare a faction an enemy |
| `/f neutral <name>` | Return to neutral (also breaks alliances) |
| `/f show <name>` | View a faction's current allies and enemies |
| `/f list` | Browse all factions on the server |

For a complete command reference, see the [Commands](\getting-started/commands) page.
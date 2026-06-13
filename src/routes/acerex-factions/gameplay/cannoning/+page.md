# Cannoning

TNT cannons are the primary way to break into a claimed, defended base. Since you can't place blocks inside enemy territory, you build a cannon *outside* their claim and fire primed TNT through the air and into their walls. A well-built cannon can punch through obsidian, bypass water shielding, and stack dozens of explosions in a single shot.

Cannoning is one of the most technical skills in Factions. This page covers how cannons work, the types you'll use most, what to do and avoid, and how to fire them effectively.

---

## How TNT Cannons Work

The core mechanic is simple: use one set of TNT explosions to launch another piece of TNT through the air before it detonates. The launched TNT lands inside or against the enemy wall and explodes, destroying blocks.

The key timing rule: **a primed TNT block always detonates approximately 4 seconds (40 game ticks) after it is ignited.** Everything about cannon design is built around controlling that window — igniting your charge TNT early enough that the explosion launches your payload TNT at the right moment, with just enough time left in its fuse to travel to the target and detonate on impact.

### Basic Components

**Charge (propellant)** — The TNT placed in water that explodes to launch the payload. The water prevents it from destroying the cannon structure while still generating force.

**Payload** — The TNT being launched. It's ignited slightly after the charge so that the blast wave catches it and sends it flying. It needs to reach the target before its fuse runs out.

**Barrel** — The channel that directs and shapes the trajectory of the payload. The design of the barrel determines how far and how accurately the shot travels.

**Wiring** — The redstone timing system. Repeaters control the delay between igniting the charge and the payload, which determines the range and arc of the shot.

> 💡 **Ticks** — Minecraft runs at 20 game ticks per second. Redstone repeaters add delay in ticks (1 tick = 0.05 seconds, a full repeater = 4 ticks = 0.2 seconds). Cannon timing is measured in ticks — this is the language you'll see when reading cannon guides or schematics.

---

## Cannon Types

### Basic Cannon
The simplest form — a straight barrel with charge TNT in water and a single payload. Good for learning and for breaching undefended or lightly defended walls.

**Limitations:** Shots that land in water won't damage blocks. Basic cannons are useless against water-covered bases, which most defended bases will have. Use a hybrid cannon instead.

---

### Hybrid Cannon
The most commonly used raiding cannon. A hybrid fires sand (or gravel) alongside the TNT payload so that both land in the same block at the target. When TNT explodes inside a solid block (the sand), Minecraft treats it as a contact detonation and the explosion damages surrounding blocks — even through water.

This is how you break through watered obsidian walls.

**How it works:**
1. Sand is launched on a slightly different trajectory so it arrives at the wall a fraction before the TNT
2. The TNT lands in the same block as the sand
3. The explosion fires as if it's inside a solid block, bypassing the water protection

The number of sand blocks the cannon stacks in a single shot determines how deep it can penetrate. A **20 stacker** puts 20 sand into the same block, creating a much more powerful detonation than a single-sand shot.

---

### Sand Stacker
An advanced cannon design that compresses a large number of sand blocks into a single block before firing, then launches that compressed stack at the target. The goal is to stack as much sand as possible in one shot to maximise wall penetration.

Key components of a sand stacker:

**Compressor** — Gathers a large amount of sand into a tight space, often using pistons and cobwebs to compress them into a single block.

**Hammer** — A secondary volley of TNT that fires slightly after the compressor, pushing the stacked sand down into the wall rapidly so it can't spread before detonating. The general rule: one TNT in the hammer pushes roughly 1.1 sand blocks, so size your hammer slightly larger than your sand count to be safe.

**Booster** — Additional charge TNT that compacts the payload further before launch, increasing force and accuracy.

A well-built stacker can put 20, 40, 100, or even 255 sand blocks into a single block — this is what cannon names like "20 stacker" or "255 stacker" refer to.

---

### Slab Bust Cannon
Bases often place slabs at the point where walls would be breached to stop sand from stacking (sand can't stack on a slab). A slab bust cannon uses a slightly delayed set of TNT — timed using tick oddities in Minecraft's redstone system — to destroy the slab in the same shot that fires the sand, removing the protection and allowing the stack to land.

Without slab bust capability, your sand stackers will fail against any base that's properly protected with slabs.

---

### Flying / Mobile Cannon
A cannon built on a slime block flying machine, allowing it to move while firing. The practical use is approaching a target base slowly while continuously firing — rather than building at max range and hoping for accuracy, you can close the distance mid-raid.

Flying cannons are more complex to build and can be server or version dependent. Verify whether flying machines function on AceRex before investing resources in one.

---

### Reverse Cannon (Counter-Cannon)
A cannon built inside or directly adjacent to your own base, designed to fire back at an attacker's cannon position. Used defensively to destroy enemy cannons before they can breach your walls.

---

## Cannon Placement and Tactics

**Build outside the claim, fire in.** You can't place blocks in enemy territory, so your cannon always sits in unclaimed land or your own claimed land adjacent to theirs. Build as close as you can while staying outside their claim.

**Max cannon distance** — TNT has a travel limit before its fuse expires mid-air. Most cannons have an effective range of roughly 20–100 blocks depending on design. If the target is too far, your shot will explode in the air harmlessly.

**Stay out of sight.** A cannon is useless if the enemy sees it and either runs to defend or logs off and moves their valuables. Build underground or camouflage the structure with natural-looking blocks (stone, dirt) to avoid tipping them off.

**Know your Y level.** The height of your shot matters — TNT determines its vertical position before its horizontal position during flight. Aim your cannon to match the Y level of the wall section you're targeting. Most bases top out at Y 255 and are watered — you typically want to aim for the wall face rather than the top.

**Corner advantage.** World border corners only have two exposed sides instead of four. When raiding a corner base, you can only approach from two directions — plan your cannon accordingly.

---

## Dos and Don'ts

**Do:**
- Test your cannon in creative mode before building it on the live server — TNT is expensive and mistakes waste resources
- Use alignment carefully — TNT is 0.98 blocks wide when ignited, not a full block. Components on opposite sides of the barrel that fire at different times can cause shots to veer sideways
- Build a secondary cannon or have materials for a rebuild — cannons can be counter-cannoned or destroyed mid-raid
- Keep your cannon supplied with more TNT than you think you'll need
- Use slab bust against any well-built base — assuming they have slab protection is safer than assuming they don't
- Bring water buckets — if your cannon catches fire or takes damage, you'll need to make quick repairs

**Don't:**
- Fire into water without a hybrid setup — standard TNT shots do zero block damage in water
- Build your cannon directly on the enemy claim line without checking — you need to be outside their territory to place blocks
- Use a cannon schematic designed for a different Minecraft version without testing it — timing and mechanics change between versions and what works on 1.8 may not work on 1.12+
- Stand directly behind the charge TNT when it fires — the blast will kill you
- Announce in chat that you're raiding someone — gives them time to log on and defend

---

## Defending Against Cannons

Understanding how cannons work helps you build a base that resists them:

- **Water your walls** — bare obsidian can be cracked by basic cannons. Water-covered walls require a hybrid cannon to breach, which is significantly harder to build
- **Place slabs on your wall face** — slabs prevent sand from stacking, forcing attackers to use a slab bust cannon
- **Build at Y 255 with water on top** — maximises the distance attackers need to travel in their shot arc and forces them to deal with water on every surface
- **Keep a reverse cannon ready** — if you can destroy their cannon before they breach, the raid fails

For more on base construction and defense, see the [Base Building](base-building) page.

---

## Further Learning

Cannoning is deep enough that whole communities are dedicated to it. For schematics and advanced techniques beyond what's covered here, YouTube searches for terms like **"factions hybrid cannon tutorial"**, **"sand stacker cannon factions"**, or **"slab bust cannon [your version]"** will get you video walkthroughs with visual builds you can follow block by block.
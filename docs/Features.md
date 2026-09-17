# Features & Architecture ⚡🛡️

PalSupervisor operates as an in-process native supervisor for Palworld dedicated servers (`PalServer-Win64-Shipping-Cmd.exe`). Engineered in high-performance C++20, PalSupervisor hooks directly into Unreal Engine 5.1.1 runtime memory via a non-intrusive Windows proxy DLL (`version.dll`).

---

## 1. Engine Detour Hooking & Zero-Tick Architecture
* **Direct ProcessEvent Interception**: Detours player RPCs and engine dispatch tables before server gameplay logic processes them, allowing instant sanitization of malicious network packets.
* **No Disk Modification**: Hooks game memory dynamically upon server boot. No game files or executable binaries are patched on disk.
* **Zero Overhead**: Detour hook execution overhead is measured under 0.02 milliseconds per tick, preserving 100% server tick rate (TPS).

---

## 2. Autonomous Server Janitor & Audit Trail 🧹
* **Scheduled Background Automation**: Configured via `"janitor"` in `config.json` to continuously maintain world health and garbage collection.
* **Orphaned Wild Structure Demolition**: Automatically detects and dismantles structures built outside official guild base camp circles (`wild_builds_interval_sec`), freeing up physics memory and actor limits.
* **Loose Ground Drop Purging**: Sweeps abandoned ground item drops (`DropItem`) at scheduled intervals (`drops_interval_sec`, default 600s) to prevent RAM bloat and physics clutter.
* **Periodic World Auto-Save**: Triggers native `StartWorldDataAutoSave` on configurable intervals (`auto_save_interval_sec`, default 300s) with zero player stutter.
* **Scheduled Rotating Announcements**: Broadcasts server tips and alerts (`broadcast_interval_sec`, default 900s) directly to all player HUDs.
* **Live In-Memory Audit Trail**: Records up to 500 recent swept items in an in-memory ring buffer accessible via `GET /api/janitor/swept` and in-game command `/janitor history`. Captures item category, item name, quantity, owner UID, owner player name, UE world coordinates, and in-game map coordinates.
* **Manual & Automated Sweeps**: Supports background timers as well as instant manual sweeps with customizable criteria via `POST /api/janitor/run` and `/janitor run`.

---

## 3. Unified Player Buffs & Visual Auras Engine ✨
* **Preset Multiplier Buffs**: Configured via `PalSupervisor/config/buffs.json` with customizable stat multipliers:
    * Attack Multiplier (e.g. 1.5x)
    * Defense Multiplier (e.g. 2.0x)
    * Movement Speed Multiplier (e.g. 1.6x)
    * Critical Hit Rate & Critical Damage Multipliers
    * EXP & Loot Drop Rate Multipliers (e.g. 2.0x)
    * Infinite Sprint Stamina & Godmode Invulnerability toggles
* **Pure Cosmetic Particle Auras (Zero Damage Ticks)**:
    * Uses native Unreal Engine `UPalVisualEffectComponent` (`APalCharacter + 0x0678`) and `EPalVisualEffectID` without inflicting status ailment tick damage.
    * 19 Distinct Visual Particles: `lucky` (Rare Pal sparkles), `awakening` (Golden holy flame), `world_tree` (Sacred radiance), `burn` (cosmetic roaring flames), `freeze` (cosmetic ice frost), `electrical` (cosmetic lightning sparks), `poison` (cosmetic toxic mist), `wetness`, `darkness`, `earth`, `leaf`, `pal_enhancement`, `life_steal`, `low_gravity`, `player_buff`, `attack_up`, `defense_up`, `power_up`, `dragon`.
* **Summoned Pal (Otomo) Dual Application**:
    * Automatically detects if the player has an active summoned Pal out via `GetActiveOtomoActors`.
    * Applies the visual effect directly to both the player and their active combat Pal simultaneously, with automatic player-compatible fallback radiance for Pal-exclusive Niagara effects.
* **World Buff & Permanent Assignments**:
    * Schedule server-wide buffs for all players or lock permanent buffs to server administrators and VIPs.

---

## 4. Real-Time Spatial Live Map & Entity Radar 🗺️
* **Full-World Entity Indexing**: Continuously indexes live world entities including loose loot, player death corpse containers, wild dropped Pal spheres, world treasure chests, dungeon chests, wild Pal eggs, supply drop capsules/meteorites, and unowned player structures.
* **Calibrated Dual-Coordinate Projection**: Projects raw 3D Unreal Engine centimeter vectors into standard Palworld in-game map coordinates ($X, Y$) matching the player HUD map ($X = \text{WorldX} \times 0.002179 - 344$, $Y = \text{WorldY} \times 0.002179 + 270$).
* **One-Click Deathbag Recovery**: Direct item restoration from deathbags into player inventories via `POST /api/map/recoverbag` or in-game command `/recoverbag`.

---

## 5. Proactive Anti-Cheat Matrix 🛡️
* **Movement & Delta-Position Validation**: Calculates delta position over delta time to detect speed hacking, fly hacking, and illegal coordinate teleportation.
* **Stamina & Stat Sanitization**: Detects and clamps impossible stamina values, health spikes, and unearned stat points.
* **Illegal Item & Pal Detection**: Filters out unobtainable or blacklisted item IDs and illegal Pal passives.
* **Chat Security & Admin Protection**: Intercepts accidental leaks of administrator passwords in chat, while preserving legitimate `/admin` and `/AdminPassword` authentication commands.
* **Evidence Logging & Webhooks**: Maintains an active violation score per player, triggers auto-bans when thresholds are breached, and dispatches rich embed alerts to Discord webhooks.

---

## 6. Dynamic Boss & Encounter Engine 👑
* **Template-Driven Boss Spawns**: Define custom multi-tier boss encounters in `PalSupervisor/Templates/*.json` with custom hitpoints, minions, level scaling, and drop tables.
* **Invasion Raid Management**: Trigger, monitor, or immediately cancel base camp raid events with `/raid` and `/stopraid`.
* **Supply Drops & Meteorites**: Trigger on-demand supply capsules or meteorite strikes at specific coordinates or target players.

---

## 7. Pal Progression & Base Protection 🏰
* **Pal Condenser Rank 5**: Unlocks maximum tier condensation enhancement for companion Pals.
* **Breeding Farm Protection**: Safeguards breeding farm containers and eggs against foreign player intrusion or accidental janitor sweeps.
* **Clean Base Wipe (`/basewipe`)**: Erases orphaned or toxic player base camps with zero item spill.

---

## 8. Native Embedded REST API on Port 27020 🌐
* **High-Speed HTTP Daemon**: Lightweight, multi-threaded C++ REST API listening on port `27020` (`http://127.0.0.1:27020`).
* **Over 240+ Administrative Endpoints**: Complete server telemetry, player moderation, buff management, janitor controls, cheat toggles, and live radar feeds for web panels and Discord bots.

# In-Game Chat Commands Guide 💬🎮

> **PalSupervisor features 186 high-performance native chat commands** with zero tick lag, full permission gating, and command auto-completion.

Commands can be executed directly in in-game chat (prefixed with `/`) or remotely via the embedded REST API (`POST /admin/command` or `/v1/api/command`).

Each category below is **fully collapsible and expandable**. Click any category to reveal its commands, and click any command to inspect syntax, description, permission requirements, arguments, and practical usage examples.

!!! tip "Permissions"
    * **Admin Only**: Requires player to be listed in `admins.json`, have active `bAdmin` status via `/AdminPassword`, or be called via authenticated REST API.
    * **All Players**: Publicly usable by all connected players with anti-spam rate limiting.

---

??? note "🏰 Guild & Base Camp Management (20 commands)"

    > Base camp inspection, container storage chest auditing, guild rosters, member promotions, and clean zero-spill base wiping.

    ??? info "/basechests — Inspect container storage contents and locks inside a base camp."
        **Syntax:** `<base_id>`  
        **Description:** Inspect container storage contents and locks inside a base camp.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <base_id>
        ```

    ??? info "/baseinfo — Show base camps or inspect workers (HP, SAN, sickness) and chests for a specific base."
        **Syntax:** `[base_id]`  
        **Description:** Show base camps or inspect workers (HP, SAN, sickness) and chests for a specific base.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [base_id]
        ```

    ??? info "/baserelocate — Relocate a base camp and Palbox to the caller's current coordinates."
        **Syntax:** `<base_id>`  
        **Description:** Relocate a base camp and Palbox to the caller's current coordinates.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <base_id>
        ```

    ??? info "/basewipe — Cleanly wipe all structures and chests in a base camp with zero item drops."
        **Syntax:** `<base_id>`  
        **Description:** Cleanly wipe all structures and chests in a base camp with zero item drops.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <base_id>
        ```

    ??? info "/destroyguild — Alias for /guilddisband."
        **Syntax:** `<guild_id|guild_name>`  
        **Description:** Alias for /guilddisband.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <guild_id|guild_name>
        ```

    ??? info "/guild — Unified guild management: list, info, promote, demote, kick, add, transfer, disband, destroy, blacklist."
        **Syntax:** `<action> [args...]`  
        **Description:** Unified guild management: list, info, promote, demote, kick, add, transfer, disband, destroy, blacklist.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[args...]`  
        **Example:**
        ```text
        <action> [args...]
        ```

    ??? info "/guildadd — Add a player directly into a guild (auto-queues if offline)."
        **Syntax:** `<guild_id|guild_name> <player>`  
        **Description:** Add a player directly into a guild (auto-queues if offline).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<player>`  
        **Example:**
        ```text
        <guild_id|guild_name> <player>
        ```

    ??? info "/guildaudit — View recent item deposits, withdrawals, and quick-stacks in guild chests."
        **Syntax:** `<guild_id|guild_name> [limit]`  
        **Description:** View recent item deposits, withdrawals, and quick-stacks in guild chests.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[limit]`  
        **Example:**
        ```text
        <guild_id|guild_name> [limit]
        ```

    ??? info "/guildblacklist — Manage blacklisted players for a guild."
        **Syntax:** `<guild_id|guild_name> <add|remove|list> [player] [reason]`  
        **Description:** Manage blacklisted players for a guild.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<add|remove|list> [player] [reason]`  
        **Example:**
        ```text
        <guild_id|guild_name> <add|remove|list> [player] [reason]
        ```

    ??? info "/guilddemote — Demote a guild member to regular Member or Guest."
        **Syntax:** `<guild_id|guild_name> <player> [member|guest]`  
        **Description:** Demote a guild member to regular Member or Guest.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<player> [member|guest]`  
        **Example:**
        ```text
        <guild_id|guild_name> <player> [member|guest]
        ```

    ??? info "/guilddestroy — Alias for /guilddisband."
        **Syntax:** `<guild_id|guild_name>`  
        **Description:** Alias for /guilddisband.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <guild_id|guild_name>
        ```

    ??? info "/guilddisband — Permanently disband and dispose a guild."
        **Syntax:** `<guild_id>`  
        **Description:** Permanently disband and dispose a guild.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <guild_id>
        ```

    ??? info "/guildinfo — Inspect a guild: master, member roster, base camp IDs, raid status."
        **Syntax:** `<guild_id|guild_name>`  
        **Description:** Inspect a guild: master, member roster, base camp IDs, raid status.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <guild_id|guild_name>
        ```

    ??? info "/guildkick — Kick a member from a guild."
        **Syntax:** `<guild_id> <player_uid|player_name>`  
        **Description:** Kick a member from a guild.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<player_uid|player_name>`  
        **Example:**
        ```text
        <guild_id> <player_uid|player_name>
        ```

    ??? info "/guildlist — List all active guilds, levels, member counts, and base counts."
        **Syntax:** `/guildlist`  
        **Description:** List all active guilds, levels, member counts, and base counts.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /guildlist
        ```

    ??? info "/guildpending — List pending offline guild joins waiting for player login."
        **Syntax:** `[guild_id|guild_name]`  
        **Description:** List pending offline guild joins waiting for player login.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [guild_id|guild_name]
        ```

    ??? info "/guildpromote — Promote a guild member to SubMaster (Officer) or GuildMaster."
        **Syntax:** `<guild_id|guild_name> <player> [submaster|master]`  
        **Description:** Promote a guild member to SubMaster (Officer) or GuildMaster.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<player> [submaster|master]`  
        **Example:**
        ```text
        <guild_id|guild_name> <player> [submaster|master]
        ```

    ??? info "/guildremove — Remove a member from a guild."
        **Syntax:** `<guild_id|guild_name> <player>`  
        **Description:** Remove a member from a guild.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<player>`  
        **Example:**
        ```text
        <guild_id|guild_name> <player>
        ```

    ??? info "/guildtransfer — Transfer guild leadership to a player."
        **Syntax:** `[guild] <player>`  
        **Description:** Transfer guild leadership to a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<player>`  
        **Example:**
        ```text
        [guild] <player>
        ```

    ??? info "/setguildleader — Alias for /guildtransfer."
        **Syntax:** `[guild] <player>`  
        **Description:** Alias for /guildtransfer.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<player>`  
        **Example:**
        ```text
        [guild] <player>
        ```

??? note "⚔️ Combat, Godmode & Admin Cheats (14 commands)"

    > Combat cheats, infinite stamina, immortality, admin weapons, one-hit kill, player resurrection, heal, freeze, and visual aura effects.

    ??? info "/aura — Attach or clear visual particle auras."
        **Syntax:** `[player] <aura_name|off>`  
        **Description:** Attach or clear visual particle auras.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<aura_name|off>`  
        **Example:**
        ```text
        [player] <aura_name|off>
        ```

    ??? info "/buff — Grant or clear custom stat/aura buffs."
        **Syntax:** `[player] <buff_name> [duration]`  
        **Description:** Grant or clear custom stat/aura buffs.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<buff_name> [duration]`  
        **Example:**
        ```text
        [player] <buff_name> [duration]
        ```

    ??? info "/endspectate — Exit spectator mode and return to your player character."
        **Syntax:** `/endspectate`  
        **Description:** Exit spectator mode and return to your player character.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /endspectate
        ```

    ??? info "/freeze — Disable player input. 0 = until /unfreeze."
        **Syntax:** `<player> [seconds]`  
        **Description:** Disable player input. 0 = until /unfreeze.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[seconds]`  
        **Example:**
        ```text
        <player> [seconds]
        ```

    ??? info "/godmode — Toggle invincibility for a player."
        **Syntax:** `<player> [on|off]`  
        **Description:** Toggle invincibility for a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[on|off]`  
        **Example:**
        ```text
        <player> [on|off]
        ```

    ??? info "/godweapon — Alias for /adminweapon."
        **Syntax:** `[on|off|give] [player]`  
        **Description:** Alias for /adminweapon.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[player]`  
        **Example:**
        ```text
        [on|off|give] [player]
        ```

    ??? info "/heal — Restore a player to full HP. Defaults to self."
        **Syntax:** `[player]`  
        **Description:** Restore a player to full HP. Defaults to self.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/kill — Kill a player (instant lethal death drop). Defaults to self."
        **Syntax:** `[player]`  
        **Description:** Kill a player (instant lethal death drop). Defaults to self.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/killboss — Despawn active summoned bosses and minions (optional: around player or radius)."
        **Syntax:** `[player] [radius]`  
        **Description:** Despawn active summoned bosses and minions (optional: around player or radius).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[radius]`  
        **Example:**
        ```text
        [player] [radius]
        ```

    ??? info "/onehit — Alias for /adminweapon."
        **Syntax:** `[on|off|give] [player]`  
        **Description:** Alias for /adminweapon.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[player]`  
        **Example:**
        ```text
        [on|off|give] [player]
        ```

    ??? info "/revivepals — Revive and fully restore HP, hunger, and sanity of all party Pals."
        **Syntax:** `<player>`  
        **Description:** Revive and fully restore HP, hunger, and sanity of all party Pals.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/spectate — Spectate a player in admin mode."
        **Syntax:** `<player>`  
        **Description:** Spectate a player in admin mode.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/stopspectate — Exit spectator mode and return to your player character."
        **Syntax:** `/stopspectate`  
        **Description:** Exit spectator mode and return to your player character.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /stopspectate
        ```

    ??? info "/unfreeze — Re-enable input for a frozen player."
        **Syntax:** `<player>`  
        **Description:** Re-enable input for a frozen player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

??? note "🐾 Pal Spawning & Management (40 commands)"

    > Spawn wild, alpha, tower boss, and raid Pals, customize IVs, souls, passives, shiny state, and inject custom Pal presets.

    ??? info "/bosses — Query world boss spawners, alive/dead state, and coordinates."
        **Syntax:** `/bosses`  
        **Description:** Query world boss spawners, alive/dead state, and coordinates.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /bosses
        ```

    ??? info "/clearpaldex — Reset/clear Paldex entries."
        **Syntax:** `[player]`  
        **Description:** Reset/clear Paldex entries.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/completepaldex — Complete Paldex capture and encounter records for all Pals."
        **Syntax:** `[player]`  
        **Description:** Complete Paldex capture and encounter records for all Pals.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/despawnboss — Alias for /killboss."
        **Syntax:** `[player] [radius]`  
        **Description:** Alias for /killboss.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[radius]`  
        **Example:**
        ```text
        [player] [radius]
        ```

    ??? info "/givecustom — Give custom Pal directly to player party / PalBox (reads pal_data only)."
        **Syntax:** `[player] <template_name>`  
        **Description:** Give custom Pal directly to player party / PalBox (reads pal_data only).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<template_name>`  
        **Example:**
        ```text
        [player] <template_name>
        ```

    ??? info "/giveexp — Give experience points to a player."
        **Syntax:** `<player> <amount>`  
        **Description:** Give experience points to a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<amount>`  
        **Example:**
        ```text
        <player> <amount>
        ```

    ??? info "/givei — Alias for /giveitem."
        **Syntax:** `<player> <itemid> [amount]`  
        **Description:** Alias for /giveitem.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<itemid> [amount]`  
        **Example:**
        ```text
        <player> <itemid> [amount]
        ```

    ??? info "/giveitem — Give items to a player."
        **Syntax:** `<player> <itemid> [amount]`  
        **Description:** Give items to a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<itemid> [amount]`  
        **Example:**
        ```text
        <player> <itemid> [amount]
        ```

    ??? info "/given — Alias for /givenpc."
        **Syntax:** `[player] <NpcID> [level]`  
        **Description:** Alias for /givenpc.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<NpcID> [level]`  
        **Example:**
        ```text
        [player] <NpcID> [level]
        ```

    ??? info "/givenpc — Add a human NPC directly to a player's party / PalBox."
        **Syntax:** `[player] <NpcID> [level]`  
        **Description:** Add a human NPC directly to a player's party / PalBox.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<NpcID> [level]`  
        **Example:**
        ```text
        [player] <NpcID> [level]
        ```

    ??? info "/givep — Alias for /givepal."
        **Syntax:** `[player] <PalID> [level] [rank] [m/f/n]`  
        **Description:** Alias for /givepal.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<PalID> [level] [rank] [m/f/n]`  
        **Example:**
        ```text
        [player] <PalID> [level] [rank] [m/f/n]
        ```

    ??? info "/givepal — Spawn and add a Pal directly to a player's party."
        **Syntax:** `[player] <PalID> [level] [rank] [m/f/n]`  
        **Description:** Spawn and add a Pal directly to a player's party.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<PalID> [level] [rank] [m/f/n]`  
        **Example:**
        ```text
        [player] <PalID> [level] [rank] [m/f/n]
        ```

    ??? info "/givepoints — Grant points directly to a player."
        **Syntax:** `<player> <amount>`  
        **Description:** Grant points directly to a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<amount>`  
        **Example:**
        ```text
        <player> <amount>
        ```

    ??? info "/givetech — Give technology points. Add 'boss' for boss tech points."
        **Syntax:** `<player> <amount> [boss]`  
        **Description:** Give technology points. Add 'boss' for boss tech points.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<amount> [boss]`  
        **Example:**
        ```text
        <player> <amount> [boss]
        ```

    ??? info "/inspectpals — Inspect party Pals (IVs, level, rank, passives, flags illegal stats)."
        **Syntax:** `<player>`  
        **Description:** Inspect party Pals (IVs, level, rank, passives, flags illegal stats).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/palparty — Inspect a player's active Pal party (slots, level, IVs, rank, passives)."
        **Syntax:** `[player]`  
        **Description:** Inspect a player's active Pal party (slots, level, IVs, rank, passives).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/palreward — Alias for /rewardp."
        **Syntax:** `[player|all] <pal_name_or_id> [level] [rank]`  
        **Description:** Alias for /rewardp.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<pal_name_or_id> [level] [rank]`  
        **Example:**
        ```text
        [player|all] <pal_name_or_id> [level] [rank]
        ```

    ??? info "/popupall — Broadcast a centered native modal popup dialog to all players."
        **Syntax:** `<message>`  
        **Description:** Broadcast a centered native modal popup dialog to all players.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <message>
        ```

    ??? info "/raid — Trigger an invader march / raid against a player's nearest base camp."
        **Syntax:** `[player]`  
        **Description:** Trigger an invader march / raid against a player's nearest base camp.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/removepal — Remove a specified Pal species or specific party slot (1-5) from a player."
        **Syntax:** `[player] <pal_id|slot_1-5> [count]`  
        **Description:** Remove a specified Pal species or specific party slot (1-5) from a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<pal_id|slot_1-5> [count]`  
        **Example:**
        ```text
        [player] <pal_id|slot_1-5> [count]
        ```

    ??? info "/resetpaldex — Reset/clear Paldex entries."
        **Syntax:** `[player]`  
        **Description:** Reset/clear Paldex entries.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/respawnboss — Force an immediate respawn of an Alpha boss or spawner."
        **Syntax:** `<boss_name|spawner_name|all>`  
        **Description:** Force an immediate respawn of an Alpha boss or spawner.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <boss_name|spawner_name|all>
        ```

    ??? info "/rewardpal — Alias for /rewardp."
        **Syntax:** `[player|all] <pal_name_or_id> [level] [rank]`  
        **Description:** Alias for /rewardp.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<pal_name_or_id> [level] [rank]`  
        **Example:**
        ```text
        [player|all] <pal_name_or_id> [level] [rank]
        ```

    ??? info "/rewardpal — Reward/give a Pal with custom level and gender (m/f/n) directly to party / PalBox."
        **Syntax:** `<player> <PalID> [level] [m/f/n]`  
        **Description:** Reward/give a Pal with custom level and gender (m/f/n) directly to party / PalBox.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<PalID> [level] [m/f/n]`  
        **Example:**
        ```text
        <player> <PalID> [level] [m/f/n]
        ```

    ??? info "/rpal — Alias for /rewardpal."
        **Syntax:** `<player> <PalID> [level] [m/f/n]`  
        **Description:** Alias for /rewardpal.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<PalID> [level] [m/f/n]`  
        **Example:**
        ```text
        <player> <PalID> [level] [m/f/n]
        ```

    ??? info "/spawnboss — Summon full Boss Encounter with minions, loot engine, and announcements."
        **Syntax:** `[player] <template_name> [distance]`  
        **Description:** Summon full Boss Encounter with minions, loot engine, and announcements.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<template_name> [distance]`  
        **Example:**
        ```text
        [player] <template_name> [distance]
        ```

    ??? info "/spawnbossp — Summon full Boss Encounter in front of a player."
        **Syntax:** `[player] <template_name> [distance]`  
        **Description:** Summon full Boss Encounter in front of a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<template_name> [distance]`  
        **Example:**
        ```text
        [player] <template_name> [distance]
        ```

    ??? info "/spawnbossw — Summon full Boss Encounter at in-game map coordinates."
        **Syntax:** `<template_name> <x> <y> [z]`  
        **Description:** Summon full Boss Encounter at in-game map coordinates.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<x> <y> [z]`  
        **Example:**
        ```text
        <template_name> <x> <y> [z]
        ```

    ??? info "/spawncustom — Spawn custom Pal from template into the world."
        **Syntax:** `[player] <template_name> [distance]`  
        **Description:** Spawn custom Pal from template into the world.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<template_name> [distance]`  
        **Example:**
        ```text
        [player] <template_name> [distance]
        ```

    ??? info "/spawncustomp — Spawn custom Pal from template next to a player."
        **Syntax:** `[player] <template_name> [distance]`  
        **Description:** Spawn custom Pal from template next to a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<template_name> [distance]`  
        **Example:**
        ```text
        [player] <template_name> [distance]
        ```

    ??? info "/spawncustomw — Spawn custom Pal from template at in-game map coordinates."
        **Syntax:** `<template_name> <x> <y> [z]`  
        **Description:** Spawn custom Pal from template at in-game map coordinates.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<x> <y> [z]`  
        **Example:**
        ```text
        <template_name> <x> <y> [z]
        ```

    ??? info "/spawnnpc — Alias for /spawnnpcp."
        **Syntax:** `[player] <NpcID> [level]`  
        **Description:** Alias for /spawnnpcp.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<NpcID> [level]`  
        **Example:**
        ```text
        [player] <NpcID> [level]
        ```

    ??? info "/spawnnpcp — Spawn an active human NPC in front of a player."
        **Syntax:** `[player] <NpcID> [level]`  
        **Description:** Spawn an active human NPC in front of a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<NpcID> [level]`  
        **Example:**
        ```text
        [player] <NpcID> [level]
        ```

    ??? info "/spawnnpcw — Spawn an active human NPC at specific world coordinates."
        **Syntax:** `<NpcID> <level> <x> <y> <z>`  
        **Description:** Spawn an active human NPC at specific world coordinates.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<level> <x> <y> <z>`  
        **Example:**
        ```text
        <NpcID> <level> <x> <y> <z>
        ```

    ??? info "/spawnp — Spawn a wild Pal in the world next to a player."
        **Syntax:** `[player] <PalID> [level]`  
        **Description:** Spawn a wild Pal in the world next to a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<PalID> [level]`  
        **Example:**
        ```text
        [player] <PalID> [level]
        ```

    ??? info "/spawnpal — Alias for /spawnp."
        **Syntax:** `[player] <PalID> [level]`  
        **Description:** Alias for /spawnp.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<PalID> [level]`  
        **Example:**
        ```text
        [player] <PalID> [level]
        ```

    ??? info "/spawnw — Spawn a wild Pal in the world at specific coordinates."
        **Syntax:** `<PalID> <level> <x> <y> <z>`  
        **Description:** Spawn a wild Pal in the world at specific coordinates.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<level> <x> <y> <z>`  
        **Example:**
        ```text
        <PalID> <level> <x> <y> <z>
        ```

    ??? info "/stopraid — Cancel all active enemy invasion raids."
        **Syntax:** `/stopraid`  
        **Description:** Cancel all active enemy invasion raids.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /stopraid
        ```

    ??? info "/takepal — Remove a specified Pal species or specific party slot (1-5) from a player."
        **Syntax:** `[player] <pal_id|slot_1-5> [count]`  
        **Description:** Remove a specified Pal species or specific party slot (1-5) from a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<pal_id|slot_1-5> [count]`  
        **Example:**
        ```text
        [player] <pal_id|slot_1-5> [count]
        ```

    ??? info "/wipepals — Clear all Pals from a player's active party."
        **Syntax:** `<player>`  
        **Description:** Clear all Pals from a player's active party.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

??? note "👤 Player Administration & Moderation (28 commands)"

    > Player management, kicking, banning, muting, instant messaging, warnings, whitelist/blacklist enforcement, and stat inspection.

    ??? info "/admin — Authenticate as server administrator."
        **Syntax:** `/admin <password>`  
        **Description:** Authenticate as server administrator.  
        **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
        **Arguments:** `<password>`  
        **Example:**
        ```text
        /admin <password>
        ```

    ??? info "/admins — List online admins."
        **Syntax:** `/admins`  
        **Description:** List online admins.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /admins
        ```

    ??? info "/adminweapon — Toggle Admin One-Hit Kill/Destroy Weapon mode (bypasses all shields, armor & destroys any entity/object)."
        **Syntax:** `[on|off|give] [player]`  
        **Description:** Toggle Admin One-Hit Kill/Destroy Weapon mode (bypasses all shields, armor & destroys any entity/object).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[player]`  
        **Example:**
        ```text
        [on|off|give] [player]
        ```

    ??? info "/alert — Show an on-screen game alert to a player or all (*)."
        **Syntax:** `<player|*> <message>`  
        **Description:** Show an on-screen game alert to a player or all (*).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<message>`  
        **Example:**
        ```text
        <player|*> <message>
        ```

    ??? info "/alertall — Show an on-screen game alert to every player."
        **Syntax:** `<message>`  
        **Description:** Show an on-screen game alert to every player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <message>
        ```

    ??? info "/ban — Permanently ban a player."
        **Syntax:** `<player> [reason]`  
        **Description:** Permanently ban a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[reason]`  
        **Example:**
        ```text
        <player> [reason]
        ```

    ??? info "/banlist — Display list of all banned players."
        **Syntax:** `/banlist`  
        **Description:** Display list of all banned players.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /banlist
        ```

    ??? info "/broadcast — Send a server-wide chat message."
        **Syntax:** `<message>`  
        **Description:** Send a server-wide chat message.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <message>
        ```

    ??? info "/clearwanted — Pardon player and clear active criminal wanted status."
        **Syntax:** `[player]`  
        **Description:** Pardon player and clear active criminal wanted status.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/inspectinv — Inspect a player's common inventory items, quantities, and durability."
        **Syntax:** `<player>`  
        **Description:** Inspect a player's common inventory items, quantities, and durability.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/kick — Kick a player from the server."
        **Syntax:** `<player> [reason]`  
        **Description:** Kick a player from the server.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[reason]`  
        **Example:**
        ```text
        <player> [reason]
        ```

    ??? info "/kickall — Kick all non-admin players from the server."
        **Syntax:** `[reason]`  
        **Description:** Kick all non-admin players from the server.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [reason]
        ```

    ??? info "/lockfasttravel — Lock all Fast Travel statues."
        **Syntax:** `[player]`  
        **Description:** Lock all Fast Travel statues.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/mute — Block a player from sending chat. 0 = permanent."
        **Syntax:** `<player> [seconds]`  
        **Description:** Block a player from sending chat. 0 = permanent.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[seconds]`  
        **Example:**
        ```text
        <player> [seconds]
        ```

    ??? info "/playerinfo — Inspect an online or offline player: stats, guild, last position, tech, save info."
        **Syntax:** `<player|uid>`  
        **Description:** Inspect an online or offline player: stats, guild, last position, tech, save info.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player|uid>
        ```

    ??? info "/players — List all online players with status."
        **Syntax:** `/players`  
        **Description:** List all online players with status.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /players
        ```

    ??? info "/popup — Show a centered native modal popup dialog with [ OK ] button."
        **Syntax:** `[player|all] <message>`  
        **Description:** Show a centered native modal popup dialog with [ OK ] button.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<message>`  
        **Example:**
        ```text
        [player|all] <message>
        ```

    ??? info "/rename — Change player's in-game nickname."
        **Syntax:** `[player] <NewNickname>`  
        **Description:** Change player's in-game nickname.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<NewNickname>`  
        **Example:**
        ```text
        [player] <NewNickname>
        ```

    ??? info "/testviolation — Record a test anti-cheat violation to verify evidence logging."
        **Syntax:** `<player> [type] [detail]`  
        **Description:** Record a test anti-cheat violation to verify evidence logging.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[type] [detail]`  
        **Example:**
        ```text
        <player> [type] [detail]
        ```

    ??? info "/triggerwanted — Trigger criminal wanted status (1-5 stars) and summon PIDF response."
        **Syntax:** `[player] [1-5]`  
        **Description:** Trigger criminal wanted status (1-5 stars) and summon PIDF response.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[1-5]`  
        **Example:**
        ```text
        [player] [1-5]
        ```

    ??? info "/unban — Remove a ban on a player UID or IP address."
        **Syntax:** `<player/uid/ip>`  
        **Description:** Remove a ban on a player UID or IP address.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player/uid/ip>
        ```

    ??? info "/unlockfasttravel — Unlock all Fast Travel statues on the map."
        **Syntax:** `[player]`  
        **Description:** Unlock all Fast Travel statues on the map.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/unmute — Restore chat for a muted player."
        **Syntax:** `<player>`  
        **Description:** Restore chat for a muted player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/vilog — Send an on-screen visual alert and direct chat notice to a player."
        **Syntax:** `<player> <message>`  
        **Description:** Send an on-screen visual alert and direct chat notice to a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<message>`  
        **Example:**
        ```text
        <player> <message>
        ```

    ??? info "/violations — Show violation history and current point total."
        **Syntax:** `<player>`  
        **Description:** Show violation history and current point total.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/wanted — Trigger criminal wanted status (1-5 stars) and summon PIDF response."
        **Syntax:** `[player] [1-5]`  
        **Description:** Trigger criminal wanted status (1-5 stars) and summon PIDF response.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[1-5]`  
        **Example:**
        ```text
        [player] [1-5]
        ```

    ??? info "/warn — Send a formal warning and record a violation."
        **Syntax:** `<player> <message>`  
        **Description:** Send a formal warning and record a violation.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<message>`  
        **Example:**
        ```text
        <player> <message>
        ```

    ??? info "/whitelist — Manage server whitelist access control."
        **Syntax:** `<on|off|add|remove|list> [player]`  
        **Description:** Manage server whitelist access control.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[player]`  
        **Example:**
        ```text
        <on|off|add|remove|list> [player]
        ```

??? note "🎒 Inventory, Items & Tech Points (15 commands)"

    > Item granting, inventory inspection, technology tree unlocking, ancient tech points, relic management, and inventory repair/clearing.

    ??? info "/cleardrops — Clear loose dropped ground items to reduce server clutter. Optional radius around admin."
        **Syntax:** `[radius]`  
        **Description:** Clear loose dropped ground items to reduce server clutter. Optional radius around admin.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [radius]
        ```

    ??? info "/clearinv — Clear all items from a player's common inventory."
        **Syntax:** `<player>`  
        **Description:** Clear all items from a player's common inventory.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/lockalltech — Reset and lock all technology recipes."
        **Syntax:** `[player]`  
        **Description:** Reset and lock all technology recipes.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/maxrelics — Max out Lifmunk Effigies / capture power."
        **Syntax:** `[player]`  
        **Description:** Max out Lifmunk Effigies / capture power.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/removeitem — Remove a specified item and quantity (or all) from a player's inventory."
        **Syntax:** `[player] <item_id> [amount]`  
        **Description:** Remove a specified item and quantity (or all) from a player's inventory.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<item_id> [amount]`  
        **Example:**
        ```text
        [player] <item_id> [amount]
        ```

    ??? info "/repair — Restore full durability to all equipped weapons, armor, and gliders."
        **Syntax:** `<player>`  
        **Description:** Restore full durability to all equipped weapons, armor, and gliders.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/resetalltech — Reset and lock all technology recipes."
        **Syntax:** `[player]`  
        **Description:** Reset and lock all technology recipes.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/resetlevel — Reset player to Level 1 and 0 EXP."
        **Syntax:** `[player]`  
        **Description:** Reset player to Level 1 and 0 EXP.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/respec — Reset allocated status points and refund them to unspent points."
        **Syntax:** `[player]`  
        **Description:** Reset allocated status points and refund them to unspent points.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/setlevel — Set player level directly (up to 80+)."
        **Syntax:** `[player] <1-80|max>`  
        **Description:** Set player level directly (up to 80+).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<1-80|max>`  
        **Example:**
        ```text
        [player] <1-80|max>
        ```

    ??? info "/setmaxweight — Override maximum inventory carrying weight."
        **Syntax:** `[player] <weight>`  
        **Description:** Override maximum inventory carrying weight.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<weight>`  
        **Example:**
        ```text
        [player] <weight>
        ```

    ??? info "/setrelics — Set Lifmunk Effigies collected for capture power upgrades."
        **Syntax:** `[player] <amount>`  
        **Description:** Set Lifmunk Effigies collected for capture power upgrades.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<amount>`  
        **Example:**
        ```text
        [player] <amount>
        ```

    ??? info "/takeitem — Remove a specified item and quantity (or all) from a player's inventory."
        **Syntax:** `[player] <item_id> [amount]`  
        **Description:** Remove a specified item and quantity (or all) from a player's inventory.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<item_id> [amount]`  
        **Example:**
        ```text
        [player] <item_id> [amount]
        ```

    ??? info "/unlearntech — Revoke/unlearn a specific technology (or all) for a player or all players."
        **Syntax:** `<player|all> <tech_id|all>`  
        **Description:** Revoke/unlearn a specific technology (or all) for a player or all players.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<tech_id|all>`  
        **Example:**
        ```text
        <player|all> <tech_id|all>
        ```

    ??? info "/unlockalltech — Unlock all technology recipes (building, crafting, weapons, saddles)."
        **Syntax:** `[player]`  
        **Description:** Unlock all technology recipes (building, crafting, weapons, saddles).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

??? note "🗺️ Teleportation & World Navigation (7 commands)"

    > Coordinate teleportation, fast travel unlocks, player-to-player teleporting, safe point recovery, and dungeon warps.

    ??? info "/inspectplayer — Inspect an online or offline player: stats, guild, last position, tech, save info."
        **Syntax:** `<player|uid>`  
        **Description:** Inspect an online or offline player: stats, guild, last position, tech, save info.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player|uid>
        ```

    ??? info "/pos — Show a player's current position and movement mode."
        **Syntax:** `<player>`  
        **Description:** Show a player's current position and movement mode.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/tp — Teleport a player to coordinates or another player."
        **Syntax:** `<player> <x> <y> <z>  or  <player> <destplayer>`  
        **Description:** Teleport a player to coordinates or another player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<x> <y> <z> or <player> <destplayer>`  
        **Example:**
        ```text
        <player> <x> <y> <z>  or  <player> <destplayer>
        ```

    ??? info "/tp2deathbag — Teleport directly to a player's lost death drop bag."
        **Syntax:** `<player>`  
        **Description:** Teleport directly to a player's lost death drop bag.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/tp2me — Pull a player to your location."
        **Syntax:** `<player>`  
        **Description:** Pull a player to your location.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/tp2treasure — Teleport to the nearest unopened wilderness treasure chest (optionally of specific grade)."
        **Syntax:** `[grade 1-5]`  
        **Description:** Teleport to the nearest unopened wilderness treasure chest (optionally of specific grade).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `1-5]`  
        **Example:**
        ```text
        [grade 1-5]
        ```

    ??? info "/tpme — Teleport yourself to a player."
        **Syntax:** `<player>`  
        **Description:** Teleport yourself to a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

??? note "⚡ Janitor, World & Environment (10 commands)"

    > Automated world cleaning, ground item sweeping, deathbag recovery, wild build cleanup, world time controls, and emergency saves.

    ??? info "/cleardeathbags — Clear player death bags and dropped Pals across the map or near admin."
        **Syntax:** `[player|all] [radius]`  
        **Description:** Clear player death bags and dropped Pals across the map or near admin.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[radius]`  
        **Example:**
        ```text
        [player|all] [radius]
        ```

    ??? info "/clearwildbuilds — Demolish orphaned or wild structures built outside player base camps."
        **Syntax:** `[radius] [all|unowned]`  
        **Description:** Demolish orphaned or wild structures built outside player base camps.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[all|unowned]`  
        **Example:**
        ```text
        [radius] [all|unowned]
        ```

    ??? info "/deathbags — List all active player death drops/corpses around the world with coordinates and item counts."
        **Syntax:** `/deathbags`  
        **Description:** List all active player death drops/corpses around the world with coordinates and item counts.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /deathbags
        ```

    ??? info "/janitor — Automated server maintenance: view stats, trigger manual sweep, or toggle."
        **Syntax:** `[status|run|toggle]`  
        **Description:** Automated server maintenance: view stats, trigger manual sweep, or toggle.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [status|run|toggle]
        ```

    ??? info "/save — Force an immediate world save."
        **Syntax:** `/save`  
        **Description:** Force an immediate world save.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /save
        ```

    ??? info "/time — Set the world time to a specific hour."
        **Syntax:** `<0-23>`  
        **Description:** Set the world time to a specific hour.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <0-23>
        ```

    ??? info "/triggersupply — Immediately trigger a supply drop capsule or meteorite event at player/coords or random."
        **Syntax:** `[capsule|meteor] [player | x y z]`  
        **Description:** Immediately trigger a supply drop capsule or meteorite event at player/coords or random.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[player | x y z]`  
        **Example:**
        ```text
        [capsule|meteor] [player | x y z]
        ```

    ??? info "/uptime — Show server uptime, player count, and violation stats."
        **Syntax:** `/uptime`  
        **Description:** Show server uptime, player count, and violation stats.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /uptime
        ```

    ??? info "/worldtime — Set the in-game world clock hour (server-wide)."
        **Syntax:** `<hour 0-23>`  
        **Description:** Set the in-game world clock hour (server-wide).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `0-23>`  
        **Example:**
        ```text
        <hour 0-23>
        ```

    ??? info "/worldtimescale — Set the world time progression rate (server-wide)."
        **Syntax:** `<rate>`  
        **Description:** Set the world time progression rate (server-wide).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <rate>
        ```

??? note "🤖 AI Bot Companions & Spawning (2 commands)"

    > AI player bot companion summoning, orders, combat follow, guard duty, and bot template configuration.

    ??? info "/bot — Control simulated AI Player Bots."
        **Syntax:** `<spawn|follow|stay|dismiss|list|reload>`  
        **Description:** Control simulated AI Player Bots.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <spawn|follow|stay|dismiss|list|reload>
        ```

    ??? info "/bot — Control autonomous AI player bots."
        **Syntax:** `<spawn|follow|stay|dismiss|list|reload>`  
        **Description:** Control autonomous AI player bots.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <spawn|follow|stay|dismiss|list|reload>
        ```

??? note "🏆 Points, Shop & Economy (16 commands)"

    > Points economy, item shops, lucky wheel lottery rolls, starter kits, point transfers, and balance checks.

    ??? info "/balance — Alias for /points."
        **Syntax:** `[player]`  
        **Description:** Alias for /points.  
        **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/buy — Purchase an item from the PalPoints shop."
        **Syntax:** `<item_id>`  
        **Description:** Purchase an item from the PalPoints shop.  
        **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
        **Example:**
        ```text
        <item_id>
        ```

    ??? info "/expreward — Alias for /rewardexp."
        **Syntax:** `[player|all] <amount>`  
        **Description:** Alias for /rewardexp.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<amount>`  
        **Example:**
        ```text
        [player|all] <amount>
        ```

    ??? info "/itemreward — Alias for /rewardi."
        **Syntax:** `[player|all] <item_name_or_id> [amount]`  
        **Description:** Alias for /rewardi.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<item_name_or_id> [amount]`  
        **Example:**
        ```text
        [player|all] <item_name_or_id> [amount]
        ```

    ??? info "/points — View current points balance and statistics."
        **Syntax:** `[player]`  
        **Description:** View current points balance and statistics.  
        **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/reloadpoints — Hot-reload points_config.json, shop_config.json, and roll_config.json."
        **Syntax:** `/reloadpoints`  
        **Description:** Hot-reload points_config.json, shop_config.json, and roll_config.json.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /reloadpoints
        ```

    ??? info "/reloadshop — Alias for /reloadpoints."
        **Syntax:** `/reloadshop`  
        **Description:** Alias for /reloadpoints.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /reloadshop
        ```

    ??? info "/rewardcustom — Alias for /givecustom."
        **Syntax:** `[player] <template_name>`  
        **Description:** Alias for /givecustom.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<template_name>`  
        **Example:**
        ```text
        [player] <template_name>
        ```

    ??? info "/rewardexp — Reward EXP to party with native on-screen Victory EXP banner."
        **Syntax:** `[player|all] <amount>`  
        **Description:** Reward EXP to party with native on-screen Victory EXP banner.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<amount>`  
        **Example:**
        ```text
        [player|all] <amount>
        ```

    ??? info "/rewardi — Reward items to inventory with native animated reward cards and HUD log."
        **Syntax:** `[player|all] <item_name_or_id> [amount]`  
        **Description:** Reward items to inventory with native animated reward cards and HUD log.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<item_name_or_id> [amount]`  
        **Example:**
        ```text
        [player|all] <item_name_or_id> [amount]
        ```

    ??? info "/rewarditem — Alias for /rewardi."
        **Syntax:** `[player|all] <item_name_or_id> [amount]`  
        **Description:** Alias for /rewardi.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<item_name_or_id> [amount]`  
        **Example:**
        ```text
        [player|all] <item_name_or_id> [amount]
        ```

    ??? info "/rewardp — Reward a Pal to Party/PalBox with native capture visuals."
        **Syntax:** `[player|all] <pal_name_or_id> [level] [rank]`  
        **Description:** Reward a Pal to Party/PalBox with native capture visuals.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<pal_name_or_id> [level] [rank]`  
        **Example:**
        ```text
        [player|all] <pal_name_or_id> [level] [rank]
        ```

    ??? info "/roll — Spin the Lucky Roll for randomized rewards and jackpots."
        **Syntax:** `/roll`  
        **Description:** Spin the Lucky Roll for randomized rewards and jackpots.  
        **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
        **Example:**
        ```text
        /roll
        ```

    ??? info "/shop — Browse the PalPoints item and summon shop."
        **Syntax:** `[category|all]`  
        **Description:** Browse the PalPoints item and summon shop.  
        **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
        **Example:**
        ```text
        [category|all]
        ```

    ??? info "/takepoints — Deduct points from a player."
        **Syntax:** `<player> <amount>`  
        **Description:** Deduct points from a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<amount>`  
        **Example:**
        ```text
        <player> <amount>
        ```

    ??? info "/transfer_master — Alias for /guildtransfer."
        **Syntax:** `[guild] <player>`  
        **Description:** Alias for /guildtransfer.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<player>`  
        **Example:**
        ```text
        [guild] <player>
        ```

??? note "ℹ️ General & Player Utility (34 commands)"

    > General player tools, ping check, suicide/unstuck, online player counts, server information, and help menus.

    ??? info "/acexempt — Exempt a player from AC checks (not RPC hooks)."
        **Syntax:** `<player> [on|off]`  
        **Description:** Exempt a player from AC checks (not RPC hooks).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[on|off]`  
        **Example:**
        ```text
        <player> [on|off]
        ```

    ??? info "/acstatus — Show anti-cheat module status and thresholds."
        **Syntax:** `/acstatus`  
        **Description:** Show anti-cheat module status and thresholds.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /acstatus
        ```

    ??? info "/auth — Authenticate as server administrator."
        **Syntax:** `/auth <password>`  
        **Description:** Authenticate as server administrator.  
        **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
        **Arguments:** `<password>`  
        **Example:**
        ```text
        /auth <password>
        ```

    ??? info "/clearstats — Wipe all allocated and unspent status points to 0."
        **Syntax:** `[player]`  
        **Description:** Wipe all allocated and unspent status points to 0.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/clearviol — Clear violation record for a player."
        **Syntax:** `<player>`  
        **Description:** Clear violation record for a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/clearviolall — Clear ALL violation records. Use with caution."
        **Syntax:** `/clearviolall`  
        **Description:** Clear ALL violation records. Use with caution.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /clearviolall
        ```

    ??? info "/debug — Dump full system status: registry, GObjects, GWorld, character, admin flag."
        **Syntax:** `/debug`  
        **Description:** Dump full system status: registry, GObjects, GWorld, character, admin flag.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /debug
        ```

    ??? info "/dialog — Alias for /popup."
        **Syntax:** `[player|all] <message>`  
        **Description:** Alias for /popup.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<message>`  
        **Example:**
        ```text
        [player|all] <message>
        ```

    ??? info "/dm — Send a private direct message to a player."
        **Syntax:** `<player> <message>`  
        **Description:** Send a private direct message to a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<message>`  
        **Example:**
        ```text
        <player> <message>
        ```

    ??? info "/dumptables — Dump Technology, Recipe, Wild Spawner, and Boss Spawner tables to JSON."
        **Syntax:** `/dumptables`  
        **Description:** Dump Technology, Recipe, Wild Spawner, and Boss Spawner tables to JSON.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /dumptables
        ```

    ??? info "/forcecheck — Run an immediate AC check on a player out of the normal tick cycle."
        **Syntax:** `<player>`  
        **Description:** Run an immediate AC check on a player out of the normal tick cycle.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/gacha — Alias for /roll."
        **Syntax:** `/gacha`  
        **Description:** Alias for /roll.  
        **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
        **Example:**
        ```text
        /gacha
        ```

    ??? info "/help — List commands or show help for a specific command."
        **Syntax:** `[command]`  
        **Description:** List commands or show help for a specific command.  
        **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
        **Example:**
        ```text
        [command]
        ```

    ??? info "/info — Show full profile: position, ping, session, violations, flags."
        **Syntax:** `<player>`  
        **Description:** Show full profile: position, ping, session, violations, flags.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <player>
        ```

    ??? info "/knock — Knock a player into DBNO bleedout state (0 HP). Defaults to self."
        **Syntax:** `[player]`  
        **Description:** Knock a player into DBNO bleedout state (0 HP). Defaults to self.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/leaderboard — Alias for /top."
        **Syntax:** `/leaderboard`  
        **Description:** Alias for /top.  
        **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
        **Example:**
        ```text
        /leaderboard
        ```

    ??? info "/listtemplates — List all loaded Pal and Boss encounter templates."
        **Syntax:** `/listtemplates`  
        **Description:** List all loaded Pal and Boss encounter templates.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /listtemplates
        ```

    ??? info "/mapsummary — Display counts of treasures, death bags, dropped items, wild builds, chests, and supplies."
        **Syntax:** `/mapsummary`  
        **Description:** Display counts of treasures, death bags, dropped items, wild builds, chests, and supplies.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /mapsummary
        ```

    ??? info "/notice — Broadcast a full-screen native server notice to all players."
        **Syntax:** `<message>`  
        **Description:** Broadcast a full-screen native server notice to all players.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        <message>
        ```

    ??? info "/pardon — Pardon player and clear active criminal wanted status."
        **Syntax:** `[player]`  
        **Description:** Pardon player and clear active criminal wanted status.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/pm — Alias for /dm."
        **Syntax:** `<player> <message>`  
        **Description:** Alias for /dm.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<message>`  
        **Example:**
        ```text
        <player> <message>
        ```

    ??? info "/recoverbag — Recover lost items from a player's death bag directly into their inventory."
        **Syntax:** `[player]`  
        **Description:** Recover lost items from a player's death bag directly into their inventory.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/reloadcfg — Hot-reload config.json without restarting."
        **Syntax:** `/reloadcfg`  
        **Description:** Hot-reload config.json without restarting.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /reloadcfg
        ```

    ??? info "/reloadtemplates — Reload custom templates from PalSupervisor/Templates json files."
        **Syntax:** `/reloadtemplates`  
        **Description:** Reload custom templates from PalSupervisor/Templates json files.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        /reloadtemplates
        ```

    ??? info "/resetstats — Reset allocated status points and refund them to unspent points."
        **Syntax:** `[player]`  
        **Description:** Reset allocated status points and refund them to unspent points.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/resetstats — Refund all allocated player stat points back to unallocated status points."
        **Syntax:** `[player]`  
        **Description:** Refund all allocated player stat points back to unallocated status points.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/respawn — Force-respawn a player via CheatManager. Defaults to self."
        **Syntax:** `[player]`  
        **Description:** Force-respawn a player via CheatManager. Defaults to self.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Example:**
        ```text
        [player]
        ```

    ??? info "/send — Send targeted notification to a player (RCON/panel compatible)."
        **Syntax:** `<vilog|msg|alert> <player> <message...>`  
        **Description:** Send targeted notification to a player (RCON/panel compatible).  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<player> <message...>`  
        **Example:**
        ```text
        <vilog|msg|alert> <player> <message...>
        ```

    ??? info "/sethp — Set a player's exact HP via CheatManager."
        **Syntax:** `<player> <amount>`  
        **Description:** Set a player's exact HP via CheatManager.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<amount>`  
        **Example:**
        ```text
        <player> <amount>
        ```

    ??? info "/setsp — Set a player's exact SP (stamina) via CheatManager."
        **Syntax:** `<player> <amount>`  
        **Description:** Set a player's exact SP (stamina) via CheatManager.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<amount>`  
        **Example:**
        ```text
        <player> <amount>
        ```

    ??? info "/setstamina — Set a player's exact SP (stamina) via CheatManager. Alias for /setsp."
        **Syntax:** `<player> <amount>`  
        **Description:** Set a player's exact SP (stamina) via CheatManager. Alias for /setsp.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<amount>`  
        **Example:**
        ```text
        <player> <amount>
        ```

    ??? info "/top — View the top points leaderboard."
        **Syntax:** `/top`  
        **Description:** View the top points leaderboard.  
        **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
        **Example:**
        ```text
        /top
        ```

    ??? info "/watch — Enable enhanced logging and evidence capture for a player."
        **Syntax:** `<player> [on|off]`  
        **Description:** Enable enhanced logging and evidence capture for a player.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `[on|off]`  
        **Example:**
        ```text
        <player> [on|off]
        ```

    ??? info "/whisper — Alias for /dm."
        **Syntax:** `<player> <message>`  
        **Description:** Alias for /dm.  
        **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
        **Arguments:** `<message>`  
        **Example:**
        ```text
        <player> <message>
        ```

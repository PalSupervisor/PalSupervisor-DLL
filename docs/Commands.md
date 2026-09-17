# In-Game Chat Commands Guide 💬🎮

> **PalSupervisor features 171 high-performance native chat commands** with zero tick lag, full permission gating, and command auto-completion.

Commands can be executed directly in in-game chat (prefixed with `/`) or remotely via the embedded REST API (`POST /admin/command` or `/v1/api/command`).

!!! tip "Permissions"
    * **Admin Only**: Requires player's Steam ID to be configured in `admin_steam_ids` or caller authenticated with admin API key.
    * **All Players**: Publicly usable by all connected players.

---

## Guild & Base Camp Management

??? info "/basechests"
    **Syntax:** `/basechests <base_id>`  
    **Description:** Inspect container storage contents and locks inside a base camp.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<base_id>`  
    **Example:**
    ```text
    /basechests <base_id>
    ```

??? info "/baseinfo"
    **Syntax:** `/baseinfo [base_id]`  
    **Description:** Show base camps or inspect workers (HP, SAN, sickness) and chests for a specific base.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[base_id]`  
    **Example:**
    ```text
    /baseinfo [base_id]
    ```

??? info "/baserelocate"
    **Syntax:** `/baserelocate <base_id>`  
    **Description:** Relocate a base camp and Palbox to the caller's current coordinates.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<base_id>`  
    **Example:**
    ```text
    /baserelocate <base_id>
    ```

??? info "/basewipe"
    **Syntax:** `/basewipe <base_id>`  
    **Description:** Cleanly wipe all structures and chests in a base camp with zero item drops.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<base_id>`  
    **Example:**
    ```text
    /basewipe <base_id>
    ```

??? info "/destroyguild"
    **Syntax:** `/destroyguild <guild_id|guild_name>`  
    **Description:** Alias for /guilddisband.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<guild_id|guild_name>`  
    **Example:**
    ```text
    /destroyguild <guild_id|guild_name>
    ```

??? info "/guild"
    **Syntax:** `/guild <action> [args...]`  
    **Description:** Unified guild management: list, info, promote, demote, kick, add, transfer, disband, destroy, blacklist.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<action> [args...]`  
    **Example:**
    ```text
    /guild <action> [args...]
    ```

??? info "/guildadd"
    **Syntax:** `/guildadd <guild_id|guild_name> <player>`  
    **Description:** Add a player directly into a guild (auto-queues if offline).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<guild_id|guild_name> <player>`  
    **Example:**
    ```text
    /guildadd <guild_id|guild_name> <player>
    ```

??? info "/guildaudit"
    **Syntax:** `/guildaudit <guild_id|guild_name> [limit]`  
    **Description:** View recent item deposits, withdrawals, and quick-stacks in guild chests.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<guild_id|guild_name> [limit]`  
    **Example:**
    ```text
    /guildaudit <guild_id|guild_name> [limit]
    ```

??? info "/guildblacklist"
    **Syntax:** `/guildblacklist <guild_id|guild_name> <add|remove|list> [player] [reason]`  
    **Description:** Manage blacklisted players for a guild.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<guild_id|guild_name> <add|remove|list> [player] [reason]`  
    **Example:**
    ```text
    /guildblacklist <guild_id|guild_name> <add|remove|list> [player] [reason]
    ```

??? info "/guilddemote"
    **Syntax:** `/guilddemote <guild_id|guild_name> <player> [member|guest]`  
    **Description:** Demote a guild member to regular Member or Guest.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<guild_id|guild_name> <player> [member|guest]`  
    **Example:**
    ```text
    /guilddemote <guild_id|guild_name> <player> [member|guest]
    ```

??? info "/guilddestroy"
    **Syntax:** `/guilddestroy <guild_id|guild_name>`  
    **Description:** Alias for /guilddisband.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<guild_id|guild_name>`  
    **Example:**
    ```text
    /guilddestroy <guild_id|guild_name>
    ```

??? info "/guilddisband"
    **Syntax:** `/guilddisband <guild_id>`  
    **Description:** Permanently disband and dispose a guild.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<guild_id>`  
    **Example:**
    ```text
    /guilddisband <guild_id>
    ```

??? info "/guildinfo"
    **Syntax:** `/guildinfo <guild_id|guild_name>`  
    **Description:** Inspect a guild: master, member roster, base camp IDs, raid status.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<guild_id|guild_name>`  
    **Example:**
    ```text
    /guildinfo <guild_id|guild_name>
    ```

??? info "/guildkick"
    **Syntax:** `/guildkick <guild_id> <player_uid|player_name>`  
    **Description:** Kick a member from a guild.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<guild_id> <player_uid|player_name>`  
    **Example:**
    ```text
    /guildkick <guild_id> <player_uid|player_name>
    ```

??? info "/guildlist"
    **Syntax:** `/guildlist`  
    **Description:** List all active guilds, levels, member counts, and base counts.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /guildlist
    ```

??? info "/guildpending"
    **Syntax:** `/guildpending [guild_id|guild_name]`  
    **Description:** List pending offline guild joins waiting for player login.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[guild_id|guild_name]`  
    **Example:**
    ```text
    /guildpending [guild_id|guild_name]
    ```

??? info "/guildpromote"
    **Syntax:** `/guildpromote <guild_id|guild_name> <player> [submaster|master]`  
    **Description:** Promote a guild member to SubMaster (Officer) or GuildMaster.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<guild_id|guild_name> <player> [submaster|master]`  
    **Example:**
    ```text
    /guildpromote <guild_id|guild_name> <player> [submaster|master]
    ```

??? info "/guildremove"
    **Syntax:** `/guildremove <guild_id|guild_name> <player>`  
    **Description:** Remove a member from a guild.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<guild_id|guild_name> <player>`  
    **Example:**
    ```text
    /guildremove <guild_id|guild_name> <player>
    ```

??? info "/guildtransfer"
    **Syntax:** `/guildtransfer [guild] <player>`  
    **Description:** Transfer guild leadership to a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[guild] <player>`  
    **Example:**
    ```text
    /guildtransfer [guild] <player>
    ```

??? info "/setguildleader"
    **Syntax:** `/setguildleader [guild] <player>`  
    **Description:** Alias for /guildtransfer.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[guild] <player>`  
    **Example:**
    ```text
    /setguildleader [guild] <player>
    ```

??? info "/transfer_master"
    **Syntax:** `/transfer_master [guild] <player>`  
    **Description:** Alias for /guildtransfer.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[guild] <player>`  
    **Example:**
    ```text
    /transfer_master [guild] <player>
    ```

---

## Autonomous Janitor & Telemetry

??? info "/janitor"
    **Syntax:** `/janitor [run|history|toggle]`  
    **Description:** Autonomous background server maintenance: trigger manual sweep, view recent swept item audit history, or toggle background maintenance on/off.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[run [deathbags]|history [limit]|toggle]`  
    **Example:**
    ```text
    /janitor run
    /janitor history 50
    /janitor toggle
    ```


??? info "/cleardeathbags"
    **Syntax:** `/cleardeathbags [player|all] [radius]`  
    **Description:** Clear player death bags and dropped Pals across the map or near admin.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player|all] [radius]`  
    **Example:**
    ```text
    /cleardeathbags [player|all] [radius]
    ```

??? info "/cleardrops"
    **Syntax:** `/cleardrops [radius]`  
    **Description:** Clear loose dropped ground items to reduce server clutter. Optional radius around admin.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[radius]`  
    **Example:**
    ```text
    /cleardrops [radius]
    ```

??? info "/clearwildbuilds"
    **Syntax:** `/clearwildbuilds [radius] [all|unowned]`  
    **Description:** Demolish orphaned or wild structures built outside player base camps.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[radius] [all|unowned]`  
    **Example:**
    ```text
    /clearwildbuilds [radius] [all|unowned]
    ```

??? info "/deathbags"
    **Syntax:** `/deathbags`  
    **Description:** List all active player death drops/corpses around the world with coordinates and item counts.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /deathbags
    ```

??? info "/janitor"
    **Syntax:** `/janitor [status|run|toggle]`  
    **Description:** Automated server maintenance: view stats, trigger manual sweep, or toggle.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[status|run|toggle]`  
    **Example:**
    ```text
    /janitor [status|run|toggle]
    ```

??? info "/mapsummary"
    **Syntax:** `/mapsummary`  
    **Description:** Display counts of treasures, death bags, dropped items, wild builds, chests, and supplies.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /mapsummary
    ```

??? info "/recoverbag"
    **Syntax:** `/recoverbag [player]`  
    **Description:** Recover lost items from a player's death bag directly into their inventory.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /recoverbag [player]
    ```

??? info "/tp2deathbag"
    **Syntax:** `/tp2deathbag <player>`  
    **Description:** Teleport directly to a player's lost death drop bag.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /tp2deathbag <player>
    ```

??? info "/tp2treasure"
    **Syntax:** `/tp2treasure [grade 1-5]`  
    **Description:** Teleport to the nearest unopened wilderness treasure chest (optionally of specific grade).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[grade 1-5]`  
    **Example:**
    ```text
    /tp2treasure [grade 1-5]
    ```

??? info "/triggersupply"
    **Syntax:** `/triggersupply [capsule|meteor] [player | x y z]`  
    **Description:** Immediately trigger a supply drop capsule or meteorite event at player/coords or random.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[capsule|meteor] [player | x y z]`  
    **Example:**
    ```text
    /triggersupply [capsule|meteor] [player | x y z]
    ```

---

## Server Moderation & Access

??? info "/admin"
    **Syntax:** `/admin <password>`  
    **Description:** Authenticate as server administrator in-game using the configured admin password without needing the full /AdminPassword syntax.  
    **Permissions:** `In-Game Chat`, `All Players`  
    **Arguments:** `<password>`  
    **Example:**
    ```text
    /admin 2588
    ```

??? info "/auth"
    **Syntax:** `/auth <password>`  
    **Description:** Alias for `/admin` to authenticate as server administrator.  
    **Permissions:** `In-Game Chat`, `All Players`  
    **Arguments:** `<password>`  
    **Example:**
    ```text
    /auth 2588
    ```


??? info "/acexempt"
    **Syntax:** `/acexempt <player> [on|off]`  
    **Description:** Exempt a player from AC checks (not RPC hooks).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> [on|off]`  
    **Example:**
    ```text
    /acexempt <player> [on|off]
    ```

??? info "/acstatus"
    **Syntax:** `/acstatus`  
    **Description:** Show anti-cheat module status and thresholds.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /acstatus
    ```

??? info "/ban"
    **Syntax:** `/ban <player> [reason]`  
    **Description:** Permanently ban a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> [reason]`  
    **Example:**
    ```text
    /ban <player> [reason]
    ```

??? info "/banlist"
    **Syntax:** `/banlist`  
    **Description:** Display list of all banned players.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /banlist
    ```

??? info "/clearviol"
    **Syntax:** `/clearviol <player>`  
    **Description:** Clear violation record for a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /clearviol <player>
    ```

??? info "/clearviolall"
    **Syntax:** `/clearviolall`  
    **Description:** Clear ALL violation records. Use with caution.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /clearviolall
    ```

??? info "/freeze"
    **Syntax:** `/freeze <player> [seconds]`  
    **Description:** Disable player input. 0 = until /unfreeze.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> [seconds]`  
    **Example:**
    ```text
    /freeze <player> [seconds]
    ```

??? info "/kick"
    **Syntax:** `/kick <player> [reason]`  
    **Description:** Kick a player from the server.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> [reason]`  
    **Example:**
    ```text
    /kick <player> [reason]
    ```

??? info "/kickall"
    **Syntax:** `/kickall [reason]`  
    **Description:** Kick all non-admin players from the server.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[reason]`  
    **Example:**
    ```text
    /kickall [reason]
    ```

??? info "/kill"
    **Syntax:** `/kill [player]`  
    **Description:** Kill a player (instant lethal death drop). Defaults to self.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /kill [player]
    ```

??? info "/killboss"
    **Syntax:** `/killboss [player] [radius]`  
    **Description:** Despawn active summoned bosses and minions (optional: around player or radius).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] [radius]`  
    **Example:**
    ```text
    /killboss [player] [radius]
    ```

??? info "/mute"
    **Syntax:** `/mute <player> [seconds]`  
    **Description:** Block a player from sending chat. 0 = permanent.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> [seconds]`  
    **Example:**
    ```text
    /mute <player> [seconds]
    ```

??? info "/pardon"
    **Syntax:** `/pardon [player]`  
    **Description:** Pardon player and clear active criminal wanted status.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /pardon [player]
    ```

??? info "/testviolation"
    **Syntax:** `/testviolation <player> [type] [detail]`  
    **Description:** Record a test anti-cheat violation to verify evidence logging.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> [type] [detail]`  
    **Example:**
    ```text
    /testviolation <player> [type] [detail]
    ```

??? info "/unban"
    **Syntax:** `/unban <player/uid/ip>`  
    **Description:** Remove a ban on a player UID or IP address.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player/uid/ip>`  
    **Example:**
    ```text
    /unban <player/uid/ip>
    ```

??? info "/unfreeze"
    **Syntax:** `/unfreeze <player>`  
    **Description:** Re-enable input for a frozen player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /unfreeze <player>
    ```

??? info "/unmute"
    **Syntax:** `/unmute <player>`  
    **Description:** Restore chat for a muted player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /unmute <player>
    ```

??? info "/violations"
    **Syntax:** `/violations <player>`  
    **Description:** Show violation history and current point total.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /violations <player>
    ```

??? info "/warn"
    **Syntax:** `/warn <player> <message>`  
    **Description:** Send a formal warning and record a violation.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> <message>`  
    **Example:**
    ```text
    /warn <player> <message>
    ```

??? info "/whitelist"
    **Syntax:** `/whitelist <on|off|add|remove|list> [player]`  
    **Description:** Manage server whitelist access control.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<on|off|add|remove|list> [player]`  
    **Example:**
    ```text
    /whitelist <on|off|add|remove|list> [player]
    ```

---

## Server Administration & World

??? info "/admins"
    **Syntax:** `/admins`  
    **Description:** List online admins.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /admins
    ```

??? info "/alert"
    **Syntax:** `/alert <player|*> <message>`  
    **Description:** Show an on-screen game alert to a player or all (*).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player|*> <message>`  
    **Example:**
    ```text
    /alert <player|*> <message>
    ```

??? info "/alertall"
    **Syntax:** `/alertall <message>`  
    **Description:** Show an on-screen game alert to every player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<message>`  
    **Example:**
    ```text
    /alertall <message>
    ```

??? info "/broadcast"
    **Syntax:** `/broadcast <message>`  
    **Description:** Send a server-wide chat message.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<message>`  
    **Example:**
    ```text
    /broadcast <message>
    ```

??? info "/dialog"
    **Syntax:** `/dialog [player|all] <message>`  
    **Description:** Alias for /popup.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player|all] <message>`  
    **Example:**
    ```text
    /dialog [player|all] <message>
    ```

??? info "/givei"
    **Syntax:** `/givei <player> <itemid> [amount]`  
    **Description:** Alias for /giveitem.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> <itemid> [amount]`  
    **Example:**
    ```text
    /givei <player> <itemid> [amount]
    ```

??? info "/given"
    **Syntax:** `/given [player] <NpcID> [level]`  
    **Description:** Alias for /givenpc.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <NpcID> [level]`  
    **Example:**
    ```text
    /given [player] <NpcID> [level]
    ```

??? info "/givep"
    **Syntax:** `/givep [player] <PalID> [level] [rank]`  
    **Description:** Alias for /givepal.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <PalID> [level] [rank]`  
    **Example:**
    ```text
    /givep [player] <PalID> [level] [rank]
    ```

??? info "/help"
    **Syntax:** `/help [command]`  
    **Description:** List commands or show help for a specific command.  
    **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
    **Arguments:** `[command]`  
    **Example:**
    ```text
    /help [command]
    ```

??? info "/info"
    **Syntax:** `/info <player>`  
    **Description:** Show full profile: position, ping, session, violations, flags.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /info <player>
    ```

??? info "/notice"
    **Syntax:** `/notice <message>`  
    **Description:** Broadcast a full-screen native server notice to all players.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<message>`  
    **Example:**
    ```text
    /notice <message>
    ```

??? info "/playerinfo"
    **Syntax:** `/playerinfo <player|uid>`  
    **Description:** Inspect an online or offline player: stats, guild, last position, tech, save info.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player|uid>`  
    **Example:**
    ```text
    /playerinfo <player|uid>
    ```

??? info "/players"
    **Syntax:** `/players`  
    **Description:** List all online players with status.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /players
    ```

??? info "/popup"
    **Syntax:** `/popup [player|all] <message>`  
    **Description:** Show a centered native modal popup dialog with [ OK ] button.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player|all] <message>`  
    **Example:**
    ```text
    /popup [player|all] <message>
    ```

??? info "/popupall"
    **Syntax:** `/popupall <message>`  
    **Description:** Broadcast a centered native modal popup dialog to all players.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<message>`  
    **Example:**
    ```text
    /popupall <message>
    ```

??? info "/reloadcfg"
    **Syntax:** `/reloadcfg`  
    **Description:** Hot-reload config.json without restarting.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /reloadcfg
    ```

??? info "/save"
    **Syntax:** `/save`  
    **Description:** Force an immediate world save.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /save
    ```

??? info "/setadmin"
    **Syntax:** `/setadmin <player> <true|false>`  
    **Description:** Grant or revoke temporary admin privileges for a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> <true|false>`  
    **Example:**
    ```text
    /setadmin <player> <true|false>
    ```

??? info "/spawnp"
    **Syntax:** `/spawnp [player] <PalID> [level]`  
    **Description:** Spawn a wild Pal in the world next to a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <PalID> [level]`  
    **Example:**
    ```text
    /spawnp [player] <PalID> [level]
    ```

??? info "/spawnw"
    **Syntax:** `/spawnw <PalID> <level> <x> <y> <z>`  
    **Description:** Spawn a wild Pal in the world at specific coordinates.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<PalID> <level> <x> <y> <z>`  
    **Example:**
    ```text
    /spawnw <PalID> <level> <x> <y> <z>
    ```

??? info "/time"
    **Syntax:** `/time <0-23>`  
    **Description:** Set the world time to a specific hour.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<0-23>`  
    **Example:**
    ```text
    /time <0-23>
    ```

??? info "/uptime"
    **Syntax:** `/uptime`  
    **Description:** Show server uptime, player count, and violation stats.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /uptime
    ```

??? info "/worldtime"
    **Syntax:** `/worldtime <hour 0-23>`  
    **Description:** Set the in-game world clock hour (server-wide).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<hour 0-23>`  
    **Example:**
    ```text
    /worldtime <hour 0-23>
    ```

??? info "/worldtimescale"
    **Syntax:** `/worldtimescale <rate>`  
    **Description:** Set the world time progression rate (server-wide).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<rate>`  
    **Example:**
    ```text
    /worldtimescale <rate>
    ```

---

## Items & Inventory

??? info "/adminweapon"
    **Syntax:** `/adminweapon [on|off|give] [player]`  
    **Description:** Toggle Admin One-Hit Kill/Destroy Weapon mode (bypasses all shields, armor & destroys any entity/object).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[on|off|give] [player]`  
    **Example:**
    ```text
    /adminweapon [on|off|give] [player]
    ```

??? info "/clearinv"
    **Syntax:** `/clearinv <player>`  
    **Description:** Clear all items from a player's common inventory.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /clearinv <player>
    ```

??? info "/giveadminweapon"
    **Syntax:** `/giveadminweapon [player]`  
    **Description:** Grant admin weapons and ammo directly to inventory.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /giveadminweapon [player]
    ```

??? info "/giveitem"
    **Syntax:** `/giveitem <player> <itemid> [amount]`  
    **Description:** Give items to a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> <itemid> [amount]`  
    **Example:**
    ```text
    /giveitem <player> <itemid> [amount]
    ```

??? info "/godweapon"
    **Syntax:** `/godweapon [on|off|give] [player]`  
    **Description:** Alias for /adminweapon.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[on|off|give] [player]`  
    **Example:**
    ```text
    /godweapon [on|off|give] [player]
    ```

??? info "/inspectinv"
    **Syntax:** `/inspectinv <player>`  
    **Description:** Inspect a player's common inventory items, quantities, and durability.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /inspectinv <player>
    ```

??? info "/itemreward"
    **Syntax:** `/itemreward [player|all] <item_name_or_id> [amount]`  
    **Description:** Alias for /rewardi.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player|all] <item_name_or_id> [amount]`  
    **Example:**
    ```text
    /itemreward [player|all] <item_name_or_id> [amount]
    ```

??? info "/onehit"
    **Syntax:** `/onehit [on|off|give] [player]`  
    **Description:** Alias for /adminweapon.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[on|off|give] [player]`  
    **Example:**
    ```text
    /onehit [on|off|give] [player]
    ```

??? info "/removeitem"
    **Syntax:** `/removeitem [player] <item_id> [amount]`  
    **Description:** Remove a specified item and quantity (or all) from a player's inventory.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <item_id> [amount]`  
    **Example:**
    ```text
    /removeitem [player] <item_id> [amount]
    ```

??? info "/repair"
    **Syntax:** `/repair <player>`  
    **Description:** Restore full durability to all equipped weapons, armor, and gliders.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /repair <player>
    ```

??? info "/rewarditem"
    **Syntax:** `/rewarditem [player|all] <item_name_or_id> [amount]`  
    **Description:** Alias for /rewardi.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player|all] <item_name_or_id> [amount]`  
    **Example:**
    ```text
    /rewarditem [player|all] <item_name_or_id> [amount]
    ```

??? info "/takeitem"
    **Syntax:** `/takeitem [player] <item_id> [amount]`  
    **Description:** Remove a specified item and quantity (or all) from a player's inventory.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <item_id> [amount]`  
    **Example:**
    ```text
    /takeitem [player] <item_id> [amount]
    ```

---

## Pals & NPCs

??? info "/clearpaldex"
    **Syntax:** `/clearpaldex [player]`  
    **Description:** Reset/clear Paldex entries.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /clearpaldex [player]
    ```

??? info "/completepaldex"
    **Syntax:** `/completepaldex [player]`  
    **Description:** Complete Paldex capture and encounter records for all Pals.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /completepaldex [player]
    ```

??? info "/givenpc"
    **Syntax:** `/givenpc [player] <NpcID> [level]`  
    **Description:** Add a human NPC directly to a player's party / PalBox.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <NpcID> [level]`  
    **Example:**
    ```text
    /givenpc [player] <NpcID> [level]
    ```

??? info "/givepal"
    **Syntax:** `/givepal [player] <PalID> [level] [rank]`  
    **Description:** Spawn and add a Pal directly to a player's party.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <PalID> [level] [rank]`  
    **Example:**
    ```text
    /givepal [player] <PalID> [level] [rank]
    ```

??? info "/inspectpals"
    **Syntax:** `/inspectpals <player>`  
    **Description:** Inspect party Pals (IVs, level, rank, passives, flags illegal stats).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /inspectpals <player>
    ```

??? info "/palparty"
    **Syntax:** `/palparty [player]`  
    **Description:** Inspect a player's active Pal party (slots, level, IVs, rank, passives).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /palparty [player]
    ```

??? info "/palreward"
    **Syntax:** `/palreward [player|all] <pal_name_or_id> [level] [rank]`  
    **Description:** Alias for /rewardp.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player|all] <pal_name_or_id> [level] [rank]`  
    **Example:**
    ```text
    /palreward [player|all] <pal_name_or_id> [level] [rank]
    ```

??? info "/removepal"
    **Syntax:** `/removepal [player] <pal_id|slot_1-5> [count]`  
    **Description:** Remove a specified Pal species or specific party slot (1-5) from a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <pal_id|slot_1-5> [count]`  
    **Example:**
    ```text
    /removepal [player] <pal_id|slot_1-5> [count]
    ```

??? info "/resetpaldex"
    **Syntax:** `/resetpaldex [player]`  
    **Description:** Reset/clear Paldex entries.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /resetpaldex [player]
    ```

??? info "/revivepals"
    **Syntax:** `/revivepals <player>`  
    **Description:** Revive and fully restore HP, hunger, and sanity of all party Pals.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /revivepals <player>
    ```

??? info "/rewardpal"
    **Syntax:** `/rewardpal [player|all] <pal_name_or_id> [level] [rank]`  
    **Description:** Alias for /rewardp.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player|all] <pal_name_or_id> [level] [rank]`  
    **Example:**
    ```text
    /rewardpal [player|all] <pal_name_or_id> [level] [rank]
    ```

??? info "/spawnnpc"
    **Syntax:** `/spawnnpc [player] <NpcID> [level]`  
    **Description:** Alias for /spawnnpcp.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <NpcID> [level]`  
    **Example:**
    ```text
    /spawnnpc [player] <NpcID> [level]
    ```

??? info "/spawnnpcp"
    **Syntax:** `/spawnnpcp [player] <NpcID> [level]`  
    **Description:** Spawn an active human NPC in front of a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <NpcID> [level]`  
    **Example:**
    ```text
    /spawnnpcp [player] <NpcID> [level]
    ```

??? info "/spawnnpcw"
    **Syntax:** `/spawnnpcw <NpcID> <level> <x> <y> <z>`  
    **Description:** Spawn an active human NPC at specific world coordinates.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<NpcID> <level> <x> <y> <z>`  
    **Example:**
    ```text
    /spawnnpcw <NpcID> <level> <x> <y> <z>
    ```

??? info "/spawnpal"
    **Syntax:** `/spawnpal [player] <PalID> [level]`  
    **Description:** Alias for /spawnp.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <PalID> [level]`  
    **Example:**
    ```text
    /spawnpal [player] <PalID> [level]
    ```

??? info "/takepal"
    **Syntax:** `/takepal [player] <pal_id|slot_1-5> [count]`  
    **Description:** Remove a specified Pal species or specific party slot (1-5) from a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <pal_id|slot_1-5> [count]`  
    **Example:**
    ```text
    /takepal [player] <pal_id|slot_1-5> [count]
    ```

??? info "/wipepals"
    **Syntax:** `/wipepals <player>`  
    **Description:** Clear all Pals from a player's active party.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /wipepals <player>
    ```

---

## Player Stats & Progression

??? info "/buff"
    **Syntax:** `/buff <action|buff_id> [args...]`  
    **Description:** Comprehensive player buff management: apply pre-configured buffs (e.g. `warrior_fury`, `iron_wall`, `speed_demon`, `lucky_hunter`, `awakened_god`), view active buffs, list available presets, or grant buffs to target players.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<buff_id [duration]|give <player> <buff_id>|remove [player]|list|info <buff_id>>`  
    **Example:**
    ```text
    /buff lucky_hunter 600
    /buff give Smooth awakened_god
    /buff list
    /buff remove
    ```

??? info "/aura"
    **Syntax:** `/aura <aura_name|clear>`  
    **Description:** Apply purely cosmetic visual particle aura effects with ZERO gameplay damage ticks. Automatically applies to both player and active summoned Pal.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<aura_name|clear>` (Available: `lucky`, `awakening`, `world_tree`, `burn`, `freeze`, `electrical`, `poison`, `wetness`, `darkness`, `earth`, `leaf`, `pal_enhancement`, `life_steal`, `low_gravity`, `player_buff`, `attack_up`, `defense_up`, `power_up`, `dragon`)  
    **Example:**
    ```text
    /aura lucky
    /aura awakening
    /aura burn
    /aura clear
    ```

??? info "/onehit"
    **Syntax:** `/onehit [player] [on|off]`  
    **Description:** Toggle Admin One-Hit Kill bypass damage for yourself or a target player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] [on|off]`  
    **Example:**
    ```text
    /onehit
    /onehit Smooth on
    ```


??? info "/clearstats"
    **Syntax:** `/clearstats [player]`  
    **Description:** Wipe all allocated and unspent status points to 0.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /clearstats [player]
    ```

??? info "/clearwanted"
    **Syntax:** `/clearwanted [player]`  
    **Description:** Pardon player and clear active criminal wanted status.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /clearwanted [player]
    ```

??? info "/giveexp"
    **Syntax:** `/giveexp <player> <amount>`  
    **Description:** Give experience points to a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> <amount>`  
    **Example:**
    ```text
    /giveexp <player> <amount>
    ```

??? info "/givetech"
    **Syntax:** `/givetech <player> <amount> [boss]`  
    **Description:** Give technology points. Add 'boss' for boss tech points.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> <amount> [boss]`  
    **Example:**
    ```text
    /givetech <player> <amount> [boss]
    ```

??? info "/godmode"
    **Syntax:** `/godmode <player> [on|off]`  
    **Description:** Toggle invincibility for a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> [on|off]`  
    **Example:**
    ```text
    /godmode <player> [on|off]
    ```

??? info "/heal"
    **Syntax:** `/heal [player]`  
    **Description:** Restore a player to full HP. Defaults to self.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /heal [player]
    ```

??? info "/knock"
    **Syntax:** `/knock [player]`  
    **Description:** Knock a player into DBNO bleedout state (0 HP). Defaults to self.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /knock [player]
    ```

??? info "/lockalltech"
    **Syntax:** `/lockalltech [player]`  
    **Description:** Reset and lock all technology recipes.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /lockalltech [player]
    ```

??? info "/lockfasttravel"
    **Syntax:** `/lockfasttravel [player]`  
    **Description:** Lock all Fast Travel statues.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /lockfasttravel [player]
    ```

??? info "/maxrelics"
    **Syntax:** `/maxrelics [player]`  
    **Description:** Max out Lifmunk Effigies / capture power.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /maxrelics [player]
    ```

??? info "/rename"
    **Syntax:** `/rename [player] <NewNickname>`  
    **Description:** Change player's in-game nickname.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <NewNickname>`  
    **Example:**
    ```text
    /rename [player] <NewNickname>
    ```

??? info "/resetalltech"
    **Syntax:** `/resetalltech [player]`  
    **Description:** Reset and lock all technology recipes.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /resetalltech [player]
    ```

??? info "/resetlevel"
    **Syntax:** `/resetlevel [player]`  
    **Description:** Reset player to Level 1 and 0 EXP.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /resetlevel [player]
    ```

??? info "/resetstats"
    **Syntax:** `/resetstats [player]`  
    **Description:** Reset allocated status points and refund them to unspent points.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /resetstats [player]
    ```

??? info "/resetstats"
    **Syntax:** `/resetstats [player]`  
    **Description:** Refund all allocated player stat points back to unallocated status points.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /resetstats [player]
    ```

??? info "/respawn"
    **Syntax:** `/respawn [player]`  
    **Description:** Force-respawn a player via CheatManager. Defaults to self.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /respawn [player]
    ```

??? info "/respawnboss"
    **Syntax:** `/respawnboss <boss_name|spawner_name|all>`  
    **Description:** Force an immediate respawn of an Alpha boss or spawner.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<boss_name|spawner_name|all>`  
    **Example:**
    ```text
    /respawnboss <boss_name|spawner_name|all>
    ```

??? info "/respec"
    **Syntax:** `/respec [player]`  
    **Description:** Reset allocated status points and refund them to unspent points.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /respec [player]
    ```

??? info "/sethp"
    **Syntax:** `/sethp <player> <amount>`  
    **Description:** Set a player's exact HP via CheatManager.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> <amount>`  
    **Example:**
    ```text
    /sethp <player> <amount>
    ```

??? info "/setlevel"
    **Syntax:** `/setlevel [player] <1-80|max>`  
    **Description:** Set player level directly (up to 80+).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <1-80|max>`  
    **Example:**
    ```text
    /setlevel [player] <1-80|max>
    ```

??? info "/setmaxweight"
    **Syntax:** `/setmaxweight [player] <weight>`  
    **Description:** Override maximum inventory carrying weight.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <weight>`  
    **Example:**
    ```text
    /setmaxweight [player] <weight>
    ```

??? info "/setrelics"
    **Syntax:** `/setrelics [player] <amount>`  
    **Description:** Set Lifmunk Effigies collected for capture power upgrades.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <amount>`  
    **Example:**
    ```text
    /setrelics [player] <amount>
    ```

??? info "/setsp"
    **Syntax:** `/setsp <player> <amount>`  
    **Description:** Set a player's exact SP (stamina) via CheatManager.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> <amount>`  
    **Example:**
    ```text
    /setsp <player> <amount>
    ```

??? info "/setstamina"
    **Syntax:** `/setstamina <player> <amount>`  
    **Description:** Set a player's exact SP (stamina) via CheatManager. Alias for /setsp.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> <amount>`  
    **Example:**
    ```text
    /setstamina <player> <amount>
    ```

??? info "/triggerwanted"
    **Syntax:** `/triggerwanted [player] [1-5]`  
    **Description:** Trigger criminal wanted status (1-5 stars) and summon PIDF response.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] [1-5]`  
    **Example:**
    ```text
    /triggerwanted [player] [1-5]
    ```

??? info "/unlockalltech"
    **Syntax:** `/unlockalltech [player]`  
    **Description:** Unlock all technology recipes (building, crafting, weapons, saddles).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /unlockalltech [player]
    ```

??? info "/unlockfasttravel"
    **Syntax:** `/unlockfasttravel [player]`  
    **Description:** Unlock all Fast Travel statues on the map.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /unlockfasttravel [player]
    ```

??? info "/wanted"
    **Syntax:** `/wanted [player] [1-5]`  
    **Description:** Trigger criminal wanted status (1-5 stars) and summon PIDF response.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] [1-5]`  
    **Example:**
    ```text
    /wanted [player] [1-5]
    ```

---

## Teleportation & Navigation

??? info "/forcecheck"
    **Syntax:** `/forcecheck <player>`  
    **Description:** Run an immediate AC check on a player out of the normal tick cycle.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /forcecheck <player>
    ```

??? info "/inspectplayer"
    **Syntax:** `/inspectplayer <player|uid>`  
    **Description:** Inspect an online or offline player: stats, guild, last position, tech, save info.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player|uid>`  
    **Example:**
    ```text
    /inspectplayer <player|uid>
    ```

??? info "/pos"
    **Syntax:** `/pos <player>`  
    **Description:** Show a player's current position and movement mode.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /pos <player>
    ```

??? info "/spectate"
    **Syntax:** `/spectate <player>`  
    **Description:** Spectate a player in admin mode.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /spectate <player>
    ```

??? info "/tp"
    **Syntax:** `/tp <player> <x> <y> <z>  or  <player> <destplayer>`  
    **Description:** Teleport a player to coordinates or another player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> <x> <y> <z>  or  <player> <destplayer>`  
    **Example:**
    ```text
    /tp <player> <x> <y> <z>  or  <player> <destplayer>
    ```

??? info "/tp2me"
    **Syntax:** `/tp2me <player>`  
    **Description:** Pull a player to your location.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /tp2me <player>
    ```

??? info "/tpme"
    **Syntax:** `/tpme <player>`  
    **Description:** Teleport yourself to a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player>`  
    **Example:**
    ```text
    /tpme <player>
    ```

??? info "/watch"
    **Syntax:** `/watch <player> [on|off]`  
    **Description:** Enable enhanced logging and evidence capture for a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> [on|off]`  
    **Example:**
    ```text
    /watch <player> [on|off]
    ```

---

## Bosses & Encounters

??? info "/bosses"
    **Syntax:** `/bosses`  
    **Description:** Query world boss spawners, alive/dead state, and coordinates.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /bosses
    ```

??? info "/despawnboss"
    **Syntax:** `/despawnboss [player] [radius]`  
    **Description:** Alias for /killboss.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] [radius]`  
    **Example:**
    ```text
    /despawnboss [player] [radius]
    ```

??? info "/givecustom"
    **Syntax:** `/givecustom [player] <template_name>`  
    **Description:** Give custom Pal directly to player party / PalBox (reads pal_data only).  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <template_name>`  
    **Example:**
    ```text
    /givecustom [player] <template_name>
    ```

??? info "/listtemplates"
    **Syntax:** `/listtemplates`  
    **Description:** List all loaded Pal and Boss encounter templates.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /listtemplates
    ```

??? info "/raid"
    **Syntax:** `/raid [player]`  
    **Description:** Trigger an invader march / raid against a player's nearest base camp.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /raid [player]
    ```

??? info "/reloadtemplates"
    **Syntax:** `/reloadtemplates`  
    **Description:** Reload custom templates from PalSupervisor/Templates json files.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /reloadtemplates
    ```

??? info "/rewardcustom"
    **Syntax:** `/rewardcustom [player] <template_name>`  
    **Description:** Alias for /givecustom.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <template_name>`  
    **Example:**
    ```text
    /rewardcustom [player] <template_name>
    ```

??? info "/spawnboss"
    **Syntax:** `/spawnboss [player] <template_name> [distance]`  
    **Description:** Summon full Boss Encounter with minions, loot engine, and announcements.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <template_name> [distance]`  
    **Example:**
    ```text
    /spawnboss [player] <template_name> [distance]
    ```

??? info "/spawnbossp"
    **Syntax:** `/spawnbossp [player] <template_name> [distance]`  
    **Description:** Summon full Boss Encounter in front of a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <template_name> [distance]`  
    **Example:**
    ```text
    /spawnbossp [player] <template_name> [distance]
    ```

??? info "/spawnbossw"
    **Syntax:** `/spawnbossw <template_name> <x> <y> [z]`  
    **Description:** Summon full Boss Encounter at in-game map coordinates.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<template_name> <x> <y> [z]`  
    **Example:**
    ```text
    /spawnbossw <template_name> <x> <y> [z]
    ```

??? info "/spawncustom"
    **Syntax:** `/spawncustom [player] <template_name> [distance]`  
    **Description:** Spawn custom Pal from template into the world.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <template_name> [distance]`  
    **Example:**
    ```text
    /spawncustom [player] <template_name> [distance]
    ```

??? info "/spawncustomp"
    **Syntax:** `/spawncustomp [player] <template_name> [distance]`  
    **Description:** Spawn custom Pal from template next to a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player] <template_name> [distance]`  
    **Example:**
    ```text
    /spawncustomp [player] <template_name> [distance]
    ```

??? info "/spawncustomw"
    **Syntax:** `/spawncustomw <template_name> <x> <y> [z]`  
    **Description:** Spawn custom Pal from template at in-game map coordinates.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<template_name> <x> <y> [z]`  
    **Example:**
    ```text
    /spawncustomw <template_name> <x> <y> [z]
    ```

??? info "/stopraid"
    **Syntax:** `/stopraid`  
    **Description:** Cancel all active enemy invasion raids.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /stopraid
    ```

---

## Economy, Points & Shop

??? info "/balance"
    **Syntax:** `/balance [player]`  
    **Description:** Alias for /points.  
    **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /balance [player]
    ```

??? info "/buy"
    **Syntax:** `/buy <item_id>`  
    **Description:** Purchase an item from the PalPoints shop.  
    **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
    **Arguments:** `<item_id>`  
    **Example:**
    ```text
    /buy <item_id>
    ```

??? info "/expreward"
    **Syntax:** `/expreward [player|all] <amount>`  
    **Description:** Alias for /rewardexp.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player|all] <amount>`  
    **Example:**
    ```text
    /expreward [player|all] <amount>
    ```

??? info "/gacha"
    **Syntax:** `/gacha`  
    **Description:** Alias for /roll.  
    **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
    **Example:**
    ```text
    /gacha
    ```

??? info "/givepoints"
    **Syntax:** `/givepoints <player> <amount>`  
    **Description:** Grant points directly to a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> <amount>`  
    **Example:**
    ```text
    /givepoints <player> <amount>
    ```

??? info "/leaderboard"
    **Syntax:** `/leaderboard`  
    **Description:** Alias for /top.  
    **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
    **Example:**
    ```text
    /leaderboard
    ```

??? info "/points"
    **Syntax:** `/points [player]`  
    **Description:** View current points balance and statistics.  
    **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
    **Arguments:** `[player]`  
    **Example:**
    ```text
    /points [player]
    ```

??? info "/reloadpoints"
    **Syntax:** `/reloadpoints`  
    **Description:** Hot-reload points_config.json, shop_config.json, and roll_config.json.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /reloadpoints
    ```

??? info "/reloadshop"
    **Syntax:** `/reloadshop`  
    **Description:** Alias for /reloadpoints.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /reloadshop
    ```

??? info "/rewardexp"
    **Syntax:** `/rewardexp [player|all] <amount>`  
    **Description:** Reward EXP to party with native on-screen Victory EXP banner.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player|all] <amount>`  
    **Example:**
    ```text
    /rewardexp [player|all] <amount>
    ```

??? info "/rewardi"
    **Syntax:** `/rewardi [player|all] <item_name_or_id> [amount]`  
    **Description:** Reward items to inventory with native animated reward cards and HUD log.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player|all] <item_name_or_id> [amount]`  
    **Example:**
    ```text
    /rewardi [player|all] <item_name_or_id> [amount]
    ```

??? info "/rewardp"
    **Syntax:** `/rewardp [player|all] <pal_name_or_id> [level] [rank]`  
    **Description:** Reward a Pal to Party/PalBox with native capture visuals.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `[player|all] <pal_name_or_id> [level] [rank]`  
    **Example:**
    ```text
    /rewardp [player|all] <pal_name_or_id> [level] [rank]
    ```

??? info "/roll"
    **Syntax:** `/roll`  
    **Description:** Spin the Lucky Roll for randomized rewards and jackpots.  
    **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
    **Example:**
    ```text
    /roll
    ```

??? info "/shop"
    **Syntax:** `/shop [category|all]`  
    **Description:** Browse the PalPoints item and summon shop.  
    **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
    **Arguments:** `[category|all]`  
    **Example:**
    ```text
    /shop [category|all]
    ```

??? info "/takepoints"
    **Syntax:** `/takepoints <player> <amount>`  
    **Description:** Deduct points from a player.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Arguments:** `<player> <amount>`  
    **Example:**
    ```text
    /takepoints <player> <amount>
    ```

??? info "/top"
    **Syntax:** `/top`  
    **Description:** View the top points leaderboard.  
    **Permissions:** `In-Game Chat`, `REST API`, `All Players`  
    **Example:**
    ```text
    /top
    ```

---

## Diagnostics & Debug

??? info "/debug"
    **Syntax:** `/debug`  
    **Description:** Dump full system status: registry, GObjects, GWorld, character, admin flag.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /debug
    ```

??? info "/dumptables"
    **Syntax:** `/dumptables`  
    **Description:** Dump Technology, Recipe, Wild Spawner, and Boss Spawner tables to JSON.  
    **Permissions:** `In-Game Chat`, `REST API`, `Admin Only`  
    **Example:**
    ```text
    /dumptables
    ```

---

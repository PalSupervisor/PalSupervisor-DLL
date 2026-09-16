# Installation Guide

PalSupervisor requires **no external mod loaders, UE4SS, or complex dependencies** — drop a single DLL and a config file, and it's live.

---

## Requirements

- Palworld Dedicated Server for Windows (`PalServer-Win64-Shipping-Cmd.exe`)
- A valid **License Key** (contact PalSupervisor to obtain one)
- The `version.dll` binary and your `config.json`

---

## Step 1: Deploy `version.dll`

Copy `version.dll` directly into the PalServer binary directory:

```
PalServer/
└── Pal/
    └── Binaries/
        └── Win64/
            ├── PalServer-Win64-Shipping-Cmd.exe  ← server executable
            ├── version.dll                        ← place here
            └── config.json                        ← place here
```

!!! tip "Auto-Generated Config"
    If `config.json` is missing on startup, PalSupervisor will generate a full default config at the correct path automatically. You only need to fill in your **license key**, **API key**, and **admin Steam ID(s)**.

---

## Step 2: Configure `config.json`

Place `config.json` next to the server executable:

```
PalServer/Pal/Binaries/Win64/config.json
```

### Minimal Starter Config

The only fields you **must** change before launching:

```json
{
  "license_key": "YOUR-LICENSE-KEY",
  "api": {
    "port": 27020,
    "bind": "0.0.0.0",
    "api_key": "CHANGE_THIS_NOW",
    "jwt_secret": "CHANGE_THIS_SECRET_NOW",
    "jwt_expiry_seconds": 3600
  }
}
```

---

### Full Default Config Reference

This is the complete config PalSupervisor auto-generates. All values below are the **factory defaults**:

```json
{
  "license_key": "YOUR-LICENSE-KEY",

  "api": {
    "port": 27020,
    "bind": "0.0.0.0",
    "api_key": "CHANGE_THIS_NOW",
    "jwt_secret": "CHANGE_THIS_SECRET_NOW",
    "jwt_expiry_seconds": 3600
  },

  "chat": {
    "command_prefix": "/"
  },

  "logging": {
    "file": "PalSupervisor/logs/palsupervisor.log",
    "max_size_mb": 50,
    "rotate_count": 5,
    "discord_webhook_url": "",
    "discord_min_level": "warn"
  },

  "activity_logging": {
    "enabled": true,
    "log_to_console": true,
    "log_kills": true,
    "log_captures": true,
    "boss_only": false,
    "flag_suspicious": true,
    "max_legit_damage": 500000.0,
    "log_file_path": "PalSupervisor/logs/activity.log"
  },

  "detection": {
    "enabled": true,
    "tick_interval_ms": 500,
    "position_history_seconds": 10,
    "exemptions": {
      "player_uids": []
    },
    "violation_policy": {
      "auto_kick": false,
      "auto_ban": false,
      "violation_debounce_seconds": 15,
      "warn_threshold": 10,
      "kick_threshold": 20,
      "ban_threshold": 35,
      "violation_decay_seconds": 60,
      "instant_ban_on_debug_rpc": false,
      "instant_ban_on_crash_rpc": true,
      "notify_admins_on_violation": true,
      "discord_notify_on_ban": false
    },
    "movement": {
      "enabled": true,
      "max_walk_speed": 1400.0,
      "max_walk_speed_crouched": 600.0,
      "max_swim_speed": 1400.0,
      "max_fly_speed": 6000.0,
      "max_position_delta_per_tick": 5000.0,
      "max_jump_z_velocity": 2500.0,
      "max_air_dash_count": 5,
      "gravity_scale_min": 0.3,
      "gravity_scale_max": 3.0,
      "teleport_grace_window_ms": 2000,
      "sprint_cap_multiplier_max": 3.5,
      "glider_speed_multiplier_max": 4.5
    },
    "combat": {
      "enabled": true,
      "max_damage_per_hit": 500000.0,
      "max_attack_up": 1000.0,
      "max_defense_up": 1000.0,
      "min_weapon_swap_time_ms": 100,
      "min_pull_trigger_countdown": 0.05,
      "check_pvp_on_non_pvp_server": true
    },
    "godmode": {
      "enabled": true,
      "check_sp_overheat": false,
      "sp_overheat_window_ms": 5000,
      "sp_overheat_min_drain": 1.0,
      "check_infinite_stamina": false,
      "stamina_drain_grace_window_ms": 15000,
      "min_stamina_drain": 1.0
    },
    "items": {
      "enabled": true,
      "max_pickup_distance": 500.0,
      "max_container_distance": 300.0,
      "max_drop_rate_per_second": 5,
      "max_dispose_rate_per_second": 5,
      "max_pickup_rate_per_second": 8,
      "check_weight_bypass": false
    },
    "technology": {
      "enabled": true,
      "max_tech_point_gain_per_30_sec": 50
    },
    "pals": {
      "enabled": true,
      "block_tower_boss_capture": true,
      "allow_quest_pals": true,
      "allow_field_alpha_bosses": true,
      "check_capture_rate": true,
      "max_capture_success_rate": 2.0,
      "check_boss_flag_spoof": true
    },
    "containers": {
      "enabled": true,
      "check_lock_ownership": true,
      "check_guild_chest_membership": true,
      "max_access_distance": 400.0
    },
    "building": {
      "enabled": true,
      "max_build_distance": 1000.0,
      "max_dismantle_distance": 500.0,
      "max_repair_distance": 500.0,
      "max_damage_object_distance": 800.0,
      "max_build_rate_per_second": 6
    },
    "network": {
      "enabled": true,
      "max_rpc_per_second_global": 300,
      "rpc_per_function_limits": {
        "RequestAddItem_ToServer": 10,
        "RequestDrop_ToServer": 5,
        "RequestDispose_ToServer": 5,
        "RequestMoveToContainer_ToServer": 20,
        "RequestBuild_ToServer": 15,
        "RequestDamageMapObject_ToServer": 30,
        "SelfKillPlayer": 3,
        "TeleportToSafePoint_ToServer": 4
      },
      "check_uid_spoof": true,
      "check_account_name_empty": true,
      "join_grace_period_seconds": 15,
      "max_chat_per_minute": 20
    },
    "session_stats": {
      "enabled": true,
      "max_kills_per_hour": 500,
      "max_damage_per_hour": 5000000.0,
      "max_items_picked_per_hour": 1000,
      "outlier_action": "flag"
    }
  },

  "evidence": {
    "enabled": true,
    "output_dir": "PalSupervisor/evidence/",
    "capture_on_violation": true,
    "capture_on_ban": true,
    "include_inventory": true,
    "include_pals": true,
    "include_position_history": true
  },

  "ban": {
    "file": "PalSupervisor/config/banlist.json",
    "ban_message": "You are banned from this server. Reason: {reason}",
    "ban_evasion_check": true,
    "ban_evasion_strategy": "uid+ip",
    "ip_ban_enabled": true
  },

  "whitelist": {
    "file": "PalSupervisor/config/whitelist.json",
    "enabled": false,
    "kick_message": "This server is whitelist-only. Please contact the administrator to gain access."
  },

  "admin": {
    "file": "PalSupervisor/config/admins.json",
    "ip_whitelist": ["127.0.0.1"]
  },

  "guild": {
    "member_max_limit": 0,
    "base_limit_multiplier": 1.0,
    "base_max_worker_pals": 0,
    "base_territory_protection": true,
    "storage_audit_enabled": true,
    "storage_audit_max_entries": 500,
    "blacklist_file": "PalSupervisor/config/guild_blacklist.json",
    "storage_audit_file": "PalSupervisor/config/guild_storage_audit.json"
  },

  "integrity": {
    "startup_sanity_check": true,
    "abort_on_offset_mismatch": false
  }
}
```

---

## Step 3: Add Admins

Edit `PalSupervisor/config/admins.json` to grant admin access. Admins can use all in-game commands and bypass anti-cheat exemptions:

```json
[
  {
    "uid": "00000000-0000-0000-0000-000000000000",
    "name": "YourName",
    "note": "Server owner"
  }
]
```

!!! note "Where is my UID?"
    Your player UID is shown in server logs when you connect, or via `GET /api/players` from the REST API. It is **not** your Steam ID.

---

## Step 4: Launch the Server

Start your dedicated server normally:

```
PalServer-Win64-Shipping-Cmd.exe -useperfthreads -NoAsyncLoadingThread -UseMultithreadForDS
```

PalSupervisor initializes automatically. You will see `[PalSupervisor] v0.4.1 initialized` in the server log on success.

---

## Step 5: Verify

| Method | What to do |
|---|---|
| **In-game** | Type `/help` in chat — you should see the PalSupervisor command list |
| **REST API** | Visit `http://YOUR-SERVER-IP:27020/health` in your browser |
| **Log file** | Check `PalSupervisor/logs/palsupervisor.log` for startup messages |

---

## Directory Structure After First Run

```
PalServer/Pal/Binaries/Win64/
├── version.dll
├── config.json
└── PalSupervisor/
    ├── config/
    │   ├── admins.json         ← admin steam UIDs
    │   ├── banlist.json        ← persistent bans
    │   ├── whitelist.json      ← whitelist (if enabled)
    │   └── guild_blacklist.json
    ├── logs/
    │   ├── palsupervisor.log   ← main server log
    │   └── activity.log        ← kill / capture / fish events
    └── evidence/               ← violation snapshots (inventory, position, pals)
```

---

## Hot Reload

Most config changes take effect **without restarting the server**:

- **In-game**: `/reloadcfg` (admin only)
- **REST API**: `POST /api/config/reload`

The following files auto-reload every **5 minutes** and on every **player login**:

- `admins.json`
- `banlist.json`
- `whitelist.json`
- Shop, points, and roll templates

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| No log output | Check `version.dll` is in the correct `Win64/` directory |
| `[Config] failed to parse` | Validate your JSON at [jsonlint.com](https://jsonlint.com) |
| Commands not working | Ensure your UID is in `admins.json` and you used the right prefix (`/`) |
| API returns 401 | Check `api_key` in your request matches `config.json` |
| Anti-cheat false positives | Add player UID to `detection.exemptions.player_uids` or raise the relevant threshold |

!!! warning "Never share your `api_key` or `jwt_secret`"
    These authenticate all REST API and Panel connections. Treat them like passwords.

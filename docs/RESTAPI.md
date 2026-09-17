# Embedded REST API Reference 🌐

> **PalSupervisor embeds a native high-performance, non-blocking HTTP server listening on port `27020`** (customizable in `config.json`). The API allows server management dashboards, Discord bots, and remote administrative tools to monitor and control PalServer with zero tick degradation.

Each category below can be **expanded or minimized**. Click any category to reveal its endpoints, and click any endpoint to inspect its URL parameters, Send Format (Request headers & payload), and Receive Format (Success 200 OK & error codes).

!!! note "Authentication & Headers"
    Administrative endpoints require authentication via one of the following methods:
    
    * **Header `X-API-Key`**: Matches the `api.api_key` in `config.json` (Default: `changeme-admin-key`).
    * **Header `Authorization: Bearer <token>`**: JWT session token obtained from `POST /auth/login`.
    * **Content-Type**: Must be `application/json` for POST requests with a body.

---

??? note "🏰 Guilds & Base Camps (14 endpoints)"

    > Base camp demolition, zero-spill clean wipe, storage chest inspection, worker monitoring, and guild administration.

    ??? info "POST /api/bases/{id}/wipe — Clean Wipe Base Camp"
        **Description:** Completely erases a base camp without spilling ground loot: zeroes all chest/workbench inventory slots, demolishes all building and defense actors via DisposeSelf_ServerInternal, dismantles the PalBox, sweeps ground items, and flushes directly to Level.sav.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `id` | `string (GUID)` | Base camp GUID (e.g. CCB5D391-461757F3-A2EBFAA5-48A73861) |

        #### Request (Send Format)
        ```http
        POST /api/bases/{id}/wipe HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Base camp cleanly wiped (zero item spill)"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Base camp not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bases/CCB5D391-461757F3-A2EBFAA5-48A73861/wipe \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/bases/{id}/dismantle — Dismantle Base Camp PalBox"
        **Description:** Invokes DisposeSelf_ServerInternal on the base camp's PalBox actor, returning the base slot to the guild.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `id` | `string (GUID)` | Base camp GUID |

        #### Request (Send Format)
        ```http
        POST /api/bases/{id}/dismantle HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Base camp dismantled"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Failed to dismantle base camp"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bases/{id}/dismantle \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/bases/{id}/relocate — Relocate Base Camp"
        **Description:** Transports a base camp's center coordinates and PalBox to a new 3D location in the world.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `id` | `string (GUID)` | Base camp GUID |

        #### Request (Send Format)
        ```http
        POST /api/bases/{id}/relocate HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "x": -223929.0,
          "y": 301702.0,
          "z": -1951.0
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Base camp relocated successfully",
          "x": -223929.0,
          "y": 301702.0,
          "z": -1951.0
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Base camp not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bases/{id}/relocate \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"x": -223929.0, "y": 301702.0, "z": -1951.0}'
        ```

    ??? info "GET /api/bases — List All Base Camps"
        **Description:** Returns all base camps across the map with guild ownership, building counts, coordinates, and worker counts.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Request (Send Format)
        ```http
        GET /api/bases HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "bases": [
            {
              "base_camp_id": "CCB5D391-461757F3-A2EBFAA5-48A73861",
              "building_count": 1,
              "guild_id": "2FAF149D-4BAF65D8-12F8CE98-3D0E1283",
              "guild_name": "Smooth",
              "level": 19,
              "worker_count": 5,
              "location": {
                "x": 313.4,
                "y": -217.9,
                "z": -4.3
              },
              "raw_location": {
                "x": -223929.0,
                "y": 301702.0,
                "z": -1951.0
              }
            }
          ],
          "count": 1,
          "success": true
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Unauthorized"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/bases \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/bases/{id}/chests — Inspect Base Camp Storage Chests"
        **Description:** Returns all storage containers inside a base camp, including item IDs, stack counts, and slot indices.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `id` | `string (GUID)` | Base camp GUID |

        #### Request (Send Format)
        ```http
        GET /api/bases/{id}/chests HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "base_id": "CCB5D391-461757F3-A2EBFAA5-48A73861",
          "chests": [
            {
              "container_id": "Cont_1",
              "slots_used": 12,
              "slots_total": 40,
              "items": [
                {
                  "item_id": "Wood",
                  "count": 9999,
                  "slot": 0
                }
              ]
            }
          ],
          "success": true
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Base camp not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/bases/{id}/chests \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/bases/{id}/workers — Inspect Base Camp Worker Pals"
        **Description:** Returns all assigned worker Pals: species, level, HP, sanity, hunger, and status illnesses.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `id` | `string (GUID)` | Base camp GUID |

        #### Request (Send Format)
        ```http
        GET /api/bases/{id}/workers HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "base_id": "CCB5D391-461757F3-A2EBFAA5-48A73861",
          "workers": [
            {
              "character_id": "Anubis",
              "gender": "Male",
              "hp": 3500,
              "hunger": 85.0,
              "level": 50,
              "sanity": 100.0
            }
          ],
          "success": true
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Base camp not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/bases/{id}/workers \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/guilds/set-leader — Transfer Guild Leadership"
        **Description:** Transfers guild master ownership to another guild member. Supports online players and offline save data auto-resolution.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Request (Send Format)
        ```http
        POST /api/guilds/set-leader HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "guild_id": "2FAF149D-4BAF65D8-12F8CE98-3D0E1283",
          "player_id": "155908B1-0000-0000-0000-000000000000"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Guild leader transferred successfully"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Target player is not a member of this guild"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/guilds/set-leader \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"guild_id": "2FAF149D...", "player_id": "155908B1..."}'
        ```

    ??? info "POST /api/guilds/{id}/members/promote — Promote Guild Member"
        **Description:** Promotes a regular guild member to guild admin/officer status.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `id` | `string (GUID)` | Guild GUID |

        #### Request (Send Format)
        ```http
        POST /api/guilds/{id}/members/promote HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player_id": "155908B1-0000-0000-0000-000000000000"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Guild member promoted to admin"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Member is already an admin"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/guilds/{id}/members/promote \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player_id": "..."}'
        ```

    ??? info "POST /api/guilds/{id}/members/demote — Demote Guild Member"
        **Description:** Demotes a guild admin back to regular member rank.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `id` | `string (GUID)` | Guild GUID |

        #### Request (Send Format)
        ```http
        POST /api/guilds/{id}/members/demote HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player_id": "155908B1-0000-0000-0000-000000000000"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Guild member demoted"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Cannot demote guild master"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/guilds/{id}/members/demote \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player_id": "..."}'
        ```

    ??? info "POST /api/guilds/{id}/members/kick — Kick Guild Member"
        **Description:** Removes a player from the guild roster.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `id` | `string (GUID)` | Guild GUID |

        #### Request (Send Format)
        ```http
        POST /api/guilds/{id}/members/kick HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player_id": "155908B1-0000-0000-0000-000000000000"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Player removed from guild"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Player not found in guild"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/guilds/{id}/members/kick \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player_id": "..."}'
        ```

    ??? info "POST /api/guilds/{id}/blacklist — Manage Guild Blacklist"
        **Description:** Adds or removes a player from the guild's recruitment blacklist, preventing them from joining or interacting with guild structures.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `id` | `string (GUID)` | Guild GUID |

        #### Request (Send Format)
        ```http
        POST /api/guilds/{id}/blacklist HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player_id": "155908B1-0000-0000-0000-000000000000",
          "add": true,
          "reason": "Loot theft"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Player added to guild blacklist"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Player is already blacklisted"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/guilds/{id}/blacklist \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player_id": "...", "add": true, "reason": "Loot theft"}'
        ```

    ??? info "GET /api/guilds/{id}/audit — Guild Chest Audit Log"
        **Description:** Retrieves the immutable audit trail of items deposited, withdrawn, or quick-stacked into guild chests with timestamps and player names.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `id` | `string (GUID)` | Guild GUID |

        #### Request (Send Format)
        ```http
        GET /api/guilds/{id}/audit HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "audit": [
            {
              "action": "withdraw",
              "item_id": "AssaultRifle",
              "count": 1,
              "player_name": "Smooth",
              "timestamp": 1726201200
            }
          ],
          "success": true
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Guild not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/guilds/{id}/audit \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/guilds/{id}/destroy — Destroy & Disband Guild"
        **Description:** Permanently deletes a guild, revokes all member memberships, and dismantles its guild base camps.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `id` | `string (GUID)` | Guild GUID |

        #### Request (Send Format)
        ```http
        POST /api/guilds/{id}/destroy HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Guild destroyed and disbanded"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Failed to disband guild"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/guilds/{id}/destroy \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/guilds/{id}/rename — Rename Guild"
        **Description:** Updates the display name of a guild.  
        **Authentication:** `Admin Key (X-API-Key or Bearer)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `id` | `string (GUID)` | Guild GUID |

        #### Request (Send Format)
        ```http
        POST /api/guilds/{id}/rename HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "new_name": "Legends of Palpagos"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Guild renamed successfully",
          "new_name": "Legends of Palpagos"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Invalid guild name"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/guilds/{id}/rename \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"new_name": "Legends of Palpagos"}'
        ```


??? note "🗺️ Spatial Live Map Radar & World Entities (5 endpoints)"

    > Full-map entity query endpoints with dual-coordinate system (world 3D vector + calibrated HUD map grid).

    ??? info "GET /api/map/entities — Query All Map Entities"
        **Description:** Scans and filters all active world actors across all chunks.  
        **Authentication:** `Admin Key`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `type` | `query (string)` | all | loot | deathbags | pals | treasures | chests | supplies | wildbuilds | eggs |
        | `filter` | `query (string)` | Substring search on actor or item name |

        #### Request (Send Format)
        ```http
        GET /api/map/entities HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "count": 142,
          "entities": [
            {
              "id": "Drop_9821",
              "type": "DropItem",
              "name": "PalMetalIngot",
              "count": 50,
              "location": {
                "x": -150230.0,
                "y": 240190.0,
                "z": 4500.0
              },
              "game_coords": {
                "x": 120.4,
                "y": -450.2,
                "z": 45.0
              }
            }
          ],
          "success": true
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Invalid filter parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET "http://127.0.0.1:27020/api/map/entities?type=loot" \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/map/deathbags — Query Player Death Bags"
        **Description:** Returns all dropped death bags containing items, owner UID, and map coordinates.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        GET /api/map/deathbags HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "count": 1,
          "deathbags": [
            {
              "owner_uid": "155908B1-0000-0000-0000-000000000000",
              "owner_name": "Smooth",
              "item_count": 14,
              "age_seconds": 120,
              "location": {
                "x": -197141.0,
                "y": 397609.0,
                "z": 3203.0
              },
              "game_coords": {
                "x": 522.4,
                "y": -159.6,
                "z": 7.0
              }
            }
          ],
          "success": true
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Unauthorized"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/map/deathbags \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/map/recoverbag — Recover Lost Death Bag"
        **Description:** Restores items from a death bag directly into the player's inventory and cleans up the bag actor.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /api/map/recoverbag HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player_id": "155908B1-0000-0000-0000-000000000000"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "recovered_items": 14,
          "message": "Death bag recovered to inventory"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "No death bag found for this player"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/map/recoverbag \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player_id": "..."}'
        ```

    ??? info "POST /api/map/cleardrops — Clear Dropped Ground Loot"
        **Description:** Sweeps dropped items within a radius around coordinates or whole map.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /api/map/cleardrops HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "radius": 5000.0,
          "x": -223929.0,
          "y": 301702.0,
          "z": -1951.0
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "cleared_count": 42
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Invalid coordinates"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/map/cleardrops \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"radius": 5000.0, "x": 0, "y": 0, "z": 0}'
        ```

    ??? info "POST /api/map/clearwildbuilds — Demolish Wild Structures"
        **Description:** Demolishes player structures built outside designated base camp boundaries.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /api/map/clearwildbuilds HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "radius": 10000.0,
          "unowned_only": false
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "cleared_count": 18
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Cleanup failed"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/map/clearwildbuilds \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"radius": 10000.0, "unowned_only": false}'
        ```


??? note "🧹 Autonomous Janitor Automation (3 endpoints)"

    > Background automated cleaner for orphaned structures, ground clutter, and abandoned corpses.

    ??? info "GET /api/janitor/status — Get Janitor Status"
        **Description:** Returns Janitor cycle status, total sweeps, items cleaned, and timestamp of next scheduled run.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        GET /api/janitor/status HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "active": true,
          "total_sweeps": 142,
          "items_cleaned": 5890,
          "last_run_timestamp": 1726204800,
          "next_run_timestamp": 1726208400
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Unauthorized"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/janitor/status \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/janitor/run — Trigger Immediate Sweep"
        **Description:** Forces an on-demand sweep cycle with optional override flags.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /api/janitor/run HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "clean_drops": true,
          "clean_wild_builds": true,
          "clean_deathbags": false
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "swept_records": 65,
          "message": "Janitor sweep completed"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Sweep failed"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/janitor/run \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"clean_drops": true, "clean_wild_builds": true}'
        ```

    ??? info "GET /api/janitor/swept — Query Janitor Audit Trail"
        **Description:** Returns chronological audit log of the last 500 swept structures, loot, and death bags.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        GET /api/janitor/swept HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "total": 1,
          "records": [
            {
              "category": "wildbuild",
              "name": "BuildObject_WoodenWall",
              "owner_name": "Cheater",
              "timestamp": 1726204800,
              "x": -220000.0,
              "y": 300000.0,
              "z": -1500.0
            }
          ]
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Unauthorized"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/janitor/swept \
          -H "X-API-Key: changeme-admin-key"
        ```


??? note "🛡️ Player Moderation & Access Control (5 endpoints)"

    > Real-time player kicks, permanent hardware/UID bans, chat mutes, freeze toggles, and violation evidence records.

    ??? info "GET /players — List Online Connected Players"
        **Description:** Returns all connected players with coordinates, Steam ID, PlayerUID, ping, and guild name.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        GET /players HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "players": [
            {
              "name": "Smooth",
              "uid": "155908B1-0000-0000-0000-000000000000",
              "steam_id": "76561198000000000",
              "ping_ms": 12,
              "level": 59,
              "guild_name": "Smooth",
              "location": {
                "x": 313.4,
                "y": -217.9,
                "z": -4.3
              }
            }
          ],
          "total": 1
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Unauthorized"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/players \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/kick — Kick Player"
        **Description:** Disconnects a player from the server with an optional reason banner.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/kick HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "Smooth",
          "reason": "Server maintenance"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Player kicked"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Player not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/kick \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player": "Smooth", "reason": "Server maintenance"}'
        ```

    ??? info "POST /admin/ban — Ban Player"
        **Description:** Permanently bans a player UID and IP address.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/ban HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "76561198000000000",
          "reason": "Exploiting"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Player banned"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Invalid player"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/ban \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player": "...", "reason": "Exploiting"}'
        ```

    ??? info "POST /admin/mute — Mute Player Chat"
        **Description:** Silences a player's in-game chat messages for a specified duration in seconds.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/mute HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "Smooth",
          "duration": 300
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Player muted for 300s"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Player not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/mute \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player": "Smooth", "duration": 300}'
        ```

    ??? info "POST /admin/freeze — Freeze Player"
        **Description:** Locks a player in place, disabling movement and jumping.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/freeze HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "Smooth",
          "duration": 60
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Player frozen for 60s"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Player not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/freeze \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player": "Smooth", "duration": 60}'
        ```


??? note "⚡ Player Cheats, Stats & Progression (7 endpoints)"

    > Inventory item delivery, stat adjustments, instant healing, godmode, tech unlocks, and fast travel eagle statue controls.

    ??? info "POST /admin/give/item — Give Items to Player"
        **Description:** Spawns items directly into a player's inventory slots.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/give/item HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "Smooth",
          "item_id": "AssaultRifle_Default4",
          "count": 1
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Given 1x AssaultRifle_Default4 to Smooth"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Invalid item ID or player not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/give/item \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player": "Smooth", "item_id": "AssaultRifle_Default4", "count": 1}'
        ```

    ??? info "POST /admin/give/exp — Grant Experience Points"
        **Description:** Adds experience points directly to player character.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/give/exp HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "Smooth",
          "exp": 100000
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Granted 100000 EXP"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Player not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/give/exp \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player": "Smooth", "exp": 100000}'
        ```

    ??? info "POST /admin/give/techpoints — Grant Technology Points"
        **Description:** Adds standard or boss technology points.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/give/techpoints HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "Smooth",
          "amount": 10,
          "type": "boss"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Points given"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Failed to give tech points"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/give/techpoints \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player": "Smooth", "amount": 10, "type": "boss"}'
        ```

    ??? info "POST /admin/heal — Heal Player"
        **Description:** Restores full HP, hunger, and sanity.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/heal HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "Smooth"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Player healed to full"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Player not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/heal \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player": "Smooth"}'
        ```

    ??? info "POST /admin/godmode — Toggle Godmode"
        **Description:** Enables or disables invincible godmode for a player.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/godmode HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "Smooth",
          "enabled": true
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Godmode enabled for Smooth"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Player not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/godmode \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player": "Smooth", "enabled": true}'
        ```

    ??? info "POST /admin/player/unlockfasttravel — Unlock All Fast Travel Waypoints"
        **Description:** Unlocks all Great Eagle fast travel statues across the island for the player.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/player/unlockfasttravel HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "Smooth"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "unlocked_count": 62,
          "message": "All fast travel statues unlocked"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Player not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/unlockfasttravel \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player": "Smooth"}'
        ```

    ??? info "POST /admin/player/respec — Respec Stat Points"
        **Description:** Refunds all allocated stat points (Health, Stamina, Attack, Work Speed, Weight) back into unallocated status points.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/player/respec HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "Smooth"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Stat points refunded successfully"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Player not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/respec \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"player": "Smooth"}'
        ```


??? note "✨ Unified Buffs & Visual Auras (5 endpoints)"

    > Preset multiplier buffs, server-wide world buffs, and 19 pure cosmetic visual particle auras with zero gameplay damage ticks.

    ??? info "GET /api/buffs — List Available Buffs & Visual Effects"
        **Description:** Returns the active world buff state, permanent assignments, all configured buff presets with their stat multipliers, and all 19 available cosmetic visual particle auras.  
        **Authentication:** `None (Public / Dashboard)`  
        #### Request (Send Format)
        ```http
        GET /api/buffs HTTP/1.1
        Host: 127.0.0.1:27020
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "buff_definitions": [
            {
              "id": "warrior_fury",
              "display_name": "Warrior's Fury",
              "description": "Unleashes fierce inner power, greatly boosting physical attacks.",
              "aura": "attack_up",
              "default_duration": 300,
              "stats": {
                "attack_multiplier": 1.5,
                "defense_multiplier": 1.0,
                "speed_multiplier": 1.1,
                "infinite_stamina": false,
                "godmode": false
              }
            }
          ],
          "auras": [
            { "id": "lucky", "name": "Lucky / Sparkles (Rare Pal)", "effect_id": 27 },
            { "id": "awakening", "name": "Awakening (Golden Holy Flame)", "effect_id": 48 },
            { "id": "burn", "name": "Fire Flames (Cosmetic, 0 Dmg)", "effect_id": 15 }
          ],
          "world_buff": { "enabled": false, "active_buff_id": "lucky_hunter", "expires_at": 0 }
        }
        ```

    ??? info "POST /api/buffs/save — Save Buff Configuration"
        **Description:** Persists updated buff presets, multipliers, and permanent assignments into `PalSupervisor/config/buffs.json`.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /api/buffs/save HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "buff_definitions": [...],
          "permanent": { "admin_permanent": true, "admin_buff_id": "awakened_god" }
        }
        ```

    ??? info "POST /api/buffs/world — Activate Server-Wide World Buff"
        **Description:** Activates or disables a global buff applied to all currently connected players and new logins.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /api/buffs/world HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "enabled": true,
          "buff_id": "lucky_hunter",
          "duration": 1800
        }
        ```

    ??? info "POST /api/player/buff — Apply Buff to Player"
        **Description:** Applies a specific buff preset to an individual player.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /api/player/buff HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "Smooth",
          "buff_id": "awakened_god",
          "duration": 600
        }
        ```

    ??? info "POST /api/player/aura — Apply Cosmetic Visual Particle Aura"
        **Description:** Spawns a purely cosmetic visual particle aura on the player and their active summoned Pal with ZERO gameplay damage ticks.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /api/player/aura HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "player": "Smooth",
          "aura": "lucky"
        }
        ```


??? note "👑 Boss Encounters, Raids & In-Game Broadcasts (4 endpoints)"

    > Multi-phase boss summoning, enemy invasion triggering, full-screen notifications, and command dispatch.

    ??? info "POST /api/bosses/spawn — Spawn Custom Boss Encounter"
        **Description:** Spawns a multi-phase boss encounter from a JSON template near player or coordinates.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /api/bosses/spawn HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "template": "FrostallionNoct_Mythic",
          "player": "Smooth"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "encounter_id": "Enc_401",
          "message": "Boss encounter started"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Template not found"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bosses/spawn \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"template": "FrostallionNoct_Mythic", "player": "Smooth"}'
        ```

    ??? info "POST /api/raids/trigger — Force Base Raid Invasion"
        **Description:** Forces an immediate enemy invasion raid marching towards the target base camp.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /api/raids/trigger HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "base_id": "CCB5D391-461757F3-A2EBFAA5-48A73861"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Raid invasion triggered"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Base camp not found or raid cooldown active"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/raids/trigger \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"base_id": "..."}'
        ```

    ??? info "POST /admin/broadcast — Broadcast Server Banner"
        **Description:** Sends a scrolling top notification banner to all connected players.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/broadcast HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "message": "Server restarting in 10 minutes for update!"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "message": "Broadcast sent"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Message cannot be empty"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/broadcast \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"message": "Server restarting in 10 minutes!"}'
        ```

    ??? info "POST /admin/command — Dispatch In-Game Command Remotely"
        **Description:** Executes any PalSupervisor in-game command string via HTTP.  
        **Authentication:** `Admin Key`  
        #### Request (Send Format)
        ```http
        POST /admin/command HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {
          "command": "/basewipe CCB5D391-461757F3-A2EBFAA5-48A73861"
        }
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "output": "Base camp CCB5D391... cleanly wiped"
        }
        ```
        **Error Response (`400`/`404`/`500`):**
        ```json
        {
          "error": "Unknown command"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/command \
          -H "X-API-Key: changeme-admin-key" \
          -H "Content-Type: application/json" \
          -d '{"command": "/help"}'
        ```


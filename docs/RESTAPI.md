# Embedded REST API Reference 🌐

> **PalSupervisor embeds a native high-performance, non-blocking HTTP server listening on port `27020`** (customizable in `config.json`). The API allows server management dashboards, Discord bots, and remote administrative tools to monitor and control PalServer with zero tick degradation.

**Total Available Endpoints: 218**

Each category below can be **expanded or minimized**. Click any category to reveal its endpoints, and click any endpoint to inspect its URL parameters, Send Format (Request headers & payload), and Receive Format (Success 200 OK & error codes).

!!! note "Authentication & Headers"
    Administrative endpoints require authentication via one of the following methods:
    
    * **Header `X-API-Key`**: Matches the `api.api_key` in `config.json` (Default: `changeme-admin-key`).
    * **Header `Authorization: Bearer <token>`**: JWT session token obtained from `POST /auth/login`.
    * **Content-Type**: Must be `application/json` for POST requests with a body.

---

??? note "🔐 Authentication & System Health (16 endpoints)"

    > JWT token authentication, server health telemetry, version metadata, license entitlements, and live performance metrics.

    ??? info "GET /api/janitor/config — Api Janitor Config"
        **Description:** Endpoint `GET /api/janitor/config` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/janitor/config HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/janitor/config \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/janitor/config — Api Janitor Config"
        **Description:** Endpoint `POST /api/janitor/config` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/janitor/config HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/janitor/config \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/license — Api License"
        **Description:** Endpoint `GET /api/license` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/license HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/license \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/version — Api Version"
        **Description:** Endpoint `GET /api/version` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/version HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/version \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /auth/login — Auth Login"
        **Description:** Endpoint `POST /auth/login` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /auth/login HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/auth/login \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /config — Config"
        **Description:** Endpoint `GET /config` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /config HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/config \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /config/reload — Config Reload"
        **Description:** Endpoint `POST /config/reload` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /config/reload HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/config/reload \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /health — Health"
        **Description:** Endpoint `GET /health` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /health HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/health \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /janitor/config — Janitor Config"
        **Description:** Endpoint `GET /janitor/config` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /janitor/config HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/janitor/config \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /janitor/config — Janitor Config"
        **Description:** Endpoint `POST /janitor/config` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /janitor/config HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/janitor/config \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /metrics — Metrics"
        **Description:** Endpoint `GET /metrics` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /metrics HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/metrics \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /server/license — Server License"
        **Description:** Endpoint `GET /server/license` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /server/license HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/server/license \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /server/stats — Server Stats"
        **Description:** Endpoint `GET /server/stats` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /server/stats HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/server/stats \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /v1/api/info — V1 Api Info"
        **Description:** Endpoint `GET /v1/api/info` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /v1/api/info HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/v1/api/info \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /v1/api/metrics — V1 Api Metrics"
        **Description:** Endpoint `GET /v1/api/metrics` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /v1/api/metrics HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/v1/api/metrics \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /version — Version"
        **Description:** Endpoint `GET /version` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /version HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/version \
          -H "X-API-Key: changeme-admin-key"
        ```

??? note "👥 Player Moderation & Management (55 endpoints)"

    > Comprehensive player administration, live player lists, kicking, banning, muting, freezing, godmode, teleportation, alerts, and violation evidence logs.

    ??? info "GET / — Root Status"
        **Description:** Endpoint `GET /` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET / HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/ \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/alert — Admin Alert"
        **Description:** Endpoint `POST /admin/alert` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/alert HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/alert \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/alertall — Admin Alertall"
        **Description:** Endpoint `POST /admin/alertall` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/alertall HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/alertall \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/ban — Admin Ban"
        **Description:** Endpoint `POST /admin/ban` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/ban HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/ban \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/broadcast — Admin Broadcast"
        **Description:** Endpoint `POST /admin/broadcast` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/broadcast HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/broadcast \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/endspectate — Admin Endspectate"
        **Description:** Endpoint `POST /admin/endspectate` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/endspectate HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/endspectate \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/freeze — Admin Freeze"
        **Description:** Endpoint `POST /admin/freeze` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/freeze HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/freeze \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/godmode — Admin Godmode"
        **Description:** Endpoint `POST /admin/godmode` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/godmode HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/godmode \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/heal — Admin Heal"
        **Description:** Endpoint `POST /admin/heal` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/heal HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/heal \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/kick — Admin Kick"
        **Description:** Endpoint `POST /admin/kick` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/kick HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/kick \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/kill — Admin Kill"
        **Description:** Endpoint `POST /admin/kill` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/kill HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/kill \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/message — Admin Message"
        **Description:** Endpoint `POST /admin/message` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/message HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/message \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/mute — Admin Mute"
        **Description:** Endpoint `POST /admin/mute` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/mute HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/mute \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/clearwanted — Admin Player Clearwanted"
        **Description:** Endpoint `POST /admin/player/clearwanted` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/clearwanted HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/clearwanted \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/freeze — Admin Player Freeze"
        **Description:** Endpoint `POST /admin/player/freeze` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/freeze HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/freeze \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/godmode — Admin Player Godmode"
        **Description:** Endpoint `POST /admin/player/godmode` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/godmode HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/godmode \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/heal — Admin Player Heal"
        **Description:** Endpoint `POST /admin/player/heal` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/heal HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/heal \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /admin/player/inspect — Admin Player Inspect"
        **Description:** Endpoint `GET /admin/player/inspect` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /admin/player/inspect HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/admin/player/inspect \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/inspect — Admin Player Inspect"
        **Description:** Endpoint `POST /admin/player/inspect` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/inspect HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/inspect \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/kill — Admin Player Kill"
        **Description:** Endpoint `POST /admin/player/kill` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/kill HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/kill \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/lockfasttravel — Admin Player Lockfasttravel"
        **Description:** Endpoint `POST /admin/player/lockfasttravel` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/lockfasttravel HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/lockfasttravel \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/mute — Admin Player Mute"
        **Description:** Endpoint `POST /admin/player/mute` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/mute HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/mute \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/rename — Admin Player Rename"
        **Description:** Endpoint `POST /admin/player/rename` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/rename HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/rename \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/triggerwanted — Admin Player Triggerwanted"
        **Description:** Endpoint `POST /admin/player/triggerwanted` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/triggerwanted HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/triggerwanted \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/unfreeze — Admin Player Unfreeze"
        **Description:** Endpoint `POST /admin/player/unfreeze` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/unfreeze HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/unfreeze \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/unlockfasttravel — Admin Player Unlockfasttravel"
        **Description:** Endpoint `POST /admin/player/unlockfasttravel` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/unlockfasttravel HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/unlockfasttravel \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/unmute — Admin Player Unmute"
        **Description:** Endpoint `POST /admin/player/unmute` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/unmute HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/unmute \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/respawn — Admin Respawn"
        **Description:** Endpoint `POST /admin/respawn` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/respawn HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/respawn \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/setadmin — Admin Setadmin"
        **Description:** Endpoint `POST /admin/setadmin` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/setadmin HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/setadmin \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/sethp — Admin Sethp"
        **Description:** Endpoint `POST /admin/sethp` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/sethp HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/sethp \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/setsp — Admin Setsp"
        **Description:** Endpoint `POST /admin/setsp` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/setsp HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/setsp \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/spectate — Admin Spectate"
        **Description:** Endpoint `POST /admin/spectate` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/spectate HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/spectate \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/teleport — Admin Teleport"
        **Description:** Endpoint `POST /admin/teleport` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/teleport HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/teleport \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/unban — Admin Unban"
        **Description:** Endpoint `POST /admin/unban` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/unban HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/unban \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/unfreeze — Admin Unfreeze"
        **Description:** Endpoint `POST /admin/unfreeze` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/unfreeze HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/unfreeze \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/unmute — Admin Unmute"
        **Description:** Endpoint `POST /admin/unmute` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/unmute HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/unmute \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/vilog — Admin Vilog"
        **Description:** Endpoint `POST /admin/vilog` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/vilog HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/vilog \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/events/stream — Api Events Stream"
        **Description:** Endpoint `GET /api/events/stream` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/events/stream HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/events/stream \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/players/all — Api Players All"
        **Description:** Endpoint `GET /api/players/all` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/players/all HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/players/all \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/popup — Api Popup"
        **Description:** Endpoint `POST /api/popup` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/popup HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/popup \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/reward/item — Api Reward Item"
        **Description:** Endpoint `POST /api/reward/item` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/reward/item HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/reward/item \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /bans — Bans"
        **Description:** Endpoint `GET /bans` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /bans HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/bans \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /events/stream — Events Stream"
        **Description:** Endpoint `GET /events/stream` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /events/stream HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/events/stream \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /players — Players"
        **Description:** Endpoint `GET /players` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
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
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/players \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /players/all — Players All"
        **Description:** Endpoint `GET /players/all` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /players/all HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/players/all \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /v1/api/announce — V1 Api Announce"
        **Description:** Endpoint `POST /v1/api/announce` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /v1/api/announce HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/v1/api/announce \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /v1/api/ban — V1 Api Ban"
        **Description:** Endpoint `POST /v1/api/ban` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /v1/api/ban HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/v1/api/ban \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /v1/api/kick — V1 Api Kick"
        **Description:** Endpoint `POST /v1/api/kick` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /v1/api/kick HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/v1/api/kick \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /v1/api/players — V1 Api Players"
        **Description:** Endpoint `GET /v1/api/players` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /v1/api/players HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/v1/api/players \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /v1/api/popup — V1 Api Popup"
        **Description:** Endpoint `POST /v1/api/popup` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /v1/api/popup HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/v1/api/popup \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /v1/api/reward/item — V1 Api Reward Item"
        **Description:** Endpoint `POST /v1/api/reward/item` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /v1/api/reward/item HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/v1/api/reward/item \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /v1/api/save — V1 Api Save"
        **Description:** Endpoint `POST /v1/api/save` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /v1/api/save HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/v1/api/save \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /v1/api/shutdown — V1 Api Shutdown"
        **Description:** Endpoint `POST /v1/api/shutdown` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /v1/api/shutdown HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/v1/api/shutdown \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /v1/api/unban — V1 Api Unban"
        **Description:** Endpoint `POST /v1/api/unban` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /v1/api/unban HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/v1/api/unban \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /violations — Violations"
        **Description:** Endpoint `GET /violations` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /violations HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/violations \
          -H "X-API-Key: changeme-admin-key"
        ```

??? note "🎒 Inventory, Level & Tech Tree Controls (20 endpoints)"

    > Direct inventory manipulation, item grants, item removals, experience adjustments, skill/tech tree unlocking, PalDex management, and stat resets.

    ??? info "POST /admin/give/exp — Admin Give Exp"
        **Description:** Endpoint `POST /admin/give/exp` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/give/exp HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/give/exp \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/give/item — Admin Give Item"
        **Description:** Endpoint `POST /admin/give/item` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/give/item HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/give/item \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/give/techpoints — Admin Give Techpoints"
        **Description:** Endpoint `POST /admin/give/techpoints` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/give/techpoints HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/give/techpoints \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/inventory/clear — Admin Inventory Clear"
        **Description:** Endpoint `POST /admin/inventory/clear` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/inventory/clear HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/inventory/clear \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/inventory/inspect — Admin Inventory Inspect"
        **Description:** Endpoint `POST /admin/inventory/inspect` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/inventory/inspect HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/inventory/inspect \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/inventory/remove — Admin Inventory Remove"
        **Description:** Endpoint `POST /admin/inventory/remove` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/inventory/remove HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/inventory/remove \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/inventory/repair — Admin Inventory Repair"
        **Description:** Endpoint `POST /admin/inventory/repair` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/inventory/repair HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/inventory/repair \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/inventory/take — Admin Inventory Take"
        **Description:** Endpoint `POST /admin/inventory/take` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/inventory/take HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/inventory/take \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/clearstats — Admin Player Clearstats"
        **Description:** Endpoint `POST /admin/player/clearstats` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/clearstats HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/clearstats \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/giveexp — Admin Player Giveexp"
        **Description:** Endpoint `POST /admin/player/giveexp` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/giveexp HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/giveexp \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/resetalltech — Admin Player Resetalltech"
        **Description:** Endpoint `POST /admin/player/resetalltech` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/resetalltech HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/resetalltech \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/resetlevel — Admin Player Resetlevel"
        **Description:** Endpoint `POST /admin/player/resetlevel` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/resetlevel HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/resetlevel \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/respec — Admin Player Respec"
        **Description:** Endpoint `POST /admin/player/respec` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/respec HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/respec \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/setlevel — Admin Player Setlevel"
        **Description:** Endpoint `POST /admin/player/setlevel` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/setlevel HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/setlevel \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/setmaxweight — Admin Player Setmaxweight"
        **Description:** Endpoint `POST /admin/player/setmaxweight` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/setmaxweight HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/setmaxweight \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/setrelics — Admin Player Setrelics"
        **Description:** Endpoint `POST /admin/player/setrelics` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/setrelics HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/setrelics \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/unlockalltech — Admin Player Unlockalltech"
        **Description:** Endpoint `POST /admin/player/unlockalltech` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/unlockalltech HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/unlockalltech \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/players/resetalltech — Admin Players Resetalltech"
        **Description:** Endpoint `POST /admin/players/resetalltech` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/players/resetalltech HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/players/resetalltech \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/players/unlearntech — Admin Players Unlearntech"
        **Description:** Endpoint `POST /admin/players/unlearntech` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/players/unlearntech HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/players/unlearntech \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/players/unlockalltech — Admin Players Unlockalltech"
        **Description:** Endpoint `POST /admin/players/unlockalltech` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/players/unlockalltech HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/players/unlockalltech \
          -H "X-API-Key: changeme-admin-key"
        ```

??? note "🐾 Pal Spawning & Monster Management (23 endpoints)"

    > Palbox inspection, custom Pal injection with souls/IVs/passives, wild Pal spawning, NPC vendor spawning, and Pal revival.

    ??? info "POST /admin/custom/spawn — Admin Custom Spawn"
        **Description:** Endpoint `POST /admin/custom/spawn` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/custom/spawn HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/custom/spawn \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/custom/spawnp — Admin Custom Spawnp"
        **Description:** Endpoint `POST /admin/custom/spawnp` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/custom/spawnp HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/custom/spawnp \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/custom/spawnw — Admin Custom Spawnw"
        **Description:** Endpoint `POST /admin/custom/spawnw` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/custom/spawnw HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/custom/spawnw \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/pals/give — Admin Pals Give"
        **Description:** Endpoint `POST /admin/pals/give` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/pals/give HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/pals/give \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/pals/givecustom — Admin Pals Givecustom"
        **Description:** Endpoint `POST /admin/pals/givecustom` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/pals/givecustom HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/pals/givecustom \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/pals/givenpc — Admin Pals Givenpc"
        **Description:** Endpoint `POST /admin/pals/givenpc` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/pals/givenpc HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/pals/givenpc \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/pals/inspect — Admin Pals Inspect"
        **Description:** Endpoint `POST /admin/pals/inspect` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/pals/inspect HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/pals/inspect \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/pals/remove — Admin Pals Remove"
        **Description:** Endpoint `POST /admin/pals/remove` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/pals/remove HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/pals/remove \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/pals/revive — Admin Pals Revive"
        **Description:** Endpoint `POST /admin/pals/revive` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/pals/revive HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/pals/revive \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/pals/spawnnpcp — Admin Pals Spawnnpcp"
        **Description:** Endpoint `POST /admin/pals/spawnnpcp` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/pals/spawnnpcp HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/pals/spawnnpcp \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/pals/spawnnpcw — Admin Pals Spawnnpcw"
        **Description:** Endpoint `POST /admin/pals/spawnnpcw` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/pals/spawnnpcw HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/pals/spawnnpcw \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/pals/spawnp — Admin Pals Spawnp"
        **Description:** Endpoint `POST /admin/pals/spawnp` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/pals/spawnp HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/pals/spawnp \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/pals/spawnw — Admin Pals Spawnw"
        **Description:** Endpoint `POST /admin/pals/spawnw` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/pals/spawnw HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/pals/spawnw \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/pals/take — Admin Pals Take"
        **Description:** Endpoint `POST /admin/pals/take` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/pals/take HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/pals/take \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/pals/wipe — Admin Pals Wipe"
        **Description:** Endpoint `POST /admin/pals/wipe` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/pals/wipe HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/pals/wipe \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/completepaldex — Admin Player Completepaldex"
        **Description:** Endpoint `POST /admin/player/completepaldex` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/completepaldex HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/completepaldex \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/player/resetpaldex — Admin Player Resetpaldex"
        **Description:** Endpoint `POST /admin/player/resetpaldex` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/player/resetpaldex HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/player/resetpaldex \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/custom/spawn — Api Custom Spawn"
        **Description:** Endpoint `POST /api/custom/spawn` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/custom/spawn HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/custom/spawn \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/custom/spawnw — Api Custom Spawnw"
        **Description:** Endpoint `POST /api/custom/spawnw` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/custom/spawnw HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/custom/spawnw \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/reward/pal — Api Reward Pal"
        **Description:** Endpoint `POST /api/reward/pal` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/reward/pal HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/reward/pal \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /custom/spawn — Custom Spawn"
        **Description:** Endpoint `POST /custom/spawn` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /custom/spawn HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/custom/spawn \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /custom/spawnw — Custom Spawnw"
        **Description:** Endpoint `POST /custom/spawnw` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /custom/spawnw HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/custom/spawnw \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /v1/api/reward/pal — V1 Api Reward Pal"
        **Description:** Endpoint `POST /v1/api/reward/pal` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /v1/api/reward/pal HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/v1/api/reward/pal \
          -H "X-API-Key: changeme-admin-key"
        ```

??? note "👑 World Bosses & Raid Battles (20 endpoints)"

    > Boss battle management, manual raid triggering, boss coordinate spawning, instant kill, and raid cancellation.

    ??? info "POST /admin/boss/kill — Admin Boss Kill"
        **Description:** Endpoint `POST /admin/boss/kill` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/boss/kill HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/boss/kill \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/boss/spawn — Admin Boss Spawn"
        **Description:** Endpoint `POST /admin/boss/spawn` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/boss/spawn HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/boss/spawn \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/boss/spawnp — Admin Boss Spawnp"
        **Description:** Endpoint `POST /admin/boss/spawnp` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/boss/spawnp HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/boss/spawnp \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/boss/spawnw — Admin Boss Spawnw"
        **Description:** Endpoint `POST /admin/boss/spawnw` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/boss/spawnw HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/boss/spawnw \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/bosses — Api Bosses"
        **Description:** Endpoint `GET /api/bosses` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/bosses HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/bosses \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/bosses/kill — Api Bosses Kill"
        **Description:** Endpoint `POST /api/bosses/kill` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/bosses/kill HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bosses/kill \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/bosses/respawn — Api Bosses Respawn"
        **Description:** Endpoint `POST /api/bosses/respawn` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/bosses/respawn HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bosses/respawn \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/bosses/spawn — Api Bosses Spawn"
        **Description:** Endpoint `POST /api/bosses/spawn` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/bosses/spawn HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bosses/spawn \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/bosses/spawnw — Api Bosses Spawnw"
        **Description:** Endpoint `POST /api/bosses/spawnw` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/bosses/spawnw HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bosses/spawnw \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/raids — Api Raids"
        **Description:** Endpoint `GET /api/raids` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/raids HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/raids \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/raids/cancel — Api Raids Cancel"
        **Description:** Endpoint `POST /api/raids/cancel` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/raids/cancel HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/raids/cancel \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/raids/trigger — Api Raids Trigger"
        **Description:** Endpoint `POST /api/raids/trigger` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/raids/trigger HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/raids/trigger \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /bosses — Bosses"
        **Description:** Endpoint `GET /bosses` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /bosses HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/bosses \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /bosses/kill — Bosses Kill"
        **Description:** Endpoint `POST /bosses/kill` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /bosses/kill HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/bosses/kill \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /bosses/respawn — Bosses Respawn"
        **Description:** Endpoint `POST /bosses/respawn` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /bosses/respawn HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/bosses/respawn \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /bosses/spawn — Bosses Spawn"
        **Description:** Endpoint `POST /bosses/spawn` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /bosses/spawn HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/bosses/spawn \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /bosses/spawnw — Bosses Spawnw"
        **Description:** Endpoint `POST /bosses/spawnw` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /bosses/spawnw HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/bosses/spawnw \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /raids — Raids"
        **Description:** Endpoint `GET /raids` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /raids HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/raids \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /raids/cancel — Raids Cancel"
        **Description:** Endpoint `POST /raids/cancel` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /raids/cancel HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/raids/cancel \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /raids/trigger — Raids Trigger"
        **Description:** Endpoint `POST /raids/trigger` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /raids/trigger HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/raids/trigger \
          -H "X-API-Key: changeme-admin-key"
        ```

??? note "🤖 AI Player Companions (Bots) (7 endpoints)"

    > AI companion player bot spawning, behavioral command orders (follow, guard, attack), preset templates, and bot roster lifecycle.

    ??? info "GET /api/bots — Api Bots"
        **Description:** Endpoint `GET /api/bots` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/bots HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/bots \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/bots/dismiss — Api Bots Dismiss"
        **Description:** Endpoint `POST /api/bots/dismiss` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/bots/dismiss HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bots/dismiss \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/bots/order — Api Bots Order"
        **Description:** Endpoint `POST /api/bots/order` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/bots/order HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bots/order \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/bots/reload — Api Bots Reload"
        **Description:** Endpoint `POST /api/bots/reload` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/bots/reload HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bots/reload \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/bots/spawn — Api Bots Spawn"
        **Description:** Endpoint `POST /api/bots/spawn` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/bots/spawn HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bots/spawn \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/bots/templates/delete — Api Bots Templates Delete"
        **Description:** Endpoint `POST /api/bots/templates/delete` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/bots/templates/delete HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bots/templates/delete \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/bots/templates/save — Api Bots Templates Save"
        **Description:** Endpoint `POST /api/bots/templates/save` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/bots/templates/save HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/bots/templates/save \
          -H "X-API-Key: changeme-admin-key"
        ```

??? note "🏰 Guilds & Base Camp Administration (12 endpoints)"

    > Guild roster inspection, member promotion/demotion, guild leader transfer, base camp clean zero-spill wipes, and PalBox dismantling.

    ??? info "GET /api/bases — Api Bases"
        **Description:** Endpoint `GET /api/bases` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
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
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/bases \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/guilds — Api Guilds"
        **Description:** Endpoint `GET /api/guilds` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/guilds HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/guilds \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/guilds/cleanup — Api Guilds Cleanup"
        **Description:** Endpoint `POST /api/guilds/cleanup` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/guilds/cleanup HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/guilds/cleanup \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/guilds/members/demote — Api Guilds Members Demote"
        **Description:** Endpoint `POST /api/guilds/members/demote` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/guilds/members/demote HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/guilds/members/demote \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/guilds/members/promote — Api Guilds Members Promote"
        **Description:** Endpoint `POST /api/guilds/members/promote` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/guilds/members/promote HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/guilds/members/promote \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/guilds/set-leader — Api Guilds Set-Leader"
        **Description:** Endpoint `POST /api/guilds/set-leader` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/guilds/set-leader HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/guilds/set-leader \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /bases — Bases"
        **Description:** Endpoint `GET /bases` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /bases HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/bases \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /guilds — Guilds"
        **Description:** Endpoint `GET /guilds` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /guilds HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/guilds \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /guilds/cleanup — Guilds Cleanup"
        **Description:** Endpoint `POST /guilds/cleanup` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /guilds/cleanup HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/guilds/cleanup \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /guilds/members/demote — Guilds Members Demote"
        **Description:** Endpoint `POST /guilds/members/demote` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /guilds/members/demote HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/guilds/members/demote \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /guilds/members/promote — Guilds Members Promote"
        **Description:** Endpoint `POST /guilds/members/promote` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /guilds/members/promote HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/guilds/members/promote \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /guilds/set-leader — Guilds Set-Leader"
        **Description:** Endpoint `POST /guilds/set-leader` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /guilds/set-leader HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/guilds/set-leader \
          -H "X-API-Key: changeme-admin-key"
        ```

??? note "🗺️ World Entities, Loot & Map Spawns (36 endpoints)"

    > Live radar queries for chests, deathbags, ground drops, eggs, supply crates, wild player structures, and world time control.

    ??? info "POST /admin/time — Admin Time"
        **Description:** Endpoint `POST /admin/time` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/time HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/time \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/deathbags/clear — Api Deathbags Clear"
        **Description:** Endpoint `POST /api/deathbags/clear` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/deathbags/clear HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/deathbags/clear \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/map/chests — Api Map Chests"
        **Description:** Endpoint `GET /api/map/chests` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/map/chests HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/map/chests \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/map/cleardeathbags — Api Map Cleardeathbags"
        **Description:** Endpoint `POST /api/map/cleardeathbags` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/map/cleardeathbags HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/map/cleardeathbags \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/map/cleardrops — Api Map Cleardrops"
        **Description:** Endpoint `POST /api/map/cleardrops` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/map/cleardrops HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/map/cleardrops \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/map/clearwildbuilds — Api Map Clearwildbuilds"
        **Description:** Endpoint `POST /api/map/clearwildbuilds` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/map/clearwildbuilds HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/map/clearwildbuilds \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/map/deathbags — Api Map Deathbags"
        **Description:** Endpoint `GET /api/map/deathbags` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
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
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/map/deathbags \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/map/droppedpals — Api Map Droppedpals"
        **Description:** Endpoint `GET /api/map/droppedpals` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/map/droppedpals HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/map/droppedpals \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/map/drops — Api Map Drops"
        **Description:** Endpoint `GET /api/map/drops` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/map/drops HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/map/drops \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/map/eggs — Api Map Eggs"
        **Description:** Endpoint `GET /api/map/eggs` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/map/eggs HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/map/eggs \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/map/entities — Api Map Entities"
        **Description:** Endpoint `GET /api/map/entities` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
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
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/map/entities \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/map/loot — Api Map Loot"
        **Description:** Endpoint `GET /api/map/loot` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/map/loot HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/map/loot \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/map/pals — Api Map Pals"
        **Description:** Endpoint `GET /api/map/pals` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/map/pals HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/map/pals \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/map/recoverbag — Api Map Recoverbag"
        **Description:** Endpoint `POST /api/map/recoverbag` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/map/recoverbag HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/map/recoverbag \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/map/supplies — Api Map Supplies"
        **Description:** Endpoint `GET /api/map/supplies` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/map/supplies HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/map/supplies \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/map/treasures — Api Map Treasures"
        **Description:** Endpoint `GET /api/map/treasures` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/map/treasures HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/map/treasures \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/map/triggersupply — Api Map Triggersupply"
        **Description:** Endpoint `POST /api/map/triggersupply` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/map/triggersupply HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/map/triggersupply \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/map/wildbuilds — Api Map Wildbuilds"
        **Description:** Endpoint `GET /api/map/wildbuilds` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/map/wildbuilds HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/map/wildbuilds \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/world/time — Api World Time"
        **Description:** Endpoint `POST /api/world/time` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/world/time HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/world/time \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /map/chests — Map Chests"
        **Description:** Endpoint `GET /map/chests` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /map/chests HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/map/chests \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /map/cleardeathbags — Map Cleardeathbags"
        **Description:** Endpoint `POST /map/cleardeathbags` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /map/cleardeathbags HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/map/cleardeathbags \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /map/cleardrops — Map Cleardrops"
        **Description:** Endpoint `POST /map/cleardrops` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /map/cleardrops HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/map/cleardrops \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /map/clearwildbuilds — Map Clearwildbuilds"
        **Description:** Endpoint `POST /map/clearwildbuilds` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /map/clearwildbuilds HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/map/clearwildbuilds \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /map/deathbags — Map Deathbags"
        **Description:** Endpoint `GET /map/deathbags` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /map/deathbags HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/map/deathbags \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /map/droppedpals — Map Droppedpals"
        **Description:** Endpoint `GET /map/droppedpals` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /map/droppedpals HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/map/droppedpals \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /map/drops — Map Drops"
        **Description:** Endpoint `GET /map/drops` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /map/drops HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/map/drops \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /map/eggs — Map Eggs"
        **Description:** Endpoint `GET /map/eggs` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /map/eggs HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/map/eggs \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /map/entities — Map Entities"
        **Description:** Endpoint `GET /map/entities` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /map/entities HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/map/entities \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /map/loot — Map Loot"
        **Description:** Endpoint `GET /map/loot` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /map/loot HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/map/loot \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /map/pals — Map Pals"
        **Description:** Endpoint `GET /map/pals` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /map/pals HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/map/pals \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /map/recoverbag — Map Recoverbag"
        **Description:** Endpoint `POST /map/recoverbag` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /map/recoverbag HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/map/recoverbag \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /map/supplies — Map Supplies"
        **Description:** Endpoint `GET /map/supplies` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /map/supplies HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/map/supplies \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /map/treasures — Map Treasures"
        **Description:** Endpoint `GET /map/treasures` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /map/treasures HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/map/treasures \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /map/triggersupply — Map Triggersupply"
        **Description:** Endpoint `POST /map/triggersupply` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /map/triggersupply HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/map/triggersupply \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /map/wildbuilds — Map Wildbuilds"
        **Description:** Endpoint `GET /map/wildbuilds` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /map/wildbuilds HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/map/wildbuilds \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /world/time — World Time"
        **Description:** Endpoint `POST /world/time` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /world/time HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/world/time \
          -H "X-API-Key: changeme-admin-key"
        ```

??? note "🧹 Server Janitor & World Sweeper (6 endpoints)"

    > Automated server janitor configuration, cleanup telemetry, historical swept item logs, and forced cleanup sweeps.

    ??? info "POST /api/janitor/run — Api Janitor Run"
        **Description:** Endpoint `POST /api/janitor/run` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/janitor/run HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/janitor/run \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/janitor/status — Api Janitor Status"
        **Description:** Endpoint `GET /api/janitor/status` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
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
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/janitor/status \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/janitor/swept — Api Janitor Swept"
        **Description:** Endpoint `GET /api/janitor/swept` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
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
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/janitor/swept \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /janitor/run — Janitor Run"
        **Description:** Endpoint `POST /janitor/run` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /janitor/run HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/janitor/run \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /janitor/status — Janitor Status"
        **Description:** Endpoint `GET /janitor/status` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /janitor/status HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/janitor/status \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /janitor/swept — Janitor Swept"
        **Description:** Endpoint `GET /janitor/swept` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /janitor/swept HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/janitor/swept \
          -H "X-API-Key: changeme-admin-key"
        ```

??? note "✨ Visual Auras & Combat Buffs (12 endpoints)"

    > Player aura particle attachments, stat buff injection (attack, defense, stamina, speed), buff presets, and global world modifiers.

    ??? info "GET /api/buffs — Api Buffs"
        **Description:** Endpoint `GET /api/buffs` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/buffs HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/buffs \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/buffs/save — Api Buffs Save"
        **Description:** Endpoint `POST /api/buffs/save` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/buffs/save HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/buffs/save \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/buffs/world — Api Buffs World"
        **Description:** Endpoint `POST /api/buffs/world` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/buffs/world HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/buffs/world \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/player/aura — Api Player Aura"
        **Description:** Endpoint `POST /api/player/aura` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/player/aura HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/player/aura \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/player/buff — Api Player Buff"
        **Description:** Endpoint `POST /api/player/buff` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/player/buff HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/player/buff \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/player/buff/remove — Api Player Buff Remove"
        **Description:** Endpoint `POST /api/player/buff/remove` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/player/buff/remove HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/player/buff/remove \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /buffs — Buffs"
        **Description:** Endpoint `GET /buffs` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /buffs HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/buffs \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /buffs/save — Buffs Save"
        **Description:** Endpoint `POST /buffs/save` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /buffs/save HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/buffs/save \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /buffs/world — Buffs World"
        **Description:** Endpoint `POST /buffs/world` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /buffs/world HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/buffs/world \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /player/aura — Player Aura"
        **Description:** Endpoint `POST /player/aura` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /player/aura HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/player/aura \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /player/buff — Player Buff"
        **Description:** Endpoint `POST /player/buff` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /player/buff HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/player/buff \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /player/buff/remove — Player Buff Remove"
        **Description:** Endpoint `POST /player/buff/remove` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /player/buff/remove HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/player/buff/remove \
          -H "X-API-Key: changeme-admin-key"
        ```

??? note "🔍 Live Object Explorer & Diagnostics (11 endpoints)"

    > In-memory Unreal Engine reflection search, live UObject inspection, dynamic UFunction invocation, and GObjects table memory probes.

    ??? info "POST /admin/command — Admin Command"
        **Description:** Endpoint `POST /admin/command` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/command HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/command \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/explore/exec — Admin Explore Exec"
        **Description:** Endpoint `POST /admin/explore/exec` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/explore/exec HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/explore/exec \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /admin/explore/inspect — Admin Explore Inspect"
        **Description:** Endpoint `GET /admin/explore/inspect` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /admin/explore/inspect HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/admin/explore/inspect \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /admin/explore/invoke — Admin Explore Invoke"
        **Description:** Endpoint `POST /admin/explore/invoke` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /admin/explore/invoke HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/admin/explore/invoke \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /admin/explore/search — Admin Explore Search"
        **Description:** Endpoint `GET /admin/explore/search` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /admin/explore/search HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/admin/explore/search \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/v1/explore/exec — Api V1 Explore Exec"
        **Description:** Endpoint `POST /api/v1/explore/exec` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/v1/explore/exec HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/v1/explore/exec \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/v1/explore/inspect — Api V1 Explore Inspect"
        **Description:** Endpoint `GET /api/v1/explore/inspect` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/v1/explore/inspect HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/v1/explore/inspect \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /api/v1/explore/invoke — Api V1 Explore Invoke"
        **Description:** Endpoint `POST /api/v1/explore/invoke` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /api/v1/explore/invoke HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/api/v1/explore/invoke \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /api/v1/explore/search — Api V1 Explore Search"
        **Description:** Endpoint `GET /api/v1/explore/search` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /api/v1/explore/search HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/api/v1/explore/search \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "GET /debug/gobjects — Debug Gobjects"
        **Description:** Endpoint `GET /debug/gobjects` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        #### Request (Send Format)
        ```http
        GET /debug/gobjects HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X GET http://127.0.0.1:27020/debug/gobjects \
          -H "X-API-Key: changeme-admin-key"
        ```

    ??? info "POST /v1/api/command — V1 Api Command"
        **Description:** Endpoint `POST /v1/api/command` for PalServer administration and telemetry.  
        **Authentication:** `Admin Key (X-API-Key or Bearer JWT)`  
        #### Parameters
        | Name | Type | Description |
        | :--- | :--- | :--- |
        | `X-API-Key` | `header` | Administrative secret key configured in config.json |
        | `payload` | `json object` | Action request parameters and target selectors |
        #### Request (Send Format)
        ```http
        POST /v1/api/command HTTP/1.1
        Host: 127.0.0.1:27020
        X-API-Key: changeme-admin-key
        Content-Type: application/json

        {}
        ```

        #### Response (Receive Format)
        **`200 OK` (Success):**
        ```json
        {
          "success": true,
          "status": "ok"
        }
        ```
        **Error Response (`400`/`401`/`404`/`500`):**
        ```json
        {
          "success": false,
          "error": "Unauthorized or invalid parameter"
        }
        ```

        #### Example `curl`
        ```bash
        curl -X POST http://127.0.0.1:27020/v1/api/command \
          -H "X-API-Key: changeme-admin-key"
        ```

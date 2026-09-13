# PalSupervisor-DLL 🎮🛡️

> **Enterprise Native Supervisor & Proactive Anti-Cheat Extension for Palworld Dedicated Servers**

[![GitHub Pages](https://img.shields.io/badge/Web%20Portal-Live%20Website-00f0ff?style=for-the-badge&logo=github)](https://palsupervisor.github.io/PalSupervisor-DLL/)
[![Unreal Engine](https://img.shields.io/badge/Unreal%20Engine-5.1.1-3182ce?style=for-the-badge&logo=unrealengine)](https://palsupervisor.github.io/PalSupervisor-DLL/)
[![C++20](https://img.shields.io/badge/C%2B%2B-20%20Standard-blue?style=for-the-badge&logo=c%2B%2B)](https://palsupervisor.github.io/PalSupervisor-DLL/)
[![Commands](https://img.shields.io/badge/In--Game%20Commands-171-10b981?style=for-the-badge)](https://palsupervisor.github.io/PalSupervisor-DLL/Commands/)
[![REST API](https://img.shields.io/badge/REST%20Endpoints-240%2B-6366f1?style=for-the-badge)](https://palsupervisor.github.io/PalSupervisor-DLL/RESTAPI/)

---

### 🌐 Official Website & Live Wiki
👉 **[Visit the PalSupervisor Wiki & Live Command Guide](https://palsupervisor.github.io/PalSupervisor-DLL/)**

* 📖 **[In-Game Chat Commands (171)](https://palsupervisor.github.io/PalSupervisor-DLL/Commands/)**
* 🌐 **[Embedded REST API Reference (240+)](https://palsupervisor.github.io/PalSupervisor-DLL/RESTAPI/)**
* ⚡ **[Features & Architecture](https://palsupervisor.github.io/PalSupervisor-DLL/Features/)**
* 📦 **[Installation & Setup](https://palsupervisor.github.io/PalSupervisor-DLL/Installation/)**

---

### 🚀 Key Features

- **⚡ Sub-Microsecond Memory Detours**: Hooks directly into `UObject::ProcessEvent` and CDO functions with zero tick delay.
- **🛡️ Proactive Anti-Cheat**: Detects speed manipulation, infinite stamina, illegal damage spikes, and spoofed packets in real time.
- **💬 171 Native In-Game Chat Commands**: Administrative moderation, inventory editing, instant teleportation, clean base wiping, guild management, points economy, and player state manipulation.
- **🏰 Base Camp & Guild Administration**: Zero-spill Clean Base Wipe (`/basewipe`, `POST /api/bases/:id/wipe`), dynamic relocation, chest storage inspection, guild promotion/demotion, leadership transfers, and chest interaction audit logs.
- **👑 Custom Boss & Encounter Engine**: Summon custom multi-phase boss encounters from JSON templates with minions, scaled HP pools, and custom loot tables.
- **🧹 Autonomous Server Janitor**: Scheduled sweeps to demolish orphaned wild structures, clean dropped ground items, and purge abandoned deathbags.
- **🗺️ Live Spatial Radar & Telemetry**: Full-map entity tracking with dual-coordinate system (Unreal 3D world vector + in-game map grid coordinates).
- **🌐 Embedded REST API on Port 27020**: High-speed native HTTP server with 240+ administrative endpoints for remote management, Discord bots, and web panels.

---

### 📦 Quick Installation

1. Download `version.dll` and place it in:
   ```
   PalServer/Pal/Binaries/Win64/version.dll
   ```
2. Place your `config.json` in the same directory.
3. Launch `PalServer-Win64-Shipping-Cmd.exe`.
4. Manage in-game via chat (`/help`) or interact remotely via the REST API at `http://127.0.0.1:27020`.

---
*Palworld is a registered trademark of Pocketpair, Inc. PalSupervisor is an independent third-party community tool.*

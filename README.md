# PalSupervisor-DLL 🎮🛡️

> **Enterprise Native Supervisor & Proactive Anti-Cheat Extension for Palworld Dedicated Servers**

[![GitHub Pages](https://img.shields.io/badge/Web%20Portal-Live%20Website-00f0ff?style=for-the-badge&logo=github)](https://palsupervisor.github.io/PalSupervisor-DLL/)
[![Unreal Engine](https://img.shields.io/badge/Unreal%20Engine-5.1.1-3182ce?style=for-the-badge&logo=unrealengine)](https://palsupervisor.github.io/PalSupervisor-DLL/)
[![C++20](https://img.shields.io/badge/C%2B%2B-20%20Standard-blue?style=for-the-badge&logo=c%2B%2B)](https://palsupervisor.github.io/PalSupervisor-DLL/)
[![Commands](https://img.shields.io/badge/In--Game%20Commands-140%2B-10b981?style=for-the-badge)](https://palsupervisor.github.io/PalSupervisor-DLL/#commands)

---

### 🌐 Official Website & Live Command Explorer
👉 **[Visit the PalSupervisor Web Portal & Command Guide](https://palsupervisor.github.io/PalSupervisor-DLL/)**

---

### 🚀 Key Features

- **⚡ Sub-Microsecond Memory Detours**: Hooks directly into UObject::ProcessEvent and CDO functions with zero tick delay.
- **🛡️ Proactive Anti-Cheat**: Detects speed manipulation, infinite stamina, illegal damage spikes, and spoofed packets in real time.
- **💬 140+ In-Game Chat Commands**: Administrative moderation, player state manipulation, item distribution, teleportation, and instant server management.
- **👑 Custom Boss & Encounter Engine**: Summon custom multi-phase boss encounters from JSON templates with minions and loot scaling.
- **🧹 Autonomous Server Janitor**: Scheduled sweeps to demolish abandoned wild structures and purge ground item clutter.
- **🌐 Embedded REST API & Web Panel**: Built-in HTTP daemon on port 27020 for remote automation, bot integration, and web dashboard management.

---

### 📦 Quick Installation

1. Download ersion.dll and place it in:
   `
   PalServer/Pal/Binaries/Win64/version.dll
   `
2. Place your config.json in the same directory (use the [Live Config Generator](https://palsupervisor.github.io/PalSupervisor-DLL/#config)).
3. Launch PalServer-Win64-Shipping-Cmd.exe.
4. Manage in-game via chat (/help) or open the dashboard at http://127.0.0.1:27020.

---
*Palworld is a registered trademark of Pocketpair, Inc. PalSupervisor is an independent third-party community tool.*

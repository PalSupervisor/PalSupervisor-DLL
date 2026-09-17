# PalSupervisor Wiki 🎮🛡️

> **Enterprise Native Supervisor, Proactive Anti-Cheat & Event Engine for Palworld Dedicated Servers**

Welcome to the official documentation wiki for **PalSupervisor-DLL**. PalSupervisor is engineered in high-performance C++20 as a drop-in native extension (`version.dll`) integrating directly with the Unreal Engine 5.1.1 runtime.

---

### Key Capabilities

* **⚡ Sub-Microsecond Memory Detours**: Hooks directly into `UObject::ProcessEvent` and CDO functions with zero tick delay or TPS degradation.
* **🛡️ Proactive Anti-Cheat Matrix**: Real-time detection of speed manipulation, infinite stamina, illegal damage spikes, and spoofed network packets.
* **✨ Unified Player Buffs & Visual Auras**: Customizable multiplier presets, server-wide world buffs, and 19 purely cosmetic visual particle auras with zero damage ticks and active summoned Pal dual-application.
* **💬 175 Native In-Game Commands**: Full moderation, `/admin` direct authentication, base management & clean wipe, economy & shop, inventory editing, instant teleportation, and player state manipulation.
* **👑 Dynamic Boss & Raid Engine**: Summon custom multi-tier boss encounters from JSON templates with minions, custom loot tables, and broadcast banners.
* **🧹 Autonomous Server Janitor**: Scheduled background engine to demolish abandoned wild structures, purge ground item clutter, and execute periodic world saves.
* **🌐 245+ Embedded REST API Endpoints**: Built-in HTTP daemon on port `27020` for remote bot integration, live spatial radar, and web dashboard management.

---

### Quick Links

* [📖 In-Game Commands Guide](Commands.md)
* [⚡ Features & Architecture](Features.md)
* [📦 4-Step Installation Guide](Installation.md)
* [🌐 Embedded REST API Reference](RESTAPI.md)
* [GitHub Repository](https://github.com/PalSupervisor/PalSupervisor-DLL)

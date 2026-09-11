// PalSupervisor Native Commands Explorer & Dashboard Logic
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('cmdSearchInput');
  const explorerCount = document.getElementById('explorerCount');
  const btnExpAll = document.getElementById('btnExpAll');
  const btnColAll = document.getElementById('btnColAll');
  const categoryFilterBar = document.getElementById('categoryFilterBar');
  const toast = document.getElementById('toast');

  const allCards = Array.from(document.querySelectorAll('.doc-card'));
  const totalCount = allCards.length;
  let activeCategory = 'all';
  let currentSearchQuery = '';

  function applyFilters() {
    let visibleCount = 0;
    const q = currentSearchQuery.toLowerCase().trim();

    allCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);

      if (!matchesCategory) {
        card.style.display = 'none';
        return;
      }

      if (!q) {
        card.style.display = '';
        visibleCount++;
      } else {
        const text = card.textContent.toLowerCase();
        if (text.includes(q)) {
          card.style.display = '';
          visibleCount++;
          // Auto-expand when searching
          card.setAttribute('open', '');
        } else {
          card.style.display = 'none';
        }
      }
    });

    if (explorerCount) {
      if (activeCategory === 'all' && !q) {
        explorerCount.textContent = `Showing all ${totalCount} PalSupervisor commands`;
      } else {
        explorerCount.textContent = `Showing ${visibleCount} of ${totalCount} commands`;
      }
    }
  }

  // Category Filter Pills Handler
  if (categoryFilterBar) {
    categoryFilterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-filter-btn');
      if (!btn) return;

      categoryFilterBar.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeCategory = btn.getAttribute('data-cat') || 'all';
      applyFilters();
    });
  }

  // Real-time Search Handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      applyFilters();
    });
  }

  // Expand All / Collapse All Controls
  if (btnExpAll) {
    btnExpAll.addEventListener('click', () => {
      allCards.forEach(card => {
        if (card.style.display !== 'none') {
          card.setAttribute('open', '');
        }
      });
      showToast('Expanded visible commands');
    });
  }

  if (btnColAll) {
    btnColAll.addEventListener('click', () => {
      allCards.forEach(card => card.removeAttribute('open'));
      showToast('Collapsed all commands');
    });
  }

  // Global Copy Handler
  document.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('[data-copy]');
    if (copyBtn) {
      e.stopPropagation();
      e.preventDefault();
      const text = copyBtn.getAttribute('data-copy');
      if (text) {
        copyToClipboard(text);
      }
    }
  });

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied: ${text}`);
    }).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(`Copied: ${text}`);
    });
  }

  let toastTimer;
  function showToast(msg) {
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  // Interactive Config Generator
  const cfgPrefix = document.getElementById('cfgPrefix');
  const cfgPort = document.getElementById('cfgPort');
  const cfgAdminId = document.getElementById('cfgAdminId');
  const cfgSpeedCheck = document.getElementById('cfgSpeedCheck');
  const cfgJanitor = document.getElementById('cfgJanitor');
  const cfgJsonPreview = document.getElementById('cfgJsonPreview');
  const btnCopyCfg = document.getElementById('btnCopyCfg');

  function updateConfigPreview() {
    if (!cfgJsonPreview) return;
    const admins = (cfgAdminId?.value || '').split(',').map(s => s.trim()).filter(Boolean);
    const configObj = {
      "version": "0.4.1",
      "chat": {
        "command_prefix": cfgPrefix?.value || "/",
        "enable_chat_commands": true,
        "admin_steam_ids": admins.length ? admins : ["76561198000000000"]
      },
      "api": {
        "enabled": true,
        "port": parseInt(cfgPort?.value) || 27020,
        "bind_address": "0.0.0.0"
      },
      "anticheat": {
        "speed_check": cfgSpeedCheck?.checked ?? true,
        "stamina_check": true,
        "damage_rate_check": true,
        "illegal_item_filter": true,
        "auto_ban_threshold": 5
      },
      "janitor": {
        "enabled": cfgJanitor?.checked ?? true,
        "sweep_interval_minutes": 30,
        "clear_unowned_structures": true,
        "clear_dropped_items": true
      }
    };

    cfgJsonPreview.textContent = JSON.stringify(configObj, null, 2);
  }

  [cfgPrefix, cfgPort, cfgAdminId, cfgSpeedCheck, cfgJanitor].forEach(el => {
    if (el) el.addEventListener('input', updateConfigPreview);
  });

  if (btnCopyCfg) {
    btnCopyCfg.addEventListener('click', () => {
      copyToClipboard(cfgJsonPreview.textContent);
    });
  }

  updateConfigPreview();
});

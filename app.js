(() => {
  'use strict';

  const STORAGE_KEY_FAVS = 'win_shortcuts_favorites_v1';
  const STORAGE_KEY_THEME = 'win_shortcuts_theme_v1';
  const STORAGE_KEY_VIEW = 'win_shortcuts_view_v1';

  // アプリケーション状態
  const state = {
    category: 'all',
    subcategory: 'all',
    level: 'all', // 'all' | '3' | '2' | '1' | 'fav'
    searchQuery: '',
    viewMode: localStorage.getItem(STORAGE_KEY_VIEW) || 'card', // 'card' | 'table'
    favorites: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY_FAVS) || '[]')),
    keyTesterActive: false
  };

  // DOM要素
  const categoryTabsEl = document.getElementById('categoryTabs');
  const categoryDescEl = document.getElementById('categoryDesc');
  const searchInputEl = document.getElementById('searchInput');
  const clearSearchBtnEl = document.getElementById('clearSearchBtn');
  const levelFiltersEl = document.getElementById('levelFilters');
  const favCountBadgeEl = document.getElementById('favCountBadge');
  const subcategoryBarEl = document.getElementById('subcategoryBar');
  const resultCountNumEl = document.getElementById('resultCountNum');
  const activeFilterSummaryEl = document.getElementById('activeFilterSummary');
  const shortcutsContainerEl = document.getElementById('shortcutsContainer');
  const toastEl = document.getElementById('toast');

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIconEl = document.getElementById('themeIcon');
  const printBtn = document.getElementById('printBtn');
  const keyTesterBtn = document.getElementById('keyTesterBtn');
  const keyTesterPanel = document.getElementById('keyTesterPanel');
  const keyTesterDisplay = document.getElementById('keyTesterDisplay');
  const clearKeyTesterBtn = document.getElementById('clearKeyTesterBtn');
  const closeKeyTesterBtn = document.getElementById('closeKeyTesterBtn');

  const mobileSwipeBarEl = document.getElementById('mobileSwipeBar');
  const swipePrevBtn = document.getElementById('swipePrevBtn');
  const swipeNextBtn = document.getElementById('swipeNextBtn');
  const swipePrevNameEl = document.getElementById('swipePrevName');
  const swipeNextNameEl = document.getElementById('swipeNextName');
  const swipeHintTextEl = document.getElementById('swipeHintText');
  const swipeDotsEl = document.getElementById('swipeDots');
  const swipePreviewIndicatorEl = document.getElementById('swipePreviewIndicator');

  let toastTimer = null;

  // ==========================================
  // 初期化
  // ==========================================
  function init() {
    initTheme();
    initViewSwitcher();
    const totalEl = document.getElementById('totalShortcutCount');
    if (totalEl) totalEl.textContent = SHORTCUTS_DATA.length;
    const sourcesEl = document.getElementById('researchedSourcesList');
    if (sourcesEl && typeof RESEARCHED_SOURCES !== 'undefined') {
      sourcesEl.innerHTML = RESEARCHED_SOURCES.map(s => `<li>✓ ${escapeHtml(s)}</li>`).join('');
    }
    const rulesEl = document.getElementById('memoryRulesGrid');
    if (rulesEl && typeof MEMORY_RULES !== 'undefined') {
      rulesEl.innerHTML = MEMORY_RULES.map(r => `
        <div class="memory-rule-card">
          <div class="memory-rule-title">${escapeHtml(r.title)}</div>
          <div class="memory-rule-desc">${escapeHtml(r.desc)}</div>
        </div>
      `).join('');
    }
    renderCategoryTabs();
    renderSubcategoryBar();
    updateFavBadge();
    renderShortcuts();
    bindEvents();
  }

  // ==========================================
  // テーマ管理
  // ==========================================
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY_THEME);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIconEl.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem(STORAGE_KEY_THEME, theme);
  }

  // ==========================================
  // 表示モード管理
  // ==========================================
  function initViewSwitcher() {
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === state.viewMode);
    });
  }

  // ==========================================
  // カテゴリタブ＆サブカテゴリバー描画
  // ==========================================
  function getCategoryCount(catId) {
    if (catId === 'all') return SHORTCUTS_DATA.length;
    return SHORTCUTS_DATA.filter(item => item.category === catId).length;
  }

  function renderCategoryTabs() {
    categoryTabsEl.innerHTML = CATEGORIES.map(cat => {
      const isActive = state.category === cat.id;
      const count = getCategoryCount(cat.id);
      return `
        <button
          type="button"
          class="cat-tab ${isActive ? 'active' : ''}"
          style="--cat-color: ${cat.color}"
          data-cat="${cat.id}"
          role="tab"
          aria-selected="${isActive}"
        >
          <span class="cat-icon" aria-hidden="true">${cat.icon}</span>
          <span>${escapeHtml(cat.name)}</span>
          <span class="cat-count">${count}</span>
        </button>
      `;
    }).join('');

    const currentCat = CATEGORIES.find(c => c.id === state.category);
    categoryDescEl.textContent = currentCat ? currentCat.description : '';
    updateMobileSwipeBar();
    scrollActiveCategoryTab();
  }

  function scrollActiveCategoryTab() {
    const activeBtn = categoryTabsEl.querySelector('.cat-tab.active');
    if (!activeBtn) return;
    const containerWidth = categoryTabsEl.clientWidth;
    const btnLeft = activeBtn.offsetLeft;
    const btnWidth = activeBtn.offsetWidth;
    const targetScroll = Math.max(0, btnLeft - (containerWidth / 2) + (btnWidth / 2));
    categoryTabsEl.scrollTo({ left: targetScroll, behavior: 'smooth' });
  }

  function updateMobileSwipeBar() {
    if (!mobileSwipeBarEl) return;
    const idx = Math.max(0, CATEGORIES.findIndex(c => c.id === state.category));
    const prevIdx = (idx - 1 + CATEGORIES.length) % CATEGORIES.length;
    const nextIdx = (idx + 1) % CATEGORIES.length;
    const currentCat = CATEGORIES[idx];
    const prevCat = CATEGORIES[prevIdx];
    const nextCat = CATEGORIES[nextIdx];

    if (swipePrevNameEl && prevCat) {
      swipePrevNameEl.textContent = `${prevCat.icon} ${prevCat.name}`;
    }
    if (swipeNextNameEl && nextCat) {
      swipeNextNameEl.textContent = `${nextCat.icon} ${nextCat.name}`;
    }
    if (swipeHintTextEl && currentCat) {
      swipeHintTextEl.textContent = `${currentCat.icon} ${currentCat.name}（左右スワイプで切替）`;
    }
    if (swipeDotsEl) {
      swipeDotsEl.innerHTML = CATEGORIES.map((c, i) => `
        <span
          class="swipe-dot ${i === idx ? 'active' : ''}"
          style="${i === idx ? `--dot-color: ${c.color}` : ''}"
        ></span>
      `).join('');
    }
  }

  function switchCategoryByOffset(offset, showNotification = false) {
    const idx = Math.max(0, CATEGORIES.findIndex(c => c.id === state.category));
    const nextIdx = (idx + offset + CATEGORIES.length) % CATEGORIES.length;
    const targetCat = CATEGORIES[nextIdx];
    if (!targetCat) return;

    state.category = targetCat.id;
    state.subcategory = 'all';
    renderCategoryTabs();
    renderSubcategoryBar();
    renderShortcuts();

    const animClass = offset > 0 ? 'swipe-slide-from-right' : 'swipe-slide-from-left';
    shortcutsContainerEl.classList.remove('swipe-slide-from-right', 'swipe-slide-from-left');
    void shortcutsContainerEl.offsetWidth; // reflow
    shortcutsContainerEl.classList.add(animClass);

    if (showNotification) {
      showToast(`${targetCat.icon} 「${targetCat.name}」へ切り替えました`);
    }
  }

  function renderSubcategoryBar() {
    if (state.category === 'all') {
      subcategoryBarEl.classList.add('hidden');
      return;
    }

    const targetItems = SHORTCUTS_DATA.filter(item => item.category === state.category);
    const subcats = Array.from(new Set(targetItems.map(item => item.subcategory)));

    if (subcats.length <= 1) {
      subcategoryBarEl.classList.add('hidden');
      return;
    }

    subcategoryBarEl.classList.remove('hidden');
    const pillsHtml = [
      `<span class="subcat-label">ジャンルで絞り込み:</span>`,
      `<button type="button" class="subcat-pill ${state.subcategory === 'all' ? 'active' : ''}" data-subcat="all">すべて</button>`,
      ...subcats.map(sub => `
        <button
          type="button"
          class="subcat-pill ${state.subcategory === sub ? 'active' : ''}"
          data-subcat="${escapeHtml(sub)}"
        >${escapeHtml(sub)}</button>
      `)
    ].join('');

    subcategoryBarEl.innerHTML = pillsHtml;
  }

  // ==========================================
  // フィルタリング処理
  // ==========================================
  function getFilteredShortcuts() {
    const query = state.searchQuery.trim().toLowerCase();
    const queryTokens = query ? query.split(/[\s+＋]+/).filter(Boolean) : [];

    return SHORTCUTS_DATA.filter(item => {
      if (state.category !== 'all' && item.category !== state.category) {
        return false;
      }
      if (state.subcategory !== 'all' && item.subcategory !== state.subcategory) {
        return false;
      }
      if (state.level === 'fav') {
        if (!state.favorites.has(item.id)) return false;
      } else if (state.level !== 'all') {
        if (String(item.level) !== state.level) return false;
      }

      if (queryTokens.length > 0) {
        const searchableText = [
          item.title,
          item.desc,
          item.tip || '',
          item.memory || '',
          item.subcategory,
          item.funcGroup || '',
          item.keyGroup || '',
          item.keys.join(' '),
          item.keys.join('+')
        ].join(' ').toLowerCase();

        return queryTokens.every(token => searchableText.includes(token));
      }

      return true;
    });
  }

  // ==========================================
  // メイン一覧描画
  // ==========================================
  function renderShortcuts() {
    const filtered = getFilteredShortcuts();
    resultCountNumEl.textContent = filtered.length;

    // フィルタサマリー表示
    const summaryParts = [];
    if (state.category !== 'all') {
      const catObj = CATEGORIES.find(c => c.id === state.category);
      if (catObj) summaryParts.push(catObj.name);
    }
    if (state.subcategory !== 'all') summaryParts.push(state.subcategory);
    if (state.level === 'fav') summaryParts.push('お気に入り');
    else if (state.level !== 'all') summaryParts.push(`重要度★${state.level}`);
    if (state.searchQuery.trim()) summaryParts.push(`「${state.searchQuery.trim()}」`);

    activeFilterSummaryEl.textContent = summaryParts.length > 0
      ? `（${summaryParts.join(' / ')}）`
      : '';

    if (filtered.length === 0) {
      shortcutsContainerEl.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <p class="empty-title">一致するショートカットキーが見つかりませんでした</p>
          <p class="empty-desc">検索キーワードを変えるか、フィルタ条件をリセットしてお試しください。</p>
          <button type="button" class="reset-btn" id="resetFiltersBtn">すべての条件をリセット</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', resetAllFilters);
      }
      return;
    }

    // グループ分け（すべて選択時はカテゴリ順、個別カテゴリ選択時はサブカテゴリ順）
    const groups = groupShortcuts(filtered);

    if (state.viewMode === 'table') {
      shortcutsContainerEl.innerHTML = groups.map(group => renderTableGroup(group)).join('');
    } else {
      shortcutsContainerEl.innerHTML = groups.map(group => renderCardGroup(group)).join('');
    }
  }

  function groupShortcuts(items) {
    const map = new Map();

    items.forEach(item => {
      const catMeta = CATEGORIES.find(c => c.id === item.category);
      const groupKey = `${item.category}__${item.subcategory}`;

      if (!map.has(groupKey)) {
        map.set(groupKey, {
          key: groupKey,
          categoryName: catMeta ? catMeta.name : item.category,
          categoryIcon: catMeta ? catMeta.icon : '⌨️',
          color: catMeta ? catMeta.color : '#2563eb',
          subcategory: item.subcategory,
          items: []
        });
      }
      map.get(groupKey).items.push(item);
    });

    return Array.from(map.values());
  }

  function renderKeysHtml(keys) {
    return keys.map((k, idx) => {
      const kbd = `<kbd>${escapeHtml(k)}</kbd>`;
      return idx < keys.length - 1 ? `${kbd}<span class="key-plus">+</span>` : kbd;
    }).join('');
  }

  function renderLevelBadge(level) {
    if (level === 3) return `<span class="level-badge level-3" title="毎日使う最重要ショートカット">★★★ 必須</span>`;
    if (level === 2) return `<span class="level-badge level-2" title="作業速度が上がる便利ショートカット">★★☆ 便利</span>`;
    return `<span class="level-badge level-1" title="知っていると差がつく玄人ワザ">★☆☆ 玄人</span>`;
  }

  function renderCardGroup(group) {
    const isSwipeCarousel = state.viewMode === 'swipe';
    const totalInGroup = group.items.length;

    const cardsHtml = group.items.map((item, idx) => {
      const isFav = state.favorites.has(item.id);
      const comboText = item.keys.join(' + ');
      const shortKeyGroup = item.keyGroup ? item.keyGroup.replace(/^[①-⑩]\s*/, '').replace(/（.*?）/g, '') : '';
      const keyTagHtml = isSwipeCarousel
        ? `<span class="item-func-tag">${idx + 1} / ${totalInGroup}</span>`
        : (shortKeyGroup ? `<span class="item-func-tag">${escapeHtml(shortKeyGroup)}</span>` : '');
      return `
        <article class="shortcut-card" style="--card-accent: ${group.color}">
          <div>
            <div class="card-top">
              <div
                class="keys-combo"
                data-copy="${escapeHtml(comboText)}"
                title="クリックして「${escapeHtml(comboText)}」をコピー"
              >
                ${renderKeysHtml(item.keys)}
              </div>
              <div class="card-meta-right">
                ${keyTagHtml}
                ${renderLevelBadge(item.level)}
                <button
                  type="button"
                  class="fav-btn ${isFav ? 'is-fav' : ''}"
                  data-fav-id="${item.id}"
                  aria-label="お気に入り登録"
                  title="${isFav ? 'お気に入りから解除' : 'お気に入りに追加'}"
                >${isFav ? '★' : '☆'}</button>
              </div>
            </div>
            <h3 class="card-title">${escapeHtml(item.title)}</h3>
            <p class="card-desc">${escapeHtml(item.desc)}</p>
          </div>
          ${item.memory ? `
            <div class="card-memory">
              <span class="card-memory-label">🧠 覚え方:</span>
              <span>${escapeHtml(item.memory)}</span>
            </div>
          ` : ''}
          ${item.tip ? `
            <div class="card-tip">
              <span class="card-tip-icon" aria-hidden="true">💡</span>
              <span>${escapeHtml(item.tip)}</span>
            </div>
          ` : ''}
        </article>
      `;
    }).join('');

    return `
      <section class="category-section" style="--section-color: ${group.color}">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="section-badge">${escapeHtml(group.categoryIcon)} ${escapeHtml(group.categoryName)}</span>
            <h2 class="section-title">${escapeHtml(group.subcategory)}</h2>
          </div>
          <span class="section-count">${isSwipeCarousel ? '👆 左右スワイプ ・ ' : ''}${group.items.length} 件</span>
        </div>
        <div class="cards-grid ${isSwipeCarousel ? 'cards-carousel' : ''}">
          ${cardsHtml}
        </div>
      </section>
    `;
  }

  function renderTableGroup(group) {
    const rowsHtml = group.items.map(item => {
      const isFav = state.favorites.has(item.id);
      const comboText = item.keys.join(' + ');
      return `
        <tr>
          <td class="table-keys-cell">
            <div
              class="keys-combo"
              data-copy="${escapeHtml(comboText)}"
              title="クリックして「${escapeHtml(comboText)}」をコピー"
            >
              ${renderKeysHtml(item.keys)}
            </div>
          </td>
          <td class="table-title-cell">${escapeHtml(item.title)}</td>
          <td class="table-desc-cell">
            ${escapeHtml(item.desc)}
            ${item.memory ? `<br><span class="table-memory-line">🧠 覚え方: ${escapeHtml(item.memory)}</span>` : ''}
            ${item.tip ? `<br><small style="color: var(--text-muted)">💡 ${escapeHtml(item.tip)}</small>` : ''}
          </td>
          <td class="table-level-cell">${renderLevelBadge(item.level)}</td>
          <td class="table-fav-cell">
            <button
              type="button"
              class="fav-btn ${isFav ? 'is-fav' : ''}"
              data-fav-id="${item.id}"
              title="${isFav ? 'お気に入りから解除' : 'お気に入りに追加'}"
            >${isFav ? '★' : '☆'}</button>
          </td>
        </tr>
      `;
    }).join('');

    return `
      <section class="category-section" style="--section-color: ${group.color}">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="section-badge">${escapeHtml(group.categoryIcon)} ${escapeHtml(group.categoryName)}</span>
            <h2 class="section-title">${escapeHtml(group.subcategory)}</h2>
          </div>
          <span class="section-count">${group.items.length} 件</span>
        </div>
        <div class="shortcuts-table-wrap">
          <table class="shortcuts-table">
            <thead>
              <tr>
                <th>ショートカットキー</th>
                <th>機能名</th>
                <th>説明・ワンポイント</th>
                <th>重要度</th>
                <th>★</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  // ==========================================
  // お気に入り＆コピー処理
  // ==========================================
  function toggleFavorite(id) {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      showToast('お気に入りから解除しました');
    } else {
      state.favorites.add(id);
      showToast('★ お気に入りに追加しました');
    }
    localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(Array.from(state.favorites)));
    updateFavBadge();
    renderShortcuts();
  }

  function updateFavBadge() {
    favCountBadgeEl.textContent = state.favorites.size;
  }

  function copyShortcutText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`📋 「${text}」をコピーしました`);
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(`📋 「${text}」をコピーしました`);
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2200);
  }

  function resetAllFilters() {
    state.category = 'all';
    state.subcategory = 'all';
    state.level = 'all';
    state.searchQuery = '';
    searchInputEl.value = '';
    clearSearchBtnEl.classList.add('hidden');

    document.querySelectorAll('.filter-chip').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.level === 'all');
    });

    renderCategoryTabs();
    renderSubcategoryBar();
    renderShortcuts();
  }

  // ==========================================
  // キー入力で逆引き（Key Tester）
  // ==========================================
  function toggleKeyTester(forceState) {
    state.keyTesterActive = typeof forceState === 'boolean' ? forceState : !state.keyTesterActive;
    keyTesterPanel.classList.toggle('hidden', !state.keyTesterActive);
    keyTesterBtn.classList.toggle('active', state.keyTesterActive);

    if (state.keyTesterActive) {
      keyTesterDisplay.innerHTML = `<span class="placeholder">キーを押してください...</span>`;
    }
  }

  function formatCapturedKeys(e) {
    const pressed = [];
    if (e.ctrlKey) pressed.push('Ctrl');
    if (e.metaKey) pressed.push('Win');
    if (e.altKey) pressed.push('Alt');
    if (e.shiftKey) pressed.push('Shift');

    const ignoreKeys = ['Control', 'Shift', 'Alt', 'Meta', 'Process'];
    if (!ignoreKeys.includes(e.key)) {
      const keyMap = {
        ' ': 'Space',
        'ArrowUp': '↑',
        'ArrowDown': '↓',
        'ArrowLeft': '←',
        'ArrowRight': '→',
        'Escape': 'Esc',
        'Delete': 'Delete',
        'Backspace': 'Backspace',
        'Enter': 'Enter',
        'Tab': 'Tab',
        'Home': 'Home',
        'End': 'End',
        'PageUp': 'PageUp',
        'PageDown': 'PageDown'
      };
      const mainKey = keyMap[e.key] || (e.key.length === 1 ? e.key.toUpperCase() : e.key);
      pressed.push(mainKey);
    }

    return pressed;
  }

  // ==========================================
  // イベントバインド
  // ==========================================
  function bindEvents() {
    // カテゴリ切替
    categoryTabsEl.addEventListener('click', e => {
      const btn = e.target.closest('.cat-tab');
      if (!btn) return;
      state.category = btn.dataset.cat;
      state.subcategory = 'all';
      renderCategoryTabs();
      renderSubcategoryBar();
      renderShortcuts();
    });

    // スマホ用 前後カテゴリ切替ボタン＆タッチスワイプ
    if (swipePrevBtn) {
      swipePrevBtn.addEventListener('click', () => switchCategoryByOffset(-1, true));
    }
    if (swipeNextBtn) {
      swipeNextBtn.addEventListener('click', () => switchCategoryByOffset(1, true));
    }
    bindTouchSwipe();

    // サブカテゴリ切替
    subcategoryBarEl.addEventListener('click', e => {
      const btn = e.target.closest('.subcat-pill');
      if (!btn) return;
      state.subcategory = btn.dataset.subcat;
      renderSubcategoryBar();
      renderShortcuts();
    });

    // 重要度・お気に入りフィルタ
    levelFiltersEl.addEventListener('click', e => {
      const btn = e.target.closest('.filter-chip');
      if (!btn) return;
      state.level = btn.dataset.level;
      document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.toggle('active', chip === btn);
      });
      renderShortcuts();
    });

    // 表示形式切替
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.viewMode = btn.dataset.view;
        localStorage.setItem(STORAGE_KEY_VIEW, state.viewMode);
        initViewSwitcher();
        renderShortcuts();
      });
    });

    // 検索入力
    searchInputEl.addEventListener('input', () => {
      state.searchQuery = searchInputEl.value;
      clearSearchBtnEl.classList.toggle('hidden', !state.searchQuery);
      renderShortcuts();
    });

    clearSearchBtnEl.addEventListener('click', () => {
      state.searchQuery = '';
      searchInputEl.value = '';
      clearSearchBtnEl.classList.add('hidden');
      searchInputEl.focus();
      renderShortcuts();
    });

    // カード内のコピー＆お気に入りクリック（イベント委譲）
    shortcutsContainerEl.addEventListener('click', e => {
      const favBtn = e.target.closest('.fav-btn');
      if (favBtn) {
        toggleFavorite(favBtn.dataset.favId);
        return;
      }

      const comboEl = e.target.closest('.keys-combo');
      if (comboEl && comboEl.dataset.copy) {
        copyShortcutText(comboEl.dataset.copy);
      }
    });

    // テーマ切替
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    // 印刷ボタン
    printBtn.addEventListener('click', () => {
      window.print();
    });

    // キー入力逆引きモード
    keyTesterBtn.addEventListener('click', () => toggleKeyTester());
    closeKeyTesterBtn.addEventListener('click', () => toggleKeyTester(false));
    clearKeyTesterBtn.addEventListener('click', () => {
      keyTesterDisplay.innerHTML = `<span class="placeholder">キーを押してください...</span>`;
      state.searchQuery = '';
      searchInputEl.value = '';
      clearSearchBtnEl.classList.add('hidden');
      renderShortcuts();
    });

    // グローバルキーボード操作
    window.addEventListener('keydown', e => {
      // キー入力逆引きモード起動中
      if (state.keyTesterActive) {
        if (e.key === 'Escape') {
          toggleKeyTester(false);
          return;
        }
        e.preventDefault();
        const keys = formatCapturedKeys(e);
        if (keys.length > 0) {
          keyTesterDisplay.innerHTML = renderKeysHtml(keys);
          const query = keys.join(' ');
          state.searchQuery = query;
          searchInputEl.value = query;
          clearSearchBtnEl.classList.remove('hidden');
          renderShortcuts();
        }
        return;
      }

      const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);

      // 「/」で検索ボックスにフォーカス
      if (e.key === '/' && !isTyping && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        searchInputEl.focus();
        searchInputEl.select();
        return;
      }

      // 「Esc」で検索クリア
      if (e.key === 'Escape') {
        if (state.searchQuery) {
          state.searchQuery = '';
          searchInputEl.value = '';
          clearSearchBtnEl.classList.add('hidden');
          renderShortcuts();
        }
        if (isTyping) {
          document.activeElement.blur();
        }
        return;
      }

      // 1〜9キーでカテゴリ切り替え（入力中でない時）
      if (!isTyping && !e.ctrlKey && !e.altKey && !e.metaKey && /^[1-9]$/.test(e.key)) {
        const idx = Number(e.key) - 1;
        if (CATEGORIES[idx]) {
          state.category = CATEGORIES[idx].id;
          state.subcategory = 'all';
          renderCategoryTabs();
          renderSubcategoryBar();
          renderShortcuts();
        }
      }
    });
  }

  function bindTouchSwipe() {
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let directionLock = null; // null | 'horizontal' | 'vertical'
    let isTracking = false;

    const resetSwipeVisuals = () => {
      shortcutsContainerEl.style.transform = '';
      shortcutsContainerEl.style.transition = '';
      if (swipePreviewIndicatorEl) {
        swipePreviewIndicatorEl.classList.add('hidden');
        swipePreviewIndicatorEl.classList.remove('left-side', 'right-side', 'ready');
      }
    };

    document.addEventListener('touchstart', e => {
      if (e.touches.length !== 1) return;
      const target = e.target;
      // 横スクロール要素（カルーセル・早見表・タブバー・入力欄）内のタッチは除外
      if (
        target.closest('.cards-carousel') ||
        target.closest('.shortcuts-table-wrap') ||
        target.closest('.category-tabs') ||
        target.closest('.subcategory-bar') ||
        target.closest('input, textarea, select')
      ) {
        isTracking = false;
        return;
      }
      // ショートカット一覧またはスワイプバー上のタッチのみ対象
      if (!target.closest('#shortcutsContainer') && !target.closest('#mobileSwipeBar')) {
        isTracking = false;
        return;
      }

      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startTime = Date.now();
      directionLock = null;
      isTracking = true;
    }, { passive: true });

    document.addEventListener('touchmove', e => {
      if (!isTracking || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);

      if (!directionLock) {
        if (absX < 10 && absY < 10) return;
        if (absY >= absX * 0.85) {
          directionLock = 'vertical';
          isTracking = false;
          return;
        }
        directionLock = 'horizontal';
      }

      if (directionLock === 'horizontal') {
        const dampedX = Math.max(-75, Math.min(75, dx * 0.32));
        shortcutsContainerEl.style.transition = 'none';
        shortcutsContainerEl.style.transform = `translateX(${dampedX}px)`;

        if (swipePreviewIndicatorEl) {
          const idx = Math.max(0, CATEGORIES.findIndex(c => c.id === state.category));
          const isNext = dx < 0;
          const targetIdx = isNext
            ? (idx + 1) % CATEGORIES.length
            : (idx - 1 + CATEGORIES.length) % CATEGORIES.length;
          const targetCat = CATEGORIES[targetIdx];
          if (targetCat) {
            swipePreviewIndicatorEl.textContent = isNext
              ? `${targetCat.icon} ${targetCat.name} ▶`
              : `◀ ${targetCat.icon} ${targetCat.name}`;
            swipePreviewIndicatorEl.classList.remove('hidden', 'left-side', 'right-side');
            swipePreviewIndicatorEl.classList.add(isNext ? 'right-side' : 'left-side');
            swipePreviewIndicatorEl.classList.toggle('ready', absX >= 55);
          }
        }
      }
    }, { passive: true });

    document.addEventListener('touchend', e => {
      if (!isTracking) return;
      isTracking = false;

      if (directionLock !== 'horizontal' || !e.changedTouches.length) {
        resetSwipeVisuals();
        return;
      }

      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      const elapsed = Date.now() - startTime;
      resetSwipeVisuals();

      const isValidSwipe =
        (Math.abs(dx) >= 55 && Math.abs(dx) > Math.abs(dy) * 1.3) ||
        (Math.abs(dx) >= 35 && elapsed < 260 && Math.abs(dx) > Math.abs(dy) * 1.5);

      if (isValidSwipe) {
        // 左スワイプ(dx < 0)で次のカテゴリ、右スワイプ(dx > 0)で前のカテゴリ
        switchCategoryByOffset(dx < 0 ? 1 : -1, true);
      }
    }, { passive: true });

    document.addEventListener('touchcancel', () => {
      isTracking = false;
      directionLock = null;
      resetSwipeVisuals();
    }, { passive: true });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  init();
})();


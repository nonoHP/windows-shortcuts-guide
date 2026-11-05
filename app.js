(() => {
  'use strict';

  const STORAGE_KEY_FAVS = 'win_shortcuts_favorites_v1';
  const STORAGE_KEY_THEME = 'win_shortcuts_theme_v1';
  const STORAGE_KEY_VIEW = 'win_shortcuts_view_v2';

  // アプリケーション状態
  const state = {
    category: 'win11',
    subcategory: 'all',
    level: 'all', // 'all' | '3' | '2' | '1' | 'fav'
    searchQuery: '',
    viewMode: localStorage.getItem(STORAGE_KEY_VIEW) || 'swipe', // 'swipe' | 'card' | 'table'
    favorites: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY_FAVS) || '[]')),
    keyTesterActive: false,
    currentIndex: 0
  };

  // DOM要素
  const categoryTabsEl = document.getElementById('categoryTabs');
  const activeCategoryLabelEl = document.getElementById('activeCategoryLabel');
  const controlsBarEl = document.getElementById('controlsBar');
  const searchInputEl = document.getElementById('searchInput');
  const clearSearchBtnEl = document.getElementById('clearSearchBtn');
  const levelFiltersEl = document.getElementById('levelFilters');
  const favCountBadgeEl = document.getElementById('favCountBadge');
  const favCountBadgeChipEl = document.getElementById('favCountBadgeChip');
  const favOnlyHeaderBtn = document.getElementById('favOnlyHeaderBtn');
  const favHeaderBtnTextEl = document.getElementById('favHeaderBtnText');
  const favModeBannerEl = document.getElementById('favModeBanner');
  const favBannerCountEl = document.getElementById('favBannerCount');
  const exitFavModeBtn = document.getElementById('exitFavModeBtn');

  const subcategoryBarEl = document.getElementById('subcategoryBar');
  const statusBarEl = document.getElementById('statusBar');
  const resultCountNumEl = document.getElementById('resultCountNum');
  const activeFilterSummaryEl = document.getElementById('activeFilterSummary');
  const shortcutsContainerEl = document.getElementById('shortcutsContainer');
  const siteFooterEl = document.getElementById('siteFooter');
  const toastEl = document.getElementById('toast');

  const toggleSearchPanelBtn = document.getElementById('toggleSearchPanelBtn');
  const toggleRulesBtn = document.getElementById('toggleRulesBtn');
  const closeRulesBtn = document.getElementById('closeRulesBtn');
  const memoryRulesPanelEl = document.getElementById('memoryRulesPanel');

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
  const swipeProgressFillEl = document.getElementById('swipeProgressFill');

  let toastTimer = null;
  let currentFilteredItems = [];
  let isProgrammaticScroll = false;
  let scrollDebounceTimer = null;

  // ==========================================
  // 初期化
  // ==========================================
  function init() {
    initTheme();
    initViewSwitcher();
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
    document.body.classList.toggle('is-swipe-mode', state.viewMode === 'swipe');
  }

  // ==========================================
  // カテゴリタブ＆サブカテゴリバー描画
  // ==========================================
  function getCategoryCount(catId) {
    if (catId === 'all') return SHORTCUTS_DATA.length;
    return SHORTCUTS_DATA.filter(item => item.category === catId).length;
  }

  function renderCategoryTabs() {
    const isFavMode = state.level === 'fav';
    categoryTabsEl.innerHTML = CATEGORIES.map(cat => {
      const isActive = !isFavMode && state.category === cat.id;
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
          <span class="cat-name">${escapeHtml(cat.name)}</span>
          <span class="cat-count">${count}</span>
        </button>
      `;
    }).join('');

    const currentCat = CATEGORIES.find(c => c.id === state.category);
    if (activeCategoryLabelEl) {
      if (isFavMode) {
        activeCategoryLabelEl.innerHTML = `<span class="active-cat-dot" style="background:#eab308"></span>★ お気に入り一覧: `;
      } else if (currentCat) {
        activeCategoryLabelEl.innerHTML = `<span class="active-cat-dot" style="background:${currentCat.color}"></span>${escapeHtml(currentCat.icon)} ${escapeHtml(currentCat.name)}: `;
      }
    }
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

  function renderSubcategoryBar() {
    if (state.category === 'all' || state.level === 'fav') {
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
      `<span class="subcat-label">ジャンル:</span>`,
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
  // お気に入りだけ開くモード制御
  // ==========================================
  function syncFavModeUI() {
    const isFavMode = state.level === 'fav';
    if (favOnlyHeaderBtn) {
      favOnlyHeaderBtn.classList.toggle('active', isFavMode);
      favOnlyHeaderBtn.setAttribute('aria-pressed', String(isFavMode));
    }
    if (favHeaderBtnTextEl) {
      favHeaderBtnTextEl.textContent = 'お気に入り';
    }
    if (favModeBannerEl) {
      favModeBannerEl.classList.toggle('hidden', !isFavMode);
    }
    if (favBannerCountEl) {
      favBannerCountEl.textContent = `（全 ${state.favorites.size} 件登録）`;
    }
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.level === state.level);
    });
  }

  function toggleFavOnlyMode(forceFav) {
    const nextIsFav = typeof forceFav === 'boolean' ? forceFav : state.level !== 'fav';
    state.level = nextIsFav ? 'fav' : 'all';
    state.currentIndex = 0;
    syncFavModeUI();
    renderCategoryTabs();
    renderSubcategoryBar();
    renderShortcuts();
    if (nextIsFav) {
      showToast(`★ お気に入り（${state.favorites.size}件）を開きました`);
    }
  }

  // ==========================================
  // フィルタリング処理
  // ==========================================
  function getFilteredShortcuts() {
    const query = state.searchQuery.trim().toLowerCase();
    const queryTokens = query ? query.split(/[\s+＋]+/).filter(Boolean) : [];

    return SHORTCUTS_DATA.filter(item => {
      if (state.level === 'fav') {
        if (!state.favorites.has(item.id)) return false;
      } else {
        if (queryTokens.length === 0) {
          if (state.category !== 'all' && item.category !== state.category) {
            return false;
          }
          if (state.subcategory !== 'all' && item.subcategory !== state.subcategory) {
            return false;
          }
        }
        if (state.level !== 'all' && String(item.level) !== state.level) {
          return false;
        }
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
  // 滑らかな横スクロールカルーセルによるショートカット移動
  // ==========================================
  function goToShortcutIndex(targetIdx, smooth = true) {
    const total = currentFilteredItems.length;
    if (total === 0) return;
    const normalizedIdx = ((targetIdx % total) + total) % total;
    state.currentIndex = normalizedIdx;
    syncActiveIndexUI();

    if (state.viewMode === 'swipe') {
      const trackEl = document.getElementById('swipeCarouselTrack');
      if (trackEl) {
        const slideEl = trackEl.querySelector(`[data-slide-index="${normalizedIdx}"]`);
        if (slideEl) {
          isProgrammaticScroll = true;
          trackEl.scrollTo({
            left: slideEl.offsetLeft,
            behavior: smooth ? 'smooth' : 'auto'
          });
          if (scrollDebounceTimer) clearTimeout(scrollDebounceTimer);
          scrollDebounceTimer = setTimeout(() => {
            isProgrammaticScroll = false;
          }, 420);
        }
      }
    } else if (state.viewMode === 'card') {
      const activeItem = currentFilteredItems[normalizedIdx];
      if (activeItem) {
        const cardEl = shortcutsContainerEl.querySelector(`[data-card-id="${activeItem.id}"]`);
        if (cardEl) {
          cardEl.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'center' });
        }
      }
    }
  }

  function stepShortcut(offset) {
    if (currentFilteredItems.length === 0) return;
    goToShortcutIndex(state.currentIndex + offset, true);
  }

  function syncActiveIndexUI() {
    const total = currentFilteredItems.length;
    if (total === 0) {
      if (swipePrevNameEl) swipePrevNameEl.textContent = '前へ';
      if (swipeNextNameEl) swipeNextNameEl.textContent = '次へ';
      if (swipeHintTextEl) swipeHintTextEl.textContent = '該当なし (0/0)';
      if (swipeProgressFillEl) swipeProgressFillEl.style.width = '0%';
      return;
    }

    if (state.currentIndex >= total) state.currentIndex = 0;
    const idx = state.currentIndex;
    const prevIdx = (idx - 1 + total) % total;
    const nextIdx = (idx + 1) % total;
    const currentItem = currentFilteredItems[idx];
    const prevItem = currentFilteredItems[prevIdx];
    const nextItem = currentFilteredItems[nextIdx];

    if (swipePrevNameEl && prevItem) {
      swipePrevNameEl.textContent = `${prevItem.keys.join('+')} ${prevItem.title}`;
    }
    if (swipeNextNameEl && nextItem) {
      swipeNextNameEl.textContent = `${nextItem.keys.join('+')} ${nextItem.title}`;
    }
    if (swipeHintTextEl && currentItem) {
      swipeHintTextEl.textContent = `${idx + 1} / ${total} 件目：${currentItem.title}`;
    }
    if (swipeProgressFillEl) {
      const pct = total > 1 ? Math.round(((idx + 1) / total) * 100) : 100;
      swipeProgressFillEl.style.width = `${pct}%`;
    }

    const stagePrevSub = document.getElementById('stagePrevSubText');
    const stageNextSub = document.getElementById('stageNextSubText');
    if (stagePrevSub && prevItem) {
      stagePrevSub.textContent = `${prevItem.keys.join('+')}：${prevItem.title}`;
    }
    if (stageNextSub && nextItem) {
      stageNextSub.textContent = `${nextItem.keys.join('+')}：${nextItem.title}`;
    }

    if (state.viewMode === 'card' && currentItem) {
      shortcutsContainerEl.querySelectorAll('.shortcut-card.full-visible-card').forEach(card => {
        card.classList.toggle('active-shortcut-card', card.dataset.cardId === currentItem.id);
      });
    }
  }

  // ==========================================
  // メイン一覧・スワイプカード描画
  // ==========================================
  function renderShortcuts() {
    currentFilteredItems = getFilteredShortcuts();
    const total = currentFilteredItems.length;
    resultCountNumEl.textContent = total;
    document.body.classList.toggle('is-swipe-mode', state.viewMode === 'swipe');

    if (state.currentIndex >= total) {
      state.currentIndex = 0;
    }

    const summaryParts = [];
    if (state.searchQuery.trim()) {
      summaryParts.push(`検索:「${state.searchQuery.trim()}」`);
    } else if (state.subcategory !== 'all' && state.level !== 'fav') {
      summaryParts.push(state.subcategory);
    }
    if (state.level === 'fav') summaryParts.push('★お気に入りのみ');
    else if (state.level === '3') summaryParts.push('★★★必須のみ');
    else if (state.level !== 'all') summaryParts.push(`★${state.level}`);

    activeFilterSummaryEl.textContent = summaryParts.length > 0
      ? `（${summaryParts.join(' / ')}）`
      : '';

    if (total === 0) {
      syncActiveIndexUI();
      const isFavEmpty = state.level === 'fav' && state.favorites.size === 0;
      shortcutsContainerEl.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">${isFavEmpty ? '⭐' : '🔍'}</div>
          <p class="empty-title">${isFavEmpty ? 'まだお気に入りが登録されていません' : '一致するショートカットキーが見つかりませんでした'}</p>
          <p class="empty-desc">${
            isFavEmpty
              ? '各ショートカットカードの「☆ お気に入りに追加」ボタンを押すと、ここにお気に入りだけを集めてスワイプでいつでも見返せます。'
              : '検索キーワードを変えるか、絞り込み条件をリセットしてお試しください。'
          }</p>
          <button type="button" class="reset-btn" id="resetFiltersBtn">${isFavEmpty ? 'すべてのショートカットを見る' : '条件をリセット'}</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', resetAllFilters);
      }
      return;
    }

    if (state.viewMode === 'swipe') {
      shortcutsContainerEl.innerHTML = renderSmoothSwipeCarouselView(currentFilteredItems);
      bindCarouselTrackScroll();
      if (state.currentIndex > 0) {
        goToShortcutIndex(state.currentIndex, false);
      } else {
        syncActiveIndexUI();
      }
    } else if (state.viewMode === 'table') {
      const groups = groupShortcuts(currentFilteredItems);
      shortcutsContainerEl.innerHTML = groups.map(group => renderTableGroup(group)).join('');
      syncActiveIndexUI();
    } else {
      const groups = groupShortcuts(currentFilteredItems);
      shortcutsContainerEl.innerHTML = groups.map(group => renderCardGroup(group)).join('');
      syncActiveIndexUI();
    }
  }

  // ==========================================
  // 1. スワイプ表示モード（上部に固定されたスワイプカード＋下に全件全体表示一覧）
  // ==========================================
  function renderSmoothSwipeCarouselView(items) {
    const total = items.length;

    const slidesHtml = items.map((item, itemIdx) => {
      const catMeta = CATEGORIES.find(c => c.id === item.category);
      const cardColor = catMeta ? catMeta.color : '#2563eb';
      const isFav = state.favorites.has(item.id);
      const comboText = item.keys.join(' + ');
      const shortKeyGroup = item.keyGroup ? item.keyGroup.replace(/^[①-⑩]\s*/, '').replace(/（.*?）/g, '') : '';

      return `
        <article
          class="Single-shortcut-card swipe-slide-item"
          data-slide-index="${itemIdx}"
          data-card-id="${item.id}"
          style="--card-accent: ${cardColor}"
        >
          <div class="single-card-header">
            <div class="single-card-badges">
              ${catMeta ? `<span class="section-badge" style="background:${cardColor}">${escapeHtml(catMeta.icon)} ${escapeHtml(catMeta.name)}</span>` : ''}
              <span class="single-genre-badge">${escapeHtml(item.subcategory)}</span>
              ${shortKeyGroup ? `<span class="item-func-tag">${escapeHtml(shortKeyGroup)}</span>` : ''}
            </div>
            <div class="single-card-right-top">
              <span class="single-card-counter"><strong>${itemIdx + 1}</strong>/${total}</span>
              <button
                type="button"
                class="fav-btn single-top-fav-btn ${isFav ? 'is-fav' : ''}"
                data-fav-id="${item.id}"
                title="${isFav ? 'お気に入りから解除' : 'お気に入りに追加'}"
              >${isFav ? '★' : '☆'}</button>
            </div>
          </div>

          <div class="single-card-main-head">
            <div
              class="keys-combo single-keys-combo"
              data-copy="${escapeHtml(comboText)}"
              title="タップして「${escapeHtml(comboText)}」をコピー"
            >
              ${renderKeysHtml(item.keys)}
            </div>
            <div class="single-card-title-wrap">
              <h2 class="single-card-title">${escapeHtml(item.title)}</h2>
              ${renderLevelBadge(item.level)}
            </div>
          </div>

          <p class="single-card-desc">${escapeHtml(item.desc)}</p>

          ${item.memory ? `
            <div class="card-memory single-card-memory">
              🧠 ${escapeHtml(item.memory)}
            </div>
          ` : ''}

          ${item.tip ? `
            <div class="card-tip single-card-tip">
              💡 ${escapeHtml(item.tip)}
            </div>
          ` : ''}
        </article>
      `;
    }).join('');

    // スワイプ表示カードの下にもジャンル別の全体表示カードを配置（上部固定スワイプ＋全体表示）
    const groups = groupShortcuts(items);
    const fullCardsBelowHtml = groups.map(group => renderCardGroup(group)).join('');

    return `
      <!-- 上部固定のスワイプカードステージ -->
      <div class="swipe-single-stage" id="swipeSingleStage">
        <div class="swipe-carousel-track" id="swipeCarouselTrack">
          ${slidesHtml}
        </div>
      </div>

      <!-- 下部に全ショートカットをジャンル別に全体表示 -->
      <div class="swipe-below-full-list">
        ${fullCardsBelowHtml}
      </div>
    `;
  }

  function bindCarouselTrackScroll() {
    const trackEl = document.getElementById('swipeCarouselTrack');
    if (!trackEl) return;

    let rafId = null;
    trackEl.addEventListener('scroll', () => {
      if (isProgrammaticScroll) return;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const trackCenter = trackEl.scrollLeft + (trackEl.clientWidth / 2);
        const slides = trackEl.querySelectorAll('.swipe-slide-item');
        let closestIdx = state.currentIndex;
        let minDistance = Infinity;

        slides.forEach((slide, i) => {
          const slideCenter = slide.offsetLeft + (slide.offsetWidth / 2);
          const dist = Math.abs(trackCenter - slideCenter);
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = i;
          }
        });

        if (closestIdx !== state.currentIndex) {
          state.currentIndex = closestIdx;
          syncActiveIndexUI();
        }
      });
    }, { passive: true });
  }

  // ==========================================
  // 2. 全件一覧（クリック不要で全情報を常時全体表示）
  // ==========================================
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
    if (level === 2) return `<span class="level-badge level-2" title="作業速度が上がる便利ショートカット">★★ 便利</span>`;
    return `<span class="level-badge level-1" title="知っていると差がつく玄人ワザ">★ 玄人</span>`;
  }

  function renderCardGroup(group) {
    const activeItem = currentFilteredItems[state.currentIndex];
    const cardsHtml = group.items.map(item => {
      const isFav = state.favorites.has(item.id);
      const isCurrent = activeItem && activeItem.id === item.id;
      const comboText = item.keys.join(' + ');
      const shortKeyGroup = item.keyGroup ? item.keyGroup.replace(/^[①-⑩]\s*/, '').replace(/（.*?）/g, '') : '';
      const globalIdx = currentFilteredItems.findIndex(x => x.id === item.id);

      return `
        <article
          class="shortcut-card full-visible-card ${isCurrent ? 'active-shortcut-card' : ''}"
          style="--card-accent: ${group.color}"
          data-card-id="${item.id}"
          data-jump-index="${globalIdx}"
        >
          <div class="card-top">
            <div
              class="keys-combo"
              data-copy="${escapeHtml(comboText)}"
              title="タップして「${escapeHtml(comboText)}」をコピー"
            >
              ${renderKeysHtml(item.keys)}
            </div>
            <div class="card-meta-right">
              ${shortKeyGroup ? `<span class="item-func-tag">${escapeHtml(shortKeyGroup)}</span>` : ''}
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

          ${item.memory ? `
            <div class="card-memory">
              🧠 ${escapeHtml(item.memory)}
            </div>
          ` : ''}

          ${item.tip ? `
            <div class="card-tip">
              💡 ${escapeHtml(item.tip)}
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
          <span class="section-count">${group.items.length} 件</span>
        </div>
        <div class="cards-grid full-cards-grid">
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
            ${item.memory ? `<br><span class="table-memory-line">🧠 ${escapeHtml(item.memory)}</span>` : ''}
            ${item.tip ? `<br><span class="table-tip-line">💡 ${escapeHtml(item.tip)}</span>` : ''}
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
    const isNowFav = !state.favorites.has(id);
    if (!isNowFav) {
      state.favorites.delete(id);
      showToast('お気に入りから解除しました');
    } else {
      state.favorites.add(id);
      showToast('★ お気に入りに追加しました');
    }
    localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(Array.from(state.favorites)));
    updateFavBadge();
    syncFavModeUI();

    if (state.level === 'fav') {
      renderShortcuts();
    } else {
      shortcutsContainerEl.querySelectorAll(`[data-fav-id="${id}"]`).forEach(btn => {
        btn.classList.toggle('is-fav', isNowFav);
        btn.textContent = isNowFav ? '★' : '☆';
      });
    }
  }

  function updateFavBadge() {
    const count = state.favorites.size;
    if (favCountBadgeEl) favCountBadgeEl.textContent = count;
    if (favCountBadgeChipEl) favCountBadgeChipEl.textContent = count;
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
    }, 2000);
  }

  function resetAllFilters() {
    state.subcategory = 'all';
    state.level = 'all';
    state.searchQuery = '';
    state.currentIndex = 0;
    searchInputEl.value = '';
    clearSearchBtnEl.classList.add('hidden');

    syncFavModeUI();
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
      if (state.level === 'fav') {
        state.level = 'all';
        syncFavModeUI();
      }
      state.currentIndex = 0;
      renderCategoryTabs();
      renderSubcategoryBar();
      renderShortcuts();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ヘッダー「★ お気に入り」ボタン
    if (favOnlyHeaderBtn) {
      favOnlyHeaderBtn.addEventListener('click', () => {
        toggleFavOnlyMode();
      });
    }
    if (exitFavModeBtn) {
      exitFavModeBtn.addEventListener('click', () => {
        toggleFavOnlyMode(false);
      });
    }

    // 検索パネル開閉トグル
    if (toggleSearchPanelBtn && controlsBarEl) {
      toggleSearchPanelBtn.addEventListener('click', () => {
        const isHidden = controlsBarEl.classList.toggle('hidden');
        toggleSearchPanelBtn.classList.toggle('active', !isHidden);
        toggleSearchPanelBtn.setAttribute('aria-expanded', String(!isHidden));
        if (!isHidden) {
          setTimeout(() => searchInputEl.focus(), 50);
        }
      });
    }

    // 覚え方6大法則パネル開閉トグル
    if (toggleRulesBtn && memoryRulesPanelEl) {
      toggleRulesBtn.addEventListener('click', () => {
        const isHidden = memoryRulesPanelEl.classList.toggle('hidden');
        toggleRulesBtn.classList.toggle('active', !isHidden);
        toggleRulesBtn.setAttribute('aria-expanded', String(!isHidden));
      });
    }
    if (closeRulesBtn && memoryRulesPanelEl) {
      closeRulesBtn.addEventListener('click', () => {
        memoryRulesPanelEl.classList.add('hidden');
        if (toggleRulesBtn) {
          toggleRulesBtn.classList.remove('active');
          toggleRulesBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // 下部バー 前後ショートカット切替ボタン
    if (swipePrevBtn) {
      swipePrevBtn.addEventListener('click', () => stepShortcut(-1));
    }
    if (swipeNextBtn) {
      swipeNextBtn.addEventListener('click', () => stepShortcut(1));
    }

    // サブカテゴリ（ジャンル）切替
    subcategoryBarEl.addEventListener('click', e => {
      const btn = e.target.closest('.subcat-pill');
      if (!btn) return;
      state.subcategory = btn.dataset.subcat;
      state.currentIndex = 0;
      renderSubcategoryBar();
      renderShortcuts();
    });

    // 重要度・お気に入りフィルタ
    levelFiltersEl.addEventListener('click', e => {
      const btn = e.target.closest('.filter-chip');
      if (!btn) return;
      state.level = btn.dataset.level;
      state.currentIndex = 0;
      syncFavModeUI();
      renderCategoryTabs();
      renderSubcategoryBar();
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
      state.currentIndex = 0;
      clearSearchBtnEl.classList.toggle('hidden', !state.searchQuery);
      renderShortcuts();
    });

    clearSearchBtnEl.addEventListener('click', () => {
      state.searchQuery = '';
      state.currentIndex = 0;
      searchInputEl.value = '';
      clearSearchBtnEl.classList.add('hidden');
      searchInputEl.focus();
      renderShortcuts();
    });

    // コンテナ内クリック（お気に入り・コピー・カード選択ジャンプ）
    shortcutsContainerEl.addEventListener('click', e => {
      const favBtn = e.target.closest('.fav-btn');
      if (favBtn && favBtn.dataset.favId) {
        e.stopPropagation();
        toggleFavorite(favBtn.dataset.favId);
        return;
      }

      const comboEl = e.target.closest('.keys-combo');
      if (comboEl && comboEl.dataset.copy) {
        e.stopPropagation();
        copyShortcutText(comboEl.dataset.copy);
        return;
      }

      const jumpCard = e.target.closest('[data-jump-index]');
      if (jumpCard && state.viewMode === 'swipe') {
        const targetIdx = Number(jumpCard.dataset.jumpIndex);
        if (!Number.isNaN(targetIdx) && targetIdx >= 0) {
          goToShortcutIndex(targetIdx, true);
        }
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
      state.currentIndex = 0;
      searchInputEl.value = '';
      clearSearchBtnEl.classList.add('hidden');
      renderShortcuts();
    });

    // グローバルキーボード操作
    window.addEventListener('keydown', e => {
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
          state.currentIndex = 0;
          searchInputEl.value = query;
          clearSearchBtnEl.classList.remove('hidden');
          renderShortcuts();
        }
        return;
      }

      const isTyping = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);

      if (!isTyping && !e.ctrlKey && !e.altKey && !e.metaKey) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          stepShortcut(1);
          return;
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          stepShortcut(-1);
          return;
        }
      }

      if (e.key === '/' && !isTyping && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        if (controlsBarEl) controlsBarEl.classList.remove('hidden');
        searchInputEl.focus();
        searchInputEl.select();
        return;
      }

      if (e.key === 'Escape') {
        if (state.searchQuery) {
          state.searchQuery = '';
          state.currentIndex = 0;
          searchInputEl.value = '';
          clearSearchBtnEl.classList.add('hidden');
          renderShortcuts();
        }
        if (isTyping) {
          document.activeElement.blur();
        }
      }
    });
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

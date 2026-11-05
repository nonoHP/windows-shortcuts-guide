(() => {
  'use strict';

  const STORAGE_KEY_TIPS_FAVS = 'win_tips_favorites_v1';
  const STORAGE_KEY_THEME = 'win_shortcuts_theme_v1';
  const STORAGE_KEY_VIEW = 'win_shortcuts_view_v2';

  const state = {
    category: 'win11_os',
    subcategory: 'all',
    level: 'all',
    searchQuery: '',
    viewMode: localStorage.getItem(STORAGE_KEY_VIEW) || 'swipe',
    favorites: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY_TIPS_FAVS) || '[]')),
    isRandomMode: false,
    randomItems: [],
    currentIndex: 0
  };

  const categoryTabsEl = document.getElementById('categoryTabs');
  const activeCategoryLabelEl = document.getElementById('activeCategoryLabel');
  const controlsBarEl = document.getElementById('controlsBar');
  const searchInputEl = document.getElementById('searchInput');
  const clearSearchBtnEl = document.getElementById('clearSearchBtn');

  const subcatSelectWrapEl = document.getElementById('subcatSelectWrap');
  const subcatSelectEl = document.getElementById('subcatSelect');
  const levelSelectEl = document.getElementById('levelSelect');

  const favCountBadgeEl = document.getElementById('favCountBadge');
  const favOnlyHeaderBtn = document.getElementById('favOnlyHeaderBtn');
  const favModeBannerEl = document.getElementById('favModeBanner');
  const favBannerCountEl = document.getElementById('favBannerCount');
  const exitFavModeBtn = document.getElementById('exitFavModeBtn');

  const randomHeaderBtn = document.getElementById('randomHeaderBtn');
  const randomModeBannerEl = document.getElementById('randomModeBanner');
  const nextRandomBtn = document.getElementById('nextRandomBtn');
  const exitRandomModeBtn = document.getElementById('exitRandomModeBtn');
  const swipeRandomFabBtn = document.getElementById('swipeRandomFabBtn');

  const resultCountNumEl = document.getElementById('resultCountNum');
  const activeFilterSummaryEl = document.getElementById('activeFilterSummary');
  const tipsContainerEl = document.getElementById('tipsContainer');
  const toastEl = document.getElementById('toast');

  const toggleSearchPanelBtn = document.getElementById('toggleSearchPanelBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIconEl = document.getElementById('themeIcon');
  const printBtn = document.getElementById('printBtn');

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

  function init() {
    initTheme();
    initViewSwitcher();
    renderCategoryTabs();
    renderSubcategorySelect();
    updateFavBadge();
    renderTips();
    bindEvents();
  }

  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY_THEME);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIconEl) themeIconEl.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem(STORAGE_KEY_THEME, theme);
  }

  function initViewSwitcher() {
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === state.viewMode);
    });
    document.body.classList.toggle('is-swipe-mode', state.viewMode === 'swipe');
  }

  function renderCategoryTabs() {
    const isFavMode = state.level === 'fav';
    const isRandom = state.isRandomMode;
    categoryTabsEl.innerHTML = TIPS_CATEGORIES.map(cat => {
      const isActive = !isFavMode && !isRandom && state.category === cat.id;
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
        </button>
      `;
    }).join('');

    const currentCat = TIPS_CATEGORIES.find(c => c.id === state.category);
    if (activeCategoryLabelEl) {
      if (isRandom) {
        activeCategoryLabelEl.innerHTML = `<span class="active-cat-dot" style="background:#8b5cf6"></span>🎲 全カテゴリ・ランダム順: `;
      } else if (isFavMode) {
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

  function renderSubcategorySelect() {
    if (!subcatSelectEl || !subcatSelectWrapEl) return;

    if (state.category === 'all' || state.level === 'fav' || state.isRandomMode) {
      subcatSelectWrapEl.classList.add('hidden');
      return;
    }

    const targetItems = TIPS_DATA.filter(item => item.category === state.category);
    const subcats = Array.from(new Set(targetItems.map(item => item.subcategory)));

    if (subcats.length <= 1) {
      subcatSelectWrapEl.classList.add('hidden');
      return;
    }

    subcatSelectWrapEl.classList.remove('hidden');
    subcatSelectEl.innerHTML = [
      `<option value="all" ${state.subcategory === 'all' ? 'selected' : ''}>ジャンル: すべて (${targetItems.length})</option>`,
      ...subcats.map(sub => {
        const cnt = targetItems.filter(i => i.subcategory === sub).length;
        return `<option value="${escapeHtml(sub)}" ${state.subcategory === sub ? 'selected' : ''}>${escapeHtml(sub)} (${cnt})</option>`;
      })
    ].join('');
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function activateRandomTips() {
    state.isRandomMode = true;
    state.level = 'all';
    state.subcategory = 'all';
    state.searchQuery = '';
    if (searchInputEl) searchInputEl.value = '';
    if (clearSearchBtnEl) clearSearchBtnEl.classList.add('hidden');
    if (levelSelectEl) levelSelectEl.value = 'all';

    state.randomItems = shuffleArray(TIPS_DATA);
    state.currentIndex = 0;

    syncFavModeUI();
    syncRandomModeUI();
    renderCategoryTabs();
    renderSubcategorySelect();
    renderTips();

    const picked = state.randomItems[0];
    if (picked) {
      showToast(`🎲 ランダム選出：${picked.title}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function exitRandomMode() {
    state.isRandomMode = false;
    state.randomItems = [];
    state.currentIndex = 0;
    syncRandomModeUI();
    renderCategoryTabs();
    renderSubcategorySelect();
    renderTips();
    showToast('通常のジャンル順表示に戻しました');
  }

  function syncRandomModeUI() {
    const isRand = state.isRandomMode;
    if (randomHeaderBtn) {
      randomHeaderBtn.classList.toggle('active', isRand);
      randomHeaderBtn.setAttribute('aria-pressed', String(isRand));
    }
    if (randomModeBannerEl) {
      randomModeBannerEl.classList.toggle('hidden', !isRand);
    }
  }

  function syncFavModeUI() {
    const isFavMode = state.level === 'fav';
    if (favOnlyHeaderBtn) {
      favOnlyHeaderBtn.classList.toggle('active', isFavMode);
      favOnlyHeaderBtn.setAttribute('aria-pressed', String(isFavMode));
    }
    if (favModeBannerEl) {
      favModeBannerEl.classList.toggle('hidden', !isFavMode);
    }
    if (favBannerCountEl) {
      favBannerCountEl.textContent = `（全 ${state.favorites.size} 件登録）`;
    }
    if (levelSelectEl && levelSelectEl.value !== state.level) {
      levelSelectEl.value = state.level;
    }
  }

  function toggleFavOnlyMode(forceFav) {
    const nextIsFav = typeof forceFav === 'boolean' ? forceFav : state.level !== 'fav';
    if (nextIsFav) {
      state.isRandomMode = false;
      syncRandomModeUI();
    }
    state.level = nextIsFav ? 'fav' : 'all';
    state.currentIndex = 0;
    syncFavModeUI();
    renderCategoryTabs();
    renderSubcategorySelect();
    renderTips();
    if (nextIsFav) {
      showToast(`★ お気に入り（${state.favorites.size}件）を開きました`);
    }
  }

  function getFilteredTips() {
    if (state.isRandomMode && !state.searchQuery.trim() && state.level === 'all') {
      if (state.randomItems.length === 0) {
        state.randomItems = shuffleArray(TIPS_DATA);
      }
      return state.randomItems;
    }

    const query = state.searchQuery.trim().toLowerCase();
    const queryTokens = query ? query.split(/[\s+＋]+/).filter(Boolean) : [];

    return TIPS_DATA.filter(item => {
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
          item.howTo,
          item.desc,
          item.tip || '',
          item.point || '',
          item.subcategory
        ].join(' ').toLowerCase();

        return queryTokens.every(token => searchableText.includes(token));
      }

      return true;
    });
  }

  function goToTipIndex(targetIdx, smooth = true) {
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
        const cardEl = tipsContainerEl.querySelector(`[data-card-id="${activeItem.id}"]`);
        if (cardEl) {
          cardEl.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'center' });
        }
      }
    }
  }

  function stepTip(offset) {
    if (currentFilteredItems.length === 0) return;
    goToTipIndex(state.currentIndex + offset, true);
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
      swipePrevNameEl.textContent = prevItem.title;
    }
    if (swipeNextNameEl && nextItem) {
      swipeNextNameEl.textContent = nextItem.title;
    }
    if (swipeHintTextEl && currentItem) {
      swipeHintTextEl.textContent = `${idx + 1} / ${total} 件目：${currentItem.title}`;
    }
    if (swipeProgressFillEl) {
      const pct = total > 1 ? Math.round(((idx + 1) / total) * 100) : 100;
      swipeProgressFillEl.style.width = `${pct}%`;
    }

    if (state.viewMode === 'card' && currentItem) {
      tipsContainerEl.querySelectorAll('.shortcut-card.full-visible-card').forEach(card => {
        card.classList.toggle('active-shortcut-card', card.dataset.cardId === currentItem.id);
      });
    }
  }

  function renderTips() {
    currentFilteredItems = getFilteredTips();
    const total = currentFilteredItems.length;
    resultCountNumEl.textContent = total;
    document.body.classList.toggle('is-swipe-mode', state.viewMode === 'swipe');

    if (state.currentIndex >= total) {
      state.currentIndex = 0;
    }

    const summaryParts = [];
    if (state.isRandomMode) {
      summaryParts.push('🎲 ランダムシャッフル中');
    } else if (state.searchQuery.trim()) {
      summaryParts.push(`検索:「${state.searchQuery.trim()}」`);
    } else if (state.subcategory !== 'all' && state.level !== 'fav') {
      summaryParts.push(state.subcategory);
    }
    if (state.level === 'fav') summaryParts.push('★お気に入りのみ');
    else if (state.level === '3') summaryParts.push('★★★必須ワザのみ');
    else if (state.level === '2') summaryParts.push('★★便利ワザのみ');
    else if (state.level === '1') summaryParts.push('★裏ワザのみ');

    activeFilterSummaryEl.textContent = summaryParts.length > 0
      ? `（${summaryParts.join(' / ')}）`
      : '';

    if (total === 0) {
      syncActiveIndexUI();
      const isFavEmpty = state.level === 'fav' && state.favorites.size === 0;
      tipsContainerEl.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">${isFavEmpty ? '⭐' : '🔍'}</div>
          <p class="empty-title">${isFavEmpty ? 'まだお気に入りの小技が登録されていません' : '一致する便利小技が見つかりませんでした'}</p>
          <p class="empty-desc">${
            isFavEmpty
              ? '各小技カードの「☆」ボタンを押すと、ここにお気に入りだけを集めていつでも見返せます。'
              : '検索キーワードを変えるか、絞り込み条件をリセットしてお試しください。'
          }</p>
          <button type="button" class="reset-btn" id="resetFiltersBtn">${isFavEmpty ? 'すべての小技を見る' : '条件をリセット'}</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', resetAllFilters);
      }
      return;
    }

    if (state.viewMode === 'swipe') {
      tipsContainerEl.innerHTML = renderSmoothSwipeCarouselView(currentFilteredItems);
      bindCarouselTrackScroll();
      if (state.currentIndex > 0) {
        goToTipIndex(state.currentIndex, false);
      } else {
        syncActiveIndexUI();
      }
    } else if (state.viewMode === 'table') {
      const groups = state.isRandomMode
        ? [{
            key: 'random_all',
            categoryName: '全カテゴリ横断',
            categoryIcon: '🎲',
            color: '#8b5cf6',
            subcategory: 'ランダムシャッフル一覧',
            items: currentFilteredItems
          }]
        : groupTips(currentFilteredItems);
      tipsContainerEl.innerHTML = groups.map(group => renderTableGroup(group)).join('');
      syncActiveIndexUI();
    } else {
      const groups = state.isRandomMode
        ? [{
            key: 'random_all',
            categoryName: '全カテゴリ横断',
            categoryIcon: '🎲',
            color: '#8b5cf6',
            subcategory: 'ランダムシャッフル一覧',
            items: currentFilteredItems
          }]
        : groupTips(currentFilteredItems);
      tipsContainerEl.innerHTML = groups.map(group => renderCardGroup(group)).join('');
      syncActiveIndexUI();
    }
  }

  function renderSmoothSwipeCarouselView(items) {
    const total = items.length;

    const slidesHtml = items.map((item, itemIdx) => {
      const catMeta = TIPS_CATEGORIES.find(c => c.id === item.category);
      const cardColor = catMeta ? catMeta.color : '#2563eb';
      const isFav = state.favorites.has(item.id);

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
            </div>
            <div class="single-card-right-top">
              <span class="single-card-counter"><strong>${itemIdx + 1}</strong> / ${total}</span>
              ${renderLevelBadge(item.level)}
              <button
                type="button"
                class="fav-btn single-top-fav-btn ${isFav ? 'is-fav' : ''}"
                data-fav-id="${item.id}"
                title="${isFav ? 'お気に入りから解除' : 'お気に入りに追加'}"
              >${isFav ? '★' : '☆'}</button>
            </div>
          </div>

          <div class="card-title-banner">
            <h2 class="single-card-title">${escapeHtml(item.title)}</h2>
          </div>

          <div class="howto-action-box" data-copy="${escapeHtml(item.howTo)}" title="タップして手順をコピー">
            <span class="howto-badge">👆 やり方・場所</span>
            <span class="howto-text">${escapeHtml(item.howTo)}</span>
          </div>

          <div class="card-desc-box">
            <p class="single-card-desc">${escapeHtml(item.desc)}</p>
          </div>

          ${item.point ? `
            <div class="card-memory single-card-memory">
              🎯 ${escapeHtml(item.point)}
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

    const groups = state.isRandomMode
      ? [{
          key: 'random_all',
          categoryName: '全カテゴリ横断',
          categoryIcon: '🎲',
          color: '#8b5cf6',
          subcategory: 'ランダムシャッフル一覧（タップで上のカードへ連動）',
          items
        }]
      : groupTips(items);
    const fullCardsBelowHtml = groups.map(group => renderCardGroup(group)).join('');

    return `
      <div class="swipe-single-stage" id="swipeSingleStage">
        <div class="swipe-carousel-track" id="swipeCarouselTrack">
          ${slidesHtml}
        </div>
      </div>

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

  function groupTips(items) {
    const map = new Map();

    items.forEach(item => {
      const catMeta = TIPS_CATEGORIES.find(c => c.id === item.category);
      const groupKey = `${item.category}__${item.subcategory}`;

      if (!map.has(groupKey)) {
        map.set(groupKey, {
          key: groupKey,
          categoryName: catMeta ? catMeta.name : item.category,
          categoryIcon: catMeta ? catMeta.icon : '💡',
          color: catMeta ? catMeta.color : '#2563eb',
          subcategory: item.subcategory,
          items: []
        });
      }
      map.get(groupKey).items.push(item);
    });

    return Array.from(map.values());
  }

  function renderLevelBadge(level) {
    if (level === 3) return `<span class="level-badge level-3">★★★ 必須</span>`;
    if (level === 2) return `<span class="level-badge level-2">★★ 便利</span>`;
    return `<span class="level-badge level-1">★ 裏ワザ</span>`;
  }

  function renderCardGroup(group) {
    const activeItem = currentFilteredItems[state.currentIndex];
    const cardsHtml = group.items.map(item => {
      const catMeta = TIPS_CATEGORIES.find(c => c.id === item.category);
      const cardColor = catMeta ? catMeta.color : group.color;
      const isFav = state.favorites.has(item.id);
      const isCurrent = activeItem && activeItem.id === item.id;
      const globalIdx = currentFilteredItems.findIndex(x => x.id === item.id);

      return `
        <article
          class="shortcut-card full-visible-card ${isCurrent ? 'active-shortcut-card' : ''}"
          style="--card-accent: ${cardColor}"
          data-card-id="${item.id}"
          data-jump-index="${globalIdx}"
        >
          <div class="card-title-header">
            <h3 class="card-title">${escapeHtml(item.title)}</h3>
            <div class="card-meta-right">
              ${state.isRandomMode && catMeta ? `<span class="section-badge" style="background:${cardColor}">${escapeHtml(catMeta.icon)} ${escapeHtml(catMeta.name)}</span>` : ''}
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

          <div class="howto-action-box" data-copy="${escapeHtml(item.howTo)}" title="タップして手順をコピー">
            <span class="howto-badge">👆 やり方・場所</span>
            <span class="howto-text">${escapeHtml(item.howTo)}</span>
          </div>

          <div class="card-desc-box">
            <p class="card-desc">${escapeHtml(item.desc)}</p>
          </div>

          ${item.point ? `
            <div class="card-memory">
              🎯 ${escapeHtml(item.point)}
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
      return `
        <tr>
          <td class="table-title-cell">${escapeHtml(item.title)}</td>
          <td class="table-desc-cell">
            <strong>👆 ${escapeHtml(item.howTo)}</strong><br>
            ${escapeHtml(item.desc)}
            ${item.point ? `<br><span class="table-memory-line">🎯 ${escapeHtml(item.point)}</span>` : ''}
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
                <th>小技・便利機能タイトル</th>
                <th>操作方法・詳細解説</th>
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

  function toggleFavorite(id) {
    const isNowFav = !state.favorites.has(id);
    if (!isNowFav) {
      state.favorites.delete(id);
      showToast('お気に入りから解除しました');
    } else {
      state.favorites.add(id);
      showToast('★ お気に入りに追加しました');
    }
    localStorage.setItem(STORAGE_KEY_TIPS_FAVS, JSON.stringify(Array.from(state.favorites)));
    updateFavBadge();
    syncFavModeUI();

    if (state.level === 'fav') {
      renderTips();
    } else {
      tipsContainerEl.querySelectorAll(`[data-fav-id="${id}"]`).forEach(btn => {
        btn.classList.toggle('is-fav', isNowFav);
        btn.textContent = isNowFav ? '★' : '☆';
      });
    }
  }

  function updateFavBadge() {
    if (favCountBadgeEl) favCountBadgeEl.textContent = state.favorites.size;
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`📋 手順「${text}」をコピーしました`);
      });
    }
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
    state.isRandomMode = false;
    state.randomItems = [];
    state.subcategory = 'all';
    state.level = 'all';
    state.searchQuery = '';
    state.currentIndex = 0;
    if (searchInputEl) searchInputEl.value = '';
    if (clearSearchBtnEl) clearSearchBtnEl.classList.add('hidden');
    if (levelSelectEl) levelSelectEl.value = 'all';

    syncFavModeUI();
    syncRandomModeUI();
    renderCategoryTabs();
    renderSubcategorySelect();
    renderTips();
  }

  function bindEvents() {
    categoryTabsEl.addEventListener('click', e => {
      const btn = e.target.closest('.cat-tab');
      if (!btn) return;
      state.isRandomMode = false;
      state.randomItems = [];
      syncRandomModeUI();

      state.category = btn.dataset.cat;
      state.subcategory = 'all';
      if (state.level === 'fav') {
        state.level = 'all';
        syncFavModeUI();
      }
      state.currentIndex = 0;
      renderCategoryTabs();
      renderSubcategorySelect();
      renderTips();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    if (randomHeaderBtn) randomHeaderBtn.addEventListener('click', activateRandomTips);
    if (nextRandomBtn) nextRandomBtn.addEventListener('click', activateRandomTips);
    if (swipeRandomFabBtn) swipeRandomFabBtn.addEventListener('click', activateRandomTips);
    if (exitRandomModeBtn) exitRandomModeBtn.addEventListener('click', exitRandomMode);

    if (favOnlyHeaderBtn) favOnlyHeaderBtn.addEventListener('click', () => toggleFavOnlyMode());
    if (exitFavModeBtn) exitFavModeBtn.addEventListener('click', () => toggleFavOnlyMode(false));

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

    if (swipePrevBtn) swipePrevBtn.addEventListener('click', () => stepTip(-1));
    if (swipeNextBtn) swipeNextBtn.addEventListener('click', () => stepTip(1));

    if (subcatSelectEl) {
      subcatSelectEl.addEventListener('change', () => {
        state.subcategory = subcatSelectEl.value;
        state.currentIndex = 0;
        renderTips();
      });
    }

    if (levelSelectEl) {
      levelSelectEl.addEventListener('change', () => {
        const nextLevel = levelSelectEl.value;
        if (nextLevel === 'fav') {
          state.isRandomMode = false;
          syncRandomModeUI();
        }
        state.level = nextLevel;
        state.currentIndex = 0;
        syncFavModeUI();
        renderCategoryTabs();
        renderSubcategorySelect();
        renderTips();
      });
    }

    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.viewMode = btn.dataset.view;
        localStorage.setItem(STORAGE_KEY_VIEW, state.viewMode);
        initViewSwitcher();
        renderTips();
      });
    });

    searchInputEl.addEventListener('input', () => {
      state.searchQuery = searchInputEl.value;
      state.currentIndex = 0;
      clearSearchBtnEl.classList.toggle('hidden', !state.searchQuery);
      renderTips();
    });

    clearSearchBtnEl.addEventListener('click', () => {
      state.searchQuery = '';
      state.currentIndex = 0;
      searchInputEl.value = '';
      clearSearchBtnEl.classList.add('hidden');
      searchInputEl.focus();
      renderTips();
    });

    tipsContainerEl.addEventListener('click', e => {
      const favBtn = e.target.closest('.fav-btn');
      if (favBtn && favBtn.dataset.favId) {
        e.stopPropagation();
        toggleFavorite(favBtn.dataset.favId);
        return;
      }

      const howtoEl = e.target.closest('.howto-action-box');
      if (howtoEl && howtoEl.dataset.copy) {
        e.stopPropagation();
        copyText(howtoEl.dataset.copy);
        return;
      }

      const jumpCard = e.target.closest('[data-jump-index]');
      if (jumpCard && state.viewMode === 'swipe') {
        const targetIdx = Number(jumpCard.dataset.jumpIndex);
        if (!Number.isNaN(targetIdx) && targetIdx >= 0) {
          goToTipIndex(targetIdx, true);
        }
      }
    });

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    if (printBtn) {
      printBtn.addEventListener('click', () => window.print());
    }

    window.addEventListener('keydown', e => {
      const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
      if (!isTyping && !e.ctrlKey && !e.altKey && !e.metaKey) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          stepTip(1);
          return;
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          stepTip(-1);
          return;
        }
        if (e.key === '/') {
          e.preventDefault();
          if (controlsBarEl) controlsBarEl.classList.remove('hidden');
          searchInputEl.focus();
          searchInputEl.select();
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


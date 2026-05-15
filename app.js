// ===================================================================
// 中国 AI 司法实践案例图 · 主程序 (v3)
// 编辑说明：一般不需改此文件
// v3 更新：
//   1. 地图省份按地理大区分色（华北/东北/华东/华中/华南/西南/西北/港澳台）
//   2. 案件卡左侧增加"头像位"——有 image 字段时显示图片，否则显示占位
//   3. 中英切换完全干净——选定语言后不再混入另一种语言
//   4. 第四个统计变成"宋律师专栏"入口，点开弹窗显示文章列表
//   5. 已移除"团队评注"相关逻辑
// ===================================================================

// ---- 状态 ----
const state = {
  view: 'overview',          // 'overview' | 'province' | 'court'
  selectedProvince: null,
  selectedCourt: null,
  lang: 'zh',
  filterYear: 'all',
  filterIssue: new Set(),
  filterTech: new Set(),
  searchText: ''
};

// ---- 工具函数 ----

// 当前语言
function L() { return state.lang; }

// 获取省份在地图上的可见案件数（北京特殊：含最高法）
function getProvinceMapCount(provinceName) {
  if (provinceName === '北京市') {
    return CASES.filter(c => c.province === '北京市' || c.province === '最高人民法院').length;
  }
  return CASES.filter(c => c.province === provinceName).length;
}

// 获取省份下的所有案件（北京特殊：含最高法）
function getCasesInProvince(provinceName) {
  if (provinceName === '北京市') {
    return CASES.filter(c => c.province === '北京市' || c.province === '最高人民法院');
  }
  return CASES.filter(c => c.province === provinceName);
}

// 获取省份下的法院列表（按案件数排序）
function getCourtsInProvince(provinceName) {
  const cases = getCasesInProvince(provinceName);
  const grouped = {};
  cases.forEach(c => {
    const key = c.city || c.province;
    if (!grouped[key]) grouped[key] = { name: key, cases: [], special: c.province === '最高人民法院' };
    grouped[key].cases.push(c);
  });
  return Object.values(grouped).sort((a, b) => {
    if (a.special) return -1;  // 最高法置顶
    if (b.special) return 1;
    return b.cases.length - a.cases.length;
  });
}

// 应用筛选
function applyFilters(pool) {
  if (state.filterYear !== 'all') {
    pool = pool.filter(c => String(c.year) === state.filterYear);
  }
  if (state.filterIssue.size > 0) {
    pool = pool.filter(c => state.filterIssue.has(c.issue));
  }
  if (state.filterTech.size > 0) {
    pool = pool.filter(c => c.tech.some(t => state.filterTech.has(t)));
  }
  if (state.searchText.trim()) {
    const q = state.searchText.trim().toLowerCase();
    pool = pool.filter(c =>
      c.title_zh.toLowerCase().includes(q) ||
      (c.title_en || '').toLowerCase().includes(q) ||
      (c.caseNumber || '').toLowerCase().includes(q) ||
      (c.city || '').toLowerCase().includes(q) ||
      c.tech.some(t => t.toLowerCase().includes(q))
    );
  }
  return pool;
}

// 取最终展示案件列表
function getDisplayCases() {
  let pool;
  if (state.view === 'court' && state.selectedCourt) {
    pool = getCasesInProvince(state.selectedProvince).filter(c =>
      (c.city || c.province) === state.selectedCourt
    );
  } else if (state.view === 'province' && state.selectedProvince) {
    pool = getCasesInProvince(state.selectedProvince);
  } else {
    pool = [...CASES];
  }
  pool = applyFilters(pool);
  return pool.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return (a.title_zh || '').localeCompare(b.title_zh || '', 'zh');
  });
}

// 名称翻译
function provinceName(zhName) {
  const entry = PROVINCE_I18N[zhName];
  if (!entry) return zhName;
  return L() === 'en' ? entry.en : entry.zh;
}
function courtName(zhName) {
  if (!zhName) return '';
  if (L() === 'en') return COURT_I18N[zhName] || zhName;
  return zhName;
}
function issueName(zh) {
  if (L() === 'en') return ISSUE_I18N[zh] || zh;
  return zh;
}
function techName(zh) {
  if (L() === 'en') return TECH_I18N[zh] || zh;
  return zh;
}

// 案件标题（按语言）
function caseTitle(c) {
  if (L() === 'en' && c.title_en) return c.title_en;
  return c.title_zh;
}
// 案件裁判要旨（按语言）
function caseNote(c) {
  if (L() === 'en' && c.note_en) return c.note_en;
  if (L() === 'zh') return c.note_zh || '';
  // 英文模式但没有英文备注 → 不显示中文，保持干净
  return c.note_en || '';
}

// 案件头像 / 占位
function caseImageHTML(c) {
  if (c.image && c.image.trim()) {
    return `<img class="case-headshot-img" src="${c.image}" alt="" loading="lazy" />`;
  }
  // 占位：用案件中文标题首字 + 争议焦点配色
  const titleChar = (c.title_zh || c.title_en || '案').trim().charAt(0);
  const bg = ISSUE_COLOR[c.issue] || '#888888';
  return `<div class="case-headshot-placeholder" style="background:${bg};">${titleChar}</div>`;
}

// ============================================================
// 渲染：顶部统计
// ============================================================
function renderStats() {
  document.getElementById('stat-cases').textContent = CASES.length;
  const courts = new Set(CASES.map(c => c.city || c.province));
  document.getElementById('stat-courts').textContent = courts.size;
  // stat-issues 已是固定 7
  // stat-column 是按钮，不需要数字
}

// ============================================================
// 渲染：地图（按地理大区分色）
// ============================================================
function renderMap() {
  const svg = d3.select('#china-map');
  svg.selectAll('*').remove();

  const isCompact = state.view !== 'overview';
  const width = 800;
  const height = isCompact ? 500 : 600;

  svg.attr('viewBox', `0 0 ${width} ${height}`);

  const projection = d3.geoMercator()
    .center([104, 36])
    .scale(isCompact ? 540 : 620)
    .translate([width / 2, height / 2 + 20]);

  const path = d3.geoPath().projection(projection);

  const g = svg.append('g');

  const groups = g.selectAll('.province-group')
    .data(CHINA_GEO.features)
    .enter()
    .append('g')
    .attr('class', 'province-group');

  groups.append('path')
    .attr('class', d => {
      const name = d.properties.name;
      const count = getProvinceMapCount(name);
      const cls = ['province'];
      if (count === 0) cls.push('empty');
      if (state.selectedProvince === name) cls.push('active');
      return cls.join(' ');
    })
    // 按大区填色（被选中时由 .active 覆盖）
    .attr('fill', d => {
      const name = d.properties.name;
      const count = getProvinceMapCount(name);
      if (count === 0) return null;  // 让 CSS .empty 接管
      if (state.selectedProvince === name) return null;  // 让 CSS .active 接管
      const region = REGION_OF_PROVINCE[name];
      return REGION_COLORS[region] || REGION_COLORS['outlying'];
    })
    .attr('d', path)
    .attr('data-name', d => d.properties.name)
    .on('mouseover', function(event, d) {
      const name = d.properties.name;
      const count = getProvinceMapCount(name);
      if (count === 0) return;
      showTooltip(event, provinceName(name), count);
    })
    .on('mousemove', function(event) { moveTooltip(event); })
    .on('mouseout', function() { hideTooltip(); })
    .on('click', function(event, d) {
      const name = d.properties.name;
      const count = getProvinceMapCount(name);
      if (count === 0) return;

      if (state.selectedProvince === name) {
        state.selectedProvince = null;
        state.selectedCourt = null;
        state.view = 'overview';
      } else {
        state.selectedProvince = name;
        state.selectedCourt = null;
        state.view = 'province';
      }
      hideTooltip();
      updateAll();
    });

  // 标签
  groups.append('text')
    .attr('class', d => {
      return state.selectedProvince === d.properties.name ? 'province-label active' : 'province-label';
    })
    .attr('x', d => projection(d.properties.cp)[0])
    .attr('y', d => projection(d.properties.cp)[1])
    .text(d => {
      const count = getProvinceMapCount(d.properties.name);
      if (count === 0) return '';
      return provinceName(d.properties.name);
    });

  // 案件数徽章
  const withCases = groups.filter(d => getProvinceMapCount(d.properties.name) > 0);

  withCases.append('circle')
    .attr('cx', d => projection(d.properties.cp)[0])
    .attr('cy', d => projection(d.properties.cp)[1] + 12)
    .attr('r', 8)
    .attr('fill', d => state.selectedProvince === d.properties.name ? '#B8956A' : '#1A1A1A')
    .attr('stroke', '#FFFFFF')
    .attr('stroke-width', 1.5)
    .style('pointer-events', 'none');

  withCases.append('text')
    .attr('x', d => projection(d.properties.cp)[0])
    .attr('y', d => projection(d.properties.cp)[1] + 15)
    .attr('text-anchor', 'middle')
    .attr('font-family', 'IBM Plex Mono, monospace')
    .attr('font-size', '9.5px')
    .attr('font-weight', '600')
    .attr('fill', '#FFFFFF')
    .text(d => getProvinceMapCount(d.properties.name))
    .style('pointer-events', 'none');
}

// 渲染地区分色图例
function renderLegend() {
  const lang = L();
  const REGION_LABELS = {
    zh: {
      north: '华北', northeast: '东北', east: '华东', central: '华中',
      south: '华南', southwest: '西南', northwest: '西北', outlying: '港澳台'
    },
    en: {
      north: 'North', northeast: 'NE', east: 'East', central: 'Central',
      south: 'South', southwest: 'SW', northwest: 'NW', outlying: 'HK/MO/TW'
    }
  };
  const el = document.getElementById('map-legend');
  if (!el) return;
  let html = '';
  // 大区色块
  Object.keys(REGION_COLORS).forEach(r => {
    html += `<span class="legend-item"><span class="legend-swatch" style="background:${REGION_COLORS[r]};"></span>${REGION_LABELS[lang][r]}</span>`;
  });
  // 暂无案件
  html += `<span class="legend-item"><span class="legend-swatch legend-empty"></span>${I18N[lang].legendEmpty}</span>`;
  el.innerHTML = html;
}

function showTooltip(event, name, count) {
  const tt = document.getElementById('map-tooltip');
  tt.innerHTML = `${name} <span class="count">${count}</span>`;
  tt.classList.add('visible');
  moveTooltip(event);
}
function moveTooltip(event) {
  const tt = document.getElementById('map-tooltip');
  const wrap = document.querySelector('.map-wrapper');
  const rect = wrap.getBoundingClientRect();
  tt.style.left = (event.clientX - rect.left + 12) + 'px';
  tt.style.top = (event.clientY - rect.top + 12) + 'px';
}
function hideTooltip() {
  document.getElementById('map-tooltip').classList.remove('visible');
}

// ============================================================
// 渲染：筛选 chips
// ============================================================
function renderFilters() {
  // 年份
  const years = [...new Set(CASES.map(c => c.year))].sort((a, b) => b - a);
  const yearContainer = document.getElementById('filter-year-chips');
  yearContainer.innerHTML = '';

  const allYearChip = document.createElement('button');
  allYearChip.className = 'chip' + (state.filterYear === 'all' ? ' active' : '');
  allYearChip.textContent = I18N[L()].filterAll;
  allYearChip.onclick = () => { state.filterYear = 'all'; updateAll(); };
  yearContainer.appendChild(allYearChip);

  years.forEach(y => {
    const chip = document.createElement('button');
    chip.className = 'chip' + (state.filterYear === String(y) ? ' active' : '');
    chip.textContent = y;
    chip.onclick = () => { state.filterYear = String(y); updateAll(); };
    yearContainer.appendChild(chip);
  });

  // 争议焦点
  const issueContainer = document.getElementById('filter-issue-chips');
  issueContainer.innerHTML = '';
  Object.keys(ISSUE_I18N).forEach(issue => {
    const chip = document.createElement('button');
    chip.className = 'chip' + (state.filterIssue.has(issue) ? ' active' : '');
    chip.textContent = issueName(issue);
    chip.onclick = () => {
      if (state.filterIssue.has(issue)) state.filterIssue.delete(issue);
      else state.filterIssue.add(issue);
      updateAll();
    };
    issueContainer.appendChild(chip);
  });

  // 技术
  const techs = [...new Set(CASES.flatMap(c => c.tech))].sort();
  const techContainer = document.getElementById('filter-tech-chips');
  techContainer.innerHTML = '';
  techs.forEach(t => {
    const chip = document.createElement('button');
    chip.className = 'chip' + (state.filterTech.has(t) ? ' active' : '');
    chip.textContent = techName(t);
    chip.onclick = () => {
      if (state.filterTech.has(t)) state.filterTech.delete(t);
      else state.filterTech.add(t);
      updateAll();
    };
    techContainer.appendChild(chip);
  });
}

// ============================================================
// 渲染：右侧 panel
// ============================================================
function renderPanel() {
  const panel = document.getElementById('panel-section');
  const viewport = document.getElementById('viewport');

  viewport.classList.remove('view-overview', 'view-detail');
  viewport.classList.add(state.view === 'overview' ? 'view-overview' : 'view-detail');

  if (state.view === 'overview') {
    panel.innerHTML = '';
    return;
  }

  const lang = L();
  let html = '';

  if (state.view === 'province') {
    const courts = getCourtsInProvince(state.selectedProvince);
    const totalCases = getCasesInProvince(state.selectedProvince).length;

    html += `
      <div class="panel-header">
        <button class="back-link" id="back-to-overview">${I18N[lang].backToOverview}</button>
        <div class="panel-title">
          <h2>${provinceName(state.selectedProvince)}</h2>
          <span class="panel-count">${totalCases} ${I18N[lang].countSuffix || I18N[lang].statCases}</span>
        </div>
      </div>
      <div class="courts-list">
    `;

    courts.forEach(court => {
      const isSpecial = court.special;
      // 名称按语言显示——干净，不混排
      const displayName = courtName(court.name);
      html += `
        <div class="court-card ${isSpecial ? 'special' : ''}" data-court="${court.name}">
          <div class="court-card-info">
            ${isSpecial ? `<div class="court-special-badge">${lang === 'zh' ? '最高司法机关' : 'Supreme Court'}</div>` : ''}
            <div class="court-name">${displayName}</div>
          </div>
          <div class="court-card-meta">
            <div class="court-count">${court.cases.length}</div>
            <div class="court-arrow">→</div>
          </div>
        </div>
      `;
    });

    html += '</div>';

  } else if (state.view === 'court') {
    const cases = getDisplayCases();
    const courtZh = state.selectedCourt;
    const courtDisplay = courtName(courtZh);

    html += `
      <div class="panel-header">
        <button class="back-link" id="back-to-courts">${I18N[lang].backToCourts}</button>
        <div class="panel-title">
          <h2>${courtDisplay}</h2>
          <span class="panel-count">${cases.length} ${I18N[lang].countSuffix || I18N[lang].statCases}</span>
        </div>
      </div>
    `;

    if (cases.length === 0) {
      html += `<div class="empty-state">${I18N[lang].emptyState}</div>`;
    } else {
      html += '<div class="cases-list">';
      cases.forEach(c => {
        const title = caseTitle(c);
        const note = caseNote(c);

        let tags = '';
        tags += `<span class="case-tag">${issueName(c.issue)}</span>`;
        c.tech.forEach(t => tags += `<span class="case-tag tech">${techName(t)}</span>`);
        if (c.status === 'pending') tags += `<span class="case-tag status-pending">${I18N[lang].statusPending}</span>`;

        html += `
          <div class="case-card" data-case-id="${cases.indexOf(c)}">
            <div class="case-headshot">${caseImageHTML(c)}</div>
            <div class="case-body">
              <div class="case-card-row1">
                <div class="case-title">${title}</div>
                <div class="case-year">${c.year}</div>
              </div>
              ${c.caseNumber ? `<div class="case-number">${c.caseNumber}</div>` : ''}
              <div class="case-meta">${tags}</div>
              ${note ? `<div class="case-note">${note}</div>` : ''}
            </div>
          </div>
        `;
      });
      html += '</div>';
    }
  }

  panel.innerHTML = html;

  // 绑定事件
  panel.querySelectorAll('.court-card').forEach(el => {
    el.onclick = () => {
      state.selectedCourt = el.dataset.court;
      state.view = 'court';
      updateAll();
    };
  });

  panel.querySelectorAll('.case-card').forEach(el => {
    el.onclick = () => {
      const cases = getDisplayCases();
      const c = cases[parseInt(el.dataset.caseId)];
      if (c) openModal(c);
    };
  });

  const backOverview = document.getElementById('back-to-overview');
  if (backOverview) backOverview.onclick = () => {
    state.view = 'overview';
    state.selectedProvince = null;
    state.selectedCourt = null;
    updateAll();
  };

  const backCourts = document.getElementById('back-to-courts');
  if (backCourts) backCourts.onclick = () => {
    state.view = 'province';
    state.selectedCourt = null;
    updateAll();
  };
}

// ============================================================
// 案件详情弹窗
// ============================================================
function openModal(c) {
  const lang = L();
  const backdrop = document.getElementById('modal-backdrop');

  const courtZh = c.city || c.province;
  const courtLabel = courtName(courtZh);

  const title = caseTitle(c);
  const note = caseNote(c);

  let tags = '';
  tags += `<span class="case-tag">${issueName(c.issue)}</span>`;
  c.tech.forEach(t => tags += `<span class="case-tag tech">${techName(t)}</span>`);
  if (c.status === 'pending') tags += `<span class="case-tag status-pending">${I18N[lang].statusPending}</span>`;

  const provinceDisplay = provinceName(c.province === '最高人民法院' ? '北京市' : c.province);

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-eyebrow">${provinceDisplay} · ${courtLabel}</div>
    <div class="modal-header-flex">
      <div class="modal-headshot">${caseImageHTML(c)}</div>
      <div class="modal-header-text">
        <div class="modal-title">${title}</div>
        <div class="modal-tags">${tags}</div>
      </div>
    </div>
    <div class="modal-meta">
      ${c.caseNumber ? `
        <div class="modal-meta-label">${I18N[lang].caseNumberLabel}</div>
        <div class="modal-meta-value mono">${c.caseNumber}</div>
      ` : ''}
      <div class="modal-meta-label">${I18N[lang].yearLabel}</div>
      <div class="modal-meta-value">${c.year}</div>
      <div class="modal-meta-label">${I18N[lang].statusLabel}</div>
      <div class="modal-meta-value">${c.status === 'pending' ? I18N[lang].statusPending : I18N[lang].statusDecided}</div>
      <div class="modal-meta-label">${I18N[lang].issueLabel}</div>
      <div class="modal-meta-value">${issueName(c.issue)}</div>
    </div>
    ${note ? `<div class="modal-note">${note}</div>` : ''}
    <a class="modal-link-btn" href="${c.url}" target="_blank" rel="noopener">
      ${I18N[lang].viewSource}
    </a>
  `;
  backdrop.classList.add('visible');
}

function closeModal() {
  document.getElementById('modal-backdrop').classList.remove('visible');
}

// ============================================================
// 宋律师专栏弹窗
// ============================================================
function openColumnModal() {
  const lang = L();
  const articles = COLUMN_ARTICLES || [];

  let listHtml = '';
  if (articles.length === 0) {
    listHtml = `<div class="empty-state">${I18N[lang].columnEmpty}</div>`;
  } else {
    listHtml = '<ul class="column-list">';
    articles.forEach(a => {
      const title = lang === 'en' && a.title_en ? a.title_en : a.title_zh;
      const summary = lang === 'en' && a.summary_en ? a.summary_en : a.summary_zh;
      listHtml += `
        <li class="column-item">
          <div class="column-date">${a.date}</div>
          <div class="column-text">
            <a class="column-title" href="${a.url}" target="_blank" rel="noopener">${title}</a>
            ${summary ? `<div class="column-summary">${summary}</div>` : ''}
            <a class="column-readmore" href="${a.url}" target="_blank" rel="noopener">${I18N[lang].columnReadMore}</a>
          </div>
        </li>
      `;
    });
    listHtml += '</ul>';
  }

  document.getElementById('column-body').innerHTML = `
    <div class="column-eyebrow">${I18N[lang].columnModalSubtitle}</div>
    <h2 class="column-h2">${I18N[lang].columnModalTitle}</h2>
    <p class="column-lede">${I18N[lang].columnModalLede}</p>
    ${listHtml}
  `;
  document.getElementById('column-backdrop').classList.add('visible');
}

function closeColumnModal() {
  document.getElementById('column-backdrop').classList.remove('visible');
}

// ============================================================
// 国际化：刷新所有 data-i18n 文本
// ============================================================
function applyI18n() {
  const lang = L();
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = I18N[lang][key] || key;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = I18N[lang][key] || key;
  });

  // 语言切换按钮高亮
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ============================================================
// 事件
// ============================================================
function setupEvents() {
  // 案件详情弹窗
  document.getElementById('modal-close').onclick = closeModal;
  document.getElementById('modal-backdrop').onclick = (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  };
  // 专栏弹窗
  document.getElementById('column-close').onclick = closeColumnModal;
  document.getElementById('column-backdrop').onclick = (e) => {
    if (e.target.id === 'column-backdrop') closeColumnModal();
  };
  document.getElementById('stat-column').onclick = openColumnModal;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeColumnModal(); }
  });

  document.getElementById('search-input').addEventListener('input', (e) => {
    state.searchText = e.target.value;
    if (state.view === 'court') renderPanel();
  });

  document.getElementById('reset-btn').onclick = () => {
    state.view = 'overview';
    state.selectedProvince = null;
    state.selectedCourt = null;
    state.filterYear = 'all';
    state.filterIssue.clear();
    state.filterTech.clear();
    state.searchText = '';
    document.getElementById('search-input').value = '';
    updateAll();
  };

  // 语言切换
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.onclick = () => {
      state.lang = btn.dataset.lang;
      updateAll();
    };
  });
}

// ============================================================
// 主刷新
// ============================================================
function updateAll() {
  applyI18n();
  renderMap();
  renderLegend();
  renderFilters();
  renderPanel();
}

function init() {
  renderStats();
  setupEvents();
  updateAll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

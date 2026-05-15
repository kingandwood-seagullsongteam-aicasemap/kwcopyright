// ===================================================================
// 中国 AI 司法实践案例图 · 主程序
// 编辑说明：一般不需改此文件
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
  filterTeamOnly: false,
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

// 获取所有应用筛选条件后的案件集合（用于统计 / 列表底层）
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
  if (state.filterTeamOnly) {
    pool = pool.filter(c => c.teamArticle);
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

// ============================================================
// 渲染：顶部统计
// ============================================================
function renderStats() {
  document.getElementById('stat-cases').textContent = CASES.length;
  const provinces = new Set(CASES.map(c => c.province));
  // 算"管辖法院"数量
  const courts = new Set(CASES.map(c => c.city || c.province));
  document.getElementById('stat-courts').textContent = courts.size;
  document.getElementById('stat-team').textContent = CASES.filter(c => c.teamArticle).length;
}

// ============================================================
// 渲染：地图
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

  // 案件数徽章（金色圆点 + 数字）
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

  // 团队
  const teamChip = document.getElementById('filter-team-toggle');
  teamChip.classList.toggle('active', state.filterTeamOnly);
  teamChip.textContent = I18N[L()].filterTeamOnly;
}

// ============================================================
// 渲染：右侧 panel（根据 state.view 决定渲染法院列表或案件列表）
// ============================================================
function renderPanel() {
  const panel = document.getElementById('panel-section');
  const viewport = document.getElementById('viewport');

  // 切换视图 class
  viewport.classList.remove('view-overview', 'view-detail');
  viewport.classList.add(state.view === 'overview' ? 'view-overview' : 'view-detail');

  if (state.view === 'overview') {
    panel.innerHTML = '';
    return;
  }

  const lang = L();
  let html = '';

  if (state.view === 'province') {
    // 显示该省的法院列表
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
      html += `
        <div class="court-card ${isSpecial ? 'special' : ''}" data-court="${court.name}">
          <div class="court-card-info">
            ${isSpecial ? `<div class="court-special-badge">${lang === 'zh' ? '最高司法机关' : 'Supreme Court'}</div>` : ''}
            <div class="court-name">${courtName(court.name)}</div>
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
    // 显示案件列表
    const cases = getDisplayCases();
    const courtZh = state.selectedCourt;

    html += `
      <div class="panel-header">
        <button class="back-link" id="back-to-courts">${I18N[lang].backToCourts}</button>
        <div class="panel-title">
          <h2>${courtName(courtZh)}</h2>
          <span class="panel-count">${cases.length} ${I18N[lang].countSuffix || I18N[lang].statCases}</span>
        </div>
      </div>
    `;

    if (cases.length === 0) {
      html += `<div class="empty-state">${I18N[lang].emptyState}</div>`;
    } else {
      html += '<div class="cases-list">';
      cases.forEach(c => {
        const title = lang === 'en' && c.title_en ? c.title_en : c.title_zh;
        const note = lang === 'en' && c.note_en ? c.note_en : c.note_zh;

        let tags = '';
        tags += `<span class="case-tag">${issueName(c.issue)}</span>`;
        c.tech.forEach(t => tags += `<span class="case-tag tech">${techName(t)}</span>`);
        if (c.status === 'pending') tags += `<span class="case-tag status-pending">${I18N[lang].statusPending}</span>`;
        if (c.teamArticle) tags += `<span class="case-tag team">◆ ${I18N[lang].teamBadge}</span>`;

        html += `
          <div class="case-card" data-case-id="${cases.indexOf(c)}">
            <div class="case-card-row1">
              <div style="flex:1; min-width:0;">
                <div class="case-title">${title}</div>
              </div>
              <div class="case-year">${c.year}</div>
            </div>
            ${c.caseNumber ? `<div class="case-number">${c.caseNumber}</div>` : ''}
            <div class="case-meta">${tags}</div>
            ${note ? `<div class="case-note">${note}</div>` : ''}
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
// 模态弹窗
// ============================================================
function openModal(c) {
  const lang = L();
  const backdrop = document.getElementById('modal-backdrop');

  const courtZh = c.city || c.province;
  const courtEn = COURT_I18N[courtZh] || '';
  const courtLabel = lang === 'en' ? (courtEn || courtZh) : courtZh;

  const title = lang === 'en' && c.title_en ? c.title_en : c.title_zh;
  const note = lang === 'en' && c.note_en ? c.note_en : c.note_zh;

  let tags = '';
  tags += `<span class="case-tag">${issueName(c.issue)}</span>`;
  c.tech.forEach(t => tags += `<span class="case-tag tech">${techName(t)}</span>`);
  if (c.status === 'pending') tags += `<span class="case-tag status-pending">${I18N[lang].statusPending}</span>`;
  if (c.teamArticle) tags += `<span class="case-tag team">◆ ${I18N[lang].teamBadge}</span>`;

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-eyebrow">${provinceName(c.province === '最高人民法院' ? '北京市' : c.province)} · ${courtLabel}</div>
    <div class="modal-title">${title}</div>
    <div class="modal-tags">${tags}</div>
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
  document.getElementById('modal-close').onclick = closeModal;
  document.getElementById('modal-backdrop').onclick = (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
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
    state.filterTeamOnly = false;
    state.searchText = '';
    document.getElementById('search-input').value = '';
    updateAll();
  };

  document.getElementById('filter-team-toggle').onclick = () => {
    state.filterTeamOnly = !state.filterTeamOnly;
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

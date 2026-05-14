// ===================================================================
// 中国 AI 相关案例地图  —  主程序
// 编辑说明: 一般无需修改此文件。新增/修改案件只需编辑 cases.js
// ===================================================================

// ---- 省份名称归一化映射（地图名 → 数据名）----
const PROVINCE_ALIAS = {
  '新疆维吾尔自治区': '新疆维吾尔自治区',
  '西藏自治区': '西藏自治区',
  '内蒙古自治区': '内蒙古自治区',
  '青海省': '青海省',
  '四川省': '四川省',
  '黑龙江省': '黑龙江省',
  '甘肃省': '甘肃省',
  '云南省': '云南省',
  '广西壮族自治区': '广西壮族自治区',
  '湖南省': '湖南省',
  '陕西省': '陕西省',
  '广东省': '广东省',
  '吉林省': '吉林省',
  '河北省': '河北省',
  '湖北省': '湖北省',
  '贵州省': '贵州省',
  '山东省': '山东省',
  '江西省': '江西省',
  '河南省': '河南省',
  '辽宁省': '辽宁省',
  '山西省': '山西省',
  '安徽省': '安徽省',
  '福建省': '福建省',
  '浙江省': '浙江省',
  '江苏省': '江苏省',
  '重庆市': '重庆市',
  '宁夏回族自治区': '宁夏回族自治区',
  '海南省': '海南省',
  '台湾省': '台湾省',
  '北京市': '北京市',
  '天津市': '天津市',
  '上海市': '上海市',
  '香港特别行政区': '香港特别行政区',
  '澳门特别行政区': '澳门特别行政区'
};

// 省份显示短名
const PROVINCE_SHORT = {
  '新疆维吾尔自治区': '新疆', '西藏自治区': '西藏', '内蒙古自治区': '内蒙古',
  '青海省': '青海', '四川省': '四川', '黑龙江省': '黑龙江',
  '甘肃省': '甘肃', '云南省': '云南', '广西壮族自治区': '广西',
  '湖南省': '湖南', '陕西省': '陕西', '广东省': '广东',
  '吉林省': '吉林', '河北省': '河北', '湖北省': '湖北',
  '贵州省': '贵州', '山东省': '山东', '江西省': '江西',
  '河南省': '河南', '辽宁省': '辽宁', '山西省': '山西',
  '安徽省': '安徽', '福建省': '福建', '浙江省': '浙江',
  '江苏省': '江苏', '重庆市': '重庆', '宁夏回族自治区': '宁夏',
  '海南省': '海南', '台湾省': '台湾', '北京市': '北京',
  '天津市': '天津', '上海市': '上海',
  '香港特别行政区': '香港', '澳门特别行政区': '澳门'
};

// ---- 状态 ----
const state = {
  selectedProvince: null,    // null = 显示全部
  selectedSPC: false,         // 是否选中了最高法
  filterYear: 'all',
  filterTech: new Set(),
  filterClaim: new Set(),
  filterStatus: 'all',
  filterTeamOnly: false,
  searchText: ''
};

// ---- 工具函数 ----
function getCasesForProvince(provinceName) {
  return CASES.filter(c => c.province === provinceName);
}

function getSPCCases() {
  return CASES.filter(c => c.province === '最高人民法院');
}

function getProvinceCount(provinceName) {
  return getCasesForProvince(provinceName).length;
}

function getFilteredCases() {
  let pool = CASES;

  // 省份/最高法筛选
  if (state.selectedSPC) {
    pool = getSPCCases();
  } else if (state.selectedProvince) {
    pool = getCasesForProvince(state.selectedProvince);
  }

  // 年份
  if (state.filterYear !== 'all') {
    pool = pool.filter(c => String(c.year) === state.filterYear);
  }

  // 技术类型
  if (state.filterTech.size > 0) {
    pool = pool.filter(c => c.tech.some(t => state.filterTech.has(t)));
  }

  // 法律权益类型
  if (state.filterClaim.size > 0) {
    pool = pool.filter(c => c.claim.some(t => state.filterClaim.has(t)));
  }

  // 状态
  if (state.filterStatus !== 'all') {
    pool = pool.filter(c => c.status === state.filterStatus);
  }

  // 团队文章
  if (state.filterTeamOnly) {
    pool = pool.filter(c => c.teamArticle);
  }

  // 搜索
  if (state.searchText.trim()) {
    const q = state.searchText.trim().toLowerCase();
    pool = pool.filter(c =>
      c.title.toLowerCase().includes(q) ||
      (c.caseNumber || '').toLowerCase().includes(q) ||
      (c.city || '').toLowerCase().includes(q) ||
      c.tech.some(t => t.toLowerCase().includes(q)) ||
      c.claim.some(t => t.toLowerCase().includes(q))
    );
  }

  // 按年份倒序
  pool = [...pool].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return (a.province || '').localeCompare(b.province || '', 'zh');
  });

  return pool;
}

// ---- 渲染：顶部统计 ----
function renderStats() {
  const totalCases = CASES.length;
  const provinces = new Set(CASES.filter(c => c.province !== '最高人民法院').map(c => c.province));
  const teamCount = CASES.filter(c => c.teamArticle).length;

  document.getElementById('stat-cases').textContent = totalCases;
  document.getElementById('stat-provinces').textContent = provinces.size;
  document.getElementById('stat-team').textContent = teamCount;
}

// ---- 渲染：最高法横幅 ----
function renderSPCBanner() {
  const spcCases = getSPCCases();
  const banner = document.getElementById('spc-banner');
  banner.querySelector('.spc-banner-count').textContent = spcCases.length;
  banner.classList.toggle('active', state.selectedSPC);
}

// ---- 渲染：地图 ----
function renderMap() {
  const svg = d3.select('#china-map');
  svg.selectAll('*').remove();

  const width = 800;
  const height = 600;

  svg.attr('viewBox', `0 0 ${width} ${height}`);

  // 中国地图投影
  const projection = d3.geoMercator()
    .center([104, 36])
    .scale(620)
    .translate([width / 2, height / 2 + 30]);

  const path = d3.geoPath().projection(projection);

  const g = svg.append('g');

  // 绘制省份
  const provinces = g.selectAll('.province-group')
    .data(CHINA_GEO.features)
    .enter()
    .append('g')
    .attr('class', 'province-group');

  provinces.append('path')
    .attr('class', d => {
      const name = d.properties.name;
      const count = getProvinceCount(name);
      const cls = ['province'];
      if (count === 0) cls.push('empty');
      if (state.selectedProvince === name) cls.push('active');
      return cls.join(' ');
    })
    .attr('d', path)
    .attr('data-name', d => d.properties.name)
    .on('mouseover', function(event, d) {
      const name = d.properties.name;
      const count = getProvinceCount(name);
      if (count === 0) return;
      showTooltip(event, name, count);
    })
    .on('mousemove', function(event) {
      moveTooltip(event);
    })
    .on('mouseout', function() {
      hideTooltip();
    })
    .on('click', function(event, d) {
      const name = d.properties.name;
      const count = getProvinceCount(name);
      if (count === 0) return;

      // 切换选中
      if (state.selectedProvince === name) {
        state.selectedProvince = null;
      } else {
        state.selectedProvince = name;
        state.selectedSPC = false;
      }
      updateAll();
    });

  // 添加省份标签（仅对有案件且面积足够大的省份）
  provinces.append('text')
    .attr('class', 'province-label')
    .attr('x', d => projection(d.properties.cp)[0])
    .attr('y', d => projection(d.properties.cp)[1])
    .text(d => {
      const count = getProvinceCount(d.properties.name);
      if (count === 0) return '';
      return PROVINCE_SHORT[d.properties.name] || '';
    })
    .style('pointer-events', 'none');

  // 案件数小徽章
  provinces.filter(d => getProvinceCount(d.properties.name) > 0)
    .append('circle')
    .attr('cx', d => projection(d.properties.cp)[0])
    .attr('cy', d => projection(d.properties.cp)[1] + 10)
    .attr('r', 7)
    .attr('fill', 'var(--accent)')
    .attr('stroke', 'white')
    .attr('stroke-width', 1.5)
    .style('pointer-events', 'none');

  provinces.filter(d => getProvinceCount(d.properties.name) > 0)
    .append('text')
    .attr('x', d => projection(d.properties.cp)[0])
    .attr('y', d => projection(d.properties.cp)[1] + 13)
    .attr('text-anchor', 'middle')
    .attr('font-family', 'var(--font-mono)')
    .attr('font-size', '9px')
    .attr('font-weight', '600')
    .attr('fill', 'white')
    .text(d => getProvinceCount(d.properties.name))
    .style('pointer-events', 'none');
}

// ---- Tooltip ----
function showTooltip(event, name, count) {
  const tt = document.getElementById('map-tooltip');
  tt.innerHTML = `${name} <span class="count">${count} 案</span>`;
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

// ---- 渲染：筛选 chip ----
function renderFilters() {
  // 年份
  const years = [...new Set(CASES.map(c => c.year))].sort((a, b) => b - a);
  const yearContainer = document.getElementById('filter-year-chips');
  yearContainer.innerHTML = '';

  const allYearChip = document.createElement('button');
  allYearChip.className = 'chip' + (state.filterYear === 'all' ? ' active' : '');
  allYearChip.textContent = '全部';
  allYearChip.onclick = () => { state.filterYear = 'all'; updateAll(); };
  yearContainer.appendChild(allYearChip);

  years.forEach(y => {
    const chip = document.createElement('button');
    chip.className = 'chip' + (state.filterYear === String(y) ? ' active' : '');
    chip.textContent = y;
    chip.onclick = () => { state.filterYear = String(y); updateAll(); };
    yearContainer.appendChild(chip);
  });

  // 技术类型
  const techs = [...new Set(CASES.flatMap(c => c.tech))].sort();
  const techContainer = document.getElementById('filter-tech-chips');
  techContainer.innerHTML = '';
  techs.forEach(t => {
    const chip = document.createElement('button');
    chip.className = 'chip' + (state.filterTech.has(t) ? ' active' : '');
    chip.textContent = t;
    chip.onclick = () => {
      if (state.filterTech.has(t)) state.filterTech.delete(t);
      else state.filterTech.add(t);
      updateAll();
    };
    techContainer.appendChild(chip);
  });

  // 法律权益
  const claims = [...new Set(CASES.flatMap(c => c.claim))].sort();
  const claimContainer = document.getElementById('filter-claim-chips');
  claimContainer.innerHTML = '';
  claims.forEach(t => {
    const chip = document.createElement('button');
    chip.className = 'chip' + (state.filterClaim.has(t) ? ' active' : '');
    chip.textContent = t;
    chip.onclick = () => {
      if (state.filterClaim.has(t)) state.filterClaim.delete(t);
      else state.filterClaim.add(t);
      updateAll();
    };
    claimContainer.appendChild(chip);
  });

  // 团队文章 toggle
  const teamChip = document.getElementById('filter-team-toggle');
  teamChip.classList.toggle('active', state.filterTeamOnly);
}

// ---- 渲染：案件列表 ----
function renderCases() {
  const cases = getFilteredCases();
  const list = document.getElementById('cases-list');
  const countBadge = document.getElementById('cases-count-badge');
  const title = document.getElementById('cases-title-text');

  // 标题
  if (state.selectedSPC) {
    title.innerHTML = '最高人民法院 <span class="sub">/ Supreme People\'s Court</span>';
  } else if (state.selectedProvince) {
    title.innerHTML = `${state.selectedProvince}`;
  } else {
    title.innerHTML = '全部案件 <span class="sub">/ All Cases</span>';
  }

  countBadge.textContent = `共 ${cases.length} 案`;

  if (cases.length === 0) {
    list.innerHTML = '<div class="empty-state">当前筛选条件下没有匹配案件<br><br>试试清空筛选或换一个省份</div>';
    return;
  }

  list.innerHTML = '';
  cases.forEach((c, idx) => {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.style.animation = `slideUp 0.3s ease ${idx * 0.02}s both`;
    card.onclick = (e) => {
      if (e.target.closest('.case-link')) return;
      openModal(c);
    };

    let courtLabel = c.province === '最高人民法院' ? '最高人民法院' : (c.city || c.province);

    let tags = '';
    c.tech.forEach(t => tags += `<span class="case-tag">${t}</span>`);
    c.claim.forEach(t => tags += `<span class="case-tag claim">${t}</span>`);
    if (c.status === 'pending') tags += `<span class="case-tag status-pending">审理中</span>`;
    if (c.teamArticle) tags += `<span class="case-tag team">📖 团队文章</span>`;

    card.innerHTML = `
      <div class="case-card-row1">
        <div style="flex: 1; min-width: 0;">
          <div class="case-court">${courtLabel}</div>
          <div class="case-title">${c.title}</div>
        </div>
        <div class="case-year">${c.year}</div>
      </div>
      ${c.caseNumber ? `<div class="case-number">${c.caseNumber}</div>` : ''}
      <div class="case-meta">${tags}</div>
      ${c.note ? `<div class="case-note">${c.note}</div>` : ''}
      <a class="case-link" href="${c.url}" target="_blank" rel="noopener" title="打开原文">↗</a>
    `;
    list.appendChild(card);
  });
}

// ---- 模态弹窗 ----
function openModal(c) {
  const backdrop = document.getElementById('modal-backdrop');
  const courtLabel = c.province === '最高人民法院' ? '最高人民法院' : `${c.province}${c.city ? ' · ' + c.city : ''}`;

  let tags = '';
  c.tech.forEach(t => tags += `<span class="case-tag">${t}</span>`);
  c.claim.forEach(t => tags += `<span class="case-tag claim">${t}</span>`);
  if (c.status === 'pending') tags += `<span class="case-tag status-pending">审理中</span>`;
  if (c.teamArticle) tags += `<span class="case-tag team">📖 团队文章</span>`;

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-court">${courtLabel}</div>
    <div class="modal-title">${c.title}</div>
    <div class="modal-tags">${tags}</div>
    <div class="modal-meta">
      ${c.caseNumber ? `
        <div class="modal-meta-label">案号</div>
        <div class="modal-meta-value mono">${c.caseNumber}</div>
      ` : ''}
      <div class="modal-meta-label">年份</div>
      <div class="modal-meta-value">${c.year}</div>
      <div class="modal-meta-label">状态</div>
      <div class="modal-meta-value">${c.status === 'pending' ? '审理中' : '已审结'}</div>
    </div>
    ${c.note ? `<div class="modal-note">${c.note}</div>` : ''}
    <a class="modal-link-btn" href="${c.url}" target="_blank" rel="noopener">
      查看原文 →
    </a>
  `;
  backdrop.classList.add('visible');
}

function closeModal() {
  document.getElementById('modal-backdrop').classList.remove('visible');
}

// ---- 事件 ----
function setupEvents() {
  // 关闭弹窗
  document.getElementById('modal-close').onclick = closeModal;
  document.getElementById('modal-backdrop').onclick = (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // 最高法横幅
  document.getElementById('spc-banner').onclick = () => {
    state.selectedSPC = !state.selectedSPC;
    if (state.selectedSPC) state.selectedProvince = null;
    updateAll();
  };

  // 搜索框
  document.getElementById('search-input').addEventListener('input', (e) => {
    state.searchText = e.target.value;
    renderCases();
  });

  // 重置
  document.getElementById('reset-btn').onclick = () => {
    state.selectedProvince = null;
    state.selectedSPC = false;
    state.filterYear = 'all';
    state.filterTech.clear();
    state.filterClaim.clear();
    state.filterStatus = 'all';
    state.filterTeamOnly = false;
    state.searchText = '';
    document.getElementById('search-input').value = '';
    updateAll();
  };

  // 团队文章 toggle
  document.getElementById('filter-team-toggle').onclick = () => {
    state.filterTeamOnly = !state.filterTeamOnly;
    updateAll();
  };
}

// ---- 主刷新 ----
function updateAll() {
  renderMap();
  renderSPCBanner();
  renderFilters();
  renderCases();
}

// ---- 启动 ----
function init() {
  renderStats();
  setupEvents();
  updateAll();
}

// 等 DOM 准备好后启动
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

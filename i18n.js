// ===================================================================
// 中英双语词典 · Bilingual Dictionary
// 编辑说明：如要修改某条翻译，找到对应键名修改后保存即可
// ===================================================================

const I18N = {
  zh: {
    // ---- 顶部 ----
    siteTitle: "中国 AI 司法实践案例图",
    siteSubtitle: "China AI Legal Case Map",
    eyebrow: "宋海燕团队 · 数字经济与人工智能",
    lede: "汇集全国各级法院涉人工智能案件，按管辖法院分布及争议焦点分类。点击省份探索该地实践，进而查看具体法院的案件。",

    // ---- 统计 ----
    statCases: "案件",
    statCourts: "管辖法院",
    statIssues: "争议焦点",
    statTeam: "团队评注",

    // ---- 筛选 ----
    filterYear: "年份",
    filterIssue: "争议焦点",
    filterTech: "AI 技术",
    filterTeamOnly: "仅看团队评注",
    filterAll: "全部",
    searchPlaceholder: "搜索案件名 / 案号 / 城市…",
    resetFilters: "清空筛选",

    // ---- 视图标签 ----
    overviewTitle: "全国案件分布",
    overviewSubtitle: "Nationwide Distribution",
    backToOverview: "← 返回全图",
    courtsInProvince: "管辖法院",
    casesInCourt: "案件",
    countSuffix: "案",
    backToCourts: "← 返回法院列表",

    // ---- 案件卡 ----
    statusDecided: "已审结",
    statusPending: "审理中",
    teamBadge: "团队评注",
    caseNumberLabel: "案号",
    yearLabel: "年份",
    statusLabel: "状态",
    issueLabel: "争议焦点",
    techLabel: "AI 技术",
    courtLabel: "管辖法院",
    noteLabel: "裁判要旨",
    viewSource: "查看原文 →",

    // ---- 地图 ----
    legendEmpty: "暂无案件",
    legendActive: "有案件",
    legendSelected: "已选中",
    mapHint: "点击有案件的省份开始探索",

    // ---- 状态 ----
    emptyState: "当前筛选条件下没有匹配案件",
    loading: "载入中…",

    // ---- 页脚 ----
    footerNote: "数据来源于公开判决、新闻报道及团队整理。本图供研究与学习用途，非正式法律意见。",
    footerCredit: "© 宋海燕 2026 · 金杜律师事务所",
    footerUpdate: "案例更新至 2026 年 4 月"
  },

  en: {
    siteTitle: "China AI Legal Case Map",
    siteSubtitle: "中国 AI 司法实践案例图",
    eyebrow: "Seagull Song Team · Digital Economy & AI",
    lede: "A curated atlas of AI-related cases adjudicated by Chinese courts at all levels, organised by jurisdiction and key legal issues. Click a province to explore local practice, then drill into specific courts.",

    statCases: "Cases",
    statCourts: "Courts",
    statIssues: "Key Issues",
    statTeam: "Team Notes",

    filterYear: "Year",
    filterIssue: "Key Issue",
    filterTech: "AI Tech",
    filterTeamOnly: "Team Notes Only",
    filterAll: "All",
    searchPlaceholder: "Search title, docket no., city…",
    resetFilters: "Clear filters",

    overviewTitle: "Nationwide Distribution",
    overviewSubtitle: "全国案件分布",
    backToOverview: "← Back to map",
    courtsInProvince: "Courts",
    casesInCourt: "Cases",
    countSuffix: "",
    backToCourts: "← Back to courts",

    statusDecided: "Decided",
    statusPending: "Pending",
    teamBadge: "Team Note",
    caseNumberLabel: "Docket No.",
    yearLabel: "Year",
    statusLabel: "Status",
    issueLabel: "Key Issue",
    techLabel: "AI Tech",
    courtLabel: "Court",
    noteLabel: "Holding",
    viewSource: "View Source →",

    legendEmpty: "No cases",
    legendActive: "Has cases",
    legendSelected: "Selected",
    mapHint: "Click a province with cases to explore",

    emptyState: "No cases match the current filters",
    loading: "Loading…",

    footerNote: "Data compiled from public judgments, news reports and team research. For research purposes only; not legal advice.",
    footerCredit: "© Seagull Song Team 2026 · King & Wood",
    footerUpdate: "Cases updated through April 2026"
  }
};

// ===================================================================
// 法院/城市名 中英对照
// ===================================================================
const COURT_I18N = {
  "最高人民法院": "Supreme People's Court",
  "北京互联网法院": "Beijing Internet Court",
  "北京知识产权法院": "Beijing IP Court",
  "北京市劳动仲裁委": "Beijing Labour Arbitration Commission",
  "通州区": "Tongzhou District Court",
  "浦东新区": "Pudong New Area Court",
  "黄浦区": "Huangpu District Court",
  "金山区": "Jinshan District Court",
  "徐汇区": "Xuhui District Court",
  "嘉定区": "Jiading District Court",
  "秦皇岛": "Qinhuangdao Court",
  "鹰潭": "Yingtan Court",
  "杭州": "Hangzhou Internet Court",
  "渝中区": "Yuzhong District Court",
  "扬州": "Yangzhou Court",
  "无锡": "Wuxi Court",
  "张家港": "Zhangjiagang Court",
  "常熟": "Changshu Court",
  "桂林": "Guilin Court",
  "广州互联网法院": "Guangzhou Internet Court",
  "广州": "Guangzhou Court",
  "深圳": "Shenzhen Court",
  "长沙": "Changsha Court",
  "成都": "Chengdu Court",
  "武汉": "Wuhan Internet Court",
  "孝感大悟": "Xiaogan Dawu County Court",
  "乌鲁木齐": "Ürümqi Court",
  "呼和浩特": "Hohhot Court"
};

// ===================================================================
// 省份名 中英对照（短名 + 全名）
// ===================================================================
const PROVINCE_I18N = {
  "北京市": { zh: "北京", en: "Beijing" },
  "上海市": { zh: "上海", en: "Shanghai" },
  "天津市": { zh: "天津", en: "Tianjin" },
  "重庆市": { zh: "重庆", en: "Chongqing" },
  "河北省": { zh: "河北", en: "Hebei" },
  "山西省": { zh: "山西", en: "Shanxi" },
  "辽宁省": { zh: "辽宁", en: "Liaoning" },
  "吉林省": { zh: "吉林", en: "Jilin" },
  "黑龙江省": { zh: "黑龙江", en: "Heilongjiang" },
  "江苏省": { zh: "江苏", en: "Jiangsu" },
  "浙江省": { zh: "浙江", en: "Zhejiang" },
  "安徽省": { zh: "安徽", en: "Anhui" },
  "福建省": { zh: "福建", en: "Fujian" },
  "江西省": { zh: "江西", en: "Jiangxi" },
  "山东省": { zh: "山东", en: "Shandong" },
  "河南省": { zh: "河南", en: "Henan" },
  "湖北省": { zh: "湖北", en: "Hubei" },
  "湖南省": { zh: "湖南", en: "Hunan" },
  "广东省": { zh: "广东", en: "Guangdong" },
  "海南省": { zh: "海南", en: "Hainan" },
  "四川省": { zh: "四川", en: "Sichuan" },
  "贵州省": { zh: "贵州", en: "Guizhou" },
  "云南省": { zh: "云南", en: "Yunnan" },
  "陕西省": { zh: "陕西", en: "Shaanxi" },
  "甘肃省": { zh: "甘肃", en: "Gansu" },
  "青海省": { zh: "青海", en: "Qinghai" },
  "台湾省": { zh: "台湾", en: "Taiwan" },
  "内蒙古自治区": { zh: "内蒙古", en: "Inner Mongolia" },
  "广西壮族自治区": { zh: "广西", en: "Guangxi" },
  "西藏自治区": { zh: "西藏", en: "Tibet" },
  "宁夏回族自治区": { zh: "宁夏", en: "Ningxia" },
  "新疆维吾尔自治区": { zh: "新疆", en: "Xinjiang" },
  "香港特别行政区": { zh: "香港", en: "Hong Kong" },
  "澳门特别行政区": { zh: "澳门", en: "Macau" }
};

// ===================================================================
// 争议焦点 · Key Issues  中英对照
// ===================================================================
const ISSUE_I18N = {
  "AIGC 可版权性": "AIGC Copyrightability",
  "AI 训练数据合规": "Training Data Compliance",
  "AI 服务提供者责任": "Service Provider Liability",
  "人格权数字化保护": "Digital Personality Rights",
  "AI 不正当竞争": "AI & Unfair Competition",
  "AI 内容真实性": "Content Authenticity & Liability",
  "其他": "Other Issues"
};

// 争议焦点的色彩编码（图谱用）
const ISSUE_COLOR = {
  "AIGC 可版权性": "#B8956A",
  "AI 训练数据合规": "#7B8B6A",
  "AI 服务提供者责任": "#8B6A4A",
  "人格权数字化保护": "#A87878",
  "AI 不正当竞争": "#6A7B8B",
  "AI 内容真实性": "#9B8B6A",
  "其他": "#888888"
};

// ===================================================================
// AI 技术类型 · AI Technology  中英对照
// ===================================================================
const TECH_I18N = {
  "AI文生图": "Text-to-Image",
  "AI图生图": "Image-to-Image",
  "AI生文": "AI-Generated Text",
  "AI文案": "AI Copywriting",
  "AI剪辑": "AI Video Editing",
  "AI声音": "AI Voice Cloning",
  "AI音频": "AI-Generated Audio",
  "AI换脸": "AI Face Swap",
  "AI数字人": "Virtual Avatar",
  "AI视频": "AI-Generated Video",
  "AI伪造": "AI Deepfake",
  "AI幻觉": "AI Hallucination",
  "AI陪伴": "AI Companion",
  "AI爬取": "AI Web Scraping",
  "AI训练": "AI Model Training",
  "AI提示词": "AI Prompt",
  "AI标识": "AI Labelling",
  "AI引流": "AI Traffic Diversion",
  "AI替代": "AI Replacement",
  "AI大模型": "Large Language Model"
};

// 工具函数：获取当前语言的字符串
function t(key, lang) {
  return I18N[lang || 'zh'][key] || key;
}

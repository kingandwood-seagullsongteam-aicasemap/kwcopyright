// ===================================================================
// 中英双语词典 · Bilingual Dictionary
// 编辑说明：如要修改某条翻译，找到对应键名修改后保存即可
// v3 更新：法院名升级为"法院全名"；新增"宋律师专栏"相关文案
// ===================================================================

const I18N = {
  zh: {
    // ---- 顶部 ----
    siteTitle: "中国 AI 司法实践案例图",
    eyebrow: "宋海燕团队 · 数字经济与人工智能",
    lede: "汇集全国各级法院涉人工智能案件，按管辖法院分布及争议焦点分类。点击省份探索该地实践，进而查看具体法院的案件。",

    // ---- 统计 ----
    statCases: "案件",
    statCourts: "管辖法院",
    statIssues: "争议焦点",
    statColumn: "宋律师专栏",
    statColumnHint: "点击查看 →",

    // ---- 筛选 ----
    filterYear: "年份",
    filterIssue: "争议焦点",
    filterTech: "AI 技术",
    filterAll: "全部",
    searchPlaceholder: "搜索案件名 / 案号 / 法院…",
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
    caseNumberLabel: "案号",
    yearLabel: "年份",
    statusLabel: "状态",
    issueLabel: "争议焦点",
    techLabel: "AI 技术",
    courtLabel: "管辖法院",
    noteLabel: "裁判要旨",
    viewSource: "查看原文 →",
    imagePlaceholder: "图",  // 头像位的占位字符

    // ---- 地图 ----
    legendEmpty: "暂无案件",
    legendActive: "有案件",
    legendSelected: "已选中",
    mapHint: "点击有案件的省份开始探索",

    // ---- 状态 ----
    emptyState: "当前筛选条件下没有匹配案件",
    loading: "载入中…",

    // ---- 宋律师专栏 ----
    columnModalTitle: "宋律师专栏",
    columnModalSubtitle: "数字经济与人工智能 · 深度评注",
    columnModalLede: "宋海燕律师及团队就 AI 法律前沿议题撰写的专栏文章。点击篇目阅读全文。",
    columnReadMore: "阅读全文 →",
    columnEmpty: "（专栏文章占位，敬请期待）",

    // ---- 页脚 ----
    footerNote: "数据来源于公开判决、新闻报道及团队整理。本图供研究与学习用途，非正式法律意见。",
    footerCredit: "© 宋海燕 2026 · 金杜律师事务所",
    footerUpdate: "案例更新至 2026 年 4 月"
  },

  en: {
    siteTitle: "China AI Legal Case Map",
    eyebrow: "Song Haiyan Team · Digital Economy & AI",
    lede: "A curated atlas of AI-related cases adjudicated by Chinese courts at all levels, organised by jurisdiction and key legal issues. Click a province to explore local practice, then drill into specific courts.",

    statCases: "Cases",
    statCourts: "Courts",
    statIssues: "Key Issues",
    statColumn: "Song's Column",
    statColumnHint: "View articles →",

    filterYear: "Year",
    filterIssue: "Key Issue",
    filterTech: "AI Tech",
    filterAll: "All",
    searchPlaceholder: "Search title, docket no., court…",
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
    caseNumberLabel: "Docket No.",
    yearLabel: "Year",
    statusLabel: "Status",
    issueLabel: "Key Issue",
    techLabel: "AI Tech",
    courtLabel: "Court",
    noteLabel: "Holding",
    viewSource: "View Source →",
    imagePlaceholder: "Img",

    legendEmpty: "No cases",
    legendActive: "Has cases",
    legendSelected: "Selected",
    mapHint: "Click a province with cases to explore",

    emptyState: "No cases match the current filters",
    loading: "Loading…",

    columnModalTitle: "Song's Column",
    columnModalSubtitle: "Digital Economy & AI · In-Depth Commentary",
    columnModalLede: "Commentary articles by Song Haiyan and team on the AI-law frontier. Click a piece to read in full.",
    columnReadMore: "Read more →",
    columnEmpty: "(Articles to be added — coming soon.)",

    footerNote: "Data compiled from public judgments, news reports and team research. For research purposes only; not legal advice.",
    footerCredit: "© Song Haiyan 2026 · King & Wood",
    footerUpdate: "Cases updated through April 2026"
  }
};

// ===================================================================
// 法院/城市名 中英对照
// v3 更新：升级为法院全名
// ===================================================================
const COURT_I18N = {
  // ---- 最高法 ----
  "最高人民法院": "Supreme People's Court",

  // ---- 北京 ----
  "北京互联网法院": "Beijing Internet Court",
  "北京知识产权法院": "Beijing IP Court",
  "北京市劳动仲裁委": "Beijing Labour Arbitration Commission",
  "北京市通州区人民法院": "Tongzhou District People's Court (Beijing)",

  // ---- 上海 ----
  "上海市浦东新区人民法院": "Pudong New Area People's Court (Shanghai)",
  "上海市黄浦区人民法院": "Huangpu District People's Court (Shanghai)",
  "上海市金山区人民法院": "Jinshan District People's Court (Shanghai)",
  "上海市嘉定区人民法院": "Jiading District People's Court (Shanghai)",
  "上海市徐汇区人民法院": "Xuhui District People's Court (Shanghai)",

  // ---- 江苏 ----
  "江苏省张家港市人民法院": "Zhangjiagang City People's Court (Jiangsu)",
  "江苏省常熟市人民法院": "Changshu City People's Court (Jiangsu)",

  // ---- 浙江 ----
  "杭州互联网法院": "Hangzhou Internet Court",
  "杭州市中级人民法院": "Hangzhou Intermediate People's Court",
  "杭州市滨江区人民法院": "Binjiang District People's Court (Hangzhou)",

  // ---- 江西 ----
  "江西省鹰潭市月湖区人民法院": "Yuehu District People's Court, Yingtan (Jiangxi)",

  // ---- 重庆 ----
  "重庆市渝中区人民法院": "Yuzhong District People's Court (Chongqing)",

  // ---- 湖北 ----
  "武汉东湖新技术开发区人民法院": "Wuhan East-Lake High-Tech Zone People's Court",
  "湖北省大悟县人民法院": "Dawu County People's Court (Hubei)",

  // ---- 湖南 ----
  "长沙市中级人民法院": "Changsha Intermediate People's Court",

  // ---- 广东 ----
  "广州互联网法院": "Guangzhou Internet Court",
  "深圳市南山区人民法院": "Nanshan District People's Court (Shenzhen)",

  // ---- 四川 ----
  "成都互联网法庭": "Chengdu Internet Court Tribunal",

  // ---- 内蒙古 ----
  "呼和浩特市新城区人民法院": "Xincheng District People's Court (Hohhot)",

  // ===================================================================
  // 以下为"暂未核实到精确法院"的占位短名 —— 待小鱼律师补全后删除即可
  // ===================================================================
  "河北省秦皇岛市（法院待核实）": "Qinhuangdao (Court TBD)",
  "广西壮族自治区桂林市（法院待核实）": "Guilin (Court TBD)",
  "广东省广州市（法院待核实）": "Guangzhou (Court TBD)",
  "四川省成都市（法院待核实）": "Chengdu (Court TBD)",
  "江苏省扬州市（法院待核实）": "Yangzhou (Court TBD)",
  "江苏省无锡市（法院待核实）": "Wuxi (Court TBD)",
  "新疆维吾尔自治区乌鲁木齐市（法院待核实）": "Ürümqi (Court TBD)"
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
// 省份配色 · Per-Province Colour Palette
// 仅"有案件"的 14 个省份各自一色；其余省份由 CSS .empty 接管。
// 调色思路：围绕金杜金棕主色，14 个低饱和大地色，互不撞色又不刺眼。
// ===================================================================
const PROVINCE_COLORS = {
  "北京市":               "#B8956A",  // 金棕（主色）
  "上海市":               "#7B8B6A",  // 沉绿
  "江苏省":               "#6A7B8B",  // 青石
  "浙江省":               "#BC8772",  // 赤陶
  "江西省":               "#A09060",  // 橄榄金
  "重庆市":               "#A87878",  // 玫瑰棕
  "湖北省":               "#8B7355",  // 深橄榄
  "湖南省":               "#9988A8",  // 灰紫
  "广东省":               "#C9A47A",  // 浅金
  "四川省":               "#8B6A4A",  // 栗色
  "内蒙古自治区":          "#A09BB0",  // 薰衣草灰
  "河北省":               "#B59A6E",  // 砂金
  "广西壮族自治区":        "#9B8B6A",  // 卡其
  "新疆维吾尔自治区":      "#A88A5C",  // 暗金
  // 最高法（虚拟，地图不渲染）—— 留键避免 undefined
  "最高人民法院":          "#B8956A"
};

// ===================================================================
// 案号翻译字典 · Case Number Pinyin/Roman Conversion
// 中文案号格式: (年份)+法院代字+审判程序+案件序号+号
//   例: (2024)京0491民初19067号  →  (2024) Jing 0491 Min Chu No. 19067
// 注：转换由 app.js 的 caseNumberDisplay() 完成，仅在 EN 模式启用
// ===================================================================

// 法院代字（省/直辖市/自治区简称 + 最高法）
const COURT_CODE_I18N = {
  // 多字代字放前面（caseNumberDisplay 会按长度倒序匹配）
  "最高法": "SPC",
  // 直辖市
  "京": "Jing",   // 北京
  "津": "Jin",    // 天津
  "沪": "Hu",     // 上海
  "渝": "Yu",     // 重庆
  // 省
  "冀": "Ji",     // 河北
  "晋": "Jin",    // 山西
  "辽": "Liao",   // 辽宁
  "吉": "Ji",     // 吉林
  "黑": "Hei",    // 黑龙江
  "苏": "Su",     // 江苏
  "浙": "Zhe",    // 浙江
  "皖": "Wan",    // 安徽
  "闽": "Min",    // 福建
  "赣": "Gan",    // 江西
  "鲁": "Lu",     // 山东
  "豫": "Yu",     // 河南
  "鄂": "E",      // 湖北
  "湘": "Xiang",  // 湖南
  "粤": "Yue",    // 广东
  "桂": "Gui",    // 广西
  "琼": "Qiong",  // 海南
  "川": "Chuan",  // 四川
  "贵": "Gui",    // 贵州
  "云": "Yun",    // 云南
  "陕": "Shaan",  // 陕西
  "甘": "Gan",    // 甘肃
  "宁": "Ning",   // 宁夏
  "青": "Qing",   // 青海
  "藏": "Zang",   // 西藏
  "新": "Xin",    // 新疆
  "蒙": "Meng"    // 内蒙古
};

// 审判程序代字（先匹配长串，避免"民"被先吃掉）
const CASE_TYPE_I18N = {
  // 知识产权类（3 字）
  "知民初":   "Zhi Min Chu",
  "知民终":   "Zhi Min Zhong",
  "知行初":   "Zhi Xing Chu",
  "知行终":   "Zhi Xing Zhong",
  "知民申":   "Zhi Min Shen",
  // 民事
  "民初":     "Min Chu",
  "民终":     "Min Zhong",
  "民申":     "Min Shen",
  "民再":     "Min Zai",
  "民特":     "Min Te",
  "民监":     "Min Jian",
  // 刑事
  "刑初":     "Xing Chu",
  "刑终":     "Xing Zhong",
  "刑申":     "Xing Shen",
  "刑再":     "Xing Zai",
  // 行政
  "行初":     "Xing Chu",
  "行终":     "Xing Zhong",
  "行申":     "Xing Shen",
  // 执行
  "执":       "Zhi",
  // 国家赔偿
  "赔":       "Pei"
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

// ===================================================================
// 宋律师专栏 · 文章数据（示例占位 —— 把内容换成真实文章即可）
// 字段：date / title_zh / title_en / summary_zh / summary_en / url
// ===================================================================
const COLUMN_ARTICLES = [
  {
    date: "2026.04",
    title_zh: "AI 生成内容著作权之辨：从'春风'案到最新司法实践",
    title_en: "Copyright in AI-Generated Content: From the \"Spring Breeze\" Case to Recent Judicial Practice",
    summary_zh: "梳理过去两年中国法院对 AI 生成图片、文字、视频可版权性的判断脉络，提炼裁判规则。",
    summary_en: "A review of how Chinese courts have approached copyrightability of AI-generated images, text and video over the past two years.",
    url: "#"
  },
  {
    date: "2026.02",
    title_zh: "AI 训练数据合规：从爬取到授权的路径选择",
    title_en: "Training-Data Compliance: From Scraping to Licensing",
    summary_zh: "训练数据的获取方式正在被司法重新审视。本文结合若干典型案件给出合规建议。",
    summary_en: "Judicial scrutiny of training-data sourcing is intensifying. This piece distils compliance guidance from leading cases.",
    url: "#"
  },
  {
    date: "2025.11",
    title_zh: "AI 服务提供者的注意义务边界 —— '奥特曼'系列案件评注",
    title_en: "The Duty-of-Care Boundary for AI Service Providers — Notes on the \"Ultraman\" Cases",
    summary_zh: "杭州与广州互联网法院的两起'奥特曼'案勾勒出 AI 平台责任的新边界，本文逐案评注。",
    summary_en: "Two \"Ultraman\" cases from the Hangzhou and Guangzhou Internet Courts sketch a new perimeter of AI-platform liability.",
    url: "#"
  },
  {
    date: "2025.08",
    title_zh: "数字人格权保护：AI 换脸、AI 声音案例梳理",
    title_en: "Protecting Digital Personality Rights: A Survey of AI Face-Swap and Voice-Cloning Cases",
    summary_zh: "本文按时间线梳理 AI 换脸、声音克隆相关案件的认定规则与赔偿尺度。",
    summary_en: "A chronological survey of recognition standards and damages benchmarks in AI face-swap and voice-cloning matters.",
    url: "#"
  },
  {
    date: "2025.05",
    title_zh: "AI 幻觉与内容真实性 —— 司法案例与合规要点",
    title_en: "AI Hallucination & Content Authenticity — Cases and Compliance Takeaways",
    summary_zh: "从律师援引虚假判例到生成式平台'幻觉'侵权，本文整理 AI 内容真实性的司法尺度。",
    summary_en: "From lawyers citing fabricated precedents to platform hallucination liability, this piece collects emerging judicial benchmarks.",
    url: "#"
  }
];

// 工具函数：获取当前语言的字符串
function t(key, lang) {
  return I18N[lang || 'zh'][key] || key;
}

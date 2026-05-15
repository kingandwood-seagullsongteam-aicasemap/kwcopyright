// ===================================================================
// 中英双语词典 · Bilingual Dictionary
// 编辑说明：如要修改某条翻译，找到对应键名修改后保存即可
// v3 更新：法院名升级为"法院全名"；新增"宋律师专栏"相关文案
// ===================================================================

const I18N = {
  zh: {
    // ---- 顶部 ----
    siteTitle: "中国 AI 司法实践案例图",
    eyebrow: "宋海燕团队",
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
    searchButton: "搜索",
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
    columnModalSubtitle: "深度评注",
    columnModalLede: "宋海燕律师及团队就 AI 法律前沿议题撰写的专栏文章。点击篇目阅读全文。",
    columnReadMore: "阅读全文 →",
    columnEmpty: "（专栏文章占位，敬请期待）",

    // ---- 页脚 ----
    footerNote: "数据来源于公开判决、新闻报道及团队整理。本图供研究与学习用途，非正式法律意见。",
    footerCredit: "© 宋海燕 2026 · 金杜律师事务所",
    footerUpdate: "案例更新至 2026 年 4 月",

    // ---- 页脚名片（律师简介） ----
    bioName: "宋海燕",
    bioRole: "知识产权部，北京丨硅谷 国际合伙人",
    bioPhoneLabel: "电话",
    bioEmailLabel: "邮箱",
    bioQrAlt: "扫码联系宋律师"
  },

  en: {
    siteTitle: "China AI Legal Case Map",
    eyebrow: "Seagull Song Team",
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
    searchButton: "Search",
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
    columnModalSubtitle: "In-Depth Commentary",
    columnModalLede: "Commentary articles by Seagull Song and team on the AI-law frontier. Click a piece to read in full.",
    columnReadMore: "Read more →",
    columnEmpty: "(Articles to be added — coming soon.)",

    footerNote: "Data compiled from public judgments, news reports and team research. For research purposes only; not legal advice.",
    footerCredit: "© Seagull Song 2026 · King & Wood Mallesons",
    footerUpdate: "Cases updated through April 2026",

    // ---- 页脚名片（律师简介） ----
    bioName: "Seagull Song",
    bioRole: "International Partner · IP Department · Beijing | Silicon Valley",
    bioPhoneLabel: "Phone",
    bioEmailLabel: "Email",
    bioQrAlt: "Scan to connect with Seagull Song"
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
// 调色思路：浅色调、大地色 + 柔和粉/绿/蓝/紫，整体偏淡偏暖，
// 北京（暖珊瑚）与河北（淡青）对比明显避免相邻撞色。
// 14 色互不撞色，地图不会显得"花"。
// 注：之后老板会基于宋律师原始 case map 微调，本组配色只是底稿。
// ===================================================================
const PROVINCE_COLORS = {
  "北京市":               "#E8B89A",  // 暖珊瑚
  "上海市":               "#B8D4C4",  // 柔薄荷
  "江苏省":               "#B8C8DC",  // 粉蓝
  "浙江省":               "#E8C8B0",  // 浅蜜桃
  "江西省":               "#DCD0A8",  // 浅柠
  "重庆市":               "#D8B8B8",  // 浅玫瑰
  "湖北省":               "#C8D4B8",  // 嫩鼠尾草
  "湖南省":               "#C8B8D0",  // 浅薰衣草
  "广东省":               "#E8D4A8",  // 浅金
  "四川省":               "#D8B8A0",  // 浅赤陶
  "内蒙古自治区":          "#D4C8B8",  // 浅沙
  "河北省":               "#A8C8C8",  // 淡青（与北京暖珊瑚相邻区分明显）
  "广西壮族自治区":        "#C0C8A8",  // 浅橄榄
  "新疆维吾尔自治区":      "#C8B0B8",  // 浅梅
  // 最高法（虚拟，地图不渲染）—— 留键避免 undefined
  "最高人民法院":          "#E8B89A"
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
// 宋律师专栏 · 文章数据
// 字段：date / category_zh / category_en / title_zh / title_en / url
// ⚠️ 英文标题为根据 URL slug + 中文标题推得的初版，下一轮请校对。
// 排序：按发布日期降序（最新在前）。
// ===================================================================
const COLUMN_ARTICLES = [
  {
    date: "2026.02.25",
    category_zh: "出版物",
    category_en: "Publication",
    title_zh: "金杜受邀撰稿汤森路透《生成式人工智能与版权：中国篇（2026）》",
    title_en: "KWM Contributes 2026 China Chapter to Thomson Reuters Practical Law on AIGC and Copyright",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/publication/king-and-wood-mallesons-delighted-to-contribute-to-2026-china-chapter-of-aigc-and-copyright-published-by-thomson-reuters-practical-law.html"
  },
  {
    date: "2025.11.26",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "从风险识别到透明度义务：全球AI治理动态",
    title_en: "Global AI Governance: From Risk Identification to Transparency Obligations",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/global-ai-governance-from-risk-identification-to-transparency-obligations.html"
  },
  {
    date: "2025.08.21",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "欧盟AI模型训练数据透明度规定最新落地——浅析欧盟与美国立法动态",
    title_en: "EU's Latest Transparency Mandate for AI Training Data — A Comparison of EU and US Legislations",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/eu-latest-transparency-mandate-for-ai-training-data-and-a-comparison-of-eu-and-us-legislations.html"
  },
  {
    date: "2025.06.10",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "浅析AI大模型开源新趋势——AI大模型开源许可协议条款分析",
    title_en: "Analysis of Open-Source License Agreement Clauses for AI Large Models",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/analysis-of-open-source-license-agreement-clauses-for-ai-large-models.html"
  },
  {
    date: "2025.06.04",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "浅析AI训练数据中著作权人的选择退出（Opt-Out）机制",
    title_en: "Opt-Out Mechanism for Copyright Holders in AI Training Data",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/opt-out-mechanism-in-ai-training.html"
  },
  {
    date: "2025.03.20",
    category_zh: "出版物",
    category_en: "Publication",
    title_zh: "金杜受邀撰稿汤森路透《生成式人工智能与版权：中国篇（2025）》",
    title_en: "KWM Contributes 2025 China Chapter to Thomson Reuters Practical Law on AI-Generated Content and Copyright",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/publication/king-wood-mallesons-delighted-to-contribute-to-china-chapter-of-ai-generated-content-and-copyright-published-by-thomson-reuters-practical-law-in-2025.html"
  },
  {
    date: "2025.03.10",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "迷雾渐开：美国AIGC可版权性剖析及案例梳理",
    title_en: "Clearing the Fog: Copyrightability of AI-Generated Works in the US and Typical Cases",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/copyrightability-of-ai-generated-works-in-the-us-and-typical-cases.html"
  },
  {
    date: "2025.03.07",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "美国首例AI训练数据版权案：从汤森路透诉罗斯案看AI训练数据的\"合理使用\"",
    title_en: "On the First US Copyright Dispute Over the Fair Use of AI Training Data — Thomson Reuters v. Ross",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/on-us-first-copyright-dispute-over-the-fair-use-of-ai-training-data.html"
  },
  {
    date: "2025.02.26",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "差异中寻找共识：浅析中美欧AIGC服务商的标识义务",
    title_en: "Labelling Obligations of AIGC Service Providers in China, the US and the EU",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/labelling-obligation-of-aigc-service-providers-in-china-us-and-eu.html"
  },
  {
    date: "2025.01.21",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "机遇与困境并存：浅谈自动驾驶汽车行业的数据共享",
    title_en: "Data Sharing in the Autonomous-Driving Industry: Opportunities and Challenges",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/data-sharing-in-the-autonomous-driving-industry.html"
  },
  {
    date: "2024.11.19",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "美国并购实战指引：企业剥离交易",
    title_en: "Practical Guidance for US M&A Carve-Out Transactions",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/practical-guidance-for-us-ma-carve-out-transactions.html"
  },
  {
    date: "2024.10.29",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "美国演员工会两次罢工中的数字演员争议与中国启示",
    title_en: "Disputes over Digital Replicas in Hollywood Actors' Union Strikes — and Lessons for China",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/disputes-over-digital-replica-in-hollywood-actors-union-strikes.html"
  },
  {
    date: "2024.09.11",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "真假难辨：再议AI深度伪造（Deepfake）之法律边界",
    title_en: "Legal Issues Concerning AI Deepfakes",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/legal-issues-concerning-deepfake.html"
  },
  {
    date: "2024.08.06",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "从\"不正当竞争\"角度思考AI模型训练中\"爬虫行为\"的违法边界——欧盟与中国之比较",
    title_en: "Competition-Law Risks of Crawling for AI Training: A Comparison Between China and the EU",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/competition-law-risks-in-crawl-for-ai-training-a-comparison-between-china-and-eu.html"
  },
  {
    date: "2024.07.11",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "数智融合《数据资产治理蓝皮书》发布",
    title_en: "KWM and the Beijing International Data Exchange Publish the Blue Book on Data-Asset Governance",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/kwm-and-beijing-international-data-exchange-publish-blue-book-on-data-asset-governance.html"
  },
  {
    date: "2024.06.12",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "浅析AI克隆艺人声音的侵权问题——中美新近立法与司法实践对比",
    title_en: "Infringement Risks Concerning AI Voice Cloning: A Comparison of China and US Practice",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/infringement-risks-concerning-ai--voice-cloning-a-comparison-of-china-and-us-practice.html"
  },
  {
    date: "2024.04.07",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "再论AIGC的可版权性——中美司法实践剖析与比较",
    title_en: "Copyright Issues Related to AIGC: A Comparison of Chinese and US Legal Practices",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/copyright-issue-related-to-aigc-a-comparison-of-chinese-and-us-legal-practices.html"
  },
  {
    date: "2024.03.08",
    category_zh: "出版物",
    category_en: "Publication",
    title_zh: "金杜受邀撰稿汤森路透《生成式人工智能（AIGC）与版权：中国篇》",
    title_en: "KWM Contributes 2024 China Chapter to Thomson Reuters Practical Law on AI-Generated Content and Copyright",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/publication/king-wood-mallesons-delighted-to-contribute-to-china-chapter-of-ai-generated-content-and-copyright-published-by-thomson-reuters-practical-law-in-2024.html"
  },
  {
    date: "2023.12.29",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "\"侵权包赔\"：AIGC知识产权赔偿条款之对比分析",
    title_en: "Comparative Analysis of AIGC IP Indemnity Clauses",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/comparative-analysis-of-aigc-intellectual-property-compensation-clauses.html"
  },
  {
    date: "2023.08.30",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "美国《音乐现代化法案》实施五年回顾——美国国会听证会小结",
    title_en: "Five-Year Review of the US Music Modernization Act — Notes from the Congressional Hearings",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/on-us-music-modernization-act.html"
  },
  {
    date: "2023.08.23",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "生成式人工智能时代下：析美国联邦最高法院Goldsmith案中的合理使用新标准",
    title_en: "On the US Supreme Court's Ruling in Goldsmith and the New Fair-Use Standard in the Era of AIGC",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/on-us-supreme-court-rule-of-goldsmith-case-and-standard-for-copyright-fair-use-in-era-of-aigc.html"
  },
  {
    date: "2023.07.12",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "KOL社交媒体推广的披露义务",
    title_en: "Disclosure Obligations of KOLs in Social-Media Promotion",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/disclosure-obligation-of-kol-in-social-media-promotion.html"
  },
  {
    date: "2023.05.15",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "NFT的法律属性及司法实践——美国、欧盟、英国及中国内地和香港之比较法研究",
    title_en: "Legal Attributes and Judicial Practice of NFTs: A Comparative Study of the US, EU, UK, Mainland China and Hong Kong",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/nft-legal-attribute-and-judicial-practice-a-comparative-study-of-us-eu-uk-chinese-mainland-and-hong-kong.html"
  },
  {
    date: "2023.05.08",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "相由AI生：浅谈深度伪造（Deepfake）与个人形象权",
    title_en: "Deepfakes and the Right to Personal Image",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/deepfake-and-right-to-personal-image.html"
  },
  {
    date: "2023.04.25",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "浅析ChatGPT训练数据之合理使用",
    title_en: "Reasonable Use of ChatGPT Training Data",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/reasonable-use-of-chatgpt-training-data.html"
  },
  {
    date: "2023.03.31",
    category_zh: "前沿观察",
    category_en: "Latest Thinking",
    title_zh: "浅谈AIGC的可版权性——美国、欧盟、英国与中国之比较",
    title_en: "Copyrightability of AIGC: A Comparison among the US, EU, UK and China",
    url: "https://www.kingandwood.com/content/kwm/cn/zh/insights/latest-thinking/aigc-copyright-capabilities-a-comparison-among-us-eu-uk-and-china.html"
  }
];

// 工具函数：获取当前语言的字符串
function t(key, lang) {
  return I18N[lang || 'zh'][key] || key;
}

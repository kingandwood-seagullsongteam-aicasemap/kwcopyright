// ===================================================================
// 中国 AI 司法实践案例数据
// ===================================================================
// 编辑说明：
//   添加新案件：复制下面任一个 { ... } 块，粘贴到列表中，修改内容即可
//
// 字段说明:
//   province     - 省份/直辖市全名（与地图匹配）。最高法填 "最高人民法院"
//   city         - 法院全名（中文，与 i18n.js 中 COURT_I18N 的 key 一致）
//                  如新增法院记得在 i18n.js 的 COURT_I18N 里加一条翻译
//   image        - 案件配图路径（相对于 index.html）。例如 "images/li-spring-breeze.jpg"
//                  留空字符串 "" 时会显示占位头像（用案件首字 + 配色）
//   title_zh     - 案件中文名
//   title_en     - 案件英文名（如不填则英文版页面回退显示中文）
//   caseNumber   - 案号（没有就填 ""）
//   year         - 年份（数字）
//   issue        - 争议焦点，必须是以下之一:
//                  "AIGC 可版权性"
//                  "AI 训练数据合规"
//                  "AI 服务提供者责任"
//                  "人格权数字化保护"
//                  "AI 不正当竞争"
//                  "AI 内容真实性"
//                  "其他"
//   tech         - AI 技术类型，数组（详见 i18n.js）
//   note_zh      - 中文裁判要旨/备注
//   note_en      - 英文裁判要旨/备注（可空字符串）
//   status       - "decided"（已审结）或 "pending"（审理中）
//   url          - 原文链接
// ===================================================================

const CASES = [
  // ============= 最高人民法院 =============
  {
    province: "最高人民法院",
    city: "最高人民法院",
    image: "images/case-01.jpg",
    title_zh: "翎腾公司诉纸上觉知公司及张某等四人技术秘密侵权案",
    title_en: "Lingteng v. Zhishang Juezhi & Zhang et al. (AI Trade Secret)",
    caseNumber: "(2023)最高法知民终1503号",
    year: 2023,
    issue: "其他",
    tech: ["AI大模型"],
    note_zh: "AI 模型开发涉技术秘密保护",
    note_en: "Trade secret protection in AI model development",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/fHUYfWTIwSA0Juvh9YwiFw"
  },

  // ============= 北京互联网法院 =============
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-02.jpg",
    title_zh: "某直播机构诉某视频发布者AI生文名誉权侵权案",
    title_en: "Live-stream Co. v. Video Publisher (AI-Generated Defamation)",
    caseNumber: "",
    year: 2026,
    issue: "AI 内容真实性",
    tech: ["AI生文"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/jujGk66UwMiB17KV4WFYvw"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-03.jpg",
    title_zh: "某演员诉某短剧制作公司AI\"撞脸\"侵权案",
    title_en: "Actor v. Short-drama Producer (AI Face Likeness)",
    caseNumber: "",
    year: 2026,
    issue: "人格权数字化保护",
    tech: ["AI视频"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/ozK2gbbifQYKzwXi_hCvFA"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-04.jpg",
    title_zh: "魏某虚假陈述AI生成内容案",
    title_en: "Wei (False Representation of AI Content)",
    caseNumber: "",
    year: 2025,
    issue: "AI 内容真实性",
    tech: ["AI生文"],
    note_zh: "虚假陈述AI生成内容",
    note_en: "False representation of AI-generated content",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/gu_8JtxqkzwoLdUcp_8IpQ"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-05.jpg",
    title_zh: "周某诉某科技公司AI图片著作权侵权案",
    title_en: "Zhou v. Tech Co. (AI Image Copyright)",
    caseNumber: "",
    year: 2025,
    issue: "AIGC 可版权性",
    tech: ["AI文生图"],
    note_zh: "AI生成图片不构成作品",
    note_en: "AI-generated image held NOT to constitute a work",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/fHUYfWTIwSA0Juvh9YwiFw"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-06.jpg",
    title_zh: "程某诉孙某AI恶搞肖像侵权案",
    title_en: "Cheng v. Sun (AI Portrait Parody)",
    caseNumber: "",
    year: 2025,
    issue: "人格权数字化保护",
    tech: ["AI视频"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/_adfEu-y7UOdyNaWr3lewQ"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-07.jpg",
    title_zh: "李某某诉某文化传媒有限公司AI合成声音侵权案",
    title_en: "Li v. Media Co. (AI Voice Synthesis)",
    caseNumber: "",
    year: 2025,
    issue: "人格权数字化保护",
    tech: ["AI声音"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/Ekr9UNkBYOVffeQXxzweKQ"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-08.jpg",
    title_zh: "聚为公司等诉孙某某等数字虚拟人著作权侵权案",
    title_en: "Juwei v. Sun et al. (Virtual Avatar Copyright)",
    caseNumber: "",
    year: 2025,
    issue: "AIGC 可版权性",
    tech: ["AI数字人"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/N7gmFingb4Jgyj8jkU64zQ"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-09.jpg",
    title_zh: "唐某某诉某网络信息传播服务平台AI标识争议案",
    title_en: "Tang v. Platform (AI Content Labelling)",
    caseNumber: "",
    year: 2025,
    issue: "AI 内容真实性",
    tech: ["AI标识"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/XBCO8fYfynz5RDVWe6O30Q"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-10.jpg",
    title_zh: "画师诉小红书Trik AI训练数据著作权侵权案",
    title_en: "Illustrator v. Xiaohongshu Trik (AI Training Data Copyright)",
    caseNumber: "",
    year: 2024,
    issue: "AI 训练数据合规",
    tech: ["AI训练"],
    note_zh: "",
    note_en: "",
    status: "pending",
    url: "https://mp.weixin.qq.com/s?__biz=MzU1NDk0NjE3MA==&mid=2247522164&idx=1&sn=7d9c3fd8ae894b6a59f354f3a181c75a&poc_token=HGOQBWqjEV52nmfNswsAWK0uOA4Gxt0oaR2qpeCI"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-11.jpg",
    title_zh: "殷某诉某公司AI声音侵权案",
    title_en: "Yin v. Company (AI Voice Cloning)",
    caseNumber: "(2023)京0491民初12142号",
    year: 2023,
    issue: "人格权数字化保护",
    tech: ["AI声音"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/_GxGaG6Q2NYHJWQuOtMyrQ"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-12.jpg",
    title_zh: "廖某及吴某诉某公司AI\"换脸\"侵权案",
    title_en: "Liao & Wu v. Company (AI Face Swap)",
    caseNumber: "(2023)京0491民初3821号",
    year: 2023,
    issue: "人格权数字化保护",
    tech: ["AI换脸"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/tSmtCARKjqg6mGHE70UDHw"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-13.jpg",
    title_zh: "李某诉刘某\"春风送来了温柔\"AI文生图著作权侵权案",
    title_en: "Li v. Liu \"Spring Breeze\" (AI Text-to-Image Copyright)",
    caseNumber: "(2023)京0491民初11279号",
    year: 2023,
    issue: "AIGC 可版权性",
    tech: ["AI文生图"],
    note_zh: "AI 生成图片构成作品（中国首案）",
    note_en: "AI-generated image held to constitute a work (China's first ruling)",
    status: "decided",
    url: "https://mp.weixin.qq.com/s?__biz=MzAwNDE3MjA5NA==&mid=2677385275&idx=1&sn=a8ccdbb118604473d8fd198f82df7e30"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    image: "images/case-14.jpg",
    title_zh: "何某诉某公司\"AI陪伴\"人格权侵权案",
    title_en: "He v. Company (AI Companion Personality Rights)",
    caseNumber: "(2020)京0491民初9526号",
    year: 2020,
    issue: "人格权数字化保护",
    tech: ["AI陪伴"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://www.chinacourt.cn/article/detail/2022/04/id/6626182.shtml"
  },

  // ============= 北京知识产权法院 =============
  {
    province: "北京市",
    city: "北京知识产权法院",
    image: "images/case-15.jpg",
    title_zh: "抖音诉亿睿科AI大模型不正当竞争案",
    title_en: "Douyin v. Yiruike (LLM Unfair Competition)",
    caseNumber: "(2023)京73民终3802号",
    year: 2023,
    issue: "AI 不正当竞争",
    tech: ["AI大模型"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/0ryGs8-97p0sObhjwpl-jg"
  },
  {
    province: "北京市",
    city: "北京知识产权法院",
    image: "images/case-16.jpg",
    title_zh: "菲林律所诉百度AI生文著作权侵权案",
    title_en: "Feilin Law Firm v. Baidu (AI-Generated Text Copyright)",
    caseNumber: "(2019)京73民终2030号",
    year: 2019,
    issue: "AIGC 可版权性",
    tech: ["AI生文"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/tNqAA98sPTkRk8r5hkhClw"
  },

  // ============= 北京其他法院与仲裁委 =============
  {
    province: "北京市",
    city: "北京市劳动仲裁委",
    image: "images/case-17.jpg",
    title_zh: "刘某与某科技公司AI替代岗位劳动纠纷案",
    title_en: "Liu v. Tech Co. (AI Job Displacement)",
    caseNumber: "",
    year: 2025,
    issue: "其他",
    tech: ["AI替代"],
    note_zh: "AI 替代岗位的劳动法适用",
    note_en: "Labour-law treatment of AI-driven job displacement",
    status: "decided",
    url: "https://rsj.beijing.gov.cn/bm/ztzl/dxal/202512/t20251226_4366546.html"
  },
  {
    province: "北京市",
    city: "北京市通州区人民法院",
    image: "images/case-18.jpg",
    title_zh: "AI数字人主播合同纠纷案",
    title_en: "AI Virtual Anchor Contract Dispute",
    caseNumber: "",
    year: 2025,
    issue: "其他",
    tech: ["AI数字人"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/bl-DEY39oXu0eIBw913fVg"
  },
  {
    province: "北京市",
    city: "北京市通州区人民法院",
    image: "images/case-19.jpg",
    title_zh: "某律师援引AI编造案例",
    title_en: "Lawyer Sanctioned for Citing AI-Fabricated Cases",
    caseNumber: "(2024)京0112民初19067号",
    year: 2024,
    issue: "AI 内容真实性",
    tech: ["AI幻觉"],
    note_zh: "律师援引 AI 幻觉编造的判例",
    note_en: "Lawyer cited AI-hallucinated precedents",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/qfEx83W_Ru7FdnUsMvjpuA"
  },
  {
    province: "北京市",
    city: "北京市通州区人民法院",
    image: "images/case-20.jpg",
    title_zh: "AI图生图侵犯著作权刑事案件",
    title_en: "Criminal Case: Image-to-Image Copyright Infringement",
    caseNumber: "",
    year: 2025,
    issue: "其他",
    tech: ["AI图生图"],
    note_zh: "首例 AI 图生图刑事案件",
    note_en: "First AI image-to-image criminal copyright case",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/1ci3IOL9rV63gE5flwIqNQ"
  },

  // ============= 上海 =============
  {
    province: "上海市",
    city: "上海市浦东新区人民法院",
    image: "images/case-21.jpg",
    title_zh: "君澜公司诉汉庭公司、百度公司AI客服商标权侵权案",
    title_en: "Junlan v. Hanting & Baidu (AI Chatbot Trade-mark)",
    caseNumber: "(2024)沪0115民初95826号",
    year: 2024,
    issue: "其他",
    tech: ["AI大模型"],
    note_zh: "AI 客服回复涉商标权侵权",
    note_en: "Trade-mark infringement via AI chatbot responses",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/vmeHtHaMKv1HZLJ97U0U6Q"
  },
  {
    province: "上海市",
    city: "上海市黄浦区人民法院",
    image: "images/case-22.jpg",
    title_zh: "成都绘素文化传播有限公司诉朱某、盛某AI提示词著作权侵权案",
    title_en: "Huisu v. Zhu & Sheng (AI Prompt Copyright)",
    caseNumber: "(2025)沪0101民初14775号",
    year: 2025,
    issue: "AIGC 可版权性",
    tech: ["AI提示词"],
    note_zh: "简单 AI 提示词不构成作品",
    note_en: "Simple AI prompts do NOT constitute a work",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/fBMndcZlcyIyVk-HK3KvJA"
  },
  {
    province: "上海市",
    city: "上海市金山区人民法院",
    image: "images/case-23.jpg",
    title_zh: "阅文集团诉LiblibAI平台\"美杜莎\"著作权侵权案",
    title_en: "China Literature v. LiblibAI \"Medusa\" (Copyright)",
    caseNumber: "(2025)沪0116民初2354号",
    year: 2025,
    issue: "AI 服务提供者责任",
    tech: ["AI图生图"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/Plae0snaOEsqqmodLU9j4g"
  },
  {
    province: "上海市",
    city: "上海市徐汇区人民法院",
    image: "images/case-24.jpg",
    title_zh: "爱奇艺诉MiniMax海螺AI模型训练及内容生成著作权侵权案",
    title_en: "iQiyi v. MiniMax Hailuo (AI Training & Output Copyright)",
    caseNumber: "",
    year: 2025,
    issue: "AI 训练数据合规",
    tech: ["AI训练"],
    note_zh: "",
    note_en: "",
    status: "pending",
    url: "https://www.cls.cn/detail/1909890"
  },
  {
    province: "上海市",
    city: "上海市嘉定区人民法院",
    image: "images/case-25.jpg",
    title_zh: "陈某诉某公司AI\"换脸\"视频著作权侵权案",
    title_en: "Chen v. Company (AI Face-Swap Video Copyright)",
    caseNumber: "(2024)沪0114民初1326号",
    year: 2024,
    issue: "人格权数字化保护",
    tech: ["AI换脸"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/4jDM8D-tWHc1NMUn0mm0JQ"
  },

  // ============= 河北 =============
  {
    province: "河北省",
    city: "河北省秦皇岛市山海关区人民法院",
    image: "images/case-26.jpg",
    title_zh: "于某诉某公司AI文生图著作权侵权案",
    title_en: "Yu v. Company (AI Text-to-Image Copyright)",
    caseNumber: "",
    year: 2025,
    issue: "AIGC 可版权性",
    tech: ["AI文生图"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/Mv8IP5wv4oGX6RDtJEEjcg"
  },

  // ============= 江西 =============
  {
    province: "江西省",
    city: "江西省鹰潭市月湖区人民法院",
    image: "images/case-27.jpg",
    title_zh: "崔某诉某公司AI文生图著作权侵权案",
    title_en: "Cui v. Company (AI Text-to-Image Copyright)",
    caseNumber: "(2025)赣0602知民初47号",
    year: 2025,
    issue: "AIGC 可版权性",
    tech: ["AI文生图"],
    note_zh: "AI 生成图片不构成作品",
    note_en: "AI-generated image held NOT to constitute a work",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/vvOb8Xeh4q8kaw7q1ZfYjA"
  },

  // ============= 浙江 =============
  {
    province: "浙江省",
    city: "杭州互联网法院",
    image: "images/case-28.jpg",
    title_zh: "杭州市人民检察院诉胡某AI伪造活体认证视频侵犯个人信息权益民事公益诉讼案",
    title_en: "Hangzhou Procuratorate v. Hu (Deepfake Identity Verification, Public-Interest Action)",
    caseNumber: "",
    year: 2026,
    issue: "人格权数字化保护",
    tech: ["AI伪造", "AI视频"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/-GrZD4Bp0SB9P3Hcx60tsw"
  },
  {
    province: "浙江省",
    city: "杭州互联网法院",
    image: "images/case-29.jpg",
    title_zh: "梁某诉某科技公司生成式人工智能\"幻觉\"侵权案",
    title_en: "Liang v. Tech Co. (GenAI Hallucination)",
    caseNumber: "",
    year: 2025,
    issue: "AI 内容真实性",
    tech: ["AI幻觉"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/riMkHOiBhDra1xe70wQcRA"
  },
  {
    province: "浙江省",
    city: "浙江省杭州市中级人民法院",
    image: "images/case-30.jpg",
    title_zh: "行吟公司诉合肥名某公司AI文案仿写不正当竞争案",
    title_en: "Xingyin v. Hefei Co. (AI Copy Imitation, Unfair Competition)",
    caseNumber: "(2025)浙01民终3998号",
    year: 2025,
    issue: "AI 不正当竞争",
    tech: ["AI文案"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/3jerp4isZZZU1cjcIjoobg"
  },
  {
    province: "浙江省",
    city: "浙江省杭州市滨江区人民法院",
    image: "images/case-31.jpg",
    title_zh: "阿里巴巴诉李某AI生成文章不正当竞争纠纷案",
    title_en: "Alibaba v. Li (AI-Generated Article Unfair Competition)",
    caseNumber: "(2024)浙0108民初10311号",
    year: 2024,
    issue: "AI 不正当竞争",
    tech: ["AI生文"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/eFsFQgp798CKQNNy4zBOYg"
  },
  {
    province: "浙江省",
    city: "浙江省杭州市中级人民法院",
    image: "images/case-32.jpg",
    title_zh: "上海新创华诉杭州水母AI平台\"奥特曼\"著作权侵权案",
    title_en: "Xinchuanghua v. Hangzhou Shuimu \"Ultraman\" (AI Platform Copyright)",
    caseNumber: "(2024)浙01民终10332号",
    year: 2024,
    issue: "AI 服务提供者责任",
    tech: ["AI图生图"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/ADNBb7MDyIuLrd_guaayxQ"
  },
  {
    province: "浙江省",
    city: "浙江省杭州市中级人民法院",
    image: "images/case-33.jpg",
    title_zh: "杭州四海诉上海魔珐涉虚拟数字人侵权案",
    title_en: "Hangzhou Sihai v. Shanghai Mofa (Virtual Avatar Infringement)",
    caseNumber: "(2023)浙01民终4722号",
    year: 2023,
    issue: "AIGC 可版权性",
    tech: ["AI数字人"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/eTAb1LmSyF8H0suxPlE9ZA"
  },

  // ============= 重庆 =============
  {
    province: "重庆市",
    city: "重庆市渝中区人民法院",
    image: "images/case-34.jpg",
    title_zh: "广东原创动力文化公司诉重庆某公司AI生成音频侵权案",
    title_en: "Original Force v. Chongqing Co. (AI-Generated Audio Copyright)",
    caseNumber: "(2025)渝0103民初748号",
    year: 2025,
    issue: "AI 服务提供者责任",
    tech: ["AI音频"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/gwY29Ca_sBco2o1P0K98Rw"
  },

  // ============= 江苏 =============
  {
    province: "江苏省",
    city: "江苏省扬州市中级人民法院",
    image: "images/case-35.jpg",
    title_zh: "万某诉某公司AI文生图著作权侵权案",
    title_en: "Wan v. Company (AI Text-to-Image Copyright)",
    caseNumber: "",
    year: 2026,
    issue: "AIGC 可版权性",
    tech: ["AI文生图"],
    note_zh: "AI 生成图片不构成作品",
    note_en: "AI-generated image held NOT to constitute a work",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/FnjSQlO_zAl5qJhpciPiDg"
  },
  {
    province: "江苏省",
    city: "江苏省无锡市中级人民法院",
    image: "images/case-36.jpg",
    title_zh: "无锡AI引流不正当竞争案",
    title_en: "Wuxi AI Traffic-Diversion Unfair Competition",
    caseNumber: "",
    year: 2025,
    issue: "AI 不正当竞争",
    tech: ["AI引流"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/FqRrq1DielKhOJgTXUrw_w"
  },
  {
    province: "江苏省",
    city: "江苏省张家港市人民法院",
    image: "images/case-37.jpg",
    title_zh: "丰某诉东山公司AI文生图著作权侵权案",
    title_en: "Feng v. Dongshan Co. (AI Text-to-Image Copyright)",
    caseNumber: "(2024)苏0582民初9015号",
    year: 2024,
    issue: "AIGC 可版权性",
    tech: ["AI文生图"],
    note_zh: "AI 生成图片不构成作品",
    note_en: "AI-generated image held NOT to constitute a work",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/CwFl3luPKqDbpO3iT8ScWw"
  },
  {
    province: "江苏省",
    city: "江苏省常熟市人民法院",
    image: "images/case-38.jpg",
    title_zh: "林某诉某公司AI文生图著作权侵权案",
    title_en: "Lin v. Company (AI Text-to-Image Copyright)",
    caseNumber: "(2024)苏0581民初6697号",
    year: 2024,
    issue: "AIGC 可版权性",
    tech: ["AI文生图"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/SmVaxXLKXwNvW_rn3YMrLw"
  },

  // ============= 广西 =============
  {
    province: "广西壮族自治区",
    city: "广西壮族自治区桂林市叠彩区人民法院",
    image: "images/case-39.jpg",
    title_zh: "桂林AI文生图著作权侵权案",
    title_en: "Guilin AI Text-to-Image Copyright Case",
    caseNumber: "",
    year: 2025,
    issue: "AIGC 可版权性",
    tech: ["AI文生图"],
    note_zh: "AI 生成图片不构成作品",
    note_en: "AI-generated image held NOT to constitute a work",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/NiOsQNPqbrU-9shiBbnu8g"
  },

  // ============= 广东 =============
  {
    province: "广东省",
    city: "广州互联网法院",
    image: "images/case-40.jpg",
    title_zh: "某公司诉曹某AI生成文章传播侵权信息案",
    title_en: "Company v. Cao (AI-Generated Infringing Article)",
    caseNumber: "",
    year: 2026,
    issue: "AI 内容真实性",
    tech: ["AI生文"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/6QX7TgmYleBTanbmQQ2kAQ"
  },
  {
    province: "广东省",
    city: "广东省广州市中级人民法院",
    image: "images/case-41.jpg",
    title_zh: "钟某诉某服装公司AI生成图片消费欺诈案",
    title_en: "Zhong v. Apparel Co. (AI Image Consumer Fraud)",
    caseNumber: "",
    year: 2026,
    issue: "其他",
    tech: ["AI文生图"],
    note_zh: "AI 生成图片用于销售构成欺诈",
    note_en: "Use of AI image in sales held to be consumer fraud",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/P09d1Oovb3Ov8iMQ0oKhmA"
  },
  {
    province: "广东省",
    city: "广东省深圳市南山区人民法院",
    image: "images/case-42.jpg",
    title_zh: "雪球公司诉深圳航宇公司AI爬取数据不正当竞争案",
    title_en: "Xueqiu v. Hangyu (AI Web-Scraping Unfair Competition)",
    caseNumber: "(2023)粤03民初6844号",
    year: 2023,
    issue: "AI 训练数据合规",
    tech: ["AI爬取"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/R7s8UEZR560ZL_BE1ch4oQ"
  },
  {
    province: "广东省",
    city: "广州互联网法院",
    image: "images/case-43.jpg",
    title_zh: "张某诉某公司AI\"换脸\"侵权案",
    title_en: "Zhang v. Company (AI Face Swap)",
    caseNumber: "",
    year: 2024,
    issue: "人格权数字化保护",
    tech: ["AI换脸"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/fHUn-Xb-N4P85p2Yu5t7zw"
  },
  {
    province: "广东省",
    city: "广州互联网法院",
    image: "images/case-44.jpg",
    title_zh: "上海新创华诉广州年光AI平台\"奥特曼\"著作权侵权案",
    title_en: "Xinchuanghua v. Guangzhou Nianguang \"Ultraman\" (AI Platform Copyright)",
    caseNumber: "(2024)粤0192民初113号",
    year: 2024,
    issue: "AI 服务提供者责任",
    tech: ["AI图生图"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/3v9K8B78ryVl0qaRDMV6Rg"
  },
  {
    province: "广东省",
    city: "广东省深圳市南山区人民法院",
    image: "images/case-45.jpg",
    title_zh: "腾讯诉盈讯\"Dreamwriter\"AI生文侵权案",
    title_en: "Tencent v. Yingxun \"Dreamwriter\" (AI-Generated Text Copyright)",
    caseNumber: "(2019)粤0305民初14010号",
    year: 2019,
    issue: "AIGC 可版权性",
    tech: ["AI生文"],
    note_zh: "AI 生成文章构成作品",
    note_en: "AI-generated article held to constitute a work",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/km9ncrUE6Ui-KnFLu3XINA"
  },

  // ============= 湖南 =============
  {
    province: "湖南省",
    city: "湖南省长沙市中级人民法院",
    image: "images/case-46.jpg",
    title_zh: "腾讯诉百度AI剪辑\"庆余年\"著作权侵权案",
    title_en: "Tencent v. Baidu \"Joy of Life\" (AI Video-Editing Copyright)",
    caseNumber: "(2024)湘01民终18114号",
    year: 2024,
    issue: "AI 服务提供者责任",
    tech: ["AI剪辑"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/YEv7DXVJgRfuGeV1CGwUow"
  },

  // ============= 四川 =============
  {
    province: "四川省",
    city: "成都铁路运输第一法院",
    image: "images/case-47.jpg",
    title_zh: "孙某诉成都某餐饮公司AI视频侵犯人格权案",
    title_en: "Sun v. Chengdu Restaurant Co. (AI Video Personality Rights)",
    caseNumber: "",
    year: 2026,
    issue: "人格权数字化保护",
    tech: ["AI视频"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://www.rmfyb.com/content/202602/24/article_1013811_1391663331_6496771.html"
  },
  {
    province: "四川省",
    city: "四川省成都市中级人民法院",
    image: "images/case-48.jpg",
    title_zh: "曹某诉某旅游学院AI文生图著作权侵权案",
    title_en: "Cao v. Tourism Institute (AI Text-to-Image Copyright)",
    caseNumber: "",
    year: 2025,
    issue: "AIGC 可版权性",
    tech: ["AI文生图"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/9c7Rmuy7TpGjlPWHIsmrFQ"
  },
  {
    province: "四川省",
    city: "成都互联网法庭",
    image: "images/case-49.jpg",
    title_zh: "某配音员诉声入人心公司AI声音侵权案",
    title_en: "Voice Actor v. Shengrurenxin Co. (AI Voice Cloning)",
    caseNumber: "(2024)川7101民初8969号",
    year: 2024,
    issue: "人格权数字化保护",
    tech: ["AI声音"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/TYDNIXzVzBwyCD0iJngIdQ"
  },

  // ============= 湖北 =============
  {
    province: "湖北省",
    city: "湖北省武汉东湖新技术开发区人民法院",
    image: "images/case-50.jpg",
    title_zh: "王某诉某公司AI文生图著作权侵权案",
    title_en: "Wang v. Company (AI Text-to-Image Copyright)",
    caseNumber: "(2024)鄂0192知民初968号",
    year: 2024,
    issue: "AIGC 可版权性",
    tech: ["AI文生图"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/XGS-JDGXgVqsw9oXPhpoaA"
  },
  {
    province: "湖北省",
    city: "湖北省大悟县人民法院",
    image: "images/case-51.jpg",
    title_zh: "诉讼原告李某提交AI生成图片作为证据的处理案例",
    title_en: "Li (Treatment of AI-Generated Image as Evidence)",
    caseNumber: "(2025)鄂0922民初4170号",
    year: 2025,
    issue: "其他",
    tech: ["AI文生图"],
    note_zh: "AI 生成图片作为证据的认定规则",
    note_en: "Evidentiary treatment of AI-generated images",
    status: "decided",
    url: "https://xgzy.hbfy.gov.cn/DocManage/ViewDoc?docId=16872b78-1b18-45e4-b3d2-1a10bd2391de"
  },

  // ============= 新疆 =============
  {
    province: "新疆维吾尔自治区",
    city: "新疆维吾尔自治区乌鲁木齐市天山区人民法院",
    image: "images/case-52.jpg",
    title_zh: "胡某诉新疆某单位AI文生图著作权侵权案",
    title_en: "Hu v. Xinjiang Entity (AI Text-to-Image Copyright)",
    caseNumber: "",
    year: 2025,
    issue: "AIGC 可版权性",
    tech: ["AI文生图"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "https://mp.weixin.qq.com/s/_R8QXwwwBElNxinp1Je-4w"
  },

  // ============= 内蒙古 =============
  {
    province: "内蒙古自治区",
    city: "内蒙古自治区呼和浩特市新城区人民法院",
    image: "images/case-53.jpg",
    title_zh: "\"虚拟数字人\"演唱会著作权侵权案",
    title_en: "Virtual Avatar Concert Copyright Case",
    caseNumber: "",
    year: 2025,
    issue: "AIGC 可版权性",
    tech: ["AI数字人"],
    note_zh: "",
    note_en: "",
    status: "decided",
    url: "http://hsxcfy.nmgfy.gov.cn/article/detail/2025/09/id/8984109.shtml"
  }
];

// ===================================================================
// 中国 AI 相关案例数据
// ===================================================================
// 添加新案件：复制下面任一个 { ... } 块，粘贴到列表中，修改内容即可
//
// 字段说明:
//   province     - 省份/直辖市名（用于地图定位）。最高法院填 "最高人民法院"
//   city         - 城市/地区（北京案件可填 "北京互联网法院" / "北京知识产权法院" / 区名）
//   title        - 案件名
//   caseNumber   - 案号（没有就填 ""）
//   year         - 年份
//   tech         - AI 技术类型，从这些里选一个或多个:
//                  "AI文生图", "AI图生图", "AI生文", "AI文案", "AI剪辑",
//                  "AI声音", "AI音频", "AI换脸", "AI数字人", "AI视频",
//                  "AI伪造", "AI幻觉", "AI陪伴", "AI爬取", "AI训练",
//                  "AI提示词", "AI标识", "AI引流", "AI替代", "AI大模型"
//   claim        - 法律权益类型，从这些里选一个或多个:
//                  "著作权", "不正当竞争", "人格权", "肖像权", "名誉权",
//                  "声音权益", "商标权", "技术秘密", "刑事", "劳动",
//                  "合同", "公益诉讼", "消费欺诈", "证据规则", "其他"
//   note         - 裁判要旨/备注（如 "AI生成图片不构成作品"），可留空 ""
//   status       - "decided"(已审结) 或 "pending"(审理中)
//   teamArticle  - true 表示有金杜团队文章，false 表示没有
//   url          - 案件相关链接
// ===================================================================

const CASES = [
  // ============= 最高人民法院 =============
  {
    province: "最高人民法院",
    city: "",
    title: "翎腾公司诉纸上觉知公司及张某等四人技术秘密侵权案",
    caseNumber: "(2023)最高法知民终1503号",
    year: 2023,
    tech: ["AI大模型"],
    claim: ["技术秘密"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/fHUYfWTIwSA0Juvh9YwiFw"
  },

  // ============= 北京互联网法院 =============
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "某直播机构诉某视频发布者AI生文名誉权侵权案",
    caseNumber: "",
    year: 2026,
    tech: ["AI生文"],
    claim: ["名誉权", "人格权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/jujGk66UwMiB17KV4WFYvw"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "某演员诉某短剧制作公司AI\"撞脸\"侵权案",
    caseNumber: "",
    year: 2026,
    tech: ["AI视频"],
    claim: ["肖像权", "人格权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/ozK2gbbifQYKzwXi_hCvFA"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "魏某虚假陈述AI生成内容案",
    caseNumber: "",
    year: 2025,
    tech: ["AI生文"],
    claim: ["其他"],
    note: "虚假陈述AI生成内容",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/gu_8JtxqkzwoLdUcp_8IpQ"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "周某诉某科技公司AI图片著作权侵权案",
    caseNumber: "",
    year: 2025,
    tech: ["AI文生图"],
    claim: ["著作权"],
    note: "AI生成图片不构成作品",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/fHUYfWTIwSA0Juvh9YwiFw"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "程某诉孙某AI恶搞肖像侵权案",
    caseNumber: "",
    year: 2025,
    tech: ["AI视频"],
    claim: ["肖像权", "人格权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/_adfEu-y7UOdyNaWr3lewQ"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "李某某诉某文化传媒有限公司AI合成声音侵权案",
    caseNumber: "",
    year: 2025,
    tech: ["AI声音"],
    claim: ["声音权益", "人格权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/Ekr9UNkBYOVffeQXxzweKQ"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "聚为公司等诉孙某某等数字虚拟人著作权侵权案",
    caseNumber: "",
    year: 2025,
    tech: ["AI数字人"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/N7gmFingb4Jgyj8jkU64zQ"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "唐某某诉某网络信息传播服务平台AI标识争议案",
    caseNumber: "",
    year: 2025,
    tech: ["AI标识"],
    claim: ["其他"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/XBCO8fYfynz5RDVWe6O30Q"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "画师诉小红书Trik AI训练数据著作权侵权案",
    caseNumber: "",
    year: 2024,
    tech: ["AI训练"],
    claim: ["著作权"],
    note: "",
    status: "pending",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s?__biz=MzU1NDk0NjE3MA==&mid=2247522164&idx=1&sn=7d9c3fd8ae894b6a59f354f3a181c75a&poc_token=HGOQBWqjEV52nmfNswsAWK0uOA4Gxt0oaR2qpeCI"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "殷某诉某公司AI声音侵权案",
    caseNumber: "(2023)京0491民初12142号",
    year: 2023,
    tech: ["AI声音"],
    claim: ["声音权益", "人格权"],
    note: "",
    status: "decided",
    teamArticle: true,
    url: "https://mp.weixin.qq.com/s/_GxGaG6Q2NYHJWQuOtMyrQ"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "廖某及吴某诉某公司AI\"换脸\"侵权案",
    caseNumber: "(2023)京0491民初3821号",
    year: 2023,
    tech: ["AI换脸"],
    claim: ["肖像权", "人格权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/tSmtCARKjqg6mGHE70UDHw"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "李某诉刘某\"春风送来了温柔\"AI文生图著作权侵权案",
    caseNumber: "(2023)京0491民初11279号",
    year: 2023,
    tech: ["AI文生图"],
    claim: ["著作权"],
    note: "AI生成图片构成作品（首案）",
    status: "decided",
    teamArticle: true,
    url: "https://mp.weixin.qq.com/s?__biz=MzAwNDE3MjA5NA==&mid=2677385275&idx=1&sn=a8ccdbb118604473d8fd198f82df7e30"
  },
  {
    province: "北京市",
    city: "北京互联网法院",
    title: "何某诉某公司\"AI陪伴\"人格权侵权案",
    caseNumber: "(2020)京0491民初9526号",
    year: 2020,
    tech: ["AI陪伴"],
    claim: ["人格权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://www.chinacourt.cn/article/detail/2022/04/id/6626182.shtml"
  },

  // ============= 北京知识产权法院 =============
  {
    province: "北京市",
    city: "北京知识产权法院",
    title: "抖音诉亿睿科AI大模型不正当竞争案",
    caseNumber: "(2023)京73民终3802号",
    year: 2023,
    tech: ["AI大模型"],
    claim: ["不正当竞争"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/0ryGs8-97p0sObhjwpl-jg"
  },
  {
    province: "北京市",
    city: "北京知识产权法院",
    title: "菲林律所诉百度AI生文著作权侵权案",
    caseNumber: "(2019)京73民终2030号",
    year: 2019,
    tech: ["AI生文"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/tNqAA98sPTkRk8r5hkhClw"
  },

  // ============= 北京其他法院与仲裁委 =============
  {
    province: "北京市",
    city: "北京市劳动仲裁委",
    title: "刘某与某科技公司AI替代岗位劳动纠纷案",
    caseNumber: "",
    year: 2025,
    tech: ["AI替代"],
    claim: ["劳动"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://rsj.beijing.gov.cn/bm/ztzl/dxal/202512/t20251226_4366546.html"
  },
  {
    province: "北京市",
    city: "通州区",
    title: "AI数字人主播合同纠纷案",
    caseNumber: "",
    year: 2025,
    tech: ["AI数字人"],
    claim: ["合同"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/bl-DEY39oXu0eIBw913fVg"
  },
  {
    province: "北京市",
    city: "通州区",
    title: "某律师援引AI编造案例",
    caseNumber: "(2024)京0112民初19067号",
    year: 2024,
    tech: ["AI幻觉"],
    claim: ["其他"],
    note: "律师援引AI编造案例",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/qfEx83W_Ru7FdnUsMvjpuA"
  },
  {
    province: "北京市",
    city: "通州区",
    title: "AI图生图侵犯著作权刑事案件",
    caseNumber: "",
    year: 2025,
    tech: ["AI图生图"],
    claim: ["著作权", "刑事"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/1ci3IOL9rV63gE5flwIqNQ"
  },

  // ============= 上海 =============
  {
    province: "上海市",
    city: "浦东新区",
    title: "君澜公司诉汉庭公司、百度公司AI客服商标权侵权案",
    caseNumber: "(2024)沪0115民初95826号",
    year: 2024,
    tech: ["AI大模型"],
    claim: ["商标权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/vmeHtHaMKv1HZLJ97U0U6Q"
  },
  {
    province: "上海市",
    city: "黄浦区",
    title: "成都绘素文化传播有限公司诉朱某、盛某AI提示词著作权侵权案",
    caseNumber: "(2025)沪0101民初14775号",
    year: 2025,
    tech: ["AI提示词"],
    claim: ["著作权"],
    note: "简单AI提示词不构成作品",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/fBMndcZlcyIyVk-HK3KvJA"
  },
  {
    province: "上海市",
    city: "金山区",
    title: "阅文集团诉LiblibAI平台\"美杜莎\"著作权侵权案",
    caseNumber: "(2025)沪0116民初2354号",
    year: 2025,
    tech: ["AI图生图"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/Plae0snaOEsqqmodLU9j4g"
  },
  {
    province: "上海市",
    city: "徐汇区",
    title: "爱奇艺诉MiniMax海螺AI模型训练及内容生成著作权侵权案",
    caseNumber: "",
    year: 2025,
    tech: ["AI训练"],
    claim: ["著作权"],
    note: "",
    status: "pending",
    teamArticle: false,
    url: "https://www.cls.cn/detail/1909890"
  },
  {
    province: "上海市",
    city: "嘉定区",
    title: "陈某诉某公司AI\"换脸\"视频著作权侵权案",
    caseNumber: "(2024)沪0114民初1326号",
    year: 2024,
    tech: ["AI换脸"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/4jDM8D-tWHc1NMUn0mm0JQ"
  },

  // ============= 河北 =============
  {
    province: "河北省",
    city: "秦皇岛",
    title: "于某诉某公司AI文生图著作权侵权案",
    caseNumber: "",
    year: 2025,
    tech: ["AI文生图"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/Mv8IP5wv4oGX6RDtJEEjcg"
  },

  // ============= 江西 =============
  {
    province: "江西省",
    city: "鹰潭",
    title: "崔某诉某公司AI文生图著作权侵权案",
    caseNumber: "(2025)赣0602知民初47号",
    year: 2025,
    tech: ["AI文生图"],
    claim: ["著作权"],
    note: "AI生成图片不构成作品",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/vvOb8Xeh4q8kaw7q1ZfYjA"
  },

  // ============= 浙江 =============
  {
    province: "浙江省",
    city: "杭州",
    title: "杭州市人民检察院诉胡某AI伪造活体认证视频侵犯个人信息权益民事公益诉讼案",
    caseNumber: "",
    year: 2026,
    tech: ["AI伪造", "AI视频"],
    claim: ["公益诉讼", "人格权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/-GrZD4Bp0SB9P3Hcx60tsw"
  },
  {
    province: "浙江省",
    city: "杭州",
    title: "梁某诉某科技公司生成式人工智能\"幻觉\"侵权案",
    caseNumber: "",
    year: 2025,
    tech: ["AI幻觉"],
    claim: ["人格权"],
    note: "",
    status: "decided",
    teamArticle: true,
    url: "https://mp.weixin.qq.com/s/riMkHOiBhDra1xe70wQcRA"
  },
  {
    province: "浙江省",
    city: "杭州",
    title: "行吟公司诉合肥名某公司AI文案仿写不正当竞争案",
    caseNumber: "(2025)浙01民终3998号",
    year: 2025,
    tech: ["AI文案"],
    claim: ["不正当竞争"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/3jerp4isZZZU1cjcIjoobg"
  },
  {
    province: "浙江省",
    city: "杭州",
    title: "阿里巴巴诉李某AI生成文章不正当竞争纠纷案",
    caseNumber: "(2024)浙0108民初10311号",
    year: 2024,
    tech: ["AI生文"],
    claim: ["不正当竞争"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/eFsFQgp798CKQNNy4zBOYg"
  },
  {
    province: "浙江省",
    city: "杭州",
    title: "上海新创华诉杭州水母AI平台\"奥特曼\"著作权侵权案",
    caseNumber: "(2024)浙01民终10332号",
    year: 2024,
    tech: ["AI图生图"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: true,
    url: "https://mp.weixin.qq.com/s/ADNBb7MDyIuLrd_guaayxQ"
  },
  {
    province: "浙江省",
    city: "杭州",
    title: "杭州四海诉上海魔珐涉虚拟数字人侵权案",
    caseNumber: "(2023)浙01民终4722号",
    year: 2023,
    tech: ["AI数字人"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: true,
    url: "https://mp.weixin.qq.com/s/eTAb1LmSyF8H0suxPlE9ZA"
  },

  // ============= 重庆 =============
  {
    province: "重庆市",
    city: "渝中区",
    title: "广东原创动力文化公司诉重庆某公司AI生成音频侵权案",
    caseNumber: "(2025)渝0103民初748号",
    year: 2025,
    tech: ["AI音频"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/gwY29Ca_sBco2o1P0K98Rw"
  },

  // ============= 江苏 =============
  {
    province: "江苏省",
    city: "扬州",
    title: "万某诉某公司AI文生图著作权侵权案",
    caseNumber: "",
    year: 2026,
    tech: ["AI文生图"],
    claim: ["著作权"],
    note: "AI生成图片不构成作品",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/FnjSQlO_zAl5qJhpciPiDg"
  },
  {
    province: "江苏省",
    city: "无锡",
    title: "AI引流不正当竞争案",
    caseNumber: "",
    year: 2025,
    tech: ["AI引流"],
    claim: ["不正当竞争"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/FqRrq1DielKhOJgTXUrw_w"
  },
  {
    province: "江苏省",
    city: "张家港",
    title: "丰某诉东山公司AI文生图著作权侵权案",
    caseNumber: "(2024)苏0582民初9015号",
    year: 2024,
    tech: ["AI文生图"],
    claim: ["著作权"],
    note: "AI生成图片不构成作品",
    status: "decided",
    teamArticle: true,
    url: "https://mp.weixin.qq.com/s/CwFl3luPKqDbpO3iT8ScWw"
  },
  {
    province: "江苏省",
    city: "常熟",
    title: "林某诉某公司AI文生图著作权侵权案",
    caseNumber: "(2024)苏0581民初6697号",
    year: 2024,
    tech: ["AI文生图"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/SmVaxXLKXwNvW_rn3YMrLw"
  },

  // ============= 广西 =============
  {
    province: "广西壮族自治区",
    city: "桂林",
    title: "AI文生图著作权侵权案",
    caseNumber: "",
    year: 2025,
    tech: ["AI文生图"],
    claim: ["著作权"],
    note: "AI生成图片不构成作品",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/NiOsQNPqbrU-9shiBbnu8g"
  },

  // ============= 广东 =============
  {
    province: "广东省",
    city: "广州互联网法院",
    title: "某公司诉曹某AI生成文章传播侵权信息案",
    caseNumber: "",
    year: 2026,
    tech: ["AI生文"],
    claim: ["其他"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/6QX7TgmYleBTanbmQQ2kAQ"
  },
  {
    province: "广东省",
    city: "广州",
    title: "钟某诉某服装公司AI生成图片消费欺诈案",
    caseNumber: "",
    year: 2026,
    tech: ["AI文生图"],
    claim: ["消费欺诈"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/P09d1Oovb3Ov8iMQ0oKhmA"
  },
  {
    province: "广东省",
    city: "深圳",
    title: "雪球公司诉深圳航宇公司AI爬取数据不正当竞争案",
    caseNumber: "(2023)粤03民初6844号",
    year: 2023,
    tech: ["AI爬取"],
    claim: ["不正当竞争"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/R7s8UEZR560ZL_BE1ch4oQ"
  },
  {
    province: "广东省",
    city: "广州互联网法院",
    title: "张某诉某公司AI\"换脸\"侵权案",
    caseNumber: "",
    year: 2024,
    tech: ["AI换脸"],
    claim: ["肖像权", "人格权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/fHUn-Xb-N4P85p2Yu5t7zw"
  },
  {
    province: "广东省",
    city: "广州互联网法院",
    title: "上海新创华诉广州年光AI平台\"奥特曼\"著作权侵权案",
    caseNumber: "(2024)粤0192民初113号",
    year: 2024,
    tech: ["AI图生图"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: true,
    url: "https://mp.weixin.qq.com/s/3v9K8B78ryVl0qaRDMV6Rg"
  },
  {
    province: "广东省",
    city: "深圳",
    title: "腾讯诉盈讯\"Dreamwriter\"AI生文侵权案",
    caseNumber: "(2019)粤0305民初14010号",
    year: 2019,
    tech: ["AI生文"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/km9ncrUE6Ui-KnFLu3XINA"
  },

  // ============= 湖南 =============
  {
    province: "湖南省",
    city: "长沙",
    title: "腾讯诉百度AI剪辑\"庆余年\"著作权侵权案",
    caseNumber: "(2024)湘01民终18114号",
    year: 2024,
    tech: ["AI剪辑"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/YEv7DXVJgRfuGeV1CGwUow"
  },

  // ============= 四川 =============
  {
    province: "四川省",
    city: "成都",
    title: "孙某诉成都某餐饮公司AI视频侵犯人格权案",
    caseNumber: "",
    year: 2026,
    tech: ["AI视频"],
    claim: ["人格权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://www.rmfyb.com/content/202602/24/article_1013811_1391663331_6496771.html"
  },
  {
    province: "四川省",
    city: "成都",
    title: "曹某诉某旅游学院AI文生图著作权侵权案",
    caseNumber: "",
    year: 2025,
    tech: ["AI文生图"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/9c7Rmuy7TpGjlPWHIsmrFQ"
  },
  {
    province: "四川省",
    city: "成都",
    title: "某配音员诉声入人心公司AI声音侵权案",
    caseNumber: "(2024)川7101民初8969号",
    year: 2024,
    tech: ["AI声音"],
    claim: ["声音权益", "人格权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/TYDNIXzVzBwyCD0iJngIdQ"
  },

  // ============= 湖北 =============
  {
    province: "湖北省",
    city: "武汉",
    title: "王某诉某公司AI文生图著作权侵权案",
    caseNumber: "(2024)鄂0192知民初968号",
    year: 2024,
    tech: ["AI文生图"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/XGS-JDGXgVqsw9oXPhpoaA"
  },
  {
    province: "湖北省",
    city: "孝感大悟",
    title: "诉讼原告李某提交AI生成图片作为证据的处理案例",
    caseNumber: "(2025)鄂0922民初4170号",
    year: 2025,
    tech: ["AI文生图"],
    claim: ["证据规则"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://xgzy.hbfy.gov.cn/DocManage/ViewDoc?docId=16872b78-1b18-45e4-b3d2-1a10bd2391de"
  },

  // ============= 新疆 =============
  {
    province: "新疆维吾尔自治区",
    city: "乌鲁木齐",
    title: "胡某诉新疆某单位AI文生图著作权侵权案",
    caseNumber: "",
    year: 2025,
    tech: ["AI文生图"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "https://mp.weixin.qq.com/s/_R8QXwwwBElNxinp1Je-4w"
  },

  // ============= 内蒙古 =============
  {
    province: "内蒙古自治区",
    city: "呼和浩特",
    title: "\"虚拟数字人\"演唱会著作权侵权案",
    caseNumber: "",
    year: 2025,
    tech: ["AI数字人"],
    claim: ["著作权"],
    note: "",
    status: "decided",
    teamArticle: false,
    url: "http://hsxcfy.nmgfy.gov.cn/article/detail/2025/09/id/8984109.shtml"
  }
];

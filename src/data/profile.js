// 時間校正說明：
// - 研究助理，林口長庚醫院：原寫「至今」，已校正為 2020-2022（2022/06 轉職軟體業）
// - 英文履歷 Senior R&D「2018-Present」已校正為 2018-2020

export const profile = {
  name: { zh: '藍紹瑋', en: 'Jacob Lan' },
  title: '軟體工程師 / Software Engineer',
  email: 'maimaisatt@gmail.com',
  phone: '0905-552522',
  github: 'https://github.com/JacobLanIsMe',
  linkedin: 'https://www.linkedin.com/in/%E7%B4%B9%E7%91%8B-%E8%97%8D-9b7547166/',
  summary:
    '擁有多年後端開發經驗，熟悉 Vue 3 與 Angular 前端框架，精通 Microsoft Dynamics 365 客製化開發，具備 Azure 雲端架構設計與部署管理能力。持有 Microsoft Azure 認證，曾參與香港多間大型企業（ChinaChem、AIA、Mannings）之系統建置。同時擁有台灣大學生物化學博士學位，具備跨領域的邏輯思維與研究能力。',

  software: {
    stats: [
      { value: '3+', label: '年全端開發經驗' },
      { value: '8+', label: '企業/個人專案' },
      { value: '2', label: 'Azure 國際認證' },
      { value: '1000', label: 'RPS 高併發支援' }
    ],

    experience: [
      {
        company: '星識科技有限公司',
        role: '軟體工程師',
        period: '2025/05 - 至今',
        isCurrent: true,
        highlights: [
          '開發 RAG（Retrieval-Augmented Generation）系統，整合大型語言模型與企業知識庫。',
          '建置 AI 智能客服系統，提升客戶服務自動化與回應效率。'
        ]
      },
      {
        company: '台灣創建雲端股份有限公司',
        role: '軟體工程師',
        period: '2022/12 - 2025/05',
        isCurrent: false,
        highlights: [
          '參與多項企業級系統建置，涵蓋 POS 銷售後台、會員管理平台、健康資訊系統及看診服務系統。',
          '導入忠誠點數系統，實現客戶點數累積與兌換功能，提升客戶黏著度。',
          '熟悉 Microsoft Dynamics 365 客製化開發，前端採 Vue 2/3，後端整合 .NET Core，實現高度客製需求。',
          '重構高併發應用程式，實測可穩定支援每秒 1000 次請求（RPS）。',
          '導入 RabbitMQ Delayed Message Exchange 實現訊息延遲傳遞，強化系統事件解耦設計。',
          '協助企業從地端系統平滑遷移至 Microsoft Azure 雲端平台。',
          '擅長 SQL Server 資料庫結構設計與效能調校，透過 CDC 技術即時監控資料異動。',
          '串接 Alipay 提供第三方交易流程支援。'
        ]
      },
      {
        company: 'iSpan 資展國際股份有限公司',
        role: '軟體工程師',
        period: '2022/06 - 2022/11',
        isCurrent: false,
        highlights: [
          '前後端整合開發，建置商品展示網頁及購物車系統（HTML/CSS/JS/jQuery + .NET Core 5）。',
          '串接歐付寶 API，完成第三方金流交易流程。',
          '整合 Google Maps API，提供地理定位與地圖導覽服務。',
          '設計並建置 Microsoft SQL Server 資料庫架構。'
        ]
      }
    ],

    skillGroups: [
      {
        category: '前端開發',
        icon: '🖥️',
        color: '#38bdf8',
        skills: [
          { name: 'Vue 2 / Vue 3', level: 85 },
          { name: 'Angular', level: 80 },
          { name: 'JavaScript / jQuery', level: 85 },
          { name: 'HTML / CSS', level: 90 },
          { name: 'Razor', level: 75 }
        ]
      },
      {
        category: '後端開發',
        icon: '⚙️',
        color: '#818cf8',
        skills: [
          { name: 'C# / .NET Core', level: 95 },
          { name: 'RESTful API', level: 90 },
          { name: 'Entity Framework / Dapper', level: 85 },
          { name: 'SignalR', level: 80 },
          { name: 'RabbitMQ', level: 78 },
          { name: 'RAG', level: 80 }
        ]
      },
      {
        category: '資料庫',
        icon: '🗄️',
        color: '#fb923c',
        skills: [
          { name: 'Microsoft SQL Server', level: 90 },
          { name: 'MongoDB', level: 70 },
          { name: 'Redis', level: 75 }
        ]
      },
      {
        category: '雲端 / DevOps',
        icon: '☁️',
        color: '#34d399',
        skills: [
          { name: 'Microsoft Azure', level: 85 },
          { name: 'Azure DevOps', level: 80 },
          { name: 'Microsoft Dynamics 365', level: 85 }
        ]
      },
      {
        category: '其他技術',
        icon: '🔧',
        color: '#f472b6',
        skills: [
          { name: 'Python', level: 75 },
          { name: 'OpenCV', level: 65 },
          { name: 'Selenium', level: 70 },
          { name: 'R', level: 60 }
        ]
      }
    ],

    projects: [
      {
        id: 1,
        name: '香港華懋集團客戶管理系統',
        client: 'ChinaChem Group',
        category: 'enterprise',
        description:
          '使用 Microsoft Dynamics 365 整合華懋集團旗下業務資訊（如心酒店、商場、保險等）。',
        highlights: [
          '會員整合並設計完整管理流程',
          '整合 OAuth 2.0（Microsoft 帳號登入），提升系統安全性',
          '成功串接 Alipay 金流 API，支援付款通知與訂單驗證',
          '部署至 Microsoft Azure 雲端平台，提升服務可用性'
        ],
        tech: ['Microsoft Dynamics 365', '.NET Core 6', 'Vue', 'Azure', 'SQL Server', 'Alipay API', 'OAuth 2.0']
      },
      {
        id: 2,
        name: '萬寧 HealthCare Plus System',
        client: 'Mannings（香港最大健美連鎖，320+ 門市）',
        category: 'enterprise',
        description:
          '整合萬寧健康資訊系統、會員系統與看診系統，支援 iOS/Android 健康資料收集與線上看診諮詢。',
        highlights: [
          '開發健康資訊整合平台，整合心率、體溫、睡眠等 iOS/Android 健康指標',
          '建立會員管理系統（註冊、資料更新、安全性）',
          '開發看診服務系統（預約、諮詢、處方簽發數位化）',
          '設計並部署 Azure 雲端架構，確保高可用性'
        ],
        tech: ['Microsoft Dynamics 365', '.NET Core', 'Vue', 'Azure', 'SQL Server']
      },
      {
        id: 3,
        name: '友邦保險 AIA 客戶管理系統',
        client: 'AIA（上市人壽保險集團）',
        category: 'enterprise',
        description:
          '整合 AIA 客戶資訊系統與忠誠點數系統，包含客戶資料管理、點數管理、任務管理，並導入即時資料監控技術等。',
        highlights: [
          '導入忠誠系統，實現客戶點數累積與兌換功能',
          '建立會員系統與多層級權限管理',
          '導入 Change Data Capture (CDC) 技術，實現即時資料庫異動監控',
          '整合 RabbitMQ Delayed Message Exchange，優化任務排程機制',
          '完成 Azure 雲端平台部署與維運'
        ],
        tech: ['Microsoft Dynamics 365', '.NET Core', 'Azure', 'SQL Server', 'RabbitMQ', 'CDC']
      },
      {
        id: 4,
        name: '生殖醫學中心實驗室系統',
        client: '個人專案',
        category: 'personal',
        description:
          '支援生殖醫學實驗室流程管理，包括檢體處理、觀察紀錄及圖片上傳等功能，採前後端分離架構。',
        highlights: [
          '前後端分離架構（ASP.NET + Angular）',
          '整合 Imgur API 進行圖片管理',
          'Azure 雲端部署',
          'Angular Material UI 元件庫'
        ],
        tech: ['ASP.NET', 'Angular', 'Angular Material', 'Azure', 'SQL Server', 'Imgur API'],
        githubBackend: 'https://github.com/JacobLanIsMe/ProductiveLab_B',
        githubFrontend: 'https://github.com/JacobLanIsMe/ProductiveLab_F',
        slides: 'https://drive.google.com/file/d/1GEDd35OvuzbtWQQnX-PcZvB_ye32AZDN/view?usp=sharing'
      },
      {
        id: 5,
        name: '台灣股票自動交易機器人',
        client: '個人專案',
        category: 'personal',
        description:
          '串接元大證券 OneAPI 取得即時行情，並執行自動化量化交易策略。',
        highlights: [
          '串接元大證券 OneAPI 即時行情資料',
          '實作量化交易策略邏輯',
          '自動化下單與風控機制'
        ],
        tech: ['ASP.NET', '元大證券 OneAPI', 'C#'],
        github: 'https://github.com/JacobLanIsMe/TwStockAutoTrade'
      },
      {
        id: 6,
        name: '台灣股票篩選系統',
        client: '個人專案',
        category: 'personal',
        description:
          '根據技術指標、基本面等多維度條件篩選台股，提供視覺化分析介面。',
        highlights: [
          '技術指標與基本面多維篩選',
          'Redis 快取加速查詢效能',
          'Background Service 定時更新資料',
          'Angular + Azure 前後端整合部署'
        ],
        tech: ['ASP.NET', 'Angular', 'Redis', 'Background Service', 'Azure'],
        githubBackend: 'https://github.com/JacobLanIsMe/MyFuture',
        githubFrontend: 'https://github.com/JacobLanIsMe/MyFuture_F'
      },
      {
        id: 7,
        name: '線上購物網站（培訓結業專題）',
        client: 'iSpan 培訓作品',
        category: 'personal',
        description:
          '整合賣家、買家與平台三方效益的電商系統，支援多賣場結帳、購物車、SignalR 競標、第三方金流等完整功能。',
        highlights: [
          '多賣場商品整合結帳流程',
          'SignalR 即時競標與出價更新',
          '串接歐付寶第三方金流（信用卡支付）',
          '整合 Google Maps API 選擇收貨地址',
          'IHostedService 商品自動上下架排程'
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'ASP.NET', 'SQL Server', 'SignalR'],
        github: 'https://github.com/JacobLanIsMe/slniSpanFinal',
        slides: 'https://drive.google.com/file/d/1qtebq4m7QWARYXMSFI_0UDmr6f3roJyb/view?usp=sharing'
      },
      {
        id: 8,
        name: 'p53 基因定序影像識別系統',
        client: '個人專案',
        category: 'personal',
        description:
          '結合生物醫學背景與影像處理技術，自動辨識 p53 基因定序圖像中的突變位點，用於癌症標記偵測。',
        highlights: [
          '基因定序圖像自動分析',
          'OpenCV 影像處理與特徵提取',
          '突變位點自動辨識標記',
          '跨領域：生醫知識 × 程式技術'
        ],
        tech: ['Python', 'OpenCV'],
        github: 'https://github.com/JacobLanIsMe/IDH1_mutation.git'
      }
    ],

    certifications: [
      {
        name: 'Microsoft Certified',
        subtitle: 'Azure Administrator Associate',
        level: 'Associate',
        color: '#0078d4',
        badge: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
        link: 'https://learn.microsoft.com/en-us/users/65617977/credentials/dc48a7fe17840212?ref=https%3A%2F%2Fwww.linkedin.com%2F'
      },
      {
        name: 'Microsoft Certified',
        subtitle: 'Azure Fundamentals',
        level: 'Fundamentals',
        color: '#0078d4',
        badge: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
        link: 'https://learn.microsoft.com/en-us/users/65617977/credentials/20b4446389bcb5e4?ref=https%3A%2F%2Fwww.linkedin.com%2F'
      }
    ]
  },

  biochemistry: {
    tagline: '學術研究背景',
    description:
      '在轉職軟體工程師之前，擁有台灣大學生物化學暨分子生物學博士學位，以及多年的學術研究與體外診斷試劑開發經驗。',

    education: [
      {
        degree: '博士 Ph.D.',
        field: '生物化學暨分子生物學研究所',
        institution: '國立台灣大學醫學院',
        period: '2010/09 - 2017/06',
        note: '研究方向：癌細胞轉移機制'
      },
      {
        degree: '學士 B.S.',
        field: '醫學檢驗生物技術學系',
        institution: '國立成功大學醫學院',
        period: '2005/09 - 2009/06',
        note: '取得醫事檢驗師執照'
      }
    ],

    experience: [
      {
        role: '研究助理',
        institution: '林口長庚醫院神經外科',
        period: '2020 - 2022',
        items: [
          '探討腦腫瘤與自然殺手細胞之間的相關性',
          '利用體外檢驗試劑分析健康受試者與惡性膠質母細胞瘤病人的自然殺手細胞活性'
        ]
      },
      {
        role: '資深研究員',
        institution: '凌越生醫股份有限公司',
        period: '2018 - 2020',
        items: [
          '人類過敏原檢驗晶片（Protein Chip）標準校正曲線設計，實現定量標準化',
          '牛口蹄疫快檢試劑（Lateral Flow Immunoassay）完成研發，進入試製階段',
          '豬偽狂犬病 ELISA 試劑完成雛形及可行性試驗'
        ]
      },
      {
        role: '博士後研究員',
        institution: '台灣大學醫學院生化分生所',
        period: '2017 - 2018',
        items: [
          '探討絲氨酸蛋白酶在大腸直腸癌中的角色（細胞侵襲、組織切片、動物模式）',
          '中草藥萃取物對胰臟癌侵襲及轉移的影響（MPLC/HPLC 分離四種活性化合物）',
          '肺癌用藥對 T 細胞增生及活化的影響（流式細胞儀分析）'
        ]
      }
    ],

    publications: [
      {
        type: 'First Author',
        title:
          'Inhibition of cyclooxygenase-2-mediated matriptase activation contributes to the suppression of prostate cancer cell motility and metastasis.',
        journal: 'Oncogene',
        citation: '36(32), 4597-4609, 2017'
      },
      {
        type: 'Co-Author',
        title:
          'Ketamine increase permeability and alters epithelial phenotype of renal distal tubular cells via a GSK-3β-dependent mechanism.',
        journal: 'Journal of Cellular Biochemistry',
        citation: '117(4), 881-893, 2016'
      },
      {
        type: 'Co-Author',
        title:
          'Androgen-induced TMPRSS2 activates matriptase and promotes extracellular matrix degradation, prostate cancer cell invasion, tumor growth, and metastasis.',
        journal: 'Cancer Research',
        citation: '75(14), 2949-2960, 2015'
      },
      {
        type: 'Co-Author',
        title:
          'HAI-2 suppresses the invasive growth and metastasis of prostate cancer through regulation of matriptase.',
        journal: 'Oncogene',
        citation: '33(38), 4643-4652, 2014'
      }
    ],

    awards: [
      '2017 International Conference on Environmental Medicine & 14th Symposium of Frontiers of Biomedical Sciences — Outstanding Paper Award',
      '醫事檢驗師執照'
    ],

    labSkills: [
      { category: '分子生物學', skills: ['Western Blotting', 'DNA Sequencing', 'DNA Construction', 'Protein Purification', 'Cell Culture', 'Flow Cytometry', 'IHC', 'ELISA'] },
      { category: '動物實驗', skills: ['Xenograft', 'Orthotopic Injection', 'Tail Vein Injection', 'Blood Sampling', 'In Vivo Imaging System (IVIS)'] },
      { category: '體外診斷試劑開發', skills: ['Rapid Test (LFA)', 'ELISA Kit Development', 'Protein Chip', 'FMEA 分析'] },
      { category: '資料分析軟體', skills: ['GraphPad Prism', 'Vector NTI', 'Python', 'R', 'PHP'] }
    ],

    conferences: [
      '2nd AACR International Conference on Frontiers in Basic Cancer Research, 2011 — Poster Presentation',
      '21st East Asia Joint Symposium on Biomedical Research, 2014 — Oral Presentation',
      '24th East Asia Joint Symposium on Biomedical Research, 2017 — Oral Presentation'
    ]
  }
}

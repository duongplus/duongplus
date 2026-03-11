const portfolioData = {

  skills: [
    {
      category: { vi: 'Mobile', en: 'Mobile' },
      items: ['Flutter', 'BLoC', 'Riverpod', 'Android', 'iOS', 'In-app Purchases', 'App Store / Google Play Publishing']
    },
    {
      category: { vi: 'Backend & Infra', en: 'Backend & Infra' },
      items: ['NestJS', 'Go', 'PostgreSQL', 'Knex', 'Redis', 'RabbitMQ', 'CI/CD', 'CDC', 'Docker']
    },
    {
      category: { vi: 'Tools', en: 'Tools' },
      items: ['Git', 'Jira']
    }
  ],

  experience: [
    {
      title: { vi: 'FullStack Developer', en: 'FullStack Developer' },
      company: { vi: 'questsme (Edutainment)', en: 'questsme (Edutainment)' },
      date: { vi: '04/2025 - hiện tại · Ho Chi Minh City', en: '04/2025 - present · Ho Chi Minh City' },
      descriptions: [
        {
          vi: 'Thiết kế kiến trúc <strong class="tech-term">Flutter</strong> có khả năng mở rộng sử dụng <strong class="tech-term">Riverpod</strong> và nguyên tắc <strong class="tech-term">SOLID</strong>, cải thiện khả năng bảo trì và tính module hóa.',
          en: 'Designed scalable <strong class="tech-term">Flutter</strong> architecture using <strong class="tech-term">Riverpod</strong> and <strong class="tech-term">SOLID</strong> principles, improving maintainability and modularity.'
        },
        {
          vi: 'Tích hợp <strong class="tech-term">VNPT eKYC SDK</strong> vào luồng xác thực danh tính người dùng.',
          en: 'Integrated <strong class="tech-term">VNPT eKYC SDK</strong> for user identity verification.'
        },
        {
          vi: 'Triển khai <strong class="tech-term">event-driven architecture</strong> sử dụng <strong class="tech-term">RabbitMQ</strong> để xử lý bất đồng bộ (email, SMS, OTP voice, push notification).',
          en: 'Implemented <strong class="tech-term">event-driven architecture</strong> using <strong class="tech-term">RabbitMQ</strong> for asynchronous processing (email, SMS, OTP voice, push notifications).'
        },
        {
          vi: 'Xây dựng hệ thống <strong class="tech-term">Change Data Capture (CDC)</strong> để tự động đồng bộ dữ liệu giữa các service.',
          en: 'Built <strong class="tech-term">Change Data Capture (CDC)</strong> system to automatically sync database changes between services.'
        },
        {
          vi: 'Thiết kế <strong class="tech-term">CI/CD</strong> pipeline để tự động build và deployment.',
          en: 'Designed <strong class="tech-term">CI/CD</strong> pipelines for automated build and deployment.'
        }
      ]
    },
    {
      title: { vi: 'Mobile Developer', en: 'Mobile Developer' },
      company: { vi: 'Cho Nhanh e-commerce Co., Ltd', en: 'Cho Nhanh e-commerce Co., Ltd' },
      date: { vi: '07/2023 - 04/2025 · Quận 12, TP.HCM', en: '07/2023 - 04/2025 · District 12, HCMC' },
      descriptions: [
        {
          vi: 'Lead team mobile xây dựng ứng dụng thương mại điện tử dạng video với feed dọc kiểu <strong class="tech-term">TikTok</strong>, tập trung vào hiệu năng và phát video mượt mà.',
          en: 'Led mobile team to build a video-based e-commerce app with <strong class="tech-term">TikTok</strong>-style vertical feed, focusing on performance and smooth video playback.'
        },
        {
          vi: 'Tech: <strong class="tech-term">Flutter</strong>, <strong class="tech-term">BLoC</strong>, <strong class="tech-term">Branch.io</strong>, <strong class="tech-term">IAP</strong>, caching, video preload, <strong class="tech-term">Firebase</strong>, <strong class="tech-term">socket.io</strong>.',
          en: 'Tech: <strong class="tech-term">Flutter</strong>, <strong class="tech-term">BLoC</strong>, <strong class="tech-term">Branch.io</strong>, <strong class="tech-term">IAP</strong>, caching, video preload, <strong class="tech-term">Firebase</strong>, <strong class="tech-term">socket.io</strong>.'
        },
        {
          vi: 'Thiết kế kiến trúc xác thực liên ứng dụng cho hệ sinh thái gồm 3 app sử dụng <strong class="tech-term">iOS Keychain Sharing</strong> cho <strong class="tech-term">cross-app SSO</strong> và bảo mật token.',
          en: 'Designed cross-app auth for 3-app ecosystem using <strong class="tech-term">iOS Keychain Sharing</strong> for <strong class="tech-term">cross-app SSO</strong> and token security.'
        }
      ]
    },
    {
      title: { vi: 'Mobile Developer', en: 'Mobile Developer' },
      company: { vi: 'Hahalolo travel social network JSC', en: 'Hahalolo travel social network JSC' },
      date: { vi: '03/2022 - 06/2023 · Bình Thạnh, TP.HCM', en: '03/2022 - 06/2023 · Binh Thanh, HCMC' },
      descriptions: [
        {
          vi: 'Phát triển tính năng Feed và đặt phòng khách sạn cho nền tảng mạng xã hội du lịch.',
          en: 'Developed Feed and Hotel Booking features for a travel social network platform.'
        },
        {
          vi: 'Tech: <strong class="tech-term">Flutter</strong>, <strong class="tech-term">Firebase</strong>, <strong class="tech-term">REST APIs</strong>, <strong class="tech-term">Material 3</strong>.',
          en: 'Tech: <strong class="tech-term">Flutter</strong>, <strong class="tech-term">Firebase</strong>, <strong class="tech-term">REST APIs</strong>, <strong class="tech-term">Material 3</strong>.'
        },
        {
          vi: 'Sử dụng <strong class="tech-term">Jira</strong> để quản lý công việc.',
          en: 'Used <strong class="tech-term">Jira</strong> for task management.'
        }
      ]
    },
    {
      title: { vi: 'Android Developer', en: 'Android Developer' },
      company: { vi: 'Citek Technology JSC', en: 'Citek Technology JSC' },
      date: { vi: '10/2018 - 06/2020 · Tân Bình, TP.HCM', en: '10/2018 - 06/2020 · Tan Binh, HCMC' },
      descriptions: [
        {
          vi: 'Xây dựng ứng dụng quản lý kho (nhập/xuất/tồn kho).',
          en: 'Built inventory management app (inbound/outbound/stock-on-hand).'
        },
        {
          vi: 'Tech: <strong class="tech-term">Java</strong>, <strong class="tech-term">SOAP API</strong>, <strong class="tech-term">Honeywell SDK</strong>, <strong class="tech-term">Datalogic SDK</strong>.',
          en: 'Tech: <strong class="tech-term">Java</strong>, <strong class="tech-term">SOAP API</strong>, <strong class="tech-term">Honeywell SDK</strong>, <strong class="tech-term">Datalogic SDK</strong>.'
        },
        {
          vi: 'Bảo trì và sửa lỗi các ứng dụng hiện có.',
          en: 'Maintained and fixed bugs in existing apps.'
        }
      ]
    }
  ],

  contributedProjects: [
    {
      title: { vi: 'questsme - Play, Learn & Earn', en: 'questsme - Play, Learn & Earn' },
      role: {
        vi: 'FullStack Developer. Phát triển app và website. Tham gia thiết kế hệ thống: API, Pub/Sub, CDC, CI/CD.',
        en: 'FullStack Developer. App and website development. System design: API, Pub/Sub, CDC, CI/CD.'
      },
      tech: ['Flutter', 'Firebase', 'NestJS', 'RabbitMQ', 'Redis'],
      links: [
        { type: 'play', url: 'https://play.google.com/store/search?q=questsme' },
        { type: 'appstore', url: 'https://apps.apple.com/vn/app/questsme-play-learn-earn/id6749788600' },
        { type: 'web', url: 'https://play.questsme.com/' }
      ]
    },
    {
      title: { vi: 'Chợ Nhanh, COPBEO & COPBEO Seller', en: 'Chợ Nhanh, COPBEO & COPBEO Seller' },
      role: {
        vi: 'Mobile Developer. Lead team phát triển app.',
        en: 'Mobile Developer. Led team for app development.'
      },
      tech: ['Flutter', 'BLoC', 'Branch.io', 'IAP', 'Caching', 'Video Preload', 'Firebase', 'socket.io'],
      subApps: [
        {
          name: 'Chợ Nhanh',
          links: [
            { type: 'play', url: 'https://play.google.com/store/apps/details?id=com.chonhanh.android' },
            { type: 'appstore', url: 'https://apps.apple.com/vn/app/ch%E1%BB%A3-nhanh-mua-b%C3%A1n-online/id6463835744' }
          ]
        },
        {
          name: 'COPBEO',
          links: [
            { type: 'play', url: 'https://play.google.com/store/apps/details?id=com.copbeo.android' },
            { type: 'appstore', url: 'https://apps.apple.com/vn/app/c%E1%BB%8Dp-beo-mua-s%E1%BA%AFm-online/id6479281754' }
          ]
        },
        {
          name: 'COPBEO Seller',
          links: [
            { type: 'play', url: 'https://play.google.com/store/apps/details?id=com.copbeoseller.android' },
            { type: 'appstore', url: 'https://apps.apple.com/vn/app/c%E1%BB%8Dp-beo-seller/id6479501521' }
          ]
        }
      ]
    },
    {
      title: { vi: 'Hahalolo', en: 'Hahalolo' },
      role: {
        vi: 'Mobile Developer. Phát triển Feed và Hotel Booking.',
        en: 'Mobile Developer. Feed and Hotel Booking development.'
      },
      tech: ['Flutter', 'Firebase', 'REST APIs', 'Material 3']
    },
    {
      title: {
        vi: 'Minh Phú Corp (App nội bộ), CADIVI Corp (App nội bộ)',
        en: 'Minh Phú Corp (Internal app), CADIVI Corp (Internal app)'
      },
      role: {
        vi: 'Android Developer. Phát triển ứng dụng quản lý kho trên máy quét chuyên dụng.',
        en: 'Android Developer. Inventory management app on handheld scanners.'
      },
      tech: ['Java', 'SOAP API', 'Honeywell SDK', 'Datalogic SDK']
    }
  ],

  personalProjects: [
    {
      title: { vi: 'Thần số học (Numerology 2024)', en: 'Than so hoc (Numerology 2024)' },
      description: { vi: '10,000+ lượt tải, đánh giá 3.3', en: '10,000+ downloads, 3.3 rating' },
      tech: ['Flutter', 'PHP'],
      links: [
        { type: 'play', url: 'https://play.google.com/store/apps/details?id=com.boitoan.thansohoc' }
      ]
    },
    {
      title: { vi: 'Gulagi (Personal Team)', en: 'Gulagi (Personal Team)' },
      links: [
        { type: 'web', url: 'https://gulagi.com' }
      ]
    },
    {
      title: { vi: 'DAS HUB', en: 'DAS HUB' },
      links: [
        { type: 'play', url: 'https://play.google.com/store/apps/details?id=com.dashub.android' },
        { type: 'appstore', url: 'https://apps.apple.com/vn/app/das-hub/id6744648759' }
      ]
    }
  ]

};

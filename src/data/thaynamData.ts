export interface Course {
  id: string;
  code: string;
  name: string;
  englishName: string;
  level: 'Đại học Chính quy' | 'Sau đại học (MBA)' | 'Đào tạo Doanh nghiệp';
  credits: number;
  description: string;
  topics: string[];
  examGuide: {
    format: string;
    duration: string;
    allowedMaterials: string;
    keyPoints: string[];
  };
  resourcesCount: {
    slides: number;
    datasets: number;
    exams: number;
  };
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Slide bài giảng' | 'Đề thi & Giới hạn ôn tập' | 'Dữ liệu thực hành' | 'Mẫu NCKH & Biểu mẫu';
  courseCode: string;
  format: 'PDF' | 'PPTX' | 'SAV' | 'XLSX' | 'DOCX';
  size: string;
  downloadCount: number;
  updatedDate: string;
  description: string;
  tags: string[];
}

export interface ResearchAward {
  id: string;
  year: string;
  award: string;
  topic: string;
  students: string[];
  cohort: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  cohort: string;
  major: string;
  avatarLetter: string;
  rating: number;
  comment: string;
  achievement?: string;
}

export const THAY_NAM_PROFILE = {
  fullName: 'ThS. Nguyễn Phương Nam',
  shortName: 'Thầy Nam',
  birthDate: '21/10/1983',
  birthPlace: 'TP. Hồ Chí Minh',
  origin: 'Nghệ An - Quảng Bình',
  email: 'namnp@ueh.edu.vn',
  domain: 'thaynam.top',
  platform: 'Happy Strong – Học Online',
  faculty: 'Khoa Quản trị – Trường Kinh doanh UEH',
  university: 'Đại học Kinh tế Thành phố Hồ Chí Minh (UEH)',
  address: '59C Nguyễn Đình Chiểu, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh',
  campusB: '279 Nguyễn Tri Phương, Phường 5, Quận 10, TP. Hồ Chí Minh',
  quote: 'Tri thức chia sẻ là tri thức nhân đôi. Học để tự do, nghiên cứu để sáng tạo và kiến tạo giá trị thực tiễn.',
  shortBio: 'ThS. Nguyễn Phương Nam là giảng viên Khoa Quản trị - Đại học Kinh tế TP.HCM (UEH), nhà nghiên cứu khoa học, cố vấn khởi nghiệp và chuyên gia ứng dụng công nghệ, phân tích định lượng và AI trong quản trị kinh doanh. Với hơn 15 năm gắn bó cùng giảng đường đại học, thầy luôn là người truyền lửa học thuật, dẫn dắt nhiều thế hệ sinh viên UEH chinh phục các giải thưởng NCKH uy tín như Euréka và UEH500.',
  stats: [
    { label: 'Năm kinh nghiệm giảng dạy', value: '15+' },
    { label: 'Sinh viên & Học viên đã học', value: '12.000+' },
    { label: 'Đề tài & Công trình NCKH', value: '45+' },
    { label: 'Nhóm sinh viên đạt giải NCKH', value: '28+' },
  ],
  roles: [
    {
      period: 'Hiện tại',
      role: 'Giảng viên Khoa Quản trị',
      organization: 'Trường Kinh doanh UEH (Đại học Kinh tế TP.HCM)',
      description: 'Giảng dạy các học phần Phương pháp NCKH trong kinh doanh, Phân tích định lượng, Quản trị học, Marketing số và Ứng dụng AI.',
    },
    {
      period: 'Từng đảm nhiệm',
      role: 'Trưởng Ban Hợp tác – NCKH – Quan hệ quốc tế',
      organization: 'Đoàn trường Đại học Kinh tế TP.HCM (UEH)',
      description: 'Phát động và chủ trì chuỗi hoạt động sinh viên nghiên cứu khoa học, phong trào học thuật và kết nối sinh viên quốc tế.',
    },
    {
      period: 'Từng đảm nhiệm',
      role: 'Giám đốc Dự án',
      organization: 'Viện Nghiên cứu Phát triển Nguồn nhân lực – UEH (HureSys)',
      description: 'Phát triển các chương trình đào tạo doanh nghiệp, khảo sát thị trường lao động và tư vấn năng lực quản trị.',
    },
    {
      period: 'Hoạt động xã hội',
      role: 'Thành viên cốt cán',
      organization: 'CLB Các Nhà Khoa Học Trẻ (Hội LHTN TP.HCM)',
      description: 'Tham gia các diễn đàn học thuật trẻ, cố vấn dự án khởi nghiệp sáng tạo và đổi mới công nghệ cho giới trẻ.',
    },
  ],
  pillars: [
    {
      icon: 'BookOpenCheck',
      title: 'Phương pháp NCKH (PPNCKH)',
      description: 'Định hình tư duy khoa học, xác định đúng Research Gap, xây dựng mô hình nghiên cứu chặt chẽ và thiết kế thang đo chuẩn mực.',
    },
    {
      icon: 'TrendingUp',
      title: 'Phân tích Dữ liệu Định lượng',
      description: 'Làm chủ các công cụ SPSS, AMOS, SmartPLS 4, Process Macro Hayes để kiểm định giả thuyết và mô hình cấu trúc tuyến tính.',
    },
    {
      icon: 'Briefcase',
      title: 'Quản trị Chiến lược & Khởi nghiệp',
      description: 'Kết hợp tư duy quản trị hiện đại, mô hình kinh doanh tinh gọn (Lean Canvas) và giải pháp chiến lược thích ứng trong kỷ nguyên số.',
    },
    {
      icon: 'Cpu',
      title: 'Ứng dụng AI & Công nghệ EdTech',
      description: 'Tiên phong ứng dụng trí tuệ nhân tạo, phân tích dữ liệu lớn và phương pháp sư phạm số trong giảng dạy và nghiên cứu thực chiến.',
    },
  ],
};

export const COURSES_LIST: Course[] = [
  {
    id: 'brm-ueh',
    code: 'MGT301',
    name: 'Phương pháp Nghiên cứu Khoa học trong Kinh doanh',
    englishName: 'Business Research Methods (BRM)',
    level: 'Đại học Chính quy',
    credits: 3,
    description: 'Học phần nền tảng trang bị quy trình nghiên cứu khoa học từ xác định khe hổng nghiên cứu (Research Gap), thiết kế nghiên cứu, phát triển thang đo, thu thập dữ liệu đến viết báo cáo học thuật chuẩn mực.',
    topics: [
      'Tổng quan về NCKH & Tư duy phản biện học thuật',
      'Xác định vấn đề nghiên cứu & Thiết lập khung khái niệm',
      'Nghiên cứu định tính & Xây dựng thang đo sơ bộ',
      'Thiết kế bảng khảo sát định lượng & Kỹ thuật chọn mẫu',
      'Thu thập dữ liệu thực tế và chuẩn bị file dữ liệu sạch',
      'Viết báo cáo nghiên cứu học thuật chuẩn cấu trúc IMRAD',
    ],
    examGuide: {
      format: 'Tiểu luận đề xuất nghiên cứu nhóm (Research Proposal) + Vấn đáp bảo vệ',
      duration: 'Bảo vệ theo lịch thi tập trung',
      allowedMaterials: 'Được sử dụng tài liệu tự chuẩn bị và slide bài giảng của Thầy',
      keyPoints: [
        'Tính cấp thiết và khe hổng nghiên cứu phải có trích dẫn từ bài báo quốc tế (2020-2025)',
        'Khung mô hình lý thuyết phải có lập luận giả thuyết (H1, H2,...) rõ ràng',
        'Bảng thang đo Likert 5 điểm cần ghi rõ nguồn gốc thừa kế (adapted from...)',
        'Tránh tuyệt đối lỗi đạo văn (Plagiarism < 15%)',
      ],
    },
    resourcesCount: { slides: 8, datasets: 4, exams: 3 },
  },
  {
    id: 'quant-ueh',
    code: 'MGT402',
    name: 'Phân tích Định lượng cho Nhà Quản trị',
    englishName: 'Quantitative Data Analysis for Management',
    level: 'Đại học Chính quy',
    credits: 3,
    description: 'Thực hành chuyên sâu xử lý và phân tích số liệu khảo sát kinh doanh bằng SPSS 28 và SmartPLS 4. Nắm vững kiểm định độ tin cậy, phân tích EFA, CFA, hồi quy và mô hình cấu trúc tuyến tính SEM.',
    topics: [
      'Làm sạch và mã hóa dữ liệu khảo sát trên SPSS',
      'Thống kê mô tả & Kiểm định độ tin cậy Cronbach Alpha',
      'Phân tích nhân tố khám phá (EFA) & Khẳng định (CFA)',
      'Hồi quy tuyến tính bội (OLS Regression) & Kiểm định giả định vi phạm',
      'Mô hình cấu trúc tuyến tính bình phương bé nhất từng phần (PLS-SEM)',
      'Kiểm định biến trung gian (Mediation) và biến điều tiết (Moderation)',
    ],
    examGuide: {
      format: 'Thực hành trên máy tính và trả lời bài thi tình huống định lượng',
      duration: '75 phút',
      allowedMaterials: 'Được sử dụng file số liệu đề thi cung cấp và tài liệu giấy',
      keyPoints: [
        'Nắm chắc điều kiện Cronbach Alpha > 0.6 và tương quan biến tổng > 0.3',
        'Hệ số KMO trong EFA từ 0.5 đến 1.0, Sig Bartlett < 0.05, Factor loading > 0.5',
        'Kiểm tra hiện tượng đa cộng tuyến qua chỉ số VIF < 2 (hoặc < 5)',
        'Đọc đúng giá trị p-value và giải thích ý nghĩa kinh tế của hệ số hồi quy',
      ],
    },
    resourcesCount: { slides: 10, datasets: 6, exams: 4 },
  },
  {
    id: 'strat-ueh',
    code: 'MGT202',
    name: 'Quản trị Chiến lược & Đổi mới Doanh nghiệp',
    englishName: 'Strategic Management & Corporate Innovation',
    level: 'Đại học Chính quy',
    credits: 3,
    description: 'Phân tích môi trường kinh doanh vĩ mô và vi mô, định vị lợi thế cạnh tranh bền vững, xây dựng và thực thi chiến lược cho doanh nghiệp trong môi trường VUCA.',
    topics: [
      'Bản chất của Quản trị chiến lược & Sứ mệnh tầm nhìn',
      'Phân tích môi trường bên ngoài: PESTEL & 5 Lực lượng cạnh tranh',
      'Phân tích nội bộ: Chuỗi giá trị & Mô hình VRIO',
      'Xây dựng ma trận chiến lược: SWOT, BCG, McKinsey, Ansoff',
      'Chiến lược Cạnh tranh tổng quát của Michael Porter & Đại dương xanh',
      'Thực thi chiến lược, đo lường bằng BSC (Balanced Scorecard) & OKR',
    ],
    examGuide: {
      format: 'Bài thi trắc nghiệm tình huống kết hợp tự luận phân tích case study',
      duration: '60 phút',
      allowedMaterials: 'Không sử dụng tài liệu',
      keyPoints: [
        'Phân biệt rõ ràng giữa Chiến lược chi phí thấp và Chiến lược khác biệt hóa',
        'Áp dụng đúng mô hình VRIO để xác định Nguồn lực tạo lợi thế cạnh tranh bền vững',
        'Phân tích tình huống doanh nghiệp Việt Nam thực tế (VinFast, FPT, Thế Giới Di Động, Highlands)',
      ],
    },
    resourcesCount: { slides: 7, datasets: 2, exams: 2 },
  },
  {
    id: 'digital-ueh',
    code: 'MKT305',
    name: 'Marketing Kỹ thuật số & Thương mại Điện tử',
    englishName: 'Digital Marketing & E-Commerce Strategy',
    level: 'Đại học Chính quy',
    credits: 3,
    description: 'Chiến lược tiếp thị đa kênh số (Omnichannel), tối ưu hóa trải nghiệm khách hàng trực tuyến, quảng cáo số, dữ liệu khách hàng (CDP) và thương mại điện tử hiện đại.',
    topics: [
      'Hành trình khách hàng thời đại số (5A: Aware, Appeal, Ask, Act, Advocate)',
      'Chiến lược Content Marketing & Tối ưu hóa công cụ tìm kiếm (SEO)',
      'Quảng cáo trả phí đa kênh: Google Ads, Meta Ads, TikTok Ads',
      'Mô hình kinh doanh sàn TMĐT (Shopee, TikTok Shop, Amazon)',
      'Phân tích dữ liệu tiếp thị (Marketing Analytics, Google Analytics 4, ROI/ROAS)',
      'Ứng dụng AI tự động hóa chăm sóc khách hàng và cá nhân hóa trải nghiệm',
    ],
    examGuide: {
      format: 'Đồ án nhóm triển khai chiến dịch Digital Marketing thực tế',
      duration: 'Báo cáo cuối khóa',
      allowedMaterials: 'Báo cáo kết quả số liệu chiến dịch thực tế kèm dashboard minh chứng',
      keyPoints: [
        'Chiến dịch phải có mục tiêu SMART và ngân sách cụ thể',
        'Có phân tích chuyển đổi Funnel và chỉ số CAC, CLV, ROAS',
      ],
    },
    resourcesCount: { slides: 9, datasets: 3, exams: 2 },
  },
  {
    id: 'mba-quant',
    code: 'MBA601',
    name: 'Phân tích Dữ liệu Nâng cao cho Nhà Điều hành',
    englishName: 'Advanced Data Analytics for Executives',
    level: 'Sau đại học (MBA)',
    credits: 3,
    description: 'Chương trình cao học trang bị kỹ năng ra quyết định dựa trên dữ liệu (Data-driven decision making), mô hình dự báo kinh doanh và ứng dụng AI phân tích hành vi tiêu dùng.',
    topics: [
      'Tư duy phân tích dữ liệu trong quản trị cấp cao',
      'Hồi quy Logistic và phân tích phân nhóm (Cluster Analysis)',
      'Mô hình cấu trúc SEM đa nhóm (Multigroup Analysis)',
      'Ứng dụng Trí tuệ Nhân tạo tạo sinh trong nghiên cứu thị trường',
    ],
    examGuide: {
      format: 'Báo cáo phân tích chuyên đề doanh nghiệp',
      duration: 'Tuần thi cao học',
      allowedMaterials: 'Tài liệu mở',
      keyPoints: [
        'Đưa ra khuyến nghị quản trị thực tiễn (Managerial Implications) dựa trên kết quả số liệu',
      ],
    },
    resourcesCount: { slides: 6, datasets: 4, exams: 1 },
  },
  {
    id: 'ai-business',
    code: 'EXC202',
    name: 'Ứng dụng AI & Công nghệ Số trong Quản trị Thực chiến',
    englishName: 'AI & Digital Tools for Modern Managers',
    level: 'Đào tạo Doanh nghiệp',
    credits: 2,
    description: 'Khóa học thực chiến dành cho quản lý doanh nghiệp và sinh viên năm cuối: Tối ưu hóa năng suất bằng AI, phân tích báo cáo tự động và xây dựng quy trình làm việc thông minh.',
    topics: [
      'Tổng quan GenAI và Prompt Engineering ứng dụng trong kinh doanh',
      'Tự động hóa nghiên cứu thị trường và phân tích đối thủ cạnh tranh',
      'Xây dựng trợ lý ảo chuyên ngành phục vụ phòng ban nội bộ',
      'Đạo đức sử dụng AI và bảo mật dữ liệu doanh nghiệp',
    ],
    examGuide: {
      format: 'Thực hành xây dựng giải pháp AI áp dụng trực tiếp vào công việc',
      duration: 'Buổi tổng kết',
      allowedMaterials: 'Laptop và công cụ AI',
      keyPoints: ['Giải quyết được ít nhất một nút thắt vận hành thực tế'],
    },
    resourcesCount: { slides: 5, datasets: 3, exams: 1 },
  },
];

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Slide Bài giảng Trọn bộ: Phương pháp NCKH trong Kinh doanh (Chương 1 - Chương 8)',
    category: 'Slide bài giảng',
    courseCode: 'MGT301',
    format: 'PDF',
    size: '14.2 MB',
    downloadCount: 3840,
    updatedDate: '2025-09-15',
    description: 'Bộ slide hoàn chỉnh cập nhật chuẩn học thuật UEH 2025, gồm các chương tổng quan, thiết kế nghiên cứu, thang đo và cấu trúc báo cáo IMRAD.',
    tags: ['PPNCKH', 'Slide', 'UEH', 'Chương 1-8'],
  },
  {
    id: 'res-2',
    title: 'Giới hạn Ôn tập Thi Kết thúc Học phần & Cấu trúc Đề thi Môn Phân tích Định lượng',
    category: 'Đề thi & Giới hạn ôn tập',
    courseCode: 'MGT402',
    format: 'PDF',
    size: '1.8 MB',
    downloadCount: 4920,
    updatedDate: '2025-11-20',
    description: 'Bản hướng dẫn ôn thi chính thức của Thầy Nam: Tóm tắt công thức đọc bảng SPSS, tiêu chuẩn Cronbach Alpha, EFA, ma trận xoay và mô hình hồi quy.',
    tags: ['Giới hạn ôn thi', 'SPSS', 'MGT402', 'Bí kíp điểm cao'],
  },
  {
    id: 'res-3',
    title: 'Bộ Dữ liệu Thực hành Mẫu SPSS: Khảo sát Hành vi Mua sắm Trực tuyến Gen Z (N=420)',
    category: 'Dữ liệu thực hành',
    courseCode: 'MGT402',
    format: 'SAV',
    size: '340 KB',
    downloadCount: 2750,
    updatedDate: '2025-10-05',
    description: 'Tập dữ liệu chuẩn hóa gồm 28 biến quan sát thuộc 6 nhân tố (Nhận thức hữu ích, Dễ sử dụng, Niềm tin, Giá cả, Rủi ro cảm nhận, Ý định mua sắm).',
    tags: ['Dataset SPSS', 'Gen Z', 'E-Commerce', 'Thực hành'],
  },
  {
    id: 'res-4',
    title: 'Mẫu Đề xuất Nghiên cứu Khoa học Sinh viên Chuẩn UEH500 & Euréka (Template & Hướng dẫn)',
    category: 'Mẫu NCKH & Biểu mẫu',
    courseCode: 'MGT301',
    format: 'DOCX',
    size: '2.4 MB',
    downloadCount: 3120,
    updatedDate: '2025-08-30',
    description: 'File Word mẫu trình bày đề tài NCKH đã định dạng sẵn lề, phông chữ Times New Roman, cấu trúc chương, bảng biểu và chuẩn trích dẫn APA 7th.',
    tags: ['UEH500', 'Eureka', 'Template Word', 'APA 7th'],
  },
  {
    id: 'res-5',
    title: 'Cẩm nang Thực hành SmartPLS 4 Từng Bước: Đánh giá Mô hình Đo lường & Mô hình Cấu trúc',
    category: 'Slide bài giảng',
    courseCode: 'MGT402',
    format: 'PDF',
    size: '8.7 MB',
    downloadCount: 2210,
    updatedDate: '2025-10-18',
    description: 'Hướng dẫn chi tiết kèm hình chụp màn hình: Đánh giá Indicator Reliability, CR, AVE, Fornell-Larcker, HTMT và phân tích Bootstrapping 5000 lần.',
    tags: ['SmartPLS 4', 'PLS-SEM', 'Hướng dẫn', 'CFA'],
  },
  {
    id: 'res-6',
    title: 'Bộ Đề thi Mẫu & Hướng dẫn Chấm Điểm Môn Quản trị Chiến lược (Các Học kỳ Gần nhất)',
    category: 'Đề thi & Giới hạn ôn tập',
    courseCode: 'MGT202',
    format: 'PDF',
    size: '2.1 MB',
    downloadCount: 1980,
    updatedDate: '2025-06-12',
    description: 'Tổng hợp 5 đề thi tình huống kèm gợi ý đáp án chi tiết, thang điểm chấm case study và bài học kinh nghiệm phân tích ma trận SWOT/BCG.',
    tags: ['Đề thi mẫu', 'Quản trị chiến lược', 'Đáp án'],
  },
  {
    id: 'res-7',
    title: 'Bộ Dữ liệu Thực hành Mô hình Trung gian & Điều tiết (Process Macro Hayes Model 4 & 7)',
    category: 'Dữ liệu thực hành',
    courseCode: 'MGT402',
    format: 'XLSX',
    size: '520 KB',
    downloadCount: 1640,
    updatedDate: '2025-09-28',
    description: 'Dữ liệu thực nghiệm phân tích vai trò trung gian của Cam kết tổ chức và vai trò điều tiết của Phong cách lãnh đạo chuyển đổi (N=365).',
    tags: ['Process Macro', 'Excel', 'Trung gian', 'Điều tiết'],
  },
  {
    id: 'res-8',
    title: 'Bảng Checklist Đạo văn & Tự Kiểm tra Trước khi Nộp Bài Tiểu luận / Khóa luận',
    category: 'Mẫu NCKH & Biểu mẫu',
    courseCode: 'MGT301',
    format: 'PDF',
    size: '680 KB',
    downloadCount: 2430,
    updatedDate: '2025-07-20',
    description: 'Checklist 15 tiêu chí quan trọng Thầy Nam yêu cầu sinh viên phải tích trước khi nộp đề tài, giúp tránh lỗi đạo văn và sai sót định dạng.',
    tags: ['Checklist', 'Tránh đạo văn', 'Khóa luận', 'Quy chuẩn'],
  },
];

export const RESEARCH_AWARDS: ResearchAward[] = [
  {
    id: 'award-1',
    year: '2024 - 2025',
    award: 'Giải Nhất Nghiên cứu Khoa học Sinh viên UEH500',
    topic: 'Tác động của Trí tuệ Nhân tạo tạo sinh (GenAI) đến Động lực Học tập và Hiệu quả Học tập của Sinh viên khối ngành Kinh tế',
    students: ['Nguyễn Thảo My', 'Trần Hoàng Nam', 'Lê Quỳnh Anh', 'Phạm Minh Trí'],
    cohort: 'K47 UEH',
    description: 'Đề tài ứng dụng mô hình chấp nhận công nghệ mở rộng (TAM 3) kết hợp lý thuyết tự quyết (SDT), thu thập 850 mẫu và kiểm định bằng PLS-SEM.',
  },
  {
    id: 'award-2',
    year: '2023 - 2024',
    award: 'Giải Nhì Giải thưởng Sinh viên Nghiên cứu Khoa học Toàn quốc Euréka',
    topic: 'Ý định Tiêu dùng Xanh của Thế hệ Gen Z tại các Đô thị lớn: Vai trò Điều tiết của Ý thức Trách nhiệm Xã hội',
    students: ['Vũ Đình Phúc', 'Đặng Thảo Linh', 'Nguyễn Đức Huy'],
    cohort: 'K46 UEH',
    description: 'Công trình được đánh giá cao về tính thực tiễn, đã được chuyển hóa thành bài báo xuất bản trên Tạp chí Kinh tế & Phát triển.',
  },
  {
    id: 'award-3',
    year: '2022 - 2023',
    award: 'Giải Xuất sắc Khóa luận Tốt nghiệp UEH',
    topic: 'Chiến lược Thích ứng Chuỗi Cung ứng trong Môi trường Hậu Đại dịch: Nghiên cứu Doanh nghiệp Bán lẻ tại TP.HCM',
    students: ['Trần Thu Trang'],
    cohort: 'K45 UEH',
    description: 'Khóa luận đạt điểm tuyệt đối 10/10 tại Hội đồng bảo vệ chuyên ngành Quản trị Kinh doanh.',
  },
  {
    id: 'award-4',
    year: '2021 - 2022',
    award: 'Giải Ba Cuộc thi Ý tưởng Khởi nghiệp Đổi mới Sáng tạo Sinh viên',
    topic: 'Dự án Happy Strong Edu: Nền tảng Học tập Trực tuyến và Hỗ trợ Nghiên cứu Học thuật cho Sinh viên',
    students: ['Lê Văn Đạt', 'Hoàng Bảo Ngọc'],
    cohort: 'K44 UEH',
    description: 'Dự án khởi nghiệp giáo dục số được ươm tạo từ chính triết lý chia sẻ tri thức của trang thaynam.top.',
  },
];

export const STUDENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Nguyễn Thảo My',
    cohort: 'K47 UEH - Quản trị Kinh doanh',
    major: 'Trưởng nhóm Đạt Giải Nhất UEH500',
    avatarLetter: 'M',
    rating: 5,
    comment: 'Nhờ sự hướng dẫn tận tâm của Thầy Nam, nhóm em từ một nhóm sinh viên chưa biết chạy SPSS đã tự tin phân tích mô hình SEM phức tạp và xuất sắc giành giải Nhất UEH500. Thầy luôn sửa bài rất kỹ, động viên tụi em mỗi khi gặp bế tắc về dữ liệu!',
    achievement: 'Giải Nhất UEH500 (2024)',
  },
  {
    id: 'test-2',
    name: 'Trần Minh Quang',
    cohort: 'K45 UEH - Marketing',
    major: 'Hiện là Senior Data Analyst tại Shopee Vietnam',
    avatarLetter: 'Q',
    rating: 5,
    comment: 'Môn Phân tích định lượng của Thầy Nam là bước ngoặt đối với sự nghiệp của em. Thầy không dạy lý thuyết sáo rỗng mà cho làm việc trực tiếp với dữ liệu doanh nghiệp thật. Đến tận bây giờ đi làm, những kiến thức hồi quy và tư duy kiểm định của thầy vẫn là vũ khí sắc bén nhất của em.',
    achievement: 'Thủ khoa Môn Phân tích Định lượng',
  },
  {
    id: 'test-3',
    name: 'Đặng Thảo Linh',
    cohort: 'K46 UEH - Kinh doanh Quốc tế',
    major: 'Giải Nhì Euréka Toàn quốc',
    avatarLetter: 'L',
    rating: 5,
    comment: 'Website thaynam.top là kho báu cứu cánh của toàn bộ sinh viên UEH tụi em mỗi mùa thi! Slide của thầy cực kỳ hệ thống, đề cương ôn tập bám sát thực tế, và đặc biệt thầy luôn tạo không khí học tập thoải mái, dí dỏm nhưng đòi hỏi tính chính xác cao.',
    achievement: 'Giải Nhì Euréka (2023)',
  },
  {
    id: 'test-4',
    name: 'Lê Hoàng Long',
    cohort: 'Học viên Cao học MBA K32',
    major: 'Giám đốc Vận hành Tech Startup',
    avatarLetter: 'L',
    rating: 5,
    comment: 'Lớp học của Thầy Nam mang lại góc nhìn chiến lược rất khác biệt cho người làm quản lý. Sự kết hợp giữa tư duy khoa học và công nghệ AI giúp tôi rút ngắn 40% thời gian phân tích thị trường. Thầy là người thầy vừa uyên bác vừa gần gũi.',
    achievement: 'Tốt nghiệp MBA loại Giỏi',
  },
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'Làm thế nào để đăng ký Thầy Nam hướng dẫn Đề tài NCKH UEH500 hoặc Khóa luận tốt nghiệp?',
    a: 'Sinh viên cần chuẩn bị trước bản Đề cương sơ bộ (Proposal) từ 3-5 trang gồm: Tên đề tài, Tính cấp thiết, Mục tiêu nghiên cứu, Câu hỏi nghiên cứu và Mô hình dự kiến. Sau đó gửi email trực tiếp đến namnp@ueh.edu.vn với tiêu đề: [Đăng ký Hướng dẫn NCKH/KLTN_Họ và tên_Khóa]. Thầy sẽ phản hồi trong vòng 48 giờ.',
  },
  {
    q: 'Các tài liệu, slide và dữ liệu mẫu trên thaynam.top có được tải miễn phí không?',
    a: 'Toàn bộ slide bài giảng, dữ liệu mẫu SPSS, template NCKH và cẩm nang trên website đều được Thầy Nam chia sẻ hoàn toàn phi lợi nhuận cho sinh viên UEH và cộng đồng người học trên cả nước theo đúng tinh thần "Tri thức chia sẻ là tri thức nhân đôi".',
  },
  {
    q: 'Khi làm bài định lượng, em nên chọn SPSS hay SmartPLS cho mô hình của mình?',
    a: 'Quy tắc cơ bản: Nếu mô hình nghiên cứu của bạn nhằm mục tiêu kiểm định lý thuyết đã vững chắc, mẫu lớn, tuân theo phân phối chuẩn, có thể dùng AMOS/SPSS. Nếu mô hình mang tính khám phá, dự báo, có cấu trúc phức tạp (nhiều biến trung gian, điều tiết, bậc cao), mẫu vừa hoặc nhỏ, SmartPLS 4 là lựa chọn tối ưu.',
  },
  {
    q: 'Lịch tiếp sinh viên (Office Hours) của Thầy Nam tại trường như thế nào?',
    a: 'Thầy tiếp sinh viên trực tiếp tại Văn phòng Khoa Quản trị (Cơ sở B: 279 Nguyễn Tri Phương, Q.10) vào sáng Thứ Ba và chiều Thứ Năm hàng tuần (cần đặt lịch trước qua form Liên hệ trên website để tránh trùng lịch họp). Với sinh viên ở xa, thầy hỗ trợ tư vấn qua Google Meet.',
  },
];

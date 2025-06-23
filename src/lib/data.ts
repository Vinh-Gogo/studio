export type News = {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: "Activity Updates" | "Price Quotations" | "Other News";
  image: string;
  content: string;
};

type Multilingual<T> = {
    en: T[];
    vi: T[];
}

export const newsData: Multilingual<News> = {
  en: [
    {
      id: 1,
      slug: "new-public-service-center-launch",
      title: "New Public Service Center Launch",
      date: "2024-07-20",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "A new state-of-the-art public service center has been inaugurated to streamline citizen services. The center is equipped with modern technology to reduce waiting times and improve efficiency. It will offer over 50 different types of services under one roof."
    },
    {
      id: 2,
      slug: "invitation-for-office-supply-quotations",
      title: "Invitation for Office Supply Quotations",
      date: "2024-07-18",
      category: "Price Quotations",
      image: "https://placehold.co/600x400.png",
      content: "We are inviting sealed quotations from eligible bidders for the procurement of office supplies for the fiscal year 2025. The deadline for submission is August 15, 2024. Please refer to the documents section for the detailed tender notice."
    },
    {
      id: 3,
      slug: "digital-transformation-seminar",
      title: "Digital Transformation Seminar Held",
      date: "2024-07-15",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "A successful seminar on digital transformation in governance was held, attended by experts from across the country. Key topics included AI in public administration, data security, and e-governance platforms."
    },
    {
      id: 4,
      slug: "national-day-celebration-plans",
      title: "National Day Celebration Plans Announced",
      date: "2024-07-10",
      category: "Other News",
      image: "https://placehold.co/600x400.png",
      content: "The department has announced the schedule for the upcoming National Day celebrations. The event will include a parade, cultural performances, and a fireworks display. All citizens are welcome to join."
    },
    {
      id: 5,
      slug: "infrastructure-project-completion",
      title: "Major Infrastructure Project Completed Ahead of Schedule",
      date: "2024-07-05",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "The Highway 1 expansion project has been completed two months ahead of schedule, easing traffic congestion and boosting regional connectivity. The project was a collaborative effort between multiple government agencies."
    }
  ],
  vi: [
    {
      id: 1,
      slug: "new-public-service-center-launch",
      title: "Ra mắt Trung tâm Dịch vụ Công mới",
      date: "20-07-2024",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "Một trung tâm dịch vụ công hiện đại đã được khánh thành nhằm hợp lý hóa các dịch vụ cho người dân. Trung tâm được trang bị công nghệ hiện đại để giảm thời gian chờ đợi và nâng cao hiệu quả. Nơi đây sẽ cung cấp hơn 50 loại dịch vụ khác nhau."
    },
    {
      id: 2,
      slug: "invitation-for-office-supply-quotations",
      title: "Mời báo giá cung cấp văn phòng phẩm",
      date: "18-07-2024",
      category: "Price Quotations",
      image: "https://placehold.co/600x400.png",
      content: "Chúng tôi mời các nhà thầu đủ điều kiện nộp báo giá kín cho việc mua sắm văn phòng phẩm cho năm tài chính 2025. Hạn chót nộp hồ sơ là ngày 15 tháng 8 năm 2024. Vui lòng tham khảo mục tài liệu để biết thông báo mời thầu chi tiết."
    },
    {
      id: 3,
      slug: "digital-transformation-seminar",
      title: "Tổ chức Hội thảo Chuyển đổi số",
      date: "15-07-2024",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "Một hội thảo thành công về chuyển đổi số trong quản trị đã được tổ chức với sự tham dự của các chuyên gia trên cả nước. Các chủ đề chính bao gồm AI trong hành chính công, an ninh dữ liệu và các nền tảng chính phủ điện tử."
    },
    {
      id: 4,
      slug: "national-day-celebration-plans",
      title: "Công bố kế hoạch kỷ niệm Ngày Quốc khánh",
      date: "10-07-2024",
      category: "Other News",
      image: "https://placehold.co/600x400.png",
      content: "Sở đã công bố lịch trình cho các hoạt động kỷ niệm Ngày Quốc khánh sắp tới. Sự kiện sẽ bao gồm diễu hành, biểu diễn văn hóa và bắn pháo hoa. Mời tất cả người dân tham gia."
    },
    {
      id: 5,
      slug: "infrastructure-project-completion",
      title: "Dự án hạ tầng lớn hoàn thành trước tiến độ",
      date: "05-07-2024",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "Dự án mở rộng Quốc lộ 1 đã hoàn thành trước hai tháng so với kế hoạch, giúp giảm ùn tắc giao thông và tăng cường kết nối khu vực. Dự án là nỗ lực hợp tác giữa nhiều cơ quan chính phủ."
    }
  ]
};

export type Personnel = {
  id: number;
  name: string;
  title: string;
  photo: string;
  email: string;
  phone: string;
  isLeadership: boolean;
};

export const personnelData: Multilingual<Personnel> = {
    en: [
        { id: 1, name: "Nguyen Van A", title: "Director General", photo: "https://placehold.co/200x200.png", email: "nva@pkhdtiuh.gov.vn", phone: "012-345-6789", isLeadership: true },
        { id: 2, name: "Tran Thi B", title: "Deputy Director", photo: "https://placehold.co/200x200.png", email: "ttb@pkhdtiuh.gov.vn", phone: "012-345-6788", isLeadership: true },
        { id: 3, name: "Le Van C", title: "Head of Administration", photo: "https://placehold.co/200x200.png", email: "lvc@pkhdtiuh.gov.vn", phone: "012-345-6787", isLeadership: false },
        { id: 4, name: "Pham Thi D", title: "IT Specialist", photo: "https://placehold.co/200x200.png", email: "ptd@pkhdtiuh.gov.vn", phone: "012-345-6786", isLeadership: false },
        { id: 5, name: "Hoang Van E", title: "Project Manager", photo: "https://placehold.co/200x200.png", email: "hve@pkhdtiuh.gov.vn", phone: "012-345-6785", isLeadership: false },
        { id: 6, name: "Do Thi F", title: "Accountant", photo: "https://placehold.co/200x200.png", email: "dtf@pkhdtiuh.gov.vn", phone: "012-345-6784", isLeadership: false },
    ],
    vi: [
        { id: 1, name: "Nguyễn Văn A", title: "Tổng Giám đốc", photo: "https://placehold.co/200x200.png", email: "nva@pkhdtiuh.gov.vn", phone: "012-345-6789", isLeadership: true },
        { id: 2, name: "Trần Thị B", title: "Phó Giám đốc", photo: "https://placehold.co/200x200.png", email: "ttb@pkhdtiuh.gov.vn", phone: "012-345-6788", isLeadership: true },
        { id: 3, name: "Lê Văn C", title: "Trưởng phòng Hành chính", photo: "https://placehold.co/200x200.png", email: "lvc@pkhdtiuh.gov.vn", phone: "012-345-6787", isLeadership: false },
        { id: 4, name: "Phạm Thị D", title: "Chuyên viên CNTT", photo: "https://placehold.co/200x200.png", email: "ptd@pkhdtiuh.gov.vn", phone: "012-345-6786", isLeadership: false },
        { id: 5, name: "Hoàng Văn E", title: "Quản lý dự án", photo: "https://placehold.co/200x200.png", email: "hve@pkhdtiuh.gov.vn", phone: "012-345-6785", isLeadership: false },
        { id: 6, name: "Đỗ Thị F", title: "Kế toán", photo: "https://placehold.co/200x200.png", email: "dtf@pkhdtiuh.gov.vn", phone: "012-345-6784", isLeadership: false },
    ]
};

export type Project = {
    id: number;
    name: string;
    description: string;
    status: "Ongoing" | "Completed" | "Procurement";
    startDate?: string;
    endDate?: string;
};

export const projectData: Multilingual<Project> = {
    en: [
        { id: 1, name: "E-Government Portal Phase 2", description: "Developing new modules for the national e-government portal.", status: "Ongoing", startDate: "2023-01-15" },
        { id: 2, name: "City Park Renovation", description: "Upgrading facilities and landscaping at the central city park.", status: "Completed", startDate: "2022-05-10", endDate: "2023-12-20" },
        { id: 3, name: "Procurement of IT Equipment", description: "Acquisition of new servers, computers, and networking hardware for department offices.", status: "Procurement" },
        { id: 4, name: "Rural Internet Connectivity Program", description: "Expanding broadband internet access to remote rural areas.", status: "Ongoing", startDate: "2023-06-01" },
        { id: 5, name: "National Archives Digitization", description: "Digitizing historical documents for online access and preservation.", status: "Completed", startDate: "2021-03-01", endDate: "2024-05-30" },
        { id: 6, name: "Public Transportation Smart Card System", description: "Implementing a unified smart card system for all public transport.", status: "Ongoing", startDate: "2022-11-20" },
    ],
    vi: [
        { id: 1, name: "Cổng Dịch vụ công Quốc gia Giai đoạn 2", description: "Phát triển các phân hệ mới cho cổng dịch vụ công quốc gia.", status: "Ongoing", startDate: "15-01-2023" },
        { id: 2, name: "Cải tạo Công viên Thành phố", description: "Nâng cấp cơ sở vật chất và cảnh quan tại công viên trung tâm thành phố.", status: "Completed", startDate: "10-05-2022", endDate: "20-12-2023" },
        { id: 3, name: "Mua sắm thiết bị CNTT", description: "Mua sắm máy chủ, máy tính và phần cứng mạng mới cho các văn phòng của sở.", status: "Procurement" },
        { id: 4, name: "Chương trình Kết nối Internet Nông thôn", description: "Mở rộng khả năng truy cập internet băng thông rộng đến các khu vực nông thôn hẻo lánh.", status: "Ongoing", startDate: "01-06-2023" },
        { id: 5, name: "Số hóa Lưu trữ Quốc gia", description: "Số hóa các tài liệu lịch sử để truy cập trực tuyến và bảo quản.", status: "Completed", startDate: "01-03-2021", endDate: "30-05-2024" },
        { id: 6, name: "Hệ thống Thẻ thông minh Giao thông Công cộng", description: "Triển khai hệ thống thẻ thông minh hợp nhất cho tất cả các phương tiện giao thông công cộng.", status: "Ongoing", startDate: "20-11-2022" },
    ]
};

export type Document = {
    id: number;
    name: string;
    type: string;
    agency: string;
    year: number;
    format: "PDF" | "DOCX";
    fileUrl: string;
};

export const documentData: Multilingual<Document> = {
    en: [
        { id: 1, name: "Decision 123/QD-BKH", type: "Decision", agency: "Ministry of Planning", year: 2024, format: "PDF", fileUrl: "#" },
        { id: 2, name: "Regulation on Public Tenders", type: "Regulation", agency: "Ministry of Finance", year: 2023, format: "PDF", fileUrl: "#" },
        { id: 3, name: "Application for Business License", type: "Form", agency: "Department of Industry", year: 2024, format: "DOCX", fileUrl: "#" },
        { id: 4, name: "Annual Economic Report 2023", type: "Report", agency: "Statistics Office", year: 2023, format: "PDF", fileUrl: "#" },
        { id: 5, name: "Regulation on Food Safety", type: "Regulation", agency: "Ministry of Health", year: 2022, format: "PDF", fileUrl: "#" },
        { id: 6, name: "Tax Declaration Form 2024", type: "Form", agency: "Tax Department", year: 2024, format: "DOCX", fileUrl: "#" },
    ],
    vi: [
        { id: 1, name: "Quyết định 123/QĐ-BKH", type: "Quyết định", agency: "Bộ Kế hoạch và Đầu tư", year: 2024, format: "PDF", fileUrl: "#" },
        { id: 2, name: "Quy định về Đấu thầu công", type: "Quy định", agency: "Bộ Tài chính", year: 2023, format: "PDF", fileUrl: "#" },
        { id: 3, name: "Đơn xin cấp Giấy phép kinh doanh", type: "Biểu mẫu", agency: "Sở Công thương", year: 2024, format: "DOCX", fileUrl: "#" },
        { id: 4, name: "Báo cáo Kinh tế Thường niên 2023", type: "Báo cáo", agency: "Tổng cục Thống kê", year: 2023, format: "PDF", fileUrl: "#" },
        { id: 5, name: "Quy định về An toàn thực phẩm", type: "Quy định", agency: "Bộ Y tế", year: 2022, format: "PDF", fileUrl: "#" },
        { id: 6, name: "Tờ khai thuế 2024", type: "Biểu mẫu", agency: "Cục Thuế", year: 2024, format: "DOCX", fileUrl: "#" },
    ]
};

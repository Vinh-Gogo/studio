
export type News = {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: "Activity Updates" | "Bidding Notices" | "Work Schedule";
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
      image: "https://images.unsplash.com/photo-1713948414133-c2cf74951e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxuZXdzJTIwYXJ0aWNsZSUyMGdvdmVybm1lbnR8ZW58MHx8fHwxNzUwNjY4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      content: "A new state-of-the-art public service center has been inaugurated to streamline citizen services. The center is equipped with modern technology to reduce waiting times and improve efficiency. It will offer over 50 different types of services under one roof."
    },
    {
      id: 2,
      slug: "invitation-for-office-supply-bidding",
      title: "Invitation for Bidding on Office Supplies",
      date: "2024-07-18",
      category: "Bidding Notices",
      image: "https://images.unsplash.com/photo-1737255287794-24ce61ded34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxuZXdzJTIwYXJ0aWNsZSUyMGdvdmVybm1lbnR8ZW58MHx8fHwxNzUwNjY4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      content: "We are inviting sealed bids from eligible bidders for the procurement of office supplies for the fiscal year 2025. The deadline for submission is August 15, 2024. Please refer to the documents section for the detailed tender notice."
    },
    {
      id: 3,
      slug: "digital-transformation-seminar",
      title: "Digital Transformation Seminar Held",
      date: "2024-07-15",
      category: "Activity Updates",
      image: "https://images.unsplash.com/photo-1722684768315-11fc753354f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYXJ0aWNsZSUyMGdvdmVybm1lbnR8ZW58MHx8fHwxNzUwNjY4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      content: "A successful seminar on digital transformation in governance was held, attended by experts from across the country. Key topics included AI in public administration, data security, and e-governance platforms."
    },
    {
      id: 4,
      slug: "august-work-schedule",
      title: "Department Work Schedule for August",
      date: "2024-07-10",
      category: "Work Schedule",
      image: "https://images.unsplash.com/photo-1720025352295-953d7ad65b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bmV3cyUyMGFydGljbGUlMjBnb3Zlcm5tZW50fGVufDB8fHx8MTc1MDY2ODY1NHww&ixlib=rb-4.1.0&q=80&w=1080",
      content: "The department has released the work and meeting schedule for August 2024. All staff are advised to check the internal portal for detailed timings and agendas."
    },
    {
      id: 5,
      slug: "infrastructure-project-completion",
      title: "Major Infrastructure Project Completed Ahead of Schedule",
      date: "2024-07-05",
      category: "Activity Updates",
      image: "https://images.unsplash.com/photo-1621672134447-5c576fdef903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxuZXdzJTIwYXJ0aWNsZSUyMGdvdmVybm1lbnR8ZW58MHx8fHwxNzUwNjY4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      content: "The Highway 1 expansion project has been completed two months ahead of schedule, easing traffic congestion and boosting regional connectivity. The project was a collaborative effort between multiple government agencies."
    },
    {
      id: 6,
      slug: "public-service-excellence-award",
      title: "Department Receives Award for Public Service Excellence",
      date: "2024-06-28",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "Our department was honored with the National Award for Public Service Excellence for our commitment to transparency and citizen-centric services."
    },
    {
      id: 7,
      slug: "tender-it-infrastructure-upgrade",
      title: "Tender for IT Infrastructure Upgrade",
      date: "2024-06-25",
      category: "Bidding Notices",
      image: "https://placehold.co/600x400.png",
      content: "Bids are invited for the comprehensive upgrade of our IT infrastructure, including servers, networking, and security systems. Details are available in the documents section."
    },
    {
      id: 8,
      slug: "september-2024-meeting-schedule",
      title: "September 2024 Departmental Meeting Schedule",
      date: "2024-06-20",
      category: "Work Schedule",
      image: "https://placehold.co/600x400.png",
      content: "Please be advised of the upcoming departmental meetings for September 2024. All heads of departments are required to attend."
    },
    {
      id: 9,
      slug: "citizen-feedback-portal-launch",
      title: "Launch of New Citizen Feedback Portal",
      date: "2024-06-15",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "We are excited to launch a new online portal for citizen feedback, making it easier for the public to share suggestions and report issues."
    },
    {
      id: 10,
      slug: "successful-blood-donation-drive",
      title: "Successful Blood Donation Drive Organized",
      date: "2024-06-10",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "The department successfully organized a blood donation drive in collaboration with the Red Cross, with over 200 employees participating."
    },
    {
      id: 11,
      slug: "quote-office-furniture",
      title: "Invitation to Quote for Office Furniture",
      date: "2024-06-05",
      category: "Bidding Notices",
      image: "https://placehold.co/600x400.png",
      content: "We are seeking quotations for the supply and installation of new office furniture. Interested vendors can find the RFQ document on our portal."
    },
    {
      id: 12,
      slug: "national-day-holiday-schedule",
      title: "Holiday Schedule for National Day",
      date: "2024-06-01",
      category: "Work Schedule",
      image: "https://placehold.co/600x400.png",
      content: "The department will be closed from September 2nd to September 3rd in observance of National Day. Normal operations will resume on September 4th."
    },
    {
      id: 13,
      slug: "cybersecurity-training-for-staff",
      title: "Cybersecurity Training for All Staff",
      date: "2024-05-28",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "Mandatory cybersecurity training will be held for all staff members to enhance awareness and protect departmental data."
    },
    {
      id: 14,
      slug: "university-internship-partnership",
      title: "Partnership with Local University for Internships",
      date: "2024-05-22",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "A new partnership has been established with a local university to provide internship opportunities for students in public administration."
    },
    {
      id: 15,
      slug: "tender-landscaping-maintenance",
      title: "Tender for Landscaping and Maintenance Services",
      date: "2024-05-18",
      category: "Bidding Notices",
      image: "https://placehold.co/600x400.png",
      content: "We are accepting tenders for a 3-year contract for landscaping and maintenance services for our office premises. The deadline is July 30, 2024."
    }
  ],
  vi: [
    {
      id: 1,
      slug: "new-public-service-center-launch",
      title: "Ra mắt Trung tâm Dịch vụ Công mới",
      date: "20-07-2024",
      category: "Activity Updates",
      image: "https://images.unsplash.com/photo-1713948414133-c2cf74951e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxuZXdzJTIwYXJ0aWNsZSUyMGdvdmVybm1lbnR8ZW58MHx8fHwxNzUwNjY4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      content: "Một trung tâm dịch vụ công hiện đại đã được khánh thành nhằm hợp lý hóa các dịch vụ cho người dân. Trung tâm được trang bị công nghệ hiện đại để giảm thời gian chờ đợi và nâng cao hiệu quả. Nơi đây sẽ cung cấp hơn 50 loại dịch vụ khác nhau."
    },
    {
      id: 2,
      slug: "invitation-for-office-supply-bidding",
      title: "Thông báo mời thầu cung cấp văn phòng phẩm",
      date: "18-07-2024",
      category: "Bidding Notices",
      image: "https://images.unsplash.com/photo-1737255287794-24ce61ded34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxuZXdzJTIwYXJ0aWNsZSUyMGdvdmVybm1lbnR8ZW58MHx8fHwxNzUwNjY4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      content: "Chúng tôi mời các nhà thầu đủ điều kiện nộp hồ sơ dự thầu kín cho việc mua sắm văn phòng phẩm cho năm tài chính 2025. Hạn chót nộp hồ sơ là ngày 15 tháng 8 năm 2024. Vui lòng tham khảo mục tài liệu để biết thông báo mời thầu chi tiết."
    },
    {
      id: 3,
      slug: "digital-transformation-seminar",
      title: "Tổ chức Hội thảo Chuyển đổi số",
      date: "15-07-2024",
      category: "Activity Updates",
      image: "https://images.unsplash.com/photo-1722684768315-11fc753354f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYXJ0aWNsZSUyMGdvdmVybm1lbnR8ZW58MHx8fHwxNzUwNjY4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      content: "Một hội thảo thành công về chuyển đổi số trong quản trị đã được tổ chức với sự tham dự của các chuyên gia trên cả nước. Các chủ đề chính bao gồm AI trong hành chính công, an ninh dữ liệu và các nền tảng chính phủ điện tử."
    },
    {
      id: 4,
      slug: "august-work-schedule",
      title: "Lịch công tác tháng 8 của phòng ban",
      date: "10-07-2024",
      category: "Work Schedule",
      image: "https://images.unsplash.com/photo-1720025352295-953d7ad65b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bmV3cyUyMGFydGljbGUlMjBnb3Zlcm5tZW50fGVufDB8fHx8MTc1MDY2ODY1NHww&ixlib=rb-4.1.0&q=80&w=1080",
      content: "Phòng ban đã công bố lịch làm việc và lịch họp cho tháng 8 năm 2024. Toàn thể nhân viên vui lòng kiểm tra cổng thông tin nội bộ để biết thời gian và chương trình chi tiết."
    },
    {
      id: 5,
      slug: "infrastructure-project-completion",
      title: "Dự án hạ tầng lớn hoàn thành trước tiến độ",
      date: "05-07-2024",
      category: "Activity Updates",
      image: "https://images.unsplash.com/photo-1621672134447-5c576fdef903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxuZXdzJTIwYXJ0aWNsZSUyMGdvdmVybm1lbnR8ZW58MHx8fHwxNzUwNjY4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      content: "Dự án mở rộng Quốc lộ 1 đã hoàn thành trước hai tháng so với kế hoạch, giúp giảm ùn tắc giao thông và tăng cường kết nối khu vực. Dự án là nỗ lực hợp tác giữa nhiều cơ quan chính phủ."
    },
    {
      id: 6,
      slug: "public-service-excellence-award",
      title: "Phòng ban nhận giải thưởng xuất sắc về dịch vụ công",
      date: "28-06-2024",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "Phòng ban của chúng tôi đã được vinh danh với Giải thưởng Quốc gia về Dịch vụ Công xuất sắc vì sự cam kết của chúng tôi đối với tính minh bạch và các dịch vụ lấy người dân làm trung tâm."
    },
    {
      id: 7,
      slug: "tender-it-infrastructure-upgrade",
      title: "Mời thầu nâng cấp hạ tầng công nghệ thông tin",
      date: "25-06-2024",
      category: "Bidding Notices",
      image: "https://placehold.co/600x400.png",
      content: "Mời các nhà thầu tham gia đấu thầu nâng cấp toàn diện hạ tầng công nghệ thông tin, bao gồm máy chủ, hệ thống mạng và hệ thống bảo mật. Chi tiết có trong mục tài liệu."
    },
    {
      id: 8,
      slug: "september-2024-meeting-schedule",
      title: "Lịch họp phòng ban tháng 9 năm 2024",
      date: "20-06-2024",
      category: "Work Schedule",
      image: "https://placehold.co/600x400.png",
      content: "Xin thông báo lịch các cuộc họp của phòng ban trong tháng 9 năm 2024. Yêu cầu tất cả các trưởng phòng tham dự."
    },
    {
      id: 9,
      slug: "citizen-feedback-portal-launch",
      title: "Ra mắt cổng thông tin phản hồi của công dân mới",
      date: "15-06-2024",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "Chúng tôi rất vui mừng ra mắt cổng thông tin trực tuyến mới dành cho phản hồi của công dân, giúp công chúng dễ dàng chia sẻ đề xuất và báo cáo các vấn đề."
    },
    {
      id: 10,
      slug: "successful-blood-donation-drive",
      title: "Tổ chức thành công ngày hội hiến máu nhân đạo",
      date: "10-06-2024",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "Phòng ban đã tổ chức thành công ngày hội hiến máu nhân đạo phối hợp với Hội Chữ thập đỏ, với hơn 200 nhân viên tham gia."
    },
    {
      id: 11,
      slug: "quote-office-furniture",
      title: "Mời báo giá cung cấp nội thất văn phòng",
      date: "05-06-2024",
      category: "Bidding Notices",
      image: "https://placehold.co/600x400.png",
      content: "Chúng tôi đang tìm kiếm báo giá cho việc cung cấp và lắp đặt nội thất văn phòng mới. Các nhà cung cấp quan tâm có thể tìm thấy tài liệu yêu cầu báo giá trên cổng thông tin của chúng tôi."
    },
    {
      id: 12,
      slug: "national-day-holiday-schedule",
      title: "Lịch nghỉ Lễ Quốc khánh",
      date: "01-06-2024",
      category: "Work Schedule",
      image: "https://placehold.co/600x400.png",
      content: "Phòng sẽ nghỉ làm việc từ ngày 2 tháng 9 đến hết ngày 3 tháng 9 để nghỉ Lễ Quốc khánh. Hoạt động bình thường sẽ trở lại vào ngày 4 tháng 9."
    },
    {
      id: 13,
      slug: "cybersecurity-training-for-staff",
      title: "Tổ chức tập huấn an ninh mạng cho toàn thể nhân viên",
      date: "28-05-2024",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "Buổi tập huấn an ninh mạng bắt buộc sẽ được tổ chức cho toàn thể nhân viên nhằm nâng cao nhận thức và bảo vệ dữ liệu của phòng ban."
    },
    {
      id: 14,
      slug: "university-internship-partnership",
      title: "Hợp tác với trường đại học địa phương về chương trình thực tập",
      date: "22-05-2024",
      category: "Activity Updates",
      image: "https://placehold.co/600x400.png",
      content: "Một quan hệ đối tác mới đã được thiết lập với một trường đại học địa phương để cung cấp cơ hội thực tập cho sinh viên ngành hành chính công."
    },
    {
      id: 15,
      slug: "tender-landscaping-maintenance",
      title: "Mời thầu dịch vụ chăm sóc và bảo trì cảnh quan",
      date: "18-05-2024",
      category: "Bidding Notices",
      image: "https://placehold.co/600x400.png",
      content: "Chúng tôi đang tiếp nhận hồ sơ dự thầu cho hợp đồng 3 năm về dịch vụ chăm sóc và bảo trì cảnh quan cho khuôn viên văn phòng. Hạn chót nộp hồ sơ là ngày 30 tháng 7 năm 2024."
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
        { id: 1, name: "Nguyen Van A", title: "Director General", photo: "https://placehold.co/200x200.png", email: "nva@phongkhdt.iuh.edu.vn", phone: "012-345-6789", isLeadership: true },
        { id: 2, name: "Tran Thi B", title: "Deputy Director", photo: "https://placehold.co/200x200.png", email: "ttb@phongkhdt.iuh.edu.vn", phone: "012-345-6788", isLeadership: true },
        { id: 3, name: "Le Van C", title: "Head of Administration", photo: "https://placehold.co/200x200.png", email: "lvc@phongkhdt.iuh.edu.vn", phone: "012-345-6787", isLeadership: false },
        { id: 4, name: "Pham Thi D", title: "IT Specialist", photo: "https://placehold.co/200x200.png", email: "ptd@phongkhdt.iuh.edu.vn", phone: "012-345-6786", isLeadership: false },
        { id: 5, name: "Hoang Van E", title: "Project Manager", photo: "https://placehold.co/200x200.png", email: "hve@phongkhdt.iuh.edu.vn", phone: "012-345-6785", isLeadership: false },
        { id: 6, name: "Do Thi F", title: "Accountant", photo: "https://placehold.co/200x200.png", email: "dtf@phongkhdt.iuh.edu.vn", phone: "012-345-6784", isLeadership: false },
    ],
    vi: [
        { id: 1, name: "Nguyễn Văn A", title: "Tổng Giám đốc", photo: "https://placehold.co/200x200.png", email: "nva@phongkhdt.iuh.edu.vn", phone: "012-345-6789", isLeadership: true },
        { id: 2, name: "Trần Thị B", title: "Phó Giám đốc", photo: "https://placehold.co/200x200.png", email: "ttb@phongkhdt.iuh.edu.vn", phone: "012-345-6788", isLeadership: true },
        { id: 3, name: "Lê Văn C", title: "Trưởng phòng Hành chính", photo: "https://placehold.co/200x200.png", email: "lvc@phongkhdt.iuh.edu.vn", phone: "012-345-6787", isLeadership: false },
        { id: 4, name: "Phạm Thị D", title: "Chuyên viên CNTT", photo: "https://placehold.co/200x200.png", email: "ptd@phongkhdt.iuh.edu.vn", phone: "012-345-6786", isLeadership: false },
        { id: 5, name: "Hoàng Văn E", title: "Quản lý dự án", photo: "https://placehold.co/200x200.png", email: "hve@phongkhdt.iuh.edu.vn", phone: "012-345-6785", isLeadership: false },
        { id: 6, name: "Đỗ Thị F", title: "Kế toán", photo: "https://placehold.co/200x200.png", email: "dtf@phongkhdt.iuh.edu.vn", phone: "012-345-6784", isLeadership: false },
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

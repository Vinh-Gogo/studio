export type News = {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: "Activity Updates" | "Price Quotations" | "Other News";
  image: string;
  content: string;
};

export const newsData: News[] = [
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
];

export type Personnel = {
  id: number;
  name: string;
  title: string;
  photo: string;
  email: string;
  phone: string;
  isLeadership: boolean;
};

export const personnelData: Personnel[] = [
  { id: 1, name: "Nguyen Van A", title: "Director General", photo: "https://placehold.co/200x200.png", email: "nva@pkhdtiuh.gov.vn", phone: "012-345-6789", isLeadership: true },
  { id: 2, name: "Tran Thi B", title: "Deputy Director", photo: "https://placehold.co/200x200.png", email: "ttb@pkhdtiuh.gov.vn", phone: "012-345-6788", isLeadership: true },
  { id: 3, name: "Le Van C", title: "Head of Administration", photo: "https://placehold.co/200x200.png", email: "lvc@pkhdtiuh.gov.vn", phone: "012-345-6787", isLeadership: false },
  { id: 4, name: "Pham Thi D", title: "IT Specialist", photo: "https://placehold.co/200x200.png", email: "ptd@pkhdtiuh.gov.vn", phone: "012-345-6786", isLeadership: false },
  { id: 5, name: "Hoang Van E", title: "Project Manager", photo: "https://placehold.co/200x200.png", email: "hve@pkhdtiuh.gov.vn", phone: "012-345-6785", isLeadership: false },
  { id: 6, name: "Do Thi F", title: "Accountant", photo: "https://placehold.co/200x200.png", email: "dtf@pkhdtiuh.gov.vn", phone: "012-345-6784", isLeadership: false },
];

export type Project = {
    id: number;
    name: string;
    description: string;
    status: "Ongoing" | "Completed" | "Procurement";
    startDate?: string;
    endDate?: string;
};

export const projectData: Project[] = [
    { id: 1, name: "E-Government Portal Phase 2", description: "Developing new modules for the national e-government portal.", status: "Ongoing", startDate: "2023-01-15" },
    { id: 2, name: "City Park Renovation", description: "Upgrading facilities and landscaping at the central city park.", status: "Completed", startDate: "2022-05-10", endDate: "2023-12-20" },
    { id: 3, name: "Procurement of IT Equipment", description: "Acquisition of new servers, computers, and networking hardware for department offices.", status: "Procurement" },
    { id: 4, name: "Rural Internet Connectivity Program", description: "Expanding broadband internet access to remote rural areas.", status: "Ongoing", startDate: "2023-06-01" },
    { id: 5, name: "National Archives Digitization", description: "Digitizing historical documents for online access and preservation.", status: "Completed", startDate: "2021-03-01", endDate: "2024-05-30" },
    { id: 6, name: "Public Transportation Smart Card System", description: "Implementing a unified smart card system for all public transport.", status: "Ongoing", startDate: "2022-11-20" },
];

export type Document = {
    id: number;
    name: string;
    type: "Decision" | "Regulation" | "Form" | "Report";
    agency: string;
    year: number;
    format: "PDF" | "DOCX";
    fileUrl: string;
};

export const documentData: Document[] = [
    { id: 1, name: "Decision 123/QD-BKH", type: "Decision", agency: "Ministry of Planning", year: 2024, format: "PDF", fileUrl: "#" },
    { id: 2, name: "Regulation on Public Tenders", type: "Regulation", agency: "Ministry of Finance", year: 2023, format: "PDF", fileUrl: "#" },
    { id: 3, name: "Application for Business License", type: "Form", agency: "Department of Industry", year: 2024, format: "DOCX", fileUrl: "#" },
    { id: 4, name: "Annual Economic Report 2023", type: "Report", agency: "Statistics Office", year: 2023, format: "PDF", fileUrl: "#" },
    { id: 5, name: "Regulation on Food Safety", type: "Regulation", agency: "Ministry of Health", year: 2022, format: "PDF", fileUrl: "#" },
    { id: 6, name: "Tax Declaration Form 2024", type: "Form", agency: "Tax Department", year: 2024, format: "DOCX", fileUrl: "#" },
];

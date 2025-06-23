"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/contexts/language-context"

export default function FAQPage() {
    const { t, language } = useLanguage()

    const faqData = {
        en: [
            { q: "How do I apply for a business license?", a: "You can find the application form in the Documents & Forms section. Please fill it out and submit it to our main office." },
            { q: "What are the department's working hours?", a: "Our offices are open from 8:00 AM to 5:00 PM, Monday to Friday." },
            { q: "How can I get information about public tenders?", a: "All information regarding public tenders is posted in the News & Notices section under the 'Price Quotations' category." },
            { q: "Who should I contact for project-related inquiries?", a: "Please visit the Contact page for specific contact details or use the general contact form for your inquiries." }
        ],
        vi: [
            { q: "Làm thế nào để xin giấy phép kinh doanh?", a: "Bạn có thể tìm thấy biểu mẫu đơn trong mục Văn bản - Biểu mẫu. Vui lòng điền và nộp tại văn phòng chính của chúng tôi." },
            { q: "Thời gian làm việc của phòng ban là khi nào?", a: "Văn phòng của chúng tôi mở cửa từ 8:00 sáng đến 5:00 chiều, từ thứ Hai đến thứ Sáu." },
            { q: "Làm thế nào để có thông tin về các gói thầu công khai?", a: "Tất cả thông tin về đấu thầu công khai được đăng trong mục Tin tức - Thông báo, dưới danh mục 'Báo giá'." },
            { q: "Tôi nên liên hệ ai để hỏi về các vấn đề liên quan đến dự án?", a: "Vui lòng truy cập trang Liên hệ để biết chi tiết liên lạc cụ thể hoặc sử dụng biểu mẫu liên hệ chung cho các câu hỏi của bạn." }
        ]
    }

    const currentFaqData = faqData[language];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{t('faqTitle')}</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t('faqSubtitle')}
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {currentFaqData.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                            <AccordionContent>
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

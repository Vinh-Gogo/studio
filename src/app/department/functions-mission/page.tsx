"use client"
import { useLanguage } from "@/contexts/language-context"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FunctionsMissionPage() {
  const { t, language } = useLanguage()

  const functionsContent = {
    en: [
        "Manage all financial revenues and expenditures in accordance with current laws.",
        "Manage cash funds, bank deposits, and treasury.",
        "Manage physical facilities through financial operations. Develop short-term and long-term financial plans.",
        "Guide and inspect financial activities in affiliated and subordinate units.",
        "Control procurement, repair, and construction activities.",
        "Synthesize and report on the annual financial situation to the University President and the Ministry of Industry and Trade for approval.",
        "Advise and assist the University President in managing, synthesizing, proposing ideas, and organizing the implementation of the University's financial and accounting tasks.",
    ],
    vi: [
        "Quản lý toàn bộ nguồn thu – chi tài chính theo đúng pháp luật hiện hành.",
        "Quản lý các quỹ tiền mặt, tiền gửi ngân hàng, kho bạc.",
        "Quản lý cơ sở vật chất bằng nghiệp vụ tài chính. Xây dựng kế hoạch tài chính ngắn hạn và dài hạn.",
        "Hướng dẫn, kiểm tra hoạt động tài chính tại các đơn vị thuộc, trực thuộc.",
        "Kiểm soát việc mua sắm, sửa chữa, xây dựng.",
        "Tổng hợp báo cáo tình hình hoạt động tài chính hàng năm của Trường trình Hiệu trưởng và Bộ Công Thương phê duyệt.",
        "Tham mưu và giúp Hiệu trưởng trong việc quản lý, tổng hợp, đề xuất ý kiến, tổ chức thực hiện các công tác tài chính kế toán của Trường.",
    ]
  }

  const dutiesContent = {
      en: [
          "Develop revenue-expenditure estimates for the State Budget.",
          "Develop revenue-expenditure estimates for Capital Construction Investment.",
          "Develop revenue-expenditure estimates for Professional Activities.",
      ],
      vi: [
          "Xây dựng dự toán thu - chi Ngân sách.",
          "Xây dựng dự toán thu - chi Đầu tư xây dựng cơ bản.",
          "Xây dựng dự toán thu - chi sự nghiệp.",
      ]
  }

  return (
    <div className="container mx-auto px-4 py-12">
        <Breadcrumb className="mb-8">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">{t('home')}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/department">{t('department')}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{t('functionsAndMission')}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{t('functionsAndMission')}</h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-headline">I. {t('functions')}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                    {functionsContent[language].map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-headline">II. {t('duties')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h4 className="font-semibold text-lg">{t('performFinancialManagement')}</h4>
                    <h5 className="font-medium text-md mt-2 mb-1">{t('prepareAnnualBudget')}</h5>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                        {dutiesContent[language].map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    <h5 className="font-medium text-md mt-4 mb-1">{t('settleFundingSources')}</h5>
                    <p className="text-muted-foreground pl-4">...</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}

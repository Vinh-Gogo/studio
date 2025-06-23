"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Trophy } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"


export default function HistoryAchievementsPage() {
  const { t, language } = useLanguage()

  const historyContent = {
    en: "Established in 1985, our department has grown from a small administrative body to a key governmental institution. Over the decades, we have adapted to the changing needs of our nation, consistently pioneering new approaches to public administration and governance.",
    vi: "Được thành lập vào năm 1985, phòng ban của chúng tôi đã phát triển từ một cơ quan hành chính nhỏ thành một cơ quan chính phủ chủ chốt. Qua nhiều thập kỷ, chúng tôi đã thích ứng với nhu cầu thay đổi của đất nước, không ngừng đi tiên phong trong các phương pháp tiếp cận mới đối với hành chính công và quản trị."
  }

  const achievementsContent = {
    en: [
      "National Award for E-Governance (2022)",
      "ISO 9001:2015 Certification (2021)",
      "Successful implementation of 50+ key projects",
      "Reduced service delivery time by 40%",
    ],
    vi: [
      "Giải thưởng Quốc gia về Chính phủ điện tử (2022)",
      "Chứng nhận ISO 9001:2015 (2021)",
      "Thực hiện thành công hơn 50 dự án trọng điểm",
      "Giảm 40% thời gian cung cấp dịch vụ",
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
                    <BreadcrumbPage>{t('historyAndAchievements')}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{t('historyAndAchievements')}</h1>
        </section>

         <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
                <Clock className="w-10 h-10 text-primary" />
                <CardTitle className="font-headline">{t('ourHistory')}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                {historyContent[language]}
                </p>
            </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
                <Trophy className="w-10 h-10 text-primary" />
                <CardTitle className="font-headline">{t('achievements')}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {achievementsContent[language].map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </CardContent>
            </Card>
         </div>
    </div>
  )
}


"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, ShieldCheck, Clock, Trophy } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function DepartmentPage() {
  const { t } = useLanguage()

  const missionContent = {
    en: "Our mission is to foster sustainable development, ensure regulatory compliance, and provide exceptional public services that enhance the quality of life for all citizens. We are committed to innovation, accountability, and collaboration in all our endeavors. We strive to create a forward-thinking administrative environment that is responsive to the needs of our community and contributes to the nation's progress.",
    vi: "Sứ mệnh của chúng tôi là thúc đẩy phát triển bền vững, đảm bảo tuân thủ quy định và cung cấp các dịch vụ công đặc biệt nhằm nâng cao chất lượng cuộc sống cho mọi công dân. Chúng tôi cam kết đổi mới, trách nhiệm và hợp tác trong mọi nỗ lực của mình. Chúng tôi cố gắng tạo ra một môi trường hành chính có tư duy tiến bộ, đáp ứng nhu cầu của cộng đồng và đóng góp vào sự tiến bộ của quốc gia."
  }

  const coreFunctionsContent = {
    en: [
      "Policy formulation and implementation",
      "Regulatory oversight and enforcement",
      "Public service delivery",
      "Project management and execution",
      "Inter-agency coordination",
    ],
    vi: [
      "Xây dựng và thực thi chính sách",
      "Giám sát và thực thi quy định",
      "Cung cấp dịch vụ công",
      "Quản lý và thực hiện dự án",
      "Điều phối liên ngành",
    ]
  }

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
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{t('aboutOurDepartment')}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('departmentSubtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-3xl font-headline font-semibold mb-4">{t('ourMission')}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {missionContent[useLanguage().language]}
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Team working together"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            data-ai-hint="teamwork collaboration office"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-primary" />
            <CardTitle className="font-headline">{t('coreFunctions')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {coreFunctionsContent[useLanguage().language].map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Clock className="w-10 h-10 text-primary" />
            <CardTitle className="font-headline">{t('ourHistory')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {historyContent[useLanguage().language]}
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
              {achievementsContent[useLanguage().language].map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

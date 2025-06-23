"use client"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function DepartmentPage() {
  const { t, language } = useLanguage()

  const introductionContent = {
    en: "Welcome to the official portal of our department. We are a key government body committed to driving national progress through transparent, efficient, and innovative public administration. Our responsibilities range from policy formulation and regulatory oversight to the execution of critical national projects. This portal serves as a central hub for information about our work, our people, and the services we provide. We believe in accountability and collaboration, and we strive to be responsive to the needs of our community. Explore our site to learn more about our mission, our history, and our ongoing efforts to build a better future for all citizens.",
    vi: "Chào mừng bạn đến với cổng thông tin chính thức của phòng ban chúng tôi. Chúng tôi là một cơ quan chính phủ chủ chốt, cam kết thúc đẩy sự tiến bộ của quốc gia thông qua một nền hành chính công minh bạch, hiệu quả và đổi mới. Trách nhiệm của chúng tôi bao gồm từ việc xây dựng chính sách và giám sát quy định đến việc thực hiện các dự án quốc gia quan trọng. Cổng thông tin này là trung tâm cung cấp thông tin về công việc, con người và các dịch vụ chúng tôi cung cấp. Chúng tôi tin vào trách nhiệm và sự hợp tác, và chúng tôi cố gắng đáp ứng nhu cầu của cộng đồng. Hãy khám phá trang web của chúng tôi để tìm hiểu thêm về sứ mệnh, lịch sử và những nỗ lực không ngừng của chúng tôi để xây dựng một tương lai tốt đẹp hơn cho mọi công dân."
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{t('generalIntroduction')}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('departmentSubtitle')}
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 leading-relaxed">
            <p>{introductionContent[language]}</p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Department office building"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              data-ai-hint="office building modern architecture"
            />
        </div>
      </div>
    </div>
  )
}


"use client"
import { newsData } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Calendar, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const { language, t } = useLanguage();
  const article = newsData[language].find(n => n.slug === params.slug) || newsData.en.find(n => n.slug === params.slug)

  if (!article) {
    notFound()
  }

  const categoryTranslations = {
    "Activity Updates": t('activityUpdates'),
    "Price Quotations": t('priceQuotations'),
    "Other News": t('otherNews'),
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article>
        <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <Badge variant="secondary">{categoryTranslations[article.category]}</Badge>
                </div>
            </div>
        </div>
        
        <Image
          src={article.image}
          alt={article.title}
          width={1200}
          height={600}
          className="rounded-lg object-cover aspect-video mb-8 shadow-lg"
          data-ai-hint="news article government"
        />

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
          <p>{article.content}</p>
          {/* Static content can be removed or translated if needed */}
        </div>
      </article>
    </div>
  )
}


"use client"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { newsData, type News } from "@/lib/data"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useSearchParams } from "next/navigation"

function NewsGrid({ news, readMoreText }: { news: News[], readMoreText: string }) {
  if (news.length === 0) {
    return <p className="text-muted-foreground mt-8 text-center">{useLanguage().t('noNewsInCategory')}</p>;
  }
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {news.map(item => (
        <Card key={item.id} className="flex flex-col hover:shadow-xl transition-shadow">
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="rounded-t-lg object-cover aspect-[3/2]"
            data-ai-hint="news article government"
          />
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.date}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground line-clamp-3">{item.content}</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="link" className="p-0 h-auto">
              <Link href={`/news/${item.slug}`}>{readMoreText} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default function NewsPage() {
  const { t, language } = useLanguage()
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const defaultTab = category && ['updates', 'quotations', 'other'].includes(category) ? category : 'all'
  
  const currentNewsData = newsData[language]

  const activityUpdates = currentNewsData.filter(n => n.category === "Activity Updates");
  const priceQuotations = currentNewsData.filter(n => n.category === "Price Quotations");
  const otherNews = currentNewsData.filter(n => n.category === "Other News");
  const readMoreText = t('readMore');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{t('newsAndAnnouncements')}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('newsSubtitle')}
        </p>
      </div>

      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto max-w-2xl">
          <TabsTrigger value="all">{t('allNews')}</TabsTrigger>
          <TabsTrigger value="updates">{t('activityUpdates')}</TabsTrigger>
          <TabsTrigger value="quotations">{t('priceQuotations')}</TabsTrigger>
          <TabsTrigger value="other">{t('otherNews')}</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <NewsGrid news={currentNewsData} readMoreText={readMoreText} />
        </TabsContent>
        <TabsContent value="updates">
          <NewsGrid news={activityUpdates} readMoreText={readMoreText} />
        </TabsContent>
        <TabsContent value="quotations">
          <NewsGrid news={priceQuotations} readMoreText={readMoreText} />
        </TabsContent>
        <TabsContent value="other">
          <NewsGrid news={otherNews} readMoreText={readMoreText} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

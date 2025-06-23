
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
import { Badge } from "@/components/ui/badge"
import { differenceInDays, parse } from "date-fns"

const isNew = (dateStr: string, lang: 'vi' | 'en'): boolean => {
  try {
    const format = lang === 'vi' ? 'dd-MM-yyyy' : 'yyyy-MM-dd';
    const date = parse(dateStr, format, new Date());
    if (isNaN(date.getTime())) return false;
    return differenceInDays(new Date(), date) <= 7;
  } catch (e) {
    return false;
  }
};

function NewsGrid({ news, readMoreText, language }: { news: News[], readMoreText: string, language: 'vi' | 'en' }) {
  const { t } = useLanguage();
  const newBadgeText = t('newBadge');

  if (news.length === 0) {
    return <p className="text-muted-foreground mt-8 text-center">{t('noNewsInCategory')}</p>;
  }
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {news.map(item => (
        <Card key={item.id} className="flex flex-col hover:shadow-xl transition-shadow">
          <div className="relative">
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={400}
              className="rounded-t-lg object-cover aspect-[3/2]"
              data-ai-hint="news article government"
            />
            {isNew(item.date, language) && (
              <Badge variant="destructive" className="absolute top-2 right-2">
                {newBadgeText}
              </Badge>
            )}
          </div>
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
  const defaultTab = category && ['updates', 'bidding', 'schedule'].includes(category) ? category : 'all'
  
  const currentNewsData = newsData[language]

  const activityUpdates = currentNewsData.filter(n => n.category === "Activity Updates");
  const biddingNotices = currentNewsData.filter(n => n.category === "Bidding Notices");
  const workSchedule = currentNewsData.filter(n => n.category === "Work Schedule");
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
        <TabsList className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="all">{t('allNews')}</TabsTrigger>
          <TabsTrigger value="updates">{t('activityUpdates')}</TabsTrigger>
          <TabsTrigger value="bidding">{t('biddingNotices')}</TabsTrigger>
          <TabsTrigger value="schedule">{t('workSchedule')}</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <NewsGrid news={currentNewsData} readMoreText={readMoreText} language={language}/>
        </TabsContent>
        <TabsContent value="updates">
          <NewsGrid news={activityUpdates} readMoreText={readMoreText} language={language}/>
        </TabsContent>
        <TabsContent value="bidding">
          <NewsGrid news={biddingNotices} readMoreText={readMoreText} language={language}/>
        </TabsContent>
        <TabsContent value="schedule">
          <NewsGrid news={workSchedule} readMoreText={readMoreText} language={language}/>
        </TabsContent>
      </Tabs>
    </div>
  )
}

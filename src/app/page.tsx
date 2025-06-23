
"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building, Briefcase, Users } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { newsData } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
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

export default function Home() {
  const { t, language } = useLanguage()
  const currentNewsData = newsData[language]
  const latestNews = currentNewsData.slice(0, 5);
  const newBadgeText = t('newBadge');

  const bannerImages = [
    { src: "https://placehold.co/1800x800.png", hint: "university campus modern" },
    { src: "https://placehold.co/1800x800.png", hint: "students studying library" },
    { src: "https://placehold.co/1800x800.png", hint: "university building sunny" },
  ]

  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="relative h-[60vh] w-full text-white">
        <Carousel
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
          className="w-full h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-full -ml-0">
            {bannerImages.map((image, index) => (
              <CarouselItem key={index} className="h-full p-0 relative">
                <Image
                  src={image.src}
                  alt={`Banner image ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full h-full"
                  data-ai-hint={image.hint}
                  priority={index === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-red-600/50"></div>
        
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-md">
              {t('bannerTitle')}
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm">
              {t('bannerSubtitle')}
            </p>
            <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/department">
                {t('learnMore')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Slider Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline font-bold text-center mb-10">{t('latestNews')}</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {latestNews.map((news) => (
                <CarouselItem key={news.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="relative">
                        <Image
                          src={news.image}
                          alt={news.title}
                          width={600}
                          height={400}
                          className="rounded-t-lg object-cover aspect-[3/2]"
                          data-ai-hint="news article government"
                        />
                        {isNew(news.date, language) && (
                          <Badge variant="destructive" className="absolute top-2 right-2">
                            {newBadgeText}
                          </Badge>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl font-bold">{news.title}</CardTitle>
                        <CardDescription>{news.date}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{news.content.substring(0, 100)}...</p>
                      </CardContent>
                      <div className="p-6 pt-0">
                         <Button asChild variant="link" className="p-0 h-auto">
                           <Link href={`/news/${news.slug}`}>{t('readMore')} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                         </Button>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/news">{t('viewAllNews')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Sections Introduction */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border flex flex-col shadow-sm transition-shadow hover:shadow-lg">
              <div className="flex-grow">
                <Building className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-headline font-semibold mb-2">{t('ourDepartment')}</h3>
                <p className="text-muted-foreground mb-4">{t('ourDepartmentDesc')}</p>
              </div>
              <div className="flex justify-end">
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <Link href="/department"><ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border flex flex-col shadow-sm transition-shadow hover:shadow-lg">
              <div className="flex-grow">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-headline font-semibold mb-2">{t('ourPeople')}</h3>
                <p className="text-muted-foreground mb-4">{t('ourPeopleDesc')}</p>
              </div>
              <div className="flex justify-end">
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <Link href="/personnel/leadership"><ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border flex flex-col shadow-sm transition-shadow hover:shadow-lg">
              <div className="flex-grow">
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-headline font-semibold mb-2">{t('ourWork')}</h3>
                <p className="text-muted-foreground mb-4">{t('ourWorkDesc')}</p>
              </div>
              <div className="flex justify-end">
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <Link href="/projects"><ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

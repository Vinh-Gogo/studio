import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { newsData, type News } from "@/lib/data"
import { ArrowRight } from "lucide-react"

function NewsGrid({ news }: { news: News[] }) {
  if (news.length === 0) {
    return <p className="text-muted-foreground mt-8 text-center">No news in this category yet.</p>;
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
              <Link href={`/news/${item.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default function NewsPage() {
  const activityUpdates = newsData.filter(n => n.category === "Activity Updates");
  const priceQuotations = newsData.filter(n => n.category === "Price Quotations");
  const otherNews = newsData.filter(n => n.category === "Other News");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">News & Announcements</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Stay informed with the latest updates, notices, and developments from our department.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto max-w-2xl">
          <TabsTrigger value="all">All News</TabsTrigger>
          <TabsTrigger value="updates">Activity Updates</TabsTrigger>
          <TabsTrigger value="quotations">Price Quotations</TabsTrigger>
          <TabsTrigger value="other">Other News</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <NewsGrid news={newsData} />
        </TabsContent>
        <TabsContent value="updates">
          <NewsGrid news={activityUpdates} />
        </TabsContent>
        <TabsContent value="quotations">
          <NewsGrid news={priceQuotations} />
        </TabsContent>
        <TabsContent value="other">
          <NewsGrid news={otherNews} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

import { newsData } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Calendar, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = newsData.find(n => n.slug === params.slug)

  if (!article) {
    notFound()
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
                    <Badge variant="secondary">{article.category}</Badge>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.</p>
        </div>
      </article>
    </div>
  )
}

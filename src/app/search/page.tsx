import { smartSearchAction } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText } from "lucide-react";
import { Suspense } from "react";

async function SearchResults({ query }: { query: string }) {
    if (!query) {
        return (
            <div className="text-center text-muted-foreground mt-8">
                <p>Please enter a search query to begin.</p>
            </div>
        );
    }
    
    const searchResult = await smartSearchAction({ query });
    const results = searchResult.results;

    return (
        <div className="space-y-6">
             <h2 className="text-2xl font-headline font-semibold">
                Results for: <span className="text-primary">&quot;{query}&quot;</span>
             </h2>
            {results && results.length > 0 ? (
                <div className="space-y-4">
                    {results.map((result, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <p className="text-foreground/90">{result}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center text-muted-foreground mt-8">
                    <p>No results found for your query.</p>
                    <p>Try searching for topics like &quot;office supply quotations&quot; or &quot;digital transformation seminar&quot;.</p>
                </div>
            )}
        </div>
    );
}

function SearchSkeleton() {
    return (
        <div className="space-y-6 animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-muted rounded-lg p-6">
                        <div className="flex items-start gap-4">
                             <div className="h-6 w-6 bg-muted-foreground/20 rounded"></div>
                             <div className="space-y-2 flex-1">
                                <div className="h-4 bg-muted-foreground/20 rounded w-full"></div>
                                <div className="h-4 bg-muted-foreground/20 rounded w-5/6"></div>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function SearchPage({ searchParams }: { searchParams?: { q?: string } }) {
    const query = searchParams?.q || '';

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex items-center gap-4 mb-12">
                <Search className="h-10 w-10 text-primary" />
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Smart Search</h1>
            </div>
            
            <div className="max-w-4xl mx-auto">
                <Suspense fallback={<SearchSkeleton />}>
                  <SearchResults query={query} />
                </Suspense>
            </div>
        </div>
    );
}

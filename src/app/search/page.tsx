
"use client"
import { smartSearchAction, type SmartSearchOutput } from "@/app/actions";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText } from "lucide-react";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import { Skeleton } from "@/components/ui/skeleton";

function SearchResultsInternal() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const { t } = useLanguage();
    const [searchResult, setSearchResult] = useState<SmartSearchOutput | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (query) {
            setLoading(true);
            setSearchResult(null);
            smartSearchAction({ query })
                .then(result => setSearchResult(result))
                .catch(() => setSearchResult({ results: [t('trySearching')] })) // Basic error handling
                .finally(() => setLoading(false));
        } else {
            setSearchResult(null);
            setLoading(false);
        }
    }, [query, t]);

    if (loading) {
        return <SearchSkeleton />;
    }

    if (!query) {
        return (
            <div className="text-center text-muted-foreground mt-8">
                <p>{t('searchPrompt')}</p>
            </div>
        );
    }

    const results = searchResult?.results;

    return (
        <div className="space-y-6">
             <h2 className="text-2xl font-headline font-semibold">
                {t('resultsFor')} <span className="text-primary">&quot;{query}&quot;</span>
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
                    <p>{t('noResults')}</p>
                    <p>{t('trySearching')}</p>
                </div>
            )}
        </div>
    );
}

function SearchSkeleton() {
    return (
        <div className="space-y-6">
            <Skeleton className="h-8 bg-muted rounded w-3/4" />
            <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                    <Card key={i} className="bg-muted">
                        <CardContent className="pt-6">
                            <div className="flex items-start gap-4">
                                <Skeleton className="h-6 w-6 bg-muted-foreground/20 rounded" />
                                <div className="space-y-2 flex-1">
                                    <Skeleton className="h-4 bg-muted-foreground/20 rounded w-full" />
                                    <Skeleton className="h-4 bg-muted-foreground/20 rounded w-5/6" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default function SearchPage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex items-center gap-4 mb-12">
                <Search className="h-10 w-10 text-primary" />
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{t('smartSearch')}</h1>
            </div>
            
            <div className="max-w-4xl mx-auto">
                <Suspense fallback={<SearchSkeleton />}>
                  <SearchResultsInternal />
                </Suspense>
            </div>
        </div>
    );
}

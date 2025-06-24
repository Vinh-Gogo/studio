
"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function LoginPage() {
    const { t } = useLanguage()
    
    return (
        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-200px)]">
            <Card className="w-full max-w-sm">
                <CardHeader className="text-center">
                    <CardTitle>{t('loginTitle')}</CardTitle>
                    <CardDescription>{t('loginSubtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">{t('username')}</Label>
                            <Input id="username" placeholder="example@iuh.edu.vn" required />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">{t('password')}</Label>
                                <Link href="#" className="text-sm underline text-muted-foreground hover:text-primary">
                                    {t('forgotPassword')}
                                </Link>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">{t('loginButton')}</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

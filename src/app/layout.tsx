import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from '@/contexts/language-context';
import './globals.css';

export const metadata: Metadata = {
  title: 'PHÒNG KẾ HOẠCH - ĐẦU TƯ',
  description: 'Cổng thông tin chính thức của PHÒNG KẾ HOẠCH - ĐẦU TƯ.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}

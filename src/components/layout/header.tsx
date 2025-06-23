
"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, Search, X, ChevronDown } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import React from "react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "../language-switcher"
import { IuhLogo } from "@/components/ui/iuh-logo"

function SearchBar() {
    const router = useRouter();
    const { t } = useLanguage();

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const query = formData.get('query') as string;
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative w-full max-w-sm">
            <Input
                name="query"
                placeholder={t('aiSearch')}
                className="pr-10"
            />
            <Button type="submit" variant="ghost" size="icon" className="absolute top-0 right-0 h-full w-10">
                <Search className="h-4 w-4" />
            </Button>
        </form>
    );
}

export function Header() {
  const isMobile = useIsMobile()
  const pathname = usePathname()
  const [isSheetOpen, setSheetOpen] = React.useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t('home'), key: 'home' },
    { 
      key: 'department',
      label: t('department'),
      subLinks: [
        { href: "/department", label: t('generalIntroduction') },
        { href: "/department/functions-mission", label: t('functionsAndMission') },
        { href: "/department/history-achievements", label: t('historyAndAchievements') },
      ]
    },
    { href: "/personnel", label: t('personnel'), key: 'personnel' },
    { href: "/news", label: t('news'), key: 'news' },
    { href: "/projects", label: t('projects'), key: 'projects' },
    { href: "/documents", label: t('documents'), key: 'documents' },
  ]

  const NavContent = () => (
    <>
      {navLinks.map((link) => {
        if (link.subLinks) {
          const isParentActive = pathname.startsWith("/department");
          return (
            <DropdownMenu key={link.key}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                  "flex items-center uppercase font-semibold",
                  isMobile ? "w-full justify-start text-lg py-4" : "",
                  isParentActive ? "bg-accent text-accent-foreground" : ""
                )}>
                  {link.label} <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isMobile ? "start" : "center"}>
                {link.subLinks.map(subLink => (
                  <DropdownMenuItem key={subLink.href} asChild>
                    <Link href={subLink.href} onClick={() => setSheetOpen(false)}>{subLink.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        }
        return (
          <Button key={link.key} asChild variant="ghost" className={cn(
             "uppercase font-semibold",
             isMobile ? "w-full justify-start text-lg py-4" : "",
             pathname === link.href ? "bg-accent text-accent-foreground" : ""
          )}>
            <Link href={link.href!} onClick={() => setSheetOpen(false)}>{link.label}</Link>
          </Button>
        )
      })}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <IuhLogo />
        </Link>
        
        {isMobile ? (
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-4 flex flex-col">
                 <div className="flex justify-between items-center mb-6">
                   <Link href="/" className="flex items-center" onClick={() => setSheetOpen(false)}>
                      <IuhLogo />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                      <X className="h-6 w-6"/>
                  </Button>
                 </div>
                <nav className="flex flex-col gap-2 mb-6">
                  <NavContent />
                </nav>
                <div className="mt-auto">
                  <SearchBar />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <>
            <nav className="hidden md:flex items-center gap-1">
              <NavContent />
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <SearchBar />
              <LanguageSwitcher />
            </div>
          </>
        )}
      </div>
    </header>
  )
}

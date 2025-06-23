
"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, Search, X, ChevronDown, Monitor, Mail, Library } from "lucide-react"
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
import { IuhLogo } from "../ui/iuh-logo"

function SearchBar({ variant = "default" }: { variant?: "default" | "topbar" }) {
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

    const isTopBar = variant === "topbar";

    return (
        <form onSubmit={handleSearch} className="relative w-full max-w-sm">
            <Input
                name="query"
                placeholder={t('aiSearch')}
                className={cn(
                    "pr-10",
                    isTopBar && "bg-white/20 text-white placeholder:text-white/70 border-white/50 focus:bg-white focus:text-card-foreground"
                )}
            />
            <Button type="submit" variant="ghost" size="icon" className={cn(
                "absolute top-0 right-0 h-full w-10",
                isTopBar ? "text-white hover:bg-transparent" : ""
            )}>
                <Search className="h-4 w-4" />
            </Button>
        </form>
    );
}

const SiteLogo = () => {
    return <IuhLogo />
}

export function Header() {
  const isMobile = useIsMobile()
  const pathname = usePathname()
  const [isSheetOpen, setSheetOpen] = React.useState(false);
  const { t } = useLanguage();
  const [isClient, setIsClient] = React.useState(false)
  const [openMenuKey, setOpenMenuKey] = React.useState<string | null>(null)
  const menuTimeout = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    setIsClient(true)
  }, [])


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
    { href: "/personnel/leadership", label: t('personnel'), key: 'personnel' },
    { 
      key: 'news',
      label: t('news'),
      subLinks: [
        { href: "/news?category=updates", label: t('activityUpdates') },
        { href: "/news?category=bidding", label: t('biddingNotices') },
        { href: "/news?category=schedule", label: t('workSchedule') },
      ]
    },
    { 
      key: 'projects',
      label: t('projects'),
      subLinks: [
        { href: "/projects", label: t('ongoingProjects') },
        { href: "/projects/completed", label: t('completedProjects') },
        { href: "/projects/plans", label: t('procurementList') },
      ]
    },
    { 
      key: 'documents',
      label: t('documents'),
      subLinks: [
        { href: "/documents/decisions-regulations", label: t('decisionsAndRegulations') },
        { href: "/documents/administrative-forms", label: t('administrativeForms') },
        { href: "/documents/reports-statistics", label: t('reportsAndStatistics') },
      ]
    },
    { href: "/faq", label: t('faq'), key: 'faq' },
    { href: "/contact", label: t('contact'), key: 'contact' },
  ]
  
  const MobileNav = () => (
      <nav className="flex flex-col gap-2 mb-6">
        {navLinks.map((link) => {
          if (link.subLinks) {
            return (
              <DropdownMenu key={link.key}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start text-lg py-4 uppercase font-semibold">
                    {link.label} <ChevronDown className="ml-auto h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
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
            <Button key={link.key} asChild variant={pathname === link.href ? "secondary" : "ghost"} className="w-full justify-start text-lg py-4 uppercase font-semibold">
              <Link href={link.href!} onClick={() => setSheetOpen(false)}>{link.label}</Link>
            </Button>
          )
        })}
      </nav>
  );

  const DesktopNav = () => (
    <nav className="hidden md:flex items-center gap-1">
      {navLinks.map((link) => {
          if (link.subLinks) {
              const handleMouseEnter = () => {
                  if (menuTimeout.current) {
                      clearTimeout(menuTimeout.current)
                  }
                  setOpenMenuKey(link.key)
              }

              const handleMouseLeave = () => {
                  menuTimeout.current = setTimeout(() => {
                      setOpenMenuKey(null)
                  }, 200)
              }
              
              const isParentActive = pathname.startsWith(`/${link.key}`);

              return (
                  <DropdownMenu
                      key={link.key}
                      open={openMenuKey === link.key}
                      onOpenChange={(isOpen) => setOpenMenuKey(isOpen ? link.key : null)}
                  >
                      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className={cn(
                                    "flex items-center uppercase font-semibold",
                                    isParentActive ? "bg-accent text-accent-foreground" : ""
                                )}
                            >
                                {link.label} <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="center"
                            className="rounded-none"
                        >
                            {link.subLinks.map((subLink) => (
                                <DropdownMenuItem key={subLink.href} asChild>
                                    <Link href={subLink.href}>{subLink.label}</Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                      </div>
                  </DropdownMenu>
              )
          }
          return (
              <Button
                  key={link.key}
                  asChild
                  variant={pathname === link.href ? "secondary" : "ghost"}
                  className="uppercase font-semibold"
              >
                  <Link href={link.href!}>{link.label}</Link>
              </Button>
          )
      })}
    </nav>
  );


  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
        {/* Top bar */}
        <div className="bg-accent text-accent-foreground">
            <div className="container mx-auto flex h-12 items-center justify-between px-4">
                <div className="flex items-center gap-6 text-sm">
                    <Link href="#" className="flex items-center gap-2 hover:underline">
                        <Mail className="h-4 w-4" />
                        <span>{t('email')}</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-2 hover:underline">
                        <Library className="h-4 w-4" />
                        <span>{t('libraryInfo')}</span>
                    </Link>
                </div>
                <div className="flex items-center gap-6 text-sm">
                    <Link href="/contact" className="hidden md:block hover:underline">
                        <span>{t('connectContact')}</span>
                    </Link>
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
        
        {/* Main navigation bar */}
        <div className="border-b bg-card">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <Link href="/" className="flex items-center">
                    <SiteLogo />
                </Link>
                
                {isClient && isMobile ? (
                <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-xs p-4 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <Link href="/" className="flex items-center" onClick={() => setSheetOpen(false)}>
                                <SiteLogo />
                            </Link>
                            <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                                <X className="h-6 w-6"/>
                            </Button>
                        </div>
                        <div className="mb-4">
                            <SearchBar />
                        </div>
                        <MobileNav />
                    </SheetContent>
                </Sheet>
                ) : (
                  <DesktopNav />
                )}
            </div>
      </div>
    </header>
  )
}

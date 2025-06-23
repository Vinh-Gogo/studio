
"use client"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear();

  const aboutLinks = [
    { label: t('generalIntroduction'), href: '/department' },
    { label: t('functionsAndMission'), href: '/department/functions-mission' },
    { label: t('historyAndAchievements'), href: '/department/history-achievements' },
  ];

  const newsLinks = [
    { label: t('activityUpdates'), href: '/news?category=updates' },
    { label: t('biddingNotices'), href: '/news?category=bidding' },
    { label: t('workSchedule'), href: '/news?category=schedule' },
  ];

  const projectLinks = [
    { label: t('ongoingProjects'), href: '/projects' },
    { label: t('completedProjects'), href: '/projects/completed' },
    { label: t('procurementList'), href: '/projects/plans' },
  ];
  
  const helpLinks = [
      { label: t('faq'), href: '/faq' },
      { label: t('contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Column 1: Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 font-headline uppercase">{t('portalName')}</h3>
            <address className="not-italic text-sm space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <p>{t('footerAddressDetail')}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 mt-1" />
                <p>{t('footerPhoneDetail')}</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 mt-1" />
                <div>
                  <p>{t('footerFanpage')}</p>
                  <a href="https://www.facebook.com/ptckt.iuh" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">
                    https://www.facebook.com/ptckt.iuh
                  </a>
                </div>
              </div>
            </address>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h3 className="font-semibold mb-4 font-headline uppercase">{t('footerAbout')}</h3>
            <ul className="space-y-2 text-sm">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: News */}
          <div>
            <h3 className="font-semibold mb-4 font-headline uppercase">{t('footerNews')}</h3>
            <ul className="space-y-2 text-sm">
              {newsLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Projects */}
          <div>
            <h3 className="font-semibold mb-4 font-headline uppercase">{t('footerProjects')}</h3>
            <ul className="space-y-2 text-sm">
              {projectLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Help & Contact */}
          <div>
            <h3 className="font-semibold mb-4 font-headline uppercase">{t('footerHelp')}</h3>
            <ul className="space-y-2 text-sm">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-accent-foreground/20 pt-6 text-center text-sm text-accent-foreground/80">
          <p>{t('copyright', { year })}</p>
        </div>
      </div>
    </footer>
  )
}

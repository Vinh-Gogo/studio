
"use client"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear();

  const infoPortals = [
    { label: t('footerStudentPortal'), href: '#' },
    { label: t('footerLecturerPortal'), href: '#' },
    { label: t('footerScienceMng'), href: '#' },
    { label: t('footerTrainingPoints'), href: '#' },
    { label: t('footerJobPortal'), href: '#' },
  ];

  const extendedInfo = [
    { label: t('footerPress'), href: '#' },
    { label: t('footerDiscoverIuh'), href: '#' },
    { label: t('footerSoftSkills'), href: '#' },
    { label: t('footerCollection'), href: '#' },
    { label: t('footerCustomerService'), href: '#' },
  ];

  const utilityDocs = [
    { label: t('footerThreePublics'), href: '#' },
    { label: t('footerRegulations'), href: '/documents/decisions-regulations' },
    { label: t('footerTrainingForms'), href: '#' },
    { label: t('footerScienceForms'), href: '#' },
    { label: t('contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Contact Info */}
          <div>
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

          {/* Column 2: Info Portals */}
          <div>
            <h3 className="font-semibold mb-4 font-headline uppercase">{t('footerInfoPortals')}</h3>
            <ul className="space-y-2 text-sm">
              {infoPortals.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Extended Info */}
          <div>
            <h3 className="font-semibold mb-4 font-headline uppercase">{t('footerExtendedInfo')}</h3>
            <ul className="space-y-2 text-sm">
              {extendedInfo.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Utility Docs */}
          <div>
            <h3 className="font-semibold mb-4 font-headline uppercase">{t('footerUtilityDocs')}</h3>
            <ul className="space-y-2 text-sm">
              {utilityDocs.map((link, index) => (
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

import Link from "next/link"
import { Landmark } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Landmark className="h-8 w-8 text-primary" />
              <span className="font-headline">PKHDTIUH Portal</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Providing transparent and efficient public services.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/news" className="hover:text-primary hover:underline">News & Announcements</Link></li>
              <li><Link href="/documents" className="hover:text-primary hover:underline">Document Library</Link></li>
              <li><Link href="/projects" className="hover:text-primary hover:underline">Projects & Plans</Link></li>
              <li><Link href="/department" className="hover:text-primary hover:underline">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 font-headline">Contact Us</h3>
            <address className="not-italic text-sm space-y-2 text-muted-foreground">
              <p>123 Government Ave, Capital City, Vietnam</p>
              <p>Email: <a href="mailto:contact@pkhdtiuh.gov.vn" className="hover:text-primary hover:underline">contact@pkhdtiuh.gov.vn</a></p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PKHDTIUH Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { personnelData } from "@/lib/data"
import { Mail, Phone, User } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function PersonnelPage() {
  const { t, language } = useLanguage();
  const currentPersonnelData = personnelData[language]

  const leadership = currentPersonnelData.filter(p => p.isLeadership);
  const staff = currentPersonnelData.filter(p => !p.isLeadership);

  const PersonnelCard = ({ person }: { person: typeof currentPersonnelData[0] }) => (
    <Card className="text-center flex flex-col items-center p-6 hover:shadow-xl transition-shadow h-full">
      <Avatar className="w-24 h-24 mb-4">
        <AvatarImage src={person.photo} alt={person.name} data-ai-hint="professional headshot person" />
        <AvatarFallback>
            <User className="w-12 h-12" />
        </AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-bold font-headline">{person.name}</h3>
      <p className="text-primary font-medium">{person.title}</p>
      <div className="mt-4 text-sm text-muted-foreground space-y-1">
        <div className="flex items-center justify-center gap-2">
          <Mail className="w-4 h-4" />
          <a href={`mailto:${person.email}`} className="hover:underline">{person.email}</a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          <span>{person.phone}</span>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{t('personnelTitle')}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('personnelSubtitle')}
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-headline font-bold mb-8 text-center">{t('leadership')}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leadership.map(person => <PersonnelCard key={person.id} person={person} />)}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-bold mb-8 text-center">{t('ourStaff')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {staff.map(person => <PersonnelCard key={person.id} person={person} />)}
        </div>
      </section>
    </div>
  )
}

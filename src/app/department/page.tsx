import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, ShieldCheck, Clock, Trophy } from "lucide-react"

export default function DepartmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">About Our Department</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Dedicated to serving the public with integrity, efficiency, and transparency.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-3xl font-headline font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to foster sustainable development, ensure regulatory compliance, and provide exceptional public services that enhance the quality of life for all citizens. We are committed to innovation, accountability, and collaboration in all our endeavors. We strive to create a forward-thinking administrative environment that is responsive to the needs of our community and contributes to the nation's progress.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Team working together"
            width={600}
            height={400}
            className="w-full h-full object-cover"
            data-ai-hint="teamwork collaboration office"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-primary" />
            <CardTitle className="font-headline">Core Functions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Policy formulation and implementation</li>
              <li>Regulatory oversight and enforcement</li>
              <li>Public service delivery</li>
              <li>Project management and execution</li>
              <li>Inter-agency coordination</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Clock className="w-10 h-10 text-primary" />
            <CardTitle className="font-headline">Our History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Established in 1985, our department has grown from a small administrative body to a key governmental institution. Over the decades, we have adapted to the changing needs of our nation, consistently pioneering new approaches to public administration and governance.
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Trophy className="w-10 h-10 text-primary" />
            <CardTitle className="font-headline">Achievements</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>National Award for E-Governance (2022)</li>
                <li>ISO 9001:2015 Certification (2021)</li>
                <li>Successful implementation of 50+ key projects</li>
                <li>Reduced service delivery time by 40%</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

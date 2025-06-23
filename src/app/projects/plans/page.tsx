
"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projectData, type Project } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

function ProjectCard({ project, t }: { project: Project, t: Function }) {
  const statusTranslations = {
    "Ongoing": t('ongoing'),
    "Completed": t('completed'),
    "Procurement": t('procurement'),
  }

  return (
    <Card className="hover:shadow-xl transition-shadow h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="font-headline text-xl mb-2">{project.name}</CardTitle>
            <Badge
              className={cn({
                "bg-blue-100 text-blue-800 border-blue-300": project.status === "Ongoing",
                "bg-green-100 text-green-800 border-green-300": project.status === "Completed",
                "bg-yellow-100 text-yellow-800 border-yellow-300": project.status === "Procurement",
              })}
            >
              {statusTranslations[project.status]}
            </Badge>
        </div>
        <CardDescription>
            {project.startDate && `${t('started')}: ${project.startDate}`}
            {project.status === 'Completed' && project.endDate && ` | ${t('completed')}: ${project.endDate}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
    </Card>
  )
}

function ProjectList({ projects, t }: { projects: Project[], t: Function }) {
    if (projects.length === 0) {
        return <p className="text-muted-foreground mt-8 text-center">{t('noProjectsInCategory')}</p>;
    }

    return (
        <div className="grid md:grid-cols-2 gap-8 mt-8">
            {projects.map(project => <ProjectCard key={project.id} project={project} t={t} />)}
        </div>
    )
}

export default function ProjectPlansPage() {
  const { t, language } = useLanguage()
  const currentProjectData = projectData[language]

  const procurementProjects = currentProjectData.filter(p => p.status === "Procurement");

  return (
    <div className="container mx-auto px-4 py-12">
        <Breadcrumb className="mb-8">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">{t('home')}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/projects">{t('projects')}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{t('projectPlans')}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{t('projectPlans')}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('projectsSubtitle')}
        </p>
      </div>

      <ProjectList projects={procurementProjects} t={t} />
    </div>
  )
}


"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projectData, type Project } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

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

export default function ProjectsPage() {
  const { t, language } = useLanguage()
  const currentProjectData = projectData[language]

  const ongoingProjects = currentProjectData.filter(p => p.status === "Ongoing");
  const completedProjects = currentProjectData.filter(p => p.status === "Completed");
  const procurementProjects = currentProjectData.filter(p => p.status === "Procurement");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{t('projectsAndPlans')}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('projectsSubtitle')}
        </p>
      </div>

      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mx-auto max-w-lg">
          <TabsTrigger value="ongoing">{t('ongoing')}</TabsTrigger>
          <TabsTrigger value="completed">{t('completed')}</TabsTrigger>
          <TabsTrigger value="procurement">{t('procurement')}</TabsTrigger>
        </TabsList>
        <TabsContent value="ongoing">
          <ProjectList projects={ongoingProjects} t={t} />
        </TabsContent>
        <TabsContent value="completed">
          <ProjectList projects={completedProjects} t={t} />
        </TabsContent>
        <TabsContent value="procurement">
          <ProjectList projects={procurementProjects} t={t} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

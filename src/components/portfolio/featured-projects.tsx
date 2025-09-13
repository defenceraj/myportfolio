import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    aiHint: string;
};

type FeaturedProjectsProps = {
  projects: Project[];
  showAll?: boolean;
};

const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => (
    <Card 
        className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 group animate-in fade-in"
        style={{ animationDelay: `${delay}ms`}}
    >
        <div className="overflow-hidden">
            <Image 
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={project.aiHint}
            />
        </div>
        <CardHeader>
            <CardTitle className="font-headline text-2xl font-bold">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p className="text-muted-foreground flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-sm bg-secondary/80">{tag}</Badge>
                ))}
            </div>
             <div className="pt-2">
                <Button asChild variant="link" className="p-0 h-auto text-primary group-hover:underline">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </Button>
            </div>
        </CardContent>
    </Card>
);

export default function FeaturedProjects({ projects, showAll = false }: FeaturedProjectsProps) {
  const projectsToShow = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="animate-in fade-in duration-500 delay-400">
        <div className="flex justify-between items-center mb-12">
            <div className="text-left">
                <h2 className="font-headline text-4xl font-bold text-primary flex items-center gap-3">
                    <Briefcase className="w-10 h-10" />
                    {showAll ? 'All Projects' : 'Featured Projects'}
                </h2>
                <p className="text-muted-foreground text-lg mt-2">
                    {showAll ? 'A collection of my work.' : 'A glimpse into my recent work and capabilities.'}
                </p>
            </div>
            {!showAll && (
                 <Button asChild className="group transition-all duration-300">
                    <Link href="/projects">
                        View All
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsToShow.map((project, index) => (
                <ProjectCard key={project.title} project={project} delay={index * 150} />
            ))}
        </div>
    </section>
  );
}

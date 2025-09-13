import { profile } from '@/lib/data';
import ProfileHeader from '@/components/portfolio/profile-header';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, GraduationCap, Lightbulb, User2, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ServiceCard from '@/components/portfolio/service-card';
import FeaturedProjects from '@/components/portfolio/featured-projects';

const pageLinks = [
    { href: '/skills', label: 'My Skillset', icon: Code, description: 'A detailed look at my technical abilities.' },
    { href: '/education', label: 'Education', icon: GraduationCap, description: 'My academic and learning journey.' },
    { href: '/about', label: 'About Me', icon: User2, description: 'Get to know me and my professional approach.' },
    { href: '/projects', label: 'Projects', icon: Briefcase, description: 'Explore a selection of my work.' },
]

export default function Home() {
  return (
    <div className="space-y-24">
      <ProfileHeader
        name={profile.name}
        title={profile.title}
        summary={profile.summary}
        avatar={profile.avatar}
        contact={profile.contact}
      />

      <section className="animate-in fade-in duration-500 delay-300">
        <div className="text-center">
            <h2 className="font-headline text-4xl font-bold text-primary mb-4">What I Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-12">
                I specialize in turning ideas into reality, crafting robust backends, and designing beautiful, intuitive user interfaces.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <ServiceCard 
             icon={Code}
             title="Frontend Development"
             description="I build responsive and performant user interfaces with modern frameworks like React and Next.js, focusing on a seamless user experience."
             delay={150}
           />
           <ServiceCard 
             icon={Briefcase}
             title="Backend Development"
             description="I develop scalable and efficient server-side applications and APIs using Node.js, Express, and MongoDB, ensuring a solid foundation for your product."
             delay={300}
           />
            <ServiceCard 
             icon={Lightbulb}
             title="UI/UX Design"
             description="I create visually appealing and user-friendly designs that are both functional and aesthetic, ensuring a delightful interaction for every user."
             delay={450}
           />
        </div>
      </section>

      <FeaturedProjects projects={profile.projects} />

      <section className="text-center animate-in fade-in duration-500 delay-500">
        <h2 className="font-headline text-4xl font-bold text-primary mb-4">Explore My Canvas</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-12">
          This portfolio is a curated collection of my work, skills, and professional journey. Explore the different sections to get a comprehensive view of my capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pageLinks.map((link, index) => (
            <Link href={link.href} key={link.href} className="block group">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl overflow-hidden shadow-lg h-full transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-2 animate-in fade-in" style={{animationDelay: `${index * 150}ms`}}>
                    <CardHeader className="items-center text-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-3">
                           <link.icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-xl font-bold">{link.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-muted-foreground">{link.description}</p>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

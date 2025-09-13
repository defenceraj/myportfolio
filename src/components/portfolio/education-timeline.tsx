import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

type Education = {
  degree: string;
  institution: string;
  year: string;
  description?: string;
};

type EducationTimelineProps = {
  educationHistory: Education[];
};

export default function EducationTimeline({ educationHistory }: EducationTimelineProps) {
  return (
    <Card className="rounded-xl shadow-lg bg-card/50 backdrop-blur-sm border-primary/10">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-4xl font-bold flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10 text-primary" />
            Education Journey
        </CardTitle>
        <CardDescription className="text-lg pt-2">
            My academic and professional learning path.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="relative pl-8 before:absolute before:left-8 before:top-0 before:bottom-0 before:w-1 before:bg-border/50 before:-translate-x-1/2">
          {educationHistory.map((item, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className="absolute -left-4 top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center ring-8 ring-background animate-in fade-in zoom-in-50 duration-500 transition-transform hover:scale-125" style={{ animationDelay: `${index * 150}ms`}}>
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="pl-12 animate-in fade-in slide-in-from-left-4 duration-500 transition-all hover:pl-14" style={{ animationDelay: `${index * 150 + 100}ms`}}>
                <p className="font-bold text-2xl text-primary">{item.degree}</p>
                <p className="text-muted-foreground text-xl font-medium">{item.institution}</p>
                <p className="text-sm text-muted-foreground mt-2 bg-secondary/50 inline-block px-3 py-1 rounded-full font-mono">{item.year}</p>
                {item.description && <p className="mt-3 text-foreground/80 text-base">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

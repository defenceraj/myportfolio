import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Star } from "lucide-react";

type CertificationsCarouselProps = {
  certifications: string[];
};

export default function CertificationsCarousel({ certifications }: CertificationsCarouselProps) {
  return (
     <Card className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-primary/10 hover:border-primary/30">
        <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl font-bold flex items-center justify-center gap-3">
                <Award className="text-primary w-10 h-10" />
                Certifications & Achievements
            </CardTitle>
            <CardDescription className="text-lg pt-2">
                My dedication to continuous learning and professional development.
            </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 transition-all duration-300 hover:bg-secondary hover:scale-105 animate-in fade-in" style={{animationDelay: `${index * 150}ms`}}>
                    <div className="flex-shrink-0">
                        <Star className="h-6 w-6 text-yellow-400" />
                    </div>
                    <p className="text-lg font-medium text-foreground">{cert}</p>
                </div>
            ))}
            </div>
        </CardContent>
     </Card>
  );
}

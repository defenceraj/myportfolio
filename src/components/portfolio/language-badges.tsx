import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

type LanguageBadgesProps = {
  languages: string[];
};

export default function LanguageBadges({ languages }: LanguageBadgesProps) {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-primary/10 hover:border-primary/30">
      <CardHeader>
        <CardTitle className="font-headline text-2xl font-semibold flex items-center gap-2">
            <Globe className="text-primary" />
            Languages
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang, index) => (
            <Badge 
                key={lang} 
                variant="secondary" 
                className="text-base py-2 px-5 border-transparent bg-secondary/80 animate-in fade-in transition-transform hover:scale-110"
                style={{ animationDelay: `${index * 150}ms`}}
            >
              {lang}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

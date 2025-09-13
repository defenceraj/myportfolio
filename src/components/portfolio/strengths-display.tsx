import { Zap, BrainCircuit, Users } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { CheckCircle } from "lucide-react";

type StrengthsDisplayProps = {
  strengths: string[];
};

export default function StrengthsDisplay({ strengths }: StrengthsDisplayProps) {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-primary/10 hover:border-primary/30">
      <CardHeader>
        <CardTitle className="font-headline text-2xl font-semibold flex items-center gap-2">
          <Zap className="text-primary"/>
          Core Strengths
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {strengths.map((strength, index) => (
            <li key={strength} className="flex items-center gap-4 animate-in fade-in slide-in-from-left-4 transition-all hover:pl-2" style={{ animationDelay: `${index * 150}ms`}}>
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <p className="text-base font-medium text-foreground/90">{strength}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

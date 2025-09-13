import StrengthsDisplay from "@/components/portfolio/strengths-display";
import LanguageBadges from "@/components/portfolio/language-badges";
import { profile } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl overflow-hidden shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl font-bold flex items-center gap-3">
                        <User2 className="text-primary w-8 h-8"/>
                        About Me
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground pt-2">
                        A little more about my personality and professional approach.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-foreground/90 leading-relaxed">
                        I am a passionate and dedicated developer with a knack for creating beautiful, functional, and user-centric web applications. My journey into web development started from a deep curiosity about how things work on the internet, and it has grown into a full-fledged passion. I thrive in collaborative environments and I'm always eager to learn new technologies and methodologies to improve my craft. I believe in writing clean, maintainable code and building products that not only work well but also provide a delightful user experience.
                    </p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <StrengthsDisplay strengths={profile.strengths} />
                <LanguageBadges languages={profile.languages} />
            </div>
        </div>
    )
}

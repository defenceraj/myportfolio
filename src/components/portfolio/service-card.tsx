import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

type ServiceCardProps = {
    icon: LucideIcon;
    title: string;
    description: string;
    delay: number;
}

export default function ServiceCard({ icon: Icon, title, description, delay }: ServiceCardProps) {
    return (
        <Card 
            className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl overflow-hidden shadow-lg text-center transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-2 animate-in fade-in"
            style={{ animationDelay: `${delay}ms`}}
        >
            <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
            </CardContent>
        </Card>
    )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

type ContactCardProps = {
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    whatsapp: string;
  };
};

const ContactIcon = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 transform hover:scale-110" asChild>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-5 w-5" />
                    </a>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{label}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);


export default function ContactCard({ contact }: ContactCardProps) {
  return (
      <div className="flex gap-3">
        <ContactIcon href={`tel:${contact.phone}`} icon={Phone} label="Call Me" />
        <ContactIcon href={`mailto:${contact.email}`} icon={Mail} label="Email Me" />
        <ContactIcon href={contact.linkedin} icon={Linkedin} label="LinkedIn" />
        <ContactIcon href={contact.whatsapp} icon={MessageCircle} label="WhatsApp" />
      </div>
  );
}

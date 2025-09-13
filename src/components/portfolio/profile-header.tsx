
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactCard from './contact-card';

type ProfileHeaderProps = {
  name: string;
  title: string;
  summary: string;
  avatar: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    whatsapp: string;
  };
};

export default function ProfileHeader({ name, title, summary, avatar, contact }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-12 py-12">
      <div className="relative animate-in fade-in zoom-in-50 duration-500">
          <div className="relative w-48 h-48 md:w-64 md:h-64 group">
              <Image
                  src={avatar}
                  alt={name}
                  width={256}
                  height={256}
                  className="rounded-full object-cover w-full h-full border-4 border-primary/20 shadow-xl transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint="professional headshot"
                  priority
              />
              <div className="absolute inset-0 rounded-full border-4 border-primary/50 group-hover:border-primary/80 transition-all duration-300 animate-pulse-glow"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-background animate-pulse"></div>
          </div>
      </div>

      <div className="flex-1 max-w-2xl space-y-4">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-foreground animate-in fade-in slide-in-from-top-4 duration-700">
              {name}
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-medium animate-in fade-in slide-in-from-top-2 duration-700 delay-100">
              {title}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed animate-in fade-in duration-700 delay-200">
              {summary}
          </p>
          <div className="pt-4 flex justify-center md:justify-start animate-in fade-in duration-700 delay-300">
              <ContactCard contact={contact} />
          </div>
      </div>
    </header>
  );
}

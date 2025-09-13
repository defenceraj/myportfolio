import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Code, Wrench, Bot, Lightbulb } from 'lucide-react';

const skillIcons: { [key: string]: React.ElementType } = {
  'React': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>React</title><path d="M12.001 2.003c-5.524.0-10.002 4.478-10.002 10.002s4.478 10.002 10.002 10.002 10.002-4.478 10.002-10.002-4.478-10.002-10.002-10.002zm0 18.003c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.84-8.832c-.11-.33-.32- .6-.6-.82l1.23-2.13c.2-.34.1-.79-.25-1.03-.34-.23-7.01-4.11-7.01-4.11-.3-.18-.67-.13-.9.13-.24.26-.29.65-.13.98l1.73 3.42-3.13 1.8c-.3.17-.5.5-.5.86s.2.69.5.86l3.13 1.8-1.73 3.42c-.16.33-.09.73.13.98.24.26.61.3.9.13s7.01-4.11 7.01-4.11c.34-.25.44-.7.24-1.04zm-4.84 2.83v-4l2.8.5-2.8 3.5zm-5.41-3.11l2.8-1.63-1.4-2.8-1.4 2.23v2.2zm1.61 5.05l1.4-2.2-1.4-2.23v4.43zm5.6-3.87l-2.8-.5 2.8-3.5v4z" /></svg>,
  'JavaScript (ES6+)': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c.783 1.337.336 2.333-.924 2.333-1.056 0-1.572-.54-2.028-1.128l-2.436 2.016c.9.96 2.412 1.524 3.96 1.524 2.592 0 4.332-1.608 3.6-4.224-.828-2.88-4.236-8.46-4.236-8.46s.816 1.884 1.056 2.556c.24.672.3.924.3 1.056.024.192.024.384.024.504l.024.168.024.168.024.144c.024.12.024.216.024.312.024.12.024.216.024.312zm-8.808-1.056c.456.612.972 1.032 1.632 1.032.72 0 1.152-.36 1.152-.912 0-.576-.432-.864-1.2-.864h-.384V15.36c.036-.576.048-.984.048-1.224s-.012-.48-.036-.72l-1.392-7.02c-.204-1.008-.876-1.524-1.872-1.524-.864 0-1.464.48-1.8 1.056l1.32 1.152c.204-.312.456-.456.744-.456.324 0 .504.168.6.48l.816 4.224h-1.608c-1.2 0-2.016.384-2.016 1.224 0 .744.576 1.272 1.68 1.272.912 0 1.584-.504 2.016-1.104zm-2.736-2.904c-.072.48-.12.816-.12 1.008 0 .6.288.936.888.936.6 0 .936-.336.936-.936 0-.216-.06-.576-.144-1.008H10.49z" /></svg>,
  'HTML5': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.23.002.69 7.825h11.488l-.34 3.828-3.444 1.002-3.488-.98- .244-2.72h-2.22l.33 4.171 5.592 1.503 5.643-1.503.689-7.825H8.531z"/></svg>,
  'CSS3': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.91L5.41 4.91l.213 2.622 10.125.002-.255 2.716h-7.64l.244 2.58h7.16l-.37 3.828-2.43.72-2.45-.72-.164-1.724h-2.22l.33 4.17L12 19.34l5.35-1.502.503-5.59H6.03l-.243-2.58h12.51l.21-2.25z"/></svg>,
  'Tailwind CSS': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>Tailwind CSS</title><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>,
  'Next.js': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>Next.js</title><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.64 16.52c-.22.19-1.01.2-1.2.01-.19-.19-.7-3.84-.79-4.32l-5.41 6.35c-.17.2-.42.31-.7.31-.26 0-.5-.1-.66-.28l-3.3-3.2V20c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-7.95c0-.21.13-.4.32-.47.19-.07.41.01.53.18l3.4 3.32 5.56-6.44c.14-.17.36-.24.56-.18.2.06.34.24.34.45v7.24c.02.26 0 .51-.06.75z"/></svg>,
  'TypeScript': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>TypeScript</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zM18.82 17.394h-2.91L13.1 11.23h-2.19v6.164H8.092v-8.23c0-1.88.96-2.835 3.015-2.835h2.19c1.936 0 2.893.9 2.893 2.835 0 1.15-.36 1.867-1.04 2.37l2.58 3.86h-2.91zm-5.72-4.16v-2.07c0-.75-.24-1.095-.92-1.095h-1.27v4.26h1.27c.68 0 .92-.375.92-1.095z" /></svg>,
  'Node.js': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>Node.js</title><path d="M12.09.25c-2.44 0-4.8.44-6.9.83.47.22.75.72.75 1.24v19.36c0 .52-.28.98-.75 1.24a12.23 12.23 0 0 0 6.9.83c6.64 0 12.05-5.38 12.05-12.02S18.73.25 12.09.25zM11.92 12.4a3.1 3.1 0 0 1-2.4-1.32l-.18.96-1.5-1.5.17-.9a3.12 3.12 0 0 1 4.5-.4l.18.9-1.59 1.5-.18-.9zM1.16 20.34a11.9 11.9 0 0 1-.9-8.32c0-.6.31-1.14.8-1.42l5.12-2.95c.47-.28.79-.1.79.46v5.9c0 .56-.32.74-.8.46l-5.01-2.95zM1.17 3.66a11.9 11.9 0 0 1 .9-1.68C2.53 1.7 3 1.7 3.5 2l5.02 2.95c.48.28.8.1.8-.46V.93c0-.56-.31-1.14-.8-1.42a13.3 13.3 0 0 0-6.36 4.15z"/></svg>,
  'Express.js': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>Express</title><path d="M24 14.182C24 12.982 23.018 12 21.818 12h-1.637l-2.09-3.636a.727.727 0 0 0-.637-.364H14.18a.727.727 0 0 0-.636.364L11.455 12H9.818a.727.727 0 0 0-.727.727v1.455c0 .4.327.727.727.727h1.637l-1.09 1.818H9.818a.727.727 0 0 0-.727.727v1.455c0 .4.327.727.727.727h2.182c1.2 0 2.181-1.09 2.181-2.182v-2.363l1.091-2h1.636l1.09 2v2.364c0 1.09-.982 2.181-2.182 2.181H14.18a.727.727 0 0 0-.727.727v1.455c0 .4.327.727.727.727h2.182c1.2 0 2.181-1.09 2.181-2.182v-2.363l1.819-3.273h1.272c1.2 0 2.182-.982 2.182-2.182zm-22.364-1.455h7.636c1.2 0 2.182-.982 2.182-2.182V8.182c0-1.2-.982-2.182-2.182-2.182H1.636A.727.727 0 0 0 .91 6.364v1.455c0 .4.327.727.727.727h7.636v1.454H1.636a.727.727 0 0 0-.727.727v1.455c0 .4.327.727.727.727zm.91 3.273h7.635c1.2 0 2.182-.982 2.182-2.182v-1.454H2.546a.727.727 0 0 0-.728.727v1.455c0 .4.328.727.728.727h.001z"/></svg>,
  'MongoDB': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>MongoDB</title><path d="M12.215 24c-1.348 0-2.45-.48-3.32-1.44a4.93 4.93 0 0 1-1.41-3.43c0-1.34.468-2.45 1.4-3.32.936-.88 2.09-1.32 3.46-1.32.744 0 1.4.15 1.97.45.57.3.995.69 1.28 1.16s.425 1.01.425 1.62c0 .48-.07.9-.21 1.26-.14.36-.36.69-.66 1.01a4.86 4.86 0 0 0 2.29 2.29c.32-.29.6-.55.85-.78.25-.23.53-.41.85-.54s.66-.2 1.02-.2c.42 0 .82.1 1.2.3.38.2.7.51.96.91s.39.89.39 1.48c0 .54-.12.98-.36 1.34s-.57.62-.99.78c-.42.16-.86.24-1.32.24a4.93 4.93 0 0 1-3.43-1.41c-.88-.93-1.32-2.08-1.32-3.46 0-.74.15-1.4.45-1.97s.69-.99 1.16-1.28c.47-.29 1.01-.43 1.62-.43.48 0 .9.07 1.26.21.36.14.68.36 1 .66a4.86 4.86 0 0 0-2.29-2.29c.29.32.54.6.78.85s.41.53.54.85c.13.32.2.65.2 1.02 0 .42-.1.82-.3 1.2s-.51.7-.91.96-.89.39-1.48.39c-.54 0-.98-.12-1.34-.36s-.62-.57-.78-.99-.24-.86-.24-1.32c0-.57.12-1.1.36-1.57.24-.47.57-.86.99-1.17s.92-.5 1.5-.59c.58-.09 1.2-.14 1.86-.14V7.9c0-.42-.03-.8-.09-1.16-.06-.36-.16-.68-.3-.97s-.3-.54-.51-.76-.45-.4-.7-.52-.53-.2-.82-.24-.59-.06-.9-.06c-1.34 0-2.45.47-3.32 1.4.88.94 1.32 2.09 1.32 3.46v5.27a14.07 14.07 0 0 0-1.86.14c-.58.09-1.08.28-1.5.59-.42.3-.76.65-1.02.99s-.45.74-.59 1.17-.21.9-.21 1.43c0 .57.12 1.1.36 1.57.24.47.57.86.99 1.17s.92.5 1.5.59c.58.09 1.2.14 1.86.14h.02zm-1.89-6.96c-.63 0-1.17.22-1.62.66s-.67.97-.67 1.59c0 .62.22 1.16.67 1.61s.99.67 1.62.67c.62 0 1.16-.22 1.61-.67.45-.45.67-.99.67-1.61 0-.62-.22-1.14-.67-1.59s-1-.66-1.61-.66z" /></svg>,
  'Firebase': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>Firebase</title><path d="M3.666 18.067L4.35 12.35l-2.58 3.518c-.89.89-1.022 2.227-.333 3.222.688 1 2.012 1.222 3.222.333l12.82-9.667-3.23-3.222L3.667 18.067zM18.8 2.09C17.58.878 16.035.88 14.825 2.09L5.053 11.83l3.222 3.222L18.8 4.523c1-1 1.222-2.333.333-3.222l-.333-.211zm-4.223 9.444L12.35 9.31l-7.088 7.088 2.22 2.222 7.09-7.088z"/></svg>,
  'Git': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>Git</title><path d="M23.5 11.13l-10-9.87a.51.51 0 0 0-.71 0l-10 9.87a.5.5 0 0 0 .36.87h1.85v10a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5v-6.5h3v6.5a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5v-10h1.85a.5.5 0 0 0 .36-.87zm-1.86 10.37h-4.5v-6.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v6.5h-4.5v-9.65l6.5-6.42 6.5 6.42zM12 8.44a3.13 3.13 0 1 0 0-6.26 3.13 3.13 0 0 0 0 6.26z"/></svg>,
  'GitHub': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  'Docker': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>Docker</title><path d="M23.152 10.276c-.23-.157-.49-.244-.755-.244h-5.417V4.5c0-.265-.087-.525-.244-.755C16.58.502 11.238 0 11.238 0H4.5C2.015 0 0 2.015 0 4.5v15C0 21.985 2.015 24 4.5 24h15c2.485 0 4.5-2.015 4.5-4.5V11.03c0-.265-.087-.525-.245-.755zM8.25 10.03H4.5v-3h3.75v3zm0 4.5H4.5v-3h3.75v3zm0 4.5H4.5v-3h3.75v3zm4.5-9h-3.75v-3h3.75v3zm0 4.5h-3.75v-3h3.75v3zm0 4.5h-3.75v-3h3.75v3zm4.5-9h-3.75v-3h3.75v3zm0 4.5h-3.75v-3h3.75v3zm0-10.25c.414 0 .75.336.75.75v3.75h-3.75V8.28h3z"/></svg>,
  'VS Code': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>Visual Studio Code</title><path d="M23.15 2.587L18.44 0l-5.65 4.9L8.44 0 .85 5.51l5.2 5.2-5.2 5.2.85 5.51 7.59-5.51 4.35 4.9 4.71-2.587V2.587zM17.26 12L7.05 2.587l3.86 3.12L17.26 12zm-4.71 4.9L7.05 21.413l3.86-3.12L12.55 16.9zm5.89-9.8L12.55 12l5.89 4.9V7.1z"/></svg>,
  'Postman': () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 fill-current"><title>Postman</title><path d="M12.44 0C5.93 0 1.3 4.23 1.3 10.02c0 3.02 1.54 5.75 4.02 7.64l4.2-4.13c-.36-.34-.58-.8-.58-1.32 0-1.11.9-2.01 2.01-2.01s2.01.9 2.01 2.01c0 .52-.22.98-.58 1.32l4.2 4.13c2.48-1.89 4.02-4.62 4.02-7.64C22.7 4.23 18.07 0 12.44 0zM12.44 8.7c-1.11 0-2.01-.9-2.01-2.01s.9-2.01 2.01-2.01 2.01.9 2.01 2.01S13.55 8.7 12.44 8.7z"/></svg>,
  'Genkit': () => <Lightbulb className="w-5 h-5 mr-2" />,
};

type SkillCategoryProps = {
  title: string;
  description: string;
  skills: string[];
  icon: React.ElementType;
  animationDelay: number;
};

const SkillCategory = ({ title, description, skills, icon: Icon, animationDelay }: SkillCategoryProps) => (
  <Card className="bg-card/50 backdrop-blur-sm border-primary/10 rounded-xl shadow-lg transition-all duration-300 hover:shadow-primary/10 hover:border-primary/30 animate-in fade-in zoom-in-95" style={{ animationDelay: `${animationDelay}ms` }}>
    <CardHeader>
      <CardTitle className="font-headline text-2xl font-bold flex items-center gap-3">
        <Icon className="w-8 h-8 text-primary" />
        {title}
      </CardTitle>
      <CardDescription className="pt-2 text-base">
        {description}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => {
          const SkillIcon = skillIcons[skill] || null;
          return (
            <div
              key={skill}
              className="flex items-center text-base font-medium bg-secondary/80 text-foreground py-2 px-4 rounded-lg border border-transparent transition-all duration-300 transform hover:scale-105 hover:bg-primary/20 hover:text-primary animate-in fade-in"
              style={{ animationDelay: `${animationDelay + 150 + index * 50}ms` }}
            >
              {SkillIcon && <SkillIcon />}
              {skill}
            </div>
          );
        })}
      </div>
    </CardContent>
  </Card>
);


export default function SkillsShowcase({ frontend, backend, tools, soft }: SkillsShowcaseProps) {
  return (
    <div className="space-y-12">
      <header className="text-center animate-in fade-in duration-500">
        <CardTitle className="font-headline text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
          <Lightbulb className="w-12 h-12 text-primary" />
          Skills Showcase
        </CardTitle>
        <CardDescription className="text-lg md:text-xl pt-4 max-w-3xl mx-auto">
          Here's a breakdown of my technical and soft skills. I'm constantly learning and expanding this toolkit to build better, more efficient applications.
        </CardDescription>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SkillCategory
          title="Frontend Development"
          description="Crafting beautiful, responsive, and user-friendly interfaces with modern technologies. My focus is on creating seamless user experiences that are both performant and accessible."
          skills={frontend}
          icon={Code}
          animationDelay={200}
        />
        <SkillCategory
          title="Backend Development"
          description="Building robust and scalable server-side applications and APIs. I enjoy designing data models and business logic that form the backbone of a reliable digital product."
          skills={backend}
          icon={Bot}
          animationDelay={400}
        />
        <SkillCategory
          title="Developer Tools & Platforms"
          description="Utilizing a variety of tools to streamline development, ensure code quality, and manage deployments. Efficiency and best practices are key to my workflow."
          skills={tools}
          icon={Wrench}
          animationDelay={600}
        />
        <SkillCategory
          title="Soft Skills"
          description="Beyond the code, I believe strong communication and collaboration are crucial for success. I thrive in team environments and am dedicated to continuous improvement and agile methodologies."
          skills={soft}
          icon={BrainCircuit}
          animationDelay={800}
        />
      </div>
    </div>
  );
}

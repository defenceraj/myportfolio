import SkillsShowcase from '@/components/portfolio/skills-showcase';
import { profile } from '@/lib/data';

export default function SkillsPage() {
  return (
    <div className="animate-in fade-in duration-500">
        <SkillsShowcase 
            frontend={profile.skills.frontend}
            backend={profile.skills.backend}
            tools={profile.skills.tools}
            soft={profile.skills.soft}
        />
    </div>
  );
}

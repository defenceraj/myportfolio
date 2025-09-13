import FeaturedProjects from "@/components/portfolio/featured-projects";
import { profile } from "@/lib/data";

export default function ProjectsPage() {
    return (
        <div className="animate-in fade-in duration-500">
            <FeaturedProjects projects={profile.projects} showAll />
        </div>
    )
}

import EducationTimeline from "@/components/portfolio/education-timeline";
import { profile } from "@/lib/data";

export default function EducationPage() {
    return (
        <div className="animate-in fade-in duration-500">
            <EducationTimeline educationHistory={profile.education} />
        </div>
    )
}

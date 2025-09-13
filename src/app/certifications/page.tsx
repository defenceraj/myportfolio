import CertificationsCarousel from "@/components/portfolio/certifications-carousel";
import { profile } from "@/lib/data";

export default function CertificationsPage() {
    return (
        <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
            <CertificationsCarousel certifications={profile.certifications} />
        </div>
    )
}

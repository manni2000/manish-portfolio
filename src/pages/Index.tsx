import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import TechStackSection from "@/components/TechStackSection";
import MetricsSection from "@/components/MetricsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground relative">
    <CursorGlow />
    <Navbar />
    <HeroSection />
    <TrustBar />
    <ProjectsSection />
    <ExperienceSection />
    <EducationSection />
    <TechStackSection />
    <MetricsSection />
    <AchievementsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

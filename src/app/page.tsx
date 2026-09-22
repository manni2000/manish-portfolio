import Hero from "@/components/portfolio/Hero";
import { Achievements, AssistantPreview, Capabilities, ContactCTA, ExperiencePreview, Introduction, SelectedProjects, SkillsPreview } from "@/components/portfolio/HomeSections";

export default function HomePage() {
  return <><Hero/><Introduction/><SelectedProjects/><ExperiencePreview/><Capabilities/><SkillsPreview/><Achievements/><AssistantPreview/><ContactCTA/></>;
}

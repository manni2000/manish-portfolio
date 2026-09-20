import Hero from "@/components/portfolio/Hero";
import { Achievements, AssistantPreview, Capabilities, ContactCTA, ExperiencePreview, Introduction, SelectedProjects, SkillsPreview } from "@/components/portfolio/HomeSections";
import GithubActivity from "@/components/portfolio/GithubActivity";

export default function HomePage() {
  return <><Hero/><Introduction/><SelectedProjects/><ExperiencePreview/><Capabilities/><SkillsPreview/><GithubActivity/><Achievements/><AssistantPreview/><ContactCTA/></>;
}

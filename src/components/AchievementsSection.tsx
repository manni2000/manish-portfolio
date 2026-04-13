import { Award, Trophy, Code, GitPullRequest } from "lucide-react";
import { MotionSection, MotionDiv, MotionItem } from "./MotionWrappers";

const achievements = [
  { title: "400+ DSA Problems Solved", desc: "LeetCode, GeeksforGeeks and other competitive platforms", icon: Code },
  { title: "Social Winter of Code S3", desc: "Merged 10+ Pull Requests successfully (Open Source, 2023)", icon: GitPullRequest },
  { title: "Chegg India — CS SME", desc: "Computer Science Subject Matter Expert (Freelancer, 2024)", icon: Award },
  { title: "Hacktoberfest 2022", desc: "Merged 7+ Pull Requests successfully (Open Source)", icon: GitPullRequest },
  { title: "GirlScript Summer of Code 2022", desc: "Merged 5+ Pull Requests successfully (Open Source)", icon: GitPullRequest },
  { title: "Kshitij — IIT Kharagpur", desc: "Qualified B-Plan hackathon organized by IIT Kharagpur, 2022", icon: Trophy },
];

const AchievementsSection = () => (
  <MotionSection className="section-padding">
    <div className="container max-w-4xl mx-auto">
      <MotionDiv className="mb-12 md:mb-16 text-center">
        <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Recognition</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground">
          Open Source & <span className="gradient-text">Achievements</span>
        </h2>
      </MotionDiv>

      <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
        {achievements.map((a) => {
          const Icon = a.icon;
          return (
            <MotionItem key={a.title}>
              <div className="glass-card-hover p-4 md:p-5 flex items-start gap-3 md:gap-4 h-full">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">{a.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
                </div>
              </div>
            </MotionItem>
          );
        })}
      </div>
    </div>
  </MotionSection>
);

export default AchievementsSection;

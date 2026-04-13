import { Award, Trophy, Code, GitPullRequest } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const achievements = [
  { title: "400+ DSA Problems Solved", desc: "LeetCode, GeeksforGeeks and other competitive platforms", icon: Code },
  { title: "Social Winter of Code S3", desc: "Merged 10+ Pull Requests successfully (Open Source, 2023)", icon: GitPullRequest },
  { title: "Chegg India — CS SME", desc: "Computer Science Subject Matter Expert (Freelancer, 2024)", icon: Award },
  { title: "Hacktoberfest 2022", desc: "Merged 7+ Pull Requests successfully (Open Source)", icon: GitPullRequest },
  { title: "GirlScript Summer of Code 2022", desc: "Merged 5+ Pull Requests successfully (Open Source)", icon: GitPullRequest },
  { title: "Kshitij — IIT Kharagpur", desc: "Qualified B-Plan hackathon organized by IIT Kharagpur, 2022", icon: Trophy },
];

const AchievementsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding">
      <div className="container max-w-4xl mx-auto" ref={ref}>
        <div className="mb-16 text-center">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Open Source & <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="glass-card-hover p-5 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">{a.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

import { Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const achievements = [
  { title: "Social Winter of Code", desc: "Open source contributor" },
  { title: "Hacktoberfest", desc: "Active open source contributions" },
  { title: "GirlScript Summer of Code", desc: "Open source contributor" },
  { title: "Chegg SME", desc: "Subject Matter Expert" },
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
          {achievements.map((a) => (
            <div key={a.title} className="glass-card-hover p-5 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">{a.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";

function SkillRow({ items, direction = "left", duration = 26 }) {
  const loopItems = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-3"
      >
        {loopItems.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="inline-flex h-16 w-16 items-center justify-center"
            title={skill.name}
            aria-label={skill.name}
          >
            <img src={skill.logo} alt={skill.name} loading="lazy" className="h-10 w-10 rounded-sm object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function TechStackMarquee({ groups }) {
  const allSkills = groups.flatMap((group) => group.skills);
  const uniqueSkills = Array.from(new Map(allSkills.map((skill) => [skill.name, skill])).values());
  const midpoint = Math.ceil(uniqueSkills.length / 2);
  const firstRow = uniqueSkills.slice(0, midpoint);
  const secondRow = uniqueSkills.slice(midpoint);

  return (
    <SectionShell id="tech-stack" title="Core Technologies" kicker="Toolkit" className="overflow-hidden">
      <div className="space-y-4 rounded-[2rem] border border-white/15 bg-white/5 p-5 backdrop-blur-xl md:p-6">
        <p className="max-w-2xl text-sm text-mist">
          A curated set of technologies I rely on across product development, data workflows, and machine learning projects.
        </p>
        <SkillRow items={firstRow} direction="left" duration={26} />
        {secondRow.length > 0 && <SkillRow items={secondRow} direction="right" duration={30} />}
      </div>
    </SectionShell>
  );
}

export default TechStackMarquee;

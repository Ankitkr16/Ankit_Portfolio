import { useState } from "react";
import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";

function Skills({ groups }) {
  const [activeGroup, setActiveGroup] = useState("All");
  const filteredGroups = activeGroup === "All" ? groups : groups.filter((group) => group.title === activeGroup);

  return (
    <SectionShell id="skills" title="Skills" kicker="Capabilities" className="overflow-hidden">
      <div className="mb-6 flex flex-wrap gap-2">
        {["All", ...groups.map((group) => group.title)].map((item) => (
          <button
            key={item}
            onClick={() => setActiveGroup(item)}
            className={`rounded-full px-4 py-1.5 text-xs transition ${
              activeGroup === item ? "bg-white text-ink" : "border border-white/20 bg-white/5 text-mist hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -6, rotateX: -2, rotateY: 2 }}
            className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-lg transition hover:border-accent/50"
          >
            <h3 className="font-display text-xl text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: skillIndex * 0.03 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs text-mist transition hover:border-accent/50 hover:text-white"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    loading="lazy"
                    className="h-4 w-4 rounded-sm object-contain"
                  />
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

export default Skills;

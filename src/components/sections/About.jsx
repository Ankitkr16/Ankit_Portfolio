import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";

function About({ data }) {
  return (
    <SectionShell id="about" title="About Me" kicker="Narrative" className="pt-8 md:pt-10">
      <div className="grid gap-6 md:grid-cols-12 md:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7"
        >
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl md:p-7">
            <p className="text-mist">{data.story}</p>
            <p className="mt-4 text-mist">{data.goals}</p>
          </div>
          <div className="mt-6 rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur-xl">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Learning Timeline</p>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-[#0b1120] via-[#0b1120]/70 to-transparent dark:from-[#0b1120]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/75 to-transparent dark:from-[#0b1120]" />
              <div className="scrollbar-hidden max-h-[280px] space-y-3 overflow-y-auto pr-1 md:max-h-[360px]">
                {data.learningTimeline.map((item, index) => (
                  <motion.div
                    key={`${item.year}-${item.title}`}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-xs uppercase tracking-[0.22em] text-accent">{item.year}</div>
                    <h4 className="mt-1 text-white">{item.title}</h4>
                    <p className="text-sm text-mist">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="md:col-span-5"
        >
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl md:h-[calc(100%-1.25rem)]">
            <img
              src={data.profileImage}
              alt="Profile"
              loading="lazy"
              className="h-[320px] w-full object-cover md:h-full md:min-h-[480px]"
            />
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}

export default About;

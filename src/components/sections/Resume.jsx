import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";

function Resume({ timeline }) {
  return (
    <SectionShell id="resume" title="Resume Snapshot" kicker="Career Overview">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="sticky top-24 rounded-3xl border border-white/15 bg-white/5 p-6">
            <h3 className="font-display text-2xl text-white">Download CV</h3>
            <p className="mt-3 text-sm text-mist">Get the latest version with detailed project and internship information.</p>
            <a
              href="/General%20CV%20Template.pdf"
              download
              className="mt-6 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="space-y-4 lg:col-span-8">
          {timeline.map((block, index) => (
            <motion.article
              key={block.lane}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-5"
            >
              <h4 className="font-display text-lg text-white">{block.lane}</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-mist">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export default Resume;

import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";

function Certificates({ items }) {
  return (
    <SectionShell id="certificates" title="Certificates & Achievements" kicker="Proof of Work">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <motion.a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 transition hover:-translate-y-1 hover:border-accent/50"
          >
            {item.image ? (
              <img src={item.image} alt={item.title} loading="lazy" className="h-40 w-full object-cover" />
            ) : (
              <div className="flex h-40 w-full items-center justify-center bg-white/10 px-4 text-center text-sm text-mist">
                Add certificate image here
              </div>
            )}
            <div className="p-5">
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs uppercase tracking-widest text-accent">
                {item.platform}
              </span>
              <h3 className="mt-4 text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-mist">Click to view certificate</p>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionShell>
  );
}

export default Certificates;

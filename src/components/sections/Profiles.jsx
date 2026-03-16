import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";

function Profiles({ items }) {
  return (
    <SectionShell id="profiles" title="Platform Profiles" kicker="Presence">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {items.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="min-w-0 rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-accent/60"
          >
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={item.logo}
                alt={item.name}
                loading="lazy"
                className="h-10 w-10 shrink-0 rounded-xl bg-white/10 p-2 object-contain"
              />
              <h3 className="min-w-0 break-words text-lg leading-tight text-white">{item.name}</h3>
            </div>
            <p className="mt-1 text-sm text-mist">{item.stat}</p>
          </motion.a>
        ))}
      </div>
    </SectionShell>
  );
}

export default Profiles;

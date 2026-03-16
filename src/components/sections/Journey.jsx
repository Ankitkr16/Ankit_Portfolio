import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";

function Journey({ items }) {
  return (
    <SectionShell id="journey" title="Experience / Learning Journey" kicker="Milestones">
      <div className="relative ml-3 border-l border-white/20 pl-6">
        {items.map((item, index) => (
          <motion.div
            key={item.time}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="relative mb-7"
          >
            <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full bg-accent" />
            <p className="text-xs uppercase tracking-widest text-accent">{item.time}</p>
            <p className="mt-1 text-mist">{item.event}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

export default Journey;

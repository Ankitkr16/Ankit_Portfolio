import { motion } from "framer-motion";

function SectionShell({ id, title, kicker, className = "", children }) {
  return (
    <section id={id} className={`relative py-14 md:py-18 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {(kicker || title) && (
          <div className="mb-7 md:mb-8">
            {kicker && <p className="mb-2 text-xs uppercase tracking-[0.35em] text-accent">{kicker}</p>}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl text-white md:text-5xl"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default SectionShell;

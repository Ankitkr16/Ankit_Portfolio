import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Hero({ data }) {
  const rotatingWords = ["performance optimization", "ui/ux design", "web applications", "ai/ml models"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative flex min-h-[88vh] items-center overflow-hidden pt-24 md:min-h-[92vh]">
      <motion.div
        animate={{ x: [0, 30, -15, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 top-20 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 10, 0], y: [0, 10, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-14 right-0 h-52 w-52 rounded-full bg-emerald-300/15 blur-3xl"
      />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-5 md:grid-cols-12 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent">Data Science and ML Focus</p>
          <h1 className="font-display text-5xl leading-tight text-white sm:text-6xl md:text-7xl">{data.name}</h1>
          <p className="mt-4 max-w-xl text-lg text-mist">{data.role}</p>
          <div className="mt-3 h-9 text-lg font-medium text-accent2">
            I build{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="inline-block"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-2xl text-mist"
          >
            {data.pitch}
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition"
            >
              {data.ctaPrimary}
            </motion.a>
            <motion.a
              href="/General%20CV%20Template.pdf"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-white/30 px-6 py-3 text-sm text-white transition hover:bg-white/10"
              download
            >
              {data.ctaSecondary}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:col-span-5"
        >
          <motion.div
            whileHover={{ rotateX: -4, rotateY: 4, y: -4 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="glass-pulse relative rounded-3xl border border-white/20 bg-white/5 p-6 shadow-glass backdrop-blur-2xl"
          >
            <p className="text-sm uppercase tracking-wider text-accent2">Now Building</p>
            <h3 className="mt-2 font-display text-2xl text-white">SkillBridge</h3>
            <div className="mt-6 space-y-4 text-sm text-mist">
              <p>A platform that builds a bridge between students and clients.</p>
              <p>It works like a freelancer app for real projects and collaboration.</p>
              <p>Focused on helping students gain experience while clients find practical talent.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

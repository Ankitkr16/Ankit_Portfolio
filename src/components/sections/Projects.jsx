import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionShell from "../layout/SectionShell";
import ProjectModal from "./ProjectModal";

function Projects({ items }) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <SectionShell id="projects" title="Featured Projects" kicker="Work">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl"
          >
            <div className="relative overflow-hidden">
              <img src={project.image} alt={project.title} loading="lazy" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
              <div className="absolute bottom-3 left-4 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
                Case Study
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-2xl text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-mist">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-mist">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-mist transition hover:text-white">
                  <Github size={18} />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-mist transition hover:text-white">
                  <ExternalLink size={18} />
                </a>
                <button onClick={() => setActiveProject(project)} className="ml-auto text-sm text-accent transition hover:text-white">
                  View Details
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </SectionShell>
  );
}

export default Projects;

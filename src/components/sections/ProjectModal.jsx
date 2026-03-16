import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-black/75 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-2xl rounded-3xl border border-white/15 bg-ink p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-2xl text-white">{project.title}</h3>
              <button onClick={onClose} className="rounded-full border border-white/20 p-2 text-mist hover:text-white">
                <X size={16} />
              </button>
            </div>
            <img src={project.image} alt={project.title} className="h-56 w-full rounded-2xl object-cover" />
            <p className="mt-4 text-mist">{project.details}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/20 px-3 py-1 text-xs text-mist">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;

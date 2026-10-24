import React, { useEffect } from "react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-10 shadow-2xl z-10 text-zinc-100">
        
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
        >
          ✕
        </button>

        <div className="mb-8 pr-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-500">
              // Caso de estudio
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Objetivo & Solución
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-zinc-950/60 p-6 rounded-2xl border border-zinc-800/60">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-4">
                Desafíos Técnicos & Arquitectura
              </h3>
              <ul className="space-y-3 mb-6">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-zinc-300 leading-snug">
                    <span className="mr-2 text-indigo-400 font-mono">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Stack de Tecnologías
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2.5 pt-6 border-t border-zinc-800/80">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/30"
                >
                  Probar Demo en Vivo ↗
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700/50"
              >
                Ver Repositorio en GitHub ↗
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
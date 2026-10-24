import React from "react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      onClick={onSelect}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-md transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent" />

      <div>
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-950/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-rose-500/80 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-amber-500/80 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-emerald-500/80 transition-colors" />
          </div>
          <span className="text-[11px] font-mono text-zinc-500">
            project.app
          </span>
        </div>

        <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-indigo-400/80 shrink-0">
              Ver detalle ↗
            </span>
          </div>

          <p className="text-sm leading-relaxed text-zinc-400 mb-4 line-clamp-3">
            {project.description}
          </p>

          <ul className="space-y-1.5 mb-6">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-center text-xs text-zinc-300 font-mono">
                <span className="mr-2 text-indigo-400">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-800 bg-zinc-950/80 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-200 bg-zinc-800/80 hover:bg-zinc-700 transition-colors border border-zinc-700/50"
          >
            GitHub Repo ↗
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-colors"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
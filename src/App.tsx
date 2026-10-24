import { useState } from "react";
import { projectsData, type Project } from "./data/projects";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectModal } from "./components/ProjectModal";

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen bg-[#08090d] text-zinc-100 selection:bg-indigo-500 selection:text-white">
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/15 blur-[140px] pointer-events-none rounded-full" />

      <nav className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-500 text-sm font-extrabold text-white shadow-md shadow-indigo-500/20">
            GP
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight text-zinc-200">
            gisel pautasso
          </span>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible para proyectos
        </div>
      </nav>

      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="max-w-3xl mx-auto text-center mb-16 pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-mono font-medium mb-6">
            <span>👋</span>
            <span>Hola, soy Gisel Pautasso</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Transformando problemas complejos en{" "}
            <span className="bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              software funcional.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto font-normal">
            Desarrollo aplicaciones y herramientas escalables combinando criterio analítico, diseño estructurado y foco en la experiencia de uso.
          </p>
        </header>

        <div className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-800/80">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-200">
            Proyectos seleccionados
          </h2>
          <span className="text-xs font-mono text-zinc-500">
            {projectsData.length} {projectsData.length === 1 ? "proyecto" : "proyectos"}
          </span>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-md md:max-w-none mx-auto">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={projectsData.length === 1 ? "md:col-span-2 lg:col-span-1 lg:col-start-2 max-w-md mx-auto w-full" : "w-full"}
            >
              <ProjectCard
                project={project}
                onSelect={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </section>
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
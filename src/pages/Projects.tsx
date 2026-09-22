import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <>
      <section className="hero" style={{ padding: '2rem 0 1rem' }}>
        <span className="eyebrow">Projects</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', margin: '0.75rem 0 1rem', maxWidth: '20ch' }}>
          Things I&apos;ve built
        </h1>
        <p className="lead-body">
          A mix of full-stack apps, infrastructure tooling, and side experiments across systems, data, and interfaces.
        </p>
      </section>

      <section style={{ padding: '1rem 0 2rem' }}>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
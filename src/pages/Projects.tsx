import { ProjectCard } from '../components/ProjectCard';
import { GlassCard } from '../components/GlassCard';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <main style={{ padding: '2rem 0' }}>
      <div className="container">
        <GlassCard className="mb-4">
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            My Projects 🛠️
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            A collection of projects I've built, featuring full-stack development, machine learning, and cloud infrastructure expertise.
          </p>
        </GlassCard>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

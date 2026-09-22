import { Project } from '../data/projects';
import { GlassCard } from './GlassCard';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassCard className="fade-in">
      <div className="d-flex flex-column h-100">
        <div className="mb-3">
          <span style={{ fontSize: '2.5rem' }}>{project.icon}</span>
        </div>
        <h3 className="mb-2" style={{ color: 'var(--text-light)', fontSize: '1.3rem' }}>
          {project.title}
        </h3>
        <p className="mb-3" style={{ color: 'var(--text-muted)', flexGrow: 1 }}>
          {project.description}
        </p>
        <div className="mb-3">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button"
          style={{ display: 'inline-block' }}
        >
          View Repository →
        </a>
      </div>
    </GlassCard>
  );
}

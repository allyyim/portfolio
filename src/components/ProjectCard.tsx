import { Project } from '../data/projects';
import { GlassCard } from './GlassCard';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassCard className="fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{project.icon}</div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
      <p style={{ color: 'var(--ink-muted)', marginBottom: '1rem', flexGrow: 1, lineHeight: 1.6 }}>
        {project.description}
      </p>
      <div style={{ marginBottom: '1rem' }}>
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button"
          >
            Live site →
          </a>
        )}
        {project.storeUrl && (
          <a
            href={project.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button secondary"
          >
            Microsoft Store
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button secondary"
        >
          Repository →
        </a>
      </div>
    </GlassCard>
  );
}
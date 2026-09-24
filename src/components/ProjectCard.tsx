import { Project } from '../data/projects';
import { GlassCard } from './GlassCard';

interface ProjectCardProps {
  project: Project;
}

function ProjectGlyph({ id }: { id: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (id) {
    case 'matcha-ratings':
      return (
        <svg {...common} aria-hidden>
          <path d="M4 10h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
          <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17" />
          <path d="M8 3c0 1 1 1.5 1 2.5S8 7 8 8M12 3c0 1 1 1.5 1 2.5S12 7 12 8" />
        </svg>
      );
    case 'ado-prism':
      return (
        <svg {...common} aria-hidden>
          <path d="M12 3 4 20h16z" />
          <path d="m12 3-4 8.5h8z" />
        </svg>
      );
    case 'predictive-autoscaling':
      return (
        <svg {...common} aria-hidden>
          <path d="M4 20V5" />
          <path d="M4 20h16" />
          <path d="m6 15 4-5 4 3 5-8" />
          <path d="M15 5h4v4" />
        </svg>
      );
    case 'pythia':
      return (
        <svg {...common} aria-hidden>
          <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z" />
          <path d="M5 17h14" />
          <path d="M9 8h6" />
        </svg>
      );
    case 'readhot':
      return (
        <svg {...common} aria-hidden>
          <path d="M6 4h9a3 3 0 0 1 3 3v10" />
          <path d="M6 4v14a2 2 0 0 0 2 2h10" />
          <circle cx="10.5" cy="15" r="1.5" />
          <path d="M12 15V9l4-1v6" />
          <circle cx="14.5" cy="14" r="1.5" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassCard className="fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="project-glyph"><ProjectGlyph id={project.id} /></div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
      <p style={{ color: 'var(--ink-muted)', marginBottom: '1rem', flexGrow: 1, lineHeight: 1.6 }}>
        {project.description}
      </p>
      <div style={{ marginBottom: '1rem' }}>
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
      <div className="card-actions">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button compact"
          >
            Live →
          </a>
        )}
        {project.storeUrl && (
          <a
            href={project.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button secondary compact"
          >
            Store
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button secondary compact"
        >
          Repo →
        </a>
      </div>
    </GlassCard>
  );
}
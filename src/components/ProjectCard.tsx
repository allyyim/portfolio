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
  const [titleMain, titleEyebrow] = project.title.includes('|')
    ? project.title.split('|').map((s) => s.trim())
    : [project.title, undefined];

  const primaryUrl = project.liveUrl ?? project.storeUrl ?? project.repoUrl;
  const primaryLabel = project.liveUrl
    ? 'View Project'
    : project.storeUrl
      ? 'View in Store'
      : 'View Code';

  const secondaryLinks: { label: string; url: string }[] = [];
  if (project.liveUrl && project.storeUrl) secondaryLinks.push({ label: 'Store', url: project.storeUrl });
  if (primaryUrl !== project.repoUrl) secondaryLinks.push({ label: 'Code', url: project.repoUrl });

  return (
    <GlassCard className="fade-in project-card-inner" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {titleEyebrow && <span className="project-eyebrow">{titleEyebrow}</span>}
      <h3 className="project-title">{titleMain}</h3>

      <div className="project-glyph"><ProjectGlyph id={project.id} /></div>

      <p className="project-description">{project.description}</p>

      <div className="project-divider" />

      <div className="project-tech-line">
        {project.technologies.join(' · ')}
      </div>

      {secondaryLinks.length > 0 && (
        <div className="project-secondary-links">
          {secondaryLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label} →
            </a>
          ))}
        </div>
      )}

      <a
        href={primaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pill project-cta"
      >
        {primaryLabel} →
      </a>
    </GlassCard>
  );
}
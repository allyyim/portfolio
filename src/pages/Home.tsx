import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { GlassCard } from '../components/GlassCard';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

export function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <Hero />

      <section style={{ padding: '2rem 0' }}>
        <h2 className="section-heading">Featured Projects</h2>
        <div className="row g-4 mb-4">
          {featuredProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-3">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <Link to="/projects" className="glass-button secondary">
          View all projects →
        </Link>
      </section>

      <section style={{ padding: '2rem 0 1rem' }}>
        <GlassCard>
          <div className="row align-items-center">
            <div className="col-md-8 mb-3 mb-md-0">
              <span className="eyebrow">Let&apos;s connect</span>
              <h3 style={{ fontSize: '1.75rem', margin: '0.6rem 0 0.75rem' }}>
                Building something interesting?
              </h3>
              <p style={{ color: 'var(--ink-muted)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                I&apos;m always up for collaborating on distributed systems, developer tools, or thoughtful UIs. Reach out anytime.
              </p>
              <a
                href="https://github.com/allyyim"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button"
              >
                Get in touch
              </a>
            </div>
            <div className="col-md-4 text-center">
              <span style={{ fontSize: '4.5rem' }}>🌊</span>
            </div>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
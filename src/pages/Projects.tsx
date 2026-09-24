import { ProjectCarousel } from '../components/ProjectCarousel';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

export function Projects() {
  return (
    <>
      <Link to="/" className="back-link">← Back to home</Link>
      <section className="hero" style={{ padding: '1rem 0 1rem' }}>
        <span className="eyebrow">Projects</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', margin: '0.75rem 0 1rem', maxWidth: '20ch' }}>
          Things I&apos;ve built
        </h1>
        <p className="lead-body">
          A mix of full-stack apps, infrastructure tooling, and side experiments across systems, data, and interfaces. Swipe or use the arrows to browse.
        </p>
      </section>

      <section style={{ padding: '1rem 0 2rem' }}>
        <ProjectCarousel projects={projects} />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <a
            href="https://github.com/allyyim"
            target="_blank"
            rel="noopener noreferrer"
            className="see-more-eyebrow"
          >
            See more on GitHub →
          </a>
        </div>
      </section>
    </>
  );
}
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { GlassCard } from '../components/GlassCard';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

export function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <main>
      <Hero />

      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
            Featured Projects ✨
          </h2>
          <div className="row g-4 mb-4">
            {featuredProjects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/projects" className="glass-button">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <GlassCard>
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <h3 style={{ color: 'var(--text-light)', fontSize: '2rem', marginBottom: '1rem' }}>
                  Let's Build Something Cool 🚀
                </h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  I'm always interested in collaborating on interesting projects and learning new technologies. Feel free to reach out!
                </p>
                <a href="https://github.com/allyyim" target="_blank" rel="noopener noreferrer" className="glass-button">
                  Get in Touch
                </a>
              </div>
              <div className="col-md-6 text-center">
                <span style={{ fontSize: '5rem', display: 'block' }}>🤝</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}

import { GlassCard } from '../components/GlassCard';
import { bioData } from '../data/bio';

export function About() {
  return (
    <main style={{ padding: '2rem 0' }}>
      <div className="container">
        {/* Intro */}
        <GlassCard className="mb-5">
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            About Me 👩‍💻
          </h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            {bioData.bio}
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8' }}>
            I'm interested in distributed systems, cloud infrastructure, and building tools that scale. Currently at Microsoft working on Azure control-plane infrastructure and event-driven backend systems.
          </p>
        </GlassCard>

        {/* Education */}
        <GlassCard className="mb-5">
          <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
            Education 🎓
          </h2>
          <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '1.5rem' }}>
            <h4 style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>
              {bioData.education.school}
            </h4>
            <p style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 500 }}>
              {bioData.education.degree}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {bioData.education.period}
            </p>
          </div>
        </GlassCard>

        {/* Experience */}
        <GlassCard className="mb-5">
          <h2 style={{ color: 'var(--primary)', marginBottom: '2rem', fontSize: '1.8rem' }}>
            Experience 💼
          </h2>
          <div>
            {bioData.experience.map((job, idx) => (
              <div key={idx} style={{ marginBottom: idx < bioData.experience.length - 1 ? '2.5rem' : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <h4 style={{ color: 'var(--text-light)', marginBottom: '0.25rem' }}>
                      {job.title}
                    </h4>
                    <p style={{ color: 'var(--primary)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                    {job.period}
                  </span>
                </div>
                <ul style={{ color: 'var(--text-muted)', marginLeft: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  {job.highlights.map((highlight, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Skills */}
        <div className="row mb-5">
          <div className="col-md-4 mb-3">
            <GlassCard style={{ height: '100%' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.2rem', fontSize: '1.3rem' }}>
                Languages
              </h3>
              <div className="d-flex flex-wrap gap-2">
                {bioData.skills.languages.map((lang) => (
                  <span key={lang} className="tech-badge">
                    {lang}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
          <div className="col-md-4 mb-3">
            <GlassCard style={{ height: '100%' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.2rem', fontSize: '1.3rem' }}>
                Frameworks & Cloud
              </h3>
              <div className="d-flex flex-wrap gap-2">
                {bioData.skills.frameworks.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
          <div className="col-md-4 mb-3">
            <GlassCard style={{ height: '100%' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.2rem', fontSize: '1.3rem' }}>
                Tools & DevOps
              </h3>
              <div className="d-flex flex-wrap gap-2">
                {bioData.skills.tools.map((tool) => (
                  <span key={tool} className="tech-badge">
                    {tool}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Interests */}
        <GlassCard>
          <h3 style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
            Currently Exploring 🚀
          </h3>
          <ul style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '0.95rem' }}>
            <li>Designing scalable distributed systems and event-driven architectures</li>
            <li>Cloud infrastructure optimization and cost efficiency</li>
            <li>Full-stack development from backend APIs to polished frontends</li>
            <li>Machine learning applications and data-driven optimization</li>
            <li>Building tools that improve developer experience and productivity</li>
          </ul>
        </GlassCard>
      </div>
    </main>
  );
}

import { GlassCard } from '../components/GlassCard';
import { bioData } from '../data/bio';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <>
      <Link to="/" className="back-link">← Back to home</Link>
      <section className="hero" style={{ padding: '1rem 0 1rem' }}>
        <span className="eyebrow">About</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', margin: '0.75rem 0 1rem', maxWidth: '20ch' }}>
          Hi, I&apos;m Alison.
        </h1>
        <p className="lead-body">
          I&apos;m a software engineer on Azure&apos;s control-plane at Microsoft, where I work on event-driven backend systems and cloud infrastructure that other engineers depend on.
        </p>
        <p className="lead-body" style={{ marginTop: '0.75rem' }}>
          I studied Computer Science &amp; Business at Lehigh (honors, 2024). Outside the day job I tinker with full-stack side projects, applied ML, and developer tools, usually things I wish existed.
        </p>
      </section>

      <section style={{ padding: '1rem 0' }}>
        <GlassCard className="mb-4">
          <span className="eyebrow">Education</span>
          <h2 style={{ fontSize: '1.5rem', margin: '0.6rem 0 1rem' }}>Learning path</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-title">{bioData.education.school}</div>
              <div className="timeline-meta">{bioData.education.degree}</div>
              <div className="timeline-period">{bioData.education.period}</div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="mb-4">
          <span className="eyebrow">Journey</span>
          <h2 style={{ fontSize: '1.5rem', margin: '0.6rem 0 0.75rem' }}>How I got here</h2>
          <p style={{ color: 'var(--ink-muted)', marginBottom: '1.5rem', lineHeight: 1.7, maxWidth: '62ch' }}>
            A short story of the roles that shaped how I think about software, told in the order they happened, most recent first.
          </p>
          <div className="timeline">
            {bioData.experience.map((job, idx) => (
              <div key={idx} className="timeline-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    {job.chapter && (
                      <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                        {job.chapter}
                      </div>
                    )}
                    <div className="timeline-title">{job.title}</div>
                    <div className="timeline-meta">{job.company} · {job.location}</div>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                {job.story && (
                  <p style={{ color: 'var(--ink-muted)', marginTop: '0.75rem', lineHeight: 1.7, maxWidth: '65ch' }}>
                    {job.story}
                  </p>
                )}
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="row g-4 mb-4">
          <div className="col-md-6 col-lg-3">
            <GlassCard style={{ height: '100%' }}>
              <span className="eyebrow">Languages</span>
              <div style={{ marginTop: '0.9rem' }}>
                {bioData.skills.languages.map((s) => <span key={s} className="tech-badge">{s}</span>)}
              </div>
            </GlassCard>
          </div>
          <div className="col-md-6 col-lg-3">
            <GlassCard style={{ height: '100%' }}>
              <span className="eyebrow">Frameworks &amp; Cloud</span>
              <div style={{ marginTop: '0.9rem' }}>
                {bioData.skills.frameworks.map((s) => <span key={s} className="tech-badge">{s}</span>)}
              </div>
            </GlassCard>
          </div>
          <div className="col-md-6 col-lg-3">
            <GlassCard style={{ height: '100%' }}>
              <span className="eyebrow">Databases</span>
              <div style={{ marginTop: '0.9rem' }}>
                {bioData.skills.databases.map((s) => <span key={s} className="tech-badge">{s}</span>)}
              </div>
            </GlassCard>
          </div>
          <div className="col-md-6 col-lg-3">
            <GlassCard style={{ height: '100%' }}>
              <span className="eyebrow">Tools &amp; DevOps</span>
              <div style={{ marginTop: '0.9rem' }}>
                {bioData.skills.tools.map((s) => <span key={s} className="tech-badge">{s}</span>)}
              </div>
            </GlassCard>
          </div>
        </div>

        <GlassCard>
          <span className="eyebrow">Currently exploring</span>
          <ul style={{ color: 'var(--ink-muted)', marginTop: '0.9rem', paddingLeft: '1.25rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
            <li>Scalable distributed systems and event-driven architectures</li>
            <li>Cloud infrastructure optimization and cost efficiency</li>
            <li>Full-stack development from backend APIs to polished frontends</li>
            <li>Machine learning applications and data-driven optimization</li>
            <li>Developer tools and productivity workflows</li>
          </ul>
        </GlassCard>
      </section>
    </>
  );
}
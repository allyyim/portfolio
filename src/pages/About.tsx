import { GlassCard } from '../components/GlassCard';
import { bioData } from '../data/bio';

export function About() {
  return (
    <>
      <section className="hero" style={{ padding: '2rem 0 1rem' }}>
        <span className="eyebrow">About</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', margin: '0.75rem 0 1rem', maxWidth: '20ch' }}>
          Hi, I&apos;m Alison.
        </h1>
        <p className="lead-body">{bioData.bio}</p>
        <p className="lead-body" style={{ marginTop: '0.75rem' }}>
          I&apos;m interested in distributed systems, cloud infrastructure, and building tools that scale.
          Currently at Microsoft working on Azure control-plane infrastructure and event-driven backend systems.
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
          <span className="eyebrow">Experience</span>
          <h2 style={{ fontSize: '1.5rem', margin: '0.6rem 0 1.25rem' }}>Where I&apos;ve worked</h2>
          <div className="timeline">
            {bioData.experience.map((job, idx) => (
              <div key={idx} className="timeline-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <div className="timeline-title">{job.title}</div>
                    <div className="timeline-meta">{job.company} · {job.location}</div>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul>
                  {job.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <GlassCard style={{ height: '100%' }}>
              <span className="eyebrow">Languages</span>
              <div style={{ marginTop: '0.9rem' }}>
                {bioData.skills.languages.map((s) => <span key={s} className="tech-badge">{s}</span>)}
              </div>
            </GlassCard>
          </div>
          <div className="col-md-4">
            <GlassCard style={{ height: '100%' }}>
              <span className="eyebrow">Frameworks &amp; Cloud</span>
              <div style={{ marginTop: '0.9rem' }}>
                {bioData.skills.frameworks.map((s) => <span key={s} className="tech-badge">{s}</span>)}
              </div>
            </GlassCard>
          </div>
          <div className="col-md-4">
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
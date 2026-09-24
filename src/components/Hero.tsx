import { Link } from 'react-router-dom';
import { bioData } from '../data/bio';

export function Hero() {
  return (
    <section className="hero-landing">
      <div className="hero-topline">
        <span className="hero-kicker">Portfolio — 2025</span>
        <span className="hero-kicker">Scroll ↓</span>
      </div>

      <div className="hero-center">
        <h1 className="wordmark">{bioData.name.toLowerCase()}</h1>
        <div className="hero-meta">
          <span>{bioData.title}</span>
          <span className="meta-dot" aria-hidden />
          <span>Redmond, WA</span>
        </div>
        <p className="hero-lead">{bioData.bio}</p>
        <div className="hero-actions">
          <Link to="/projects" className="btn-pill btn-pill-solid">View Projects →</Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-outline"
          >
            Resume ↓
          </a>
        </div>
      </div>

      <span className="hero-orb" aria-hidden />
    </section>
  );
}
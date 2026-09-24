import { Link } from 'react-router-dom';
import { bioData } from '../data/bio';

export function Hero() {
  return (
    <section className="hero-landing">
      <div className="hero-topline">
        <span className="hero-kicker">{bioData.name}</span>
        <span className="hero-kicker">Scroll ↓</span>
      </div>

      <div className="hero-center">
        <h1 className="wordmark">portfolio</h1>
        <p className="hero-role">{bioData.title}</p>
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
    </section>
  );
}
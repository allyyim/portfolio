import { Link } from 'react-router-dom';
import { bioData } from '../data/bio';

export function Hero() {
  return (
    <section className="hero">
      <span className="eyebrow">Portfolio</span>
      <h1>{bioData.name}</h1>
      <p className="lead-title">{bioData.title}</p>
      <p className="lead-body">{bioData.bio}</p>
      <div className="hero-actions">
        <Link to="/projects" className="glass-button">View Projects</Link>
        <a
          href="https://github.com/allyyim"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button secondary"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/alison-yim/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button secondary"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
import { Link } from 'react-router-dom';
import { GlassCard } from './GlassCard';
import { bioData } from '../data/bio';

export function Hero() {
  return (
    <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', padding: '2rem 0' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <GlassCard>
              <h1 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Hey there! 👋
              </h1>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-light)', marginBottom: '1.5rem', fontWeight: 500 }}>
                I'm {bioData.name}
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                {bioData.subtitle}
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                {bioData.bio}
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/projects" className="glass-button">
                  Explore My Work →
                </Link>
                <a href="https://github.com/allyyim" target="_blank" rel="noopener noreferrer" className="glass-button" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid var(--glass-border)' }}>
                  GitHub
                </a>
              </div>
            </GlassCard>
          </div>
          <div className="col-md-6 text-center">
            <div style={{ fontSize: '8rem', animation: 'float 3s ease-in-out infinite' }}>
              💻
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

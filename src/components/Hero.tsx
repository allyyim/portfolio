import { Link } from 'react-router-dom';
import { GlassCard } from './GlassCard';
import { bioData } from '../data/bio';

export function Hero() {
  return (
    <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', padding: '2rem 0' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <GlassCard>
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#0f172a',
                fontFamily: 'Georgia, serif',
                lineHeight: '1.2'
              }}>
                {bioData.name}
              </h1>
              <h2 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '1.5rem', fontWeight: 400 }}>
                {bioData.title}
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '1.5rem', lineHeight: '1.8', maxWidth: '600px' }}>
                {bioData.subtitle}
              </p>
              <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: '1.8', maxWidth: '650px' }}>
                {bioData.bio}
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/projects" className="glass-button">
                  View Projects
                </Link>
                <a href="https://github.com/allyyim" target="_blank" rel="noopener noreferrer" className="glass-button" style={{ background: '#f1f5f9', color: '#1e293b', border: '1px solid #e2e8f0' }}>
                  GitHub
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

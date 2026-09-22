import { bioData } from '../data/bio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-card" style={{ margin: '2rem 1rem 1rem 1rem', borderRadius: '15px' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 style={{ color: 'var(--primary)' }}>💻 Alison Yim</h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Full-Stack Software Engineer
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 style={{ color: 'var(--text-light)' }}>Connect</h6>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <a href={bioData.contact.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={`mailto:${bioData.contact.email}`}>
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-md-end">
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              © {currentYear} Alison Yim. All rights reserved.
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="text-center">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            Built with React, TypeScript & ✨ Whimsy
          </p>
        </div>
      </div>
    </footer>
  );
}

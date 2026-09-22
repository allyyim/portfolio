import { bioData } from '../data/bio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-shell">
      <div className="row">
        <div className="col-md-4 mb-3 mb-md-0">
          <h5>Alison Yim</h5>
          <p>Software Engineer</p>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <h5>Connect</h5>
          <ul>
            <li><a href={bioData.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={bioData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={`mailto:${bioData.contact.email}`}>Email</a></li>
          </ul>
        </div>
        <div className="col-md-4 text-md-end">
          <p>© {currentYear} Alison Yim</p>
          <p style={{ fontSize: '0.8rem', marginTop: '0.4rem', color: 'var(--ink-quiet)' }}>
            Built with React &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-card" style={{ position: 'sticky', top: 0, zIndex: 100, margin: '1rem', borderRadius: '15px' }}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6 col-md-3">
            <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
              💻 Alison
            </Link>
          </div>
          <div className="col-6 col-md-9 text-end">
            <button
              className="btn btn-link d-md-none"
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: 'var(--primary)' }}
            >
              ☰
            </button>
            <div className={`d-none d-md-inline-flex gap-3`}>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <a href="https://github.com/allyyim" target="_blank" rel="noopener noreferrer" className="nav-link">
                GitHub
              </a>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="row mt-2 d-md-none">
            <div className="col-12">
              <Link to="/" className="d-block nav-link mb-2" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/projects" className="d-block nav-link mb-2" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link to="/about" className="d-block nav-link mb-2" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <a href="https://github.com/allyyim" target="_blank" rel="noopener noreferrer" className="d-block nav-link" onClick={() => setIsOpen(false)}>
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

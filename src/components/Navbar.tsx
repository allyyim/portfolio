import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <nav className={`nav-shell ${isOpen ? 'open' : ''}`}>
      <Link to="/" className="brand-mark" onClick={close}>Portfolio</Link>
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
      >
        <span className={`nav-toggle-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <div className={`nav-links ${isOpen ? 'open' : 'collapsed'}`}>
        <NavLink to="/" end className="nav-link" onClick={close}>Home</NavLink>
        <span className="nav-sep">/</span>
        <NavLink to="/projects" className="nav-link" onClick={close}>Projects</NavLink>
        <span className="nav-sep">/</span>
        <NavLink to="/about" className="nav-link" onClick={close}>About</NavLink>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link nav-cta"
          onClick={close}
        >
          Resume ↓
        </a>
      </div>
    </nav>
  );
}
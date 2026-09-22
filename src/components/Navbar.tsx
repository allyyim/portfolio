import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-shell">
      <Link to="/" className="nav-brand">Alison Yim</Link>
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <div className={`nav-links ${isOpen ? '' : 'collapsed'}`}>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
        <a
          href="https://github.com/allyyim"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
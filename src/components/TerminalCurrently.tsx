import { useEffect, useState } from 'react';

interface TerminalCurrentlyProps {
  lines: string[];
  intervalMs?: number;
}

const MENU_ITEMS = ['File', 'Edit', 'View', 'Bookmarks', 'Plugins', 'Settings', 'Help'];

export function TerminalCurrently({ lines, intervalMs = 2800 }: TerminalCurrentlyProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (lines.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % lines.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [lines, intervalMs]);

  return (
    <div className="terminal-window" role="img" aria-label={`Currently exploring: ${lines[index]}`}>
      <div className="terminal-titlebar">
        <span className="terminal-titlebar-icon">&gt;_</span>
        <span className="terminal-titlebar-title">~ : bash &mdash; Konsole</span>
        <span className="terminal-titlebar-controls">
          <span className="terminal-ctrl">&#9662;</span>
          <span className="terminal-ctrl">&#9652;</span>
          <span className="terminal-ctrl terminal-ctrl-close">&#10005;</span>
        </span>
      </div>

      <div className="terminal-menubar">
        {MENU_ITEMS.map((item) => (
          <span key={item} className="terminal-menu-item">{item}</span>
        ))}
      </div>

      <div className="terminal-toolbar">
        <span className="terminal-toolbar-btn">
          <span className="terminal-toolbar-icon">&#10010;</span> New Tab <span className="terminal-caret">&#9662;</span>
        </span>
        <span className="terminal-toolbar-btn">
          <span className="terminal-toolbar-icon">&#9636;</span> Split View <span className="terminal-caret">&#9662;</span>
        </span>
        <span className="terminal-toolbar-spacer" />
        <span className="terminal-toolbar-btn terminal-toolbar-btn-disabled">
          <span className="terminal-toolbar-icon">&#10697;</span> Copy
        </span>
        <span className="terminal-toolbar-btn terminal-toolbar-btn-disabled">
          <span className="terminal-toolbar-icon">&#10697;</span> Paste
        </span>
        <span className="terminal-toolbar-btn">
          <span className="terminal-toolbar-icon">&#128269;</span> Find
        </span>
      </div>

      <div className="terminal-body">
        <div className="terminal-row">
          <span className="terminal-user">alison@portfolio</span>
          <span className="terminal-colon">:</span>
          <span className="terminal-path">~</span>
          <span className="terminal-dollar">$</span>
          <span className="terminal-line-text" key={index}>{lines[index]}</span>
          <span className="terminal-cursor" />
        </div>
      </div>
    </div>
  );
}

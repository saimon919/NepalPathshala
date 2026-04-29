'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          Nepal<span>Pathshala</span>
        </Link>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <nav className={`nav${open ? ' open' : ''}`}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/results" onClick={() => setOpen(false)}>Results</Link>
          <Link href="/articles" onClick={() => setOpen(false)}>Articles</Link>
          <Link href="/tools" onClick={() => setOpen(false)}>Tools</Link>
          <Link href="/loksewa" onClick={() => setOpen(false)}>Loksewa</Link>
          <Link href="/scholarship" onClick={() => setOpen(false)}>Scholarship</Link>
        </nav>
      </div>
    </header>
  );
}

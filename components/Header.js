import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-semibold tracking-wide text-2xl md:text-4xl">
            Vuln<span className="text-accent">X</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-neutral-900/50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="mx-auto max-w-6xl bg-neutral-900/50 rounded p-4 flex flex-col gap-3">
            <Link href="/about" onClick={() => setOpen(false)} className="block">About</Link>
            <Link href="/services" onClick={() => setOpen(false)} className="block">Services</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="block">Blog</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block px-3 py-1.5 rounded bg-accent text-white text-center">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}


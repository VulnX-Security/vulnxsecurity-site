import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Brand from "./Brand";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const hoverTimeout = useRef(null);

  const services = [
    { title: "Network & Infrastructure Pentesting", href: "/services/network-infrastructure" },
    { title: "Web & API Pentesting", href: "/services/web-api" },
    { title: "Red Team & Adversary Simulation", href: "/services/red-team" },
    { title: "Cloud & M365 Security", href: "/services/cloud-m365" },
    { title: "Security Program Assessment", href: "/services/security-program" },
    { title: "Vulnerability Management", href: "/services/vulnerability-management" },
  ];

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  const openDesktopMenu = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setDesktopServicesOpen(true);
  };

  const closeDesktopMenuWithDelay = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    // small delay to allow moving cursor to the dropdown without it closing
    hoverTimeout.current = setTimeout(() => {
      setDesktopServicesOpen(false);
      hoverTimeout.current = null;
    }, 150);
  };

  return (
    <header className="border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Brand className="font-semibold tracking-wide text-2xl md:text-4xl" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about">About</Link>

          {/* Services with hover dropdown — use explicit mouse handlers to avoid hover-gap */}
          <div
            className="relative"
            onMouseEnter={openDesktopMenu}
            onMouseLeave={closeDesktopMenuWithDelay}
            onFocus={openDesktopMenu}
            onBlur={closeDesktopMenuWithDelay}
          >
            <Link
              aria-haspopup="true"
              aria-expanded={desktopServicesOpen}
              className="flex items-center gap-2 px-2 py-1"
              href="/services"
            >
              Services
            </Link>

            {/* Dropdown positioned directly under the button. pointer-events toggled so it can be hovered. */}
            <div
              className={`absolute left-0 top-full mt-1 w-80 bg-neutral-900/95 rounded shadow-lg p-3 z-50 transition-opacity duration-150 ${desktopServicesOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              onMouseEnter={openDesktopMenu}
              onMouseLeave={closeDesktopMenuWithDelay}
            >
              <ul className="flex flex-col gap-2">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="block px-3 py-2 rounded hover:bg-neutral-800/60"
                      onClick={() => {
                        setDesktopServicesOpen(false);
                      }}
                    >
                      <span className="text-sm">{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

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
            <Link href="/about" onClick={() => { setOpen(false); setMobileServicesOpen(false); }} className="block">About</Link>

            {/* Mobile Services expandable */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-neutral-800/40"
                aria-expanded={mobileServicesOpen}
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transform transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 flex flex-col gap-1 pl-3">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                      className="block px-3 py-2 rounded hover:bg-neutral-800/40"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" onClick={() => setOpen(false)} className="block">Blog</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block px-3 py-1.5 rounded bg-accent text-white text-center">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}


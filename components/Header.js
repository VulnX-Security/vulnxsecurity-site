import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="VulnX Logo" className="h-8 w-8" />
          <span className="font-semibold tracking-wide">VulnX Security</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="px-3 py-1.5 rounded bg-accent text-white hover:opacity-90">Contact</Link>
        </nav>
      </div>
    </header>
  );
}


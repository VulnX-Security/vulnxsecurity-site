import Link from "next/link";

export default function ServiceCard({ href, title, description, icon, className = "" }) {
  return (
    <Link href={href} className={className}>
      <div className="block rounded bg-neutral-900/50 hover:bg-neutral-900/70 transition-colors p-5 h-full">
        {icon ? (
          <div className="flex items-center justify-center mb-4" aria-hidden>
            {icon}
          </div>
        ) : null}
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="mt-2 text-sm text-neutral-300">{description}</p>
        <span className="mt-4 inline-block text-accent text-sm">Learn more →</span>
      </div>
    </Link>
  );
}


import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Ethical offense. Real-world defense.
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-300">
          We identify, exploit, and help remediate weaknesses before adversaries do — delivering
          actionable insight across networks, web, cloud, and identity.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/contact" className="px-5 py-3 rounded bg-accent text-white hover:opacity-90">
            Request an Assessment
          </Link>
          <Link href="/services" className="px-5 py-3 rounded border border-neutral-700 hover:border-neutral-500">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}


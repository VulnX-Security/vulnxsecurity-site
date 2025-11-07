import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          The best defense is a good offense
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-300">
          VulnX Security delivers enterprise-grade penetration testing, red-team operations, and cloud security assessments.
          We uncover real-world weaknesses and provide actionable guidance to strengthen your defenses where it matters most.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/contact" className="px-5 py-3 rounded bg-accent text-white hover:opacity-90">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}


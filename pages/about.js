import Layout from "../components/Layout";
import Brand from "../components/Brand";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-semibold">About <Brand /></h1>
        <p className="mt-4 text-neutral-300">
          At VulnX Security, LLC, our mission is to strengthen organizations by proactively identifying,
          exploiting, and mitigating weaknesses before adversaries do. We deliver actionable, executive-ready
          insight across networks, web, cloud, and identity.
        </p>

        <h2 className="mt-10 text-3xl font-semibold">Meet the team</h2>

        {/* Team Member: Ryan */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/headshot-1.jpg"
              alt="Ryan McCutcheon — Founder & Principal Offensive Security Consultant"
              width={170}
              height={170}
              className="rounded-lg object-cover shadow-lg shadow-black/40"
              priority
              unoptimized
            />
          </div>
          <div className="text-neutral-300 text-center md:text-left">
            <p className="text-lg font-semibold">
              Ryan McCutcheon — <span className="text-accent">Founder & Principal Offensive Security Consultant</span>
            </p>

            <p className="mt-2 leading-relaxed text-sm">
              Cybersecurity professional with a Master’s degree in Computer and Information Science, specializing in
              offensive security, AI red teaming, adversary emulation, and enterprise defense improvement. Ryan brings a
              dual-perspective approach to testing and hardening systems—combining real-world exploitation expertise with
              defensive engineering insight.
            </p>

            <p className="mt-2 leading-relaxed text-sm">
              His experience spans AI/LLM security, web application security, Active Directory, Microsoft 365, cloud
              environments, and infrastructure assessments, with a focus on transforming vulnerabilities into measurable
              resilience. He leads engagements involving penetration testing, red-team operations, AI security assessments,
              and threat simulations aligned with frameworks such as MITRE ATT&CK, NIST, PTES, OWASP, and the Google
              Secure AI Framework.
            </p>

            <p className="mt-2 leading-relaxed text-sm">
              Through VulnX Security, Ryan focuses on delivering practical offensive security services, clear executive and
              technical reporting, and remediation guidance that helps organizations reduce real-world risk across modern
              enterprise and AI-enabled environments.
            </p>

            <h3 className="mt-4 font-medium">Certifications</h3>

            <ul className="mt-2 list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>
                <strong className="text-accent">Hack The Box COAE — Certified Offensive AI Expert</strong> – Demonstrates
                hands-on expertise in AI red teaming, LLM security, prompt injection, adversarial machine learning, AI
                application testing, model security, and practical reporting for AI-enabled systems.
              </li>

              <li>
                <strong className="text-accent">OffSec OSCP+ — Offensive Security Certified Professional</strong> – Demonstrates
                advanced proficiency in real-world penetration testing, exploitation, lateral movement, privilege escalation,
                and post-exploitation reporting.
              </li>

              <li>
                <strong className="text-accent">CompTIA Security+</strong> – Establishes foundational expertise in network
                defense, access control, risk management, and enterprise security best practices.
              </li>
            </ul>
          </div>
        </div>

        {/* Team Member: Devin Ogle */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/headshot-3.png"
              alt="Devin Ogle — Senior Offensive Security Consultant"
              width={170}
              height={170}
              className="rounded-lg object-cover shadow-lg shadow-black/40"
              unoptimized
            />
          </div>
          <div className="text-neutral-300 text-center md:text-left">
            <p className="text-lg font-semibold">Devin Ogle — <span className="text-accent">Senior Offensive Security Consultant</span></p>
            <p className="mt-2 leading-relaxed text-sm">
              Brings hands-on experience from both public-sector and private-industry environments, delivering practical,
              actionable security insight across varied threat landscapes. Devin’s work focuses on vulnerability assessment,
              penetration testing, and aligning security controls with regulatory and business objectives.
            </p>
            <h3 className="mt-4 font-medium">Certifications</h3>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm leading-relaxed">
              <li><strong className="text-accent">CompTIA Security+</strong></li>
              <li><strong className="text-accent">CompTIA Network+</strong></li>
              <li><strong className="text-accent">Certified Ethical Hacker (CEH)</strong></li>
              <li><strong className="text-accent">TCM Security Practical Network Penetration Tester (PJNT)</strong></li>
            </ul>
            <h4 className="mt-4 font-medium">Experience highlights</h4>
            <ul className="mt-2 list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>
                Worked within government agencies to safeguard sensitive data and maintain compliance with national
                security frameworks.
              </li>
              <li>
                Served commercial organizations by conducting penetration tests, vulnerability assessments, and
                designing scalable defensive architectures.
              </li>
            </ul>
          </div>
        </div>

        {/* Team Member: Brayden Edwards */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/headshot-2.jpg"
              alt="Brayden Edwards — Offensive Security Consultant"
              width={170}
              height={170}
              className="rounded-lg object-cover shadow-lg shadow-black/40"
              unoptimized
            />
          </div>
          <div className="text-neutral-300 text-center md:text-left">
            <p className="text-lg font-semibold">
              Brayden Edwards — <span className="text-accent">Offensive Security Consultant</span>
            </p>

            <p className="mt-2 leading-relaxed text-sm">
              Security consultant focused on penetration testing, vulnerability assessment, and offensive security
              fundamentals. Brayden specializes in identifying exploitable weaknesses across web applications,
              enterprise environments, and common infrastructure attack surfaces.
            </p>

            <p className="mt-2 text-sm leading-relaxed">
              He brings hands-on experience with reconnaissance, vulnerability validation, exploitation methodology,
              Active Directory fundamentals, Microsoft 365 environments, and technical reporting. His work emphasizes
              practical testing, clear evidence, and actionable remediation guidance aligned with real-world attacker
              behavior and frameworks such as MITRE ATT&CK, NIST CSF, and PTES.
            </p>

            <h3 className="mt-4 font-medium">Certifications</h3>
            <ul className="mt-2 list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>
                <strong className="text-accent">INE Junior Penetration Tester</strong> – Demonstrates practical knowledge of
                penetration testing fundamentals, vulnerability identification, exploitation methodology, web application
                testing, and reporting.
              </li>
              <li>
                <strong className="text-accent">CompTIA Security+</strong> – Validates core knowledge in security principles,
                network defense, risk management, access control, and enterprise security best practices.
              </li>
            </ul>
          </div>
        </div>

        <h2 className="mt-10 text-3xl font-semibold">Core values</h2>
        <ul className="mt-4 list-none list-inside text-neutral-300 space-y-3">
          <li>
            <strong className="text-accent">Integrity Above All</strong> — We hold ourselves to the highest ethical standards in every engagement,
            ensuring honesty, transparency, and trust with our clients.
          </li>
          <li>
            <strong className="text-accent">Excellence in Execution</strong> — Every assessment, every report, every recommendation is crafted with
            precision, accuracy, and pride in our technical expertise.
          </li>
          <li>
            <strong className="text-accent">Adversarial Mindset, Defensive Purpose</strong> — We think like attackers to strengthen your defenses.
            Our offensive insights drive real-world resilience.
          </li>
          <li>
            <strong className="text-accent">Continuous Learning</strong> — We stay ahead of evolving threats through constant research, red-team
            simulations, and professional development.
          </li>
          <li>
            <strong className="text-accent">Client Partnership</strong> — We see security as a collaboration. We align our methods and findings with
            your goals, empowering your team through knowledge transfer.
          </li>
          <li>
            <strong className="text-accent">Confidentiality and Trust</strong> — We treat your data and systems with the same protection we apply to our own.
          </li>
          <li>
            <strong className="text-accent">Innovation and Adaptability</strong> — We embrace new tools, techniques, and threat intelligence to stay
            one step ahead of adversaries.
          </li>
          <li>
            <strong className="text-accent">Accountability and Ownership</strong> — We stand by our work, our words, and our results — always delivering what we promise.
          </li>
        </ul>
      </section>

      {/* Contact form at the bottom of the About page */}
      <ContactForm service="About page" />
    </Layout >
  );
}


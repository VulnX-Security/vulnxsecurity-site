export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-400">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} VulnX Security, LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:info@vulnxsecurity.com">info@vulnxsecurity.com</a>
            <a href="https://www.linkedin.com/company/vulnx-security?trk=public_profile_topcard-current-company" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/VulnX-Security" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


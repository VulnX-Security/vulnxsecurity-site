export default function Brand({ className = "" }) {
  const cls = `brand display-font ${className}`.trim();
  return (
    <span className={cls} aria-label="VulnX">
      {'Vuln'}
      <span className="brand-x" aria-hidden>
        <span className="brand-x-text">X</span>

        {/* SVG overlay: thin brush strokes + subtle glint */}
        <svg
          className="brand-x-svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          focusable="false"
          aria-hidden
        >
          {/* soft smear under strokes */}
          <path d="M5 5 L19 19" className="brush-smear" fill="none" />
          <path d="M19 5 L5 19" className="brush-smear" fill="none" />

          {/* primary strokes that are drawn in sequence */}
          <path d="M5 5 L19 19" className="brush" fill="none" />
          <path d="M19 5 L5 19" className="brush" fill="none" />

          {/* small glint that travels across the X after it's drawn */}
          <path d="M5 5 L19 19" className="glint" fill="none" />
          <path d="M19 5 L5 19" className="glint" fill="none" />
        </svg>
      </span>
    </span>
  );
}
export default function Brand({ className = "" }) {
  // default classes ensure Aboreto for the brand; caller can append additional utility classes
  const cls = `brand display-font ${className}`.trim();
  return (
    <span className={cls}>
      Vuln<span className="text-accent">X</span>
    </span>
  );
}
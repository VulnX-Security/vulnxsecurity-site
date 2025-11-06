export default function ServiceCard({ title, description }) {
  return (
    <div className="rounded-lg border border-neutral-800 p-5 hover:border-neutral-600 transition-colors">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}


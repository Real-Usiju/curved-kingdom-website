interface Props {
  subtitle: string;
  title: string;
}

export default function SectionTitle({
  subtitle,
  title,
}: Props) {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-[0.3em] text-yellow-400 mb-3">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}
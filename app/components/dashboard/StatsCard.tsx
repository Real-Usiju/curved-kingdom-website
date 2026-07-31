type StatsCardProps = {
  title: string;
  value: string;
};

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20">
      <p className="text-gray-400">{title}</p>

      <h3 className="text-3xl font-bold text-yellow-400 mt-3">
        {value}
      </h3>
    </div>
  );
}
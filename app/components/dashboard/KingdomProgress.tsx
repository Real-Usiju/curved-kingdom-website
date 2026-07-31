export default function KingdomProgress() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20 mt-6">

      <h2 className="text-xl font-bold text-yellow-400">
        Kingdom Progress
      </h2>

      <p className="text-gray-400 mt-3">
        Your journey in Curved Kingdom has begun.
      </p>

      <div className="mt-5 w-full bg-zinc-800 rounded-full h-3">
        <div className="bg-yellow-500 h-3 rounded-full w-[25%]"></div>
      </div>

      <p className="mt-3 text-sm text-gray-400">
        25% Complete — Early Citizen Level
      </p>

    </div>
  );
}
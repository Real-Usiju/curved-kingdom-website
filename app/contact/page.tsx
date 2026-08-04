export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">

        <h1 className="text-5xl font-bold text-yellow-400">
          Contact Curved Kingdom
        </h1>

        <p className="mt-4 text-gray-400">
          We'd love to hear from you. Whether you have questions, ideas,
          partnership opportunities, or feedback, the Kingdom welcomes your
          message.
        </p>

        <div className="mt-16 space-y-10">

          <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-yellow-400">
              Official Email
            </h2>

            <p className="mt-4 text-lg text-gray-300">
              future@curvedkingdom.com
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-yellow-400">
              Official Social Platforms
            </h2>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>TikTok</li>
              <li>YouTube</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-yellow-400">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-300 leading-8">
              Curved Kingdom exists to build a digital civilization where
              identity, purpose, innovation, and legacy unite to shape the
              future.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
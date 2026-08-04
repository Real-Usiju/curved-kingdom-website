export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">

        <h1 className="text-5xl font-bold text-yellow-400">
          Terms of Service
        </h1>

        <p className="mt-4 text-gray-400">
          Last Updated: August 2026
        </p>

        <div className="mt-12 space-y-10 text-gray-300 leading-8">

          <section>
            <h2 className="text-2xl font-bold text-yellow-400">
              Acceptance of Terms
            </h2>

            <p className="mt-4">
              By accessing or using Curved Kingdom, you agree to comply with
              these Terms of Service. If you do not agree with these terms,
              please do not use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400">
              Citizen Responsibilities
            </h2>

            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Provide accurate registration information.</li>
              <li>Respect other citizens of the Kingdom.</li>
              <li>Do not engage in unlawful or harmful activities.</li>
              <li>Protect your account credentials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400">
              Acceptable Use
            </h2>

            <p className="mt-4">
              Curved Kingdom is intended to foster a respectful and meaningful
              digital community. Content that promotes abuse, fraud, violence,
              or illegal activities is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400">
              Intellectual Property
            </h2>

            <p className="mt-4">
              The Curved Kingdom name, branding, logo, designs, and original
              content remain the property of Curved Kingdom unless otherwise
              stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400">
              Changes to the Service
            </h2>

            <p className="mt-4">
              We may update, improve, or modify Curved Kingdom and these terms
              as the platform evolves. Continued use of the platform means you
              accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400">
              Contact
            </h2>

            <p className="mt-4">
              Questions about these Terms of Service can be sent through our
              official Curved Kingdom contact channels.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}
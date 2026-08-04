export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">

        <h1 className="text-5xl font-bold text-yellow-400">
          Privacy Policy
        </h1>

        <p className="mt-4 text-gray-400">
          Last Updated: August 2026
        </p>

        <div className="mt-12 space-y-10 text-gray-300 leading-8">

          <section>
            <h2 className="text-2xl font-bold text-yellow-400">
              Introduction
            </h2>

            <p className="mt-4">
              Curved Kingdom respects your privacy. This Privacy Policy
              explains how we collect, use, and protect your information
              when you use our digital ecosystem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400">
              Information We Collect
            </h2>

            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Personal information you provide during registration.</li>
              <li>Profile information you choose to share.</li>
              <li>Technical information such as browser and device details.</li>
              <li>Usage information to improve the Kingdom.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400">
              How We Use Your Information
            </h2>

            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Provide access to Curved Kingdom.</li>
              <li>Improve platform performance.</li>
              <li>Protect the Kingdom against abuse.</li>
              <li>Communicate important updates.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400">
              Data Protection
            </h2>

            <p className="mt-4">
              We use reasonable security measures to protect your information.
              However, no online service can guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400">
              Your Rights
            </h2>

            <p className="mt-4">
              You may request access to your information, ask for corrections,
              or request deletion of your account where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400">
              Contact Us
            </h2>

            <p className="mt-4">
              If you have questions about this Privacy Policy, please contact
              the Curved Kingdom team through our official contact channels.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}
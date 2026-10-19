import { footer } from "framer-motion/client";

export const metadata = {
  title: "Terms of Service | Curved Kingdom",
  description:
    "Read the terms and conditions governing access to and use of the Curved Kingdom digital ecosystem.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: (
      <p>
        Welcome to Curved Kingdom. These Terms of Service govern your access
        to and use of the Curved Kingdom website, accounts, and available
        features. By accessing or using our services, you agree to these terms
        and any applicable laws. If you do not agree, please discontinue using
        the service. Where required by law, we will obtain your agreement
        before allowing you to use specific features.
      </p>
    ),
  },
  {
    title: "Eligibility and Account Creation",
    content: (
      <>
        <p>
          You must meet the minimum age and other eligibility requirements
          applicable in your location to use Curved Kingdom. When forging a
          Kingdom or returning to an existing account, you agree to provide
          accurate information and keep your account details reasonably
          up to date.
        </p>
        <p className="mt-4">
          Your Kingdom Name identifies your account within the platform.
          You must not impersonate another person, falsely represent an
          organization, or choose a name that unlawfully infringes another
          person's rights.
        </p>
      </>
    ),
  },
  {
    title: "Citizen Responsibilities",
    content: (
      <>
        <p>Every citizen is responsible for using Curved Kingdom respectfully and safely.</p>
        <ul className="mt-4 list-disc space-y-3 pl-6 marker:text-[#45B8E8]">
          <li>Provide accurate registration and account information.</li>
          <li>Respect the rights, privacy, and dignity of other citizens.</li>
          <li>Keep your sign-in credentials secure and protect your account.</li>
          <li>Use the platform in compliance with applicable laws.</li>
          <li>Ensure that content you submit is lawful and that you have the right to share it.</li>
          <li>Report suspected security problems, impersonation, or serious abuse through appropriate contact channels.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Acceptable Use and Prohibited Conduct",
    content: (
      <>
        <p>
          Curved Kingdom aims to support a respectful, creative, and meaningful
          digital community. You must not use the platform to:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6 marker:text-[#45B8E8]">
          <li>Engage in fraud, scams, unlawful activity, or deliberate deception.</li>
          <li>Harass, threaten, intimidate, or target other citizens.</li>
          <li>Publish content that unlawfully promotes violence or encourages harm.</li>
          <li>Impersonate another person or misrepresent your identity or authority.</li>
          <li>Attempt to access another person's account or private information without authorization.</li>
          <li>Distribute malicious software, interfere with website operations, or attempt to bypass security controls.</li>
          <li>Spam, manipulate engagement, or exploit platform features in ways that undermine the community.</li>
          <li>Post content that infringes copyright, trademarks, privacy, or other legal rights.</li>
        </ul>
        <p className="mt-4">
          We may review reported activity and take reasonable action when
          content or conduct violates these terms or creates a security or
          safety risk.
        </p>
      </>
    ),
  },
  {
    title: "Kingdom, Palace, and Platform Features",
    content: (
      <p>
        Curved Kingdom uses its own terminology for its digital ecosystem.
        Features such as Kingdom, Palace, Royal Identity, Citizens, Power, and
        Glory may evolve as the platform develops. Access to particular
        features, visibility settings, rewards, rankings, and participation
        options may depend on availability, eligibility, technical
        requirements, and applicable platform rules. We will not guarantee
        that any feature, ranking, reward, or service will remain available
        indefinitely.
      </p>
    ),
  },
  {
    title: "Content You Submit",
    content: (
      <p>
        You retain ownership of content you lawfully create and submit to
        Curved Kingdom. By submitting or publishing content, you grant
        Curved Kingdom permission to host, store, reproduce, display, and
        process that content as reasonably necessary to operate, secure, and
        provide the features you use. This permission is subject to your
        applicable rights and any settings or choices available to you.
        You are responsible for ensuring that you have the necessary rights
        to share your content. We may remove content that violates these
        terms or applicable law.
      </p>
    ),
  },
  {
    title: "Official Content and Proclamations",
    content: (
      <p>
        Certain areas of Curved Kingdom may be reserved for official
        announcements, Proclamations, or other content published by
        authorized Curved Kingdom representatives. Access to publish in
        these areas may be restricted. Citizens must not falsely claim to
        represent Curved Kingdom or present unofficial content as an
        authorized announcement.
      </p>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <p>
        The Curved Kingdom name, logo, branding, original designs, and
        platform materials are owned by Curved Kingdom or its respective
        rights holders unless otherwise stated. These terms do not transfer
        ownership of those materials to you. You may not copy, modify,
        distribute, commercially exploit, or use protected materials in a
        misleading way without permission, except where applicable law
        permits such use. Third-party names and trademarks remain the
        property of their respective owners.
      </p>
    ),
  },
  {
    title: "Third-Party Services",
    content: (
      <p>
        Some features may rely on third-party services, including
        authentication providers, hosting providers, or other integrations.
        Your use of those services may also be governed by their own terms
        and policies. Curved Kingdom is not responsible for independent
        third-party services to the extent permitted by applicable law.
      </p>
    ),
  },
  {
    title: "Suspension and Account Termination",
    content: (
      <p>
        We may restrict access to content, suspend an account, or terminate
        access where reasonably necessary to address violations of these
        terms, protect citizens, maintain platform security, comply with
        legal obligations, or respond to misuse. Where appropriate and
        permitted by law, we will take the circumstances into account and
        provide notice or an opportunity to address the issue. You may stop
        using Curved Kingdom at any time. Account deletion and related data
        handling are subject to our Privacy Policy and applicable law.
      </p>
    ),
  },
  {
    title: "Availability and Changes to the Service",
    content: (
      <p>
        We may add, improve, suspend, or modify website features as Curved
        Kingdom develops. We aim to maintain a reliable service but cannot
        guarantee uninterrupted access, error-free operation, or permanent
        availability of every feature. We may temporarily restrict access for
        maintenance, security, technical, or operational reasons.
      </p>
    ),
  },
  {
    title: "Disclaimers and Limitation of Liability",
    content: (
      <p>
        To the extent permitted by applicable law, Curved Kingdom is provided
        on an available and as-provided basis, without guarantees that every
        feature will meet every user's expectations or remain uninterrupted.
        Nothing in these terms excludes or limits a right, warranty, or
        liability that cannot lawfully be excluded or limited. Any other
        limitation of liability will apply only to the extent permitted by
        applicable law.
      </p>
    ),
  },
  {
    title: "Privacy",
    content: (
      <p>
        Your use of Curved Kingdom is also subject to our Privacy Policy,
        which explains how information may be collected, used, and protected.
        Please review that policy to understand our privacy practices and
        any rights available to you.
      </p>
    ),
  },
  {
    title: "Changes to These Terms",
    content: (
      <p>
        We may revise these Terms of Service as the platform evolves or legal
        requirements change. Updated terms will be published on this page,
        together with a revised update date. Where required by law, we will
        provide additional notice or request your agreement to material
        changes. If you continue using the service after updated terms take
        effect, the updated terms will apply to your use to the extent
        permitted by applicable law.
      </p>
    ),
  },
  {
    title: "Governing Law and Disputes",
    content: (
      <p>
        These terms are subject to applicable laws and regulations. Any
        disputes relating to Curved Kingdom will be handled in accordance
        with the laws and legal procedures that apply to the parties and
        circumstances. Nothing in this section removes any mandatory
        consumer or legal protections available to you.
      </p>
    ),
  },
  {
    title: "Contact Curved Kingdom",
    content: (
      <p>
        If you have questions about these Terms of Service, need to report
        misuse, or wish to raise a concern about your account, please contact
        the Curved Kingdom team through the official Contact page on our
        website.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020914] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#278DBB]/10 blur-[120px]" />
        <div className="absolute -right-40 top-140 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(39,141,187,0.10),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <header className="mb-12 border-b border-white/10 pb-10 sm:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#45B8E8]/30 bg-[#278DBB]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#72D3F4]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#45B8E8] shadow-[0_0_12px_rgba(69,184,232,0.7)]"
            />
            Curved Kingdom
          </div>

          <h1 className="bg-linear-to-r from-[#72D3F4] via-[#D4AF37] to-[#E6C75B] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Terms of Service
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            The principles and responsibilities that help protect our
            citizens and support a respectful Curved Kingdom community.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="rounded-lg border border-white/10 bg-white/3 px-4 py-2">
              Last Updated: August 2026
            </span>
            <span className="rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 text-[#E6C75B]">
              Respect • Responsibility • Trust
            </span>
          </div>
        </header>

        <div className="mb-10 rounded-2xl border border-[#45B8E8]/20 bg-linear-to-br from-[#278DBB]/10 to-transparent p-5 sm:p-7">
          <h2 className="text-lg font-semibold text-white">
            Before you enter the Kingdom
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            These terms explain the basic rules for using Curved Kingdom,
            protecting your account, sharing content, and interacting with
            other citizens. Please read them carefully. These terms are a
            general service document and do not replace legal advice or any
            rights you may have under applicable law.
          </p>
        </div>

        <div className="space-y-5">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className="rounded-2xl border border-white/8 bg-[#071321]/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-colors duration-200 hover:border-[#45B8E8]/25 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/25 bg-[#D4AF37]/8 text-sm font-bold text-[#E6C75B]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold tracking-tight text-[#72D3F4] sm:text-2xl">
                    {section.title}
                  </h2>

                  <div className="mt-4 space-y-4 text-sm leading-8 text-slate-300 sm:text-base">
                    {section.content}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 border-t border-white/10 pt-8 text-center sm:mt-16">
          <p className="text-sm leading-7 text-slate-400">
            Built on trust. United by purpose. Welcome to Curved Kingdom.
          </p>
          <p className="mt-3 text-xs text-slate-600">
            © {new Date().getFullYear()} Curved Kingdom. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
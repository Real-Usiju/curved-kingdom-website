import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const metadata = {
  title: "Contact Curved Kingdom",
  description:
    "Contact Curved Kingdom Official for support, partnerships, feedback, and opportunities to help shape our digital civilization.",
};

const contactOptions = [
  {
    number: "01",
    title: "Official Gmail",
    description:
      "For questions, support, feedback, and general inquiries, reach Curved Kingdom Official through our official Gmail address.",
    email: "curvedkingdomofficial@gmail.com",
    subject: "Curved Kingdom Inquiry",
  },
  {
    number: "02",
    title: "Kingdom Domain Email",
    description:
      "Contact us through our official Curved Kingdom domain email for inquiries, collaborations, and other communications.",
    email: "future@curvedkingdom.com",
    subject: "Curved Kingdom Inquiry",
  },
  {
    number: "03",
    title: "Partnerships & Opportunities",
    description:
      "Interested in collaborating, supporting our mission, or exploring a business opportunity? We welcome meaningful conversations.",
    email: "future@curvedkingdom.com",
    subject: "Curved Kingdom Partnership Inquiry",
  },
];

const socialPlatforms = [
  {
    name: "Facebook",
    handle: "Curved Kingdom Official",
    Icon: FaFacebookF,
    color: "#1877F2",
  },
  {
    name: "Instagram",
    handle: "Curved Kingdom Official",
    Icon: FaInstagram,
    color: "#E4405F",
  },
  {
    name: "TikTok",
    handle: "Curved Kingdom Official",
    Icon: FaTiktok,
    color: "#FFFFFF",
  },
  {
    name: "YouTube",
    handle: "Curved Kingdom Official",
    Icon: FaYoutube,
    color: "#FF0033",
  },
  {
    name: "X (Twitter)",
    handle: "Curved Kingdom Official",
    Icon: FaXTwitter,
    color: "#FFFFFF",
  },
];

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialIdentityIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-7 w-7"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function ContactPage() {
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

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        {/* Hero */}
        <header className="border-b border-white/10 pb-12 sm:pb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#45B8E8]/30 bg-[#278DBB]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#72D3F4]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#45B8E8] shadow-[0_0_12px_rgba(69,184,232,0.7)]"
            />
            Curved Kingdom Official
          </div>

          <h1 className="max-w-4xl bg-linear-to-r from-[#72D3F4] via-[#D4AF37] to-[#E6C75B] bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-7xl">
            Contact the Kingdom
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Every great civilization grows through communication, ideas, and
            collaboration. Whether you have a question, need assistance, or
            want to explore an opportunity, we welcome your message.
          </p>

          <a
            href="#official-contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#278DBB] to-[#45B8E8] px-6 py-3 font-semibold text-[#020914] shadow-[0_8px_30px_rgba(39,141,187,0.18)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(69,184,232,0.25)] focus:outline-none focus:ring-2 focus:ring-[#72D3F4] focus:ring-offset-2 focus:ring-offset-[#020914]"
          >
            Explore Contact Options
            <ArrowIcon />
          </a>
        </header>

        {/* Contact options */}
        <section
          id="official-contact"
          className="scroll-mt-8 py-14 sm:py-16"
        >
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Official Communication
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Reach Curved Kingdom
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Choose the contact option that best matches your needs. Email
              buttons open your email application with the recipient and
              subject already prepared.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contactOptions.map((option) => (
              <article
                key={option.number}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#071321]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#45B8E8]/30 hover:bg-[#091827] sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#278DBB]/10 blur-3xl transition group-hover:bg-[#45B8E8]/15"
                />

                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#45B8E8]/25 bg-[#278DBB]/10 text-[#72D3F4]">
                    <MailIcon />
                  </span>

                  <h3 className="mt-6 text-xl font-bold text-[#72D3F4]">
                    {option.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {option.description}
                  </p>

                  <p className="mt-5 break-all text-sm font-semibold leading-6 text-white">
                    {option.email}
                  </p>
                </div>

                <div className="relative mt-auto pt-7">
                  <a
                    href={`mailto:${option.email}?subject=${encodeURIComponent(
                      option.subject,
                    )}`}
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#45B8E8]/25 bg-[#278DBB]/8 px-4 py-3 text-sm font-semibold text-[#72D3F4] transition hover:border-[#45B8E8]/50 hover:bg-[#278DBB]/15 focus:outline-none focus:ring-2 focus:ring-[#45B8E8]"
                  >
                    Send an Email
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-slate-500">
            Email buttons require an email application or service configured
            on your device. Sending an email does not happen automatically.
          </p>
        </section>

        {/* Social media with recognizable platform icons */}
        <section className="py-4 sm:py-8">
          <div className="rounded-3xl border border-[#D4AF37]/20 bg-linear-to-br from-[#0B2031] via-[#071321] to-[#071321] p-6 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/8-[#E6C75B]">
                <SocialIdentityIcon />
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Our Official Social Identity
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Find Curved Kingdom Official
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Our official social media identity is{" "}
                  <strong className="text-[#72D3F4]">
                    Curved Kingdom Official
                  </strong>
                  . Look for this name on our social platforms to find our
                  community and updates.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {socialPlatforms.map((platform) => {
                const Icon = platform.Icon;

                return (
                  <div
                    key={platform.name}
                    className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/2.5 p-4 transition duration-200 hover:border-[#45B8E8]/30 hover:bg-white/5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#45B8E8]/20 bg-[#278DBB]/10 transition group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/8">
                      <Icon
                        aria-hidden="true"
                        size={25}
                        style={{ color: platform.color }}
                      />
                    </span>

                    <div className="min-w-0">
                      <p className="font-semibold text-white">
                        {platform.name}
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        {platform.handle}
                      </p>

                      <p className="mt-2 text-xs font-medium text-[#72D3F4]">
                        Official Account
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/4 p-4">
              <p className="text-sm leading-7 text-slate-400">
                Official profile links will be added when the exact account
                URLs are confirmed. This helps ensure citizens reach the
                correct Curved Kingdom accounts.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mt-14 overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-linear-to-br from-[#D4AF37]/[0.07] via-[#071321] to-[#278DBB]/[0.07] p-7 text-center sm:mt-16 sm:p-12">
          <div
            aria-hidden="true"
            className="mx-auto mb-6 h-px w-20 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Our Mission
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-4xl">
            Building a Digital Civilization Beyond Boundaries.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            Curved Kingdom exists to unite identity, purpose, innovation, and
            legacy in one evolving digital ecosystem. We believe the power of
            a Kingdom comes from its citizens, the value of their
            contributions, and the legacy they build together.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-8 h-px w-20 bg-linear-to-r from-transparent via-[#45B8E8] to-transparent"
          />
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-white/10 pt-8 text-center sm:mt-16">
          <p className="text-sm leading-7 text-slate-400">
            Every great legacy begins with a conversation.
          </p>

          <p className="mt-3 text-xs text-slate-600">
            © {new Date().getFullYear()} Curved Kingdom. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
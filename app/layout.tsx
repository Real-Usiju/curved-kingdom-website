import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://curvedkingdom.com"),

  title: {
    default: "Curved Kingdom ",
    template: "%s | Curved Kingdom",
  },

  description:
    "Curved Kingdom is a digital ecosystem where citizens build identity, create meaningful connections, discover opportunities, and leave a lasting legacy.",

  keywords: [
    "Curved Kingdom",
    "Digital Kingdom",
    "Digital Civilization",
    "Social Ecosystem",
    "Online Community",
    "Digital Identity",
    "Community Platform",
    "Kingdom",
    "Innovation",
    "Legacy",
  ],

  authors: [
    {
      name: "Curved Kingdom",
    },
  ],

  creator: "Curved Kingdom",

  publisher: "Curved Kingdom",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://curvedkingdom.com",
    siteName: "Curved Kingdom",
    title: "Curved Kingdom | Digital Civilization",
    description:
      "Join Curved Kingdom and become part of a new digital civilization where identity, purpose, innovation, and legacy come together.",

    images: [
      {
        url: "/curved-kingdom-logo.png",
        width: 1200,
        height: 630,
        alt: "Curved Kingdom",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Curved Kingdom | Digital Civilization",
    description:
      "Join Curved Kingdom and become part of a new digital civilization.",

    images: ["/curved-kingdom-logo.png"],
  },
   verification: {
  google: "C_LzPyFg__CkhXXB9dAMt6eilWI9_qOdbTKfLVbR1W4",
},

  icons: {
    icon: "/curved-kingdom-logo.png",
    shortcut: "/curved-kingdom-logo.png",
    apple: "/curved-kingdom-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  {children}
  <Analytics />
  <SpeedInsights />
</body>
    </html>
  );
}

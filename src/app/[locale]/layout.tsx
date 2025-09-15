import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicolas Thibault - Web Developer",
  description:
    "Modern, responsive web experiences with clean code and innovative design. Specialized in React, Next.js, and modern web technologies.",
  keywords: [
    "web developer",
    "react",
    "next.js",
    "typescript",
    "frontend",
    "portfolio",
  ],
  authors: [{ name: "Nicolas Thibault" }],
  creator: "Nicolas Thibault",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nicolasthibault.dev",
    title: "Nicolas Thibault - Web Developer",
    description:
      "Modern, responsive web experiences with clean code and innovative design.",
    siteName: "Nicolas Thibault Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Thibault - Web Developer",
    description:
      "Modern, responsive web experiences with clean code and innovative design.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="inter">
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

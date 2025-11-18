import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load the ABCDiatype font (Regular and Bold only)
const abcdDiatype = localFont({
  src: [
    { path: "./fonts/ABCDiatype-Regular.otf", weight: "400" },
    { path: "./fonts/ABCDiatype-Bold.otf", weight: "700" },
  ],
  variable: "--font-abcd-diatype",
});

// Load the Reckless font (Regular and Medium only)
const reckless = localFont({
  src: [
    { path: "./fonts/RecklessTRIAL-Regular.woff2", weight: "400" },
    { path: "./fonts/RecklessTRIAL-Medium.woff2", weight: "500" },
  ],
  variable: "--font-reckless",
});

export const metadata: Metadata = {
  title: "Exa & Gemini 3 chat app",
  description: "An opensource chat application built with Exa for web search and openai Gemini 3.",
  openGraph: {
    title: "Exa & Gemini 3 chat app",
    description: "An opensource chat application built with Exa for web search and openai Gemini 3.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exa & Gemini 3 chat app",
    description: "An opensource chat application built with Exa for web search and openai Gemini 3.",
    images: ["https://gemini3-exa.vercel.app/opengraph-image.jpg"]
  },
  metadataBase: new URL("https://gemini3-exa.vercel.app/"),
  robots: {
    index: true,
    follow: true
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${abcdDiatype.variable} ${reckless.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yunastudio.com.br"),
  title: "Yuna Studio — Digital Product Studio",
  description:
    "We design and build digital products with clarity, precision, and performance.",

  openGraph: {
    title: "Yuna Studio — Digital Product Studio",
    description:
      "We design and build digital products with clarity, precision, and performance.",
    url: "https://www.yunastudio.com.br",
    siteName: "Yuna Studio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yuna Studio — Digital Product Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yuna Studio — Digital Product Studio",
    description:
      "We design and build digital products with clarity, precision, and performance.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://www.yunastudio.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "Yuna Studio — Desenvolvimento Web e Sistemas Digitais",
  description:
    "Estúdio de desenvolvimento web especializado em criação de sites, landing pages, sistemas web e plataformas digitais. Do conceito à produção, com clareza e resultado.",

  keywords: [
    "desenvolvimento web",
    "criação de sites",
    "agência digital",
    "landing page",
    "sistema web",
    "plataforma digital",
    "estúdio digital",
    "Yuna Studio",
  ],

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: "Yuna Studio — Desenvolvimento Web e Sistemas Digitais",
    description:
      "Estúdio de desenvolvimento web especializado em criação de sites, landing pages, sistemas web e plataformas digitais. Do conceito à produção, com clareza e resultado.",
    url: BASE_URL,
    siteName: "Yuna Studio",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yuna Studio — Desenvolvimento Web e Sistemas Digitais",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yuna Studio — Desenvolvimento Web e Sistemas Digitais",
    description:
      "Estúdio de desenvolvimento web especializado em criação de sites, landing pages, sistemas web e plataformas digitais. Do conceito à produção, com clareza e resultado.",
    site: "@yunastudiohq",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Yuna Studio",
  url: BASE_URL,
  logo: `${BASE_URL}/yuna-logo.svg`,
  image: `${BASE_URL}/og-image.png`,
  description:
    "Estúdio de desenvolvimento web especializado em criação de sites, landing pages, sistemas web e plataformas digitais.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
  sameAs: [
    "https://www.instagram.com/yunastudiohq/",
    "https://www.linkedin.com/company/yunastudiohq/",
  ],
  serviceType: [
    "Desenvolvimento Web",
    "Criação de Sites",
    "Landing Pages",
    "Sistemas Web",
    "Plataformas Digitais",
    "SEO",
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

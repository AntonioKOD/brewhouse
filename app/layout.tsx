import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://braintreebrewhouse.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Braintree Brewhouse | Craft Beer, Bar Pizza & Sports Bar in Braintree, MA",
    template: "%s | Braintree Brewhouse",
  },
  description: "Braintree Brewhouse - Your local destination for craft beer, authentic New England bar pizza, and live sports. Open daily with full bar, kitchen, and big game viewing. Located at 703 Granite Street, Braintree, MA.",
  keywords: [
    "Braintree Brewhouse",
    "Braintree bar",
    "Braintree restaurant",
    "craft beer Braintree",
    "bar pizza Braintree",
    "sports bar Braintree",
    "Braintree MA restaurant",
    "New England bar pizza",
    "Braintree brewery",
    "sports viewing Braintree",
    "Braintree happy hour",
    "Braintree events",
  ],
  authors: [{ name: "Braintree Brewhouse" }],
  creator: "Braintree Brewhouse",
  publisher: "Braintree Brewhouse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Braintree Brewhouse",
    title: "Braintree Brewhouse | Craft Beer, Bar Pizza & Sports Bar",
    description: "Your local destination for craft beer, authentic New England bar pizza, and live sports. Open daily at 703 Granite Street, Braintree, MA.",
    images: [
      {
        url: `${siteUrl}/og-image`,
        width: 1200,
        height: 630,
        alt: "Braintree Brewhouse - Craft Beer, Bar Pizza & Sports Bar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Braintree Brewhouse | Craft Beer, Bar Pizza & Sports Bar",
    description: "Your local destination for craft beer, authentic New England bar pizza, and live sports. Open daily in Braintree, MA.",
    images: [`${siteUrl}/og-image`],
    creator: "@braintreebrewhouse",
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
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Restaurant & Bar",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Braintree Brewhouse",
  "image": `${siteUrl}/logo_brewhouse.png`,
  "description": "Your local destination for craft beer, authentic New England bar pizza, and live sports.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "703 Granite Street",
    "addressLocality": "Braintree",
    "addressRegion": "MA",
    "postalCode": "02184",
    "addressCountry": "US",
  },
  "telephone": "(781) 356-4500",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "11:00",
      "closes": "01:00",
    },
  ],
  "servesCuisine": "American",
  "priceRange": "$$",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Full Bar",
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Sports Viewing",
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Live Music",
    },
  ],
  "sameAs": [
    "https://www.facebook.com/braintree.brewhouse/",
    "https://www.instagram.com/braintreebrewhouse/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

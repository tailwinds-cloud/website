import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX). Set at build time; GA is
// omitted entirely when it's not set, so local/dev builds don't send analytics.
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AI Consulting & Automation in Detroit, MI | Tailwinds",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "AI consulting",
    "AI strategy",
    "AI coaching",
    "AI for small business",
    "software development",
    "Windsor Ontario",
    "Detroit Michigan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "AI Consulting & Automation in Detroit, MI | Tailwinds",
    description: site.description,
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0A2D6B",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/logo-horizontal.png`,
  image: `${site.url}/opengraph-image.png`,
  description: site.description,
  telephone: "+1-226-602-3099",
  email: site.email,
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" },
  ],
  address: [
    { "@type": "PostalAddress", addressLocality: "Windsor", addressRegion: "ON", addressCountry: "CA" },
    { "@type": "PostalAddress", addressLocality: "Detroit", addressRegion: "MI", addressCountry: "US" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}

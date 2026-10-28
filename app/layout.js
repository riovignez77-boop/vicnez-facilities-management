import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import StructuredData from "@/components/StructuredData";
import { organizationSchema, websiteSchema } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL("https://www.vfmbh.com"),
  title: {
    default: "Vicnez Facilities Management W.L.L",
    template: "%s | Vicnez Facilities Management W.L.L",
  },
  description:
    "Vicnez Facilities Management W.L.L provides premium housekeeping, commercial cleaning and technical maintenance across Bahrain, delivered to an inspected, verified standard.",
  applicationName: "Vicnez Facilities Management",
  category: "Facilities Management",
  keywords: [
    "facilities management Bahrain",
    "cleaning company Bahrain",
    "commercial cleaning Bahrain",
    "building maintenance Bahrain",
    "residential cleaning Bahrain",
    "pool maintenance Bahrain",
  ],
  authors: [{ name: "Vicnez Facilities Management W.L.L" }],
  creator: "Vicnez Facilities Management W.L.L",
  publisher: "Vicnez Facilities Management W.L.L",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/images/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/images/logo-160.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        <Header />
        {children}
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}

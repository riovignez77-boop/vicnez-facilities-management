import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata = {
  metadataBase: new URL("https://www.vfmbh.com"),
  title: {
    default: "Vicnez Facilities Management W.L.L",
    template: "%s | Vicnez Facilities Management W.L.L",
  },
  description:
    "Vicnez Facilities Management W.L.L provides premium housekeeping, commercial cleaning and technical maintenance across Bahrain, delivered to an inspected, verified standard.",
  icons: { icon: "/images/favicon-32.png" },
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
        <Header />
        {children}
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}

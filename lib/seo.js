import { COMPANY, SERVICE_CATEGORIES } from "./content";

export const SITE_URL = "https://www.vfmbh.com";

export function pageMetadata({ title, description, path = "/" }) {
  const canonical = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_BH",
      url: canonical,
      siteName: COMPANY.legalName,
      title,
      description,
      images: [
        {
          url: "/images/hero.jpg",
          width: 1200,
          height: 630,
          alt: `${COMPANY.legalName} facilities management services in Bahrain`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero.jpg"],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY.legalName,
  alternateName: "Vicnez Facilities Management",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-512.png`,
  image: `${SITE_URL}/images/hero.jpg`,
  description:
    "Facilities management, commercial and residential cleaning, building maintenance, pool care, and staffing services across Bahrain.",
  telephone: COMPANY.phoneHref,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 1413, Road 1234, Area 312, Al Guful",
    addressLocality: "Manama",
    addressCountry: "BH",
  },
  areaServed: {
    "@type": "Country",
    name: "Bahrain",
  },
  sameAs: [
    `https://instagram.com/${COMPANY.instagram.replace("@", "")}`,
    COMPANY.facebook,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: COMPANY.phoneHref,
    contactType: "customer service",
    areaServed: "BH",
    availableLanguage: ["English"],
  },
  knowsAbout: SERVICE_CATEGORIES.map((service) => service.title),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: COMPANY.legalName,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Facilities management and cleaning services in Bahrain",
  itemListElement: SERVICE_CATEGORIES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.blurb,
      url: `${SITE_URL}/services/#${service.id}`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Bahrain" },
    },
  })),
};

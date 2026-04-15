import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  jsonLd?: object;
}

export const SEO = ({ title, description, canonical, ogTitle, ogDescription, ogImage = "/og-image.jpg", jsonLd }: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={canonical} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={ogTitle || title} />
    <meta name="twitter:description" content={ogDescription || description} />
    <meta name="twitter:image" content={ogImage} />
    {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
  </Helmet>
);

export const PRANA_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
  name: "Prana Dental Miami",
  image: "/og-image.jpg",
  url: "https://pranadentalmia.com",
  telephone: "+12012803528",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3050 Biscayne Blvd, Suite 703",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33137",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
  priceRange: "$$",
  description: "Luxury implant dentistry in Miami. All-on-4 from $9,999. Single implants from $1,850. Free CT scan and consultation.",
};

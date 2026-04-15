import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";

const SERVICES = [
  {
    category: "Implant Dentistry",
    items: [
      { name: "All-on-X Full Arch (per arch)", price: "From $10,000", note: "Compare to $25k–$35k at most Miami clinics", link: "/all-on-x" },
      { name: "Single Dental Implant", price: "$1,850 cash / $2,150 financed", link: "/dental-implants" },
      { name: "Implant-Supported Bridge", price: "From $5,500", note: "Replace 3–4 teeth with 2 implants" },
    ],
  },
  {
    category: "Cosmetic Dentistry",
    items: [
      { name: "Porcelain Veneers (full set)", price: "From $10,000", link: "/veneers" },
      { name: "Individual Veneer", price: "From $1,200" },
      { name: "Teeth Whitening", price: "From $350" },
    ],
  },
  {
    category: "Restorative",
    items: [
      { name: "Porcelain Crown", price: "$999" },
      { name: "Root Canal", price: "$800–$1,200" },
      { name: "Extraction (simple)", price: "From $99" },
      { name: "Extraction (surgical)", price: "From $250–$500" },
      { name: "Bone Graft", price: "From $500" },
    ],
  },
  {
    category: "Orthodontics",
    items: [
      { name: "Clear Aligners", price: "From $3,500" },
      { name: "Traditional Braces", price: "From $4,000" },
      { name: "Retainers", price: "From $300" },
    ],
  },
  {
    category: "Emergency Dentistry",
    items: [
      { name: "Emergency Exam + X-Ray", price: "$99" },
      { name: "Same-Day Pain Relief", price: "Varies by treatment" },
      { name: "Trauma / Broken Tooth Repair", price: "From $200" },
    ],
  },
];

const PricingPage = () => (
  <>
    <SEO
      title="Dental Pricing Miami | Transparent Pricing | Prana Dental"
      description="Transparent dental pricing at Prana Dental Miami. All-on-X from $10,000/arch. Implants from $1,850. Veneers from $10,000. Crowns $999. Financing from $199/mo."
      canonical="https://pranadentalmia.com/pricing"
      jsonLd={PRANA_JSONLD}
    />

    {/* HERO */}
    <section className="section-cream section-padding pt-32 md:pt-40 texture-overlay relative">
      <div className="container-main text-center max-w-3xl mx-auto relative z-10">
        <AnimatedSection>
          <p className="eyebrow">Transparent Pricing</p>
          <h1 className="headline-display text-prana-charcoal mb-6">
            No Surprises.<br /><em className="font-heading italic font-light">No Games.</em>
          </h1>
          <p className="body-text max-w-xl mx-auto">
            We believe you deserve to know what things cost before you walk in. Every price listed below includes the full scope of treatment.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* PRICING TABLES */}
    <section className="section-white section-padding">
      <div className="container-main max-w-[800px] mx-auto">
        {SERVICES.map((group, gi) => (
          <AnimatedSection key={gi} delay={gi * 0.05} className="mb-16 last:mb-0">
            <h2 className="font-heading text-[28px] md:text-[34px] font-light text-prana-charcoal mb-8 pb-4 border-b border-prana-border">
              {group.category}
            </h2>
            <div className="space-y-0">
              {group.items.map((item, ii) => (
                <div key={ii} className="flex flex-col md:flex-row md:items-center justify-between py-5 border-b border-prana-border/50 last:border-0 gap-2">
                  <div>
                    <p className="font-body text-[15px] text-prana-charcoal font-medium">
                      {item.link ? (
                        <Link to={item.link} className="hover:text-prana-terra transition-colors">{item.name}</Link>
                      ) : item.name}
                    </p>
                    {item.note && <p className="font-body text-[12px] text-prana-text-muted mt-0.5">{item.note}</p>}
                  </div>
                  <p className="font-body text-[15px] text-prana-charcoal font-medium md:text-right whitespace-nowrap">{item.price}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* FINANCING */}
    <section className="section-warm section-padding">
      <div className="container-main max-w-[700px] mx-auto text-center">
        <AnimatedSection>
          <p className="eyebrow">Financing</p>
          <h2 className="headline-section text-prana-charcoal mb-6">
            From $199/month.
          </h2>
          <p className="body-text max-w-lg mx-auto mb-8">
            0% interest financing available for qualified patients. No hard credit check to apply. Most decisions in minutes. We also accept most major dental insurance plans.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Check Your Options</a>
        </AnimatedSection>
      </div>
    </section>

    <FullWidthCTA />
  </>
);

export default PricingPage;

import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const TREATMENTS = [
  { slug: "all-on-x", to: "/all-on-x", label: "All-on-X Full Arch", blurb: "A full set of permanent teeth on as few as 4–6 implants — from $9,999/arch." },
  { slug: "dental-implants", to: "/dental-implants", label: "Single Dental Implants", blurb: "Replace one tooth with a natural-looking implant + crown — from $1,850." },
  { slug: "veneers", to: "/veneers", label: "Porcelain Veneers", blurb: "Digitally designed custom porcelain — your new smile in 2 visits." },
  { slug: "ortho", to: "/ortho", label: "Orthodontics", blurb: "Clear aligners & braces for teens and adults — from $3,500." },
  { slug: "emergency", to: "/emergency", label: "Emergency Dentistry", blurb: "Same-day relief for pain, breaks and infections. Walk-ins welcome." },
  { slug: "sedation", to: "/sedation", label: "Sedation Dentistry", blurb: "Oral & IV sedation so anxious patients feel nothing." },
];

export const RelatedTreatments = ({ current, max = 3 }: { current: string; max?: number }) => {
  const items = TREATMENTS.filter((t) => t.slug !== current).slice(0, max);
  return (
    <section className="section-cream section-padding texture-overlay relative">
      <div className="container-main relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="eyebrow">Explore More</p>
          <h2 className="headline-section text-prana-charcoal">Continue Your Smile Journey.</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <AnimatedSection key={t.slug} delay={i * 0.08}>
              <Link
                to={t.to}
                className="group block h-full bg-white border border-prana-border rounded-sm p-8 transition-colors hover:border-prana-charcoal/30"
              >
                <h3 className="font-body text-[17px] font-semibold text-prana-charcoal mb-2">{t.label}</h3>
                <p className="font-body text-[13.5px] text-prana-text-muted leading-[1.7] mb-5">{t.blurb}</p>
                <span className="font-body text-[11px] uppercase tracking-[0.12em] text-prana-terra inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight size={13} />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/constants";
import baAllonx from "@/assets/before-after-allonx.jpg";
import baVeneers from "@/assets/before-after-veneers.jpg";

// ─── CASES ───────────────────────────────────────────────
// Each case: real patient result. IMAGE NOTES per case below.
const CASES = [
  {
    id: 1,
    category: "all-on-x",
    label: "All-on-X",
    title: "Full Arch Restoration",
    detail: "Upper arch · 6 implants · Same-day provisional · Final zirconia at 14 weeks",
    img: baAllonx,
    // IMAGE PLACEHOLDER: Upper arch All-on-X before/after - real patient, full smile.
    // Asset needed: high-res split before/after from clinic photography. Consent required.
  },
  {
    id: 2,
    category: "all-on-x",
    label: "All-on-X",
    title: "Full Mouth Rehabilitation",
    detail: "Both arches · 4 implants per arch · Complete full-mouth restoration",
    img: baAllonx,
    // IMAGE PLACEHOLDER: Both arch case. Different patient from above.
  },
  {
    id: 3,
    category: "veneers",
    label: "Veneers",
    title: "Porcelain Smile Design",
    detail: "8 veneers · Upper arch · Digitally designed · 2 visits",
    img: baVeneers,
    // IMAGE PLACEHOLDER: 8-veneer smile transformation. Natural look, not bleached white.
  },
  {
    id: 4,
    category: "veneers",
    label: "Veneers",
    title: "Composite to Porcelain",
    detail: "6 veneers · Replaced old composite work · Color-matched with lower teeth",
    img: baVeneers,
    // IMAGE PLACEHOLDER: Porcelain veneer replacement. Shows quality difference.
  },
  {
    id: 5,
    category: "implants",
    label: "Single Implant",
    title: "Single Tooth Replacement",
    detail: "Upper premolar · Titanium implant + zirconia crown · Placed in one visit",
    img: baAllonx,
    // IMAGE PLACEHOLDER: Single implant case - close-up showing natural integration.
  },
  {
    id: 6,
    category: "implants",
    label: "Single Implant",
    title: "Front Tooth Implant",
    detail: "Upper central incisor · Aesthetic zone · Custom shade-matched crown",
    img: baAllonx,
    // IMAGE PLACEHOLDER: Aesthetic zone implant - the hardest case to do well. Shows expertise.
  },
];

const FILTERS = [
  { key: "all", label: "All Cases" },
  { key: "all-on-x", label: "All-on-X" },
  { key: "veneers", label: "Veneers" },
  { key: "implants", label: "Single Implants" },
];

const BeforeAfter = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? CASES : CASES.filter(c => c.category === active);

  return (
    <>
      <SEO
        title="Before & After Results | Prana Dental Miami"
        description="Real patient results from Prana Dental Miami. All-on-X full arch, porcelain veneers, and single implant before and after photos. Dr. Aakash Rana."
        canonical="https://pranadentalmia.com/before-after"
        jsonLd={PRANA_JSONLD}
      />

      {/* ─── HERO ─── */}
      <section className="section-cream section-padding pt-36 md:pt-44 texture-overlay relative">
        <div className="container-main relative z-10 text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow">Patient Transformations</p>
            <h1 className="headline-display text-prana-charcoal mb-6">
              Real Results.<br />
              <em className="font-heading italic font-light">Real Patients.</em>
            </h1>
            <p className="body-text max-w-lg mx-auto">
              Every case on this page was treated personally by Dr. Rana. No filters. No composites. Photographed at follow-up appointments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FILTER + GRID ─── */}
      <section className="section-white section-padding pt-0">
        <div className="container-main">
          {/* Filter tabs */}
          <AnimatedSection className="flex flex-wrap gap-2 mb-14">
            {FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`font-body text-[11px] uppercase tracking-[0.12em] px-5 py-2.5 rounded-2xl border transition-all duration-200 ${
                  active === f.key
                    ? "bg-prana-charcoal text-white border-prana-charcoal"
                    : "border-prana-border text-prana-text-muted hover:border-prana-charcoal/30 hover:text-prana-charcoal"
                }`}
              >
                {f.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Case grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((c, i) => (
              <AnimatedSection key={c.id} delay={i * 0.05}>
                <div className="group overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={c.img}
                      alt={`${c.label} - ${c.title} | Prana Dental Miami`}
                      className="w-full h-[360px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-body text-[10px] uppercase tracking-[0.18em] text-prana-terra mb-1">{c.label}</p>
                      <p className="font-body text-[15px] font-medium text-prana-charcoal mb-1">{c.title}</p>
                      <p className="font-body text-[12px] text-prana-text-muted leading-[1.6]">{c.detail}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection className="mt-20 text-center border-t border-prana-border pt-16">
            <p className="eyebrow">See If You're a Candidate</p>
            <h2 className="headline-section text-prana-charcoal mb-6">
              Your Case Could Be<br />
              <em className="font-heading italic font-light">Our Next Result.</em>
            </h2>
            <p className="body-text max-w-md mx-auto mb-8">
              Free CT scan and consultation. Dr. Rana will review your case and show you what's possible - before you commit.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Free Consultation
            </a>
          </AnimatedSection>
        </div>
      </section>

      <FullWidthCTA />
    </>
  );
};

export default BeforeAfter;

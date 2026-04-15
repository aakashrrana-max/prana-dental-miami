import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { AccordionFAQ } from "@/components/AccordionFAQ";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/constants";
import baVeneers from "@/assets/before-after-veneers.jpg";

const STEPS = [
  { number: "01", title: "Consultation + Digital Design", description: "Dr. Rana evaluates your smile goals and creates a digital preview. You approve your new smile before a single tooth is touched." },
  { number: "02", title: "Preparation + Temporaries", description: "A thin layer of enamel is gently shaped. Temporary veneers are placed while your custom porcelain set is precision-crafted in our lab." },
  { number: "03", title: "Permanent Bonding", description: "Your final veneers are bonded - a permanent, natural-looking result designed to last 10 to 20 years with proper care." },
];

const FAQ = [
  { q: "Will veneers look fake?", a: "No. Our veneers are custom-designed with natural translucency, color gradients, and micro-texture. Dr. Rana designs each case digitally and patients approve the aesthetic before we begin. The goal is 'better' - not 'obvious.'" },
  { q: "Is the process painful?", a: "Most patients experience minimal discomfort. Preparation is done under local anesthesia and is far less invasive than expected. The procedure is predictable and well-tolerated." },
  { q: "How long do porcelain veneers last?", a: "With proper care, 10 to 20 years. Porcelain is stain-resistant and extremely durable. Avoid biting hard objects (ice, pens) and attend regular check-ups." },
  { q: "How many veneers do I need?", a: "This depends on your smile goals. Some patients do 6 to 8 veneers for a full visible smile. Others address just 2 to 4. Dr. Rana will walk you through options during the digital design consultation." },
];

const VeneersPage = () => (
  <>
    <SEO
      title="Porcelain Veneers Miami | From $10,000 | Prana Dental"
      description="Transform your smile with custom porcelain veneers in Miami. Full packages from $10,000. Financing from $199/month. Free consultation with Dr. Aakash Rana."
      canonical="https://pranadentalmia.com/veneers"
      jsonLd={PRANA_JSONLD}
    />

    {/* ─── HERO ─── */}
    <section className="relative min-h-[90vh] flex items-center bg-prana-charcoal pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-prana-charcoal via-[#1f1c1a] to-[#0f0e0d] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-prana-charcoal via-prana-charcoal/55 to-transparent z-10" />
        {/* IMAGE PLACEHOLDER: Veneers result - beautiful, natural-looking smile close-up.
            Person: 30s-40s, confident expression, warm lighting.
            Not overly white/bleached - natural translucency is key selling point.
            Composition: tight on the smile, partial face in frame.
            Asset needed: high-res veneer case from clinic photography. */}
        <img
          src={baVeneers}
          alt="Porcelain veneers result - Prana Dental Miami"
          className="w-full h-full object-cover object-center"
          width={900}
          height={1200}
        />
      </div>

      <div className="container-main px-6 md:px-12 w-full relative z-10">
        <div className="max-w-[540px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="eyebrow mb-6">Porcelain Veneers Miami</p>
            <h1 className="font-heading font-light text-[44px] md:text-[65px] leading-[1.05] tracking-[-0.02em] text-white mb-7">
              Your Smile Should<br />
              <em className="italic text-prana-terra">Match Your Life.</em>
            </h1>
            <p className="font-body text-[16px] font-light text-white/60 leading-[1.75] mb-5 max-w-[400px]">
              Custom porcelain veneers digitally designed before treatment begins. Full smile packages from $10,000. Financing from $199/month.
            </p>
            <div className="flex flex-wrap gap-3 mb-9">
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-2xl px-3.5 py-2 font-body text-[12px] text-white/80">
                Full set · <strong className="text-white">From $10,000</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-2xl px-3.5 py-2 font-body text-[12px] text-white/80">
                Financing · <strong className="text-white">$199/mo</strong>
              </span>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              Book Free Consultation
            </a>
            <p className="mt-4 font-body text-[12px] text-white/30">See your new smile on screen before any work begins</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ─── WHAT ARE VENEERS ─── */}
    <section className="section-white section-padding">
      <div className="container-main max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="eyebrow">What Are Veneers?</p>
          <h2 className="headline-section text-prana-charcoal mb-8">
            Not a Cover-Up.<br />
            <em className="font-heading italic font-light">A Transformation.</em>
          </h2>
          <p className="body-text mb-5">
            Ultra-thin porcelain shells custom-crafted to fit over the front surface of your teeth. They correct color, chips, gaps, uneven length, and asymmetry - in as few as two visits.
          </p>
          <p className="body-text mb-8">
            Every case is digitally designed before treatment. You see your new smile on screen and approve the aesthetic before we prepare a single tooth.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Custom Porcelain", "Digitally Designed", "Natural Translucency", "2 Visits", "Stain Resistant", "10 to 20 Year Lifespan"].map((tag) => (
              <span key={tag} className="font-body text-[11px] tracking-[0.06em] text-prana-text-muted border border-prana-border px-3 py-1.5 rounded-2xl uppercase">{tag}</span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* ─── PROCESS ─── */}
    <section className="section-warm section-padding">
      <div className="container-main">
        <AnimatedSection className="mb-16">
          <p className="eyebrow">The Process</p>
          <h2 className="headline-section text-prana-charcoal">Three Steps to Your New Smile.</h2>
        </AnimatedSection>
        <ProcessTimeline steps={STEPS} />
        <AnimatedSection className="mt-16 text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2">
            Schedule Your Design Consultation <ChevronRight size={14} />
          </a>
        </AnimatedSection>
      </div>
    </section>

    {/* ─── PRICING ─── */}
    <section className="section-dark section-padding">
      <div className="container-main max-w-2xl mx-auto">
        <AnimatedSection>
          <p className="eyebrow">Transparent Pricing</p>
          <h2 className="headline-section text-white mb-4">Full Smile from $10,000.</h2>
          <p className="font-body text-[14px] text-white/35 mb-10 italic">Financing from $199/month for qualified patients. Everything below is included:</p>
          <div className="space-y-4">
            {[
              "Free consultation with Dr. Rana",
              "Digital smile design and preview session",
              "Tooth preparation under local anesthesia",
              "Temporary veneers during fabrication",
              "Custom porcelain veneers (full set)",
              "Permanent bonding appointment",
              "Follow-up check appointment",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 border-b border-white/8 pb-4 last:border-0">
                <span className="text-prana-terra text-[8px] mt-2 flex-shrink-0">●</span>
                <p className="font-body text-[14px] text-white/60">{item}</p>
              </div>
            ))}
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-white mt-10 inline-block">
            See Your New Smile - Free
          </a>
        </AnimatedSection>
      </div>
    </section>

    {/* ─── FAQ ─── */}
    <section className="section-white section-padding">
      <div className="container-main max-w-[700px] mx-auto">
        <AnimatedSection className="mb-12">
          <p className="eyebrow">Common Questions</p>
          <h2 className="headline-section text-prana-charcoal">Your Questions, Answered.</h2>
        </AnimatedSection>
        <AccordionFAQ items={FAQ} />
      </div>
    </section>

    <FullWidthCTA />
  </>
);

export default VeneersPage;

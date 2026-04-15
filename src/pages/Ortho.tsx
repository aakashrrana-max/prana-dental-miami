import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AccordionFAQ } from "@/components/AccordionFAQ";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/constants";
import clinicImg from "@/assets/clinic-hallway.jpg";

const FAQ = [
  { q: "How long does treatment take?", a: "Clear aligner treatment typically takes 6 to 18 months depending on complexity. Traditional braces average 12 to 24 months. Dr. Rana will give you a precise timeline at your consultation." },
  { q: "Are clear aligners as effective as braces?", a: "For most cases, yes. Clear aligners handle crowding, spacing, overbites, and underbites effectively. Severe skeletal issues may still require traditional braces. We will tell you honestly which option is best for your case." },
  { q: "Does it hurt?", a: "You will feel mild pressure for the first few days after each new aligner or adjustment. Most patients describe it as discomfort, not pain. It fades quickly as your teeth adjust." },
  { q: "Can adults get orthodontic treatment?", a: "Absolutely. More than half of our ortho patients are adults. Clear aligners are virtually invisible and fit seamlessly into professional life." },
  { q: "Do you offer payment plans?", a: "Yes. We offer 0% interest financing for qualified patients with monthly payments starting at $199/month. Most decisions come back in minutes." },
];

const Ortho = () => (
  <>
    <SEO
      title="Orthodontics Miami | Clear Aligners from $3,500 | Prana Dental"
      description="Straighten your teeth with clear aligners or braces in Miami. Starting at $3,500 with financing from $199/month. Free consultation at Prana Dental Miami."
      canonical="https://pranadentalmia.com/ortho"
      jsonLd={PRANA_JSONLD}
    />

    <section className="relative min-h-[85vh] flex items-center bg-prana-charcoal pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-prana-charcoal via-[#1f1c1a] to-[#0f0e0d]" />
      <div className="absolute top-0 right-0 w-[48%] h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-prana-charcoal via-prana-charcoal/55 to-transparent z-10" />
        <img src={clinicImg} alt="Prana Dental Miami orthodontics" className="w-full h-full object-cover" />
      </div>
      <div className="container-main px-6 md:px-12 w-full relative z-10">
        <div className="max-w-[540px]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow mb-5">Orthodontics Miami</p>
            <h1 className="font-heading font-light text-[44px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
              Straight Teeth.<br />
              <em className="italic text-prana-terra">No Metal Required.</em>
            </h1>
            <p className="font-body text-[16px] font-light text-white/60 leading-[1.75] mb-5 max-w-[420px]">
              Clear aligners and traditional braces for teens and adults. Custom treatment plans designed digitally. Results you can see before you start.
            </p>
            <div className="flex flex-wrap gap-3 mb-9">
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-full px-3.5 py-2 font-body text-[12px] text-white/80">
                Clear Aligners · <strong className="text-white">From $3,500</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-full px-3.5 py-2 font-body text-[12px] text-white/80">
                Braces · <strong className="text-white">From $4,000</strong>
              </span>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              Book Free Consultation
            </a>
            <p className="mt-4 font-body text-[12px] text-white/30">Free consultation · Financing from $199/month</p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-white section-padding">
      <div className="container-main max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="eyebrow">Your Options</p>
          <h2 className="headline-section text-prana-charcoal mb-8">
            Two Paths.<br />
            <em className="font-heading italic font-light">Same Beautiful Result.</em>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {[
            {
              title: "Clear Aligners",
              price: "From $3,500",
              points: ["Virtually invisible", "Removable for eating and brushing", "Custom-molded to your teeth", "Average treatment: 6 to 18 months", "Digital progress tracking"],
            },
            {
              title: "Traditional Braces",
              price: "From $4,000",
              points: ["Ideal for complex cases", "Metal or ceramic bracket options", "Precise control for severe crowding", "Average treatment: 12 to 24 months", "Consistent, proven results"],
            },
          ].map((opt) => (
            <AnimatedSection key={opt.title} className="bg-white border border-prana-border rounded-3xl p-8">
              <p className="eyebrow">{opt.title}</p>
              <h3 className="font-heading text-[28px] font-light text-prana-charcoal mb-6">{opt.price}</h3>
              <ul className="space-y-3">
                {opt.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-prana-text-muted text-[14px] font-body">
                    <span className="text-prana-terra mt-1 text-[8px]">●</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-cream section-padding">
      <div className="container-main max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="eyebrow">The Process</p>
          <h2 className="headline-section text-prana-charcoal mb-10">How It Works.</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: "01", t: "Digital Scan", b: "We take a 3D digital impression of your teeth. No messy molds. You see a simulation of your final result before treatment begins." },
            { n: "02", t: "Custom Plan", b: "Dr. Rana designs your treatment plan with precise tooth movements mapped digitally. You approve the expected outcome." },
            { n: "03", t: "Treatment + Results", b: "You wear your aligners or braces as prescribed. Regular check-ins ensure everything is tracking. Your smile transforms gradually and predictably." },
          ].map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <p className="font-heading text-[60px] leading-none text-prana-border mb-4 select-none">{step.n}</p>
              <h3 className="font-body text-[16px] font-semibold text-prana-charcoal mb-3">{step.t}</h3>
              <p className="font-body text-[14px] text-prana-text-muted leading-[1.7]">{step.b}</p>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-14">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2">
            Book Free Ortho Consultation <ChevronRight size={14} />
          </a>
        </AnimatedSection>
      </div>
    </section>

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

export default Ortho;

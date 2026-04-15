import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { AccordionFAQ } from "@/components/AccordionFAQ";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/constants";
import drImg from "@/assets/dr-rana.jpg";

const STEPS = [
  { number: "01", title: "Free Consultation + CT Scan", description: "Dr. Rana evaluates your case with 3D CBCT imaging. You'll know exactly what's possible - before committing to anything." },
  { number: "02", title: "Implant Placement", description: "The titanium implant is placed using a guided surgical protocol. Most patients return to normal activity the following day." },
  { number: "03", title: "Custom Crown Delivery", description: "A custom zirconia or porcelain crown is placed - matched precisely to the color, shape, and size of your natural teeth." },
];

const FAQ = [
  { q: "Is the surgery painful?", a: "Most patients say it was easier than a tooth extraction. We use local anesthesia and offer sedation. Post-op discomfort is typically mild and managed with over-the-counter medication." },
  { q: "How long do dental implants last?", a: "With proper care, the titanium implant post can last a lifetime through osseointegration. The crown typically lasts 15 to 25+ years." },
  { q: "Why is your price so much lower?", a: "Efficient workflows, an in-house digital lab, and fair margins. We use the same premium materials as high-priced clinics - we just don't mark them up 3x." },
  { q: "Am I a candidate?", a: "Most adults in good health with a missing tooth are candidates. Some cases require a bone graft first - which Dr. Rana performs in-house. A free CT scan will give you a clear answer." },
];

const DentalImplantsPage = () => (
  <>
    <SEO
      title="Single Tooth Implant Miami | $1,850 | Prana Dental"
      description="Replace a missing tooth with a permanent dental implant in Miami starting at $1,850 cash. Free consultation and CT scan with Dr. Aakash Rana."
      canonical="https://pranadentalmia.com/dental-implants"
      jsonLd={PRANA_JSONLD}
    />

    {/* ─── HERO ─── */}
    <section className="relative min-h-[90vh] flex items-center bg-prana-charcoal pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-prana-charcoal via-[#1f1c1a] to-[#0f0e0d] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-prana-charcoal via-prana-charcoal/55 to-transparent z-10" />
        {/* IMAGE PLACEHOLDER: Single implant result - confident patient with natural smile.
            Close-up smile showing one restored tooth (not obvious which one).
            Tone: clean, premium, lifestyle. Natural skin tone, warm lighting.
            Asset needed: patient photography from clinic - consent required. */}
        <img
          src={drImg}
          alt="Dr. Rana - Single implant specialist, Prana Dental Miami"
          className="w-full h-full object-cover object-top"
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
            <p className="eyebrow mb-6">Single Dental Implants</p>
            <h1 className="font-heading font-light text-[44px] md:text-[65px] leading-[1.05] tracking-[-0.02em] text-white mb-7">
              One Missing Tooth.<br />
              <em className="italic text-prana-terra">One Permanent Fix.</em>
            </h1>
            <p className="font-body text-[16px] font-light text-white/60 leading-[1.75] mb-5 max-w-[400px]">
              A titanium implant and custom zirconia crown that looks, feels, and bites like the tooth you lost. Starting at $1,850 cash.
            </p>
            <div className="flex flex-wrap gap-3 mb-9">
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-2xl px-3.5 py-2 font-body text-[12px] text-white/80">
                Cash price · <strong className="text-white">$1,850</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-2xl px-3.5 py-2 font-body text-[12px] text-white/80">
                Financed · <strong className="text-white">$2,150</strong>
              </span>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              Book Free CT Scan
            </a>
            <p className="mt-4 font-body text-[12px] text-white/30">Free consultation and CT scan included · No commitment</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ─── ABOUT ─── */}
    <section className="section-white section-padding">
      <div className="container-main max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="eyebrow">The Permanent Solution</p>
          <h2 className="headline-section text-prana-charcoal mb-8">
            The Closest Thing<br />
            <em className="font-heading italic font-light">to Your Real Tooth.</em>
          </h2>
          <p className="body-text mb-5">
            A small titanium post placed into your jawbone fuses naturally with your bone over time - just like a real tooth root. A custom crown sits on top, matched perfectly to your surrounding teeth in color, shape, and size.
          </p>
          <p className="body-text mb-8">
            Unlike a bridge, implants don't grind down adjacent teeth. Unlike a denture, they never slip or need adhesive. They preserve your bone, protect your bite, and last decades.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Titanium Implant Post", "Custom Zirconia Crown", "Bone Preserving", "Permanent Fix", "No Adjacent Damage", "Placed in 1 to 2 Hours"].map((tag) => (
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
          <h2 className="headline-section text-prana-charcoal">Three Steps to a Permanent Tooth.</h2>
        </AnimatedSection>
        <ProcessTimeline steps={STEPS} />
        <AnimatedSection className="mt-16 text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2">
            Start with a Free Consultation <ChevronRight size={14} />
          </a>
        </AnimatedSection>
      </div>
    </section>

    {/* ─── PRICING ─── */}
    <section className="section-dark section-padding">
      <div className="container-main max-w-2xl mx-auto">
        <AnimatedSection>
          <p className="eyebrow">Transparent Pricing</p>
          <h2 className="headline-section text-white mb-8">$1,850 Cash · $2,150 Financed.</h2>
          <p className="font-body text-[14px] text-white/35 mb-8 italic">Everything included - no hidden add-ons at checkout:</p>
          <div className="space-y-4">
            {[
              "Free consultation and 3D CT scan",
              "Titanium implant placement",
              "Custom abutment",
              "Zirconia or porcelain crown",
              "All follow-up visits",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 border-b border-white/8 pb-4 last:border-0">
                <span className="text-prana-terra text-[8px] mt-2 flex-shrink-0">●</span>
                <p className="font-body text-[14px] text-white/60">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-white/30 font-body text-[13px]">Financing available for qualified patients. Applying does not affect your credit score.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-white mt-8 inline-block">
            Book My Free Consultation
          </a>
        </AnimatedSection>
      </div>
    </section>

    {/* ─── TESTIMONIALS ─── */}
    <section className="section-white section-padding">
      <div className="container-main max-w-3xl mx-auto">
        <AnimatedSection className="mb-12">
          <p className="eyebrow">Patient Experiences</p>
          <h2 className="headline-section text-prana-charcoal">Real Results.</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            name="Robert M."
            location="Brickell"
            quote="The whole process was easier than I expected. From the scan to the final crown, everything was smooth and professional. Worth every penny."
            badge="Single Implant"
          />
          <TestimonialCard
            name="Sarah K."
            location="Midtown"
            quote="I was nervous about the procedure, but Dr. Rana made me feel completely at ease. My implant looks and feels exactly like my real tooth."
            badge="Single Implant"
            delay={0.08}
          />
        </div>
      </div>
    </section>

    {/* ─── FAQ ─── */}
    <section className="section-warm section-padding">
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

export default DentalImplantsPage;

import { motion } from "framer-motion";
import { ChevronRight, Award } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { AccordionFAQ } from "@/components/AccordionFAQ";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/constants";
import baAllonx from "@/assets/before-after-allonx.jpg";
import cbctImg from "@/assets/cbct-scanner.jpg";
import zirconiaImg from "@/assets/zirconia-arch.jpg";

const STEPS = [
  { number: "01", title: "Free CT Scan + Consultation", description: "Full 3D CBCT imaging at no cost. Dr. Rana reviews everything personally and tells you exactly what's possible - before you commit to anything." },
  { number: "02", title: "Digital Treatment Plan", description: "Your case is mapped in 3D. Every implant position is digitally planned. You see the expected outcome before anything begins." },
  { number: "03", title: "Implant Placement + Same-Day Teeth", description: "Implants placed under sedation. Provisional teeth attached the same day, where clinically appropriate." },
  { number: "04", title: "Final Zirconia Restoration", description: "Your permanent bridge - custom-crafted zirconia for natural aesthetics, full chewing strength, and lasting durability." },
];

const FAQ = [
  { q: "Will the surgery be painful?", a: "Most patients report minimal discomfort. We use IV sedation and local anesthesia. Post-operative pain is typically managed with over-the-counter medication and most patients return to normal activity within a few days." },
  { q: "What if I don't have enough bone?", a: "Many patients told they lack bone elsewhere are actually candidates at Prana Dental. Dr. Rana uses advanced CBCT imaging and may recommend bone grafting or zygomatic implants. A 'no' elsewhere is frequently a 'yes' here." },
  { q: "How long will my teeth last?", a: "All-on-X restorations are designed to be permanent. Titanium implants integrate with your bone and zirconia bridges typically last 15 to 25+ years with proper care and regular check-ups." },
  { q: "What happens if something goes wrong?", a: "Complications are rare with proper planning and guided protocols. Dr. Rana provides all follow-up care in-house. If any adjustment is needed post-op, we handle it - no runaround." },
];

const AllOnXPage = () => (
  <>
    <SEO
      title="All-on-4 Miami | From $9,999 | Prana Dental Miami"
      description="Restore your full smile with All-on-4 or All-on-6 in Miami, starting at $9,999 per arch. Same-day teeth where clinically appropriate. Free CT scan with Dr. Aakash Rana."
      canonical="https://pranadentalmia.com/all-on-x"
      jsonLd={PRANA_JSONLD}
    />

    {/* ─── HERO ─── */}
    <section className="relative min-h-[90vh] flex items-center bg-prana-charcoal pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-prana-charcoal via-[#1f1c1a] to-[#0f0e0d] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-prana-charcoal via-prana-charcoal/50 to-transparent z-10" />
        <img
          src={baAllonx}
          alt="All-on-X full arch transformation - Prana Dental Miami"
          className="w-full h-full object-cover object-center"
          width={900}
          height={1200}
        />
      </div>

      <div className="container-main px-6 md:px-12 w-full relative z-10">
        <div className="max-w-[560px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="eyebrow mb-6">All-on-X Full-Arch Implants</p>
            <h1 className="font-heading font-light text-[44px] md:text-[65px] leading-[1.05] tracking-[-0.02em] text-white mb-7">
              All Your Teeth.<br />
              <em className="italic text-prana-terra">One Day.</em>
            </h1>
            <p className="font-body text-[16px] font-light text-white/60 leading-[1.75] mb-5 max-w-[420px]">
              Starting at $9,999 per arch - while most Miami clinics charge $25,000+. Free CT scan to find out if you qualify.
            </p>
            <div className="flex flex-wrap gap-3 mb-9">
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-2xl px-3.5 py-2 font-body text-[12px] text-white/80">
                Per arch · <strong className="text-white">From $9,999</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-2xl px-3.5 py-2 font-body text-[12px] text-white/80">
                Financing from <strong className="text-white">$199/mo</strong>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
                Book Free CT Scan
              </a>
            </div>
            <p className="mt-4 font-body text-[12px] text-white/30">Same-day teeth where clinically appropriate · No commitment required</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="hidden lg:flex absolute bottom-12 right-8 xl:right-16 items-center gap-4 bg-white/[0.07] backdrop-blur-sm border border-white/12 rounded-2xl px-5 py-4 z-20"
        >
          <Award size={20} className="text-prana-terra flex-shrink-0" />
          <div>
            <p className="font-body text-[11px] text-white font-medium tracking-[0.06em] uppercase">300+ Full-Arch Cases</p>
            <p className="font-body text-[11px] text-white/40 mt-0.5">All planned and performed by Dr. Rana</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ─── WHAT IS ALL-ON-X ─── */}
    <section className="section-white section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <img
              src={cbctImg}
              alt="3D CBCT cone beam CT scanner - Prana Dental Miami"
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="eyebrow">What Is All-on-X?</p>
            <h2 className="headline-section text-prana-charcoal mb-8">
              A Full Arch.<br />
              <em className="font-heading italic font-light">Just 4 to 6 Implants.</em>
            </h2>
            <p className="body-text mb-5">
              All-on-X replaces an entire row of teeth using four to six titanium implants per arch. Unlike dentures, these teeth are permanently fixed to your jaw - not removable, not adhesive-dependent.
            </p>
            <p className="body-text mb-8">
              They don't slip. They don't click. They don't come out. You eat what you want, speak clearly, and smile without thinking about it.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Permanent · Not Removable", "Nobel Biocare Implants", "Zirconia Bridge", "3D Planned", "Same-Day Provisional"].map((tag) => (
                <span key={tag} className="font-body text-[11px] tracking-[0.06em] text-prana-text-muted border border-prana-border px-3 py-1.5 rounded-2xl uppercase">{tag}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ─── PROCESS ─── */}
    <section className="section-warm section-padding">
      <div className="container-main">
        <AnimatedSection className="mb-16">
          <p className="eyebrow">The Process</p>
          <h2 className="headline-section text-prana-charcoal">Four Steps to a New Smile.</h2>
        </AnimatedSection>
        <ProcessTimeline steps={STEPS} />
        <AnimatedSection className="mt-16 text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2">
            Start with a Free CT Scan <ChevronRight size={14} />
          </a>
        </AnimatedSection>
      </div>
    </section>

    {/* ─── PRICING (DARK) ─── */}
    <section className="section-dark section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="eyebrow">Transparent Pricing</p>
            <h2 className="headline-section text-white mb-4">From $9,999 Per Arch.</h2>
            <p className="font-body text-[15px] text-white/40 mb-10 line-through">Most Miami clinics: $25,000 to $35,000 per arch</p>
            <div className="space-y-4">
              {[
                "Free CT scan and consultation",
                "Digital 3D treatment planning",
                "Implant surgery (4 to 6 titanium implants per arch)",
                "Same-day provisional teeth (where clinically appropriate)",
                "Final custom zirconia restoration",
                "All follow-up visits included",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 border-b border-white/8 pb-4 last:border-0">
                  <span className="text-prana-terra text-[8px] mt-2 flex-shrink-0">●</span>
                  <p className="font-body text-[14px] text-white/60">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="border border-white/12 p-8 md:p-10">
              <p className="eyebrow">Financing Example</p>
              <h3 className="font-heading text-[28px] font-light text-white mb-8">One Arch · All-on-X</h3>
              <div className="space-y-5 divide-y divide-white/10">
                {[
                  ["Total Investment", "$10,000"],
                  ["Monthly Payment", "~$199/mo", true],
                  ["Term", "60 months"],
                  ["Interest", "0% (OAC)"],
                ].map(([label, value, highlight]) => (
                  <div key={label as string} className="flex justify-between items-center font-body text-[15px] pt-5 first:pt-0">
                    <span className="text-white/40">{label}</span>
                    <span className={`font-medium ${highlight ? "text-prana-terra text-[22px] font-heading" : "text-white"}`}>{value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 font-body text-[12px] text-white/25">Individual plans vary. Subject to credit approval. Applying does not affect your credit score.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-white w-full block text-center mt-8">
                Get My Free Quote
              </a>
            </div>
          </AnimatedSection>
        </div>
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

export default AllOnXPage;

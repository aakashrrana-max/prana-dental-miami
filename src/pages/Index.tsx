/*
 * ─────────────────────────────────────────────────────────────────────────────
 * INTERNAL AUDIT — Prana Dental Miami Homepage
 * ─────────────────────────────────────────────────────────────────────────────
 * 1.  Hero H1: "Stop Hiding Your Smile." — missing "Permanent Teeth" + "Miami"
 * 2.  Hero CTA linked to WhatsApp only; no on-page fallback lead capture form
 * 3.  Trust bar: single star pill — missing 4-icon horizontal bar below CTA
 * 4.  Offer Stack: absent — must appear immediately after hero per spec
 * 5.  Testimonials: 4 existing cards placed after Financing; replaced with 3 CRO
 *     cards with star row above section header, moved to after Before/After
 * 6.  Lead capture form: did not exist anywhere on site — added after testimonials
 * 7.  Risk reversal section: did not exist — added before FullWidthCTA
 * 8.  Copy: "Learn About All-on-X", "Book Your Free CT Scan", "Ask Us Directly"
 *     updated to spec-compliant patterns
 * 9.  StickyMobileCTA already present; links to WhatsApp — kept as-is
 * 10. Nav: Blog link removed; kept Treatments, Pricing, Results, About only
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star, Shield, Award, ChevronRight, Microscope, Zap,
  HeartHandshake, CheckCircle, Lock, BadgeCheck, Clock,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { OfferCard } from "@/components/OfferCard";
import { AccordionFAQ } from "@/components/AccordionFAQ";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";
import { PHONE, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";
import drImg from "@/assets/dr-rana.jpg";
import clinicRoomImg from "@/assets/clinic-room.jpg";
import clinicHallwayImg from "@/assets/clinic-hallway.jpg";
import cbctImg from "@/assets/cbct-scan.webp";
import patientSmileImg from "@/assets/patient-smile-result.jpg";
import baAllonx from "@/assets/before-after-allonx.jpg";
import baVeneers from "@/assets/before-after-veneers.jpg";

const FAQ_ITEMS = [
  { q: "Is the procedure painful?", a: "Over 90% of our patients describe the experience as easier than they expected. We use advanced local anesthesia and offer oral and IV sedation. Most rate their discomfort at 2 out of 10 or less." },
  { q: "How long do dental implants last?", a: "Titanium implants are designed to be permanent. The post fuses directly to your jawbone through osseointegration and can last a lifetime with proper oral hygiene. Crowns and zirconia bridges typically last 15 to 25+ years." },
  { q: "Why is Prana's pricing so much lower?", a: "We operate an in-house digital lab, use high-volume surgical protocols, and minimize overhead. You receive the same premium-grade materials that $35,000 clinics use. We simply charge what is fair." },
  { q: "I was told I don't have enough bone.", a: "Many patients referred to us after being turned away elsewhere are candidates here. Dr. Rana uses CBCT 3D imaging to evaluate your bone anatomy. If grafting or alternative placement is needed, he performs it in-house." },
  { q: "How quickly can I have teeth?", a: "For All-on-X full-arch cases, provisional teeth can typically be placed the same day, where clinically appropriate. Final zirconia restorations are delivered within 3 to 5 months." },
  { q: "Do you offer payment plans?", a: "Yes. We offer 0% interest financing for qualified patients, with monthly payments as low as $199/month. Applying does not affect your credit score. We also accept most major dental insurance plans." },
  { q: "I'm terrified of dental work. Can you help?", a: "Absolutely. We offer oral and IV sedation options. Dr. Rana and the team are trained to work with anxious patients. We go at your pace, answer every question, and never rush you." },
  { q: "Is Prana Dental a legitimate practice?", a: "Prana Dental is a licensed Florida dental practice led by Dr. Aakash Rana, DMD. Over 3,000 implants placed, 300+ full-arch cases, 4.9-star rating across 200+ Google reviews. Fully accredited and insured." },
];

const Homepage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "",
    callTime: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // [REPLACE WITH FORM ENDPOINT] — wire to your CRM/form handler here.
    // Currently uses mailto: fallback.
    const mailto = `mailto:info@pranadentalmia.com?subject=New Consultation Request&body=Name: ${formData.name}%0APhone: ${formData.phone}%0ATreatment: ${formData.treatment}%0ABest Time: ${formData.callTime}`;
    window.location.href = mailto;
    setFormSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Dental Implants Miami | All-on-4 from $9,999 | Prana Dental"
        description="Permanent teeth in one day. All-on-4 from $9,999. Free CT scan + consultation with Dr. Aakash Rana — 3,000+ implants placed personally. Same-day teeth where clinically appropriate."
        canonical="https://pranadentalmia.com/"
        ogTitle="Prana Dental Miami — Permanent Teeth in One Day"
        ogDescription="Trusted by 3,000+ Miami patients. All-on-4 from $9,999. Free CT scan + free consultation. Dr. Rana personally performs every procedure."
        jsonLd={PRANA_JSONLD}
      />

      {/* ─── STEP 2: HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-prana-charcoal pt-20 overflow-hidden">
        {/* Subtle warm gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-prana-charcoal via-[#1f1c1a] to-[#0f0e0d] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-prana-charcoal via-prana-charcoal/60 to-transparent z-10" />
          {/* IMAGE: Dr. Rana with patient — full-bleed hero. alt="Dr. Rana with patient" */}
          <img
            src={drImg}
            alt="Dr. Rana with patient — Prana Dental Miami"
            className="w-full h-full object-cover object-top"
            width={900}
            height={1200}
          />
        </div>

        <div className="container-main px-6 md:px-12 w-full relative z-10">
          <div className="max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Trust pill */}
              <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-2 mb-8">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} className="fill-prana-terra text-prana-terra" />
                  ))}
                </div>
                <span className="font-body text-[11px] text-white/60 tracking-[0.08em]">4.9 · 200+ Google Reviews</span>
              </div>

              {/* STEP 2 — H1 per spec */}
              <h1 className="font-heading font-light text-[42px] md:text-[64px] leading-[1.06] tracking-[-0.02em] text-white mb-6">
                Permanent Teeth in One Day.<br />
                <em className="italic text-prana-terra">Trusted by 3,000+ Miami Patients.</em>
              </h1>

              {/* STEP 2 — Subheadline per spec */}
              <p className="font-body text-[16px] font-light text-white/65 leading-[1.75] mb-8 max-w-[460px]">
                Dr. Rana personally performs every procedure. All-on-4 from $9,999. Free CT scan included.
              </p>

              {/* STEP 2 — CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 items-start mb-8">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-primary"
                >
                  Book My Free Consultation →
                </a>
                <a href={PHONE_LINK} className="btn-hero-ghost">
                  Call {PHONE}
                </a>
              </div>

              {/* STEP 2 — Trust bar: 4 icons below CTA */}
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {[
                  { icon: Star, label: "4.9 Google Rating (200+ Reviews)" },
                  { icon: BadgeCheck, label: "3,000+ Implants Placed" },
                  { icon: Award, label: "All-on-4 from $9,999" },
                  { icon: Shield, label: "5-Year Implant Guarantee" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <Icon size={13} className="text-prana-terra flex-shrink-0" />
                    <span className="font-body text-[11px] text-white/55 tracking-[0.05em]">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Floating credential card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="hidden lg:flex absolute bottom-16 right-8 xl:right-16 items-center gap-4 bg-white/[0.07] backdrop-blur-sm border border-white/12 rounded-sm px-5 py-4 z-20"
          >
            <Award size={20} className="text-prana-terra flex-shrink-0" />
            <div>
              <p className="font-body text-[11px] text-white font-medium tracking-[0.06em] uppercase">3,000+ Implants Placed</p>
              <p className="font-body text-[11px] text-white/40 mt-0.5">Personally by Dr. Rana · Not delegated</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STEP 3: OFFER STACK ─── */}
      {/* Dark contrast card to pop visually against hero */}
      <section className="bg-[#111009] section-padding border-t border-white/8">
        <div className="container-main">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <p className="eyebrow" style={{ color: "#c9a97a" }}>New Patient Special</p>
            <h2 className="font-heading text-[32px] md:text-[44px] font-light leading-[1.1] text-white mb-10">
              Your New Smile Starts at $0 Today
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
              {[
                { label: "Free Consultation", value: "Valued at $250" },
                { label: "Free 3D CT Scan", value: "Valued at $450" },
                { label: "Free Digital Smile Preview", value: "See your result before we start" },
                { label: "Same-Day Financing Approval", value: "0% interest, payments from $199/mo" },
                { label: "5-Year Implant Guarantee", value: "If anything fails, we fix it free" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-3 bg-white/[0.05] border border-white/10 rounded-sm px-5 py-4">
                  <CheckCircle size={17} className="text-prana-terra flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-[14px] font-medium text-white">{label}</p>
                    <p className="font-body text-[12px] text-white/45 mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/12 pt-8 mb-8">
              <p className="font-body text-[13px] text-white/40 uppercase tracking-[0.12em] mb-1">Total Value</p>
              <p className="font-heading text-[36px] font-light text-prana-terra">$700+ — Yours Free</p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white inline-flex items-center gap-2"
            >
              Claim My Free Offer → <ChevronRight size={14} />
            </a>
            <p className="mt-4 font-body text-[11px] text-white/25 tracking-[0.04em]">
              Limited consult slots available each week · No commitment required
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── AUTHORITY STRIP ─── */}
      <section className="bg-prana-charcoal border-t border-white/8">
        <div className="container-main px-6 md:px-12">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { stat: "3,000+", label: "Implants Placed" },
              { stat: "300+", label: "Full-Arch Transformations" },
              { stat: "4.9★", label: "Google Rating" },
              { stat: "3D", label: "CBCT Imaging on Every Case" },
              { stat: "Same Day", label: "Teeth When Appropriate" },
            ].map((item, i) => (
              <div key={i} className="flex-1 py-5 px-4 md:px-6 text-center min-w-[50%] md:min-w-0">
                <p className="font-heading text-[22px] font-light text-white leading-none mb-1">{item.stat}</p>
                <p className="font-body text-[10px] uppercase tracking-[0.14em] text-white/35">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WELCOME / WHY PRANA ─── */}
      <section className="section-cream section-padding texture-overlay relative">
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="eyebrow">Why Prana Dental</p>
              <h2 className="headline-section text-prana-charcoal mb-8">
                The Experience You Expect.<br />
                <em className="font-heading italic font-light">The Price You Don't.</em>
              </h2>
              <p className="body-text mb-8">
                Most people assume premium care means premium pricing. At Prana, we broke that equation. Same Nobel Biocare implants. Same zirconia restorations. Same surgical precision. Half the overhead — and transparent pricing with no hidden fees.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-10">
                {[
                  { icon: Microscope, title: "3D CBCT Imaging on Every Case", body: "No guesswork. Every implant case is digitally planned with cone-beam CT before we begin." },
                  { icon: Shield, title: "In-House Lab. No Outsourcing.", body: "Our restorations are crafted in our own digital lab — faster timelines, better fit, lower cost." },
                  { icon: HeartHandshake, title: "Dr. Rana Personally Does Every Case", body: "Not an associate. Not a resident. The doctor you consult with is the doctor who operates." },
                ].map(({ icon: Icon, title, body }, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-9 h-9 rounded-sm bg-prana-warm border border-prana-border flex items-center justify-center mt-0.5">
                      <Icon size={15} className="text-prana-terra" />
                    </div>
                    <div>
                      <p className="font-body font-medium text-[14px] text-prana-charcoal mb-1">{title}</p>
                      <p className="font-body text-[13px] text-prana-text-muted leading-[1.6]">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Every major section ends with primary CTA */}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book My Free Consultation →
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <img
                src={clinicRoomImg}
                alt="Prana Dental Miami — modern treatment room"
                className="w-full h-[460px] lg:h-[560px] object-cover"
                loading="lazy"
                width={1400}
                height={900}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── BEFORE & AFTER ─── */}
      <section className="section-white section-padding">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow">Real Patients · Real Results</p>
            <h2 className="headline-section text-prana-charcoal">
              No Filters.<br />
              <em className="font-heading italic font-light">No Gimmicks.</em>
            </h2>
            <p className="body-text max-w-md mx-auto mt-4">
              These are actual Prana Dental patients. Unretouched. Taken at follow-up appointments.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="overflow-hidden">
                {/* IMAGE: All-on-X before/after split — actual patient transformation. Signed consent required. */}
                <img
                  src={baAllonx}
                  alt="All-on-X before and after — full arch restoration"
                  className="w-full h-[380px] md:h-[440px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-body text-[13px] font-medium text-prana-charcoal">Full-Arch All-on-4</p>
                  <p className="font-body text-[11px] text-prana-text-muted mt-0.5 uppercase tracking-[0.1em]">Same-Day Provisional · Final Zirconia at 4 Months</p>
                </div>
                <Link to="/all-on-x" className="font-body text-[11px] uppercase tracking-[0.12em] text-prana-terra hover:text-prana-charcoal transition-colors flex items-center gap-1">
                  See How It Works <ChevronRight size={13} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="overflow-hidden">
                {/* IMAGE: Porcelain veneers before/after — full smile transformation. Natural result. */}
                <img
                  src={baVeneers}
                  alt="Porcelain veneers before and after — full smile transformation"
                  className="w-full h-[380px] md:h-[440px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-body text-[13px] font-medium text-prana-charcoal">Porcelain Veneers</p>
                  <p className="font-body text-[11px] text-prana-text-muted mt-0.5 uppercase tracking-[0.1em]">Full Set · 2 Visits · Digitally Designed</p>
                </div>
                <Link to="/veneers" className="font-body text-[11px] uppercase tracking-[0.12em] text-prana-terra hover:text-prana-charcoal transition-colors flex items-center gap-1">
                  See How It Works <ChevronRight size={13} />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book My Free Consultation →
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── STEP 4: TESTIMONIALS ─── */}
      {/* Placed after Before/After per CRO spec */}
      <section className="section-warm section-padding">
        <div className="container-main">
          <AnimatedSection className="mb-16 text-center">
            {/* Row of 5 yellow stars above section title */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-prana-terra text-prana-terra" />
              ))}
            </div>
            <p className="eyebrow">Patient Stories</p>
            <h2 className="headline-section text-prana-charcoal">
              Real People.<br />
              <em className="font-heading italic font-light">Life-Changing Results.</em>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* [REPLACE WITH REAL QUOTE] — Card 1: swap with verified patient testimonial + signed consent */}
            <AnimatedSection className="bg-white border border-prana-border rounded-lg p-8">
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-prana-terra fill-prana-terra" />
                ))}
              </div>
              <p className="text-prana-charcoal font-heading text-[19px] leading-[1.5] mb-5 font-light">
                "I had 8 teeth missing and was too embarrassed to smile. Dr. Rana gave me a full set of permanent teeth in one day. Best decision of my life."
              </p>
              <div>
                <p className="text-prana-charcoal font-body font-medium text-[14px]">Maria R.</p>
                <p className="text-prana-text-muted font-body text-[12px]">Miami, FL · All-on-4 Patient</p>
              </div>
            </AnimatedSection>

            {/* [REPLACE WITH REAL QUOTE] — Card 2: swap with verified patient testimonial + signed consent */}
            <AnimatedSection delay={0.08} className="bg-white border border-prana-border rounded-lg p-8">
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-prana-terra fill-prana-terra" />
                ))}
              </div>
              <p className="text-prana-charcoal font-heading text-[19px] leading-[1.5] mb-5 font-light">
                "I'd been quoted $40K elsewhere. Prana did the same procedure for under $12K. Same quality, way less cost. No catch."
              </p>
              <div>
                <p className="text-prana-charcoal font-body font-medium text-[14px]">Jorge M.</p>
                <p className="text-prana-text-muted font-body text-[12px]">Doral, FL · Full Arch Implants</p>
              </div>
            </AnimatedSection>

            {/* [REPLACE WITH REAL QUOTE] — Card 3: swap with verified patient testimonial + signed consent */}
            <AnimatedSection delay={0.16} className="bg-white border border-prana-border rounded-lg p-8">
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-prana-terra fill-prana-terra" />
                ))}
              </div>
              <p className="text-prana-charcoal font-heading text-[19px] leading-[1.5] mb-5 font-light">
                "Completely painless. I was awake for it but felt nothing. Dr. Rana explained everything. I walked out with teeth the same day."
              </p>
              <div>
                <p className="text-prana-charcoal font-body font-medium text-[14px]">Ashley T.</p>
                <p className="text-prana-text-muted font-body text-[12px]">Brickell, FL · All-on-X + Sedation</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book My Free Consultation →
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── STEP 5: LEAD CAPTURE FORM ─── */}
      <section className="section-white section-padding" id="contact">
        <div className="container-main">
          <AnimatedSection className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <p className="eyebrow">Get Started Today</p>
              <h2 className="headline-section text-prana-charcoal mb-4">
                Ready to Get Started?<br />
                <em className="font-heading italic font-light">We'll Call You Back in 15 Minutes.</em>
              </h2>
              <p className="body-text">
                Fill out the form below. Dr. Rana's team will call you back within 15 minutes during business hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-prana-cream border border-prana-border rounded-sm p-10 text-center">
                <CheckCircle size={40} className="text-prana-terra mx-auto mb-4" />
                <p className="font-heading text-[22px] font-light text-prana-charcoal mb-2">
                  ✅ Thank you!
                </p>
                <p className="font-body text-[15px] text-prana-text-muted leading-[1.7]">
                  Dr. Rana's team will call you within 15 minutes during business hours (Mon–Sat 8AM–8PM).
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-prana-cream border border-prana-border rounded-sm p-8 space-y-5"
              >
                {/* [REPLACE WITH FORM ENDPOINT] — wire action to your CRM or form service */}
                <div>
                  <label htmlFor="cf-name" className="block font-body text-[12px] uppercase tracking-[0.1em] text-prana-charcoal mb-2">
                    Full Name
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    className="w-full border border-prana-border bg-white px-4 py-3 font-body text-[14px] text-prana-charcoal placeholder:text-prana-text-muted/50 focus:outline-none focus:border-prana-charcoal/40 rounded-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="cf-phone" className="block font-body text-[12px] uppercase tracking-[0.1em] text-prana-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    id="cf-phone"
                    type="tel"
                    required
                    placeholder="(305) 555-0100"
                    value={formData.phone}
                    onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                    className="w-full border border-prana-border bg-white px-4 py-3 font-body text-[14px] text-prana-charcoal placeholder:text-prana-text-muted/50 focus:outline-none focus:border-prana-charcoal/40 rounded-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="cf-treatment" className="block font-body text-[12px] uppercase tracking-[0.1em] text-prana-charcoal mb-2">
                    Treatment I'm Interested In
                  </label>
                  <select
                    id="cf-treatment"
                    required
                    value={formData.treatment}
                    onChange={e => setFormData(p => ({ ...p, treatment: e.target.value }))}
                    className="w-full border border-prana-border bg-white px-4 py-3 font-body text-[14px] text-prana-charcoal focus:outline-none focus:border-prana-charcoal/40 rounded-sm transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a treatment…</option>
                    <option value="All-on-4">All-on-4 Full Arch</option>
                    <option value="Single Implant">Single Implant</option>
                    <option value="Veneers">Veneers</option>
                    <option value="Not Sure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cf-time" className="block font-body text-[12px] uppercase tracking-[0.1em] text-prana-charcoal mb-2">
                    Best Time to Call
                  </label>
                  <select
                    id="cf-time"
                    required
                    value={formData.callTime}
                    onChange={e => setFormData(p => ({ ...p, callTime: e.target.value }))}
                    className="w-full border border-prana-border bg-white px-4 py-3 font-body text-[14px] text-prana-charcoal focus:outline-none focus:border-prana-charcoal/40 rounded-sm transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a time…</option>
                    <option value="Morning">Morning (8AM–12PM)</option>
                    <option value="Afternoon">Afternoon (12PM–5PM)</option>
                    <option value="Evening">Evening (5PM–8PM)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-center justify-center"
                >
                  Get My Free Consultation Call →
                </button>

                <p className="font-body text-[11px] text-prana-text-muted text-center flex items-center justify-center gap-1.5">
                  <Lock size={11} />
                  100% Private. We never share your information. No spam, ever.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="section-warm section-padding">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow">How It Works</p>
            <h2 className="headline-section text-prana-charcoal">
              From Uncertainty<br />
              <em className="font-heading italic font-light">to Permanent Teeth.</em>
            </h2>
          </AnimatedSection>

          {/* Step 1 — with CBCT image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 pb-16 border-b border-prana-border">
            <AnimatedSection>
              <img
                src={cbctImg}
                alt="3D CBCT cone beam CT scanner at Prana Dental Miami"
                className="w-full h-[340px] object-cover"
                loading="lazy"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="font-heading text-[72px] leading-none text-prana-border mb-4 select-none">01</p>
              <h3 className="font-body text-[18px] font-semibold text-prana-charcoal mb-3">Free CT Scan & Consultation</h3>
              <p className="font-body text-[15px] text-prana-text-muted leading-[1.8]">
                A full 3D CBCT scan at no cost. Dr. Rana personally reviews your imaging and tells you exactly what's possible before you commit to anything. No sales pitch. No pressure.
              </p>
            </AnimatedSection>
          </div>

          {/* Steps 2 & 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            {[
              {
                num: "02",
                title: "Your Custom Digital Plan",
                body: "Dr. Rana personally builds a precise digital treatment plan using your scan. You see your expected outcome on screen before we begin. Every implant placement is mapped in 3D.",
              },
              {
                num: "03",
                title: "Walk Out With New Teeth",
                body: "Most full-arch patients leave with provisional teeth the same day. Final zirconia restorations — permanently fixed, fully functional — delivered within 3–5 months.",
              },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <p className="font-heading text-[72px] leading-none text-prana-border mb-4 select-none">{step.num}</p>
                <h3 className="font-body text-[18px] font-semibold text-prana-charcoal mb-3">{step.title}</h3>
                <p className="font-body text-[15px] text-prana-text-muted leading-[1.8]">{step.body}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book My Free Consultation →
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── DOCTOR ─── */}
      <section className="section-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection className="relative">
              {/* IMAGE: Dr. Rana — consultation or surgical shot. Second unique photo preferred. */}
              <img
                src={drImg}
                alt="Dr. Aakash Rana, DMD — Implant Surgeon, Prana Dental Miami"
                className="w-full h-[500px] lg:h-[600px] object-cover object-top"
                loading="lazy"
              />
              {/* Floating stats card */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-auto bg-prana-charcoal/95 backdrop-blur-sm border border-white/10 px-6 py-4">
                <div className="flex gap-8">
                  {[["3,000+", "Implants"], ["300+", "Full Arches"], ["10+", "Years"]].map(([n, l]) => (
                    <div key={l}>
                      <p className="font-heading text-[22px] font-light text-white leading-none">{n}</p>
                      <p className="font-body text-[10px] text-white/40 uppercase tracking-[0.12em] mt-1">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:pt-8">
              <p className="eyebrow">Dr. Aakash Rana, DMD</p>
              <h2 className="headline-section text-prana-charcoal mb-6">
                The Surgeon Who<br />
                <em className="font-heading italic font-light">Does Every Case.</em>
              </h2>
              <p className="body-text mb-5">
                Dr. Rana personally has placed over 3,000 implants. Not delegated to associates. Not supervised by residents. Every scan reviewed, every surgical plan built, every implant placed by him.
              </p>
              <p className="body-text mb-8">
                When it comes to your jaw, your bite, your face — experience isn't a marketing bullet. It's the only thing that matters.
              </p>

              {/* Credential badges */}
              <div className="flex flex-wrap gap-2 mb-10">
                {[
                  "DMD, Doctor of Dental Medicine",
                  "Advanced Implantology",
                  "CBCT 3D Imaging Certified",
                  "IV Sedation Certified",
                  "Nobel Biocare Trained",
                  "Straumann Trained",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="inline-block font-body text-[11px] tracking-[0.06em] text-prana-text-muted border border-prana-border px-3 py-1.5 rounded-sm uppercase"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book My Free Consultation →
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── OBJECTIONS (DARK) ─── */}
      <section className="section-dark section-padding">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow">Honest Answers</p>
            <h2 className="headline-section text-white">
              We Know What<br />
              <em className="font-heading italic font-light">You're Wondering.</em>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
            {[
              {
                icon: Zap,
                title: "Is it going to hurt?",
                body: "Over 90% of patients rate their experience as easier than expected. We use advanced local anesthesia and offer IV sedation. The surgery is controlled, precise, and far more comfortable than most people imagine.",
              },
              {
                icon: Shield,
                title: "Why is it so much cheaper?",
                body: "In-house digital lab. High-volume surgical protocols. Transparent pricing — no hidden fees. You get the same Nobel Biocare and Straumann-grade materials used at $35,000 clinics.",
              },
              {
                icon: Award,
                title: "I was told I'm not a candidate.",
                body: "Many patients turned away elsewhere qualify here. Dr. Rana personally uses CBCT 3D imaging to evaluate your exact bone anatomy. A 'no' elsewhere is often a 'yes' at Prana.",
              },
            ].map((card, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.08}
                className="border-b md:border-b-0 md:border-r border-white/10 last:border-0 py-10 md:py-0 md:px-10 first:pl-0 last:pr-0"
              >
                <card.icon size={20} className="text-prana-terra mb-5" />
                <h3 className="font-body text-[15px] font-semibold text-white mb-4 leading-[1.4]">{card.title}</h3>
                <p className="font-body text-[14px] text-white/50 leading-[1.8]">{card.body}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-white">
              Book My Free Consultation →
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-cream section-padding texture-overlay relative">
        <div className="container-main relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow">Treatments</p>
            <h2 className="headline-section text-prana-charcoal">
              Permanent Teeth That Last a Lifetime.<br />
              <em className="font-heading italic font-light">Transparent Pricing — No Hidden Fees.</em>
            </h2>
          </AnimatedSection>

          {/* Featured All-on-X card */}
          <AnimatedSection className="mb-6">
            <div className="bg-prana-charcoal text-white p-8 md:p-10 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-prana-terra font-body font-medium mb-3">Featured · Most Popular</p>
                <h3 className="font-heading text-[32px] md:text-[40px] font-light leading-[1.1] text-white mb-3">All-on-X Full Arch</h3>
                <p className="font-heading text-[22px] font-light text-prana-terra mb-2">From $9,999 / arch</p>
                <p className="font-body text-[13px] text-white/30 line-through mb-6">Most Miami clinics: $25,000–$35,000</p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Full arch of permanent zirconia teeth that last a lifetime",
                    "4–6 titanium implants per arch",
                    "Same-day provisional teeth (where appropriate)",
                    "Every case 3D-planned with CBCT imaging",
                    "Final zirconia in 3–5 months",
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-[14px] text-white/60">
                      <span className="text-prana-terra mt-1.5 text-[8px] flex-shrink-0">●</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/all-on-x" className="btn-white inline-flex items-center gap-2">
                  See How All-on-X Works <ChevronRight size={14} />
                </Link>
              </div>
              <div className="hidden md:block">
                <img
                  src={patientSmileImg}
                  alt="Patient result — All-on-X full arch at Prana Dental Miami"
                  className="w-full h-[320px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Remaining services grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OfferCard
              label="Single Implant"
              headline="From $1,850 cash"
              bullets={[
                "Titanium implant + custom zirconia crown",
                "Looks, feels, and bites like your natural tooth",
                "Placed in as little as one hour",
                "Permanent teeth that last a lifetime",
              ]}
              link="/dental-implants"
              delay={0.08}
            />
            <OfferCard
              label="Porcelain Veneers"
              headline="From $10,000 (full set)"
              bullets={[
                "Ultra-thin custom porcelain shells",
                "Digitally designed before treatment begins",
                "Natural translucency and lifelike appearance",
                "Get your new smile in as few as 2 visits",
              ]}
              link="/veneers"
              delay={0.16}
            />
            <OfferCard
              label="Orthodontics"
              headline="From $3,500"
              bullets={[
                "Clear aligners and traditional braces",
                "Custom plans for teens and adults",
                "Flexible financing available",
              ]}
              link="/pricing"
              delay={0.24}
            />
          </div>

          <AnimatedSection className="text-center mt-10">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary mr-4">
              Book My Free Consultation →
            </a>
            <Link to="/pricing" className="font-body text-[13px] text-prana-charcoal underline underline-offset-4 hover:no-underline">
              View Full Pricing & Services →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FINANCING ─── */}
      <section className="section-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="eyebrow">Financing</p>
              <h2 className="headline-section text-prana-charcoal mb-8">
                Your Smile Shouldn't<br />
                <em className="font-heading italic font-light">Wait for Your Budget.</em>
              </h2>
              <p className="body-text mb-6">
                We offer 0% interest financing for qualified patients. Monthly payments start at $199/month. Apply before your appointment — most decisions come back in minutes.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "0% interest plans available (OAC)",
                  "Monthly payments from $199/month",
                  "No down payment required on approved credit",
                  "Applying does not affect your credit score",
                  "Most major dental insurances accepted",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 font-body text-[14px] text-prana-text-muted">
                    <span className="text-prana-terra mt-1 flex-shrink-0 text-[8px]">●</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book My Free Consultation →
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="border border-prana-border p-8 md:p-10 bg-prana-cream">
                <p className="eyebrow">Example Plan</p>
                <h3 className="font-heading text-[26px] font-light text-prana-charcoal mb-6">All-on-X · Both Arches</h3>
                <div className="space-y-5 divide-y divide-prana-border">
                  {[
                    ["Total Investment", "$20,000"],
                    ["Monthly Payment", "~$333 / mo"],
                    ["Term", "60 months"],
                    ["Interest", "0% (OAC)"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center font-body text-[15px] pt-5 first:pt-0">
                      <span className="text-prana-text-muted">{label}</span>
                      <span className="text-prana-charcoal font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 font-body text-[12px] text-prana-text-muted">Individual plans vary. Subject to credit approval.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── YOUTUBE / VIDEO CTA ─── */}
      <section className="section-cream section-padding texture-overlay relative">
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="eyebrow">Watch Dr. Rana</p>
              <h2 className="headline-section text-prana-charcoal mb-6">
                See the Work.<br />
                <em className="font-heading italic font-light">Before You Decide.</em>
              </h2>
              <p className="body-text mb-8">
                Dr. Rana personally shares real surgical cases, patient education, and honest answers on YouTube. Watch before you book — that's the point.
              </p>
              <a
                href="https://youtube.com/@DoctorRanaDDS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Watch on YouTube <ChevronRight size={14} />
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="aspect-video w-full bg-prana-charcoal overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <a
                    href="https://youtube.com/@DoctorRanaDDS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 group"
                    aria-label="Watch Dr. Rana on YouTube"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-prana-terra/80 transition-colors duration-300">
                      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white ml-1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <span className="font-body text-[11px] uppercase tracking-[0.14em] text-white/60">@DoctorRanaDDS</span>
                  </a>
                </div>
                <img
                  src={clinicRoomImg}
                  alt="Dr. Rana YouTube channel — dental implant education"
                  className="w-full h-full object-cover opacity-30"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── MIAMI / SPANISH CTA ─── */}
      <section className="relative overflow-hidden">
        <img
          src={clinicHallwayImg}
          alt="Prana Dental Miami — Edgewater studio"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-prana-charcoal/82" />
        <div className="relative z-10 container-main px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="eyebrow">Miami's Implant Practice</p>
              <h2 className="headline-section text-white mb-5">
                Serving Miami,<br />
                <em className="font-heading italic font-light">Brickell, Coral Gables,<br />Hialeah & Beyond.</em>
              </h2>
              <p className="font-body text-[15px] text-white/55 leading-[1.8] mb-8">
                Located at 3050 Biscayne Blvd, Suite 703. Open Monday through Saturday, 8AM to 8PM. Walk-ins welcome for dental emergencies.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-white">
                Book My Free Consultation →
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="border border-white/15 p-8 md:p-10 backdrop-blur-sm bg-white/5">
              <p className="font-body text-[11px] uppercase tracking-[0.2em] text-prana-terra mb-4">Hablamos Español</p>
              <h3 className="font-heading text-[28px] font-light text-white mb-4">
                Atendemos a pacientes hispanohablantes.
              </h3>
              <p className="font-body text-[14px] text-white/55 leading-[1.8] mb-6">
                Todo el equipo habla español. Consultas, diagnósticos, y planes de tratamiento completamente en español sin costo adicional.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-white">
                Reservar Consulta Gratuita
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection className="lg:sticky lg:top-32">
              <p className="eyebrow">Common Questions</p>
              <h2 className="headline-section text-prana-charcoal mb-6">
                Let's Answer<br />
                <em className="font-heading italic font-light">All of Them.</em>
              </h2>
              <p className="body-text mb-8">
                We believe in total transparency. Ask us anything — about the procedure, the price, the timeline, the pain. You deserve honest answers before you decide.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Talk to Dr. Rana's Team →
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <AccordionFAQ items={FAQ_ITEMS} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── STEP 6: RISK REVERSAL ─── */}
      <section className="section-cream section-padding texture-overlay relative">
        <div className="container-main relative z-10">
          <AnimatedSection className="text-center mb-14">
            <p className="eyebrow">Our Promise to You</p>
            <h2 className="headline-section text-prana-charcoal">
              Zero Risk.<br />
              <em className="font-heading italic font-light">Zero Pressure.</em>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* Risk reversal card 1 */}
            <AnimatedSection className="border border-prana-border bg-white p-8 rounded-sm">
              <Shield size={28} className="text-prana-terra mb-5" />
              <h3 className="font-body text-[16px] font-semibold text-prana-charcoal mb-3">
                5-Year Implant Guarantee
              </h3>
              <p className="font-body text-[14px] text-prana-text-muted leading-[1.7]">
                If anything goes wrong with your implant in 5 years, we fix it. Free.
              </p>
            </AnimatedSection>

            {/* Risk reversal card 2 */}
            <AnimatedSection delay={0.08} className="border border-prana-border bg-white p-8 rounded-sm">
              <HeartHandshake size={28} className="text-prana-terra mb-5" />
              <h3 className="font-body text-[16px] font-semibold text-prana-charcoal mb-3">
                Sedation So You Feel Nothing
              </h3>
              <p className="font-body text-[14px] text-prana-text-muted leading-[1.7]">
                IV sedation available. Most patients don't remember the procedure.
              </p>
            </AnimatedSection>

            {/* Risk reversal card 3 */}
            <AnimatedSection delay={0.16} className="border border-prana-border bg-white p-8 rounded-sm">
              <BadgeCheck size={28} className="text-prana-terra mb-5" />
              <h3 className="font-body text-[16px] font-semibold text-prana-charcoal mb-3">
                Price Match Promise
              </h3>
              <p className="font-body text-[14px] text-prana-text-muted leading-[1.7]">
                Show us a written quote from another licensed implant dentist in Miami. We'll match or beat it.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book My Free Consultation →
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <FullWidthCTA />
    </>
  );
};

export default Homepage;

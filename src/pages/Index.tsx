import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Shield, Clock, Award, ChevronRight, Microscope, Zap, HeartHandshake } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { OfferCard } from "@/components/OfferCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { AccordionFAQ } from "@/components/AccordionFAQ";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";
import { PHONE, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";
import drImg from "@/assets/dr-rana.jpg";
import hallwayImg from "@/assets/clinic-hallway.jpg";
import baAllonx from "@/assets/before-after-allonx.jpg";
import baVeneers from "@/assets/before-after-veneers.jpg";

const FAQ_ITEMS = [
  { q: "Is the procedure painful?", a: "Over 90% of our patients describe the experience as easier than they expected. We use advanced local anesthesia and offer oral and IV sedation. Most rate their discomfort at 2 out of 10 or less — significantly less painful than a tooth extraction." },
  { q: "How long do dental implants last?", a: "Titanium implants are designed to be permanent. The post fuses directly to your jawbone through osseointegration — and can last a lifetime with proper oral hygiene. Crowns and zirconia bridges typically last 15–25+ years." },
  { q: "Why is Prana's pricing so much lower?", a: "We operate an in-house digital lab, use high-volume surgical protocols, and minimize overhead. You receive the same premium-grade materials — Nobel Biocare, Straumann, full-arch zirconia — that $35,000 clinics use. We simply charge what's fair." },
  { q: "I was told I don't have enough bone.", a: "Many patients referred to us after being turned away elsewhere are candidates here. Dr. Rana uses CBCT 3D imaging to evaluate your bone anatomy. If grafting or alternative placement is needed, he performs it in-house." },
  { q: "How quickly can I have teeth?", a: "For All-on-X full-arch cases, provisional teeth can typically be placed the same day — where clinically appropriate. Final zirconia restorations are delivered within 3–5 months." },
  { q: "Do you offer payment plans?", a: "Yes. We offer 0% interest financing for qualified patients, with monthly payments as low as $199/month. Applying does not affect your credit score. We also accept most major dental insurance plans." },
  { q: "I'm terrified of dental work. Can you help?", a: "Absolutely. We offer oral and IV sedation options. Dr. Rana and the team are trained to work with anxious patients. We go at your pace, answer every question, and never rush you." },
  { q: "Is Prana Dental a legitimate practice?", a: "Prana Dental is a licensed Florida dental practice led by Dr. Aakash Rana, DMD. Over 3,000 implants placed, 300+ full-arch cases, 4.9-star rating across 200+ Google reviews. Fully accredited and insured." },
];

const Homepage = () => (
  <>
    <SEO
      title="Dental Implants Miami | All-on-4 from $9,999 | Prana Dental"
      description="Get dental implants and All-on-4 in Miami starting at $1,850. Free CT scan + consultation with Dr. Aakash Rana. Same-day teeth where clinically appropriate."
      canonical="https://pranadentalmia.com/"
      ogTitle="Prana Dental Miami — Miami's Implant Authority"
      ogDescription="Luxury implant care at disruptive prices. Free CT scan + consultation. All-on-4 from $9,999. Single implants from $1,850."
      jsonLd={PRANA_JSONLD}
    />

    {/* ─── HERO ─── */}
    <section className="relative min-h-screen flex items-center bg-prana-charcoal pt-20 overflow-hidden">
      {/* Subtle warm gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-prana-charcoal via-[#1f1c1a] to-[#0f0e0d] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-prana-charcoal via-prana-charcoal/60 to-transparent z-10" />
        {/* IMAGE PLACEHOLDER: Hero right panel — Dr. Rana full-length portrait, studio lit, clinical white coat,
            confident posture, warm neutral background. Crop: portrait, subject fills right 2/3 of frame.
            Final asset: professional photographer session at clinic. */}
        <img
          src={drImg}
          alt="Dr. Aakash Rana — Implant Dentist, Prana Dental Miami"
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

            <h1 className="font-heading font-light text-[46px] md:text-[70px] leading-[1.04] tracking-[-0.02em] text-white mb-7">
              Stop Hiding<br />Your Smile.<br />
              <em className="italic text-prana-terra">Start Living It.</em>
            </h1>

            <p className="font-body text-[16px] font-light text-white/60 leading-[1.75] mb-5 max-w-[440px]">
              Dr. Rana has placed 3,000+ implants personally. Every case is planned and performed by him — not delegated. Life-changing results at prices that don't require a second mortgage.
            </p>

            {/* Pricing anchor — prominent */}
            <div className="flex flex-wrap gap-3 mb-9">
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-sm px-3.5 py-2 font-body text-[12px] text-white/80 tracking-[0.06em]">
                All-on-4 · <strong className="text-white">From $9,999</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-sm px-3.5 py-2 font-body text-[12px] text-white/80 tracking-[0.06em]">
                Single Implant · <strong className="text-white">From $1,850</strong>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary"
              >
                Book Free Consultation
              </a>
              <a href={PHONE_LINK} className="btn-hero-ghost">
                Call {PHONE}
              </a>
            </div>
            <p className="mt-4 font-body text-[12px] text-white/30 tracking-[0.04em]">
              Free CT scan included · No commitment · Same-day availability
            </p>
          </motion.div>
        </div>

        {/* Floating credential card — bottom-left of image */}
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
              Most people assume premium care means premium pricing. At Prana, we broke that equation. Same Nobel Biocare implants. Same zirconia restorations. Same surgical precision. Half the overhead — and half the price.
            </p>
            {/* Feature highlights */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Microscope, title: "3D CBCT Imaging on Every Case", body: "No guesswork. Every implant case is digitally planned with cone-beam CT before we begin." },
                { icon: Shield, title: "In-House Lab. No Outsourcing.", body: "Our restorations are crafted in our own digital lab — faster timelines, better fit, lower cost." },
                { icon: HeartHandshake, title: "Dr. Rana Does Every Case", body: "Not an associate. Not a resident. The doctor you consult with is the doctor who operates." },
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
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            {/* IMAGE PLACEHOLDER: Clinic interior — modern treatment room or consultation area.
                Clean, premium, warm lighting. Shows: advanced equipment (CBCT machine or chair),
                not generic. Tone: luxury healthcare. NOT stock dentist office.
                Search terms: "modern dental clinic interior luxury miami boutique practice" */}
            <img
              src={hallwayImg}
              alt="Prana Dental Miami — modern luxury implant studio"
              className="w-full h-[460px] lg:h-[560px] object-cover"
              loading="lazy"
              width={1200}
              height={800}
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
              {/* IMAGE PLACEHOLDER: All-on-X before/after split — actual patient transformation.
                  Must be real patient with signed consent. Split format preferred.
                  Tone: clinical but emotionally impactful.
                  Asset needed: high-res before+after set from clinic files. */}
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
                Details <ChevronRight size={13} />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="overflow-hidden">
              {/* IMAGE PLACEHOLDER: Porcelain veneers before/after — full smile transformation.
                  Show natural result, not overly white/fake-looking.
                  Composition: close-up smile, warm lighting, natural skin tones.
                  Asset needed: high-res veneer case from clinic. */}
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
                Details <ChevronRight size={13} />
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link to="/all-on-x" className="btn-ghost inline-flex items-center gap-2">
            See More Patient Transformations <ChevronRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    {/* ─── PROCESS ─── */}
    <section className="section-warm section-padding">
      <div className="container-main">
        <AnimatedSection className="text-center mb-20">
          <p className="eyebrow">How It Works</p>
          <h2 className="headline-section text-prana-charcoal">
            From Uncertainty<br />
            <em className="font-heading italic font-light">to a Permanent Smile.</em>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            {
              num: "01",
              title: "Free CT Scan & Consultation",
              body: "A full 3D CBCT scan at no cost. No sales pitch. Dr. Rana reviews your imaging personally and tells you exactly what's possible — before you commit to anything.",
            },
            {
              num: "02",
              title: "Your Custom Digital Plan",
              body: "Dr. Rana builds a precise digital treatment plan using your scan. You see your expected outcome on screen before we begin. Every placement is mapped in 3D.",
            },
            {
              num: "03",
              title: "Walk Out With New Teeth",
              body: "Most full-arch patients leave with provisional teeth the same day. Final zirconia restorations — permanently fixed, fully functional — delivered within 3–5 months.",
            },
          ].map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="relative">
              <p className="font-heading text-[80px] leading-none text-prana-border mb-5 select-none">{step.num}</p>
              <h3 className="font-body text-[16px] font-semibold text-prana-charcoal mb-3 tracking-[-0.01em]">{step.title}</h3>
              <p className="font-body text-[14px] text-prana-text-muted leading-[1.75]">{step.body}</p>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-16">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2">
            Book Your Free CT Scan <ChevronRight size={14} />
          </a>
        </AnimatedSection>
      </div>
    </section>

    {/* ─── DOCTOR ─── */}
    <section className="section-white section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimatedSection className="relative">
            {/* IMAGE PLACEHOLDER: Dr. Rana — ideally a different shot than the hero.
                Options: (1) consultation shot (Dr. Rana with patient at table, reviewing imaging),
                (2) surgical shot (gloves, procedure in progress), (3) clinic portrait (relaxed, lab coat).
                Tone: confident authority, approachable, not corporate stock-photo.
                Asset needed: second hero-quality photo from clinic photographer session. */}
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
              Dr. Rana has placed over 3,000 implants — personally. Not delegated to associates. Not supervised by residents. Every scan reviewed, every surgical plan built, every implant placed by him.
            </p>
            <p className="body-text mb-8">
              When it comes to your jaw, your bite, your face — experience isn't a marketing bullet. It's the only thing that matters.
            </p>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-2">
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

            <div className="mt-10">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Consult With Dr. Rana
              </a>
            </div>
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
              body: "In-house digital lab. High-volume surgical protocols. Minimal overhead. You get the same Nobel Biocare and Straumann-grade materials used at $35,000 clinics. We just don't believe in inflated margins.",
            },
            {
              icon: Award,
              title: "I was told I'm not a candidate.",
              body: "Many patients turned away elsewhere qualify here. Dr. Rana uses CBCT 3D imaging to evaluate your exact bone anatomy. If grafting is needed, he performs it in-house. A 'no' elsewhere is often a 'yes' at Prana.",
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
      </div>
    </section>

    {/* ─── SERVICES ─── */}
    <section className="section-cream section-padding texture-overlay relative">
      <div className="container-main relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="eyebrow">Treatments</p>
          <h2 className="headline-section text-prana-charcoal">
            Built to Last.<br />
            <em className="font-heading italic font-light">Priced to Make Sense.</em>
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
                  "Full arch of permanent zirconia teeth",
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
                Learn About All-on-X <ChevronRight size={14} />
              </Link>
            </div>
            <div className="hidden md:block">
              {/* IMAGE PLACEHOLDER: All-on-X result — smiling patient (50s-60s), natural-looking full arch.
                  Warm, high-contrast smile close-up OR before-after diptych in premium frame.
                  Tone: lifestyle, confident, not clinical. NOT stock dentist smile.
                  Search: "dental implant smile transformation middle-aged miami lifestyle portrait" */}
              <img
                src={baAllonx}
                alt="All-on-X full arch result at Prana Dental"
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
              "Permanent — designed to last decades",
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
              "Results in as few as 2 visits",
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
            <Link to="/pricing" className="btn-primary">View All Pricing</Link>
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

    {/* ─── TESTIMONIALS ─── */}
    <section className="section-warm section-padding">
      <div className="container-main">
        <AnimatedSection className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">Patient Stories</p>
              <h2 className="headline-section text-prana-charcoal">
                What Happens When<br />
                <em className="font-heading italic font-light">People Finally Fix It.</em>
              </h2>
            </div>
            {/* Google badge */}
            <a
              href="https://g.co/kgs/PranaDental"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-prana-border bg-white px-5 py-3.5 rounded-sm self-start md:self-auto hover:border-prana-charcoal/30 transition-colors flex-shrink-0"
            >
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-prana-terra text-prana-terra" />
                  ))}
                </div>
                <span className="font-body text-[11px] text-prana-charcoal font-medium">4.9 on Google</span>
              </div>
              <div className="w-px h-8 bg-prana-border" />
              <div>
                <p className="font-body text-[11px] text-prana-text-muted leading-tight">200+ verified</p>
                <p className="font-body text-[11px] text-prana-text-muted leading-tight">patient reviews</p>
              </div>
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            name="Maria L."
            location="Coral Gables"
            badge="All-on-X Patient"
            quote="I had been hiding my smile for eight years. Other clinics quoted me $35,000. Dr. Rana did my full arch for a fraction of that — and the results are more beautiful than I imagined."
          />
          <TestimonialCard
            name="Robert M."
            location="Brickell"
            badge="All-on-X Patient"
            quote="I have been afraid of dentists my entire life. Dr. Rana and his team were patient with every question. I was in and out in one day — with a full set of teeth."
            delay={0.08}
          />
          <TestimonialCard
            name="Carlos G."
            location="Hialeah"
            badge="All-on-X Patient"
            quote="Vine a Prana con mucho miedo. Hoy tengo una sonrisa completamente nueva y me costó la mitad de lo que otros me cotizaron."
            translationNote="I came to Prana afraid. Today I have a completely new smile — and it cost half of what others quoted me."
            delay={0.12}
          />
          <TestimonialCard
            name="Stephanie R."
            location="Wynwood"
            badge="Porcelain Veneers"
            quote="My veneers look so natural that people don't know I have them. They just say I look different — better. I have never felt this confident in my life."
            delay={0.16}
          />
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
              Ask Us Directly
            </a>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <AccordionFAQ items={FAQ_ITEMS} />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ─── FINAL CTA ─── */}
    <FullWidthCTA />
  </>
);

export default Homepage;

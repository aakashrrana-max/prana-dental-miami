import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AccordionFAQ } from "@/components/AccordionFAQ";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";
import { WHATSAPP_LINK, INSTAGRAM, YOUTUBE } from "@/lib/constants";
import drImg from "@/assets/dr-rana.jpg";
import hallwayImg from "@/assets/clinic-hallway.jpg";

const FAQ = [
  { q: "Does Dr. Rana perform every procedure himself?", a: "Yes. Every consultation, surgical plan, and implant placement is done by Dr. Rana personally. We do not delegate surgical cases to associates or residents." },
  { q: "What implant systems does Dr. Rana use?", a: "Nobel Biocare and Straumann - two of the most clinically validated implant systems in the world. The same brands used by top academic centers and specialty practices charging 2 to 3x more." },
  { q: "Is Prana Dental accredited?", a: "Prana Dental is a fully licensed Florida dental practice. Dr. Rana holds a DMD from a U.S.-accredited dental school, is CBCT certified, and holds IV sedation credentials." },
  { q: "How do I get started?", a: "Book a free consultation and CT scan. No commitment, no pressure. Dr. Rana will review your case and tell you exactly what's possible." },
];

const About = () => (
  <>
    <SEO
      title="About Dr. Aakash Rana | Prana Dental Miami"
      description="Meet Dr. Aakash Rana, DMD - implant surgeon and founder of Prana Dental Miami. 3,000+ implants placed personally. Nobel Biocare trained. IV sedation certified."
      canonical="https://pranadentalmia.com/about"
      jsonLd={PRANA_JSONLD}
    />

    {/* ─── HERO ─── */}
    <section className="relative min-h-[80vh] flex items-center bg-prana-charcoal pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-prana-charcoal via-[#1f1c1a] to-[#0f0e0d]" />
      <div className="absolute top-0 right-0 w-[48%] h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-prana-charcoal via-prana-charcoal/50 to-transparent z-10" />
        <img src={drImg} alt="Dr. Aakash Rana, DMD" className="w-full h-full object-cover object-top" />
      </div>
      <div className="container-main px-6 md:px-12 w-full relative z-10">
        <div className="max-w-[540px]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow mb-5">Meet the Doctor</p>
            <h1 className="font-heading font-light text-[44px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
              Dr. Aakash Rana,<br />
              <em className="italic text-prana-terra">DMD.</em>
            </h1>
            <p className="font-body text-[16px] font-light text-white/60 leading-[1.75] mb-8 max-w-[420px]">
              Implant surgeon. Clinic founder. The person who personally plans and places every case at Prana Dental Miami.
            </p>
            <div className="flex flex-wrap gap-3">
              {["3,000+ Implants", "300+ Full Arches", "10+ Years", "Nobel Biocare Trained"].map(b => (
                <span key={b} className="font-body text-[11px] border border-white/15 text-white/60 px-3 py-1.5 rounded-2xl uppercase tracking-[0.06em]">{b}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ─── BIO ─── */}
    <section className="section-white section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <p className="eyebrow">The Philosophy</p>
            <h2 className="headline-section text-prana-charcoal mb-8">
              Built to Give Patients<br />
              <em className="font-heading italic font-light">an Honest Option.</em>
            </h2>
            <p className="body-text mb-5">
              Prana Dental was founded on a direct observation: premium implant care in Miami was priced as if the surgery were made of gold. The implants weren't. The materials weren't. The markups were.
            </p>
            <p className="body-text mb-5">
              Dr. Rana set out to build a practice that used the same Nobel Biocare and Straumann-grade systems - the actual clinical gold standard - without the institutional overhead that pushes All-on-X cases past $30,000.
            </p>
            <p className="body-text mb-8">
              The result: a surgical practice where patients get honest pricing, one doctor who does their own work, and outcomes that speak for themselves across 3,000+ cases.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["DMD", "Doctor of Dental Medicine"],
                ["CBCT Certified", "3D Cone Beam Imaging"],
                ["IV Sedation", "Licensed & Certified"],
                ["Nobel Biocare", "Trained & Preferred Provider"],
                ["Straumann", "Certified Placement"],
                ["10+ Years", "Surgical Experience"],
              ].map(([label, sub]) => (
                <div key={label} className="border border-prana-border p-4">
                  <p className="font-body text-[13px] font-semibold text-prana-charcoal">{label}</p>
                  <p className="font-body text-[12px] text-prana-text-muted mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            {/* IMAGE PLACEHOLDER: Clinic interior shot showing treatment room or reception
                Asset: clinic-room.jpg (downloading) */}
            <img
              src={hallwayImg}
              alt="Prana Dental Miami - clinic interior"
              className="w-full h-[500px] object-cover mb-6"
              loading="lazy"
            />
            <div className="bg-prana-cream border border-prana-border p-6">
              <p className="font-body text-[12px] uppercase tracking-[0.14em] text-prana-text-muted mb-4">Follow Dr. Rana</p>
              <div className="flex gap-4">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-ghost text-[11px] py-2.5 px-5">Instagram</a>
                <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="btn-ghost text-[11px] py-2.5 px-5">YouTube</a>
              </div>
              <p className="font-body text-[12px] text-prana-text-muted mt-4 leading-[1.6]">
                Dr. Rana shares surgical cases, patient education, and clinical insights at <strong>@doctorrana.dds</strong>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ─── APPROACH ─── */}
    <section className="section-dark section-padding">
      <div className="container-main">
        <AnimatedSection className="text-center mb-16">
          <p className="eyebrow">The Approach</p>
          <h2 className="headline-section text-white">How We're Different.</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
          {[
            { n: "01", title: "One Surgeon. Every Case.", body: "No associates. No residents. No bait-and-switch. The doctor you meet is the doctor who operates. This is not standard at large dental groups." },
            { n: "02", title: "3D Planning Before Anything.", body: "Every implant case is CBCT-scanned and digitally planned before a single incision. Guided surgery means less trauma, faster healing, and more predictable outcomes." },
            { n: "03", title: "In-House Lab. Real Savings.", body: "Our restorations are fabricated in our own digital lab. No outsourcing to third-party labs with markup. Faster timelines, better fit, and lower cost passed directly to you." },
          ].map((c, i) => (
            <AnimatedSection key={i} delay={i * 0.08} className="border-b md:border-b-0 md:border-r border-white/10 last:border-0 py-10 md:py-0 md:px-10 first:pl-0 last:pr-0">
              <p className="font-heading text-[48px] font-light text-white/10 mb-4 leading-none">{c.n}</p>
              <h3 className="font-body text-[15px] font-semibold text-white mb-3">{c.title}</h3>
              <p className="font-body text-[14px] text-white/50 leading-[1.8]">{c.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ─── FAQ ─── */}
    <section className="section-white section-padding">
      <div className="container-main max-w-[700px] mx-auto">
        <AnimatedSection className="mb-12">
          <p className="eyebrow">Common Questions</p>
          <h2 className="headline-section text-prana-charcoal">About the Practice.</h2>
        </AnimatedSection>
        <AccordionFAQ items={FAQ} />
      </div>
    </section>

    <FullWidthCTA />
  </>
);

export default About;

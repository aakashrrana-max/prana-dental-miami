import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AccordionFAQ } from "@/components/AccordionFAQ";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/constants";
import hallwayImg from "@/assets/clinic-hallway.jpg";
import clinicRoomImg from "@/assets/clinic-room.jpg";

const FAQ = [
  { q: "What types of sedation do you offer?", a: "We offer oral sedation (pill taken before the appointment) and IV sedation (administered intravenously for deeper relaxation). Dr. Rana is licensed and certified for both. We'll recommend the right level based on your anxiety and the procedure." },
  { q: "Will I be unconscious?", a: "Not with standard IV sedation - you'll be in a deeply relaxed, twilight state. Most patients have little or no memory of the procedure. General anesthesia (fully unconscious) is different and rarely needed for implant surgery." },
  { q: "Is sedation safe for implant surgery?", a: "Yes. IV sedation for dental procedures has an excellent safety record. Dr. Rana monitors vitals throughout. Most patients are far more surprised by how easy the experience was than by any discomfort." },
  { q: "How long does the sedation last?", a: "IV sedation wears off within a few hours. You'll need someone to drive you home. Most patients feel normal by the evening. Oral sedation is milder and fades faster." },
  { q: "Does sedation cost extra?", a: "IV sedation is an add-on to the procedure cost. We'll provide the exact cost in your treatment plan. Many patients find it worth every dollar for the peace of mind and the ability to complete more treatment in fewer visits." },
];

const Sedation = () => (
  <>
    <SEO
      title="Sedation Dentistry Miami | Anxiety-Free Implants | Prana Dental"
      description="Terrified of dental work? Prana Dental Miami offers IV sedation and oral sedation for implant surgery and complex procedures. Dr. Rana is licensed and certified."
      canonical="https://pranadentalmia.com/sedation"
      jsonLd={PRANA_JSONLD}
    />

    {/* ─── HERO ─── */}
    <section className="relative min-h-[85vh] flex items-center bg-prana-charcoal pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-prana-charcoal via-[#1f1c1a] to-[#0f0e0d]" />
      <div className="absolute top-0 right-0 w-[48%] h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-prana-charcoal via-prana-charcoal/55 to-transparent z-10" />
        {/* IMAGE: clinic-room.jpg - premium treatment room, clean and calm */}
        <img src={clinicRoomImg} alt="Calm, premium treatment room at Prana Dental Miami" className="w-full h-full object-cover" />
      </div>

      <div className="container-main px-6 md:px-12 w-full relative z-10">
        <div className="max-w-[540px]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow mb-5">Sedation Dentistry Miami</p>
            <h1 className="font-heading font-light text-[44px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
              Afraid of the Dentist?<br />
              <em className="italic text-prana-terra">We've Heard That Before.</em>
            </h1>
            <p className="font-body text-[16px] font-light text-white/60 leading-[1.75] mb-8 max-w-[420px]">
              Dental anxiety is real and extremely common. IV sedation means your All-on-X or implant surgery happens while you're in a deeply relaxed, pain-free state. Most patients remember nothing.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              Book a Sedation Consultation
            </a>
            <p className="mt-4 font-body text-[12px] text-white/30">Dr. Rana is IV sedation licensed and certified · Free consultation</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ─── OPTIONS ─── */}
    <section className="section-white section-padding">
      <div className="container-main">
        <AnimatedSection className="text-center mb-16">
          <p className="eyebrow">Sedation Options</p>
          <h2 className="headline-section text-prana-charcoal">
            The Right Level<br />
            <em className="font-heading italic font-light">for Your Comfort.</em>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              level: "Mild",
              name: "Oral Sedation",
              desc: "A prescription pill taken 1 hour before your appointment. You'll feel calm and drowsy. Ideal for mild anxiety or shorter procedures.",
              best: "Best for: Mild anxiety, single implants, extractions",
            },
            {
              level: "Moderate",
              name: "IV Sedation",
              desc: "Administered intravenously for a deeper twilight state. You remain responsive but have little to no memory of the procedure. Most commonly used for All-on-X.",
              best: "Best for: Significant anxiety, All-on-X, full-mouth procedures",
              featured: true,
            },
            {
              level: "Monitoring",
              name: "Nitrous Oxide",
              desc: "Inhaled laughing gas for mild relaxation during shorter procedures. Wears off within minutes. You can drive yourself home.",
              best: "Best for: Very mild anxiety, cleanings, simple procedures",
            },
          ].map((opt) => (
            <AnimatedSection key={opt.name} className={`p-8 border ${opt.featured ? "bg-prana-charcoal border-prana-charcoal text-white" : "bg-white border-prana-border"}`}>
              <p className={`font-body text-[10px] uppercase tracking-[0.2em] mb-3 ${opt.featured ? "text-prana-terra" : "text-prana-terra"}`}>{opt.level}</p>
              <h3 className={`font-heading text-[24px] font-light mb-4 ${opt.featured ? "text-white" : "text-prana-charcoal"}`}>{opt.name}</h3>
              <p className={`font-body text-[14px] leading-[1.8] mb-5 ${opt.featured ? "text-white/60" : "text-prana-text-muted"}`}>{opt.desc}</p>
              <p className={`font-body text-[11px] uppercase tracking-[0.08em] ${opt.featured ? "text-prana-terra" : "text-prana-terra"}`}>{opt.best}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ─── WHAT TO EXPECT ─── */}
    <section className="section-warm section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="eyebrow">What to Expect</p>
            <h2 className="headline-section text-prana-charcoal mb-8">
              From Anxious<br />
              <em className="font-heading italic font-light">to Done.</em>
            </h2>
            <div className="space-y-6">
              {[
                { n: "01", t: "Tell Us Your Concerns", b: "At your free consultation, tell Dr. Rana exactly what scares you. He's heard every version. Nothing is embarrassing. He'll recommend the right sedation level for your case." },
                { n: "02", t: "Arrive Relaxed", b: "For IV sedation, you'll take a pre-medication and arrive with a driver. For oral sedation, you take the pill at home and someone drives you in." },
                { n: "03", t: "Sleep Through the Hard Part", b: "Once sedated, you won't feel, hear, or remember the procedure. Dr. Rana works precisely and efficiently. Most patients are shocked by how fast it was." },
                { n: "04", t: "Wake Up With New Teeth", b: "For All-on-X patients, you leave with provisional teeth the same day. The hard part is done. The result is visible immediately." },
              ].map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.06} className="flex gap-5 items-start">
                  <p className="font-heading text-[36px] font-light text-prana-border leading-none flex-shrink-0 w-12">{s.n}</p>
                  <div>
                    <p className="font-body text-[14px] font-semibold text-prana-charcoal mb-1">{s.t}</p>
                    <p className="font-body text-[13px] text-prana-text-muted leading-[1.7]">{s.b}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <img
              src={hallwayImg}
              alt="Calm, welcoming Prana Dental Miami environment"
              className="w-full h-[520px] object-cover"
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ─── FAQ ─── */}
    <section className="section-white section-padding">
      <div className="container-main max-w-[700px] mx-auto">
        <AnimatedSection className="mb-12">
          <p className="eyebrow">Sedation FAQ</p>
          <h2 className="headline-section text-prana-charcoal">Your Questions, Answered.</h2>
        </AnimatedSection>
        <AccordionFAQ items={FAQ} />
      </div>
    </section>

    <FullWidthCTA />
  </>
);

export default Sedation;

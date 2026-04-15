import { motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AccordionFAQ } from "@/components/AccordionFAQ";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";
import { PHONE, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";
import clinicImg from "@/assets/clinic-room.jpg";

const FAQ = [
  { q: "What counts as a dental emergency?", a: "Severe toothache, knocked-out or broken teeth, infections, abscesses, uncontrollable bleeding, and trauma to the mouth or jaw. If you are in pain or something feels wrong, call us immediately." },
  { q: "Do I need an appointment?", a: "We accept walk-ins for true emergencies during business hours. For the fastest care, call ahead so we can prepare for your arrival. Same-day appointments are available." },
  { q: "How much does emergency care cost?", a: "Emergency exam with X-ray is $99. Treatment costs vary depending on what is needed. We will give you a clear price before any work begins. Financing is available for larger treatments." },
  { q: "What if I need a tooth pulled?", a: "Simple extractions start at $99. Surgical extractions range from $250 to $500. If an implant is needed afterward, we can plan that during the same visit." },
  { q: "Do you treat dental infections?", a: "Yes. Dental infections can become serious quickly. We provide same-day drainage, antibiotics, and a follow-up treatment plan to resolve the underlying cause." },
];

const Emergency = () => (
  <>
    <SEO
      title="Emergency Dentist Miami | Same-Day Care | Prana Dental"
      description="Emergency dental care in Miami. Same-day appointments for toothaches, broken teeth, infections, and trauma. Emergency exam + X-ray $99. Prana Dental Miami."
      canonical="https://pranadentalmia.com/emergency"
      jsonLd={PRANA_JSONLD}
    />

    <section className="relative min-h-[85vh] flex items-center bg-prana-charcoal pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-prana-charcoal via-[#1f1c1a] to-[#0f0e0d]" />
      <div className="absolute top-0 right-0 w-[48%] h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-prana-charcoal via-prana-charcoal/55 to-transparent z-10" />
        <img src={clinicImg} alt="Prana Dental emergency care" className="w-full h-full object-cover" />
      </div>
      <div className="container-main px-6 md:px-12 w-full relative z-10">
        <div className="max-w-[540px]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow mb-5">Emergency Dentistry</p>
            <h1 className="font-heading font-light text-[44px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
              In Pain?<br />
              <em className="italic text-prana-terra">We See You Today.</em>
            </h1>
            <p className="font-body text-[16px] font-light text-white/60 leading-[1.75] mb-5 max-w-[420px]">
              Toothaches, broken teeth, infections, and trauma. Same-day appointments available. Walk-ins welcome during business hours.
            </p>
            <div className="flex flex-wrap gap-3 mb-9">
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-full px-3.5 py-2 font-body text-[12px] text-white/80">
                Emergency Exam + X-Ray · <strong className="text-white">$99</strong>
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={PHONE_LINK} className="btn-hero-primary inline-flex items-center gap-2">
                <Phone size={14} /> Call Now
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero-ghost">
                WhatsApp Us
              </a>
            </div>
            <p className="mt-4 font-body text-[12px] text-white/30">Mon-Sat 8AM-8PM · Walk-ins welcome · Hablamos Español</p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-white section-padding">
      <div className="container-main">
        <AnimatedSection className="text-center mb-16">
          <p className="eyebrow">We Treat</p>
          <h2 className="headline-section text-prana-charcoal">
            When It Can't Wait.<br />
            <em className="font-heading italic font-light">We Don't Make You.</em>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Severe Toothache", desc: "Persistent or sudden tooth pain that disrupts your day. We diagnose the cause with digital imaging and provide immediate relief.", price: "Exam + X-ray: $99" },
            { title: "Broken or Chipped Teeth", desc: "Whether from an accident, biting something hard, or an old filling that failed. We repair or replace the tooth the same day when possible.", price: "Repair from $200" },
            { title: "Dental Infections", desc: "Swelling, fever, or pus near a tooth is a dental emergency. We drain, prescribe, and plan definitive treatment to resolve the infection.", price: "Same-day treatment" },
            { title: "Knocked-Out Tooth", desc: "Time matters. If you can find the tooth, keep it moist and get to us fast. The sooner we see you, the better the chance of saving it.", price: "Call immediately" },
            { title: "Lost Crown or Filling", desc: "A lost restoration exposes the tooth to further damage and sensitivity. We replace it quickly to protect the underlying structure.", price: "Crown: $999" },
            { title: "Trauma to Mouth or Jaw", desc: "Sports injuries, falls, and accidents. We evaluate for fractures, loose teeth, and tissue damage with imaging and examination.", price: "Comprehensive exam" },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.06} className="bg-white border border-prana-border rounded-3xl p-7">
              <h3 className="font-body text-[15px] font-semibold text-prana-charcoal mb-3">{item.title}</h3>
              <p className="font-body text-[14px] text-prana-text-muted leading-[1.7] mb-4">{item.desc}</p>
              <p className="font-body text-[12px] text-prana-terra uppercase tracking-[0.08em]">{item.price}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-cream section-padding">
      <div className="container-main max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <p className="eyebrow">What to Do</p>
          <h2 className="headline-section text-prana-charcoal mb-10">If You Have a Dental Emergency.</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { n: "01", t: "Call Us Immediately", b: "Call (201) 280-3528 or message us on WhatsApp. We will triage your situation over the phone and get you in as quickly as possible." },
            { n: "02", t: "Come In for Assessment", b: "We take a digital X-ray, examine the area, and diagnose the problem. You will know exactly what is happening and what needs to be done." },
            { n: "03", t: "Same-Day Treatment", b: "Whenever possible, we treat the problem the same day. Pain relief, infection control, temporary or permanent restoration. You leave feeling better." },
          ].map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <p className="font-heading text-[60px] leading-none text-prana-border mb-4 select-none">{step.n}</p>
              <h3 className="font-body text-[16px] font-semibold text-prana-charcoal mb-3">{step.t}</h3>
              <p className="font-body text-[14px] text-prana-text-muted leading-[1.7]">{step.b}</p>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="mt-14">
          <a href={PHONE_LINK} className="btn-primary inline-flex items-center gap-2">
            <Phone size={14} /> Call (201) 280-3528
          </a>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-white section-padding">
      <div className="container-main max-w-[700px] mx-auto">
        <AnimatedSection className="mb-12">
          <p className="eyebrow">Emergency FAQ</p>
          <h2 className="headline-section text-prana-charcoal">Your Questions, Answered.</h2>
        </AnimatedSection>
        <AccordionFAQ items={FAQ} />
      </div>
    </section>

    <FullWidthCTA />
  </>
);

export default Emergency;

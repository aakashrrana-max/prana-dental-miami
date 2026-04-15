import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Shield, Award, ChevronRight, Microscope, HeartHandshake } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { OfferCard } from "@/components/OfferCard";
import { TestimonialCard } from "@/components/TestimonialCard";
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
  const { t } = useI18n();

  return (
    <>
      <SEO
        title="Dental Implants Miami | All-on-4 from $9,999 | Prana Dental"
        description="Get dental implants and All-on-4 in Miami starting at $1,850. Free CT scan + consultation with Dr. Aakash Rana. Same-day teeth where clinically appropriate."
        canonical="https://pranadentalmia.com/"
        ogTitle="Prana Dental Miami — Life-Changing Dentistry at Fair Prices"
        ogDescription="All-on-4 from $9,999. Single implants from $1,850. Free CT scan. 3,000+ implants placed by Dr. Aakash Rana."
        jsonLd={PRANA_JSONLD}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-prana-cream pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/marble-texture.jpg')", backgroundSize: "cover" }} />
        <div className="container-main px-6 md:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
              <div className="inline-flex items-center gap-2 border border-prana-border rounded-full px-4 py-2 mb-8 bg-white/60 backdrop-blur-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} className="fill-prana-terra text-prana-terra" />
                  ))}
                </div>
                <span className="font-body text-[11px] text-prana-text-muted tracking-[0.08em]">4.9 · 200+ Google Reviews</span>
              </div>

              <h1 className="font-heading font-light text-[46px] md:text-[70px] leading-[1.04] tracking-[-0.02em] text-prana-charcoal mb-7">
                {t("Stop Hiding", "Deja de Esconder")}<br />{t("Your Smile.", "Tu Sonrisa.")}<br />
                <em className="italic text-prana-terra">{t("Start Living It.", "Empieza a Vivirla.")}</em>
              </h1>

              <p className="font-body text-[16px] font-light text-prana-text-muted leading-[1.75] mb-5 max-w-[440px]">
                {t(
                  "Dr. Rana has placed 3,000+ implants personally. Every case is planned and performed by him. Life-changing results at prices that don't require a second mortgage.",
                  "El Dr. Rana ha colocado más de 3,000 implantes personalmente. Cada caso es planificado y realizado por él. Resultados que cambian vidas a precios justos."
                )}
              </p>

              <div className="flex flex-wrap gap-3 mb-9">
                <span className="inline-flex items-center gap-1.5 bg-white/80 border border-prana-border rounded-full px-4 py-2.5 font-body text-[12px] text-prana-charcoal/70 tracking-[0.04em]">
                  All-on-4 · <strong className="text-prana-charcoal">From $9,999</strong>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/80 border border-prana-border rounded-full px-4 py-2.5 font-body text-[12px] text-prana-charcoal/70 tracking-[0.04em]">
                  Single Implant · <strong className="text-prana-charcoal">From $1,850</strong>
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {t("Book Free Consultation", "Consulta Gratis")}
                </a>
                <a href={PHONE_LINK} className="btn-ghost">
                  {t("Call", "Llamar")} {PHONE}
                </a>
              </div>
              <p className="mt-4 font-body text-[12px] text-prana-text-muted/50 tracking-[0.04em]">
                {t("Free CT scan included · No commitment · Same-day availability", "Escaneo CT gratis · Sin compromiso · Disponibilidad el mismo día")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={drImg}
                alt="Dr. Aakash Rana, Prana Dental Miami"
                className="w-full h-[500px] lg:h-[650px] object-cover object-top rounded-3xl"
                width={900}
                height={1200}
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-prana-border rounded-2xl px-5 py-4">
                <div className="flex gap-8">
                  {[["3,000+", "Implants"], ["300+", "Full Arches"], ["10+", "Years"]].map(([n, l]) => (
                    <div key={l}>
                      <p className="font-heading text-[22px] font-light text-prana-charcoal leading-none">{n}</p>
                      <p className="font-body text-[10px] text-prana-text-muted uppercase tracking-[0.12em] mt-1">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-prana-cream border-y border-prana-border/50 py-5">
        <div className="container-main px-6 md:px-12">
          <div className="flex items-center justify-center gap-4 md:gap-8 overflow-x-auto">
            {[
              "3,000+ Implants Placed",
              "300+ Full-Arch Transformations",
              "4.9★ Google Rating",
              "Same-Day Teeth Available",
            ].map((item, i) => (
              <span key={i} className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-5 py-2.5 border border-prana-border/40 whitespace-nowrap">
                <span className="font-body text-[11px] uppercase tracking-[0.12em] text-prana-charcoal/60">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="section-white section-padding">
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="eyebrow">{t("Welcome to Prana Dental", "Bienvenido a Prana Dental")}</p>
              <h2 className="headline-section text-prana-charcoal mb-8">
                {t("Love Your Smile", "Ama Tu Sonrisa")}<br />
                <em className="font-heading italic font-light">{t("at Prana Dental.", "en Prana Dental.")}</em>
              </h2>
              <p className="body-text mb-5">
                {t(
                  "Welcome to Prana Dental, where modern dentistry meets elevated care. Our state-of-the-art dental studio is designed with one purpose: to redefine your dental experience.",
                  "Bienvenido a Prana Dental, donde la odontología moderna se encuentra con el cuidado elevado. Nuestro estudio dental de última generación está diseñado con un solo propósito: redefinir su experiencia dental."
                )}
              </p>
              <p className="body-text mb-8">
                {t(
                  "Blending the latest technology with a sleek, modern environment, we offer a full range of services with precision, comfort, and convenience at the core. At Prana Dental, we go beyond clinical excellence to provide concierge-level service tailored to your needs.",
                  "Combinando la última tecnología con un ambiente moderno y elegante, ofrecemos una gama completa de servicios con precisión, comodidad y conveniencia. En Prana Dental, vamos más allá de la excelencia clínica."
                )}
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Microscope, title: "Advanced Digital Technology", body: "CBCT 3D imaging, digital planning, and same-day crowns. No guesswork." },
                  { icon: Shield, title: "In-House Lab. No Outsourcing.", body: "Restorations crafted in our own lab. Faster timelines, better fit, lower cost." },
                  { icon: HeartHandshake, title: "Dr. Rana Does Every Case", body: "Not an associate. Not a resident. The doctor you consult with is the doctor who operates." },
                ].map(({ icon: Icon, title, body }, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-prana-cream border border-prana-border flex items-center justify-center mt-0.5">
                      <Icon size={16} className="text-prana-terra" />
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
              <img
                src={clinicHallwayImg}
                alt="Prana Dental Miami clinic interior"
                className="w-full h-[460px] lg:h-[560px] object-cover rounded-3xl"
                loading="lazy"
                width={1400}
                height={900}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="section-cream section-padding">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow">{t("Real Patients · Real Results", "Pacientes Reales · Resultados Reales")}</p>
            <h2 className="headline-section text-prana-charcoal">
              {t("The Work Speaks", "El Trabajo Habla")}<br />
              <em className="font-heading italic font-light">{t("For Itself.", "Por Sí Mismo.")}</em>
            </h2>
            <p className="body-text max-w-md mx-auto mt-4">
              {t("Every case digitally planned. Every result is permanent.", "Cada caso planificado digitalmente. Cada resultado es permanente.")}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="overflow-hidden rounded-3xl">
                <img src={baAllonx} alt="All-on-X before and after" className="w-full h-[380px] md:h-[440px] object-cover" loading="lazy" />
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
              <div className="overflow-hidden rounded-3xl">
                <img src={baVeneers} alt="Porcelain veneers before and after" className="w-full h-[380px] md:h-[440px] object-cover" loading="lazy" />
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
            <Link to="/before-after" className="btn-ghost inline-flex items-center gap-2">
              See More Patient Transformations <ChevronRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-white section-padding">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow">{t("How It Works", "Cómo Funciona")}</p>
            <h2 className="headline-section text-prana-charcoal">
              {t("From Uncertainty", "De la Incertidumbre")}<br />
              <em className="font-heading italic font-light">{t("to a Permanent Smile.", "a una Sonrisa Permanente.")}</em>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 pb-16 border-b border-prana-border">
            <AnimatedSection>
              <img src={cbctImg} alt="CBCT 3D scan at Prana Dental Miami" className="w-full h-[340px] object-cover rounded-3xl" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="font-heading text-[72px] leading-none text-prana-border mb-4 select-none">01</p>
              <h3 className="font-body text-[18px] font-semibold text-prana-charcoal mb-3">Free CT Scan & Consultation</h3>
              <p className="font-body text-[15px] text-prana-text-muted leading-[1.8]">
                A full 3D CBCT scan at no cost. Dr. Rana reviews your imaging personally and tells you exactly what's possible before you commit to anything. No sales pitch. No pressure.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            {[
              { num: "02", title: "Your Custom Digital Plan", body: "Dr. Rana builds a precise digital treatment plan using your scan. You see your expected outcome on screen before we begin. Every implant placement is mapped in 3D." },
              { num: "03", title: "Walk Out With New Teeth", body: "Most full-arch patients leave with provisional teeth the same day. Final zirconia restorations, permanently fixed and fully functional, delivered within 3 to 5 months." },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <p className="font-heading text-[72px] leading-none text-prana-border mb-4 select-none">{step.num}</p>
                <h3 className="font-body text-[18px] font-semibold text-prana-charcoal mb-3">{step.title}</h3>
                <p className="font-body text-[15px] text-prana-text-muted leading-[1.8]">{step.body}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2">
              Book Your Free CT Scan <ChevronRight size={14} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="section-cream section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection className="relative">
              <img
                src={drImg}
                alt="Dr. Aakash Rana, DMD"
                className="w-full h-[500px] lg:h-[600px] object-cover object-top rounded-3xl"
                loading="lazy"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="lg:pt-8">
              <p className="eyebrow">Dr. Aakash Rana, DMD</p>
              <h2 className="headline-section text-prana-charcoal mb-6">
                {t("Surgical Experience", "Experiencia Quirúrgica")}<br />
                <em className="font-heading italic font-light">{t("You Can Actually Afford.", "Que Puedes Pagar.")}</em>
              </h2>
              <p className="body-text mb-5">
                Dr. Rana has placed over 3,000 implants personally. Not delegated to associates. Not supervised by residents. Every scan reviewed, every surgical plan built, every implant placed by him.
              </p>
              <p className="body-text mb-8">
                He built Prana on a belief that contradicts most of the industry: that surgical excellence and fair pricing are not mutually exclusive.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "DMD, Doctor of Dental Medicine",
                  "Advanced Implantology",
                  "CBCT Certified",
                  "IV Sedation Certified",
                  "Nobel Biocare Trained",
                  "Straumann Trained",
                ].map((badge) => (
                  <span key={badge} className="inline-block font-body text-[11px] tracking-[0.06em] text-prana-text-muted border border-prana-border px-3 py-1.5 rounded-full uppercase">
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

      {/* OBJECTIONS (DARK) */}
      <section className="section-dark section-padding rounded-3xl mx-4 md:mx-8 my-4">
        <div className="container-main">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow">{t("Honest Answers", "Respuestas Honestas")}</p>
            <h2 className="headline-section text-white">
              {t("We Know What", "Sabemos Lo Que")}<br />
              <em className="font-heading italic font-light">{t("You're Wondering.", "Te Preguntas.")}</em>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Is it going to hurt?",
                body: "Over 90% of patients rate their experience as easier than expected. We use advanced local anesthesia and offer IV sedation. The surgery is controlled, precise, and far more comfortable than most people imagine.",
              },
              {
                title: "Why is it so much cheaper?",
                body: "In-house digital lab. High-volume surgical protocols. Minimal overhead. You get the same Nobel Biocare and Straumann-grade materials used at $35,000 clinics. We just don't believe in inflated margins.",
              },
              {
                title: "I was told I'm not a candidate.",
                body: "Many patients turned away elsewhere qualify here. Dr. Rana uses CBCT 3D imaging to evaluate your exact bone anatomy. If grafting is needed, he performs it in-house. A 'no' elsewhere is often a 'yes' at Prana.",
              },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className="border border-white/10 rounded-3xl p-8">
                <h3 className="font-body text-[15px] font-semibold text-white mb-4 leading-[1.4]">{card.title}</h3>
                <p className="font-body text-[14px] text-white/50 leading-[1.8]">{card.body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-white section-padding">
        <div className="container-main relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow">{t("Treatments", "Tratamientos")}</p>
            <h2 className="headline-section text-prana-charcoal">
              {t("Built to Last.", "Hecho Para Durar.")}<br />
              <em className="font-heading italic font-light">{t("Priced to Make Sense.", "A Precios Justos.")}</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection className="mb-6">
            <div className="bg-prana-charcoal text-white p-8 md:p-10 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-prana-terra font-body font-medium mb-3">Featured · Most Popular</p>
                <h3 className="font-heading text-[32px] md:text-[40px] font-light leading-[1.1] text-white mb-3">All-on-X Full Arch</h3>
                <p className="font-heading text-[22px] font-light text-prana-terra mb-2">From $9,999 / arch</p>
                <p className="font-body text-[13px] text-white/30 line-through mb-6">Most Miami clinics: $25,000 to $35,000</p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Full arch of permanent zirconia teeth",
                    "4 to 6 titanium implants per arch",
                    "Same-day provisional teeth (where appropriate)",
                    "Every case planned with CBCT imaging",
                    "Final zirconia in 3 to 5 months",
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
                <img src={patientSmileImg} alt="Patient result" className="w-full h-[320px] object-cover rounded-2xl" loading="lazy" />
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OfferCard
              label="Single Implant"
              headline="From $1,850 cash"
              bullets={[
                "Titanium implant + custom zirconia crown",
                "Looks, feels, and bites like your natural tooth",
                "Placed in as little as one hour",
                "Permanent, designed to last decades",
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
              link="/ortho"
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

      {/* FINANCING */}
      <section className="section-cream section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="eyebrow">{t("Financing", "Financiamiento")}</p>
              <h2 className="headline-section text-prana-charcoal mb-8">
                {t("Your Smile Shouldn't", "Tu Sonrisa No Debería")}<br />
                <em className="font-heading italic font-light">{t("Wait for Your Budget.", "Esperar Tu Presupuesto.")}</em>
              </h2>
              <p className="body-text mb-6">
                We offer 0% interest financing for qualified patients. Monthly payments start at $199/month. Apply before your appointment. Most decisions come back in minutes.
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
              <div className="border border-prana-border p-8 md:p-10 bg-white rounded-3xl">
                <p className="eyebrow">Example Plan</p>
                <h3 className="font-heading text-[26px] font-light text-prana-charcoal mb-6">All-on-X · One Arch</h3>
                <div className="space-y-5 divide-y divide-prana-border">
                  {[
                    ["Total Investment", "$10,000"],
                    ["Monthly Payment", "~$199/mo", true],
                    ["Term", "60 months"],
                    ["Interest", "0% (OAC)"],
                  ].map(([label, value, highlight]) => (
                    <div key={label as string} className="flex justify-between items-center font-body text-[15px] pt-5 first:pt-0">
                      <span className="text-prana-text-muted">{label}</span>
                      <span className={`font-medium ${highlight ? "text-prana-terra text-[20px] font-heading" : "text-prana-charcoal"}`}>{value}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 font-body text-[12px] text-prana-text-muted">Individual plans vary. Subject to credit approval.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-white section-padding">
        <div className="container-main">
          <AnimatedSection className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="eyebrow">{t("Patient Stories", "Historias de Pacientes")}</p>
                <h2 className="headline-section text-prana-charcoal">
                  {t("What Happens When", "Lo Que Pasa Cuando")}<br />
                  <em className="font-heading italic font-light">{t("People Finally Fix It.", "La Gente Finalmente Lo Arregla.")}</em>
                </h2>
              </div>
              <a
                href="https://g.co/kgs/PranaDental"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-prana-border bg-white px-5 py-3.5 rounded-full self-start md:self-auto hover:border-prana-charcoal/30 transition-colors flex-shrink-0"
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
              quote="I had been hiding my smile for eight years. Other clinics quoted me $35,000. Dr. Rana did my full arch for a fraction of that and the results are more beautiful than I imagined."
            />
            <TestimonialCard
              name="Robert M."
              location="Brickell"
              badge="All-on-X Patient"
              quote="I have been afraid of dentists my entire life. Dr. Rana and his team were patient with every question. I was in and out in one day with a full set of teeth."
              delay={0.08}
            />
            <TestimonialCard
              name="Carlos G."
              location="Hialeah"
              badge="All-on-X Patient"
              quote="Vine a Prana con mucho miedo. Hoy tengo una sonrisa completamente nueva y me costó la mitad de lo que otros me cotizaron."
              translationNote="I came to Prana afraid. Today I have a completely new smile and it cost half of what others quoted me."
              delay={0.12}
            />
            <TestimonialCard
              name="Stephanie R."
              location="Wynwood"
              badge="Porcelain Veneers"
              quote="My veneers look so natural that people don't know I have them. They just say I look different, better. I have never felt this confident in my life."
              delay={0.16}
            />
          </div>
        </div>
      </section>

      {/* MIAMI SECTION */}
      <section className="relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-4">
        <img src={clinicRoomImg} alt="Prana Dental Miami" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
        <div className="absolute inset-0 bg-prana-charcoal/82" />
        <div className="relative z-10 container-main px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="eyebrow">Miami's Implant Practice</p>
              <h2 className="headline-section text-white mb-5">
                Serving Miami,<br />
                <em className="font-heading italic font-light">Brickell, Coral Gables,<br />Hialeah & Beyond.</em>
              </h2>
              <p className="font-body text-[15px] text-white/55 leading-[1.8]">
                Located at 3050 Biscayne Blvd, Suite 703. Open Monday through Saturday, 8AM to 8PM. Walk-ins welcome for dental emergencies.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="border border-white/15 p-8 md:p-10 backdrop-blur-sm bg-white/5 rounded-3xl">
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

      {/* FAQ */}
      <section className="section-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection className="lg:sticky lg:top-32">
              <p className="eyebrow">{t("Common Questions", "Preguntas Frecuentes")}</p>
              <h2 className="headline-section text-prana-charcoal mb-6">
                {t("Let's Answer", "Respondamos")}<br />
                <em className="font-heading italic font-light">{t("All of Them.", "Todas.")}</em>
              </h2>
              <p className="body-text mb-8">
                We believe in total transparency. Ask us anything about the procedure, the price, the timeline, the pain. You deserve honest answers before you decide.
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

      <FullWidthCTA />
    </>
  );
};

export default Homepage;

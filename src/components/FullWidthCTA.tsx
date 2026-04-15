import { AnimatedSection } from "./AnimatedSection";
import { PHONE, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

export const FullWidthCTA = () => (
  <section className="section-dark section-padding" id="book">
    <AnimatedSection className="container-main text-center max-w-2xl mx-auto">
      <p className="eyebrow">Your Next Step</p>
      <h2 className="headline-section text-white mb-6">
        One Scan.<br />
        <em className="font-heading italic font-light">A Clear Answer. No Pressure.</em>
      </h2>
      <p className="text-[16px] font-body font-light text-white/55 mb-10 max-w-md mx-auto leading-[1.7]">
        Book a free CT scan and consultation. Dr. Rana will personally review your case and tell you exactly what's possible — before you commit to anything.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-white">
          Book Free Consultation
        </a>
        <a href={PHONE_LINK} className="btn-ghost-white">Call {PHONE}</a>
      </div>
      <p className="mt-8 text-[12px] font-body text-white/30">
        Hablamos Español · WhatsApp Available · Mon–Sat 8AM–8PM · 3050 Biscayne Blvd, Suite 703, Miami FL
      </p>
    </AnimatedSection>
  </section>
);

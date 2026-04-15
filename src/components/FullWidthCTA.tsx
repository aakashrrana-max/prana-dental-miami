import { AnimatedSection } from "./AnimatedSection";
import { PHONE, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

export const FullWidthCTA = () => {
  const { t } = useI18n();
  return (
    <section className="section-dark section-padding rounded-t-[2rem]" id="book">
      <AnimatedSection className="container-main text-center max-w-2xl mx-auto">
        <p className="eyebrow">{t("Your Next Step", "Tu Próximo Paso")}</p>
        <h2 className="headline-section text-white mb-6">
          {t("One Scan.", "Un Escaneo.")}<br />
          <em className="font-heading italic font-light">{t("A Clear Answer. No Pressure.", "Una Respuesta Clara. Sin Presión.")}</em>
        </h2>
        <p className="text-[16px] font-body font-light text-white/55 mb-10 max-w-md mx-auto leading-[1.7]">
          {t(
            "Book a free CT scan and consultation. Dr. Rana will personally review your case and tell you exactly what's possible before you commit to anything.",
            "Reserve un escaneo CT gratuito y consulta. El Dr. Rana revisará personalmente su caso y le dirá exactamente lo que es posible antes de comprometerse."
          )}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-white">
            {t("Book Free Consultation", "Consulta Gratis")}
          </a>
          <a href={PHONE_LINK} className="btn-ghost-white">{t("Call", "Llamar")} {PHONE}</a>
        </div>
        <p className="mt-8 text-[12px] font-body text-white/30">
          Hablamos Español · WhatsApp Available · Mon-Sat 8AM-8PM · 3050 Biscayne Blvd, Suite 703, Miami FL
        </p>
      </AnimatedSection>
    </section>
  );
};

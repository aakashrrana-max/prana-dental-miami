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
          {t("Permanent Teeth in One Day.", "Dientes Permanentes en Un Día.")}<br />
          <em className="font-heading italic font-light">{t("Start with a Free Consultation.", "Empieza con una Consulta Gratis.")}</em>
        </h2>
        <p className="text-[16px] font-body font-light text-white/55 mb-10 max-w-md mx-auto leading-[1.7]">
          {t(
            "Dr. Rana personally reviews every case. Get your free CT scan + consultation — no commitment, no pressure.",
            "El Dr. Rana revisa cada caso personalmente. Obtenga su escaneo CT gratuito + consulta — sin compromiso, sin presión."
          )}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-white">
            {t("Book My Free Consultation →", "Reservar Consulta Gratis →")}
          </a>
          <a href={PHONE_LINK} className="btn-ghost-white">{t("Call", "Llamar")} {PHONE}</a>
        </div>
        <p className="mt-8 text-[12px] font-body text-white/30">
          Hablamos Español · WhatsApp Available · Mon–Sat 8AM–8PM · 3050 Biscayne Blvd, Suite 703, Miami FL
        </p>
      </AnimatedSection>
    </section>
  );
};

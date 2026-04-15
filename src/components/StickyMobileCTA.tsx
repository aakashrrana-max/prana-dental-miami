import { WHATSAPP_LINK } from "@/lib/constants";

export const StickyMobileCTA = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-prana-charcoal h-14 flex items-center justify-center">
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white font-body font-medium text-[12px] uppercase tracking-[0.15em]"
    >
      Book Free Consultation →
    </a>
  </div>
);

import { WHATSAPP_LINK } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export const WhatsAppFAB = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Message us on WhatsApp"
    className="fixed right-6 bottom-6 md:bottom-6 z-40 w-14 h-14 rounded-full bg-prana-whatsapp flex items-center justify-center shadow-lg hover:scale-105 transition-transform mb-16 md:mb-0"
  >
    <MessageCircle className="text-white" size={26} fill="white" />
  </a>
);

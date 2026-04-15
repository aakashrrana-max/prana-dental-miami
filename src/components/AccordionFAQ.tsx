import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  items: FAQItem[];
}

export const AccordionFAQ = ({ items }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-prana-border">
      {items.map((item, i) => (
        <AnimatedSection key={i} delay={i * 0.03}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left py-6 flex items-start justify-between gap-4 transition-colors group"
            aria-expanded={openIndex === i}
          >
            <span className="font-body font-medium text-[15px] text-prana-charcoal group-hover:text-prana-terra transition-colors">
              {item.q}
            </span>
            {openIndex === i ? (
              <Minus size={16} className="text-prana-terra flex-shrink-0 mt-1" />
            ) : (
              <Plus size={16} className="text-prana-charcoal/30 flex-shrink-0 mt-1" />
            )}
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="pb-6 font-body text-sm leading-[1.8] text-prana-text-muted">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatedSection>
      ))}
    </div>
  );
};

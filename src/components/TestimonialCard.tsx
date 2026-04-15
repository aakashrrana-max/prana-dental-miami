import { Star } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

interface Props {
  name: string;
  location: string;
  quote: string;
  badge: string;
  translationNote?: string;
  delay?: number;
}

export const TestimonialCard = ({ name, location, quote, badge, translationNote, delay = 0 }: Props) => (
  <AnimatedSection delay={delay} className="bg-white border border-prana-border rounded-3xl p-8">
    <div className="flex gap-0.5 mb-5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className="text-prana-terra fill-prana-terra" />
      ))}
    </div>
    <p className="text-prana-charcoal font-heading text-[19px] leading-[1.5] mb-5 font-light">"{quote}"</p>
    {translationNote && (
      <p className="text-prana-text-muted text-[13px] font-body italic mb-4">{translationNote}</p>
    )}
    <div>
      <p className="text-prana-charcoal font-body font-medium text-[14px]">{name}</p>
      <p className="text-prana-text-muted font-body text-[12px]">{location} · {badge}</p>
    </div>
  </AnimatedSection>
);

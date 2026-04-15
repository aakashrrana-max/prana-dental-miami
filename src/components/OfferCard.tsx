import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

interface Props {
  label: string;
  headline: string;
  anchor?: string;
  bullets: string[];
  link?: string;
  delay?: number;
  image?: string;
}

export const OfferCard = ({ label, headline, anchor, bullets, link = "/#book", delay = 0, image }: Props) => (
  <AnimatedSection delay={delay} className="group bg-white border border-prana-border overflow-hidden flex flex-col h-full hover:border-prana-charcoal/30 transition-colors duration-500 rounded-lg">
    {image && (
      <div className="overflow-hidden">
        <img src={image} alt={label} className="w-full h-52 object-cover group-hover:scale-[1.02] transition-transform duration-700" loading="lazy" width={600} height={400} />
      </div>
    )}
    <div className="p-8 flex flex-col flex-1">
      <p className="text-[11px] uppercase tracking-[0.2em] text-prana-terra font-body font-medium mb-3">{label}</p>
      <h3 className="font-heading text-[24px] text-prana-charcoal font-light mb-2">{headline}</h3>
      {anchor && <p className="text-prana-text-muted text-[13px] font-body mb-5 line-through">{anchor}</p>}
      <ul className="space-y-2.5 mb-6 flex-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-prana-text-muted text-[14px] font-body font-light">
            <span className="text-prana-terra mt-0.5 text-[8px]">●</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Link to={link} className="font-body text-[12px] uppercase tracking-[0.14em] text-prana-charcoal underline underline-offset-4 hover:no-underline">
        Learn More →
      </Link>
    </div>
  </AnimatedSection>
);

import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  excerpt: string;
  slug: string;
  delay?: number;
}

export const BlogCard = ({ title, excerpt, slug, delay = 0 }: Props) => (
  <AnimatedSection delay={delay} className="border-b border-prana-border pb-10 mb-10 last:border-0">
    <h3 className="font-heading text-[22px] md:text-[26px] text-prana-charcoal font-light mb-3">{title}</h3>
    <p className="font-body text-[14px] text-prana-text-muted leading-relaxed mb-6 font-light max-w-2xl">{excerpt}</p>
    <Link to={`/blog/${slug}`} className="inline-flex items-center gap-2 text-prana-charcoal font-body text-[12px] uppercase tracking-[0.15em] hover:gap-3 transition-all">
      Read Article <ArrowRight size={14} />
    </Link>
  </AnimatedSection>
);

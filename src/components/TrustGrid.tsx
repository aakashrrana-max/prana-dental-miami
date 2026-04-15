import { AnimatedSection } from "./AnimatedSection";

const stats = [
  { value: "3,000+", label: "Implants Placed" },
  { value: "300+", label: "Full-Arch Cases" },
  { value: "Same-Day", label: "Teeth Where Appropriate" },
  { value: "4.9★", label: "Google Rating" },
];

export const TrustGrid = () => (
  <section className="bg-prana-cream border-y border-prana-border/50 py-5">
    <div className="container-main px-6 md:px-12">
      <div className="flex items-center justify-between gap-4 overflow-x-auto">
        {stats.map((stat, i) => (
          <AnimatedSection key={i} delay={i * 0.05} className="text-center whitespace-nowrap flex-1">
            <span className="inline-flex items-center gap-2 bg-prana-warm/60 backdrop-blur-sm rounded-full px-5 py-2.5 border border-prana-border/40">
              <span className="font-heading text-[18px] font-light text-prana-charcoal">{stat.value}</span>
              <span className="font-body text-[10px] uppercase tracking-[0.12em] text-prana-text-muted">{stat.label}</span>
            </span>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

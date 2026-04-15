import { AnimatedSection } from "./AnimatedSection";

const stats = [
  { value: "3,000+", label: "Implants Placed" },
  { value: "300+", label: "Full-Arch Cases" },
  { value: "CBCT", label: "3D Imaging on Every Case" },
  { value: "Same-Day", label: "Teeth Where Appropriate" },
];

export const TrustGrid = () => (
  <section className="bg-white border-y border-prana-border py-5">
    <div className="container-main px-6 md:px-12">
      <div className="flex items-center justify-between gap-6 overflow-x-auto">
        {stats.map((stat, i) => (
          <AnimatedSection key={i} delay={i * 0.05} className="text-center whitespace-nowrap">
            <p className="font-body text-[11px] uppercase tracking-[0.15em] text-prana-charcoal">
              {stat.value} {stat.label}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

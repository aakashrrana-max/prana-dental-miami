import { AnimatedSection } from "./AnimatedSection";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
}

export const ProcessTimeline = ({ steps }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
    {steps.map((step, i) => (
      <AnimatedSection key={i} delay={i * 0.1} className="relative">
        <p className="font-heading text-[72px] leading-none text-prana-border mb-4">{step.number}</p>
        <h3 className="font-body text-[17px] font-medium text-prana-charcoal mb-3">{step.title}</h3>
        <p className="font-body text-[15px] leading-[1.7] text-prana-text-muted">{step.description}</p>
      </AnimatedSection>
    ))}
  </div>
);

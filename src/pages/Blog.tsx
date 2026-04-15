import { AnimatedSection } from "@/components/AnimatedSection";
import { BlogCard } from "@/components/BlogCard";
import { SEO, PRANA_JSONLD } from "@/lib/seo";

const POSTS = [
  {
    title: "Are Dental Implants Painful? Here Is the Honest Answer.",
    excerpt: "One of the most common fears about dental implants is pain. Here is what the procedure actually feels like, what to expect during recovery, and how modern techniques minimize discomfort.",
    slug: "are-dental-implants-painful",
  },
  {
    title: "How Much Does All-on-4 Cost in Miami? A Transparent Answer.",
    excerpt: "All-on-4 pricing in Miami ranges widely. We break down what drives the cost, what should be included, why some clinics charge $30,000, and how Prana Dental offers a better value.",
    slug: "all-on-4-cost-miami",
  },
];

const BlogIndex = () => (
  <>
    <SEO
      title="Blog | Dental Implant Insights | Prana Dental Miami"
      description="Expert articles on dental implants, All-on-4, veneers, and oral health from Dr. Aakash Rana at Prana Dental Miami."
      canonical="https://pranadentalmia.com/blog"
      jsonLd={PRANA_JSONLD}
    />

    <section className="section-cream pt-28 md:pt-36 pb-20 md:pb-28 px-6 md:px-12">
      <div className="container-main">
        <AnimatedSection className="text-center mb-16">
          <p className="eyebrow">Insights</p>
          <h1 className="headline-section text-prana-charcoal">The Prana Dental Blog.</h1>
          <p className="text-sub text-prana-charcoal/50 mt-4 max-w-2xl mx-auto">Honest answers to common questions about dental implants, veneers, and oral health.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {POSTS.map((post, i) => (
            <BlogCard key={post.slug} {...post} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default BlogIndex;

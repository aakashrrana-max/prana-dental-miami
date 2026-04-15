import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";

const BlogAllOn4Cost = () => (
  <>
    <SEO
      title="All-on-4 Cost in Miami 2025–2026 | Honest Pricing Guide | Prana Dental"
      description="How much does All-on-4 cost in Miami? Dr. Aakash Rana breaks down real pricing, what's included, and why Prana Dental offers full-arch implants from $10,000."
      canonical="https://pranadentalmia.com/blog/all-on-4-cost-miami"
      jsonLd={{
        ...PRANA_JSONLD,
        "@type": "Article",
        headline: "How Much Does All-on-4 Cost in Miami? A Transparent Answer.",
        author: { "@type": "Person", name: "Dr. Aakash Rana" },
        datePublished: "2025-02-01",
      }}
    />

    <article className="section-ivory pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="container-main max-w-3xl px-6 md:px-12">
        <AnimatedSection>
          <Link to="/blog" className="text-prana-terra font-body text-[13px] uppercase tracking-wider mb-8 inline-block hover:underline">← Back to Blog</Link>
          <p className="eyebrow">All-on-4 Pricing</p>
          <h1 className="headline-section text-prana-charcoal mb-8">How Much Does All-on-4 Cost in Miami? A Transparent Answer.</h1>

          <div className="space-y-5 font-body text-prana-charcoal/70 leading-[1.8] text-[15px]">
            <p>If you have been researching All-on-4 dental implants in Miami, you have probably noticed a wide range of prices — from $10,000 to well over $30,000 per arch. The variation can be confusing, and it is not always clear what you are actually getting for the price. Here is an honest breakdown.</p>

            <h2 className="font-heading text-2xl text-prana-charcoal mt-10 mb-4">What Is the Typical Cost Range in Miami?</h2>
            <p>In Miami, All-on-4 pricing typically falls between $15,000 and $30,000 per arch. Some clinics charge $25,000 or more for a single arch. Prices vary based on location, overhead, materials used, and whether the clinic operates its own lab.</p>
            <p>At many high-end clinics in Brickell, Coral Gables, and Miami Beach, prices of $25,000–$30,000 per arch are common — and that does not always include the final zirconia restoration.</p>

            <h2 className="font-heading text-2xl text-prana-charcoal mt-10 mb-4">What Drives the Cost?</h2>
            <p>Several factors affect All-on-4 pricing:</p>
            <ul className="list-none space-y-3 ml-0">
              {["The number of implants (4, 5, or 6 per arch)", "The type of final restoration (acrylic vs. zirconia)", "Whether CT scanning and digital planning are included", "Sedation and anesthesia fees", "Lab fees — in-house vs. outsourced", "Follow-up visits and adjustments"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-prana-terra">—</span> {item}</li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl text-prana-charcoal mt-10 mb-4">Why Is Prana Dental's Price Lower?</h2>
            <p>At Prana Dental Miami, All-on-X starts at $10,000 per arch. We are able to offer this price because we operate an in-house digital lab, use efficient digital workflows, and believe in transparent, fair pricing.</p>
            <p>We do not cut corners. Our All-on-X includes titanium implants, 3D CBCT planning, surgery, same-day provisional teeth where clinically appropriate, the final zirconia restoration, and all follow-up visits. We simply do not believe world-class care should come with a luxury markup.</p>

            <h2 className="font-heading text-2xl text-prana-charcoal mt-10 mb-4">What Should Be Included?</h2>
            <p>When comparing quotes, make sure the price includes all of the following:</p>
            <ul className="list-none space-y-3 ml-0">
              {["CT scan and digital treatment planning", "All implants (typically 4–6 per arch)", "Implant surgery with sedation", "Same-day provisional teeth where clinically appropriate", "Final zirconia bridge", "All follow-up visits and adjustments"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><span className="text-prana-terra">✓</span> {item}</li>
              ))}
            </ul>
            <p>If any of these are listed as separate charges, the total cost will be significantly higher than the initial quote.</p>

            <h2 className="font-heading text-2xl text-prana-charcoal mt-10 mb-4">Financing Options</h2>
            <p>We understand that even at $10,000, full-arch restoration is a significant investment. That is why we offer financing with payments as low as $199/month for qualified patients, including 0% interest options.</p>

            <h2 className="font-heading text-2xl text-prana-charcoal mt-10 mb-4">The Best Way to Get an Accurate Price</h2>
            <p>Every case is different. The only way to know your exact cost is to come in for a free CT scan and consultation. Dr. Rana will evaluate your bone structure, discuss your options, and give you a clear, all-inclusive price — with no surprises and no pressure.</p>
          </div>
        </AnimatedSection>
      </div>
    </article>

    <FullWidthCTA />
  </>
);

export default BlogAllOn4Cost;

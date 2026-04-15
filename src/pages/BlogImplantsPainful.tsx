import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FullWidthCTA } from "@/components/FullWidthCTA";
import { SEO, PRANA_JSONLD } from "@/lib/seo";

const BlogImplantsPainful = () => (
  <>
    <SEO
      title="Are Dental Implants Painful? What to Expect | Prana Dental Miami"
      description="Wondering if dental implants hurt? Dr. Aakash Rana explains what to expect during and after the procedure. Free CT scan at Prana Dental Miami."
      canonical="https://pranadentalmia.com/blog/are-dental-implants-painful"
      jsonLd={{
        ...PRANA_JSONLD,
        "@type": "Article",
        headline: "Are Dental Implants Painful? Here Is the Honest Answer.",
        author: { "@type": "Person", name: "Dr. Aakash Rana" },
        datePublished: "2025-01-15",
      }}
    />

    <article className="section-ivory pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="container-main max-w-3xl px-6 md:px-12">
        <AnimatedSection>
          <Link to="/blog" className="text-prana-terra font-body text-[13px] uppercase tracking-wider mb-8 inline-block hover:underline">← Back to Blog</Link>
          <p className="eyebrow">Dental Implants</p>
          <h1 className="headline-section text-prana-charcoal mb-8">Are Dental Implants Painful? Here Is the Honest Answer.</h1>

          <div className="space-y-5 font-body text-prana-charcoal/70 leading-[1.8] text-[15px]">
            <p>If you are considering a dental implant, chances are one of your biggest concerns is pain. It is a fair question — and one we hear almost every day at Prana Dental Miami. Here is the honest answer.</p>

            <h2 className="font-heading text-2xl text-prana-charcoal mt-10 mb-4">During the Procedure</h2>
            <p>The short answer: you should not feel pain during the procedure itself. Dental implant surgery is performed under local anesthesia, which completely numbs the area. Many patients also choose sedation for additional comfort.</p>
            <p>Most patients tell us the procedure felt less intense than a tooth extraction. You may feel pressure, but actual pain during the surgery is not typical.</p>

            <h2 className="font-heading text-2xl text-prana-charcoal mt-10 mb-4">After the Procedure</h2>
            <p>Some soreness and swelling in the first 24–72 hours is normal. This is part of your body's natural healing response. Most patients manage it comfortably with over-the-counter pain medication like ibuprofen.</p>
            <p>By day three to five, the majority of patients report feeling significantly better. Many return to work the day after surgery.</p>

            <h2 className="font-heading text-2xl text-prana-charcoal mt-10 mb-4">What Makes the Difference</h2>
            <p>The experience of dental implant surgery depends heavily on the skill of the surgeon and the technology used. At Prana Dental Miami, every case is planned digitally using 3D CBCT imaging. This allows Dr. Rana to place implants with precision, minimizing tissue disruption and accelerating healing.</p>
            <p>Guided surgery protocols mean smaller incisions, less swelling, and a faster recovery.</p>

            <h2 className="font-heading text-2xl text-prana-charcoal mt-10 mb-4">What About Bone Grafting?</h2>
            <p>If bone grafting is needed, you may experience slightly more post-operative soreness. However, the discomfort is still manageable and temporary. Dr. Rana will explain exactly what to expect based on your specific case.</p>

            <h2 className="font-heading text-2xl text-prana-charcoal mt-10 mb-4">The Bottom Line</h2>
            <p>Dental implant surgery is far less painful than most people expect. With modern anesthesia, sedation options, and digital planning, the procedure is safe, precise, and manageable.</p>
            <p>The discomfort of living with a missing tooth — the difficulty eating, the embarrassment, the ongoing bone loss — is almost always worse than the procedure itself.</p>

            <h2 className="font-heading text-2xl text-prana-charcoal mt-10 mb-4">Ready to Learn More?</h2>
            <p>Book a free CT scan and consultation at Prana Dental Miami. Dr. Rana will evaluate your case, answer all your questions, and help you understand exactly what to expect — with no obligation and no pressure.</p>
          </div>
        </AnimatedSection>
      </div>
    </article>

    <FullWidthCTA />
  </>
);

export default BlogImplantsPainful;

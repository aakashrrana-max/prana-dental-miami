import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/constants";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="404 | Page Not Found | Prana Dental Miami"
        description="The page you are looking for does not exist."
        canonical="https://pranadentalmia.com/404"
      />
      <section className="section-cream min-h-screen flex items-center justify-center section-padding">
        <div className="text-center max-w-lg">
          <p className="eyebrow">404</p>
          <h1 className="headline-section text-prana-charcoal mb-4">This page does not exist.</h1>
          <p className="font-body text-prana-charcoal/50 mb-10">
            The page you are looking for may have moved. Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/" className="btn-primary">Back to Home</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost">Book Free CT Scan</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;

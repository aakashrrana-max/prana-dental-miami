import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { PHONE, PHONE_LINK, WHATSAPP_LINK, INSTAGRAM, YOUTUBE } from "@/lib/constants";
import pdSymbol from "@/assets/pd-symbol.jpg";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111110] text-white/55">
      <div className="border-b border-white/8">
        <div className="container-main px-6 md:px-12 py-5">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-0 text-center">
            {[
              "Licensed Florida Dental Practice",
              "4.9★ Google Rating · 200+ Reviews",
              "3,000+ Implants Placed",
              "Hablamos Español",
            ].map((label) => (
              <p key={label} className="flex-1 min-w-[50%] md:min-w-0 py-2 md:py-0 font-body text-[10.5px] uppercase tracking-[0.14em] text-white/30 px-4">
                {label}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="container-main px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div>
            <img src={pdSymbol} alt="Prana Dental Miami" className="h-14 w-auto mb-5 opacity-80 rounded-xl" />
            <p className="font-body text-[13px] text-white/35 leading-[1.7] mb-4">
              Miami's premier implant &amp; cosmetic dentistry practice. Premium care. Transparent pricing.
            </p>
            <div className="flex items-center gap-1.5 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-prana-terra text-prana-terra" />
              ))}
              <span className="font-body text-[11px] text-white/30 ml-1">4.9 · Google</span>
            </div>
          </div>

          <div className="space-y-2 text-[13px] font-body">
            <p className="text-white/25 uppercase tracking-[0.12em] text-[10px] mb-4">Visit</p>
            <p className="text-white/45">3050 Biscayne Blvd</p>
            <p className="text-white/45">Suite 703</p>
            <p className="text-white/45">Miami, FL 33137</p>
            <p className="text-white/45 pt-2">Mon - Sat · 8 AM - 8 PM</p>
            <a
              href="https://maps.google.com/?q=3050+Biscayne+Blvd+Suite+703+Miami+FL+33137"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 font-body text-[11px] uppercase tracking-[0.1em] text-prana-terra hover:text-white transition-colors"
            >
              Get Directions →
            </a>
          </div>

          <div className="space-y-2.5 text-[13px] font-body">
            <p className="text-white/25 uppercase tracking-[0.12em] text-[10px] mb-4">Treatments</p>
            <Link to="/all-on-x" className="block text-white/45 hover:text-white transition-colors">All-on-X Full Arch</Link>
            <Link to="/dental-implants" className="block text-white/45 hover:text-white transition-colors">Single Dental Implants</Link>
            <Link to="/veneers" className="block text-white/45 hover:text-white transition-colors">Porcelain Veneers</Link>
            <Link to="/ortho" className="block text-white/45 hover:text-white transition-colors">Orthodontics</Link>
            <Link to="/emergency" className="block text-white/45 hover:text-white transition-colors">Emergency Dentistry</Link>
            <Link to="/pricing" className="block text-white/45 hover:text-white transition-colors">Pricing & Financing</Link>
            <Link to="/before-after" className="block text-white/45 hover:text-white transition-colors">Patient Results</Link>
          </div>

          <div className="space-y-2.5 text-[13px] font-body">
            <p className="text-white/25 uppercase tracking-[0.12em] text-[10px] mb-4">Contact</p>
            <a href={PHONE_LINK} className="block text-white/45 hover:text-white transition-colors">{PHONE}</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block text-white/45 hover:text-white transition-colors">WhatsApp Us</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block text-white/45 hover:text-white transition-colors">Book Free Consultation</a>
            <div className="flex gap-5 pt-2">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white transition-colors text-[12px] uppercase tracking-[0.08em]">Instagram</a>
              <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white transition-colors text-[12px] uppercase tracking-[0.08em]">YouTube</a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden h-[180px] mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.8934765!2d-80.19395!3d25.80583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b49a5f65df93%3A0x1e0c3dae4c57a7b5!2s3050%20Biscayne%20Blvd%20%23703%2C%20Miami%2C%20FL%2033137!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="180"
            style={{ border: 0, filter: "grayscale(30%) contrast(1.05)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Prana Dental Miami"
          />
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/20 font-body">
          <p>© {year} Prana Dental Miami. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white/40 transition-colors">Privacy Policy</Link>
            <span>ADA Accessibility</span>
            <span>Licensed Dental Practice · Florida</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

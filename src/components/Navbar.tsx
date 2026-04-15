import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logoImg from "@/assets/full_logo.png";
import { PHONE, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

const SERVICES = [
  { label: "All-on-X Full Arch", to: "/all-on-x" },
  { label: "Single Implants", to: "/dental-implants" },
  { label: "Porcelain Veneers", to: "/veneers" },
  { label: "Sedation Dentistry", to: "/sedation" },
  { label: "Pricing", to: "/pricing" },
];

const TOP_LINKS = [
  { label: "Pricing", to: "/pricing" },
  { label: "Results", to: "/before-after" },
  { label: "About", to: "/about" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); setServicesOpen(false); }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isServiceActive = SERVICES.some(s => s.to === location.pathname);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-[0_1px_12px_0_rgba(0,0,0,0.07)] border-b border-prana-border"
          : "bg-white/95 backdrop-blur-sm border-b border-prana-border/50"
      }`}>
        <div className="container-main flex items-center justify-between h-[68px] md:h-[76px] px-6 md:px-12">

          <Link to="/" className="flex-shrink-0">
            <img src={logoImg} alt="Prana Dental Miami" className="h-[50px] md:h-[60px] w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Services dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setServicesOpen(v => !v)}
                className={`flex items-center gap-1 font-body text-[11.5px] uppercase tracking-[0.1em] transition-colors duration-200 ${
                  isServiceActive ? "text-prana-charcoal" : "text-prana-charcoal/45 hover:text-prana-charcoal"
                }`}
              >
                Treatments <ChevronDown size={12} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-prana-border shadow-[0_8px_30px_0_rgba(0,0,0,0.08)] z-50">
                  {SERVICES.map(s => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className={`block px-5 py-3 font-body text-[12px] transition-colors border-b border-prana-border/40 last:border-0 ${
                        location.pathname === s.to
                          ? "text-prana-charcoal bg-prana-cream"
                          : "text-prana-text-muted hover:text-prana-charcoal hover:bg-prana-cream/60"
                      }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {TOP_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-[11.5px] uppercase tracking-[0.1em] transition-colors duration-200 ${
                  location.pathname === link.to ? "text-prana-charcoal" : "text-prana-charcoal/45 hover:text-prana-charcoal"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={PHONE_LINK} className="flex items-center gap-1.5 font-body text-[12px] text-prana-text-muted hover:text-prana-charcoal transition-colors">
              <Phone size={13} />{PHONE}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-[11px] py-2.5 px-5">
              Book Free Consultation
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-prana-charcoal p-2 -mr-2" aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="flex items-center justify-between h-[68px] px-6 border-b border-prana-border">
            <Link to="/" onClick={() => setOpen(false)}>
              <img src={logoImg} alt="Prana Dental Miami" className="h-[46px] w-auto" />
            </Link>
            <button onClick={() => setOpen(false)} className="text-prana-charcoal p-2 -mr-2"><X size={22} /></button>
          </div>

          <div className="flex flex-col flex-1 overflow-y-auto px-8 pt-8 gap-1">
            <p className="font-body text-[10px] uppercase tracking-[0.18em] text-prana-text-muted mb-3">Treatments</p>
            {SERVICES.map(s => (
              <Link key={s.to} to={s.to} className={`font-body text-[15px] py-2.5 border-b border-prana-border/40 ${location.pathname === s.to ? "text-prana-charcoal font-medium" : "text-prana-charcoal/60"}`}>
                {s.label}
              </Link>
            ))}
            <div className="mt-6 mb-3">
              <p className="font-body text-[10px] uppercase tracking-[0.18em] text-prana-text-muted mb-3">More</p>
              {TOP_LINKS.map(l => (
                <Link key={l.to} to={l.to} className={`block font-body text-[15px] py-2.5 border-b border-prana-border/40 ${location.pathname === l.to ? "text-prana-charcoal font-medium" : "text-prana-charcoal/60"}`}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="px-8 pb-10 pt-6 border-t border-prana-border space-y-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center">
              Book Free Consultation
            </a>
            <a href={PHONE_LINK} className="block text-center font-body text-[13px] text-prana-text-muted py-2">{PHONE}</a>
          </div>
        </div>
      )}
    </>
  );
};

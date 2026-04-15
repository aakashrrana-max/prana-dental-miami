import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@/assets/full_logo.png";
import { PHONE, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

const NAV_LINKS = [
  { label: "All-on-4", to: "/all-on-x" },
  { label: "Implants", to: "/dental-implants" },
  { label: "Veneers", to: "/veneers" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur-md shadow-[0_1px_12px_0_rgba(0,0,0,0.06)] border-b border-prana-border"
            : "bg-white/95 backdrop-blur-sm border-b border-prana-border/60"
        }`}
      >
        <div className="container-main flex items-center justify-between h-[68px] md:h-[76px] px-6 md:px-12">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoImg}
              alt="Prana Dental Miami"
              className="h-[52px] md:h-[62px] w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-[11.5px] uppercase tracking-[0.1em] transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "text-prana-charcoal"
                    : "text-prana-charcoal/45 hover:text-prana-charcoal"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PHONE_LINK}
              className="flex items-center gap-1.5 font-body text-[12px] text-prana-text-muted hover:text-prana-charcoal transition-colors"
            >
              <Phone size={13} />
              {PHONE}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[11px] py-2.5 px-5"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-prana-charcoal p-2 -mr-2"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="flex items-center justify-between h-[68px] px-6 border-b border-prana-border">
            <Link to="/" onClick={() => setOpen(false)}>
              <img src={logoImg} alt="Prana Dental Miami" className="h-[48px] w-auto" />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="text-prana-charcoal p-2 -mr-2"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col flex-1 px-8 pt-10 gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-[15px] tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? "text-prana-charcoal font-medium"
                    : "text-prana-charcoal/60 hover:text-prana-charcoal"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="px-8 pb-10 pt-6 border-t border-prana-border space-y-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full block text-center"
            >
              Book Free Consultation
            </a>
            <a
              href={PHONE_LINK}
              className="block text-center font-body text-[13px] text-prana-text-muted py-2"
            >
              {PHONE}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

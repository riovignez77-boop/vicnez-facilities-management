import Link from "next/link";
import Seal from "./Seal";
import { COMPANY } from "@/lib/content";

export default function Footer() {
  return (
    <>
      <footer className="bg-ink text-white/70 pt-20">
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5">
          {/* Top grid */}
          <div className="grid grid-cols-[1.45fr_0.7fr_0.9fr_1.15fr] items-start gap-10 pb-14 border-b border-white/8 max-[1050px]:grid-cols-2 max-[1050px]:gap-x-16 max-[1050px]:gap-y-12 max-[560px]:grid-cols-1">

            {/* Brand */}
            <div className="max-w-[390px]">
              <Link href="/" className="flex min-h-[82px] items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo-160.png" alt="Vicnez logo" className="h-20 w-20 flex-shrink-0 max-[560px]:h-[72px] max-[560px]:w-[72px]" />
                <span className="flex min-w-0 flex-col justify-center leading-[1.12]">
                  <span className="font-display text-[1.75rem] font-semibold text-white max-[560px]:text-[1.55rem]">Vicnez</span>
                  <span className="mt-1 whitespace-nowrap font-mono text-[0.76rem] uppercase tracking-[0.08em] text-gold-light max-[560px]:whitespace-normal max-[560px]:text-[0.68rem]">
                    Facilities Management W.L.L
                  </span>
                </span>
              </Link>
              <p className="mt-5 mb-0 max-w-[350px] text-[0.94rem] leading-7 text-white/55">
                Enterprise facilities management for residential, commercial, industrial, and
                hospitality clients across the Kingdom of Bahrain, delivered to an inspected,
                verified standard.
              </p>
              <div className="flex gap-3.5 mt-[20px]">
                <a href={`https://instagram.com/${COMPANY.instagram.replace("@", "")}`} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg className="w-5 h-5 stroke-white/80" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href={COMPANY.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg className="w-5 h-5 fill-white/80" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.5 21v-8h2.75l.41-3.2H13.5V7.76c0-.93.26-1.56 1.59-1.56h1.7V3.34a22.7 22.7 0 0 0-2.47-.13c-2.45 0-4.12 1.49-4.12 4.23V9.8H7.43V13h2.77v8h3.3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="pt-2">
              <h4 className="text-white font-body text-[0.85rem] tracking-[0.06em] uppercase mb-5">Company</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/about#why-choose-us", label: "Why Choose Us" },
                  { href: "/about#leadership", label: "Leadership" },
                  { href: "/contact", label: "Contact Us" },
                ].map((l) => (
                  <li key={l.href}><Link href={l.href} className="text-[0.92rem] text-white/60 hover:text-gold-light transition-colors duration-300">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="pt-2">
              <h4 className="text-white font-body text-[0.85rem] tracking-[0.06em] uppercase mb-5">Services</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { href: "/services#residential-cleaning", label: "Residential Cleaning" },
                  { href: "/services#commercial-cleaning", label: "Commercial Cleaning" },
                  { href: "/services#swimming-pool-services", label: "Swimming Pool Services" },
                  { href: "/services", label: "View All Services" },
                ].map((l) => (
                  <li key={l.href}><Link href={l.href} className="text-[0.92rem] text-white/60 hover:text-gold-light transition-colors duration-300">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="pt-2">
              <h4 className="text-white font-body text-[0.85rem] tracking-[0.06em] uppercase mb-5">Contact</h4>
              <ul className="flex flex-col gap-3">
                <li><a href={`tel:${COMPANY.phoneHref}`} className="text-[0.92rem] text-white/60 hover:text-gold-light transition-colors duration-300">{COMPANY.phone}</a></li>
                <li><a href={`tel:${COMPANY.mobileHref}`} className="text-[0.92rem] text-white/60 hover:text-gold-light transition-colors duration-300">{COMPANY.mobile}</a></li>
                <li><a href={`mailto:${COMPANY.email}`} className="text-[0.92rem] text-white/60 hover:text-gold-light transition-colors duration-300">{COMPANY.email}</a></li>
                <li className="text-[0.92rem] text-white/60">{COMPANY.address}</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex justify-between items-center py-[26px] text-[0.82rem] text-white/40 flex-wrap gap-3">
            <span>&copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</span>
            <span>Crafted for enterprise-grade facilities management.</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp float */}
      <a
        href={`https://wa.me/${COMPANY.mobileHref.replace("+", "")}`}
        className="fixed bottom-[26px] right-[26px] z-[900] w-[58px] h-[58px] rounded-full bg-gold flex items-center justify-center shadow-gold transition-transform duration-300 hover:scale-[1.08]"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="h-8 w-8 fill-navy"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.04 2a9.83 9.83 0 0 0-8.42 14.9L2 22l5.23-1.58A9.96 9.96 0 1 0 12.04 2Zm0 17.95a8.02 8.02 0 0 1-4.08-1.12l-.29-.17-3.1.94.96-3.02-.19-.31a7.86 7.86 0 0 1-1.22-4.21 7.92 7.92 0 1 1 7.92 7.89Zm4.35-5.92c-.24-.12-1.41-.69-1.63-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19a7.2 7.2 0 0 1-1.33-1.65c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.41-.58 1.61-1.13.2-.56.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>
    </>
  );
}

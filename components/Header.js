"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() { setIsScrolled(window.scrollY > 30); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-[1000] bg-navy/95 backdrop-blur-[12px] border-b border-white/10 transition-all duration-[400ms]",
        isScrolled
          ? "py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.22)]"
          : "py-[18px] shadow-[0_8px_34px_rgba(0,0,0,0.16)]",
      ].join(" ")}
    >
      <div className="max-w-container mx-auto px-8 max-[768px]:px-5 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3.5 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-160.png" alt="Vicnez Facilities Management logo" className="w-16 h-16 flex-shrink-0 max-[520px]:w-12 max-[520px]:h-12" />
          <span className="flex flex-col leading-[1.15]">
            <span className="font-display font-semibold text-[1.4rem] text-white max-[520px]:text-[1.18rem]">Vicnez</span>
            <span className="font-mono text-[0.68rem] tracking-[0.1em] text-gold-light uppercase max-[520px]:text-[0.58rem]">Facilities Management W.L.L</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className={[
            "flex items-center gap-10 ml-auto",
            "max-[980px]:fixed max-[980px]:top-0 max-[980px]:right-0 max-[980px]:h-screen max-[980px]:w-[min(78vw,340px)]",
            "max-[980px]:bg-navy max-[980px]:flex-col max-[980px]:items-start max-[980px]:pt-[100px] max-[980px]:px-9 max-[980px]:pb-10 max-[980px]:gap-6",
            "max-[980px]:shadow-[-10px_0_40px_rgba(0,0,0,0.3)]",
            "max-[980px]:transition-transform max-[980px]:duration-[450ms]",
            isOpen ? "max-[980px]:translate-x-0" : "max-[980px]:translate-x-full",
          ].join(" ")}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="hidden max-[980px]:ml-auto max-[980px]:flex items-center justify-center bg-white/5 border border-white/20 rounded-sm cursor-pointer text-white w-11 h-11 transition-colors hover:border-gold hover:text-gold-light"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}

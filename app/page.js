import Link from "next/link";
import Seal from "@/components/Seal";
import Icon from "@/components/Icon";
import { ValueCard, ClientChip } from "@/components/Cards";
import { SERVICE_CATEGORIES, WHY_CHOOSE_REASONS, VALUED_CLIENTS, HERO_PHOTO, COMPANY } from "@/lib/content";

export const metadata = { title: "Home" };

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[96vh] flex items-center bg-gradient-to-br from-navy via-navy-2 to-slate overflow-hidden pt-[140px] pb-[90px] max-[980px]:min-h-auto max-[980px]:pt-[120px]"
        style={{ "--hero-image": `url('${HERO_PHOTO}')` }}
      >
        {/* Image overlay */}
        <div className="absolute inset-0 hero-img-overlay opacity-90" />
        {/* Grid lines */}
        <div className="absolute inset-0 hero-grid-lines pointer-events-none" />

        <div className="max-w-container mx-auto px-8 max-[768px]:px-5 relative z-10 grid grid-cols-[1.2fr_0.8fr] gap-[60px] items-end max-[980px]:grid-cols-1 max-[980px]:gap-10">
          {/* Content */}
          <div>
            <h1 className="text-white">
              Facilities management, <span className="text-gold-light">run to an inspected standard.</span>
            </h1>
            <p className="text-white/78 text-[1.12rem] max-w-[560px] mb-[34px] mt-0">
              {COMPANY.legalName} delivers housekeeping, commercial cleaning and technical
              maintenance for properties across the Kingdom of Bahrain, with trained teams,
              documented quality checks, and a supervisor accountable for every site.
            </p>
            <div className="flex gap-4 flex-wrap mb-12">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/services" className="btn-secondary-dark">
                View Our Services
              </Link>
            </div>
            {/* Stats */}
            <div className="flex border-t border-white/16 pt-7 max-[980px]:flex-wrap max-[980px]:gap-5">
              {[
                { count: 9, suffix: "", lbl: "Service categories" },
                { count: 9, suffix: "", lbl: "Industries served" },
                { count: 100, suffix: "%", lbl: "Bahrain coverage" },
                { count: 24, suffix: "/7", lbl: "Scheduling flexibility" },
              ].map((s) => (
                <div key={s.lbl} className="flex-1 pr-6 max-[980px]:flex-[1_1_45%] max-[520px]:flex-[1_1_100%]">
                  <div className="font-mono text-[1.9rem] text-gold-light font-semibold" data-count={s.count} data-suffix={s.suffix}>0</div>
                  <div className="text-[0.78rem] text-white/65 mt-1">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel */}
          <div className="bg-white/7 border border-white/14 rounded-md p-[34px] backdrop-blur-[8px] shadow-[0_24px_80px_rgba(0,0,0,0.22)] reveal">
            <Seal className="w-[46px] h-[46px] mb-[18px]" />
            <h3 className="text-white mb-3.5">The Verified Service Promise</h3>
            <p className="text-white/70 text-[0.94rem] mb-0">
              Every Vicnez contract is built on a documented checklist, trained and uniformed staff,
              and a named supervisor who signs off on every visit. If a standard isn&apos;t met, we put
              it right. That&apos;s the seal behind our name.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────── */}
      <section className="py-[120px] max-[900px]:py-20">
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5">
          <div className="max-w-[680px] mb-16 reveal">
            <div className="eyebrow">What We Do</div>
            <h2>Nine service categories. One accountable standard.</h2>
            <p className="text-[1.05rem]">
              From residential housekeeping to construction handover cleaning, every service Vicnez
              provides runs against the same inspected quality framework.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-md border border-ivory-2 bg-ivory-2 shadow-sm reveal-stagger max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
            {SERVICE_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/services#${category.id}`}
                className="group flex min-h-[290px] flex-col bg-white px-8 py-9 transition-colors duration-300 hover:bg-navy focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold max-[1100px]:px-6"
              >
                <div className="mb-7 flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-full bg-ivory-2 transition-colors duration-300 group-hover:bg-gold/18">
                  <Icon
                    name={category.icon}
                    className="h-[26px] w-[26px] stroke-navy transition-colors duration-300 group-hover:stroke-gold-light"
                  />
                </div>
                <h3 className="mb-4 flex min-h-[4.7rem] items-start text-[1.2rem] leading-[1.3] transition-colors duration-300 group-hover:text-white">
                  {category.title}
                </h3>
                <p className="mb-0 text-[0.9rem] leading-6 text-stone transition-colors duration-300 group-hover:text-white/72">
                  {category.blurb}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Vicnez ────────────────────────────────────── */}
      <section className="py-[120px] bg-ivory-2 max-[900px]:py-20">
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5">
          <div className="max-w-[680px] mb-16 reveal">
            <div className="eyebrow">Why Vicnez</div>
            <h2>Built for clients who can&apos;t afford an unreliable FM partner.</h2>
          </div>
          <div className="grid grid-cols-4 gap-9 reveal-stagger max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
            {WHY_CHOOSE_REASONS.slice(0, 4).map((reason) => (
              <ValueCard key={reason.title} value={reason} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/about#why-choose-us" className="btn-outline">
              See All 9 Reasons
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats band ────────────────────────────────────── */}
      <section className="bg-navy py-20">
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5">
          <div className="grid grid-cols-4 gap-10 text-center reveal-stagger max-[780px]:grid-cols-2">
            {[
              { count: 9, suffix: "", lbl: "Industries served across Bahrain" },
              { count: 38, suffix: "+", lbl: "Individual service lines" },
              { count: 12, suffix: "", lbl: "Trusted client organizations" },
              { count: 6, suffix: "", lbl: "Step quality-assured process" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-mono text-gold-light font-bold" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }} data-count={s.count} data-suffix={s.suffix}>0</div>
                <div className="text-white/65 text-[0.88rem] mt-2">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ───────────────────────────────────────── */}
      <section className="py-[120px] max-[900px]:py-20">
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5">
          <div className="max-w-[680px] mx-auto text-center mb-16 reveal">
            <div className="eyebrow justify-center">Our Valued Clients</div>
            <h2>Trusted by leading organizations across Bahrain.</h2>
          </div>
          <div className="grid grid-cols-4 gap-5 reveal-stagger max-[1050px]:grid-cols-3 max-[720px]:grid-cols-2 max-[440px]:grid-cols-1">
            {VALUED_CLIENTS.map((client) => (
              <ClientChip key={client.name} client={client} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-navy to-slate py-[90px] text-center relative overflow-hidden cta-glow">
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5 relative z-10">
          <div className="reveal">
            <div className="eyebrow on-dark justify-center">Get Started</div>
            <h2 className="text-white max-w-[700px] mx-auto mb-[18px]">Ready for facilities management you don&apos;t have to manage?</h2>
            <p className="text-white/72 max-w-[560px] mx-auto mb-9">
              Tell us about your property and service needs. We&apos;ll respond with a tailored
              proposal, not a generic price list.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <a href={`tel:${COMPANY.phoneHref}`} className="btn-secondary-dark">
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

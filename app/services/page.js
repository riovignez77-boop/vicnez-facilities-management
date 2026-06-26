import Link from "next/link";
import Icon from "@/components/Icon";
import { CategoryCard, StaffPlanCard } from "@/components/Cards";
import { SERVICE_CATEGORIES, STAFFING_PLANS } from "@/lib/content";

export const metadata = {
  title: "Services",
  description: "Explore Vicnez Facilities Management's full range of services across residential, commercial, specialized, outdoor, pool, and construction cleaning categories.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy pt-[170px] pb-[90px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services-hero-technical-v2.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[64%_center] max-[768px]:object-[74%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,27,44,0.98)_0%,rgba(14,27,44,0.92)_39%,rgba(14,27,44,0.60)_69%,rgba(14,27,44,0.35)_100%)] max-[768px]:bg-navy/86" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-navy/25" />
        <div className="absolute inset-0 hero-grid-lines pointer-events-none" />
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5 relative z-10">
          <div className="flex gap-2.5 items-center text-[0.85rem] text-white/55 mb-6 font-mono">
            <Link href="/" className="hover:text-gold-light transition-colors">Home</Link>
            <span className="text-gold">/</span>
            <span>Services</span>
          </div>
          <h1 className="text-white max-w-[740px]">Nine service categories, run to one inspected standard.</h1>
          <p className="text-white/72 max-w-[600px] text-[1.05rem] mb-0">
            We provide professional and reliable cleaning &amp; facilities management services
            tailored to meet the unique needs of our residential and commercial clients.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-[120px] max-[900px]:py-20">
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5">
          {/* Jump nav */}
          <nav aria-label="Service categories" className="mb-20">
            <div className="mb-7 flex items-end justify-between gap-6 max-[640px]:items-start max-[640px]:flex-col">
              <div>
                <div className="eyebrow">Explore Our Services</div>
                <h2 className="mb-0 text-[clamp(1.8rem,3vw,2.5rem)]">Find the right support for your property.</h2>
              </div>
              <p className="mb-1 max-w-[400px] text-[0.94rem]">
                Select a category to view its services, scope, and available support options.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-md border border-ivory-2 bg-ivory-2 shadow-sm max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
              {SERVICE_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="group flex min-h-[112px] items-center gap-4 bg-white px-6 py-5 transition-all duration-300 hover:bg-navy focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-ivory-2 transition-colors duration-300 group-hover:bg-gold/18">
                    <Icon name={cat.icon} className="h-5 w-5 stroke-navy transition-colors duration-300 group-hover:stroke-gold-light" />
                  </span>
                  <span className="font-display text-[1rem] font-semibold leading-[1.35] text-navy transition-colors duration-300 group-hover:text-white">
                    {cat.title}
                  </span>
                </a>
              ))}
            </div>
          </nav>

          {SERVICE_CATEGORIES.map((category, index) => (
            <div key={category.id}>
              <CategoryCard category={category} index={index} isLast={index === SERVICE_CATEGORIES.length - 1} />
            </div>
          ))}
        </div>
      </section>

      {/* Staffing */}
      <section aria-labelledby="staff-supply-plans" className="py-[120px] bg-ivory-2 max-[900px]:py-20">
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5">
          <div className="max-w-[680px] mb-16 reveal">
            <div className="eyebrow">Service Staff Supply</div>
            <h2 id="staff-supply-plans">Providing staff on an hourly, monthly, or yearly basis.</h2>
            <p className="text-[1.05rem]">
              Choose flexible housekeeping and facilities staffing for short-term support,
              recurring requirements, or dependable long-term service.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-9 reveal-stagger max-[900px]:grid-cols-1">
            {STAFFING_PLANS.map((plan) => (
              <StaffPlanCard key={plan.title} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-navy to-slate py-[90px] text-center relative overflow-hidden cta-glow">
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5 relative z-10">
          <div className="reveal">
            <h2 className="text-white max-w-[700px] mx-auto mb-[18px]">Not sure which service fits your property?</h2>
            <p className="text-white/72 max-w-[560px] mx-auto mb-9">Send us a few details about your site and we&apos;ll recommend a service package and schedule that fits.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <a href="tel:+97377968553" className="btn-secondary-dark">
                Call +973 7796 8553
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

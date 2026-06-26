import Link from "next/link";
import Icon from "@/components/Icon";
import { ValueCard, ProcessStep, ReasonCard, IndustryCard, LeaderCard } from "@/components/Cards";
import {
  OUR_VALUES, VISION, MISSION, PROCESS_STEPS, ABOUT_PHOTO,
  WHY_CHOOSE_REASONS, OUR_COMMITMENT, SAFETY_APPROACH,
  SAFETY_PRACTICES, WE_CARE_FOR, INDUSTRIES, LEADERS, COMPANY,
} from "@/lib/content";

export const metadata = {
  title: "About Us",
  description: "Learn about Vicnez Facilities Management W.L.L, including our story, values, process, leadership, and why Bahrain businesses choose us for an inspected, verified standard of service.",
};

const JUMP_LINKS = [
  { href: "#our-story", label: "Our Story" },
  { href: "#our-process", label: "Our Process" },
  { href: "#why-choose-us", label: "Why Choose Us" },
  { href: "#health-safety", label: "Health & Safety" },
  { href: "#industries", label: "Industries" },
  { href: "#leadership", label: "Leadership" },
];

/* ── Shared layout helpers ──────────────────────────────── */
const SectionPad = ({ children, className = "", id, style }) => (
  <section id={id} style={style} className={`py-[120px] max-[900px]:py-20 relative ${className}`}>{children}</section>
);
const Container = ({ children }) => (
  <div className="max-w-container mx-auto px-8 max-[768px]:px-5">{children}</div>
);
const SectionHead = ({ eyebrow, title, body, center = false }) => (
  <div className={`max-w-[680px] mb-16 reveal ${center ? "mx-auto text-center" : ""}`}>
    <div className={`eyebrow${center ? " justify-center" : ""}`}>{eyebrow}</div>
    <h2>{title}</h2>
    {body && <p className="text-[1.05rem]">{body}</p>}
  </div>
);

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy pt-[170px] pb-[90px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about-hero-team-v2.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] max-[768px]:object-[72%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,27,44,0.98)_0%,rgba(14,27,44,0.92)_39%,rgba(14,27,44,0.55)_68%,rgba(14,27,44,0.28)_100%)] max-[768px]:bg-navy/86" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-navy/20" />
        <div className="absolute inset-0 hero-grid-lines pointer-events-none" />
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5 relative z-10">
          <div className="flex gap-2.5 items-center text-[0.85rem] text-white/55 mb-6 font-mono">
            <Link href="/" className="hover:text-gold-light transition-colors">Home</Link>
            <span className="text-gold">/</span>
            <span>About Us</span>
          </div>
          <h1 className="text-white max-w-[740px]">Welcome to Vicnez Facilities Management.</h1>
          <p className="text-white/72 max-w-[600px] text-[1.05rem] mb-0">
            A leading facilities management and cleaning solutions provider in the Kingdom of
            Bahrain, delivering professional, reliable, and cost-effective solutions.
          </p>
        </div>
      </section>

      {/* Jump nav */}
      <section className="sticky top-[92px] z-40 border-b border-ivory-2 bg-white/95 shadow-sm backdrop-blur-md max-[768px]:top-[78px]">
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5">
          <nav aria-label="About page sections" className="flex justify-center overflow-x-auto">
            {JUMP_LINKS.map((j) => (
              <a
                key={j.href}
                href={j.href}
                className="group relative flex min-h-[58px] flex-shrink-0 items-center border-r border-ivory-2 px-6 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-navy transition-colors duration-300 first:border-l hover:text-gold-dark max-[900px]:px-4"
              >
                {j.label}
                <span className="absolute inset-x-5 bottom-0 h-0.5 origin-center scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Our Story */}
      <SectionPad id="our-story">
        <Container>
          <div className="grid grid-cols-[1.08fr_0.92fr] gap-12 items-center max-[860px]:grid-cols-1 max-[860px]:gap-8">
            <div className="relative aspect-[5/4] overflow-hidden rounded-md shadow-md reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ABOUT_PHOTO} alt="Vicnez facilities staff sharing a team briefing" className="w-full h-full object-cover" />
            </div>
            <div className="reveal">
              <span className="mb-3 block font-mono text-[0.72rem] uppercase tracking-[0.12em] text-gold-dark">Our Story</span>
              <h2 className="mb-6 max-w-[520px] text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.12]">
                A standard, not a
                <span className="block">service list.</span>
              </h2>
              <p>Vicnez Facilities Management W.L.L. is a leading facilities management and cleaning solutions provider in the Kingdom of Bahrain. We deliver professional, reliable, and cost-effective cleaning and maintenance solutions to residential, commercial, industrial, and hospitality sectors.</p>
              <p>Our commitment to quality, safety, and customer satisfaction has helped us build long-term relationships with clients across Bahrain.</p>
              <p>We combine trained professionals, advanced equipment, and industry best practices to ensure every space we manage is clean, safe, and well-maintained.</p>
            </div>
          </div>
        </Container>
      </SectionPad>

      {/* Values */}
      <SectionPad className="bg-ivory-2">
        <Container>
          <SectionHead eyebrow="Our Values" title="What guides every contract we run." center />
          <div className="grid grid-cols-4 gap-9 reveal-stagger max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
            {OUR_VALUES.map((value) => <ValueCard key={value.title} value={value} centered />)}
          </div>
        </Container>
      </SectionPad>

      {/* Vision / Mission */}
      <SectionPad>
        <Container>
          <div className="grid grid-cols-2 gap-9 reveal-stagger max-[860px]:grid-cols-1">
            <div className="bg-navy p-10">
              <div className="seal-divider"><span className="line" /><span className="eyebrow on-dark" style={{ margin: 0 }}>Our Vision</span></div>
              <h3 className="text-white">{VISION}</h3>
            </div>
            <div className="bg-gold p-10">
              <div className="seal-divider"><span className="line" style={{ background: "#14202E" }} /><span className="eyebrow" style={{ margin: 0, color: "#14202E" }}>Our Mission</span></div>
              <h3 className="text-navy">{MISSION}</h3>
            </div>
          </div>
        </Container>
      </SectionPad>

      {/* Process */}
      <SectionPad id="our-process">
        <Container>
          <SectionHead
            eyebrow="Our Process"
            title="Delivering quality through a proven service approach."
            body="At Vicnez Facilities Management, we follow a structured process to ensure every project is executed with precision, transparency, and the highest quality standards."
          />
          <div className="max-w-[760px] reveal">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessStep key={step.num} step={step} isLast={i === PROCESS_STEPS.length - 1} />
            ))}
          </div>
        </Container>
      </SectionPad>

      {/* Why Choose Us */}
      <SectionPad id="why-choose-us" className="bg-ivory-2">
        <Container>
          <SectionHead eyebrow="Why Choose Us" title="Nine reasons clients stay with Vicnez." />
          <div className="grid grid-cols-3 gap-[2px] bg-ivory-2 reveal-stagger max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
            {WHY_CHOOSE_REASONS.map((reason) => <ReasonCard key={reason.num} reason={reason} />)}
          </div>
          <div className="mt-12 bg-navy px-10 py-8 rounded-md flex gap-5 items-center reveal max-[640px]:items-start max-[640px]:flex-col">
            <div className="w-[54px] h-[54px] rounded-full bg-gold/18 flex items-center justify-center flex-shrink-0 text-gold-light">
              <Icon name="shield" className="w-[26px] h-[26px] stroke-gold-light" />
            </div>
            <div>
              <h3 className="text-white mb-1.5">Our Commitment</h3>
              <p className="text-white/75 mb-0">{OUR_COMMITMENT}</p>
            </div>
          </div>
        </Container>
      </SectionPad>

      {/* Health & Safety */}
      <SectionPad id="health-safety" className="bg-ivory-2">
        <Container>
          <div className="overflow-hidden rounded-md bg-navy shadow-md reveal">
            <div className="grid grid-cols-[0.95fr_1.05fr] gap-16 px-12 py-14 max-[860px]:grid-cols-1 max-[860px]:gap-5 max-[640px]:px-6 max-[640px]:py-9">
              <div>
                <div className="eyebrow on-dark">Health &amp; Safety</div>
                <h2 className="mb-0 max-w-[560px] text-white">Protecting people. Maintaining standards.</h2>
              </div>
              <p className="mb-0 self-end text-[1.02rem] leading-8 text-white/72">
                Safety is built into every Vicnez assignment. Our teams follow approved procedures,
                use appropriate protective equipment, and work with carefully selected chemicals
                to protect people, property, and the environment.
              </p>
            </div>
            <div className="grid grid-cols-5 border-t border-white/12 reveal-stagger max-[1000px]:grid-cols-3 max-[680px]:grid-cols-1">
              {SAFETY_APPROACH.map((item, index) => (
                <div
                  key={item.title}
                  className="min-h-[225px] border-r border-white/12 px-7 py-8 last:border-r-0 max-[1000px]:border-b max-[680px]:min-h-0 max-[680px]:border-r-0"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <Icon name={item.icon} className="h-6 w-6 stroke-gold-light" />
                    <span className="font-mono text-[0.68rem] text-white/35">0{index + 1}</span>
                  </div>
                  <h3 className="mb-2 text-[1.08rem] text-white">{item.title}</h3>
                  <p className="mb-0 text-[0.86rem] leading-6 text-white/64">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-[1.08fr_0.92fr] border-y border-ivory-2 bg-white reveal max-[860px]:grid-cols-1">
            <div className="border-r border-ivory-2 px-10 py-11 max-[860px]:border-b max-[860px]:border-r-0 max-[640px]:px-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-gold-dark">Operational Controls</span>
              <h3 className="mb-6 mt-2">Safety practices we follow</h3>
              <ul className="grid grid-cols-2 border-l border-t border-ivory-2 max-[560px]:grid-cols-1">
                {SAFETY_PRACTICES.map((practice, index) => (
                  <li
                    key={practice}
                    className={`grid min-h-[88px] grid-cols-[32px_1fr] items-start gap-3 border-b border-r border-ivory-2 px-4 py-4 text-[0.9rem] leading-6 text-ink ${
                      index === SAFETY_PRACTICES.length - 1 ? "col-span-2 max-[560px]:col-span-1" : ""
                    }`}
                  >
                    <span className="pt-0.5 font-mono text-[0.68rem] text-gold-dark">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-10 py-11 max-[640px]:px-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-gold-dark">Our Responsibility</span>
              <h3 className="mb-6 mt-2">Who our standards protect</h3>
              <div className="grid grid-cols-2 gap-x-7 gap-y-7 max-[560px]:grid-cols-1">
                {WE_CARE_FOR.map((item) => (
                  <div key={item.title}>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center border border-ivory-2 bg-ivory">
                      <Icon name={item.icon} className="h-5 w-5 stroke-navy" />
                    </div>
                    <h4 className="mb-1.5 text-[1rem]">{item.title}</h4>
                    <p className="mb-0 text-[0.84rem] leading-6">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </SectionPad>

      {/* Industries */}
      <SectionPad id="industries">
        <Container>
          <SectionHead
            eyebrow="Industries We Serve"
            title="Tailored solutions for every type of property."
            body="We understand the unique needs of each environment and deliver solutions that ensure cleanliness, safety, and operational excellence."
          />
          <div className="grid grid-cols-3 gap-9 reveal-stagger max-[900px]:grid-cols-1">
            {INDUSTRIES.map((industry) => <IndustryCard key={industry.num} industry={industry} />)}
          </div>
        </Container>
      </SectionPad>

      {/* Leadership */}
      <SectionPad id="leadership" className="bg-ivory-2">
        <Container>
          <SectionHead
            eyebrow="Leadership"
            title="Strong leadership drives every successful organization."
            body="Our leadership team brings a wealth of experience, expertise, and a shared commitment to excellence, innovation, and growth."
            center
          />
          <div className="mx-auto grid max-w-[980px] grid-cols-2 items-stretch gap-8 max-[860px]:max-w-[560px] max-[860px]:grid-cols-1">
            {LEADERS.map((leader) => <LeaderCard key={leader.name} leader={leader} />)}
          </div>
        </Container>
      </SectionPad>

      {/* Quote */}
      <SectionPad>
        <Container>
          <div className="max-w-[760px] mx-auto text-center reveal">
            <div className="font-display text-[4rem] text-gold leading-none mb-2">&ldquo;</div>
            <blockquote className="font-display font-medium text-navy m-0 mb-7 leading-[1.4]" style={{ fontSize: "clamp(1.4rem,2.4vw,1.9rem)" }}>
              We don&apos;t believe facilities management should run on goodwill. It should run on a
              checklist, a trained team, and someone whose name is on the result. That&apos;s what we
              built Vicnez to be.
            </blockquote>
            <div className="text-[0.92rem] text-stone"><strong className="text-navy">Thuraisamy Sri Ranjani</strong> - Founder &amp; Managing Director</div>
          </div>
        </Container>
      </SectionPad>

      {/* CTA */}
      <section className="bg-gradient-to-br from-navy to-slate py-[90px] text-center relative overflow-hidden cta-glow">
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5 relative z-10">
          <div className="reveal">
            <h2 className="text-white max-w-[700px] mx-auto mb-[18px]">Want to know how we&apos;d run your property?</h2>
            <p className="text-white/72 max-w-[560px] mx-auto mb-9">Tell us about your site and we&apos;ll walk you through how a Vicnez contract would actually work, day to day.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary">
                Talk to Our Team
              </Link>
              <a href={`mailto:${COMPANY.email}`} className="btn-secondary-dark">
                Email {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

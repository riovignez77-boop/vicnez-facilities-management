import Link from "next/link";
import Icon from "./Icon";
import Seal from "./Seal";

/* ── Icon wrapper shared style ─────────────────────────── */
const IconWrap = ({ className = "", children }) => (
  <div className={`w-[54px] h-[54px] rounded-full bg-ivory-2 flex items-center justify-center ${className}`}>
    {children}
  </div>
);

/* ── Service Category detail block ─────────────────────── */
export function CategoryCard({ category, isLast }) {
  return (
    <div id={category.id} className={`scroll-mt-hero pb-14 ${isLast ? "" : "border-b border-ivory-2"}`}>
      <div className="grid grid-cols-[1.12fr_0.88fr] gap-14 items-center py-[72px] max-[980px]:grid-cols-[1fr_0.9fr] max-[860px]:grid-cols-1 max-[860px]:gap-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-md reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={category.img} alt={`${category.title} by Vicnez Facilities Management`} className="w-full h-full object-cover" />
        </div>
        <div className="reveal">
          <span className="font-mono text-[0.72rem] text-gold-dark tracking-[0.1em] uppercase">Service Category</span>
          <h2 className="mt-1">{category.title}</h2>
          <p>{category.blurb}</p>
          {!category.subItems && (
            <ul className="mt-[22px] flex flex-col gap-3">
              {category.items.map((item) => (
                <li key={item} className="flex gap-3 items-start text-[0.95rem] text-ink">
                  <Icon name="check" className="flex-shrink-0 mt-0.5 w-[18px] h-[18px] stroke-gold-dark" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-7">
            <Link href="/contact" className="btn-outline">
              Request This Service
            </Link>
          </div>
        </div>
      </div>

      {category.subItems && (
        <div className="grid grid-cols-3 gap-7 mt-9 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {category.subItems.map((sub) => (
            <SubServiceCard key={sub.title} sub={sub} />
          ))}
        </div>
      )}
    </div>
  );
}

export function SubServiceCard({ sub }) {
  return (
    <div className="flex h-full flex-col bg-white border border-ivory-2 rounded-md overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-[3px] transition-all duration-300 reveal">
      <div className="aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={sub.img} alt={sub.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6 pb-7">
        <h4 className="min-h-[2.8rem] mb-4 font-display text-[1.08rem] leading-[1.35] text-navy">{sub.title}</h4>
        <ul className="flex flex-col gap-2">
          {sub.points.map((point) => (
            <li key={point} className="flex gap-2 items-start text-[0.85rem] text-stone">
              <Icon name="check" className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 stroke-gold-dark" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FeatureBand({ features }) {
  return (
    <div className="bg-navy rounded-md p-8 mt-9 reveal">
      <div className="grid grid-cols-6 gap-5 text-center max-[900px]:grid-cols-3 max-[560px]:grid-cols-2">
        {features.map((f) => (
          <div key={f.text} className="flex flex-col items-center gap-2.5">
            <div className="w-[54px] h-[54px] rounded-full bg-gold/18 flex items-center justify-center">
              <Icon name={f.icon} className="w-[26px] h-[26px] stroke-gold-light" />
            </div>
            <span className="text-[0.78rem] text-white/85 font-semibold leading-tight">{f.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ValueCard({ value, centered = false }) {
  return (
    <div className={`p-2 ${centered ? "text-center" : ""}`}>
      <div className={`w-[54px] h-[54px] rounded-full bg-ivory-2 flex items-center justify-center mb-[18px] ${centered ? "mx-auto" : ""}`}>
        <Icon name={value.icon} className="w-[26px] h-[26px] stroke-navy" />
      </div>
      <h3>{value.title}</h3>
      <p>{value.text}</p>
    </div>
  );
}

export function ReasonCard({ reason }) {
  return (
    <div className="bg-white px-[34px] py-[42px] relative transition-all duration-[400ms] hover:bg-navy hover:-translate-y-1 hover:z-10 hover:shadow-md group cursor-default">
      <span className="absolute top-[34px] right-[34px] font-mono text-[0.75rem] text-stone-light group-hover:text-white/30">{reason.num}</span>
      <div className="w-[54px] h-[54px] rounded-full bg-ivory-2 flex items-center justify-center mb-6 group-hover:bg-gold/18 transition-colors duration-[400ms]">
        <Icon name={reason.icon} className="w-[26px] h-[26px] stroke-navy group-hover:stroke-gold-light transition-colors duration-[400ms]" />
      </div>
      <h3 className="mb-2.5 group-hover:text-white transition-colors duration-[400ms]">{reason.title}</h3>
      <p className="text-[0.92rem] mb-0 group-hover:text-white/68 transition-colors duration-[400ms]">{reason.text}</p>
    </div>
  );
}

export function ProcessStep({ step, isLast }) {
  return (
    <div className={`flex gap-6 relative ${isLast ? "" : "pb-8"}`}>
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-navy text-gold-light flex items-center justify-center font-mono font-bold text-[1.1rem] flex-shrink-0">
          {step.num}
        </div>
        {!isLast && <div className="w-px flex-1 bg-ivory-2 mt-2" />}
      </div>
      <div className="pb-2">
        <h3 className="mb-2">{step.title}</h3>
        <p>{step.text}</p>
      </div>
    </div>
  );
}

export function IndustryCard({ industry }) {
  return (
    <div className="bg-white p-7 shadow-sm rounded-md border border-ivory-2">
      <span className="font-mono text-gold-dark text-[0.85rem] block mb-2.5">{industry.num}</span>
      <h3 className="mt-2.5">{industry.title}</h3>
      <p>{industry.text}</p>
    </div>
  );
}

export function StaffPlanCard({ plan }) {
  return (
    <div className="flex h-full flex-col bg-white p-8 shadow-sm rounded-md border border-ivory-2">
      <h3 className="mb-3">{plan.title}</h3>
      <p>{plan.text}</p>
      <ul className="mt-5 flex flex-col gap-3 border-t border-ivory-2 pt-5">
        {plan.points.map((point) => (
          <li key={point} className="text-[0.95rem] leading-relaxed text-ink">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ClientChip({ client }) {
  return (
    <div className="group flex min-h-[220px] flex-col overflow-hidden rounded-md border border-ivory-2 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-[160px] items-center justify-center border-b border-ivory-2 bg-white px-7 py-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex min-h-[60px] flex-1 items-center justify-center px-5 py-3 text-center text-[0.88rem] font-semibold leading-5 text-navy">
        {client.name}
      </div>
    </div>
  );
}

export function LeaderCard({ leader }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border border-ivory-2 border-t-2 border-t-gold bg-white shadow-sm transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-md reveal">
      <div className="relative aspect-[4/3] overflow-hidden bg-white px-4 pt-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={leader.img}
          alt={`Portrait of ${leader.name}`}
          className="h-full w-full object-contain"
          style={{ objectPosition: leader.imagePosition }}
        />
      </div>
      <div className="flex flex-1 flex-col p-8 max-[560px]:p-6">
        <div className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-gold-dark">{leader.role}</div>
        <h3 className="mb-3 text-[1.45rem]">{leader.name}</h3>
        <p className="mb-5 min-h-[4.8rem] text-[0.92rem] leading-7 max-[860px]:min-h-0">{leader.bio}</p>
        <div className="mb-6 flex min-h-[4.5rem] flex-wrap content-start gap-2 max-[860px]:min-h-0">
          {leader.skills.map((skill) => (
            <span key={skill} className="border border-ivory-2 bg-ivory px-3 py-1.5 font-mono text-[0.66rem] tracking-[0.02em] text-navy">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-ivory-2 pt-5">
          <span className="font-display text-[0.95rem] italic text-stone-light">{leader.name}</span>
          <span className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-navy">
            <Seal className="h-4 w-4" />
            Leadership
          </span>
        </div>
      </div>
    </article>
  );
}

export function CompareRow({ row }) {
  const Yes = () => (
    <span className="text-navy font-bold flex items-center gap-1">
      <Icon name="check" className="w-4 h-4 stroke-gold-dark" /> Yes
    </span>
  );
  const No = () => <span className="text-stone-light">-</span>;
  return (
    <tr className="hover:[&>td]:bg-navy/[0.02]">
      <td className="px-5 py-[18px] text-left border-b border-ivory-2 text-[0.95rem]">{row.label}</td>
      <td className="px-5 py-[18px] text-left border-b border-ivory-2 text-[0.95rem] bg-gold/[0.06] font-semibold text-navy">{row.vicnez ? <Yes /> : <No />}</td>
      <td className="px-5 py-[18px] text-left border-b border-ivory-2 text-[0.95rem]">{row.typical ? <Yes /> : <No />}</td>
    </tr>
  );
}

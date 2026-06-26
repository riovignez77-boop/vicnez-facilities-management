import Link from "next/link";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/content";

export const metadata = {
  title: "Contact Us",
  description: "Contact Vicnez Facilities Management W.L.L in Bahrain for housekeeping, commercial cleaning and facilities maintenance services.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy pt-[170px] pb-[90px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/contact-hero-consultation-v2.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] max-[768px]:object-[73%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,27,44,0.97)_0%,rgba(14,27,44,0.90)_38%,rgba(14,27,44,0.49)_68%,rgba(14,27,44,0.25)_100%)] max-[768px]:bg-navy/84" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-navy/25" />
        <div className="absolute inset-0 hero-grid-lines pointer-events-none" />
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5 relative z-10">
          <div className="flex gap-2.5 items-center text-[0.85rem] text-white/55 mb-6 font-mono">
            <Link href="/" className="hover:text-gold-light transition-colors">Home</Link>
            <span className="text-gold">/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="text-white max-w-[740px]">Tell us about your property. We&apos;ll handle the rest.</h1>
          <p className="text-white/72 max-w-[600px] text-[1.05rem] mb-0">
            Whether it&apos;s a single villa or a portfolio of commercial buildings, send us the
            details and we&apos;ll come back with a tailored proposal.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-[120px] max-[900px]:py-20">
        <div className="max-w-container mx-auto px-8 max-[768px]:px-5 grid grid-cols-[1fr_1.15fr] gap-16 max-[900px]:grid-cols-1">

          {/* Info card */}
          <div className="bg-navy text-white p-11 rounded-md reveal shadow-md max-[560px]:p-7">
            <div className="eyebrow on-dark mb-[18px]">Get in Touch</div>
            <h3 className="mb-4 whitespace-nowrap text-[1.35rem] text-white max-[1180px]:whitespace-normal max-[900px]:whitespace-nowrap max-[560px]:whitespace-normal">
              {COMPANY.legalName}
            </h3>
            <p className="text-white/70 mb-6">Speak to our team directly, or send your requirements through the form and we&apos;ll respond within one business day.</p>

            {[
              {
                icon: "phone", lbl: "Phone & Mobile",
                val: <><a href={`tel:${COMPANY.phoneHref}`} className="hover:text-gold-light transition-colors">{COMPANY.phone}</a> &nbsp;&middot;&nbsp; <a href={`tel:${COMPANY.mobileHref}`} className="hover:text-gold-light transition-colors">{COMPANY.mobile}</a></>,
              },
              {
                icon: "mail", lbl: "Email",
                val: <><a href={`mailto:${COMPANY.email}`} className="hover:text-gold-light transition-colors">{COMPANY.email}</a> &nbsp;&middot;&nbsp; <a href={`mailto:${COMPANY.email2}`} className="hover:text-gold-light transition-colors">{COMPANY.email2}</a></>,
              },
              {
                icon: "globe", lbl: "Website & Social Media",
                val: (
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <a href={`https://${COMPANY.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">
                      {COMPANY.website}
                    </a>
                    <span className="text-white/35">&middot;</span>
                    <a href={`https://instagram.com/${COMPANY.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">
                      Instagram
                    </a>
                    <span className="text-white/35">&middot;</span>
                    <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">
                      Facebook
                    </a>
                  </span>
                ),
              },
              {
                icon: "pin", lbl: "Head Office",
                val: COMPANY.address,
              },
            ].map((row) => (
              <div key={row.lbl} className="flex gap-4 items-start py-[18px] border-b border-white/10 last:border-b-0">
                <div className="w-[38px] h-[38px] rounded-full bg-gold/18 flex items-center justify-center flex-shrink-0">
                  <Icon name={row.icon} className="w-[18px] h-[18px] stroke-gold-light" />
                </div>
                <div>
                  <div className="font-mono text-[0.74rem] tracking-[0.08em] uppercase text-white/50 mb-1">{row.lbl}</div>
                  <div className="text-white text-[0.98rem]">{row.val}</div>
                </div>
              </div>
            ))}

            <div className="mt-7 rounded-md overflow-hidden border border-white/12">
              <iframe
                src="https://maps.google.com/maps?q=Manama,Bahrain&z=12&output=embed"
                width="100%" height="220" style={{ border: 0 }}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Vicnez Facilities Management location map"
              />
            </div>
          </div>

          {/* Form */}
          <div className="reveal flex self-start bg-white border border-ivory-2 rounded-md shadow-sm p-9 max-[560px]:p-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

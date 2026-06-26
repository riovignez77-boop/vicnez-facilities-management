"use client";

import { useState } from "react";
import Icon from "./Icon";
import { COMPANY, SERVICE_CATEGORIES } from "@/lib/content";

const SERVICE_OPTIONS = [...SERVICE_CATEGORIES.map((c) => c.title), "Not Sure / Multiple Services"];

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${COMPANY.email}`;

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const nextErrors = {};
    ["name", "phone", "email", "message"].forEach((field) => {
      if (!data.get(field) || !data.get(field).toString().trim()) nextErrors[field] = true;
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json().catch(() => null);

      if (res.ok && result?.success !== false) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch { setStatus("error"); }
  }

  const inputBase = "form-input w-full";
  const errBorder = "border-[#C0392B]";

  return (
    <div className="flex w-full flex-col">
      {status === "success" && (
        <div
          className="flex min-h-[460px] w-full flex-col items-center justify-center px-6 py-14 text-center max-[900px]:min-h-[400px] max-[560px]:px-2"
          role="status"
          aria-live="polite"
        >
          <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
            <Icon name="check" className="h-7 w-7 stroke-gold-dark" />
          </div>
          <div className="eyebrow justify-center mb-4">Request Received</div>
          <h2 className="mb-4 max-w-[520px] text-[clamp(2rem,4vw,3.25rem)]">
            Thank you for contacting Vicnez.
          </h2>
          <p className="mb-8 max-w-[500px] text-[1.02rem] leading-7">
            Your enquiry has been delivered to our team. We will review your requirements and
            contact you within one business day.
          </p>
          <button
            type="button"
            className="btn-primary cursor-pointer"
            onClick={() => {
              setStatus("idle");
              setErrors({});
            }}
          >
            Send Another Request
          </button>
        </div>
      )}
      {status === "error" && (
        <div className="mb-6 flex items-start gap-3 rounded-sm border border-[#C0392B] bg-[rgba(192,57,43,0.08)] px-5 py-[18px] text-[0.92rem] text-navy" role="alert">
          <Icon name="check" className="w-5 h-5 stroke-[#C0392B] flex-shrink-0" />
          <span>
            We could not send your request. Please try again, call{" "}
            <a href={`tel:${COMPANY.phoneHref}`} className="font-semibold underline decoration-gold/70 underline-offset-4">
              {COMPANY.phone}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${COMPANY.email}`} className="font-semibold underline decoration-gold/70 underline-offset-4">
              {COMPANY.email}
            </a>.
          </span>
        </div>
      )}
      {status !== "success" && <form id="contact-form" onSubmit={handleSubmit} className="flex h-full w-full flex-col">
        <input type="hidden" name="_subject" value="New enquiry from the Vicnez website" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
        <div className="grid grid-cols-2 gap-[22px] max-[640px]:grid-cols-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[0.82rem] font-semibold text-navy">Full Name *</label>
            <input type="text" id="name" name="name" required className={`${inputBase} ${errors.name ? errBorder : ""}`} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-[0.82rem] font-semibold text-navy">Company / Property Name</label>
            <input type="text" id="company" name="company" className={inputBase} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-[0.82rem] font-semibold text-navy">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required className={`${inputBase} ${errors.phone ? errBorder : ""}`} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[0.82rem] font-semibold text-navy">Email Address *</label>
            <input type="email" id="email" name="email" required className={`${inputBase} ${errors.email ? errBorder : ""}`} />
          </div>
          <div className="flex flex-col gap-2 col-span-2 max-[640px]:col-span-1">
            <label htmlFor="service" className="text-[0.82rem] font-semibold text-navy">Service Required</label>
            <select id="service" name="service" defaultValue="" className={inputBase}>
              <option value="">Select a service</option>
              {SERVICE_OPTIONS.map((opt) => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-2 col-span-2 max-[640px]:col-span-1">
            <label htmlFor="message" className="text-[0.82rem] font-semibold text-navy">Tell us about your property *</label>
            <textarea
              id="message" name="message" required
              placeholder="Property type, size, location, preferred schedule, and any specific cleaning or maintenance requirements..."
              className={`${inputBase} min-h-[330px] resize-y max-[900px]:min-h-[190px] ${errors.message ? errBorder : ""}`}
            />
          </div>
        </div>
        <p className="text-[0.82rem] text-stone-light mt-2.5 mb-0">
          By submitting, you agree to be contacted by Vicnez Facilities Management W.L.L regarding your enquiry.
        </p>
        <button
          type="submit"
          className="btn-primary w-full mt-[18px] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Request"}
        </button>
      </form>}
    </div>
  );
}

// The "Inspection Seal" — the gold checkmark stamp motif used throughout
// the site to represent the Verified Service Promise.

export default function Seal({ className = "seal-mark" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="24" cy="24" r="22" stroke="#C6A15B" strokeWidth="1.4" />
      <circle cx="24" cy="24" r="17" stroke="#C6A15B" strokeWidth="1" strokeDasharray="2 3" />
      <path
        d="M15 24.5L20.5 30L33 16"
        stroke="#C6A15B"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

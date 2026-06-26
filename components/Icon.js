// Shared icon set — stroke-style SVG icons used across service cards,
// value props, and contact rows. Pure presentational component.

const PATHS = {
  home: <><path d="M3 11.5L12 4l9 7.5" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
  office: <><rect x="4" y="3" width="16" height="18" /><line x1="8" y1="7" x2="8" y2="7.01" /><line x1="12" y1="7" x2="12" y2="7.01" /><line x1="16" y1="7" x2="16" y2="7.01" /><line x1="8" y1="11" x2="8" y2="11.01" /><line x1="12" y1="11" x2="12" y2="11.01" /><line x1="16" y1="11" x2="16" y2="11.01" /><line x1="9" y1="21" x2="9" y2="17" /><line x1="15" y1="21" x2="15" y2="17" /></>,
  drop: <path d="M12 2.7s6 6.4 6 11a6 6 0 1 1-12 0c0-4.6 6-11 6-11z" />,
  car: <><path d="M5 17h14l-1.5-6.5a2 2 0 0 0-2-1.5H8.5a2 2 0 0 0-2 1.5L5 17z" /><circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" /><path d="M5 17v-3h14v3" /></>,
  store: <><path d="M3 9l1-5h16l1 5" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /><path d="M5 9v11h14V9" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></>,
  villa: <><path d="M4 21V10l8-6 8 6v11" /><path d="M9 21v-7h6v7" /><path d="M4 10h16" /></>,
  building: <><rect x="6" y="2" width="12" height="20" /><line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" /><line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" /><line x1="9" y1="14" x2="9" y2="14.01" /><line x1="15" y1="14" x2="15" y2="14.01" /><path d="M10 22v-4h4v4" /></>,
  wind: <><path d="M3 8h11a3 3 0 1 0-3-3" /><path d="M3 12h15a3 3 0 1 1-3 3" /><path d="M3 16h8a2.5 2.5 0 1 1-2.5 2.5" /></>,
  check: <path d="M5 13l4 4L19 7" />,
  shield: <><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 16 14" /></>,
  team: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" /><path d="M16 14a4 4 0 0 1 4 4v2" /></>,
  badge: <><circle cx="12" cy="9" r="6" /><path d="M9 14.5L7 22l5-3 5 3-2-7.5" /></>,
  leaf: <><path d="M5 21c10 0 14-6 14-15a14 14 0 0 0-14 15z" /><path d="M5 21c2-6 5-9 9-11" /></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l9 6 9-6" /></>,
  pin: <><path d="M12 21s7-7.4 7-12a7 7 0 0 0-14 0c0 4.6 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  tag: <><path d="M20.59 13.41L11 3.83A2 2 0 0 0 9.59 3.41H4a2 2 0 0 0-2 2v5.59a2 2 0 0 0 .59 1.41l9.58 9.58a2 2 0 0 0 2.83 0l6.59-6.59a2 2 0 0 0 0-2.83z" /><circle cx="7.5" cy="7.5" r="1.2" /></>,
  tool: <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L4 17l3 3 5.7-5.7a4 4 0 1 0 5.4-5.4z" />,
  hardhat: <><path d="M4 18a8 8 0 1 1 16 0" /><rect x="2" y="18" width="20" height="2.5" rx="1" /><rect x="11" y="5" width="2" height="5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a13 13 0 0 1 0 18" /><path d="M12 3a13 13 0 0 0 0 18" /></>,
  clipboard: <><rect x="6" y="4" width="12" height="17" rx="1.5" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" /><line x1="9" y1="10" x2="15" y2="10" /><line x1="9" y1="14" x2="15" y2="14" /></>,
  doc: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></>,
  star: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
  bolt: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  snowflake: <><line x1="12" y1="2" x2="12" y2="22" /><line x1="4" y1="7" x2="20" y2="17" /><line x1="20" y1="7" x2="4" y2="17" /></>,
  paintbrush: <><path d="M9 18l-4 4" /><path d="M14 7l-9 9 3 3 9-9z" /><path d="M14 7l3-3a2.1 2.1 0 0 1 3 3l-3 3" /></>,
};

export default function Icon({ name, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {PATHS[name] || PATHS.check}
    </svg>
  );
}

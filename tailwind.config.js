/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:      "#0E1B2C",
        "navy-2":  "#122337",
        slate:     "#1B2A3D",
        "slate-2": "#243752",
        ivory:     "#F7F4EE",
        "ivory-2": "#EFEAE0",
        gold:      "#C6A15B",
        "gold-light": "#DCC089",
        "gold-dark":  "#9C7C3D",
        stone:     "#69707B",
        "stone-light": "#9AA0AA",
        ink:       "#14202E",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body:    ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono:    ["JetBrains Mono", "Courier New", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
      boxShadow: {
        sm:   "0 2px 12px rgba(14,27,44,0.06)",
        md:   "0 12px 40px rgba(14,27,44,0.12)",
        gold: "0 8px 28px rgba(198,161,91,0.25)",
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.22,1,0.36,1)",
      },
      maxWidth: {
        container: "1240px",
      },
      fontSize: {
        "hero": ["clamp(2.4rem,4.4vw,4.2rem)", { lineHeight: "1.12", fontWeight: "600" }],
        "h2":   ["clamp(1.9rem,3vw,2.75rem)",  { lineHeight: "1.12", fontWeight: "600" }],
        "h3":   ["clamp(1.3rem,1.8vw,1.6rem)", { lineHeight: "1.12", fontWeight: "600" }],
      },
      keyframes: {
        revealUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

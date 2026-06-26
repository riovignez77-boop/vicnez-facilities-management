"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Ports the reveal-on-scroll and animated-counter behavior from the original
// static site's main.js into a client component mounted in the root layout.
// Re-runs on every route change (via usePathname) since the App Router keeps
// the layout mounted across navigations — without this dependency, sections
// on newly visited pages would never get observed.
export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal, .reveal-stagger");
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }

    const counters = document.querySelectorAll("[data-count]");
    function animateCounter(el) {
      const target = parseFloat(el.getAttribute("data-count"));
      const decimals = el.getAttribute("data-decimals") ? parseInt(el.getAttribute("data-decimals"), 10) : 0;
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1400;
      let start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = value.toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(decimals) + suffix;
      }
      requestAnimationFrame(step);
    }

    let counterIO;
    if ("IntersectionObserver" in window && counters.length) {
      counterIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterIO.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach((el) => counterIO.observe(el));
    }

    return () => {
      io && io.disconnect();
      counterIO && counterIO.disconnect();
    };
  }, [pathname]);

  return null;
}

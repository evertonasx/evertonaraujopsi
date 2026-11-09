"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
    } else {
      document.documentElement.classList.add("reveal-ready");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });
      elements.forEach((element) => observer.observe(element));
    }

    const updateThread = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
    };
    const updateCursor = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", event.clientX + "px");
      document.documentElement.style.setProperty("--cursor-y", event.clientY + "px");
    };
    updateThread();
    window.addEventListener("scroll", updateThread, { passive: true });
    window.addEventListener("resize", updateThread);
    if (window.matchMedia("(pointer: fine)").matches) window.addEventListener("mousemove", updateCursor, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateThread);
      window.removeEventListener("resize", updateThread);
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <svg className="scroll-thread" viewBox="0 0 42 1000" preserveAspectRatio="none" aria-hidden="true">
      <path className="thread-base" d="M21 0 C4 90 38 150 21 240 S4 390 21 500 S38 650 21 760 S4 910 21 1000" />
      <path className="thread-progress" pathLength="1" d="M21 0 C4 90 38 150 21 240 S4 390 21 500 S38 650 21 760 S4 910 21 1000" />
    </svg>
  );
}

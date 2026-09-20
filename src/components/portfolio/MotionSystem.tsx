"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function MotionSystem() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cleanups: (() => void)[] = [];
    let context: gsap.Context | undefined;

    // This boundary can mount before all streamed server children finish hydrating.
    // Delay DOM-writing animation setup so GSAP cannot race React hydration.
    const timer = window.setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(
            element,
            { y: 42, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              immediateRender: false,
              scrollTrigger: { trigger: element, start: "top 88%", once: true },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-project]").forEach((element) => {
          gsap.fromTo(
            element,
            { clipPath: "inset(8% 0 8% 0)" },
            {
              clipPath: "inset(0% 0 0% 0)",
              ease: "none",
              immediateRender: false,
              scrollTrigger: { trigger: element, start: "top 90%", end: "top 35%", scrub: 0.6 },
            },
          );
        });

        if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
          gsap.utils.toArray<HTMLElement>(".button, .nav-link").forEach((element) => {
            const move = (event: PointerEvent) => {
              const box = element.getBoundingClientRect();
              gsap.to(element, {
                x: (event.clientX - box.left - box.width / 2) * 0.12,
                y: (event.clientY - box.top - box.height / 2) * 0.16,
                duration: 0.35,
                ease: "power2.out",
                overwrite: true,
              });
            };
            const leave = () => gsap.to(element, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, .45)", overwrite: true });
            element.addEventListener("pointermove", move);
            element.addEventListener("pointerleave", leave);
            cleanups.push(() => {
              element.removeEventListener("pointermove", move);
              element.removeEventListener("pointerleave", leave);
            });
          });
        }
      });
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.clearTimeout(timer);
      cleanups.forEach((cleanup) => cleanup());
      context?.revert();
    };
  }, []);

  return null;
}

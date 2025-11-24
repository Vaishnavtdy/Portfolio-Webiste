"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationWrapperProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade-up" | "fade-in" | "scale-up";
    delay?: number;
}

export function ScrollAnimationWrapper({
    children,
    className = "",
    animation = "fade-up",
    delay = 0,
}: ScrollAnimationWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const element = ref.current;
            if (!element) return;

            const fromVars: gsap.TweenVars = { opacity: 0 };
            const toVars: gsap.TweenVars = {
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                delay: delay,
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            };

            switch (animation) {
                case "fade-up":
                    fromVars.y = 50;
                    toVars.y = 0;
                    break;
                case "fade-in":
                    // Just opacity change
                    break;
                case "scale-up":
                    fromVars.scale = 0.8;
                    toVars.scale = 1;
                    break;
            }

            gsap.fromTo(element, fromVars, toVars);
        },
        { scope: ref }
    );

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

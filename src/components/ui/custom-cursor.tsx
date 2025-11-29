"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { Hand } from "lucide-react";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the trailing ring
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer") ||
                window.getComputedStyle(target).cursor === "pointer";

            setIsHovering(!!isClickable);
        };

        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (!isTouchDevice) {
            window.addEventListener("mousemove", moveCursor);
            window.addEventListener("mousedown", handleMouseDown);
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("mouseover", handleMouseOver);
        }

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [isVisible, mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Main Dot (Hidden on Hover) */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
            />

            {/* Trailing Ring (Hidden on Hover) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 0 : 1,
                    opacity: isClicking ? 0.8 : isHovering ? 0 : 1,
                    backgroundColor: "transparent",
                    borderColor: "rgba(0, 217, 255, 0.5)",
                }}
                transition={{
                    scale: { duration: 0.2 },
                    opacity: { duration: 0.2 },
                }}
            />

            {/* Custom Hand Icon (Shown on Hover) */}
            <motion.div
                className="fixed top-0 left-0 text-primary"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 1.2 : 0,
                    opacity: isHovering ? 1 : 0,
                    rotate: isClicking ? -15 : 0,
                }}
                transition={{
                    scale: { type: "spring", stiffness: 300, damping: 20 },
                    opacity: { duration: 0.2 },
                }}
            >
                <Hand size={24} fill="rgba(0, 217, 255, 0.2)" strokeWidth={1.5} />
            </motion.div>
        </div>
    );
}

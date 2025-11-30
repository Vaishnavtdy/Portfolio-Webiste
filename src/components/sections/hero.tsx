"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TypeAnimation } from "react-type-animation";
import { SocialIcons } from "@/components/ui/social-icons";
import { ThreeScene } from "@/components/ThreeScene";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const mouseOrbRef = useRef<HTMLDivElement>(null);

    // Mouse position state for interactive background
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    // Generate particle data once using useState lazy initializer
    const [particles] = useState(() =>
        [...Array(20)].map(() => ({
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: Math.random() * 100,
            top: Math.random() * 100,
            animationDelay: Math.random() * 20,
            animationDuration: Math.random() * 10 + 15,
        }))
    );

    // Track mouse movement for interactive background
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useGSAP(
        () => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                badgeRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8 }
            )
                .fromTo(
                    titleRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(
                    subtitleRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(
                    buttonsRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(
                    socialRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.6"
                );
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-background via-background to-background/95"
        >
            {/* Interactive Mouse Orb */}
            <div
                ref={mouseOrbRef}
                className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out opacity-30 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 217, 255, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    transform: 'translate(-50%, -50%)',
                }}
            />

            {/* 3D Scene */}
            <div className="absolute inset-0 opacity-60 pointer-events-none">
                <ThreeScene />
            </div>


            {/* Particle Background */}
            <div className="absolute inset-0 -z-10 particles">
                {particles.map((particle, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            width: `${particle.width}px`,
                            height: `${particle.height}px`,
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationDelay: `${particle.animationDelay}s`,
                            animationDuration: `${particle.animationDuration}s`,
                        }}
                    />
                ))}
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4 md:px-6 text-center z-10 max-w-4xl">
                <div ref={badgeRef} className="opacity-0 mb-2">
                    <span className="text-xs md:text-sm text-muted-foreground">
                        Hi, I&apos;m
                    </span>
                </div>

                <h1
                    ref={titleRef}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 opacity-0"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-purple-500">
                        Vaishnav Vijayan
                    </span>
                    <br />
                    <span className="text-primary text-2xl md:text-3xl lg:text-4xl">
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                2000,
                                "Backend Developer",
                                2000,
                                "Frontend Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            cursor={true}
                            className="type-animation-cursor"
                            style={{ display: 'inline-block' }}
                        />
                    </span>
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-6 opacity-0 leading-relaxed"
                >
                    Software Developer with 3+ years of experience building secure,
                    scalable Full Stack applications and microservices. Passionate about
                    creating elegant solutions with modern web technologies.
                </p>

                <div
                    ref={buttonsRef}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 opacity-0"
                >
                    <a
                        href="#contact"
                        className="px-6 py-2.5 text-sm rounded-full bg-gradient-to-r from-primary via-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-primary/50"
                    >
                        Get in Touch <ArrowRight size={16} />
                    </a>
                    <a
                        href="#projects"
                        className="px-6 py-2.5 text-sm rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                        View My Work
                    </a>
                </div>

                <div ref={socialRef} className="opacity-0 flex flex-col items-center gap-4">
                    <SocialIcons />
                    {/* <div className="flex items-center gap-2 text-sm text-muted-foreground"> */}
                    {/* <MapPin size={16} /> */}
                    {/* <span>Kerala, India</span> */}
                    {/* </div> */}
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#about"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-80 transition-opacity"
                aria-label="Scroll to About section"
            >
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary rounded-full" />
                </div>
            </a>
        </section >
    );
}

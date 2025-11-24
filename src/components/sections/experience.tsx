"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Inter Smart Technologies",
        period: "2023 - Present",
        description: "Leading the development of scalable web applications using Next.js and Nest.js.",
        achievements: [
            "Architected and developed a B2B marketplace platform serving 10k+ users.",
            "Optimized database queries reducing response time by 40%.",
            "Implemented CI/CD pipelines using AWS CodePipeline.",
            "Mentored junior developers and conducted code reviews."
        ]
    },
    {
        id: 2,
        role: "React.js Developer",
        company: "Woxro Technology Solutions",
        period: "2021 - 2023",
        description: "Focused on frontend development and UI/UX implementation.",
        achievements: [
            "Developed responsive user interfaces for 5+ client projects.",
            "Integrated REST APIs and managed state using Redux Toolkit.",
            "Collaborated with designers to implement pixel-perfect designs.",
            "Improved site performance and SEO scores."
        ]
    }
];

export function Experience() {
    const [expandedId, setExpandedId] = useState<number | null>(1);

    return (
        <section id="experience" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-8",
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1.5 ring-4 ring-background z-10" />

                                {/* Content */}
                                <div className="ml-8 md:ml-0 md:w-1/2">
                                    <div
                                        className={cn(
                                            "bg-card border border-border rounded-xl p-6 cursor-pointer hover:shadow-md transition-all",
                                            expandedId === exp.id ? "ring-2 ring-primary/20" : ""
                                        )}
                                        onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                                                <h4 className="text-lg font-medium">{exp.company}</h4>
                                            </div>
                                            <ChevronDown
                                                className={cn(
                                                    "w-5 h-5 text-muted-foreground transition-transform",
                                                    expandedId === exp.id ? "rotate-180" : ""
                                                )}
                                            />
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                            <Calendar size={14} />
                                            <span>{exp.period}</span>
                                        </div>

                                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                                        <AnimatePresence>
                                            {expandedId === exp.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground border-t border-border pt-4">
                                                        {exp.achievements.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

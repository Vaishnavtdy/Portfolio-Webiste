"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Inter Smart Technologies Pvt Ltd.",
        location: "Kochi, India",
        period: "07/2023 - Present",
        description: "Developed and maintained full-stack applications for 8+ clients using React.js, Node.js, Express, PostgreSQL, improving performance and scalability.",
        achievements: [
            "Built reusable UI components and improved rendering performance, increasing client engagement.",
            "Collaborated with cross-functional teams to deliver features ahead of deadlines."
        ]
    },
    {
        id: 2,
        role: "React.js Developer",
        company: "Woxro Technology Solutions Pvt. Ltd.",
        location: "Thrissur, India",
        period: "08/2022 - 04/2023",
        description: "Delivered responsive web applications using React.js and REST APIs, reducing delivery time by 20%.",
        achievements: [
            "Improved performance by refactoring components and reducing unnecessary re-renders by 15%.",
            "Integrated APIs with backend teams and improved state management using Redux Toolkit.",
            "Enhanced UI/UX by optimizing layout rendering and responsiveness."
        ]
    }
];

export function Experience() {
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

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2 hidden sm:block" />

                    <div className="space-y-8">
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
                                {/* Timeline Dot with Icon */}
                                <div className="absolute left-8 md:left-1/2 top-6 w-12 h-12 bg-gradient-to-br from-primary to-purple-500 rounded-full -translate-x-1/2 ring-4 ring-background z-10 flex items-center justify-center shadow-lg shadow-primary/50 hidden sm:flex">
                                    <Briefcase size={20} className="text-white" />
                                </div>

                                {/* Content Card */}
                                <div className="sm:ml-0 md:w-1/2">
                                    <div className="relative group">
                                        {/* Gradient Border Effect */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

                                        <div className="relative bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                                            {/* Header */}
                                            <div className="mb-4">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="flex-1">
                                                        <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-1">
                                                            {exp.role}
                                                        </h3>
                                                        <h4 className="text-base md:text-lg font-semibold text-foreground">
                                                            {exp.company}
                                                        </h4>
                                                    </div>
                                                    {/* Mobile Icon */}
                                                    <div className="sm:hidden w-10 h-10 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center shadow-md">
                                                        <Briefcase size={18} className="text-white" />
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Calendar size={14} />
                                                    <span className="font-medium">{exp.period}</span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {/* Achievements - Always Visible */}
                                            <div className="space-y-3">
                                                <h5 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                                                    Key Achievements
                                                </h5>
                                                <ul className="space-y-2.5">
                                                    {exp.achievements.map((item, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                                                            className="flex items-start gap-3 text-sm text-muted-foreground"
                                                        >
                                                            <CheckCircle2
                                                                size={16}
                                                                className="text-primary mt-0.5 flex-shrink-0"
                                                            />
                                                            <span className="leading-relaxed">{item}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
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

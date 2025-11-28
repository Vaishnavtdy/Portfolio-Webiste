"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
    {
        title: "B2B Marketplace Platform",
        period: "08/2025 - Present",
        description: "A full-stack platform connecting buyers and suppliers with RFQs & chat features. Built scalable architecture supporting secure authentication and media management with role-based dashboards.",
        tech: ["Next.js", "Nest.js", "PostgreSQL", "Sequelize", "AWS Cognito", "S3", "API Gateway"],
        links: {
            demo: "#",
            github: "#"
        },
        highlights: [
            "Implemented role-based dashboards for buyers/sellers and streamlined RFQ workflows"
        ]
    },
    {
        title: "The Top Player – Football & Fitness Platform",
        period: "02/2025 - 06/2025",
        description: "Online training platform for players and coaches in the Middle East. Developed admin dashboard for performance insights and course management.",
        tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Redux", "Redux Thunk"],
        links: {
            demo: "https://www.thetopplayer.com/en",
            github: "#"
        },
        highlights: [
            "Built comprehensive admin dashboard for performance tracking and course management"
        ]
    },
    {
        title: "YangWang – Digital Brand Platform",
        period: "04/2025 - 06/2025",
        description: "Created an elegant platform for a premium automotive brand. Designed car model showcase, online booking, and newsletter integration improving engagement.",
        tech: ["Next.js", "API Integration"],
        links: {
            demo: "https://yangwang-next.netlify.app/",
            github: "#"
        },
        highlights: [
            "Designed car model showcase and booking system for premium automotive brand"
        ]
    },

];

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground">
                        A selection of projects that demonstrate my technical expertise.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="p-6 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.links.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.links.demo} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
    {
        title: "B2B Marketplace Platform",
        description: "A comprehensive B2B marketplace connecting suppliers and buyers. Features include real-time messaging, order tracking, and secure payments.",
        tech: ["Next.js", "Nest.js", "AWS", "PostgreSQL"],
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        title: "The Top Player",
        description: "Sports training platform for athletes to track performance, schedule sessions, and connect with coaches.",
        tech: ["Next.js", "Express.js", "MongoDB", "Socket.io"],
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        title: "YangWang",
        description: "Premium automotive digital platform showcasing luxury vehicles with immersive 3D experiences and configurators.",
        tech: ["Next.js", "Three.js", "Tailwind CSS", "Strapi"],
        links: {
            demo: "#",
            github: "#"
        }
    }
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

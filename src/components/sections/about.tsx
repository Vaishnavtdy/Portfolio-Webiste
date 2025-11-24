"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4">
                            Building digital products with passion and precision.
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            I am a Full Stack Developer with a deep passion for building scalable, high-performance web applications.
                            With expertise in modern frontend and backend technologies, I enjoy solving complex problems and delivering
                            seamless user experiences.
                        </p>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            My coding philosophy revolves around writing clean, maintainable code and staying updated with the latest
                            industry trends. Whether it&apos;s architecting a robust backend or crafting a pixel-perfect UI, I strive for
                            excellence in every project.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                            <Code className="w-8 h-8 text-primary mb-3" />
                            <h4 className="font-semibold mb-1">Frontend</h4>
                            <p className="text-sm text-muted-foreground">React, Next.js, Tailwind</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                            <Server className="w-8 h-8 text-primary mb-3" />
                            <h4 className="font-semibold mb-1">Backend</h4>
                            <p className="text-sm text-muted-foreground">Node.js, Express, Nest.js</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                            <Database className="w-8 h-8 text-primary mb-3" />
                            <h4 className="font-semibold mb-1">Database</h4>
                            <p className="text-sm text-muted-foreground">PostgreSQL, MySQL, MongoDB</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                            <Cloud className="w-8 h-8 text-primary mb-3" />
                            <h4 className="font-semibold mb-1">DevOps</h4>
                            <p className="text-sm text-muted-foreground">AWS, Docker, CI/CD</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

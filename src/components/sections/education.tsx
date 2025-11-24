"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-card border border-border rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="p-4 bg-primary/10 rounded-full text-primary shrink-0">
                            <GraduationCap size={40} />
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">Bachelor of Technology</h3>
                            <p className="text-xl text-primary font-medium mb-2">Information Technology</p>
                            <p className="text-muted-foreground mb-4">
                                Graduated with honors, focusing on software engineering, data structures, and algorithms.
                                Active member of the coding club and participated in multiple hackathons.
                            </p>
                            <div className="inline-block px-4 py-1 bg-secondary rounded-full text-sm font-medium">
                                2017 - 2021
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

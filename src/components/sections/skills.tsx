"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React.js", "Next.js", "Redux", "Redux-Toolkit", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "Nest.js", "Strapi", "REST APIs", "GraphQL"],
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "MySQL", "Sequelize ORM", "MongoDB", "Redis"],
    },
    {
        title: "Cloud / DevOps",
        skills: ["AWS Cognito", "AWS S3", "AWS API Gateway", "AWS RDS", "Nginx", "Docker"],
    },
    {
        title: "Languages & Tools",
        skills: ["JavaScript", "TypeScript", "Git", "GitHub", "VS Code", "Postman"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground">
                        A comprehensive list of technologies and tools I work with.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

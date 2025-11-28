import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function SocialIcons({ className = "" }: { className?: string }) {
    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/vaishnav-vijayan-9312aa198/",
            icon: Linkedin,
        },
        {
            name: "GitHub",
            href: "https://github.com/Vaishnavtdy",
            icon: Github,
        },
        {
            name: "Email",
            href: "mailto:vaishnavtdy@gmail.com",
            icon: Mail,
        },
    ];

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-card border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group"
                    aria-label={social.name}
                >
                    <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
            ))}
        </div>
    );
}

import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function SocialIcons({ className = "" }: { className?: string }) {
    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://linkedin.com/", // Replace with actual URL
            icon: Linkedin,
        },
        {
            name: "GitHub",
            href: "https://github.com/", // Replace with actual URL
            icon: Github,
        },
        {
            name: "Email",
            href: "mailto:hello@example.com", // Replace with actual email
            icon: Mail,
        },
        {
            name: "Twitter",
            href: "https://twitter.com/", // Replace with actual URL
            icon: Twitter,
        },
    ];

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group"
                    aria-label={social.name}
                >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
            ))}
        </div>
    );
}

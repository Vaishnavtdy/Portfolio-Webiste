import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "Email", href: "mailto:hello@example.com", icon: Mail },
];

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                        Vaishnav Vijayan
                    </span>
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        Building scalable and high-performance web applications.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
                            aria-label={social.name}
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </div>

                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
}

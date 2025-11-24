"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full hover:bg-accent transition-colors"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    opacity: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : 90,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon className="h-5 w-5 text-foreground" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    scale: theme === "light" ? 1 : 0,
                    opacity: theme === "light" ? 1 : 0,
                    rotate: theme === "light" ? 0 : -90,
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
            >
                <Sun className="h-5 w-5 text-foreground" />
            </motion.div>
            {/* Spacer to maintain size since absolute positioning is used */}
            <div className="w-5 h-5" />
        </button>
    );
}

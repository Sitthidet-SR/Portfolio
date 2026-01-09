"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { name: t("nav.home"), href: "#home" },
        { name: t("nav.about"), href: "#about" },
        { name: t("nav.skills"), href: "#skills" },
        { name: t("nav.projects"), href: "#projects" },
        { name: t("nav.contact"), href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "th" : "en");
    };

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-zinc-900/80 backdrop-blur-lg shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("#home");
                        }}
                        className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    >
                        {personalInfo.name.split(" ")[0]}
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className="text-zinc-400 hover:text-indigo-400 transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-sm font-medium text-zinc-300"
                            aria-label="Toggle language"
                        >
                            {language === "en" ? "🇹🇭 TH" : "🇺🇸 EN"}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* Language Toggle Mobile */}
                        <button
                            onClick={toggleLanguage}
                            className="px-2 py-1 rounded-lg bg-zinc-800 text-xs font-medium text-zinc-300"
                            aria-label="Toggle language"
                        >
                            {language === "en" ? "TH" : "EN"}
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg bg-zinc-800"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-zinc-900 rounded-lg shadow-lg mt-2 p-4 animate-fade-in">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className="block py-3 text-zinc-400 hover:text-indigo-400 transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}

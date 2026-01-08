"use client";

import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    const highlights = [
        t("about.highlight1"),
        t("about.highlight2"),
        t("about.highlight3"),
        t("about.highlight4"),
    ];

    return (
        <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t("about.title")}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image/Illustration */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg">
                            <div className="text-center">
                                <div className="inline-block p-6 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full mb-6">
                                    <span className="text-6xl">🧑‍💻</span>
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                                    {personalInfo.name}
                                </h3>
                                <p className="text-indigo-500 dark:text-indigo-400 font-medium">
                                    {personalInfo.role}
                                </p>
                                <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                                    📍 {personalInfo.location}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6">
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {t("about.description1")}
                            </p>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {t("about.description2")}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <span className="text-lg">{highlight}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-700">
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                                    3+
                                </div>
                                <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                    {t("about.yearsExp")}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                                    20+
                                </div>
                                <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                    {t("about.projectsCompleted")}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                                    10+
                                </div>
                                <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                    {t("about.happyClients")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

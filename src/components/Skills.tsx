"use client";

import { skills } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

interface SkillCardProps {
    name: string;
    level: number;
}

function SkillCard({ name, level }: SkillCardProps) {
    return (
        <div className="group p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">{name}</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{level}%</span>
            </div>
            <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );
}

interface SkillCategoryProps {
    title: string;
    icon: string;
    items: { name: string; level: number }[];
}

function SkillCategory({ title, icon, items }: SkillCategoryProps) {
    return (
        <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{icon}</span>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h3>
            </div>
            <div className="space-y-4">
                {items.map((skill) => (
                    <SkillCard key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    const { t } = useLanguage();

    return (
        <section id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        {t("skills.title")}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        {t("skills.subtitle")}
                    </p>
                </div>

                {/* Skills Grid - 4 columns for IT Support */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SkillCategory
                        title={t("skills.itSupport")}
                        icon="🖥️"
                        items={skills.itSupport}
                    />
                    <SkillCategory
                        title={t("skills.languages")}
                        icon="💻"
                        items={skills.languages}
                    />
                    <SkillCategory
                        title={t("skills.frameworks")}
                        icon="⚛️"
                        items={skills.frameworks}
                    />
                    <SkillCategory
                        title={t("skills.tools")}
                        icon="🛠️"
                        items={skills.tools}
                    />
                </div>

                {/* Additional Tech Stack Icons */}
                <div className="mt-16 text-center">
                    <p className="text-zinc-500 dark:text-zinc-400 mb-6">{t("skills.alsoFamiliar")}</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["🔧 Hardware Repair", "📡 WiFi/Network", "🎥 CCTV Systems", "🔊 Audio/AV", "📱 Mobile Support", "☁️ Cloud Basics"].map(
                            (tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm text-zinc-600 dark:text-zinc-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                                >
                                    {tech}
                                </span>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

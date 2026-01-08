"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "th";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        // Hero
        "hero.greeting": "👋 Hello, I'm",
        "hero.tagline": "IT Support & Junior Developer",
        "hero.description": "I maintain IT systems and develop modern web applications. Ready to solve problems with Service Mind and a passion for learning new technologies.",
        "hero.viewWork": "View My Work",
        "hero.contactMe": "Contact Me",
        "hero.role1": "IT Support",
        "hero.role2": "Junior Developer",
        "hero.role3": "Problem Solver",

        // About
        "about.title": "About Me",
        "about.subtitle": "IT Support & Aspiring Developer",
        "about.description1": "I'm an IT Support professional and aspiring Developer with a strong foundation in both technical support and web development. I graduated with a Diploma in Digital Business Technology and have hands-on experience maintaining IT systems, networks, CCTV, and audio-visual equipment.",
        "about.description2": "Currently working at Baankungnam Resort, I combine my IT support skills with a growing passion for web development using React, Next.js, and Node.js. I believe in continuous learning and providing excellent service with a smile.",
        "about.highlight1": "🎯 Problem solver at heart",
        "about.highlight2": "🚀 Service Mind & Fast Learner",
        "about.highlight3": "🌱 Passionate about new technologies",
        "about.highlight4": "🤝 Team player with responsibility",
        "about.yearsExp": "Years Experience",
        "about.projectsCompleted": "Projects Completed",
        "about.happyClients": "Happy Clients",

        // Experience
        "exp.title": "Work Experience",
        "exp.current": "Current",
        "exp.internship": "Internship",

        // Education
        "edu.title": "Education",
        "edu.diploma": "High Vocational Certificate (Diploma)",
        "edu.vocational": "Vocational Certificate",
        "edu.digitalBusiness": "Digital Business Technology",
        "edu.businessComputer": "Business Computer",

        // Skills
        "skills.title": "Skills & Technologies",
        "skills.subtitle": "Here are the technologies and tools I work with. I combine IT Support expertise with modern web development skills.",
        "skills.languages": "Languages",
        "skills.frameworks": "Frameworks",
        "skills.tools": "Dev Tools",
        "skills.itSupport": "IT Support",
        "skills.alsoFamiliar": "Also experienced with",

        // Projects
        "projects.title": "Featured Projects",
        "projects.subtitle": "Here are some of my recent projects. Each one demonstrates my technical skills and problem-solving abilities.",
        "projects.problem": "🎯 Problem:",
        "projects.solution": "💡 Solution:",
        "projects.viewCase": "View case study",
        "projects.showLess": "Show less",
        "projects.viewMore": "View More on GitHub",
        "projects.featured": "Featured",

        // Contact
        "contact.title": "Get In Touch",
        "contact.subtitle": "Have a project in mind or need IT support? Feel free to reach out! I'm always open to discussing new opportunities.",
        "contact.workTogether": "Let's work together",
        "contact.available": "I'm currently open to new opportunities in IT Support and Junior Developer positions. If you have a project or need technical assistance, I'd love to help.",
        "contact.email": "Email",
        "contact.location": "Location",
        "contact.findMe": "Find me on",
        "contact.yourName": "Your Name",
        "contact.yourEmail": "Your Email",
        "contact.message": "Message",
        "contact.sendMessage": "Send Message",
        "contact.sending": "Sending...",
        "contact.sent": "Message Sent!",

        // Footer
        "footer.rights": "All rights reserved.",
        "footer.builtWith": "Built with",
        "footer.using": "using",
    },
    th: {
        // Navbar
        "nav.home": "หน้าแรก",
        "nav.about": "เกี่ยวกับ",
        "nav.skills": "ทักษะ",
        "nav.projects": "ผลงาน",
        "nav.contact": "ติดต่อ",

        // Hero
        "hero.greeting": "👋 สวัสดีครับ ผมชื่อ",
        "hero.tagline": "IT Support & Junior Developer",
        "hero.description": "ผมดูแลระบบ IT และพัฒนาเว็บแอปพลิเคชันสมัยใหม่ พร้อมแก้ปัญหาด้วย Service Mind และความหลงใหลในการเรียนรู้เทคโนโลยีใหม่ๆ",
        "hero.viewWork": "ดูผลงาน",
        "hero.contactMe": "ติดต่อผม",
        "hero.role1": "IT Support",
        "hero.role2": "Junior Developer",
        "hero.role3": "นักแก้ปัญหา",

        // About
        "about.title": "เกี่ยวกับผม",
        "about.subtitle": "IT Support & นักพัฒนามือใหม่",
        "about.description1": "ผมเป็นเจ้าหน้าที่ IT Support และนักพัฒนาเว็บมือใหม่ที่มีพื้นฐานแข็งแกร่งทั้งด้านการสนับสนุนเทคนิคและการพัฒนาเว็บ จบการศึกษา ปวส. สาขาเทคโนโลยีธุรกิจดิจิทัล มีประสบการณ์ดูแลระบบ IT เครือข่าย กล้องวงจรปิด และระบบเครื่องเสียง",
        "about.description2": "ปัจจุบันทำงานที่ บ้านคุ้งน้ำ รีสอร์ท ผสมผสานทักษะ IT Support กับความหลงใหลในการพัฒนาเว็บด้วย React, Next.js และ Node.js ผมเชื่อในการเรียนรู้อย่างต่อเนื่องและให้บริการที่ดีด้วยรอยยิ้ม",
        "about.highlight1": "🎯 นักแก้ปัญหาโดยสายเลือด",
        "about.highlight2": "🚀 Service Mind & เรียนรู้เร็ว",
        "about.highlight3": "🌱 หลงใหลในเทคโนโลยีใหม่ๆ",
        "about.highlight4": "🤝 ทำงานเป็นทีม มีความรับผิดชอบ",
        "about.yearsExp": "ปีประสบการณ์",
        "about.projectsCompleted": "โปรเจคที่เสร็จสิ้น",
        "about.happyClients": "ลูกค้าที่พึงพอใจ",

        // Experience
        "exp.title": "ประสบการณ์ทำงาน",
        "exp.current": "ปัจจุบัน",
        "exp.internship": "ฝึกงาน",

        // Education
        "edu.title": "การศึกษา",
        "edu.diploma": "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
        "edu.vocational": "ประกาศนียบัตรวิชาชีพ (ปวช.)",
        "edu.digitalBusiness": "เทคโนโลยีธุรกิจดิจิทัล",
        "edu.businessComputer": "คอมพิวเตอร์ธุรกิจ",

        // Skills
        "skills.title": "ทักษะและเทคโนโลยี",
        "skills.subtitle": "นี่คือเทคโนโลยีและเครื่องมือที่ผมใช้ ผมผสมผสานความเชี่ยวชาญ IT Support กับทักษะพัฒนาเว็บสมัยใหม่",
        "skills.languages": "ภาษา",
        "skills.frameworks": "เฟรมเวิร์ค",
        "skills.tools": "เครื่องมือ Dev",
        "skills.itSupport": "IT Support",
        "skills.alsoFamiliar": "และยังมีประสบการณ์กับ",

        // Projects
        "projects.title": "ผลงานเด่น",
        "projects.subtitle": "นี่คือโปรเจคล่าสุดของผม แต่ละโปรเจคแสดงถึงทักษะทางเทคนิคและความสามารถในการแก้ปัญหา",
        "projects.problem": "🎯 ปัญหา:",
        "projects.solution": "💡 วิธีแก้:",
        "projects.viewCase": "ดู Case Study",
        "projects.showLess": "แสดงน้อยลง",
        "projects.viewMore": "ดูเพิ่มเติมบน GitHub",
        "projects.featured": "แนะนำ",

        // Contact
        "contact.title": "ติดต่อเรา",
        "contact.subtitle": "มีโปรเจคในใจหรือต้องการ IT Support? ติดต่อมาได้เลย! ผมเปิดรับโอกาสใหม่ๆ เสมอ",
        "contact.workTogether": "มาทำงานร่วมกัน",
        "contact.available": "ผมพร้อมรับโอกาสใหม่ในตำแหน่ง IT Support และ Junior Developer ถ้าคุณมีโปรเจคหรือต้องการความช่วยเหลือด้านเทคนิค ผมยินดีช่วยเหลือ",
        "contact.email": "อีเมล",
        "contact.location": "ที่อยู่",
        "contact.findMe": "ติดตามผมได้ที่",
        "contact.yourName": "ชื่อของคุณ",
        "contact.yourEmail": "อีเมลของคุณ",
        "contact.message": "ข้อความ",
        "contact.sendMessage": "ส่งข้อความ",
        "contact.sending": "กำลังส่ง...",
        "contact.sent": "ส่งแล้ว!",

        // Footer
        "footer.rights": "สงวนลิขสิทธิ์",
        "footer.builtWith": "สร้างด้วย",
        "footer.using": "โดยใช้",
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const saved = localStorage.getItem("language") as Language;
        if (saved && (saved === "en" || saved === "th")) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.en] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

// Portfolio Data - Edit this file to customize your portfolio

export const personalInfo = {
    name: "Sitthidet SR",
    role: "Full Stack Developer",
    tagline: "Creating seamless web experiences",
    bio: "Passionate developer with a love for building beautiful, performant web applications. I specialize in modern JavaScript frameworks and enjoy solving complex problems with elegant solutions.",
    location: "Thailand",
    email: "sitthidet@example.com",
    resumeUrl: "/resume.pdf",
};

export const socialLinks = {
    github: "https://github.com/sitthidetsr",
    linkedin: "https://linkedin.com/in/sitthidetsr",
    twitter: "https://twitter.com/sitthidetsr",
};

export const aboutMe = {
    description: `I'm a Full Stack Developer with a passion for creating intuitive and dynamic user experiences. 
  With expertise in both frontend and backend technologies, I bring ideas to life through clean, efficient code.
  
  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
  or enjoying a good cup of coffee while reading tech blogs.`,
    highlights: [
        "🎯 Problem solver at heart",
        "🚀 Passionate about performance optimization",
        "🌱 Always learning new technologies",
        "🤝 Team player with strong communication skills",
    ],
};

export const skills = {
    languages: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 75 },
        { name: "HTML/CSS", level: 95 },
        { name: "SQL", level: 70 },
    ],
    frameworks: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "Tailwind CSS", level: 90 },
    ],
    tools: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 65 },
        { name: "MongoDB", level: 75 },
    ],
};

export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
        problem: "Small businesses needed an affordable, customizable online store solution.",
        solution: "Built a modular e-commerce platform that can be easily customized and deployed.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
        image: "/projects/ecommerce.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/sitthidetsr/ecommerce",
        featured: true,
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team features.",
        problem: "Remote teams struggled to track tasks and collaborate effectively.",
        solution: "Created a real-time collaborative platform with intuitive UI and powerful features.",
        techStack: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
        image: "/projects/taskapp.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/sitthidetsr/taskapp",
        featured: true,
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A beautiful weather dashboard with location-based forecasts and interactive maps.",
        problem: "Existing weather apps were cluttered and hard to read at a glance.",
        solution: "Designed a clean, minimalist dashboard focusing on essential information.",
        techStack: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
        image: "/projects/weather.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/sitthidetsr/weather",
        featured: false,
    },
];

export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

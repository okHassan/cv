import {
    AmbitLogo,
    BarepapersLogo,
    BimLogo,
    CDGOLogo,
    ClevertechLogo,
    ConsultlyLogo,
    EvercastLogo,
    Howdy,
    JarockiMeLogo,
    JojoMobileLogo,
    Minimal,
    MobileVikingsLogo,
    MonitoLogo,
    NSNLogo,
    ParabolLogo,
    TastyCloudLogo,
    YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
    name: "Hassan Ahmed",
    initials: "AM",
    location: "Dhaka, Bangladesh, GMT+6",
    locationLink: "https://www.google.com/maps/place/Dhaka",
    about:
        "Full Stack Engineer focused on building products with an interesting twist.",
    summary:
        "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 3 years of experience in working with different clients.",
    avatarUrl: "https://coderhassan.vercel.app/assets/me.png",
    personalWebsiteUrl: "https://github.com/accretence",
    contact: {
        email: "coder.hassan.ahmed@gmail.com",
        tel: "+880 1841162203",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/okHassan",
                icon: GitHubIcon,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/coderhassan/",
                icon: LinkedInIcon,
            },
            {
                name: "X",
                url: "https://x.com/coderrhassan",
                icon: XIcon,
            },
        ],
    },
    education: [
        {
            school: "KPB School & College",
            degree: "Bachelor's Degree in HSC",
            start: "2022",
            end: "2024",
        },
    ],
    work: [
        {
            company: "Ks-Devware",
            link: "https://",
            badges: ["Internship"],
            title: "Front-End Developer",
            logo: ParabolLogo,
            start: "2022",
            end: "2023",
            description:
                "My first full-time position as an intern which taught me collaboration in a medium sized team under supervision of senior developers.",
        },
        {
            company: "Kasa Infotech",
            link: "https://www",
            badges: ["Contract"],
            title: "Back-End Developer",
            logo: ClevertechLogo,
            start: "2023-Jun",
            end: "2023-Nov",
            description:
                "In two separate projects contracted by Abidi Pharmaceuticals ( biggest pharmaceutical company in Iran ) and RAI - The Railways of Iran  I was in charge of writing performant, safe and scalable Javascript code for custom business intelligence dashboards on the server-side using Node.js and Express.js.",
        },
        {
            company: "Voice Of Programmer",
            link: "https://www.",
            badges: ["Contract"],
            title: "Senior Back-End Developer",
            logo: JojoMobileLogo,
            start: "2023-Nov",
            end: " 2023-Dec",
            description:
                "In my role as a Senior Developer at BytoGene UK on a project designed to launch in the UK market, I implemented a robust infrastructure and scalable back-end system from scratch using Nginx, Docker, Kubernetes and ArgoCD.",
        },
    ],
    skills: [
        "JavaScript",
        "TypeScript",
        "React/Next.js/Remix",
        "Node.js",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "MySql",
        "React Native"
    ],
    projects: [
        {
            title: "Agency Management System",
            techStack: [
                "Side Project",
                "TypeScript",
                "Next.js",
                "Prisma",
                "GraphQL",
                "WebRTC",
            ],
            description: "A platform to build and grow your online business",
            logo: ConsultlyLogo,
            link: {
                label: "GITHUB",
                href: "https://github.com/okHassan/plura",
            },
        },
        {
            title: "Learing Management System",
            techStack: ["Next.js", "Express js"],
            description:
                "Minimalist calendars, habit trackers and planners generator",
            logo: Minimal,
            link: {
                label: "useminimal.com",
                href: "https://github.com/okHassan/LMS",
            },
        },
        {
            title: "Howdy",
            techStack: ["Frontend Dev", "Javascript", "Next.js"],
            description:
                "Howdy is a place for you to join communities you care about",
            logo: Howdy,
            link: {
                label: "play.google.com",
                href: "https://howdy.co/",
            },
        }
    ],
} as const;

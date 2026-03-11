import { useState } from "react";
import Image from "next/image";
import {
    Layers,
    Database,
    Server,
    CheckCircle,
    Code2,
    Globe,
    ClipboardList,
    LayoutDashboard,
    ShieldCheck,
    CloudUpload,
    Zap,
    GitBranch,
    Lock,
    HeadphonesIcon,
    ChevronDown,
} from "lucide-react";
import SEO from "@/components/SEO";

/* ─────────────────────────────────────────────
   FAQ DATA  (accordion UI + JSON-LD schema)
───────────────────────────────────────────── */
const faqs = [
    {
        q: "What is full stack web development?",
        a: "Full stack web development covers both the frontend (what users see — built with React, Next.js) and the backend (server logic, APIs, databases — built with Node.js, Express, MongoDB/PostgreSQL). A full stack developer or team handles the entire application from UI to database to cloud deployment.",
    },
    {
        q: "Which technologies does Nevatrix use for full stack development?",
        a: "Nevatrix builds full stack applications using React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, TypeScript, Tailwind CSS, Docker and AWS. We choose the best technology stack based on your project's requirements, scale and budget.",
    },
    {
        q: "Can Nevatrix build a SaaS platform or web application from scratch?",
        a: "Yes. Nevatrix specializes in building SaaS platforms, business web applications and startup MVPs from scratch. We handle everything — architecture planning, UI/UX design, frontend and backend development, database design, cloud deployment and ongoing support.",
    },
    {
        q: "How long does it take to build a web application?",
        a: "A simple MVP or web application typically takes 4–8 weeks. A full-featured SaaS platform or enterprise application can take 3–6 months depending on the complexity, number of features and integrations required.",
    },
    {
        q: "Do you provide support and maintenance after the application is launched?",
        a: "Yes. Nevatrix provides post-launch technical support, bug fixes, performance monitoring, feature additions and cloud infrastructure maintenance. We offer both one-time support and ongoing monthly maintenance plans.",
    },
    {
        q: "Can Nevatrix work with clients outside India?",
        a: "Yes. Nevatrix works with clients in the USA, Canada, UK and other countries on a remote basis. We follow agile workflows with regular progress updates, video calls and transparent project management tools so you always know the status of your project.",
    },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function FullStackPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <>
            <SEO page="full-stack" />
            {/* ══════════════════════════════════════
                HERO
            ══════════════════════════════════════ */}
            <section className="relative min-h-[460px] py-28 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/full-stack.jpg"
                        // ✅ FIXED: keyword-rich alt
                        alt="Full stack web development company - React Next.js MERN stack - Nevatrix"
                        fill
                        priority
                        className="object-cover opacity-40"
                    />
                </div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-blue-900/30 to-purple-900/40" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    {/* ✅ FIXED: H1 targets primary keyword */}
                    <h1 className="text-5xl font-bold mb-6">
                        Full Stack Web Development
                    </h1>
                    <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
                        Nevatrix builds scalable web applications, SaaS platforms and custom
                        business software using React, Next.js, Node.js and MERN stack —
                        serving startups and enterprises across India, USA and Canada.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════════
                WHAT WE DEVELOP
            ══════════════════════════════════════ */}
            <section className="relative py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 -z-20" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200/40 blur-3xl rounded-full -z-10" />

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                        What We Develop
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        End-to-end full stack application development — from UI and APIs
                        to databases and cloud deployment — all under one roof.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                        {
                            title: "Frontend Applications",
                            // ✅ FIXED: was 7 words, now full description
                            desc: "We build modern, fast and responsive user interfaces using React and Next.js — with pixel-perfect designs, smooth animations and excellent Core Web Vitals scores.",
                            icon: Layers,
                            color: "bg-blue-50 text-blue-600 border-blue-100",
                        },
                        {
                            title: "Backend APIs",
                            desc: "We design and develop secure, scalable RESTful and GraphQL APIs using Node.js and Express — with proper authentication, rate limiting and error handling.",
                            icon: Server,
                            color: "bg-indigo-50 text-indigo-600 border-indigo-100",
                        },
                        {
                            title: "Database Systems",
                            desc: "We architect efficient relational (PostgreSQL, MySQL) and NoSQL (MongoDB) database schemas optimized for performance, scalability and data integrity.",
                            icon: Database,
                            color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                        },
                        {
                            title: "Cloud Deployment",
                            desc: "We deploy, host and scale your application on AWS, Vercel or DigitalOcean — with CI/CD pipelines, Docker containers and automated monitoring.",
                            icon: Globe,
                            color: "bg-purple-50 text-purple-600 border-purple-100",
                        },
                    ].map((item, i) => (
                        <div key={i} className="group rounded-2xl p-[1px] bg-gradient-to-br from-white to-white hover:shadow-2xl transition duration-300 hover:-translate-y-3">
                            <div className={`h-full rounded-2xl p-8 border ${item.color} backdrop-blur-xl`}>
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed text-justify">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════
                TECH STACK
            ══════════════════════════════════════ */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 -z-20" />
                <div className="absolute -top-24 left-[-120px] w-[420px] h-[420px] bg-blue-200/30 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-24 right-[-120px] w-[420px] h-[420px] bg-purple-200/30 blur-3xl rounded-full -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Technologies We Use
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We use a modern, battle-tested technology stack to build
                            scalable, secure and high-performance web applications.
                        </p>
                    </div>

                    <div className="overflow-hidden relative">
                        <div className="flex gap-16 w-max tech-scroll">
                            {[
                                // ✅ FIXED: all alt texts are keyword-descriptive
                                { img: "react.png",        alt: "React JS frontend development" },
                                { img: "nextjs.webp",      alt: "Next.js full stack development" },
                                { img: "nodejs.webp",      alt: "Node.js backend development" },
                                { img: "expressjs.png",    alt: "Express.js REST API development" },
                                { img: "mongo.jpg",        alt: "MongoDB NoSQL database" },
                                { img: "mysql.png",        alt: "MySQL relational database" },
                                { img: "postgres.png",     alt: "PostgreSQL database development" },
                                { img: "tailwindcss.webp", alt: "Tailwind CSS UI development" },
                                { img: "typescript.webp",  alt: "TypeScript development" },
                                { img: "docker.png",       alt: "Docker containerization" },
                                { img: "aws.webp",         alt: "AWS cloud deployment India" },
                            ].map((tech, i) => (
                                <div key={i} className="w-36 h-32 backdrop-blur-xl rounded-2xl shadow-md flex items-center justify-center p-5 hover:shadow-xl hover:-translate-y-2 transition duration-300">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image src={`/${tech.img}`} alt={tech.alt} fill sizes="130px" className="object-contain" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                DEVELOPMENT APPROACH
            ══════════════════════════════════════ */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50 -z-20" />
                <div className="absolute -top-32 -left-32 w-[460px] h-[460px] bg-blue-200/30 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-32 -right-32 w-[460px] h-[460px] bg-purple-200/30 blur-3xl rounded-full -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Our Development Approach
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A structured workflow that ensures every application we build is
                            scalable, secure and maintainable for long-term growth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                title: "Requirement Analysis",
                                // ✅ FIXED: was 8 words, now full description
                                desc: "We map your business logic, user roles, third-party integrations and technical requirements before writing a single line of code.",
                                icon: ClipboardList,
                                color: "from-blue-400/20 to-indigo-400/10",
                                iconbg: "bg-blue-100 text-blue-600",
                            },
                            {
                                title: "UI/UX Planning",
                                desc: "We design application flows, screen wireframes and component structures to ensure an intuitive user experience before development begins.",
                                icon: LayoutDashboard,
                                color: "from-indigo-400/20 to-purple-400/10",
                                iconbg: "bg-indigo-100 text-indigo-600",
                            },
                            {
                                title: "Secure Development",
                                desc: "We implement backend APIs, JWT authentication, role-based access control and database architecture following security best practices throughout.",
                                icon: ShieldCheck,
                                color: "from-emerald-400/20 to-teal-400/10",
                                iconbg: "bg-emerald-100 text-emerald-600",
                            },
                            {
                                title: "Deployment & Support",
                                desc: "We deploy your application to cloud infrastructure, set up monitoring, CI/CD pipelines and provide ongoing technical support and maintenance.",
                                icon: CloudUpload,
                                color: "from-purple-400/20 to-pink-400/10",
                                iconbg: "bg-purple-100 text-purple-600",
                            },
                        ].map((item, i) => (
                            <div key={i} className={`group relative rounded-3xl p-[1px] bg-gradient-to-br ${item.color} hover:-translate-y-3 hover:shadow-2xl transition duration-300`}>
                                <div className="h-full rounded-3xl bg-white/80 backdrop-blur-xl border border-white p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-white/40 via-transparent to-white/40" />
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${item.iconbg} group-hover:scale-110 transition`}>
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed text-justify">{item.desc}</p>
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                WHY CHOOSE US  ✅ NEW SECTION
            ══════════════════════════════════════ */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-white -z-20" />

                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                        Why Choose Nevatrix for Full Stack Development?
                    </h2>
                    <p className="text-slate-600 mb-14 max-w-xl mx-auto">
                        We combine deep technical expertise with product thinking to build
                        web applications that scale with your business.
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
                        {[
                            {
                                icon: Code2,
                                title: "Modern Tech Stack",
                                desc: "We use React, Next.js, Node.js and PostgreSQL — proven technologies trusted by the world's fastest-growing startups and enterprises.",
                                bg: "bg-blue-50 text-blue-600",
                            },
                            {
                                icon: Zap,
                                title: "Performance Optimized",
                                desc: "Every application is built with Core Web Vitals, server-side rendering and database query optimization in mind from day one.",
                                bg: "bg-indigo-50 text-indigo-600",
                            },
                            {
                                icon: Lock,
                                title: "Security First",
                                desc: "We implement authentication, input validation, HTTPS, rate limiting and data encryption as standard on every project.",
                                bg: "bg-emerald-50 text-emerald-600",
                            },
                            {
                                icon: GitBranch,
                                title: "Clean Architecture",
                                desc: "Maintainable, well-documented code with proper separation of concerns so your team can easily extend and scale the application.",
                                bg: "bg-purple-50 text-purple-600",
                            },
                            {
                                icon: CloudUpload,
                                title: "Cloud Native",
                                desc: "We build and deploy on AWS, Vercel and DigitalOcean with Docker containers, auto-scaling and 99.9% uptime infrastructure.",
                                bg: "bg-orange-50 text-orange-600",
                            },
                            {
                                icon: HeadphonesIcon,
                                title: "Ongoing Support",
                                desc: "We don't disappear after launch. Nevatrix provides dedicated post-launch support, bug fixes and feature development.",
                                bg: "bg-pink-50 text-pink-600",
                            },
                        ].map((item, i) => (
                            <div key={i} className="group flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
                                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${item.bg} group-hover:scale-110 transition`}>
                                    <item.icon size={22} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed text-justify">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                FAQ ACCORDION  ✅ NEW
            ══════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-10 text-center">
                        Frequently Asked Questions — Full Stack Development
                    </h2>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <div
                                    key={i}
                                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                                        isOpen
                                            ? "border-indigo-300 shadow-md shadow-indigo-50"
                                            : "border-slate-100 hover:border-slate-200"
                                    }`}
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() => toggle(i)}
                                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="font-medium text-slate-800 text-sm sm:text-base">
                                            {faq.q}
                                        </span>
                                        <ChevronDown
                                            size={20}
                                            className={`flex-shrink-0 text-indigo-500 transition-transform duration-300 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${
                                            isOpen
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-6 pb-5 pt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                CTA
            ══════════════════════════════════════ */}
            <section className="py-20 text-center text-white bg-gradient-to-r from-indigo-600 to-blue-600">
                <h2 className="text-3xl font-semibold mb-4">
                    Have a Startup Idea or Web Application to Build?
                </h2>
                <p className="mb-6 text-blue-100">
                    Let Nevatrix build your web application or SaaS platform from scratch —
                    on time, on budget and built to scale.
                </p>
                <a
                    href="mailto:contact@nevatrix.com"
                    className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:scale-105 transition inline-flex items-center gap-2 shadow-lg"
                >
                    <CheckCircle size={18} /> Get Free Consultation
                </a>
            </section>
        </>
    );
}
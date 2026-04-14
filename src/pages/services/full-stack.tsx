
// ── SEO metadata in app/services/full-stack/layout.tsx ──
// export const metadata: Metadata = {
//   title: "Full Stack Web Development Company | React Next.js Node.js - Nevatrix",
//   description: "Nevatrix is a full stack web development company building scalable web apps, SaaS platforms and custom business software using React, Next.js, Node.js and MERN stack for startups and enterprises across India, USA and Canada.",
//   keywords: "full stack web development, full stack developer India, MERN stack development, React Next.js development, Node.js backend development, SaaS platform development, web application development India",
//   alternates: { canonical: "https://nevatrix.com/services/full-stack" },
//   openGraph: { title: "...", description: "...", url: "...", siteName: "Nevatrix", locale: "en_IN", type: "website" },
//   robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
// };

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    Layers, Database, Server, CheckCircle, Code2, Globe,
    ClipboardList, LayoutDashboard, ShieldCheck, CloudUpload,
    Zap, GitBranch, Lock, HeadphonesIcon, ChevronDown,
    ArrowRight, Award, Clock, Users, Star, TrendingUp,
    BarChart3, Cpu, Globe2, Layers3,
} from "lucide-react";
import SEO from "@/components/SEO";

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const stats = [
    { val: 100, suffix: "+", label: "Apps Delivered",      sub: "Web & SaaS",             icon: Code2,     accent: "#4F46E5", bg: "from-indigo-50 to-indigo-100/60"  },
    { val: 10,  suffix: "+", label: "Years Experience",     sub: "Since 2012",             icon: Award,     accent: "#2563EB", bg: "from-blue-50 to-blue-100/60"      },
    { val: 98,  suffix: "%", label: "Client Satisfaction",  sub: "5-star reviews",         icon: Star,      accent: "#059669", bg: "from-emerald-50 to-emerald-100/60"},
    { val: 8,   suffix: "w", label: "Avg. MVP Timeline",    sub: "Idea to live app",       icon: Clock,     accent: "#D97706", bg: "from-amber-50 to-amber-100/60"   },
    { val: 3,   suffix: "+", label: "Countries Served",     sub: "India · USA · Canada",   icon: Globe2,    accent: "#0891B2", bg: "from-cyan-50 to-cyan-100/60"     },
    { val: 100, suffix: "%", label: "On-Time Delivery",     sub: "Milestone-based",        icon: TrendingUp, accent: "#DC2626", bg: "from-rose-50 to-rose-100/60"    },
];

const whatWeBuild = [
    { title: "Frontend Applications",  tag: "React / Next.js", accent: "#4F46E5", icon: Layers,    desc: "Modern, fast and responsive user interfaces using React and Next.js — with pixel-perfect designs, smooth animations and excellent Core Web Vitals scores for any device." },
    { title: "Backend APIs",           tag: "Node / Express",  accent: "#2563EB", icon: Server,    desc: "Secure, scalable RESTful and GraphQL APIs using Node.js and Express — with proper JWT authentication, rate limiting, role-based access and structured error handling." },
    { title: "Database Architecture",  tag: "SQL / NoSQL",     accent: "#059669", icon: Database,  desc: "Efficient relational (PostgreSQL, MySQL) and NoSQL (MongoDB) database schemas optimised for performance, scalability, data integrity and complex query workloads." },
    { title: "Cloud Deployment",       tag: "AWS / Docker",    accent: "#7C3AED", icon: CloudUpload, desc: "Deploy, host and scale your application on AWS, Vercel or DigitalOcean — with CI/CD pipelines, Docker containers, auto-scaling and automated uptime monitoring." },
    { title: "SaaS Platforms",         tag: "Full Product",    accent: "#0891B2", icon: Layers3,   desc: "End-to-end SaaS platform development — multi-tenancy, subscription billing (Stripe/Razorpay), user dashboards, admin panels and everything in between." },
    { title: "Startup MVPs",           tag: "MVP",             accent: "#D97706", icon: Zap,       desc: "We help startups go from idea to a live, production-ready MVP in 6–10 weeks — validating your concept with real users before investing in full-scale development." },
];

const techLogos = [
    { img: "react.png",        alt: "React JS frontend development",          label: "React JS"   },
    { img: "nextjs.webp",      alt: "Next.js full stack development",          label: "Next.js"    },
    { img: "nodejs.webp",      alt: "Node.js backend API development",         label: "Node.js"    },
    { img: "expressjs.png",    alt: "Express.js REST API development",         label: "Express.js" },
    { img: "mongo.jpg",        alt: "MongoDB NoSQL database development",      label: "MongoDB"    },
    { img: "mysql.png",        alt: "MySQL relational database services",      label: "MySQL"      },
    { img: "postgres.png",     alt: "PostgreSQL database development",         label: "PostgreSQL" },
    { img: "tailwindcss.webp", alt: "Tailwind CSS UI development",             label: "Tailwind"   },
    { img: "typescript.webp",  alt: "TypeScript full stack development",       label: "TypeScript" },
    { img: "docker.png",       alt: "Docker containerization deployment",      label: "Docker"     },
    { img: "aws.webp",         alt: "AWS cloud deployment India",              label: "AWS"        },
];

const processSteps = [
    { num: "01", icon: ClipboardList,   title: "Requirement Analysis", accent: "#4F46E5", desc: "We map your business logic, user roles, third-party integrations and technical requirements before writing a single line of code — ensuring nothing is missed." },
    { num: "02", icon: LayoutDashboard, title: "UI/UX Planning",       accent: "#2563EB", desc: "We design application flows, screen wireframes and component structures to ensure an intuitive user experience before development begins." },
    { num: "03", icon: ShieldCheck,     title: "Secure Development",   accent: "#059669", desc: "We implement backend APIs, JWT authentication, role-based access control and database architecture following security best practices throughout." },
    { num: "04", icon: CloudUpload,     title: "Deploy & Support",     accent: "#7C3AED", desc: "We deploy to cloud infrastructure, set up CI/CD pipelines, monitoring dashboards and provide ongoing technical support and maintenance after launch." },
];

const whyUs = [
    { icon: Code2,          title: "Modern Tech Stack",     accent: "#4F46E5", desc: "React, Next.js, Node.js and PostgreSQL — proven technologies trusted by the world's fastest-growing startups and enterprises globally." },
    { icon: Zap,            title: "Performance Optimised", accent: "#2563EB", desc: "Core Web Vitals, server-side rendering and database query optimisation built in from day one — not bolted on as an afterthought." },
    { icon: Lock,           title: "Security First",        accent: "#059669", desc: "Authentication, input validation, HTTPS, rate limiting and data encryption implemented as standard on every single project we deliver." },
    { icon: GitBranch,      title: "Clean Architecture",    accent: "#7C3AED", desc: "Maintainable, well-documented code with proper separation of concerns so your team can easily extend, modify and scale the application." },
    { icon: CloudUpload,    title: "Cloud Native",          accent: "#0891B2", desc: "We build and deploy on AWS, Vercel and DigitalOcean with Docker containers, auto-scaling and 99.9% uptime infrastructure." },
    { icon: HeadphonesIcon, title: "Ongoing Support",       accent: "#DC2626", desc: "We don't disappear after launch. Nevatrix provides dedicated post-launch support, bug fixes, performance monitoring and feature development." },
];

const trust = [
    { icon: Award,    label: "10+ Years Experience"       },
    { icon: Globe2,   label: "India · USA · Canada"       },
    { icon: Users,    label: "120+ Apps Delivered"        },
    { icon: Cpu,      label: "MERN · Next.js · AWS"       },
];

const faqs = [
    { q: "What is full stack web development?",                          a: "Full stack web development covers both the frontend (what users see — built with React, Next.js) and the backend (server logic, APIs, databases — Node.js, Express, MongoDB/PostgreSQL). A full stack team handles the entire application from UI to database to cloud deployment." },
    { q: "Which technologies does Nevatrix use for full stack development?", a: "Nevatrix builds full stack applications using React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, TypeScript, Tailwind CSS, Docker and AWS. We choose the best stack based on your project's requirements, scale and budget." },
    { q: "Can Nevatrix build a SaaS platform or web application from scratch?", a: "Yes. Nevatrix specialises in building SaaS platforms, business web applications and startup MVPs from scratch — architecture, UI/UX, frontend, backend, database design, cloud deployment and ongoing support." },
    { q: "How long does it take to build a web application?",            a: "A simple MVP typically takes 4–8 weeks. A full-featured SaaS platform or enterprise application can take 3–6 months depending on complexity, features and integrations required." },
    { q: "Do you provide support and maintenance after launch?",         a: "Yes. Nevatrix provides post-launch technical support, bug fixes, performance monitoring, feature additions and cloud infrastructure maintenance — both one-time and ongoing monthly plans." },
    { q: "Can Nevatrix work with clients outside India?",                a: "Yes. We work with clients in the USA, Canada, UK and other countries remotely. We follow agile workflows with regular updates, video calls and transparent project management tools." },
];

/* ══════════════════════════════════════════════
   HOOKS
══════════════════════════════════════════════ */
function useReveal(threshold = 0.05) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (ref.current) {
            const r = ref.current.getBoundingClientRect();
            if (r.top < window.innerHeight && r.bottom > 0) { setVisible(true); return; }
        }
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold, rootMargin: "0px 0px -30px 0px" }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}

function useCountUp(target: number, duration = 1400, active = false) {
    const [n, setN] = useState(0);
    useEffect(() => {
        if (!active) return;
        let t0: number | null = null;
        const tick = (ts: number) => {
            if (!t0) t0 = ts;
            const p = Math.min((ts - t0) / duration, 1);
            setN(Math.round(p * target));
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [target, duration, active]);
    return n;
}

/* ══════════════════════════════════════════════
   STAT CARD
══════════════════════════════════════════════ */
function StatCard({ item, active, delay }: { item: typeof stats[0]; active: boolean; delay: number }) {
    const n = useCountUp(item.val, 1400, active);
    return (
        <div
            className={`fsp-stat group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 ${active ? "on" : ""}`}
            style={{ transitionDelay: `${delay}ms` } as React.CSSProperties}
        >
            <div className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl" style={{ background: `linear-gradient(90deg,${item.accent},${item.accent}70)` }} />
            <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-50 group-hover:opacity-85 transition-opacity duration-500`} />
            <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-500" style={{ background: item.accent }} />
            <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: item.accent + "18" }}>
                        <item.icon size={18} style={{ color: item.accent }} />
                    </div>
                    <BarChart3 size={12} className="text-slate-200 mt-1" />
                </div>
                <div className="text-[2.2rem] font-black leading-none mb-1 tabular-nums" style={{ color: item.accent }}>
                    {active ? n : 0}{item.suffix}
                </div>
                <div className="text-slate-800 font-bold text-sm mb-0.5">{item.label}</div>
                <div className="text-slate-400 text-xs font-medium">{item.sub}</div>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
export default function FullStackPage() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const statsR   = useReveal();
    const buildR   = useReveal();
    const techR    = useReveal();
    const processR = useReveal();
    const whyR     = useReveal();
    const faqR     = useReveal();

    return (
        <>
            <SEO page="full-stack" includeBreadcrumb={true} includeFaq={true} />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Mulish:wght@300;400;500;600&display=swap');

                .fsp { font-family: 'Mulish', sans-serif; color: #0F172A; }
                .fsp h1,.fsp h2,.fsp h3,.fsp h4 { font-family: 'Sora', sans-serif; }

                /* ── Moving grid ── */
                @keyframes gridScroll { from{background-position:0 0;} to{background-position:48px 48px;} }
                .fsp-grid {
                    background-image:
                            linear-gradient(rgba(79,70,229,.065) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(79,70,229,.065) 1px, transparent 1px);
                    background-size: 48px 48px;
                    animation: gridScroll 10s linear infinite;
                }

                /* ── Diagonal circuit pattern overlay ── */
                .fsp-circuit {
                    background-image:
                            linear-gradient(rgba(79,70,229,.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(79,70,229,.03) 1px, transparent 1px),
                            linear-gradient(45deg, rgba(37,99,235,.025) 1px, transparent 1px),
                            linear-gradient(-45deg, rgba(37,99,235,.025) 1px, transparent 1px);
                    background-size: 32px 32px, 32px 32px, 64px 64px, 64px 64px;
                    animation: gridScroll 14s linear infinite;
                }

                /* ── Hero bg ── */
                .fsp-hero-bg {
                    background:
                            radial-gradient(ellipse 65% 55% at 10% 55%, rgba(79,70,229,.24) 0%, transparent 60%),
                            radial-gradient(ellipse 55% 60% at 90% 48%, rgba(37,99,235,.18) 0%, transparent 55%),
                            radial-gradient(ellipse 40% 40% at 50% 90%, rgba(5,150,105,.10) 0%, transparent 60%),
                            #060B1A;
                }

                /* ── Mesh light ── */
                .fsp-mesh {
                    background:
                            radial-gradient(ellipse 70% 50% at 20% 40%, rgba(79,70,229,.06) 0%, transparent 60%),
                            radial-gradient(ellipse 55% 45% at 80% 65%, rgba(37,99,235,.05) 0%, transparent 55%),
                            radial-gradient(ellipse 50% 50% at 50% 5%,  rgba(5,150,105,.04) 0%, transparent 60%),
                            #F8FAFC;
                }

                /* ── Floating orbs ── */
                @keyframes orbA { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(22px,-18px) scale(1.05);} 66%{transform:translate(-14px,14px) scale(.97);} }
                @keyframes orbB { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(-18px,20px) scale(1.06);} 66%{transform:translate(16px,-16px) scale(.96);} }
                @keyframes orbC { 0%,100%{transform:translate(0,0) scale(1);} 50%{transform:translate(18px,18px) scale(1.07);} }
                @keyframes orbD { 0%,100%{transform:translate(0,0);} 50%{transform:translate(-12px,-12px);} }
                .oa{animation:orbA 10s ease-in-out infinite;}
                .ob{animation:orbB 13s ease-in-out infinite;}
                .oc{animation:orbC 15s ease-in-out infinite;}
                .od{animation:orbD  8s ease-in-out infinite;}

                /* ── Hero text entrance ── */
                @keyframes fadeUp{from{opacity:0;transform:translateY(26px);}to{opacity:1;transform:translateY(0);}}
                .fu1{animation:fadeUp .6s .10s ease both;}
                .fu2{animation:fadeUp .6s .25s ease both;}
                .fu3{animation:fadeUp .6s .40s ease both;}
                .fu4{animation:fadeUp .6s .55s ease both;}
                @keyframes lineSlide{from{transform:scaleX(0);}to{transform:scaleX(1);}}
                .ls{animation:lineSlide .9s .65s ease both;transform-origin:left;}

                /* ── Typing cursor blink on hero code snippet ── */
                @keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}
                .cursor{animation:blink 1s step-end infinite;}

                /* ── Section reveal ── */
                @keyframes sectionReveal{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
                .sr{opacity:0;}
                .sr.on{animation:sectionReveal .65s ease both;}

                /* ── Stagger grid ── */
                .sg > *{opacity:0;transform:translateY(22px);transition:opacity .48s ease,transform .48s ease;}
                .sg.on > *:nth-child(1){opacity:1;transform:none;transition-delay:.04s;}
                .sg.on > *:nth-child(2){opacity:1;transform:none;transition-delay:.12s;}
                .sg.on > *:nth-child(3){opacity:1;transform:none;transition-delay:.20s;}
                .sg.on > *:nth-child(4){opacity:1;transform:none;transition-delay:.28s;}
                .sg.on > *:nth-child(5){opacity:1;transform:none;transition-delay:.36s;}
                .sg.on > *:nth-child(6){opacity:1;transform:none;transition-delay:.44s;}

                /* ── Stat card ── */
                .fsp-stat{opacity:0;transform:translateY(26px) scale(.97);transition:opacity .5s ease,transform .5s ease,box-shadow .3s ease;}
                .fsp-stat.on{opacity:1;transform:translateY(0) scale(1);}
                .fsp-stat:hover{transform:translateY(-8px) scale(1.015) !important;box-shadow:0 22px 52px -10px rgba(15,23,42,.13) !important;}

                /* ── Lift card ── */
                .lc{transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;border:1px solid #E2E8F0;}
                .lc:hover{transform:translateY(-7px);box-shadow:0 22px 50px -12px rgba(15,23,42,.12);}

                /* ── Underbar ── */
                .ub{height:3px;width:0;border-radius:2px;transition:width .4s ease;}
                .lc:hover .ub{width:100%;}

                /* ── Tech scroll ── */
                @keyframes techScroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}
                .tech-track{animation:techScroll 28s linear infinite;}
                .tech-track:hover{animation-play-state:paused;}

                /* ── Step connector ── */
                .sc{position:absolute;top:34px;left:100%;width:100%;height:1px;background:linear-gradient(90deg,#CBD5E1,transparent);z-index:0;}
                @media(max-width:1023px){.sc{display:none;}}

                /* ── Step number gradient text ── */
                .sn{background:linear-gradient(135deg,var(--c) 0%,color-mix(in srgb,var(--c) 55%,white) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

                /* ── CTA button ── */
                .cta-btn{transition:transform .2s ease,box-shadow .2s ease;}
                .cta-btn:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(79,70,229,.40);}

                /* ── Code block in hero ── */
                .code-block{font-family:'Fira Code','Cascadia Code',monospace;font-size:11px;line-height:1.7;}
                .tok-kw{color:#818CF8;}
                .tok-fn{color:#34D399;}
                .tok-str{color:#FCD34D;}
                .tok-cmt{color:#6B7280;}
                .tok-var{color:#93C5FD;}
                .tok-punc{color:#94A3B8;}
            `}</style>

            <div className="fsp">

                {/* ════════════════════ HERO ════════════════════ */}
                <section className="relative min-h-[600px] flex items-center overflow-hidden fsp-hero-bg">
                    <div className="absolute inset-0">
                        <Image
                            src="/full-stack.jpg"
                            alt="Full stack web development company — React Next.js Node.js MERN stack by Nevatrix"
                            fill priority sizes="100vw"
                            className="object-cover opacity-30"
                        />
                    </div>
                    {/* Dark overlay — ensures text is always readable over the image */}
                    <div className="absolute inset-0 bg-black/65" />
                    <div className="absolute inset-0 fsp-grid opacity-50" />

                    {/* Animated orbs */}
                    <div className="oa absolute -top-16 -left-16 w-[440px] h-[440px] rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(79,70,229,.26),transparent 65%)"}} />
                    <div className="ob absolute -bottom-20 -right-20 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(37,99,235,.20),transparent 65%)"}} />
                    <div className="oc absolute top-1/3 right-[30%] w-[200px] h-[200px] rounded-full blur-2xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(5,150,105,.14),transparent 65%)"}} />

                    <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <div>
                            <div className="fu1 inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold tracking-widest uppercase">
                                <Cpu size={11} className="opacity-80" />
                                React · Next.js · Node.js · MERN Stack
                            </div>
                            <h1 className="fu2 text-5xl md:text-[3.6rem] font-extrabold text-white leading-[1.08] mb-5 tracking-tight">
                                Full Stack Web<br />
                                <span className="text-indigo-400">Development</span><br />
                                Company India
                            </h1>
                            <div className="ls h-[3px] w-56 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 mb-7" />
                            <p className="fu3 text-slate-300 text-lg leading-relaxed max-w-xl mb-10">
                                Nevatrix builds scalable web applications, SaaS platforms and custom
                                business software using React, Next.js, Node.js and MERN stack —
                                serving startups and enterprises across India, USA and Canada.
                            </p>
                            <div className="fu4 flex flex-wrap gap-4">
                                <a href="mailto:contact@nevatrix.com" className="cta-btn inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-indigo-900/40">
                                    Discuss Your Project <ArrowRight size={15} />
                                </a>
                                <a href="#process" className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition">
                                    Our Process
                                </a>
                            </div>
                        </div>

                        {/* Right — code editor mockup */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="od relative w-[400px]">
                                {/* Editor frame */}
                                <div className="rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-indigo-900/30 bg-[#0D1117]">
                                    {/* Tab bar */}
                                    <div className="bg-[#161B22] px-4 py-2.5 flex items-center gap-3 border-b border-slate-700/50">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                            <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                                            <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                                        </div>
                                        <div className="flex gap-1">
                                            <div className="px-3 py-1 rounded-md bg-[#0D1117] text-slate-400 text-[10px] font-mono border border-slate-700/50">api.ts</div>
                                            <div className="px-3 py-1 rounded-md text-slate-600 text-[10px] font-mono">schema.ts</div>
                                        </div>
                                        <div className="ml-auto flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[9px] text-emerald-400 font-mono">live</span>
                                        </div>
                                    </div>
                                    {/* Line numbers + code */}
                                    <div className="flex">
                                        <div className="px-3 py-4 text-slate-600 text-[10px] font-mono leading-[1.7] select-none border-r border-slate-700/30 text-right">
                                            {Array.from({length:14},(_,i)=><div key={i}>{i+1}</div>)}
                                        </div>
                                        <div className="p-4 code-block overflow-hidden">
                                            <div><span className="tok-kw">import</span> <span className="tok-punc">{"{"}</span> <span className="tok-var">Router</span> <span className="tok-punc">{"}"}</span> <span className="tok-kw">from</span> <span className="tok-str">'express'</span></div>
                                            <div className="tok-cmt">// Full Stack API — Nevatrix</div>
                                            <div>&nbsp;</div>
                                            <div><span className="tok-kw">const</span> <span className="tok-var">router</span> <span className="tok-punc">=</span> <span className="tok-fn">Router</span><span className="tok-punc">()</span></div>
                                            <div>&nbsp;</div>
                                            <div><span className="tok-var">router</span><span className="tok-punc">.</span><span className="tok-fn">get</span><span className="tok-punc">(</span><span className="tok-str">'/users'</span><span className="tok-punc">,</span> <span className="tok-kw">async</span> <span className="tok-punc">(</span><span className="tok-var">req</span><span className="tok-punc">,</span> <span className="tok-var">res</span><span className="tok-punc">) ={">"} {"{"}</span></div>
                                            <div>&nbsp;&nbsp;<span className="tok-kw">const</span> <span className="tok-var">users</span> <span className="tok-punc">=</span> <span className="tok-kw">await</span> <span className="tok-fn">db</span><span className="tok-punc">.</span><span className="tok-fn">query</span><span className="tok-punc">(</span><span className="tok-str">'SELECT *'</span><span className="tok-punc">)</span></div>
                                            <div>&nbsp;&nbsp;<span className="tok-var">res</span><span className="tok-punc">.</span><span className="tok-fn">json</span><span className="tok-punc">({"{"})</span> <span className="tok-var">users</span> <span className="tok-punc">{"}"}</span></div>
                                            <div><span className="tok-punc">{"}"}</span><span className="tok-punc">)</span></div>
                                            <div>&nbsp;</div>
                                            <div><span className="tok-kw">export default</span> <span className="tok-var">router</span></div>
                                            <div>&nbsp;</div>
                                            <div><span className="tok-cmt">// 🚀 Deployed on AWS</span><span className="cursor text-indigo-400">▋</span></div>
                                        </div>
                                    </div>
                                    {/* Status bar */}
                                    <div className="bg-indigo-600/80 px-4 py-1.5 flex items-center justify-between">
                                        <span className="text-indigo-200 text-[9px] font-mono">TypeScript  ·  Node.js 20</span>
                                        <span className="text-indigo-200 text-[9px] font-mono">✓ 0 errors</span>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[9px] font-bold px-2.5 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                                    <CheckCircle size={8} /> 0 Errors
                                </div>
                                <div className="absolute -bottom-3 -left-3 bg-indigo-600 text-white text-[9px] font-bold px-2.5 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                                    <GitBranch size={8} /> CI/CD Live
                                </div>
                                <div className="absolute -inset-8 rounded-3xl bg-indigo-600/07 blur-2xl -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Trust bar ── */}
                <section className="bg-indigo-50/65 border-b border-indigo-100/80 py-5">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-indigo-100">
                            {trust.map(({ icon: Icon, label }, i) => (
                                <div key={i} className="flex items-center gap-3 px-6 py-1 first:pl-0">
                                    <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                                        <Icon size={16} className="text-indigo-600" />
                                    </div>
                                    <span className="text-slate-700 text-sm font-semibold leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ STATS ════════════════════ */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 fsp-mesh" />
                    <div className="oa absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(79,70,229,.10),transparent 65%)"}} />
                    <div className="ob absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(37,99,235,.09),transparent 65%)"}} />
                    <div className="oc absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(5,150,105,.07),transparent 65%)"}} />

                    <div ref={statsR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${statsR.visible?"on":""} text-center mb-14`}>
                            <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Our Track Record</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Numbers That Speak</h2>
                            <p className="text-slate-500 text-sm max-w-lg mx-auto">Real results from 10+ years of building full stack web applications for clients across India, USA and Canada.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                            {stats.map((item, i) => (
                                <StatCard key={i} item={item} active={statsR.visible} delay={i * 85} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ WHAT WE BUILD ════════════════════ */}
                <section className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-blue-50/35" />
                    <div className="od absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(79,70,229,.07),transparent 65%)"}} />
                    <div className="ob absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(37,99,235,.07),transparent 65%)"}} />

                    <div ref={buildR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${buildR.visible?"on":""} flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16`}>
                            <div>
                                <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">What We Develop</p>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                                    End-to-End Full Stack<br />
                                    <span className="text-slate-400 font-semibold">Web Development Services</span>
                                </h2>
                            </div>
                            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">Frontend to backend, database to cloud — complete application development under one roof.</p>
                        </div>

                        <div className={`sg grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${buildR.visible?"on":""}`}>
                            {whatWeBuild.map((item, i) => (
                                <div key={i} className="lc rounded-2xl p-7 flex flex-col" style={{backgroundColor:item.accent+"07",borderColor:item.accent+"22"}}>
                                    <span className="self-start text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5" style={{color:item.accent,background:item.accent+"18"}}>{item.tag}</span>
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0" style={{background:item.accent+"18"}}>
                                        <item.icon size={20} style={{color:item.accent}} />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{item.desc}</p>
                                    <div className="ub mt-5" style={{background:`linear-gradient(90deg,${item.accent},${item.accent}80)`}} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ TECH STACK ════════════════════ */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-indigo-50/25 to-blue-50/30" />
                    <div className="fsp-circuit absolute inset-0 opacity-60" />
                    <div className="oa absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(79,70,229,.08),transparent 65%)"}} />

                    <div ref={techR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${techR.visible?"on":""} text-center mb-14`}>
                            <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Technology Stack</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Technologies We Use</h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">A modern, battle-tested stack to build scalable, secure and high-performance web applications and SaaS platforms.</p>
                        </div>

                        {/* Infinite scroll strip */}
                        <div className="relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
                            <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
                            <div className="tech-track flex gap-5 w-max">
                                {[...techLogos, ...techLogos].map((tech, i) => (
                                    <div key={i} className="lc flex-shrink-0 w-[130px] h-[88px] rounded-2xl bg-white flex flex-col items-center justify-center gap-2 p-4">
                                        <div className="relative w-12 h-8">
                                            <Image src={`/${tech.img}`} alt={tech.alt} fill sizes="48px" className="object-contain" />
                                        </div>
                                        <span className="text-slate-600 text-[10px] font-bold tracking-wide">{tech.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ════════════════════ PROCESS ════════════════════ */}
                <section id="process" className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/30 to-blue-50/40" />
                    <div className="od absolute top-1/2 -translate-y-1/2 -left-24 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(79,70,229,.09),transparent 60%)"}} />
                    <div className="oa absolute bottom-0 right-0 w-72 h-72 rounded-full blur-2xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(37,99,235,.08),transparent 65%)"}} />

                    <div ref={processR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${processR.visible?"on":""} text-center mb-16`}>
                            <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Our Methodology</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Development Approach</h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">A structured workflow that ensures every application we build is scalable, secure and maintainable for long-term growth.</p>
                        </div>

                        <div className={`sg grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative ${processR.visible?"on":""}`}>
                            {processSteps.map((step, i) => (
                                <div key={i} className="relative">
                                    {i < processSteps.length - 1 && <span className="sc" />}
                                    <div className="lc rounded-2xl p-8 h-full" style={{backgroundColor:step.accent+"07",borderColor:step.accent+"22"}}>
                                        <div className="flex items-center gap-3 mb-5">
                                            <span className="sn text-4xl font-black leading-none" style={{"--c":step.accent} as React.CSSProperties}>{step.num}</span>
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background:step.accent+"18"}}>
                                                <step.icon size={18} style={{color:step.accent}} />
                                            </div>
                                        </div>
                                        <h3 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ WHY NEVATRIX ════════════════════ */}
                <section className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-indigo-50/30 to-violet-50/35" />
                    <div className="oc absolute -top-16 -left-16 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(37,99,235,.09),transparent 65%)"}} />
                    <div className="ob absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(79,70,229,.09),transparent 65%)"}} />

                    <div ref={whyR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${whyR.visible?"on":""} text-center mb-16`}>
                            <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Why Nevatrix</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                Why Choose Nevatrix for<br />
                                <span className="text-slate-400 font-semibold">Full Stack Development?</span>
                            </h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">Deep technical expertise and product thinking — building web applications that scale with your business.</p>
                        </div>

                        <div className={`sg grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${whyR.visible?"on":""}`}>
                            {whyUs.map((item, i) => (
                                <div key={i} className="lc rounded-2xl p-7 flex items-start gap-5 bg-white/70" style={{borderColor:item.accent+"22",backgroundColor:item.accent+"06"}}>
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{background:item.accent+"18"}}>
                                        <item.icon size={20} style={{color:item.accent}} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1.5 text-sm">{item.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ FAQ ════════════════════ */}
                <section className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/45 via-blue-50/20 to-white" />
                    <div className="ob absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(79,70,229,.08),transparent 65%)"}} />

                    <div ref={faqR.ref} className="relative z-10 max-w-3xl mx-auto px-6">
                        <div className={`sr ${faqR.visible?"on":""} text-center mb-14`}>
                            <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">FAQ</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Frequently Asked Questions</h2>
                            <p className="text-slate-400 font-semibold text-base">Full Stack Web Development</p>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, i) => {
                                const isOpen = openIdx === i;
                                return (
                                    <div key={i} className={`border rounded-xl overflow-hidden bg-white transition-all duration-200 ${isOpen?"border-indigo-200 shadow-sm shadow-indigo-50":"border-slate-200 hover:border-slate-300"}`}>
                                        <button
                                            onClick={() => setOpenIdx(isOpen ? null : i)}
                                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
                                            style={{backgroundColor: isOpen ? "#EEF2FF" : "white"}}
                                            aria-expanded={isOpen}
                                        >
                                            <div className="flex items-center gap-4 min-w-0">
                                                <span className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors duration-200 ${isOpen?"bg-indigo-600 text-white":"bg-slate-100 text-slate-500"}`}>{i+1}</span>
                                                <span className="font-semibold text-slate-800 text-sm">{faq.q}</span>
                                            </div>
                                            <ChevronDown size={18} className={`flex-shrink-0 transition-all duration-300 ${isOpen?"rotate-180 text-indigo-600":"text-slate-400"}`} />
                                        </button>
                                        <div className="grid transition-all duration-300 ease-in-out" style={{gridTemplateRows:isOpen?"1fr":"0fr",opacity:isOpen?1:0}}>
                                            <div className="overflow-hidden">
                                                <p className="px-6 pb-5 pt-1 text-slate-500 text-sm leading-relaxed border-t border-slate-100">{faq.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ CTA ════════════════════ */}
                <section className="relative py-24 overflow-hidden fsp-hero-bg">
                    <div className="absolute inset-0 fsp-grid opacity-50" />
                    <div className="oa absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(79,70,229,.24),transparent 60%)"}} />
                    <div className="ob absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(37,99,235,.20),transparent 60%)"}} />

                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                            Free Consultation — No Obligation
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                            Have a Startup Idea or<br />Web Application to Build?
                        </h2>
                        <p className="text-slate-400 text-base mb-10 max-w-xl mx-auto leading-relaxed">
                            Let Nevatrix build your web application or SaaS platform from scratch —
                            on time, on budget and built to scale with your business.
                        </p>
                        <a href="mailto:contact@nevatrix.com" className="cta-btn inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-indigo-900/50">
                            <CheckCircle size={18} /> Get Free Consultation <ArrowRight size={16} />
                        </a>
                    </div>
                </section>

            </div>
        </>
    );
}
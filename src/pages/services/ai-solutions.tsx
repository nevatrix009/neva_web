
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    BrainCircuit, Bot, BarChart3, Zap, ShieldCheck, Code2,
    MessageSquare, Eye, Workflow, TrendingUp, Cpu,
    ChevronDown, Award, Clock, Users, Star, Globe2,
    ClipboardList, Database, Rocket, CheckCircle, ArrowRight,
    Lightbulb,
} from "lucide-react";
import SEO from "@/components/SEO";

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const stats = [
    { val: 50,  suffix: "+", label: "AI Projects Delivered",   sub: "India, USA, Canada",   icon: BrainCircuit, accent: "#7C3AED", bg: "from-violet-50 to-violet-100/60"  },
    { val: 10,  suffix: "+", label: "Years Experience",         sub: "Since 2012",           icon: Award,        accent: "#0891B2", bg: "from-cyan-50 to-cyan-100/60"      },
    { val: 98,  suffix: "%", label: "Client Satisfaction",      sub: "5-star reviews",       icon: Star,         accent: "#059669", bg: "from-emerald-50 to-emerald-100/60"},
    { val: 4,   suffix: "×", label: "Avg. Productivity Boost",  sub: "Post AI integration",  icon: TrendingUp,   accent: "#D97706", bg: "from-amber-50 to-amber-100/60"   },
    { val: 60,  suffix: "%", label: "Cost Reduction",           sub: "Via automation",       icon: Zap,          accent: "#DC2626", bg: "from-rose-50 to-rose-100/60"      },
    { val: 3,   suffix: "+", label: "Countries Served",         sub: "India · USA · Canada", icon: Globe2,       accent: "#2563EB", bg: "from-blue-50 to-blue-100/60"      },
];

const services = [
    {
        title: "AI-Powered Web Applications",
        tag: "Web + AI",
        accent: "#7C3AED",
        icon: BrainCircuit,
        desc: "Intelligent web applications that learn from user behaviour, automate workflows and deliver personalised experiences — built on React, Next.js and scalable cloud infrastructure.",
    },
    {
        title: "Chatbots & Conversational AI",
        tag: "Automation",
        accent: "#0891B2",
        icon: MessageSquare,
        desc: "Custom AI chatbots and virtual assistants integrated with your website, WhatsApp or CRM — handling customer queries 24/7, qualifying leads and automating support.",
    },
    {
        title: "Business Process Automation",
        tag: "Efficiency",
        accent: "#059669",
        icon: Workflow,
        desc: "End-to-end automation of repetitive tasks — data entry, invoicing, report generation and approvals — using AI and RPA tools that save hours every single day.",
    },
    {
        title: "Predictive Analytics & Dashboards",
        tag: "Insights",
        accent: "#D97706",
        icon: BarChart3,
        desc: "AI-driven analytics platforms that turn your raw data into actionable insights, demand forecasts and real-time dashboards for smarter, faster business decisions.",
    },
    {
        title: "Computer Vision Solutions",
        tag: "Vision AI",
        accent: "#DC2626",
        icon: Eye,
        desc: "Image recognition, defect detection, document scanning and visual inspection systems using deep learning — deployed for quality control, security and document processing.",
    },
    {
        title: "Generative AI Integration",
        tag: "GenAI",
        accent: "#2563EB",
        icon: Cpu,
        desc: "Integrate GPT-4, Claude, Gemini and open-source LLMs into your products — for AI content generation, intelligent search, code assistants and knowledge Q&A systems.",
    },
];

const techLogos = [
    { img: "react.png",        alt: "React AI app development Warangal",          label: "React"       },
    { img: "nextjs.webp",      alt: "Next.js AI web application India",            label: "Next.js"     },
    { img: "nodejs.webp",      alt: "Node.js backend for AI apps",                 label: "Node.js"     },
    { img: "mongo.jpg",        alt: "MongoDB vector database AI applications",     label: "MongoDB"     },
    { img: "postgres.png",     alt: "PostgreSQL pgvector AI development",          label: "PostgreSQL"  },
    { img: "aws.webp",         alt: "AWS AI cloud services India",                 label: "AWS"         },
    { img: "docker.png",       alt: "Docker deployment AI applications",           label: "Docker"      },
    { img: "typescript.webp",  alt: "TypeScript AI application development",       label: "TypeScript"  },
];

const processSteps = [
    {
        num: "01",
        icon: ClipboardList,
        title: "Discovery & Use-Case Definition",
        accent: "#7C3AED",
        desc: "We study your business operations, identify the highest-impact AI opportunities and define clear goals, KPIs and a data strategy before a single line of code is written.",
    },
    {
        num: "02",
        icon: Database,
        title: "Data Preparation & Model Design",
        accent: "#0891B2",
        desc: "We audit your existing data, build collection pipelines if needed, select the right AI architecture — custom ML, fine-tuned LLM, or pre-built API — and design the integration.",
    },
    {
        num: "03",
        icon: Code2,
        title: "Development & Training",
        accent: "#059669",
        desc: "Our engineers build, train and rigorously test your AI solution — iterating on model accuracy, integrating APIs and connecting everything to your existing systems and workflows.",
    },
    {
        num: "04",
        icon: Rocket,
        title: "Deployment & Optimisation",
        accent: "#D97706",
        desc: "We deploy to production, set up performance dashboards, monitor model drift and continuously improve accuracy and efficiency as your data and business grows.",
    },
];

const whyUs = [
    { icon: BrainCircuit, title: "AI-First Approach",       accent: "#7C3AED", desc: "Every solution we build has AI and automation at its core — not bolted on as an afterthought. We design for intelligence from day one." },
    { icon: Zap,           title: "Rapid Prototyping",       accent: "#0891B2", desc: "We move fast. Most AI proof-of-concepts are ready in 2–4 weeks so you can validate real value before committing to a full build." },
    { icon: ShieldCheck,   title: "Secure & Responsible AI", accent: "#059669", desc: "Data privacy, model explainability and bias mitigation are built into our development process — AI you can trust and explain to stakeholders." },
    { icon: Lightbulb,     title: "Domain Expertise",        accent: "#D97706", desc: "We've built AI for e-commerce, healthcare, logistics, fintech and education — our team speaks your industry's language." },
    { icon: Code2,         title: "Full-Stack Capability",   accent: "#DC2626", desc: "From the AI model to the user interface and backend API — we deliver the entire stack, not just an ML model in isolation." },
    { icon: BarChart3,     title: "Measurable ROI",          accent: "#2563EB", desc: "We define clear KPIs — cost savings, hours automated, revenue uplift — and build reporting dashboards so you always know your AI ROI." },
];

const trust = [
    { icon: Award,      label: "10+ Years Experience"       },
    { icon: Globe2,     label: "India · USA · Canada"       },
    { icon: Users,      label: "50+ AI Projects Delivered"  },
    { icon: TrendingUp, label: "4× Avg. Productivity Gain"  },
];

const faqs = [
    {
        q: "What AI development services does Nevatrix offer in Warangal?",
        a: "Nevatrix offers end-to-end AI software development services in Warangal and across India — including AI-powered web applications, chatbots, business process automation, predictive analytics, computer vision and generative AI integration using GPT-4, Claude and open-source LLMs.",
    },
    {
        q: "How much does AI software development cost in India?",
        a: "AI development cost in India depends on the complexity of the solution. A basic chatbot or automation workflow starts from ₹30,000, while a full custom AI application with ML model training, API integration and dashboards ranges from ₹1,00,000 to ₹10,00,000+. Contact Nevatrix for a free project estimate.",
    },
    {
        q: "Can Nevatrix integrate AI into my existing software or website?",
        a: "Yes. Nevatrix can add AI capabilities — such as intelligent search, chatbots, automation workflows or recommendation engines — to your existing website, app or business software without a complete rebuild.",
    },
    {
        q: "How long does it take to build a custom AI solution?",
        a: "A basic AI chatbot or automation tool typically takes 2–4 weeks. A full custom AI application with model training, backend integration and a dashboard takes 8–20 weeks depending on complexity, data availability and integrations required.",
    },
    {
        q: "Do I need a large amount of data to use AI for my business?",
        a: "Not always. While large datasets improve custom model accuracy, many powerful AI solutions use pre-trained models (like GPT-4 or Claude) that require minimal data. Nevatrix will advise on the best approach based on your use case and existing data.",
    },
    {
        q: "Does Nevatrix provide AI development for startups?",
        a: "Yes. Nevatrix specialises in building AI-powered MVPs and scalable AI products for startups across India, USA and Canada. We offer flexible engagement models — fixed-scope projects, sprint-based builds and dedicated development retainers.",
    },
];

/* ══════════════════════════════════════════════
   HOOKS
══════════════════════════════════════════════ */
function useReveal(threshold = 0.05) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) { setVisible(true); return; }
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
            className={`ai-stat group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 ${active ? "on" : ""}`}
            style={{ transitionDelay: `${delay}ms` } as React.CSSProperties}
        >
            <div className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg,${item.accent},${item.accent}70)` }} />
            <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-50 group-hover:opacity-85 transition-opacity duration-500`} />
            <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full opacity-[0.07] group-hover:opacity-[0.14] transition-opacity duration-500"
                style={{ background: item.accent }} />
            <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: item.accent + "18" }}>
                        <item.icon size={18} style={{ color: item.accent }} />
                    </div>
                    <BarChart3 size={12} className="text-slate-200 mt-1" />
                </div>
                <div className="text-[2.2rem] font-black leading-none mb-1 tabular-nums"
                    style={{ color: item.accent }}>
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
export default function AISolutionsPage() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const statsR   = useReveal();
    const svcR     = useReveal();
    const techR    = useReveal();
    const processR = useReveal();
    const whyR     = useReveal();
    const faqR     = useReveal();

    return (
        <>
            <SEO page="ai-solutions" includeFaq={true} includeBreadcrumb={true} />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Mulish:wght@300;400;500;600&display=swap');

                .ai-page { font-family: 'Mulish', sans-serif; color: #0F172A; }
                .ai-page h1, .ai-page h2, .ai-page h3, .ai-page h4 { font-family: 'Sora', sans-serif; }

                /* Moving grid */
                @keyframes gridScroll { from{background-position:0 0;} to{background-position:48px 48px;} }
                .ai-grid {
                    background-image:
                        linear-gradient(rgba(124,58,237,.07) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(124,58,237,.07) 1px, transparent 1px);
                    background-size: 48px 48px;
                    animation: gridScroll 10s linear infinite;
                }

                /* Hero mesh */
                .ai-hero-bg {
                    background:
                        radial-gradient(ellipse 65% 55% at 12% 55%, rgba(124,58,237,.28) 0%, transparent 60%),
                        radial-gradient(ellipse 55% 60% at 88% 48%, rgba(8,145,178,.18) 0%, transparent 55%),
                        #0A0618;
                }
                .ai-mesh-light {
                    background:
                        radial-gradient(ellipse 70% 50% at 20% 40%, rgba(124,58,237,.06) 0%, transparent 60%),
                        radial-gradient(ellipse 55% 45% at 80% 65%, rgba(8,145,178,.05) 0%, transparent 55%),
                        radial-gradient(ellipse 50% 50% at 50% 5%,  rgba(37,99,235,.04) 0%, transparent 60%),
                        #F8FAFC;
                }

                /* Floating orbs */
                @keyframes orbA { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(20px,-18px) scale(1.05);} 66%{transform:translate(-14px,14px) scale(.97);} }
                @keyframes orbB { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(-18px,20px) scale(1.06);} 66%{transform:translate(16px,-16px) scale(.96);} }
                @keyframes orbC { 0%,100%{transform:translate(0,0) scale(1);} 50%{transform:translate(18px,18px) scale(1.07);} }
                @keyframes orbD { 0%,100%{transform:translate(0,0);} 50%{transform:translate(-12px,-12px);} }
                .aoa{animation:orbA 10s ease-in-out infinite;}
                .aob{animation:orbB 13s ease-in-out infinite;}
                .aoc{animation:orbC 15s ease-in-out infinite;}
                .aod{animation:orbD  8s ease-in-out infinite;}

                /* Hero entrance */
                @keyframes fadeUp { from{opacity:0;transform:translateY(26px);} to{opacity:1;transform:translateY(0);} }
                .fu1{animation:fadeUp .6s .10s ease both;}
                .fu2{animation:fadeUp .6s .25s ease both;}
                .fu3{animation:fadeUp .6s .40s ease both;}
                .fu4{animation:fadeUp .6s .55s ease both;}
                @keyframes lineSlide{from{transform:scaleX(0);}to{transform:scaleX(1);}}
                .ls{animation:lineSlide .9s .65s ease both;transform-origin:left;}

                /* Section reveal */
                @keyframes sectionReveal{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
                .sr{opacity:0;}
                .sr.on{animation:sectionReveal .65s ease both;}

                /* Stagger grid */
                .sg > * { opacity:0; transform:translateY(22px); transition:opacity .48s ease, transform .48s ease; }
                .sg.on > *:nth-child(1){opacity:1;transform:none;transition-delay:.04s;}
                .sg.on > *:nth-child(2){opacity:1;transform:none;transition-delay:.12s;}
                .sg.on > *:nth-child(3){opacity:1;transform:none;transition-delay:.20s;}
                .sg.on > *:nth-child(4){opacity:1;transform:none;transition-delay:.28s;}
                .sg.on > *:nth-child(5){opacity:1;transform:none;transition-delay:.36s;}
                .sg.on > *:nth-child(6){opacity:1;transform:none;transition-delay:.44s;}

                /* Stat card */
                .ai-stat {
                    opacity:0; transform:translateY(26px) scale(.97);
                    transition: opacity .5s ease, transform .5s ease, box-shadow .3s ease;
                }
                .ai-stat.on{opacity:1;transform:translateY(0) scale(1);}
                .ai-stat:hover{transform:translateY(-8px) scale(1.015) !important;box-shadow:0 22px 52px -10px rgba(15,23,42,.13) !important;}

                /* Lift card */
                .lc{transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;border:1px solid #E2E8F0;}
                .lc:hover{transform:translateY(-7px);box-shadow:0 22px 50px -12px rgba(15,23,42,.12);}

                /* Underbar */
                .ub{height:3px;width:0;border-radius:2px;transition:width .4s ease;}
                .lc:hover .ub{width:100%;}

                /* Tech scroll */
                @keyframes techScroll { from{transform:translateX(0);} to{transform:translateX(-50%);} }
                .tech-scroll-track{animation:techScroll 28s linear infinite;}
                .tech-scroll-track:hover{animation-play-state:paused;}

                /* Step connector */
                .sc{position:absolute;top:34px;left:100%;width:100%;height:1px;background:linear-gradient(90deg,#CBD5E1,transparent);z-index:0;}
                @media(max-width:1023px){.sc{display:none;}}

                /* Step number gradient */
                .sn{background:linear-gradient(135deg,var(--c) 0%,color-mix(in srgb,var(--c) 55%,white) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

                /* CTA button */
                .cta-btn{transition:transform .2s ease,box-shadow .2s ease;}
                .cta-btn:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(124,58,237,.40);}

                /* FAQ */
                .faq-body{display:grid;transition:grid-template-rows .3s ease, opacity .3s ease;}
            `}</style>

            <div className="ai-page">

                {/* ════════════════════ HERO ════════════════════ */}
                <section className="relative min-h-[580px] flex items-center overflow-hidden ai-hero-bg">
                    <div className="absolute inset-0">
                        <Image
                            src="/full-stack.jpg"
                            alt="AI software development company in Warangal India — Nevatrix"
                            fill priority sizes="100vw"
                            className="object-cover opacity-[0.07]"
                        />
                    </div>
                    <div className="absolute inset-0 ai-grid opacity-50" />

                    {/* Animated orbs */}
                    <div className="aoa absolute -top-16 -left-16 w-[440px] h-[440px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(124,58,237,.28),transparent 65%)" }} />
                    <div className="aob absolute -bottom-20 -right-20 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(8,145,178,.20),transparent 65%)" }} />
                    <div className="aoc absolute top-1/3 right-[30%] w-[220px] h-[220px] rounded-full blur-2xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(37,99,235,.16),transparent 65%)" }} />

                    <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <div>
                            <div className="fu1 inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-bold tracking-widest uppercase">
                                <BrainCircuit size={11} className="opacity-80" />
                                AI-First Development Since 2012
                            </div>

                            <h1 className="fu2 text-5xl md:text-[3.6rem] font-extrabold text-white leading-[1.08] mb-5 tracking-tight">
                                AI Software<br />
                                <span className="text-violet-400">Development</span><br />
                                Company
                            </h1>

                            <div className="ls h-[3px] w-56 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 mb-7" />

                            <p className="fu3 text-slate-300 text-lg leading-relaxed max-w-xl mb-10">
                                Nevatrix builds intelligent AI-powered applications, automation tools
                                and data-driven solutions for startups and enterprises across Warangal,
                                Telangana, India, USA and Canada.
                            </p>

                            <div className="fu4 flex flex-wrap gap-4">
                                <a href="/contact" className="cta-btn inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-violet-900/40">
                                    Get Free AI Consultation <ArrowRight size={15} />
                                </a>
                                <a href="#ai-services" className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition">
                                    Explore Services
                                </a>
                            </div>
                        </div>

                        {/* Right — decorative AI mockup */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="aod relative w-[360px]">
                                <div className="rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-violet-900/30 bg-slate-900">
                                    {/* Terminal chrome */}
                                    <div className="bg-slate-800 px-4 py-3 flex items-center gap-3 border-b border-slate-700/50">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                            <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                                            <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                                        </div>
                                        <div className="flex-1 bg-slate-700/60 rounded-md h-6 flex items-center px-3 gap-2">
                                            <Bot size={10} className="text-violet-400" />
                                            <span className="text-slate-400 text-[10px]">nevatrix-ai · active</span>
                                        </div>
                                    </div>
                                    {/* Mock AI chat */}
                                    <div className="p-5 space-y-3 font-mono text-[11px]">
                                        <div className="flex items-start gap-2">
                                            <span className="text-violet-400 shrink-0">user →</span>
                                            <span className="text-slate-300">Automate my customer support</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-cyan-400 shrink-0">ai   →</span>
                                            <span className="text-slate-300">Deploying AI chatbot<span className="animate-pulse">▌</span></span>
                                        </div>
                                        <div className="mt-4 grid grid-cols-2 gap-2">
                                            {[
                                                { label: "Queries handled", val: "24/7",  c: "#7C3AED" },
                                                { label: "Response time",   val: "<1s",   c: "#0891B2" },
                                                { label: "Cost saved",      val: "60%",   c: "#059669" },
                                                { label: "Leads captured",  val: "3×",    c: "#D97706" },
                                            ].map(({ label, val, c }) => (
                                                <div key={label} className="rounded-xl p-3 flex flex-col gap-1"
                                                    style={{ background: c + "18", border: `1px solid ${c}28` }}>
                                                    <span className="text-[9px] text-slate-400">{label}</span>
                                                    <span className="font-bold text-sm" style={{ color: c }}>{val}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-2 h-7 rounded-lg bg-violet-600/30 flex items-center justify-center">
                                            <span className="text-violet-300 text-[10px] font-bold">AI Solution Live ✓</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Badges */}
                                <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[9px] font-bold px-2.5 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                                    <CheckCircle size={9} /> Production Ready
                                </div>
                                <div className="absolute -bottom-3 -left-3 bg-violet-600 text-white text-[9px] font-bold px-2.5 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                                    <Zap size={9} /> GPT-4 Powered
                                </div>
                                <div className="absolute -inset-6 rounded-3xl bg-violet-600/07 blur-2xl -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ════════════════════ TRUST BAR ════════════════════ */}
                <section className="bg-violet-50/65 border-b border-violet-100/80 py-5">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-violet-100">
                            {trust.map(({ icon: Icon, label }, i) => (
                                <div key={i} className="flex items-center gap-3 px-6 py-1 first:pl-0">
                                    <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                                        <Icon size={16} className="text-violet-700" />
                                    </div>
                                    <span className="text-slate-700 text-sm font-semibold leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ STATS ════════════════════ */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 ai-mesh-light" />
                    <div className="aoa absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(124,58,237,.10),transparent 65%)" }} />
                    <div className="aob absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(8,145,178,.09),transparent 65%)" }} />

                    <div ref={statsR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${statsR.visible ? "on" : ""} text-center mb-14`}>
                            <p className="text-violet-700 text-xs font-bold tracking-widest uppercase mb-3">Our Track Record</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                                Results We've Delivered
                            </h2>
                            <p className="text-slate-500 text-sm max-w-lg mx-auto">
                                Real numbers from 10+ years of building AI solutions for businesses across Warangal, India, USA and Canada.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                            {stats.map((item, i) => (
                                <StatCard key={i} item={item} active={statsR.visible} delay={i * 85} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ SERVICES ════════════════════ */}
                <section id="ai-services" className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-purple-50/40" />
                    <div className="aod absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(124,58,237,.07),transparent 65%)" }} />
                    <div className="aob absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(8,145,178,.07),transparent 65%)" }} />

                    <div ref={svcR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${svcR.visible ? "on" : ""} flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16`}>
                            <div>
                                <p className="text-violet-700 text-xs font-bold tracking-widest uppercase mb-3">What We Build</p>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                                    AI Development Services
                                </h2>
                            </div>
                            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                                From intelligent automation to generative AI — end-to-end AI solutions tailored to your industry and business goals.
                            </p>
                        </div>

                        <div className={`sg grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${svcR.visible ? "on" : ""}`}>
                            {services.map((svc, i) => (
                                <div key={i} className="lc rounded-2xl p-7 flex flex-col"
                                    style={{ backgroundColor: svc.accent + "07", borderColor: svc.accent + "22" }}>
                                    <span className="self-start text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
                                        style={{ color: svc.accent, background: svc.accent + "18" }}>
                                        {svc.tag}
                                    </span>
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                                        style={{ background: svc.accent + "18" }}>
                                        <svc.icon size={20} style={{ color: svc.accent }} />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{svc.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed flex-1 text-justify">{svc.desc}</p>
                                    <div className="ub mt-5"
                                        style={{ background: `linear-gradient(90deg,${svc.accent},${svc.accent}80)` }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ TECH STACK ════════════════════ */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-violet-50/25 to-purple-50/30" />
                    <div className="aoa absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(124,58,237,.08),transparent 65%)" }} />

                    <div ref={techR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${techR.visible ? "on" : ""} text-center mb-14`}>
                            <p className="text-violet-700 text-xs font-bold tracking-widest uppercase mb-3">Technology Stack</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                AI & Development Technologies We Use
                            </h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">
                                We select the right tools for your use case — from cutting-edge LLMs and ML frameworks to production-grade deployment infrastructure.
                            </p>
                        </div>

                        {/* Infinite scroll strip */}
                        <div className="relative overflow-hidden">
                            <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
                            <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

                            <div className="tech-scroll-track flex gap-5 w-max">
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
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-50/30 to-indigo-50/40" />
                    <div className="aod absolute top-1/2 -translate-y-1/2 -left-24 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(124,58,237,.09),transparent 60%)" }} />
                    <div className="aoa absolute bottom-0 right-0 w-72 h-72 rounded-full blur-2xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(8,145,178,.08),transparent 65%)" }} />

                    <div ref={processR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${processR.visible ? "on" : ""} text-center mb-16`}>
                            <p className="text-violet-700 text-xs font-bold tracking-widest uppercase mb-3">Our Methodology</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                Our AI Development Process
                            </h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">
                                A structured, transparent process from discovery to deployment — so you always know what's being built, why, and when it will be ready.
                            </p>
                        </div>

                        <div className={`sg grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative ${processR.visible ? "on" : ""}`}>
                            {processSteps.map((step, i) => (
                                <div key={i} className="relative">
                                    {i < processSteps.length - 1 && <span className="sc" />}
                                    <div className="lc rounded-2xl p-8 h-full"
                                        style={{ backgroundColor: step.accent + "07", borderColor: step.accent + "22" }}>
                                        <div className="flex items-center gap-3 mb-5">
                                            <span className="sn text-4xl font-black leading-none"
                                                style={{ "--c": step.accent } as React.CSSProperties}>
                                                {step.num}
                                            </span>
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                                                style={{ background: step.accent + "18" }}>
                                                <step.icon size={18} style={{ color: step.accent }} />
                                            </div>
                                        </div>
                                        <h3 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed text-justify">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ WHY NEVATRIX ════════════════════ */}
                <section className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-50/40 via-violet-50/25 to-indigo-50/40" />
                    <div className="aoc absolute -top-16 -left-16 w-96 h-96 rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(124,58,237,.09),transparent 65%)" }} />
                    <div className="aob absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(8,145,178,.09),transparent 65%)" }} />

                    <div ref={whyR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${whyR.visible ? "on" : ""} text-center mb-16`}>
                            <p className="text-violet-700 text-xs font-bold tracking-widest uppercase mb-3">Why Choose Us</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                Why Choose Nevatrix for<br />
                                <span className="text-slate-400 font-semibold">AI Development?</span>
                            </h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">
                                We bring together AI expertise, full-stack engineering and real business experience to deliver solutions that work in the real world.
                            </p>
                        </div>

                        <div className={`sg grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${whyR.visible ? "on" : ""}`}>
                            {whyUs.map((item, i) => (
                                <div key={i} className="lc rounded-2xl p-7 flex items-start gap-5 bg-white/70"
                                    style={{ borderColor: item.accent + "22", backgroundColor: item.accent + "06" }}>
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                                        style={{ background: item.accent + "18" }}>
                                        <item.icon size={20} style={{ color: item.accent }} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1.5 text-sm">{item.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed text-justify">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ FAQ ════════════════════ */}
                <section className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-violet-50/45 via-purple-50/20 to-white" />
                    <div className="aob absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(124,58,237,.08),transparent 65%)" }} />

                    <div ref={faqR.ref} className="relative z-10 max-w-3xl mx-auto px-6">
                        <div className={`sr ${faqR.visible ? "on" : ""} text-center mb-14`}>
                            <p className="text-violet-700 text-xs font-bold tracking-widest uppercase mb-3">FAQ</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-400 font-semibold text-base">AI Development in Warangal & India</p>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, i) => {
                                const isOpen = openIdx === i;
                                return (
                                    <div key={i}
                                        className={`border rounded-xl overflow-hidden bg-white transition-all duration-200 ${isOpen ? "border-violet-200 shadow-sm shadow-violet-50" : "border-slate-200 hover:border-slate-300"}`}>
                                        <button
                                            onClick={() => setOpenIdx(isOpen ? null : i)}
                                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
                                            style={{ backgroundColor: isOpen ? "#F5F3FF" : "white" }}
                                            aria-expanded={isOpen}
                                        >
                                            <div className="flex items-center gap-4 min-w-0">
                                                <span className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                                                    {i + 1}
                                                </span>
                                                <span className="font-semibold text-slate-800 text-sm">{faq.q}</span>
                                            </div>
                                            <ChevronDown size={18}
                                                className={`flex-shrink-0 transition-all duration-300 ${isOpen ? "rotate-180 text-violet-600" : "text-slate-400"}`} />
                                        </button>
                                        <div className="faq-body"
                                            style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0, transition: "grid-template-rows .3s ease, opacity .3s ease" }}>
                                            <div className="overflow-hidden">
                                                <p className="px-6 pb-5 pt-1 text-slate-500 text-sm leading-relaxed border-t border-slate-100">
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

                {/* ════════════════════ CTA ════════════════════ */}
                <section className="relative py-24 overflow-hidden ai-hero-bg">
                    <div className="absolute inset-0 ai-grid opacity-50" />
                    <div className="aoa absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full blur-3xl"
                        style={{ background: "radial-gradient(circle,rgba(124,58,237,.25),transparent 60%)" }} />
                    <div className="aob absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full blur-3xl"
                        style={{ background: "radial-gradient(circle,rgba(8,145,178,.18),transparent 60%)" }} />

                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                            Free 30-Min AI Consultation — No Obligation
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                            Ready to Build Your AI Solution<br />in Warangal?
                        </h2>
                        <p className="text-slate-400 text-base mb-10 max-w-xl mx-auto leading-relaxed">
                            Get a free consultation from Nevatrix — a leading AI software development
                            company in Warangal, Telangana. We'll define your use case, estimate ROI and
                            propose a phased plan that fits your budget.
                        </p>
                        <a href="/contact"
                            className="cta-btn inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-violet-900/40">
                            <CheckCircle size={18} /> Get Free AI Consultation <ArrowRight size={16} />
                        </a>
                    </div>
                </section>

            </div>
        </>
    );
}

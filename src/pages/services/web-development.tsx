"use client";

// ── SEO metadata lives in app/services/web-development/layout.tsx ──
// export const metadata: Metadata = {
//   title: "Web Development Company in Warangal | Website Design & Development - Nevatrix",
//   description: "Nevatrix is a top web development company in Warangal offering custom website design, responsive web development and SEO-friendly business websites for startups and businesses across Telangana.",
//   keywords: "web development company in warangal, website design company warangal, website development warangal, web designers warangal, best web development company warangal",
//   alternates: { canonical: "https://nevatrix.com/services/web-development" },
//   openGraph: { title: "...", description: "...", url: "...", siteName: "Nevatrix", locale: "en_IN", type: "website" },
//   robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
// };

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    Code2, Globe, Paintbrush, Smartphone, CheckCircle,
    ClipboardList, LayoutDashboard, ShieldCheck, CloudUpload,
    Search, Zap, BarChart3, ChevronDown, ArrowRight,
    Award, Clock, Users, Star, TrendingUp, Layers3,
    Globe2, Database,
} from "lucide-react";
import SEO from "@/components/SEO";

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const stats = [
    { val: 100, suffix: "+", label: "Websites Delivered",   sub: "India, USA, Canada",      icon: Globe,    accent: "#0891B2", bg: "from-cyan-50 to-cyan-100/60"     },
    { val: 10,  suffix: "+", label: "Years Experience",      sub: "Since 2012",             icon: Award,    accent: "#2563EB", bg: "from-blue-50 to-blue-100/60"     },
    { val: 98,  suffix: "%", label: "Client Satisfaction",   sub: "5-star reviews",         icon: Star,     accent: "#059669", bg: "from-emerald-50 to-emerald-100/60"},
    { val: 7,   suffix: "d", label: "Avg. Delivery Time",    sub: "Business websites",      icon: Clock,    accent: "#D97706", bg: "from-amber-50 to-amber-100/60"   },
    { val: 100, suffix: "%", label: "Mobile-Responsive",     sub: "Every project",          icon: Smartphone,accent: "#7C3AED",bg: "from-violet-50 to-violet-100/60" },
    { val: 3,   suffix: "+", label: "Countries Served",      sub: "India · USA · Canada",   icon: Globe2,   accent: "#DC2626", bg: "from-rose-50 to-rose-100/60"     },
];

const services = [
    { title: "Business Websites",   tag: "Corporate",    accent: "#0891B2", icon: Globe,          desc: "Professional, SEO-friendly and responsive business websites that establish your brand online and attract customers in Warangal, Hanamkonda and across Telangana." },
    { title: "Landing Pages",       tag: "Conversion",   accent: "#2563EB", icon: Zap,            desc: "High-converting landing pages with clear CTAs, fast load times and targeted content designed to generate leads, enquiries and sales for your business." },
    { title: "E-Commerce Stores",   tag: "Commerce",     accent: "#059669", icon: BarChart3,      desc: "Fully featured online stores with product catalogues, cart, checkout and secure Razorpay/Stripe payment gateway integration for selling across India." },
    { title: "Custom Web Apps",     tag: "Enterprise",   accent: "#7C3AED", icon: Code2,          desc: "Bespoke web applications — portals, dashboards, CRMs and SaaS platforms — built with modern frameworks and scalable backend architecture." },
    { title: "Mobile-Responsive UI",tag: "UI/UX",        accent: "#D97706", icon: Smartphone,     desc: "Pixel-perfect interfaces that look great and perform flawlessly on every device — mobile, tablet and desktop — using Tailwind CSS and modern design systems." },
    { title: "Website Maintenance", tag: "Support",      accent: "#DC2626", icon: CloudUpload,    desc: "Ongoing performance monitoring, content updates, security patches and technical support to keep your website fast, secure and up-to-date after launch." },
];

const techLogos = [
    { img: "react.png",        alt: "React JS web development Warangal",        label: "React JS"    },
    { img: "nextjs.webp",      alt: "Next.js development company India",         label: "Next.js"     },
    { img: "nodejs.webp",      alt: "Node.js backend development",               label: "Node.js"     },
    { img: "expressjs.png",    alt: "Express.js API development",                label: "Express.js"  },
    { img: "mongo.jpg",        alt: "MongoDB database development",               label: "MongoDB"     },
    { img: "mysql.png",        alt: "MySQL database services",                   label: "MySQL"       },
    { img: "postgres.png",     alt: "PostgreSQL database development",            label: "PostgreSQL"  },
    { img: "tailwindcss.webp", alt: "Tailwind CSS web design",                   label: "Tailwind"    },
    { img: "typescript.webp",  alt: "TypeScript development",                    label: "TypeScript"  },
    { img: "docker.png",       alt: "Docker deployment services",                label: "Docker"      },
    { img: "aws.webp",         alt: "AWS cloud hosting India",                   label: "AWS"         },
];

const processSteps = [
    { num: "01", icon: ClipboardList, title: "Discovery & Strategy",  accent: "#0891B2", desc: "We study your business goals, target audience, competitors in Warangal and your industry to define the best web strategy and content architecture." },
    { num: "02", icon: Paintbrush,    title: "Design & Wireframing",  accent: "#2563EB", desc: "We craft user-friendly layouts, design systems and visual identity tailored to your brand and target customers in Warangal and Telangana." },
    { num: "03", icon: Code2,         title: "Development & SEO",     accent: "#059669", desc: "We build fast, accessible pages with on-page SEO, structured data and Core Web Vitals optimisation baked in from day one." },
    { num: "04", icon: CloudUpload,   title: "Launch & Maintenance",  accent: "#7C3AED", desc: "We deploy your site, configure Google Analytics, Search Console and provide ongoing support, updates and performance monitoring." },
];

const whyUs = [
    { icon: Zap,             title: "Blazing Fast Performance", accent: "#0891B2", desc: "Core Web Vitals optimised — fast load times improve user experience and Google search rankings for your Warangal business." },
    { icon: Search,          title: "SEO-First Development",    accent: "#2563EB", desc: "Built with semantic HTML, metadata, schema markup and keyword-optimised content from day one — not added as an afterthought." },
    { icon: ShieldCheck,     title: "Secure & Reliable",        accent: "#059669", desc: "HTTPS, input validation, security headers and best practices applied on every project we deliver." },
    { icon: Smartphone,      title: "Mobile-First Design",      accent: "#7C3AED", desc: "Every website is fully responsive and tested across all screen sizes — smartphones, tablets and desktops." },
    { icon: LayoutDashboard, title: "Clean, Scalable Code",     accent: "#D97706", desc: "Maintainable, well-structured architecture so your website grows and evolves as your business grows." },
    { icon: BarChart3,       title: "Analytics & Insights",     accent: "#DC2626", desc: "Google Analytics 4, Search Console and conversion tracking configured and verified from launch day." },
];

const trust = [
    { icon: Award,    label: "10+ Years Experience"       },
    { icon: Globe,    label: "India . USA . Canada" },
    { icon: Users,    label: "100+ Websites Built"        },
    { icon: TrendingUp, label: "SEO-Optimised by Default" },
];

const faqs = [
    { q: "Which is the best web development company in Warangal?",   a: "Nevatrix is a leading web development company in Warangal, Telangana, delivering custom business websites, ecommerce stores and web applications since 2012. We serve businesses across Warangal, Hanamkonda, Khammam and across India." },
    { q: "How much does website development cost in Warangal?",       a: "Website development costs in Warangal vary by type. A basic business website starts from ₹8,000 while ecommerce or custom web applications range from ₹25,000 to ₹2,00,000+. Contact Nevatrix for a free, no-obligation quote." },
    { q: "Does Nevatrix build mobile-friendly websites?",             a: "Yes. Every website built by Nevatrix is fully responsive and mobile-first — designed and tested across all screen sizes including smartphones, tablets and desktops." },
    { q: "How long does it take to build a website?",                 a: "A standard business website typically takes 7–14 days. Ecommerce stores and custom web applications take 3–8 weeks depending on features, integrations and complexity." },
    { q: "Does Nevatrix provide website maintenance and support?",    a: "Yes. Nevatrix provides ongoing website maintenance — performance monitoring, content updates, security patches and technical support — after your website launches." },
    { q: "Is Nevatrix's web development SEO-friendly?",               a: "Yes. All websites built by Nevatrix are developed with on-page SEO built-in — semantic HTML, proper heading structure, meta tags, schema markup, image alt text, fast load times and Core Web Vitals optimisation." },
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
            className={`wdp-stat group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 ${active ? "on" : ""}`}
            style={{ transitionDelay: `${delay}ms` } as React.CSSProperties}
        >
            <div className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl" style={{ background: `linear-gradient(90deg,${item.accent},${item.accent}70)` }} />
            <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-50 group-hover:opacity-85 transition-opacity duration-500`} />
            <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full opacity-[0.07] group-hover:opacity-[0.14] transition-opacity duration-500" style={{ background: item.accent }} />
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
export default function WebDevelopmentPage() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const statsR    = useReveal();
    const svcR      = useReveal();
    const techR     = useReveal();
    const processR  = useReveal();
    const whyR      = useReveal();
    const faqR      = useReveal();

    return (
        <>
            <SEO page="web-development" includeBreadcrumb={true} />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Mulish:wght@300;400;500;600&display=swap');

                .wdp { font-family: 'Mulish', sans-serif; color: #0F172A; }
                .wdp h1,.wdp h2,.wdp h3,.wdp h4 { font-family: 'Sora', sans-serif; }

                /* ── Moving grid ── */
                @keyframes gridScroll { from{background-position:0 0;} to{background-position:48px 48px;} }
                .wdp-grid {
                    background-image:
                        linear-gradient(rgba(8,145,178,.06) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(8,145,178,.06) 1px, transparent 1px);
                    background-size: 48px 48px;
                    animation: gridScroll 10s linear infinite;
                }

                /* ── Mesh backgrounds ── */
                .wdp-hero-bg {
                    background:
                        radial-gradient(ellipse 65% 55% at 12% 55%, rgba(8,145,178,.22) 0%, transparent 60%),
                        radial-gradient(ellipse 55% 60% at 88% 48%, rgba(5,150,105,.16) 0%, transparent 55%),
                        #061822;
                }
                .wdp-mesh-light {
                    background:
                        radial-gradient(ellipse 70% 50% at 20% 40%, rgba(8,145,178,.065) 0%, transparent 60%),
                        radial-gradient(ellipse 55% 45% at 80% 65%, rgba(5,150,105,.05) 0%, transparent 55%),
                        radial-gradient(ellipse 50% 50% at 50% 5%,  rgba(37,99,235,.04) 0%, transparent 60%),
                        #F8FAFC;
                }

                /* ── Floating orbs ── */
                @keyframes orbA { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(20px,-18px) scale(1.05);} 66%{transform:translate(-14px,14px) scale(.97);} }
                @keyframes orbB { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(-18px,20px) scale(1.06);} 66%{transform:translate(16px,-16px) scale(.96);} }
                @keyframes orbC { 0%,100%{transform:translate(0,0) scale(1);} 50%{transform:translate(18px,18px) scale(1.07);} }
                @keyframes orbD { 0%,100%{transform:translate(0,0);} 50%{transform:translate(-12px,-12px);} }
                .oa{animation:orbA 10s ease-in-out infinite;}
                .ob{animation:orbB 13s ease-in-out infinite;}
                .oc{animation:orbC 15s ease-in-out infinite;}
                .od{animation:orbD  8s ease-in-out infinite;}

                /* ── Hero entrance ── */
                @keyframes fadeUp { from{opacity:0;transform:translateY(26px);} to{opacity:1;transform:translateY(0);} }
                .fu1{animation:fadeUp .6s .10s ease both;}
                .fu2{animation:fadeUp .6s .25s ease both;}
                .fu3{animation:fadeUp .6s .40s ease both;}
                .fu4{animation:fadeUp .6s .55s ease both;}
                @keyframes lineSlide{from{transform:scaleX(0);}to{transform:scaleX(1);}}
                .ls{animation:lineSlide .9s .65s ease both;transform-origin:left;}

                /* ── Section reveal ── */
                @keyframes sectionReveal{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
                .sr{opacity:0;}
                .sr.on{animation:sectionReveal .65s ease both;}

                /* ── Stagger grid ── */
                .sg > * { opacity:0; transform:translateY(22px); transition:opacity .48s ease, transform .48s ease; }
                .sg.on > *:nth-child(1){opacity:1;transform:none;transition-delay:.04s;}
                .sg.on > *:nth-child(2){opacity:1;transform:none;transition-delay:.12s;}
                .sg.on > *:nth-child(3){opacity:1;transform:none;transition-delay:.20s;}
                .sg.on > *:nth-child(4){opacity:1;transform:none;transition-delay:.28s;}
                .sg.on > *:nth-child(5){opacity:1;transform:none;transition-delay:.36s;}
                .sg.on > *:nth-child(6){opacity:1;transform:none;transition-delay:.44s;}

                /* ── Stat card ── */
                .wdp-stat {
                    opacity:0; transform:translateY(26px) scale(.97);
                    transition: opacity .5s ease, transform .5s ease, box-shadow .3s ease;
                }
                .wdp-stat.on{opacity:1;transform:translateY(0) scale(1);}
                .wdp-stat:hover{transform:translateY(-8px) scale(1.015) !important;box-shadow:0 22px 52px -10px rgba(15,23,42,.13) !important;}

                /* ── Lift card ── */
                .lc{transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;border:1px solid #E2E8F0;}
                .lc:hover{transform:translateY(-7px);box-shadow:0 22px 50px -12px rgba(15,23,42,.12);}

                /* ── Underbar ── */
                .ub{height:3px;width:0;border-radius:2px;transition:width .4s ease;}
                .lc:hover .ub{width:100%;}

                /* ── Tech scroll ── */
                @keyframes techScroll { from{transform:translateX(0);} to{transform:translateX(-50%);} }
                .tech-scroll-track{animation:techScroll 28s linear infinite;}
                .tech-scroll-track:hover{animation-play-state:paused;}

                /* ── Step connector ── */
                .sc{position:absolute;top:34px;left:100%;width:100%;height:1px;background:linear-gradient(90deg,#CBD5E1,transparent);z-index:0;}
                @media(max-width:1023px){.sc{display:none;}}

                /* ── Step number gradient ── */
                .sn{background:linear-gradient(135deg,var(--c) 0%,color-mix(in srgb,var(--c) 55%,white) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

                /* ── CTA button ── */
                .cta-btn{transition:transform .2s ease,box-shadow .2s ease;}
                .cta-btn:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(8,145,178,.38);}

                /* ── FAQ ── */
                .faq-body{display:grid;transition:grid-template-rows .3s ease;}
            `}</style>

            <div className="wdp">

                {/* ════════════════════ HERO ════════════════════ */}
                <section className="relative min-h-[580px] flex items-center overflow-hidden wdp-hero-bg">
                    <div className="absolute inset-0">
                        <Image
                            src="/web-development.jpg"
                            alt="Web development company in Warangal — custom website design and development by Nevatrix"
                            fill priority sizes="100vw"
                            className="object-cover opacity-10"
                        />
                    </div>
                    <div className="absolute inset-0 wdp-grid opacity-55" />

                    {/* Animated orbs */}
                    <div className="oa absolute -top-16 -left-16 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(8,145,178,.24),transparent 65%)"}} />
                    <div className="ob absolute -bottom-20 -right-20 w-[460px] h-[460px] rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(5,150,105,.18),transparent 65%)"}} />
                    <div className="oc absolute top-1/3 right-[30%] w-[200px] h-[200px] rounded-full blur-2xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(37,99,235,.14),transparent 65%)"}} />

                    <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <div>
                            <div className="fu1 inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold tracking-widest uppercase">
                                <Globe2 size={11} className="opacity-80" />
                                Bothered about the design, we're here to help you
                            </div>
                            <h1 className="fu2 text-5xl md:text-[3.6rem] font-extrabold text-white leading-[1.08] mb-5 tracking-tight">
                                Web Development<br />
                                <span className="text-cyan-400">Company</span><br />

                            </h1>
                            <div className="ls h-[3px] w-56 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 mb-7" />
                            <p className="fu3 text-slate-300 text-lg leading-relaxed max-w-xl mb-10">
                                Nevatrix builds fast, beautiful and conversion-focused websites for
                                businesses —
                                from landing pages and corporate portals to custom web apps and
                                ecommerce platforms.
                            </p>
                            <div className="fu4 flex flex-wrap gap-4">
                                <a href="mailto:contact@nevatrix.com" className="cta-btn inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-cyan-900/40">
                                    Get Free Website Quote <ArrowRight size={15} />
                                </a>
                                <a href="#process" className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition">
                                    Our Process
                                </a>
                            </div>
                        </div>

                        {/* Right — decorative browser mockup */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="od relative w-[380px]">
                                {/* Browser frame */}
                                <div className="rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-cyan-900/25 bg-slate-900">
                                    {/* Browser chrome */}
                                    <div className="bg-slate-800 px-4 py-3 flex items-center gap-3 border-b border-slate-700/50">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                            <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                                            <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                                        </div>
                                        <div className="flex-1 bg-slate-700/60 rounded-md h-6 flex items-center px-3 gap-2">
                                            <Globe size={10} className="text-slate-400" />
                                            <span className="text-slate-400 text-[10px]">nevatrix.com</span>
                                        </div>
                                    </div>
                                    {/* Mock page content */}
                                    <div className="p-5 space-y-3">
                                        <div className="h-5 w-2/3 rounded-md bg-cyan-500/20" />
                                        <div className="h-3 w-full rounded-md bg-slate-700/50" />
                                        <div className="h-3 w-5/6 rounded-md bg-slate-700/40" />
                                        <div className="h-3 w-4/6 rounded-md bg-slate-700/30" />
                                        <div className="mt-4 grid grid-cols-3 gap-2">
                                            {["#0891B2","#059669","#7C3AED"].map((c,i) => (
                                                <div key={i} className="h-16 rounded-xl" style={{background:c+"18",border:`1px solid ${c}28`}} />
                                            ))}
                                        </div>
                                        <div className="mt-3 h-3 w-full rounded-md bg-slate-700/40" />
                                        <div className="h-3 w-4/5 rounded-md bg-slate-700/30" />
                                        <div className="mt-4 h-8 w-36 rounded-lg bg-cyan-600/40 flex items-center justify-center">
                                            <span className="text-cyan-300 text-[10px] font-bold">Get Free Quote</span>
                                        </div>
                                    </div>
                                </div>
                                {/* SEO badge */}
                                <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[9px] font-bold px-2.5 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                                    <Search size={9} /> SEO Ready
                                </div>
                                {/* Performance badge */}
                                <div className="absolute -bottom-3 -left-3 bg-cyan-600 text-white text-[9px] font-bold px-2.5 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                                    <Zap size={9} /> 100 Speed
                                </div>
                                <div className="absolute -inset-6 rounded-3xl bg-cyan-600/07 blur-2xl -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Trust bar ── */}
                <section className="bg-cyan-50/65 border-b border-cyan-100/80 py-5">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cyan-100">
                            {trust.map(({ icon: Icon, label }, i) => (
                                <div key={i} className="flex items-center gap-3 px-6 py-1 first:pl-0">
                                    <div className="w-9 h-9 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                                        <Icon size={16} className="text-cyan-700" />
                                    </div>
                                    <span className="text-slate-700 text-sm font-semibold leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ STATS ════════════════════ */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 wdp-mesh-light" />
                    <div className="oa absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(8,145,178,.10),transparent 65%)"}} />
                    <div className="ob absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(5,150,105,.09),transparent 65%)"}} />
                    <div className="oc absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(37,99,235,.07),transparent 65%)"}} />

                    <div ref={statsR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${statsR.visible?"on":""} text-center mb-14`}>
                            <p className="text-cyan-700 text-xs font-bold tracking-widest uppercase mb-3">Our Track Record</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Results We've Delivered</h2>
                            <p className="text-slate-500 text-sm max-w-lg mx-auto">Real numbers from 10+ years of building websites for businesses in Warangal and across India.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                            {stats.map((item, i) => (
                                <StatCard key={i} item={item} active={statsR.visible} delay={i * 85} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ SERVICES ════════════════════ */}
                <section className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50/30 to-teal-50/40" />
                    <div className="od absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(8,145,178,.07),transparent 65%)"}} />
                    <div className="ob absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(5,150,105,.07),transparent 65%)"}} />

                    <div ref={svcR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${svcR.visible?"on":""} flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16`}>
                            <div>
                                <p className="text-cyan-700 text-xs font-bold tracking-widest uppercase mb-3">What We Build</p>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                                    Website Development Services<br />
                                    {/*<span className="text-slate-400 font-semibold">in Warangal & Telangana</span>*/}
                                </h2>
                            </div>
                            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">End-to-end web development solutions for small businesses, startups and enterprises across India.</p>
                        </div>

                        <div className={`sg grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${svcR.visible?"on":""}`}>
                            {services.map((svc, i) => (
                                <div key={i} className="lc rounded-2xl p-7 flex flex-col" style={{backgroundColor:svc.accent+"07",borderColor:svc.accent+"22"}}>
                                    <span className="self-start text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5" style={{color:svc.accent,background:svc.accent+"18"}}>{svc.tag}</span>
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0" style={{background:svc.accent+"18"}}>
                                        <svc.icon size={20} style={{color:svc.accent}} />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{svc.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed flex-1 text-justify">{svc.desc}</p>
                                    <div className="ub mt-5" style={{background:`linear-gradient(90deg,${svc.accent},${svc.accent}80)`}} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ TECH STACK ════════════════════ */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-cyan-50/25 to-teal-50/30" />
                    <div className="oa absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(8,145,178,.08),transparent 65%)"}} />

                    <div ref={techR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${techR.visible?"on":""} text-center mb-14`}>
                            <p className="text-cyan-700 text-xs font-bold tracking-widest uppercase mb-3">Technology Stack</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Technologies We Use</h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">We build with modern, battle-tested technologies ensuring speed, security and scalability for your Warangal business.</p>
                        </div>

                        {/* Infinite scroll strip */}
                        <div className="relative overflow-hidden">
                            {/* Fade masks */}
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
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/30 to-indigo-50/40" />
                    <div className="od absolute top-1/2 -translate-y-1/2 -left-24 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(8,145,178,.09),transparent 60%)"}} />
                    <div className="oa absolute bottom-0 right-0 w-72 h-72 rounded-full blur-2xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(5,150,105,.08),transparent 65%)"}} />

                    <div ref={processR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${processR.visible?"on":""} text-center mb-16`}>
                            <p className="text-cyan-700 text-xs font-bold tracking-widest uppercase mb-3">Our Methodology</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Web Development Process</h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">A structured approach that delivers websites on time, on budget and built to perform for businesses growth.</p>
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
                                        <p className="text-slate-500 text-sm leading-relaxed text-justify">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════ WHY NEVATRIX ════════════════════ */}
                <section className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-teal-50/40 via-cyan-50/25 to-sky-50/40" />
                    <div className="oc absolute -top-16 -left-16 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(5,150,105,.09),transparent 65%)"}} />
                    <div className="ob absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(8,145,178,.09),transparent 65%)"}} />

                    <div ref={whyR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${whyR.visible?"on":""} text-center mb-16`}>
                            <p className="text-cyan-700 text-xs font-bold tracking-widest uppercase mb-3">Why Choose Us</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                Why Choose Nevatrix for<br />
                                <span className="text-slate-400 font-semibold">Web Development</span>
                            </h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">We combine design thinking with engineering excellence to deliver websites that drive real business results.</p>
                        </div>

                        <div className={`sg grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${whyR.visible?"on":""}`}>
                            {whyUs.map((item, i) => (
                                <div key={i} className="lc rounded-2xl p-7 flex items-start gap-5 bg-white/70" style={{borderColor:item.accent+"22",backgroundColor:item.accent+"06"}}>
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{background:item.accent+"18"}}>
                                        <item.icon size={20} style={{color:item.accent}} />
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
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/45 via-teal-50/20 to-white" />
                    <div className="ob absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(8,145,178,.08),transparent 65%)"}} />

                    <div ref={faqR.ref} className="relative z-10 max-w-3xl mx-auto px-6">
                        <div className={`sr ${faqR.visible?"on":""} text-center mb-14`}>
                            <p className="text-cyan-700 text-xs font-bold tracking-widest uppercase mb-3">FAQ</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Frequently Asked Questions</h2>
                            <p className="text-slate-400 font-semibold text-base">Web Development in Warangal</p>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, i) => {
                                const isOpen = openIdx === i;
                                return (
                                    <div key={i} className={`border rounded-xl overflow-hidden bg-white transition-all duration-200 ${isOpen?"border-cyan-200 shadow-sm shadow-cyan-50":"border-slate-200 hover:border-slate-300"}`}>
                                        <button
                                            onClick={() => setOpenIdx(isOpen ? null : i)}
                                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
                                            style={{backgroundColor: isOpen ? "#ECFEFF" : "white"}}
                                            aria-expanded={isOpen}
                                        >
                                            <div className="flex items-center gap-4 min-w-0">
                                                <span className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors duration-200 ${isOpen?"bg-cyan-600 text-white":"bg-slate-100 text-slate-500"}`}>{i+1}</span>
                                                <span className="font-semibold text-slate-800 text-sm">{faq.q}</span>
                                            </div>
                                            <ChevronDown size={18} className={`flex-shrink-0 transition-all duration-300 ${isOpen?"rotate-180 text-cyan-600":"text-slate-400"}`} />
                                        </button>
                                        <div className="faq-body" style={{gridTemplateRows: isOpen?"1fr":"0fr", opacity: isOpen?1:0, transition:"grid-template-rows .3s ease, opacity .3s ease"}}>
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
                <section className="relative py-24 overflow-hidden wdp-hero-bg">
                    <div className="absolute inset-0 wdp-grid opacity-50" />
                    <div className="oa absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full blur-3xl" style={{background:"radial-gradient(circle,rgba(8,145,178,.22),transparent 60%)"}} />
                    <div className="ob absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full blur-3xl" style={{background:"radial-gradient(circle,rgba(5,150,105,.18),transparent 60%)"}} />

                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            Free Consultation — No Obligation
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                            Ready to Build Your Website<br />in Warangal?
                        </h2>
                        <p className="text-slate-400 text-base mb-10 max-w-xl mx-auto leading-relaxed">
                            Get a free consultation from Nevatrix — the leading web development
                            company in Warangal, Telangana. Fast, SEO-optimised and conversion-focused.
                        </p>
                        <a href="mailto:contact@nevatrix.com" className="cta-btn inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-cyan-900/40">
                            <CheckCircle size={18} /> Get Free Consultation <ArrowRight size={16} />
                        </a>
                    </div>
                </section>

            </div>
        </>
    );
}
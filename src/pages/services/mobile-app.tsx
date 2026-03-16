import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    Smartphone, Layers3, Rocket, ShieldCheck, Workflow, Code2,
    CheckCircle, Zap, Store, RefreshCw, HeadphonesIcon, ChevronDown,
    ArrowRight, Award, Users, Brain, Cpu, MessageSquare, ScanLine,
    TrendingUp, Globe, Star, BarChart3, Clock, Sparkles,
} from "lucide-react";
import SEO from "@/components/SEO";

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const stats = [
    { val:50,  suffix:"+", label:"Apps Delivered",      sub:"Android & iOS",        icon:Smartphone, accent:"#2563EB", bg:"from-blue-50 to-blue-100/60"     },
    { val:10,  suffix:"+", label:"Years Experience",     sub:"Since 2012",           icon:Award,      accent:"#0891B2", bg:"from-cyan-50 to-cyan-100/60"     },
    { val:40,  suffix:"%", label:"Faster with AI",       sub:"AI-assisted dev",      icon:Cpu,        accent:"#7C3AED", bg:"from-violet-50 to-violet-100/60" },
    { val:98,  suffix:"%", label:"Client Satisfaction",  sub:"5-star reviews",       icon:Star,       accent:"#059669", bg:"from-emerald-50 to-emerald-100/60"},
    { val:3,   suffix:"+", label:"Countries Served",     sub:"India · USA · Canada", icon:Globe,      accent:"#D97706", bg:"from-amber-50 to-amber-100/60"   },
    { val:100, suffix:"%", label:"On-Time Delivery",     sub:"Milestone-based",      icon:Clock,      accent:"#DC2626", bg:"from-rose-50 to-rose-100/60"     },
];

const appTypes = [
    { title:"Startup MVP Apps",      tag:"MVP & Startups", accent:"#2563EB", icon:Layers3,  desc:"We help startups validate their idea quickly with a production-ready MVP app built for Android and iOS. Clean architecture ensures the MVP can scale into a full product without rebuilding from scratch." },
    { title:"Business Applications", tag:"Enterprise",     accent:"#0891B2", icon:Workflow, desc:"Custom internal apps for employee management, field operations, workflow automation and real-time dashboards — built to integrate seamlessly with your existing systems and data infrastructure." },
    { title:"Ecommerce Apps",        tag:"Commerce",       accent:"#059669", icon:Store,    desc:"Feature-rich mobile shopping apps with product catalogs, cart, Razorpay/Stripe payments, order tracking, push notifications and admin dashboard — built natively for Android and iOS." },
    { title:"On-Demand Apps",        tag:"On-Demand",      accent:"#7C3AED", icon:Rocket,   desc:"Real-time service apps for booking, delivery, ride-sharing and marketplace platforms — with GPS tracking, live updates, driver/provider panels and seamless customer experiences." },
];

const aiFeatures = [
    { icon:Brain,         title:"AI-Powered Personalisation",  accent:"#7C3AED", desc:"Machine learning models that personalise in-app content, recommendations and notifications based on each user's behaviour — boosting engagement and retention." },
    { icon:MessageSquare, title:"Conversational AI & Chatbots", accent:"#2563EB", desc:"Smart in-app assistants powered by LLMs that handle customer support, guided onboarding and query resolution — 24/7 without human intervention." },
    { icon:ScanLine,      title:"Computer Vision & OCR",        accent:"#0891B2", desc:"Document scanning, face recognition and barcode reading — we integrate on-device and cloud vision APIs to add intelligent image understanding to your app." },
    { icon:TrendingUp,    title:"Predictive Analytics",         accent:"#059669", desc:"AI-driven dashboards that surface business insights, forecast demand and detect anomalies in real time — smarter decisions from within the app." },
    { icon:Cpu,           title:"AI-Accelerated Development",   accent:"#D97706", desc:"We use GitHub Copilot and AI-assisted testing to reduce development cycles by up to 40% — delivering higher quality apps faster and at lower cost." },
    { icon:Zap,           title:"Smart Notifications & NLP",    accent:"#DC2626", desc:"NLP-based push notification systems that pick the optimal message, timing and channel per user — improving open rates and reducing notification fatigue." },
];

const techStack = [
    { title:"React Native",        desc:"Meta's cross-platform framework for building real native Android and iOS apps — used by Facebook, Instagram and Shopify.",             accent:"#2563EB", icon:Code2         },
    { title:"Flutter",             desc:"Google's UI toolkit for natively compiled Android and iOS apps from a single codebase — ideal for pixel-perfect custom UI.",           accent:"#0891B2", icon:Layers3       },
    { title:"Node.js Backend",     desc:"Scalable REST APIs and real-time backends with authentication, push notifications, file storage and payment integrations.",             accent:"#059669", icon:RefreshCw     },
    { title:"Push Notifications",  desc:"Firebase Cloud Messaging (FCM) for real-time push alerts on Android and iOS — order updates, reminders, marketing messages.",          accent:"#D97706", icon:Zap           },
    { title:"App Store Publishing",desc:"Complete submission to Google Play and Apple App Store — listing, screenshots, metadata and guideline compliance handled end-to-end.", accent:"#7C3AED", icon:Store         },
    { title:"Ongoing Support",     desc:"Post-launch bug fixes, OS update compatibility, feature additions and performance monitoring to keep your app healthy.",               accent:"#DC2626", icon:HeadphonesIcon },
];

const whyUs = [
    { icon:Rocket,      title:"Fast & Smooth Performance", accent:"#2563EB", desc:"We optimise every layer — rendering, API calls, image loading and navigation — so your app feels instant on all Android and iOS devices." },
    { icon:Layers3,     title:"Scalable Architecture",     accent:"#0891B2", desc:"Modular, maintainable code and scalable backend so your app handles 100 or 1,00,000 users without a costly rebuild." },
    { icon:ShieldCheck, title:"Secure Authentication",     accent:"#059669", desc:"JWT tokens, biometric login, OTP verification, encrypted storage and secure API communication — protecting your users and their data." },
    { icon:Smartphone,  title:"App Store Deployment",      accent:"#7C3AED", desc:"Complete Google Play and Apple App Store submission — listing optimisation, screenshots, review handling and post-launch updates." },
];

const steps = [
    { num:"01", icon:Smartphone, title:"Discovery & Planning",   accent:"#2563EB", desc:"We deep-dive into your concept — defining target users, core features, platform requirements and technical architecture before any design begins." },
    { num:"02", icon:Layers3,    title:"UI/UX Design",           accent:"#0891B2", desc:"High-fidelity app screens, user flows and interactive prototypes to validate the complete user experience before development starts." },
    { num:"03", icon:Code2,      title:"AI-Powered Development", accent:"#059669", desc:"We build in React Native or Flutter with a Node.js backend — accelerated by AI coding tools, automated testing and CI/CD pipelines." },
    { num:"04", icon:Rocket,     title:"Launch & Scale",         accent:"#7C3AED", desc:"We submit to Google Play and App Store, manage review and provide ongoing support — bug fixes, OS updates and new feature development." },
];

const trust = [
    { icon:Award,      label:"10+ Years Experience"         },
    { icon:Globe,      label:"India · USA · Canada"         },
    { icon:Users,      label:"50+ Apps Delivered"           },
    { icon:Star,       label:"App Store & Play Store Expert"},
];

const faqs = [
    { q:"Which is the best mobile app development company in India?",      a:"Nevatrix is a trusted mobile app development company in India, building Android and iOS applications for startups and businesses using React Native, Flutter and AI-powered tools. We have delivered apps across ecommerce, on-demand, healthcare and business management for clients in India, USA and Canada." },
    { q:"How much does it cost to build a mobile app in India?",           a:"App costs vary by complexity and features. A simple MVP starts from ₹1,50,000–₹3,00,000. A full-featured app with AI can range from ₹3,00,000 to ₹12,00,000+. Contact Nevatrix for a free estimate." },
    { q:"Does Nevatrix build Android and iOS apps?",                       a:"Yes. We build for both platforms using React Native and Flutter — cross-platform frameworks that deploy to both Google Play Store and Apple App Store, reducing time and cost significantly." },
    { q:"Does Nevatrix use AI in mobile app development?",                 a:"Yes — on two fronts: (1) AI features inside your app — chatbots, personalisation, computer vision, NLP and predictive analytics; and (2) AI dev tools like GitHub Copilot to deliver up to 40% faster." },
    { q:"How long does it take to develop a mobile app?",                  a:"A simple MVP typically takes 6–10 weeks. A full-featured app with backend, admin panel and AI integrations usually takes 3–5 months, depending on screens, features and revision cycles." },
    { q:"Will Nevatrix help publish my app to Google Play and App Store?", a:"Yes. We handle the complete submission — developer accounts, store listing assets, Apple and Google guideline compliance, and publishing to both Google Play Store and Apple App Store." },
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
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setVisible(true);
                return;
            }
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
   STAT CARD COMPONENT
══════════════════════════════════════════════ */
function StatCard({ item, active, delay }: { item: typeof stats[0]; active: boolean; delay: number }) {
    const n = useCountUp(item.val, 1400, active);
    return (
        <div
            className={`stat-card group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 ${active ? "on" : ""}`}
            style={{ transitionDelay: `${delay}ms` } as React.CSSProperties}
        >
            {/* Top accent strip */}
            <div className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl" style={{ background: `linear-gradient(90deg,${item.accent},${item.accent}70)` }} />
            {/* Soft gradient wash */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
            {/* Decorative circle */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-[0.08] group-hover:opacity-[0.16] transition-opacity duration-500" style={{ background: item.accent }} />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500" style={{ background: item.accent }} />

            <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: item.accent + "18" }}>
                        <item.icon size={19} style={{ color: item.accent }} />
                    </div>
                    <BarChart3 size={13} className="text-slate-200 mt-1" />
                </div>
                <div className="text-[2.4rem] font-black leading-none mb-1 tabular-nums" style={{ color: item.accent }}>
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
export default function MobileAppPage() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const statsR = useReveal();
    const appsR  = useReveal();
    const aiR    = useReveal();
    const techR  = useReveal();
    const whyR   = useReveal();
    const stepsR = useReveal();

    return (
        <>
            <SEO page="mobile-app" />
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Mulish:wght@300;400;500;600&display=swap');

                .map-pg { font-family: 'Mulish', sans-serif; color: #0F172A; }
                .map-pg h1,.map-pg h2,.map-pg h3,.map-pg h4 { font-family: 'Sora', sans-serif; }

                /* ─ Moving grid ─ */
                @keyframes gridScroll { from{background-position:0 0;} to{background-position:48px 48px;} }
                .moving-grid {
                    background-image:
                            linear-gradient(rgba(37,99,235,.055) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(37,99,235,.055) 1px, transparent 1px);
                    background-size: 48px 48px;
                    animation: gridScroll 10s linear infinite;
                }

                /* ─ Mesh backgrounds ─ */
                .mesh-dark {
                    background:
                            radial-gradient(ellipse 70% 55% at 15% 50%, rgba(37,99,235,.20) 0%, transparent 60%),
                            radial-gradient(ellipse 60% 60% at 85% 50%, rgba(124,58,237,.16) 0%, transparent 55%),
                            #08112A;
                }
                .mesh-light {
                    background:
                            radial-gradient(ellipse 70% 50% at 20% 40%, rgba(37,99,235,.06) 0%, transparent 60%),
                            radial-gradient(ellipse 55% 45% at 80% 65%, rgba(124,58,237,.05) 0%, transparent 55%),
                            radial-gradient(ellipse 50% 50% at 50% 5%,  rgba(8,145,178,.045) 0%, transparent 60%),
                            #F8FAFC;
                }

                /* ─ Floating orbs (background animations) ─ */
                @keyframes orbA { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(22px,-18px) scale(1.05);} 66%{transform:translate(-14px,14px) scale(.97);} }
                @keyframes orbB { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(-18px,20px) scale(1.06);} 66%{transform:translate(16px,-16px) scale(.96);} }
                @keyframes orbC { 0%,100%{transform:translate(0,0) scale(1);} 50%{transform:translate(18px,20px) scale(1.07);} }
                @keyframes orbD { 0%,100%{transform:translate(0,0);} 50%{transform:translate(-14px,-14px);} }
                .oa{animation:orbA 10s ease-in-out infinite;}
                .ob{animation:orbB 13s ease-in-out infinite;}
                .oc{animation:orbC 15s ease-in-out infinite;}
                .od{animation:orbD  8s ease-in-out infinite;}

                /* ─ Hero entrance ─ */
                @keyframes fadeUp { from{opacity:0;transform:translateY(26px);} to{opacity:1;transform:translateY(0);} }
                .fu1{animation:fadeUp .6s .10s ease both;}
                .fu2{animation:fadeUp .6s .25s ease both;}
                .fu3{animation:fadeUp .6s .40s ease both;}
                .fu4{animation:fadeUp .6s .55s ease both;}
                .fu5{animation:fadeUp .6s .70s ease both;}
                @keyframes lineSlide { from{transform:scaleX(0);} to{transform:scaleX(1);} }
                .ls{animation:lineSlide .9s .72s ease both; transform-origin:left;}

                /* ─ Phone float ─ */
                @keyframes phoneFloat { 0%,100%{transform:translateY(0) rotate(-2deg);} 50%{transform:translateY(-18px) rotate(0deg);} }
                .pf{animation:phoneFloat 5.5s ease-in-out infinite;}

                /* ─ Section reveal ─ */
                @keyframes sectionReveal { from{opacity:0;transform:translateY(32px);} to{opacity:1;transform:translateY(0);} }
                .sr{opacity:0;}
                .sr.on{animation:sectionReveal .65s ease both;}

                /* ─ Stagger grid children ─ */
                .sg > * { opacity:0; transform:translateY(22px); transition:opacity .48s ease, transform .48s ease; }
                .sg.on > *:nth-child(1){opacity:1;transform:none;transition-delay:.04s;}
                .sg.on > *:nth-child(2){opacity:1;transform:none;transition-delay:.13s;}
                .sg.on > *:nth-child(3){opacity:1;transform:none;transition-delay:.22s;}
                .sg.on > *:nth-child(4){opacity:1;transform:none;transition-delay:.31s;}
                .sg.on > *:nth-child(5){opacity:1;transform:none;transition-delay:.40s;}
                .sg.on > *:nth-child(6){opacity:1;transform:none;transition-delay:.49s;}

                /* ─ Stat card entrance ─ */
                .stat-card {
                    opacity:0; transform:translateY(26px) scale(.97);
                    transition: opacity .5s ease, transform .5s ease, box-shadow .3s ease;
                }
                .stat-card.on { opacity:1; transform:translateY(0) scale(1); }
                .stat-card:hover { transform:translateY(-8px) scale(1.015) !important; box-shadow:0 22px 52px -10px rgba(15,23,42,.14) !important; }

                /* ─ General lift card ─ */
                .lc {
                    transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
                    border:1px solid #E2E8F0;
                }
                .lc:hover { transform:translateY(-7px); box-shadow:0 22px 50px -12px rgba(15,23,42,.12); }

                /* ─ Underbar ─ */
                .ub { height:3px; width:0; border-radius:2px; transition:width .4s ease; }
                .lc:hover .ub { width:100%; }

                /* ─ AI shimmer ─ */
                @keyframes shimmer { 0%{background-position:-200% center;} 100%{background-position:200% center;} }
                .ai-s {
                    background: linear-gradient(135deg,rgba(124,58,237,.04) 0%,rgba(37,99,235,.06) 50%,rgba(124,58,237,.04) 100%);
                    background-size:200% auto;
                    animation:shimmer 6s linear infinite;
                }

                /* ─ Pulse ring ─ */
                @keyframes pulseR { 0%{box-shadow:0 0 0 0 rgba(124,58,237,.4);} 70%{box-shadow:0 0 0 10px rgba(124,58,237,0);} 100%{box-shadow:0 0 0 0 rgba(124,58,237,0);} }
                .pr { animation:pulseR 2.4s ease-out infinite; }

                /* ─ Step connector ─ */
                .sc { position:absolute;top:34px;left:100%;width:100%;height:1px;background:linear-gradient(90deg,#CBD5E1,transparent);z-index:0; }
                @media(max-width:1023px){ .sc{display:none;} }

                /* ─ Gradient step number ─ */
                .sn {
                    background: linear-gradient(135deg, var(--c) 0%, color-mix(in srgb, var(--c) 60%, white) 100%);
                    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
                }

                /* ─ CTA button ─ */
                .cta-btn { transition:transform .2s ease, box-shadow .2s ease; }
                .cta-btn:hover { transform:translateY(-3px); box-shadow:0 12px 28px rgba(37,99,235,.38); }
            `}</style>

            <div className="map-pg">

                {/* ══════════════ HERO ══════════════ */}
                <section className="relative min-h-[600px] flex items-center overflow-hidden mesh-dark">
                    <div className="absolute inset-0">
                        <Image src="/mobile-app.jpg"
                               alt="Mobile app development company India — Android and iOS apps by Nevatrix"
                               fill priority sizes="100vw" className="object-cover opacity-10" />
                    </div>
                    <div className="absolute inset-0 moving-grid opacity-55" />

                    {/* Animated orbs */}
                    <div className="oa absolute -top-16 -left-16 w-[420px] h-[420px] rounded-full blur-3xl" style={{background:"radial-gradient(circle,rgba(37,99,235,.22),transparent 65%)"}} />
                    <div className="ob absolute -bottom-20 -right-20 w-[460px] h-[460px] rounded-full blur-3xl" style={{background:"radial-gradient(circle,rgba(124,58,237,.18),transparent 65%)"}} />
                    <div className="oc absolute top-1/3 right-[28%] w-[200px] h-[200px] rounded-full blur-2xl" style={{background:"radial-gradient(circle,rgba(8,145,178,.14),transparent 65%)"}} />

                    <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="fu1 inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-bold tracking-widest uppercase">
                                <Sparkles size={11} />
                                React Native · Flutter · AI-Powered
                            </div>
                            <h1 className="fu2 text-5xl md:text-[3.6rem] font-extrabold text-white leading-[1.08] mb-5 tracking-tight">
                                Mobile App<br />
                                <span className="text-blue-400">Development</span><br />
                            </h1>
                            <div className="ls h-[3px] w-56 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 mb-7" />
                            <p className="fu3 text-slate-300 text-lg leading-relaxed max-w-xl mb-10">
                                Nevatrix designs and develops scalable Android and iOS mobile applications for startups and businesses — using React Native, Flutter and AI-powered tools for faster, smarter delivery.
                            </p>
                            <div className="fu4 flex flex-wrap gap-4">
                                <a href="mailto:contact@nevatrix.com" className="cta-btn inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-900/40">
                                    Get Free App Estimate <ArrowRight size={15} />
                                </a>
                                <a href="#process" className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition">
                                    See Our Process
                                </a>
                            </div>
                        </div>

                        {/* Floating phone */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="pf relative">
                                <div className="w-[236px] h-[456px] rounded-[3.4rem] bg-gradient-to-b from-slate-800 to-slate-950 border-[5px] border-slate-700 shadow-2xl shadow-blue-900/30 overflow-hidden flex flex-col items-center pt-8">
                                    <div className="w-20 h-5 rounded-full bg-slate-950 mb-5" />
                                    <div className="w-36 h-4 rounded-full bg-blue-500/25 mb-2" />
                                    <div className="w-24 h-3 rounded-full bg-slate-700 mb-6" />
                                    <div className="grid grid-cols-2 gap-2 px-5 w-full mb-5">
                                        {(["#2563EB","#7C3AED","#059669","#D97706"] as const).map((c,i) => (
                                            <div key={i} className="h-[58px] rounded-2xl flex items-center justify-center" style={{background:c+"18",border:`1px solid ${c}28`}}>
                                                <div className="w-5 h-5 rounded-full" style={{background:c+"55"}} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-36 h-3 rounded-full bg-slate-700 mb-2" />
                                    <div className="w-28 h-3 rounded-full bg-slate-700/50 mb-2" />
                                    <div className="w-32 h-3 rounded-full bg-blue-500/20 mb-5" />
                                    <div className="w-28 h-9 rounded-xl bg-blue-600/35 flex items-center justify-center gap-1">
                                        <Brain size={11} className="text-blue-300" />
                                        <span className="text-blue-300 text-[10px] font-bold">AI Powered</span>
                                    </div>
                                    <div className="pr absolute bottom-9 right-3 bg-violet-600 text-white text-[9px] font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1">
                                        <Sparkles size={8} /> AI
                                    </div>
                                </div>
                                <div className="absolute -inset-8 rounded-[4.5rem] bg-blue-600/07 blur-2xl -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════ TRUST BAR ══════════════ */}
                <section className="bg-blue-50/65 border-b border-blue-100/80 py-5">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-blue-100">
                            {trust.map(({ icon: Icon, label }, i) => (
                                <div key={i} className="flex items-center gap-3 px-6 py-1 first:pl-0">
                                    <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <Icon size={16} className="text-blue-600" />
                                    </div>
                                    <span className="text-slate-700 text-sm font-semibold leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════ STATS ══════════════ */}
                <section className="relative py-24 overflow-hidden">
                    {/* Animated mesh background */}
                    <div className="absolute inset-0 mesh-light" />
                    <div className="oa absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(37,99,235,.10),transparent 65%)"}} />
                    <div className="ob absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(124,58,237,.09),transparent 65%)"}} />
                    <div className="oc absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(8,145,178,.07),transparent 65%)"}} />

                    <div ref={statsR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${statsR.visible?"on":""} text-center mb-14`}>
                            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Our Track Record</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Numbers That Speak</h2>
                            <p className="text-slate-500 text-sm max-w-lg mx-auto">Real results from 10+ years of building production-grade mobile apps for clients worldwide.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                            {stats.map((item, i) => (
                                <StatCard key={i} item={item} active={statsR.visible} delay={i * 85} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════ APPS WE BUILD ══════════════ */}
                <section className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/40" />
                    <div className="od absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(99,102,241,.07),transparent 65%)"}} />
                    <div className="ob absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(37,99,235,.07),transparent 65%)"}} />

                    <div ref={appsR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${appsR.visible?"on":""} flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16`}>
                            <div>
                                <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">What We Build</p>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                                    Mobile Apps for Every<br />
                                    <span className="text-slate-400 font-semibold">Industry & Scale</span>
                                </h2>
                            </div>
                            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">From startup MVPs to enterprise platforms — cross-platform Android and iOS apps tailored to your goals.</p>
                        </div>

                        <div className={`sg grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${appsR.visible?"on":""}`}>
                            {appTypes.map((app, i) => (
                                <div key={i} className="lc rounded-2xl p-7 flex flex-col" style={{backgroundColor:app.accent+"07",borderColor:app.accent+"22"}}>
                                    <span className="self-start text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5" style={{color:app.accent,background:app.accent+"18"}}>{app.tag}</span>
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0" style={{background:app.accent+"18"}}>
                                        <app.icon size={20} style={{color:app.accent}} />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{app.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed flex-1 text-justify">{app.desc}</p>
                                    <div className="ub mt-5" style={{background:`linear-gradient(90deg,${app.accent},${app.accent}80)`}} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════ AI SECTION ══════════════ */}
                <section className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-50/65 via-indigo-50/50 to-blue-50/50" />
                    <div className="oa absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(124,58,237,.14),transparent 60%)"}} />
                    <div className="ob absolute -bottom-20 -left-16 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(37,99,235,.12),transparent 60%)"}} />
                    <div className="oc absolute top-1/2 left-[35%] w-60 h-60 rounded-full blur-2xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(8,145,178,.10),transparent 65%)"}} />

                    <div ref={aiR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${aiR.visible?"on":""} text-center mb-16`}>
                            <div className="pr inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-violet-600/10 border border-violet-300/40 text-violet-700 text-xs font-bold tracking-widest uppercase">
                                <Brain size={13} /> AI-Powered Development
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                We Build Smarter Apps with<br />
                                <span className="text-violet-600">Artificial Intelligence</span>
                            </h2>
                            <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                                Nevatrix integrates AI capabilities inside your app — from personalisation and chatbots to computer vision — while using AI dev tools to deliver up to 40% faster.
                            </p>
                        </div>

                        <div className={`sg grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${aiR.visible?"on":""}`}>
                            {aiFeatures.map((f, i) => (
                                <div key={i} className="lc ai-s rounded-2xl p-7 flex flex-col bg-white/55" style={{borderColor:f.accent+"28"}}>
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0" style={{background:f.accent+"15"}}>
                                        <f.icon size={22} style={{color:f.accent}} />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 mb-2">{f.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed flex-1 text-justify">{f.desc}</p>
                                    <div className="ub mt-5" style={{background:f.accent}} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════ TECH STACK ══════════════ */}
                <section className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/35 to-teal-50/45" />
                    <div className="od absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(8,145,178,.10),transparent 65%)"}} />
                    <div className="oa absolute bottom-0 right-0 w-56 h-56 rounded-full blur-2xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(5,150,105,.09),transparent 65%)"}} />

                    <div ref={techR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${techR.visible?"on":""} text-center mb-16`}>
                            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Technology</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Technologies We Use</h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">React Native and Flutter for cross-platform Android and iOS — backed by Node.js APIs, Firebase and cloud infrastructure.</p>
                        </div>

                        <div className={`sg grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${techR.visible?"on":""}`}>
                            {techStack.map((t, i) => (
                                <div key={i} className="lc rounded-2xl p-6 flex items-start gap-5 bg-white/65" style={{borderColor:t.accent+"22",backgroundColor:t.accent+"06"}}>
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{background:t.accent+"18"}}>
                                        <t.icon size={20} style={{color:t.accent}} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1.5 text-sm">{t.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed text-justify">{t.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════ WHY NEVATRIX ══════════════ */}
                <section className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/40 via-sky-50/30 to-indigo-50/50" />
                    <div className="oc absolute -top-16 -left-16 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(5,150,105,.09),transparent 65%)"}} />
                    <div className="ob absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(99,102,241,.09),transparent 65%)"}} />

                    <div ref={whyR.ref} className="relative z-10 max-w-6xl mx-auto px-6">
                        <div className={`sr ${whyR.visible?"on":""} text-center mb-16`}>
                            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Why Nevatrix</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                Why Choose Nevatrix for<br />
                                <span className="text-slate-400 font-semibold">Mobile App Development?</span>
                            </h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">We combine technical depth, product thinking and AI-assisted workflows to deliver apps that users love.</p>
                        </div>

                        <div className={`sg grid md:grid-cols-2 gap-6 ${whyR.visible?"on":""}`}>
                            {whyUs.map((item, i) => (
                                <div key={i} className="lc rounded-2xl p-8" style={{backgroundColor:item.accent+"07",borderColor:item.accent+"22"}}>
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:item.accent+"18"}}>
                                            <item.icon size={22} style={{color:item.accent}} />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed text-justify">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════ PROCESS ══════════════ */}
                <section id="process" className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-blue-50/30 to-indigo-50/60" />
                    <div className="od absolute top-1/2 -translate-y-1/2 -left-24 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(37,99,235,.10),transparent 60%)"}} />
                    <div className="oa absolute bottom-0 right-0 w-72 h-72 rounded-full blur-2xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(124,58,237,.08),transparent 65%)"}} />

                    <div ref={stepsR.ref} className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className={`sr ${stepsR.visible?"on":""} text-center mb-16`}>
                            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Our Methodology</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Mobile App Development Process</h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">A clear, structured workflow — from concept to a live, published mobile application on Google Play and App Store.</p>
                        </div>

                        <div className={`sg grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative ${stepsR.visible?"on":""}`}>
                            {steps.map((step, i) => (
                                <div key={i} className="relative">
                                    {i < steps.length - 1 && <span className="sc" />}
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

                {/* ══════════════ FAQ ══════════════ */}
                <section className="relative py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 via-purple-50/25 to-white" />
                    <div className="ob absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"radial-gradient(circle,rgba(124,58,237,.09),transparent 65%)"}} />

                    <div className="relative z-10 max-w-3xl mx-auto px-6">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">FAQ</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Frequently Asked Questions</h2>
                            <p className="text-slate-400 font-semibold text-base">Mobile App Development in India</p>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, i) => {
                                const isOpen = openIdx === i;
                                return (
                                    <div key={i} className={`border rounded-xl overflow-hidden bg-white transition-all duration-200 ${isOpen?"border-blue-200 shadow-sm shadow-blue-50":"border-slate-200 hover:border-slate-300"}`}>
                                        <button
                                            onClick={() => setOpenIdx(isOpen ? null : i)}
                                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
                                            style={{backgroundColor: isOpen ? "#EEF2FF" : "white"}}
                                            aria-expanded={isOpen}
                                        >
                                            <div className="flex items-center gap-4 min-w-0">
                                                <span className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors duration-200 ${isOpen?"bg-blue-600 text-white":"bg-slate-100 text-slate-500"}`}>{i+1}</span>
                                                <span className="font-semibold text-slate-800 text-sm">{faq.q}</span>
                                            </div>
                                            <ChevronDown size={18} className={`flex-shrink-0 transition-all duration-300 ${isOpen?"rotate-180 text-blue-600":"text-slate-400"}`} />
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

                {/* ══════════════ CTA ══════════════ */}
                <section className="relative py-24 overflow-hidden mesh-dark">
                    <div className="absolute inset-0 moving-grid opacity-50" />
                    <div className="oa absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full blur-3xl" style={{background:"radial-gradient(circle,rgba(37,99,235,.20),transparent 60%)"}} />
                    <div className="ob absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full blur-3xl" style={{background:"radial-gradient(circle,rgba(124,58,237,.18),transparent 60%)"}} />

                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            Free Consultation — No Obligation
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">Have a Mobile App Idea?</h2>
                        <p className="text-slate-400 text-base mb-10 max-w-xl mx-auto leading-relaxed">
                            Let Nevatrix turn your idea into a live Android and iOS app — on time, on budget and powered by AI for smarter, faster delivery.
                        </p>
                        <a href="mailto:contact@nevatrix.com" className="cta-btn inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-blue-900/50">
                            <CheckCircle size={18} /> Get Free Consultation <ArrowRight size={16} />
                        </a>
                    </div>
                </section>

            </div>
        </>
    );
}
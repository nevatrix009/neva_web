import { useState } from "react";
import Image from "next/image";
import {
    Search,
    BarChart3,
    Target,
    Megaphone,
    LineChart,
    Users,
    CheckCircle,
    Globe,
    PhoneCall,
    TrendingUp,
    IndianRupee,
    ChevronDown,
    ArrowRight,
    Award,
    Clock,
    ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SEO from "@/components/SEO";

/* ─────────────────────────────────────────────
   SERVICES DATA
───────────────────────────────────────────── */
const services: {
    title: string;
    icon: LucideIcon;
    accent: string;
    tag: string;
    desc: string;
}[] = [
    {
        title: "Search Engine Optimisation (SEO)",
        icon: Search,
        accent: "#2563EB",
        tag: "Organic Growth",
        desc: "We optimize your website with keyword research, on-page SEO, technical fixes and authoritative link building to rank on the first page of Google for high-intent searches in Warangal and across Telangana.",
    },
    {
        title: "Google Ads (PPC Advertising)",
        icon: Target,
        accent: "#0891B2",
        tag: "Paid Performance",
        desc: "We create and manage precision-targeted Google Ads campaigns that put your business in front of ready-to-buy customers — driving quality leads while maximizing your return on ad spend.",
    },
    {
        title: "Social Media Marketing",
        icon: Users,
        accent: "#7C3AED",
        tag: "Brand Presence",
        desc: "We manage your Facebook, Instagram and LinkedIn presence with data-driven content, paid campaigns and community engagement to grow your brand audience and generate consistent enquiries.",
    },
    {
        title: "Content Marketing",
        icon: Megaphone,
        accent: "#059669",
        tag: "Authority Building",
        desc: "We produce SEO-optimised blog posts, service pages and strategic content that attracts your target audience in Warangal, builds domain authority and converts readers into paying customers.",
    },
    {
        title: "Analytics & Reporting",
        icon: BarChart3,
        accent: "#D97706",
        tag: "Data Intelligence",
        desc: "We configure Google Analytics 4, Search Console and live campaign dashboards so you always know which channels drive traffic, leads and revenue — with transparent monthly performance reports.",
    },
    {
        title: "Lead Generation Campaigns",
        icon: LineChart,
        accent: "#DC2626",
        tag: "Revenue Focus",
        desc: "We engineer end-to-end lead generation funnels — combining SEO, paid ads and high-converting landing pages — to deliver a reliable pipeline of qualified prospects for your Warangal business.",
    },
];

/* ─────────────────────────────────────────────
   RESULTS DATA
───────────────────────────────────────────── */
const results = [
    {
        icon: Globe,
        title: "More Website Traffic",
        metric: "3× avg. organic growth",
        desc: "Targeted visitors actively searching for your products or services in Warangal, Hanamkonda and surrounding areas.",
        color: "#2563EB",
    },
    {
        icon: PhoneCall,
        title: "More Leads & Enquiries",
        metric: "60%+ lead conversion uplift",
        desc: "Optimised funnels and landing pages that turn website visitors into real customer enquiries and sales conversations.",
        color: "#0891B2",
    },
    {
        icon: TrendingUp,
        title: "Higher Google Rankings",
        metric: "Page 1 in 90 days",
        desc: "First-page Google visibility for the keywords your customers search — locally in Warangal and nationally across India.",
        color: "#059669",
    },
    {
        icon: IndianRupee,
        title: "Increased Revenue",
        metric: "Measurable ROI every month",
        desc: "Every campaign is aligned to your revenue goals — converting traffic and leads into consistent, predictable business growth.",
        color: "#7C3AED",
    },
];

/* ─────────────────────────────────────────────
   PROCESS STEPS
───────────────────────────────────────────── */
const steps = [
    {
        num: "01",
        icon: Search,
        title: "Business & Market Audit",
        desc: "We analyse your current online presence, benchmark against Warangal competitors and map the highest-impact growth opportunities.",
        color: "#2563EB",
    },
    {
        num: "02",
        icon: Target,
        title: "Custom Strategy Design",
        desc: "We build a bespoke SEO, Google Ads and content roadmap aligned to your revenue targets and the keywords your customers are searching.",
        color: "#0891B2",
    },
    {
        num: "03",
        icon: Megaphone,
        title: "Precision Execution",
        desc: "We launch and manage every campaign element — SEO, paid ads, social — with each channel working in concert to maximise lead volume.",
        color: "#059669",
    },
    {
        num: "04",
        icon: LineChart,
        title: "Optimise & Scale",
        desc: "We track performance weekly, deliver clear monthly reports and continuously refine campaigns to compound your ROI over time.",
        color: "#7C3AED",
    },
];

/* ─────────────────────────────────────────────
   TRUST SIGNALS
───────────────────────────────────────────── */
const trust = [
    { icon: Award, label: "12+ Years in the Market" },
    { icon: ShieldCheck, label: "24*7 Support Partner" },
    { icon: Users, label: "150+ Businesses Grown" },
    { icon: Clock, label: "Transparent Monthly Reporting" },
];

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs = [
    {
        q: "Which is the best digital marketing agency in Warangal?",
        a: "Nevatrix is a leading digital marketing agency in Warangal, Telangana offering SEO, Google Ads, social media marketing and lead generation services. We have helped businesses across Warangal, Hanamkonda and Khammam grow their online presence and revenue since 2012.",
    },
    {
        q: "How much do SEO services cost in Warangal?",
        a: "SEO service costs in Warangal vary based on competition, number of keywords and scope. Basic local SEO packages start from ₹5,000/month while comprehensive SEO campaigns range from ₹15,000 to ₹50,000/month. Contact Nevatrix for a free SEO audit and custom quote.",
    },
    {
        q: "How long does SEO take to show results?",
        a: "Most businesses see meaningful improvements in Google rankings and organic traffic within 3–6 months of consistent SEO work. Local SEO results for Warangal-based businesses can appear faster — often within 4–8 weeks for Google Business Profile rankings.",
    },
    {
        q: "Does Nevatrix manage Google Ads campaigns?",
        a: "Yes. Nevatrix creates, manages and optimizes Google Ads (PPC) campaigns for businesses in Warangal and across India. We handle keyword selection, ad copywriting, bid management and conversion tracking to maximise your return on ad spend.",
    },
    {
        q: "What is local SEO and why does my Warangal business need it?",
        a: "Local SEO optimises your online presence so your business appears in Google searches like 'digital marketing agency Warangal' or 'web development company near me'. It includes Google Business Profile optimisation, local citations and location-based keyword targeting — essential for any business serving customers in Warangal.",
    },
    {
        q: "Does Nevatrix offer social media marketing services?",
        a: "Yes. Nevatrix provides complete social media marketing services including content creation, account management, paid social campaigns on Facebook, Instagram and LinkedIn, and detailed performance reporting for businesses in Warangal and Telangana.",
    },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function DigitalMarketingPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <>
            <SEO page="digital-marketing" />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

                .dm-page {
                    font-family: 'DM Sans', sans-serif;
                    color: #0F172A;
                }
                .dm-page h1,
                .dm-page h2,
                .dm-page h3,
                .dm-page h4 {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }

                /* Hero line reveal */
                @keyframes lineReveal {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }

                /* Subtle float */
                @keyframes floatY {
                    0%, 100% { transform: translateY(0); }
                    50%       { transform: translateY(-8px); }
                }

                .dm-stat-card { animation: floatY 6s ease-in-out infinite; }
                .dm-stat-card:nth-child(2) { animation-delay: 1s; }
                .dm-stat-card:nth-child(3) { animation-delay: 2s; }
                .dm-stat-card:nth-child(4) { animation-delay: 3s; }

                /* Grid lines background */
                .grid-bg {
                    background-image:
                            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
                    background-size: 48px 48px;
                }

                /* Diagonal separator */
                .diagonal-sep {
                    clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
                }

                /* Service card hover */
                .svc-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid #E2E8F0;
                }
                .svc-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 48px -12px rgba(15,23,42,0.12);
                    border-color: var(--card-accent);
                }
                .svc-bar {
                    height: 3px;
                    width: 0;
                    transition: width 0.4s ease;
                    border-radius: 2px;
                }
                .svc-card:hover .svc-bar { width: 100%; }

                /* FAQ */
                .faq-body {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.3s ease;
                }
                .faq-body.open { grid-template-rows: 1fr; }
                .faq-inner { overflow: hidden; }

                /* Step connector line */
                .step-line {
                    position: absolute;
                    top: 28px;
                    left: calc(100% + 12px);
                    width: calc(100% - 24px);
                    height: 1px;
                    background: linear-gradient(90deg, #CBD5E1, #E2E8F0);
                }
                @media (max-width: 1023px) { .step-line { display: none; } }

                /* CTA hover */
                .cta-btn {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .cta-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(37,99,235,0.35);
                }
            `}</style>

            <div className="dm-page">

                {/* ══════════════════════════════════
                    HERO — split layout, corporate
                ══════════════════════════════════ */}
                <section className="relative min-h-[560px] flex items-center overflow-hidden bg-[#0A1628] diagonal-sep">
                    {/* background image with dark overlay */}
                    <div className="absolute inset-0">
                        <Image
                            src="/digital-marketing.jpg"
                            alt="Digital marketing agency in Warangal — SEO, Google Ads and lead generation services by Nevatrix"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover opacity-20"
                        />
                    </div>

                    {/* Grid texture */}
                    <div className="absolute inset-0 grid-bg opacity-60" />

                    {/* Accent orb */}
                    <div className="absolute -bottom-24 right-[-100px] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
                    <div className="absolute top-[-80px] left-[-60px]   w-[360px] h-[360px] rounded-full bg-cyan-600/10  blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
                        <div className="max-w-3xl">
                            {/* Eyebrow */}
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-widest uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                Business Growth Partner Since 2012
                            </div>

                            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                                Digital Marketing
                                <br />
                                <span className="text-blue-400">That Drives</span>
                                <br />
                                Real Revenue
                            </h1>

                            {/* Animated underline accent */}
                            <div
                                className="h-[3px] w-48 bg-blue-500 mb-8 origin-left"
                                style={{ animation: "lineReveal 0.8s 0.3s ease both" }}
                            />

                            <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-10">
                                Nevatrix helps businesses growth using
                                website traffic, generate quality leads and boost revenue
                                through SEO, Google Ads and social media marketing.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="mailto:contact@nevatrix.com"
                                    className="cta-btn inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-lg font-semibold text-sm shadow-lg shadow-blue-900/40"
                                >
                                    Request Free SEO Audit <ArrowRight size={16} />
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-7 py-3.5 rounded-lg font-semibold text-sm transition"
                                >
                                    View Services
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════
                    TRUST BAR
                ══════════════════════════════════ */}
                <section className="bg-blue-50/60 border-b border-blue-100/80 py-6">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-slate-100">
                            {trust.map(({ icon: Icon, label }, i) => (
                                <div key={i} className="flex items-center gap-3 px-6 first:pl-0">
                                    <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                                        <Icon size={18} className="text-blue-600" />
                                    </div>
                                    <span className="text-slate-700 text-sm font-medium leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════
                    SERVICES
                ══════════════════════════════════ */}
                <section id="services" className="py-28 bg-gradient-to-b from-blue-50/50 via-indigo-50/30 to-slate-50/60">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Section header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div>
                                <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
                                    What We Do
                                </p>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                                    Digital Marketing Services
                                    <br />
                                    {/*<span className="text-slate-500 font-medium">in Warangal &amp; Telangana</span>*/}
                                </h2>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                                Complete online marketing solutions designed to grow your
                                business visibility and generate consistent, qualified leads.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((svc, i) => (
                                <div
                                    key={i}
                                    className="svc-card rounded-2xl p-8 flex flex-col"
                                    style={{ "--card-accent": svc.accent, backgroundColor: svc.accent + "08", border: `1px solid ${svc.accent}22` } as React.CSSProperties}
                                >
                                    {/* Tag pill */}
                                    <span
                                        className="self-start text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-6"
                                        style={{
                                            color: svc.accent,
                                            background: svc.accent + "15",
                                        }}
                                    >
                                        {svc.tag}
                                    </span>

                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                                        style={{ background: svc.accent + "12" }}
                                    >
                                        <svc.icon size={22} style={{ color: svc.accent }} />
                                    </div>

                                    <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">
                                        {svc.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed flex-1">
                                        {svc.desc}
                                    </p>

                                    {/* Animated bottom bar */}
                                    <div
                                        className="svc-bar mt-6"
                                        style={{ background: svc.accent }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════
                    RESULTS / OUTCOMES
                ══════════════════════════════════ */}
                <section className="py-28 bg-gradient-to-br from-sky-50/70 via-white to-indigo-50/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
                                Measurable Outcomes
                            </p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                What You Gain With Nevatrix
                            </h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">
                                Our campaigns are focused on business outcomes — not vanity
                                metrics like impressions or follower counts.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {results.map((r, i) => (
                                <div
                                    key={i}
                                    className="dm-stat-card rounded-2xl p-8 border shadow-sm hover:shadow-lg transition-shadow duration-300"
                                    style={{ backgroundColor: r.color + "08", borderColor: r.color + "25" }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                                        style={{ background: r.color + "12" }}
                                    >
                                        <r.icon size={22} style={{ color: r.color }} />
                                    </div>
                                    <div
                                        className="text-xs font-bold tracking-wider uppercase mb-3 px-2 py-0.5 rounded self-start inline-block"
                                        style={{ color: r.color, background: r.color + "12" }}
                                    >
                                        {r.metric}
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 mb-2">
                                        {r.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {r.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════
                    PROCESS
                ══════════════════════════════════ */}
                <section className="py-28 bg-gradient-to-b from-emerald-50/40 via-teal-50/20 to-cyan-50/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
                                Our Methodology
                            </p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                How We Grow Your Business
                            </h2>
                            <p className="text-slate-500 text-sm max-w-xl mx-auto">
                                A structured, data-driven process engineered to deliver compounding
                                results — not one-off spikes.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                            {steps.map((step, i) => (
                                <div key={i} className="relative">
                                    {/* Connector line (desktop only) */}
                                    {i < steps.length - 1 && <span className="step-line" />}

                                    <div className="rounded-2xl border rounded-2xl p-8 h-full hover:shadow-xl hover:-translate-y-2 transition duration-300"
                                         style={{ backgroundColor: step.color + "07", borderColor: step.color + "20" }}>
                                        {/* Step number + icon */}
                                        <div className="flex items-center gap-3 mb-5">
                                            <span
                                                className="text-2xl font-black leading-none"
                                                style={{ color: step.color + "33" }}
                                            >
                                                {step.num}
                                            </span>
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                                style={{ background: step.color + "12" }}
                                            >
                                                <step.icon size={18} style={{ color: step.color }} />
                                            </div>
                                        </div>
                                        <h3 className="text-base font-bold text-slate-900 mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════
                    FAQ
                ══════════════════════════════════ */}
                <section className="py-28 bg-gradient-to-br from-violet-50/50 via-purple-50/30 to-slate-50/60">
                    <div className="max-w-3xl mx-auto px-6">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
                                FAQ
                            </p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                Questions About Digital Marketing
                                <br />
                                {/*<span className="text-slate-400 font-medium">in Warangal</span>*/}
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <div
                                        key={i}
                                        className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                                            isOpen
                                                ? "border-blue-200 shadow-sm shadow-blue-50"
                                                : "border-slate-200 hover:border-slate-300"
                                        }`}
                                    >
                                        <button
                                            onClick={() => toggle(i)}
                                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                            style={{ backgroundColor: isOpen ? "#EEF2FF" : "white" }}
                                            aria-expanded={isOpen}
                                        >
                                            <div className="flex items-center gap-4 min-w-0">
                                                <span
                                                    className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors duration-200 ${
                                                        isOpen
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-slate-100 text-slate-500"
                                                    }`}
                                                >
                                                    {i + 1}
                                                </span>
                                                <span className="font-semibold text-slate-800 text-sm">
                                                    {faq.q}
                                                </span>
                                            </div>
                                            <ChevronDown
                                                size={18}
                                                className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                                                    isOpen ? "rotate-180 text-blue-600" : ""
                                                }`}
                                            />
                                        </button>
                                        <div className={`faq-body ${isOpen ? "open" : ""}`}>
                                            <div className="faq-inner">
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

                {/* ══════════════════════════════════
                    CTA BANNER
                ══════════════════════════════════ */}
                <section className="relative py-24 overflow-hidden bg-[#0A1628]">
                    {/* Accent orbs */}
                    <div className="absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -right-20 w-[360px] h-[360px] rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />
                    <div className="absolute inset-0 grid-bg opacity-40" />

                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            Free Consultation — No Obligation
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                            Ready to Grow Your Business
                            <br />
                            in Warangal?
                        </h2>
                        <p className="text-slate-400 text-base mb-10 max-w-xl mx-auto leading-relaxed">
                            Get a free digital marketing strategy session and SEO audit from
                            Nevatrix — the trusted digital marketing agency in Warangal, Telangana.
                        </p>
                        <a
                            href="mailto:contact@nevatrix.com"
                            className="cta-btn inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-blue-900/50"
                        >
                            <CheckCircle size={18} />
                            Request Free Consultation
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </section>

            </div>
        </>
    );
}
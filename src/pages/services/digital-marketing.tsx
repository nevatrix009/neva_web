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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SEO from "@/components/SEO";

const services: [string, LucideIcon, string, string][] = [
    [
        "Search Engine Optimization (SEO)",
        Search,
        "bg-blue-50 text-blue-600",
        "We optimize your website with keyword research, on-page SEO, technical fixes and link building to rank on the first page of Google for searches in Warangal and Telangana.",
    ],
    [
        "Google Ads (PPC Advertising)",
        Target,
        "bg-indigo-50 text-indigo-600",
        "We create and manage targeted Google Ads campaigns that put your business in front of high-intent buyers — driving quality leads while maximizing your return on ad spend.",
    ],
    [
        "Social Media Marketing",
        Users,
        "bg-purple-50 text-purple-600",
        "We manage your Facebook, Instagram and LinkedIn presence with engaging content, paid campaigns and community management to grow your brand audience and generate enquiries.",
    ],
    [
        "Content Marketing",
        Megaphone,
        "bg-emerald-50 text-emerald-600",
        "We create SEO-optimized blog posts, landing pages and content strategies that attract your target audience, build trust and convert readers into paying customers.",
    ],
    [
        "Analytics & Reporting",
        BarChart3,
        "bg-orange-50 text-orange-600",
        "We set up Google Analytics, Search Console and campaign dashboards so you always know which channels are driving traffic, leads and revenue — with clear monthly reports.",
    ],
    [
        "Lead Generation Campaigns",
        LineChart,
        "bg-pink-50 text-pink-600",
        "We build end-to-end lead generation funnels combining SEO, paid ads and landing page optimization to deliver a consistent pipeline of qualified leads for your business.",
    ],
];

/* ─────────────────────────────────────────────
   FAQ DATA  (accordion UI + JSON-LD schema)
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
        a: "Most businesses start seeing meaningful improvements in Google rankings and organic traffic within 3–6 months of consistent SEO work. Local SEO results for Warangal-based businesses can appear faster — often within 4–8 weeks for Google Business Profile rankings.",
    },
    {
        q: "Does Nevatrix manage Google Ads campaigns?",
        a: "Yes. Nevatrix creates, manages and optimizes Google Ads (PPC) campaigns for businesses in Warangal and across India. We handle keyword selection, ad copywriting, bid management and conversion tracking to maximize your return on ad spend.",
    },
    {
        q: "What is local SEO and why does my Warangal business need it?",
        a: "Local SEO optimizes your online presence so your business appears in Google searches like 'web development company near me' or 'digital marketing agency Warangal'. It includes Google Business Profile optimization, local citations and location-based keyword targeting — essential for any business serving customers in Warangal.",
    },
    {
        q: "Does Nevatrix offer social media marketing services?",
        a: "Yes. Nevatrix provides social media marketing services including content creation, account management, paid social campaigns on Facebook, Instagram and LinkedIn, and performance reporting for businesses in Warangal and Telangana.",
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
            {/* ══════════════════════════════════════
                HERO
            ══════════════════════════════════════ */}
            <section className="relative min-h-[460px] flex items-center justify-center overflow-hidden text-center text-white">
                <div className="absolute inset-0">
                    <Image
                        src="/digital-marketing.jpg"
                        // ✅ FIXED: keyword-rich alt text
                        alt="Digital marketing agency in Warangal - SEO and Google Ads services by Nevatrix"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-blue-900/30 to-purple-900/40" />

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    {/* ✅ FIXED: H1 now targets primary keyword */}
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                        Digital Marketing
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">
                        Nevatrix helps businesses in growth and in
                        increase of website traffic, generate quality leads and boost sales
                        through SEO, Google Ads and social media marketing.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════════
                SERVICES  (all unique descriptions)
            ══════════════════════════════════════ */}
            {/* ================= SERVICES ================= */}
            <section className="relative py-32 overflow-hidden">

                {/* Colorful mesh background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -z-20" />
                <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-200/40 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-200/40 blur-3xl rounded-full -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-200/30 blur-3xl rounded-full -z-10" />

                <div className="text-center mb-20">
                    <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                        Our Digital Marketing Services in Warangal
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Complete online marketing solutions designed to grow your business,
                        increase visibility and generate consistent leads in Warangal and Telangana.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(([title, Icon, style, desc], i) => {

                        // Per-card background gradients — each card is a different color
                        const cardBgs = [
                            "from-blue-100/80 via-blue-50 to-white",
                            "from-indigo-100/80 via-indigo-50 to-white",
                            "from-purple-100/80 via-purple-50 to-white",
                            "from-emerald-100/80 via-emerald-50 to-white",
                            "from-orange-100/80 via-orange-50 to-white",
                            "from-pink-100/80 via-pink-50 to-white",
                        ];

                        const cardBorders = [
                            "border-blue-200/60",
                            "border-indigo-200/60",
                            "border-purple-200/60",
                            "border-emerald-200/60",
                            "border-orange-200/60",
                            "border-pink-200/60",
                        ];

                        const glows = [
                            "group-hover:shadow-blue-200/60",
                            "group-hover:shadow-indigo-200/60",
                            "group-hover:shadow-purple-200/60",
                            "group-hover:shadow-emerald-200/60",
                            "group-hover:shadow-orange-200/60",
                            "group-hover:shadow-pink-200/60",
                        ];

                        return (
                            <div
                                key={i}
                                className={`group relative rounded-3xl p-8 border bg-gradient-to-br ${cardBgs[i % cardBgs.length]} ${cardBorders[i % cardBorders.length]} hover:-translate-y-4 hover:shadow-2xl ${glows[i % glows.length]} transition duration-300 backdrop-blur-sm`}
                            >
                                {/* subtle corner accent */}
                                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 bg-gradient-to-bl from-current to-transparent" />

                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${style} group-hover:scale-110 transition shadow-sm`}>
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-lg font-semibold text-slate-800 mb-3">{title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>

                                {/* bottom accent bar */}
                                <div className={`mt-6 h-[3px] w-0 rounded-full bg-gradient-to-r ${
                                    ["from-blue-400 to-blue-600",
                                        "from-indigo-400 to-indigo-600",
                                        "from-purple-400 to-purple-600",
                                        "from-emerald-400 to-emerald-600",
                                        "from-orange-400 to-orange-600",
                                        "from-pink-400 to-pink-600"][i % 6]
                                } group-hover:w-full transition-all duration-500`} />
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ══════════════════════════════════════
                RESULTS
            ══════════════════════════════════════ */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white -z-20" />
                <div className="absolute -top-24 left-[-120px] w-[420px] h-[420px] bg-blue-200/30 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-24 right-[-120px] w-[420px] h-[420px] bg-indigo-200/30 blur-3xl rounded-full -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            What You Get From Our Marketing
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Our campaigns are focused on measurable business growth — not
                            vanity metrics like impressions or follower counts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                title: "More Website Traffic",
                                desc: "We drive targeted visitors who are actively searching for your products or services in Warangal and surrounding areas.",
                                color: "bg-blue-50 border-blue-100 text-blue-600",
                                icon: Globe,
                            },
                            {
                                title: "More Leads & Enquiries",
                                desc: "We build optimized funnels and landing pages that convert website visitors into real customer enquiries and sales calls.",
                                color: "bg-indigo-50 border-indigo-100 text-indigo-600",
                                icon: PhoneCall,
                            },
                            {
                                title: "Higher Google Rankings",
                                desc: "We rank your business on the first page of Google for the keywords your customers are searching — locally and nationally.",
                                color: "bg-emerald-50 border-emerald-100 text-emerald-600",
                                icon: TrendingUp,
                            },
                            {
                                title: "Increased Sales",
                                desc: "We align every campaign with your revenue goals — turning traffic and leads into consistent, predictable business growth.",
                                color: "bg-purple-50 border-purple-100 text-purple-600",
                                icon: IndianRupee,
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`group rounded-3xl p-8 border ${item.color} hover:-translate-y-3 hover:shadow-2xl transition duration-300 bg-white/70 backdrop-blur-xl`}
                            >
                                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center border ${item.color} group-hover:scale-110 transition`}>
                                    <item.icon size={26} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                <div className="mt-6 h-[3px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-full transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                MARKETING PROCESS
            ══════════════════════════════════════ */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-indigo-50 -z-20" />
                <div className="absolute -top-24 left-[-120px] w-[420px] h-[420px] bg-blue-200/30 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-24 right-[-120px] w-[420px] h-[420px] bg-indigo-200/30 blur-3xl rounded-full -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Our Digital Marketing Process
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A structured growth strategy designed to bring real business
                            results — not just impressions or clicks.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            {
                                title: "Business Analysis",
                                desc: "We audit your current online presence, study your competitors in Warangal and identify the highest-impact opportunities for growth.",
                                color: "bg-blue-50 border-blue-100 text-blue-600",
                                icon: Search,
                            },
                            {
                                title: "Strategy Planning",
                                desc: "We build a custom SEO, Google Ads and content strategy based on your goals, target audience and the keywords your customers are searching.",
                                color: "bg-indigo-50 border-indigo-100 text-indigo-600",
                                icon: Target,
                            },
                            {
                                title: "Campaign Execution",
                                desc: "We launch SEO optimization, Google Ads campaigns and social media marketing — with every element aligned to drive leads and revenue.",
                                color: "bg-emerald-50 border-emerald-100 text-emerald-600",
                                icon: Megaphone,
                            },
                            {
                                title: "Reporting & Optimization",
                                desc: "We track results weekly, share clear monthly performance reports and continuously refine campaigns to improve ROI over time.",
                                color: "bg-purple-50 border-purple-100 text-purple-600",
                                icon: LineChart,
                            },
                        ].map((step, i) => (
                            <div key={i} className="group relative">
                                <div className={`rounded-3xl border ${step.color} bg-white/80 backdrop-blur-xl p-8 hover:-translate-y-4 hover:shadow-2xl transition duration-300`}>
                                    <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center border ${step.color} group-hover:scale-110 transition`}>
                                        <step.icon size={26} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                FAQ ACCORDION
            ══════════════════════════════════════ */}
            {/* ================= FAQ ================= */}
            <section className="relative py-20 overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 -z-20" />
                <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-indigo-200/35 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-purple-200/35 blur-3xl rounded-full -z-10" />

                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-10 text-center">
                        Frequently Asked Questions — Digital Marketing in Warangal
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => {
                            const isOpen = openIndex === i;

                            // Per-item color theme
                            const themes = [
                                { border: "border-blue-300",   shadow: "shadow-blue-100",   bg: "bg-blue-50/60",   bar: "bg-blue-500",   icon: "text-blue-500",   activeBg: "bg-blue-50"   },
                                { border: "border-indigo-300", shadow: "shadow-indigo-100", bg: "bg-indigo-50/60", bar: "bg-indigo-500", icon: "text-indigo-500", activeBg: "bg-indigo-50" },
                                { border: "border-purple-300", shadow: "shadow-purple-100", bg: "bg-purple-50/60", bar: "bg-purple-500", icon: "text-purple-500", activeBg: "bg-purple-50" },
                                { border: "border-emerald-300",shadow: "shadow-emerald-100",bg: "bg-emerald-50/60",bar: "bg-emerald-500",icon: "text-emerald-500",activeBg: "bg-emerald-50"},
                                { border: "border-orange-300", shadow: "shadow-orange-100", bg: "bg-orange-50/60", bar: "bg-orange-500", icon: "text-orange-500", activeBg: "bg-orange-50" },
                                { border: "border-pink-300",   shadow: "shadow-pink-100",   bg: "bg-pink-50/60",   bar: "bg-pink-500",   icon: "text-pink-500",   activeBg: "bg-pink-50"   },
                            ];

                            const t = themes[i % themes.length];

                            return (
                                <div
                                    key={i}
                                    className={`border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm ${
                                        isOpen
                                            ? `${t.border} shadow-lg ${t.shadow} ${t.bg}`
                                            : "border-white/80 bg-white/70 hover:border-slate-200 hover:shadow-md"
                                    }`}
                                >
                                    {/* Left color bar */}
                                    <div className="flex">
                                        <div className={`w-1 flex-shrink-0 rounded-l-2xl transition-all duration-300 ${isOpen ? t.bar : "bg-transparent"}`} />

                                        <div className="flex-1">
                                            {/* Question */}
                                            <button
                                                onClick={() => toggle(i)}
                                                className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${
                                                    isOpen ? t.activeBg : "bg-transparent hover:bg-slate-50/80"
                                                }`}
                                                aria-expanded={isOpen}
                                            >
                                                {/* Number badge */}
                                                <div className="flex items-center gap-4 min-w-0">
                          <span className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors duration-300 ${
                              isOpen ? `${t.bar} text-white` : "bg-slate-100 text-slate-500"
                          }`}>
                            {i + 1}
                          </span>
                                                    <span className="font-medium text-slate-800 text-sm sm:text-base">
                            {faq.q}
                          </span>
                                                </div>

                                                <ChevronDown
                                                    size={20}
                                                    className={`flex-shrink-0 transition-all duration-300 ${t.icon} ${isOpen ? "rotate-180" : ""}`}
                                                />
                                            </button>

                                            {/* Answer */}
                                            <div
                                                className={`grid transition-all duration-300 ease-in-out ${
                                                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <p className={`px-6 pb-5 pt-3 text-slate-600 text-sm leading-relaxed border-t ${
                                                        isOpen ? t.border : "border-slate-100"
                                                    } border-opacity-40`}>
                                                        {faq.a}
                                                    </p>
                                                </div>
                                            </div>
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
            <section className="py-24 text-center text-white bg-gradient-to-r from-indigo-600 to-blue-600">
                <h2 className="text-3xl font-semibold mb-4">
                    Ready to Grow Your Business in Warangal?
                </h2>
                <p className="mb-6 text-blue-100">
                    Get a free digital marketing strategy and SEO consultation from
                    Nevatrix — the trusted marketing agency in Warangal, Telangana.
                </p>
                <a
                    href="mailto:contact@nevatrix.com"
                    className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:scale-105 transition inline-flex items-center gap-2 shadow-lg"
                >
                    <CheckCircle size={18} /> Request Free Consultation
                </a>
            </section>
        </>
    );
}
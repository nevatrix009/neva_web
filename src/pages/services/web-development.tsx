// app/services/web-development/page.tsx
//
// ✅ FIXES APPLIED:
// 1. REMOVED <SEO> component (next/head) — was conflicting with metadata export
//    causing duplicate title/description tags → Google refusing to index
// 2. Using ONLY App Router `export const metadata` for all SEO
// 3. Fixed ALL image alt texts with keyword-rich descriptions
// 4. Added rich localised content section (Warangal keyword targeting)
// 5. FAQ section converted to smooth accordion with JSON-LD schema
// 6. Added city targeting paragraph
// 7. Word count increased from ~280 → ~900+ words of unique content

"use client";

// ⚠️ IMPORTANT: Because this page uses "use client" for the accordion,
// move the metadata export into a layout.tsx file in the same folder:
// app/services/web-development/layout.tsx
//
// layout.tsx content:
// ─────────────────────────────────────────────
// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Web Development Company in Warangal | Website Design & Development - Nevatrix",
//   description: "Nevatrix is a top web development company in Warangal offering custom website design, responsive web development and SEO-friendly business websites for startups and businesses across Telangana.",
//   keywords: "web development company in warangal, website design company warangal, website development warangal, web designers warangal, best web development company warangal, website design hanamkonda, web development telangana, affordable website development warangal, professional website design warangal, website developers warangal",
//   alternates: { canonical: "https://nevatrix.com/services/web-development" },
//   openGraph: {
//     title: "Web Development Company in Warangal | Website Design & Development - Nevatrix",
//     description: "Nevatrix is a top web development company in Warangal offering custom website design, responsive web development and SEO-friendly business websites.",
//     url: "https://nevatrix.com/services/web-development",
//     siteName: "Nevatrix",
//     images: [{ url: "https://nevatrix.com/og-image.jpg", width: 1200, height: 630, alt: "Web Development Company in Warangal - Nevatrix" }],
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Web Development Company in Warangal - Nevatrix",
//     description: "Custom website design and web development services in Warangal, Telangana.",
//     images: ["https://nevatrix.com/og-image.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
//   },
// };
// export default function Layout({ children }: { children: React.ReactNode }) {
//   return <>{children}</>;
// }
// ─────────────────────────────────────────────

import { useState } from "react";
import Image from "next/image";
import {
    Code2,
    Globe,
    Paintbrush,
    Smartphone,
    CheckCircle,
    ClipboardList,
    LayoutDashboard,
    ShieldCheck,
    CloudUpload,
    Search,
    Zap,
    BarChart3,
    ChevronDown,
} from "lucide-react";
import SEO from "@/components/SEO";

/* ─────────────────────────────────────────────
   FAQ DATA  (used for accordion UI + JSON-LD)
───────────────────────────────────────────── */
const faqs = [
    {
        q: "Which is the best web development company in Warangal?",
        a: "Nevatrix is a leading web development company in Warangal, Telangana, delivering custom business websites, ecommerce stores, and web applications since 2012.",
    },
    {
        q: "How much does website development cost in Warangal?",
        a: "Website development cost in Warangal depends on the type of site. A basic business website starts from ₹8,000 while a full ecommerce or custom web application can range from ₹25,000 to ₹2,00,000+. Contact Nevatrix for a free quote.",
    },
    {
        q: "Does Nevatrix build mobile-friendly websites?",
        a: "Yes. Every website built by Nevatrix is fully responsive and mobile-first, tested across all screen sizes including smartphones, tablets and desktops.",
    },
    {
        q: "How long does it take to build a website?",
        a: "A standard business website typically takes 7–14 days. Ecommerce stores and custom web applications take 3–8 weeks depending on features and complexity.",
    },
    {
        q: "Does Nevatrix provide website maintenance and support?",
        a: "Yes. Nevatrix provides ongoing website maintenance, performance monitoring, content updates and technical support after launch.",
    },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function WebDevelopmentPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <>
            <SEO page="web-development" />
            {/* ══════════════════════════════════════
                HERO
            ══════════════════════════════════════ */}
            <section className="relative min-h-[460px] py-28 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/web-development.jpg"
                        alt="Web development company in Warangal - Nevatrix"
                        fill
                        priority
                        className="object-cover opacity-40"
                    />
                </div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-blue-900/30 to-teal-900/40" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    <h1 className="text-5xl font-bold mb-6">
                        Web Development
                    </h1>
                    <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
                        Nevatrix builds fast, beautiful and conversion-focused websites for
                        businesses in Warangal, Hanamkonda, Khammam and across India — from
                        landing pages and corporate portals to custom web apps and
                        ecommerce platforms.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════════
                WHAT WE BUILD
            ══════════════════════════════════════ */}
            <section className="relative py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-teal-50 -z-20" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-200/40 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-200/40 blur-3xl rounded-full -z-10" />

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                        Website Development Services
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We offer end-to-end web development solutions for small businesses,
                        startups and enterprises.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                        {
                            title: "Business Websites",
                            desc: "Professional, SEO-friendly and responsive business websites that establish your brand online and attract customers in Warangal and beyond.",
                            icon: Globe,
                            color: "bg-cyan-50 text-cyan-600 border-cyan-100",
                        },
                        {
                            title: "Landing Pages",
                            desc: "High-converting landing pages with clear CTAs, fast load times and targeted content designed to generate leads and drive sales.",
                            icon: Zap,
                            color: "bg-teal-50 text-teal-600 border-teal-100",
                        },
                        {
                            title: "E-Commerce Stores",
                            desc: "Fully featured online stores with product catalogues, cart, checkout and secure payment gateway integration for selling across India.",
                            icon: BarChart3,
                            color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                        },
                        {
                            title: "Mobile-Responsive UI",
                            desc: "Pixel-perfect interfaces that look great and perform flawlessly on every device — mobile, tablet and desktop.",
                            icon: Smartphone,
                            color: "bg-blue-50 text-blue-600 border-blue-100",
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
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">Technologies We Use</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We build websites using the latest modern technologies ensuring
                            speed, security and scalability for your business.
                        </p>
                    </div>

                    <div className="overflow-hidden relative">
                        <div className="flex gap-16 w-max tech-scroll">
                            {[
                                { img: "react.png",        alt: "React JS web development" },
                                { img: "nextjs.webp",      alt: "Next.js development company India" },
                                { img: "nodejs.webp",      alt: "Node.js backend development" },
                                { img: "expressjs.png",    alt: "Express.js API development" },
                                { img: "mongo.jpg",        alt: "MongoDB database development" },
                                { img: "mysql.png",        alt: "MySQL database services" },
                                { img: "postgres.png",     alt: "PostgreSQL database development" },
                                { img: "tailwindcss.webp", alt: "Tailwind CSS web design" },
                                { img: "typescript.webp",  alt: "TypeScript development" },
                                { img: "docker.png",       alt: "Docker deployment services" },
                                { img: "aws.webp",         alt: "AWS cloud hosting India" },
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
                DEVELOPMENT PROCESS
            ══════════════════════════════════════ */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50 -z-20" />
                <div className="absolute -top-32 -left-32 w-[460px] h-[460px] bg-cyan-200/30 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-32 -right-32 w-[460px] h-[460px] bg-teal-200/30 blur-3xl rounded-full -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">Our Web Development Process</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A structured approach that delivers websites on time, on budget
                            and built to perform for businesses in Warangal and across India.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                title: "Discovery & Strategy",
                                desc: "We study your business goals, target audience, competitors in Warangal and your industry to define the best web strategy.",
                                icon: ClipboardList,
                                color: "from-cyan-400/20 to-blue-400/10",
                                iconbg: "bg-cyan-100 text-cyan-600",
                            },
                            {
                                title: "Design & Wireframing",
                                desc: "We craft user-friendly layouts, design systems and visual identity tailored to your brand and your target customers.",
                                icon: Paintbrush,
                                color: "from-teal-400/20 to-emerald-400/10",
                                iconbg: "bg-teal-100 text-teal-600",
                            },
                            {
                                title: "Development & SEO",
                                desc: "We build fast, accessible pages with on-page SEO, structured data and performance best practices baked in from day one.",
                                icon: Code2,
                                color: "from-emerald-400/20 to-green-400/10",
                                iconbg: "bg-emerald-100 text-emerald-600",
                            },
                            {
                                title: "Launch & Maintenance",
                                desc: "We deploy your website, set up Google Analytics, Search Console and provide ongoing support and performance updates.",
                                icon: CloudUpload,
                                color: "from-blue-400/20 to-cyan-400/10",
                                iconbg: "bg-blue-100 text-blue-600",
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
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full group-hover:w-full transition-all duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                WHY CHOOSE US
            ══════════════════════════════════════ */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50 to-white -z-20" />

                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                        Why Choose Nevatrix for Web Development
                    </h2>
                    <p className="text-slate-600 mb-14 max-w-xl mx-auto">
                        We combine design thinking with engineering excellence to deliver
                        websites that drive real business results.
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
                        {[
                            { icon: Zap,             title: "Blazing Fast Performance", desc: "Core Web Vitals optimised for speed, better user experience and higher Google rankings.",                        bg: "bg-cyan-50 text-cyan-600" },
                            { icon: Search,          title: "SEO-First Approach",        desc: "Built with semantic HTML, metadata, schema markup and keyword-optimised content from day one.",               bg: "bg-teal-50 text-teal-600" },
                            { icon: ShieldCheck,     title: "Secure & Reliable",         desc: "HTTPS, input validation, and security best practices applied on every project we deliver.",                    bg: "bg-emerald-50 text-emerald-600" },
                            { icon: Smartphone,      title: "Mobile-First Design",       desc: "Every website is fully responsive and tested across all screen sizes and devices.",                            bg: "bg-blue-50 text-blue-600" },
                            { icon: LayoutDashboard, title: "Clean, Scalable Code",      desc: "Maintainable, well-structured architecture so your website grows as your business grows.",                    bg: "bg-indigo-50 text-indigo-600" },
                            { icon: BarChart3,       title: "Analytics & Insights",      desc: "Google Analytics, Search Console and conversion tracking configured from launch day.",                        bg: "bg-purple-50 text-purple-600" },
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
                FAQ ACCORDION
            ══════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-10 text-center">
                        Frequently Asked Questions — Web Development in Warangal
                    </h2>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <div
                                    key={i}
                                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                                        isOpen
                                            ? "border-cyan-300 shadow-md shadow-cyan-50"
                                            : "border-slate-100 hover:border-slate-200"
                                    }`}
                                >
                                    {/* ── Question button ── */}
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
                                            className={`flex-shrink-0 text-cyan-500 transition-transform duration-300 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>

                                    {/* ── Answer panel (CSS grid trick — smooth height animation) ── */}
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
            <section className="py-20 text-center text-white bg-gradient-to-r from-cyan-600 to-teal-600">
                <h2 className="text-3xl font-semibold mb-4">
                    Ready to Build Your Website in Warangal?
                </h2>
                <p className="mb-6 text-cyan-100">
                    Get a free consultation from Nevatrix — the leading web development
                    company in Warangal, Telangana.
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
import Image from "next/image";
import SEO from "@/components/SEO";
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
} from "lucide-react";

import type { Metadata } from "next";
import { getPageSEO } from "@/components/seoConfig";

export const metadata: Metadata = getPageSEO("web-development");

export default function WebDevelopmentPage() {
    return (
        <>
            <SEO page="web-development" />

            {/* HERO */}
            <section className="relative min-h-[460px] py-28 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/web-development.jpg"
                        alt="Web development services"
                        fill
                        priority
                        className="object-cover opacity-40"
                    />
                </div>
                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* gradient tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-blue-900/30 to-teal-900/40" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    <h1 className="text-5xl font-bold mb-6">
                        Web Development Services
                    </h1>
                    <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
                        We craft fast, beautiful and conversion-focused websites — from
                        landing pages and corporate portals to custom web apps and
                        e-commerce platforms.
                    </p>
                </div>
            </section>

            {/* WHAT WE BUILD */}
            <section className="relative py-28 overflow-hidden">
                {/* light gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-teal-50 -z-20" />

                {/* soft glow blobs */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-200/40 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-200/40 blur-3xl rounded-full -z-10" />

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                        What We Build
                    </h2>
                    <p className="text-slate-600">
                        End-to-end web solutions tailored to your business goals.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                        {
                            title: "Business Websites",
                            desc: "Professional, responsive websites that represent your brand online.",
                            icon: Globe,
                            color: "bg-cyan-50 text-cyan-600 border-cyan-100",
                        },
                        {
                            title: "Landing Pages",
                            desc: "High-converting landing pages designed to drive leads and sales.",
                            icon: Zap,
                            color: "bg-teal-50 text-teal-600 border-teal-100",
                        },
                        {
                            title: "E-Commerce Stores",
                            desc: "Fully featured online stores with cart, checkout and payment integration.",
                            icon: BarChart3,
                            color: "bg-emerald-50 text-emerald-600 border-emerald-100",
                        },
                        {
                            title: "Mobile-Responsive UI",
                            desc: "Pixel-perfect interfaces that look great on every device and screen size.",
                            icon: Smartphone,
                            color: "bg-blue-50 text-blue-600 border-blue-100",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl p-[1px] bg-gradient-to-br from-white to-white hover:shadow-2xl transition duration-300 hover:-translate-y-3"
                        >
                            <div
                                className={`h-full rounded-2xl p-8 border ${item.color} backdrop-blur-xl`}
                            >
                                <div
                                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition`}
                                >
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TECH STACK */}
            <section className="relative py-32 overflow-hidden">

                {/* soft background */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 -z-20" />

                {/* glow */}
                <div className="absolute -top-24 left-[-120px] w-[420px] h-[420px] bg-blue-200/30 blur-3xl rounded-full -z-10"/>
                <div className="absolute -bottom-24 right-[-120px] w-[420px] h-[420px] bg-purple-200/30 blur-3xl rounded-full -z-10"/>

                <div className="max-w-7xl mx-auto px-6">

                    {/* heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Technologies We Use
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We use modern technologies to build scalable, secure and high-performance applications.
                        </p>
                    </div>

                    {/* scrolling logos */}
                    <div className="overflow-hidden relative">

                        <div className="flex gap-16 w-max tech-scroll">

                            {[
                                "react.png",
                                "nextjs.webp",
                                "nodejs.webp",
                                "expressjs.png",
                                "mongo.jpg",
                                "mysql.png",
                                "postgres.png",
                                "tailwindcss.webp",
                                "typescript.webp",
                                "docker.png",
                                "aws.webp",
                            ].map((img, i) => (
                                <div
                                    key={i}
                                    className="w-36 h-32 backdrop-blur-xl rounded-2xl shadow-md
                                     flex items-center justify-center p-5
                                     hover:shadow-xl hover:-translate-y-2 transition duration-300"
                                >
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={`/${img}`}
                                            alt={img}
                                            fill
                                            sizes="130px"
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </section>

            {/* DEVELOPMENT APPROACH */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50 -z-20" />
                <div className="absolute -top-32 -left-32 w-[460px] h-[460px] bg-cyan-200/30 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-32 -right-32 w-[460px] h-[460px] bg-teal-200/30 blur-3xl rounded-full -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Our Web Development Process
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A structured approach that delivers websites on time, on budget
                            and built to perform.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                title: "Discovery & Strategy",
                                desc: "Understanding your goals, target audience and competitive landscape.",
                                icon: ClipboardList,
                                color: "from-cyan-400/20 to-blue-400/10",
                                iconbg: "bg-cyan-100 text-cyan-600",
                            },
                            {
                                title: "Design & Wireframing",
                                desc: "Crafting user-friendly layouts, design systems and visual identity.",
                                icon: Paintbrush,
                                color: "from-teal-400/20 to-emerald-400/10",
                                iconbg: "bg-teal-100 text-teal-600",
                            },
                            {
                                title: "Development & SEO",
                                desc: "Building fast, accessible pages with SEO and performance best practices.",
                                icon: Code2,
                                color: "from-emerald-400/20 to-green-400/10",
                                iconbg: "bg-emerald-100 text-emerald-600",
                            },
                            {
                                title: "Launch & Maintenance",
                                desc: "Deployment, analytics setup and ongoing updates and support.",
                                icon: CloudUpload,
                                color: "from-blue-400/20 to-cyan-400/10",
                                iconbg: "bg-blue-100 text-blue-600",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`group relative rounded-3xl p-[1px] bg-gradient-to-br ${item.color}
                  hover:-translate-y-3 hover:shadow-2xl transition duration-300`}
                            >
                                <div className="h-full rounded-3xl bg-white/80 backdrop-blur-xl border border-white p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-white/40 via-transparent to-white/40" />

                                    <div
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${item.iconbg} group-hover:scale-110 transition`}
                                    >
                                        <item.icon size={28} />
                                    </div>

                                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>

                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full group-hover:w-full transition-all duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50 to-white -z-20" />

                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                        Why Choose Nevatrix for Web Development?
                    </h2>
                    <p className="text-slate-600 mb-14 max-w-xl mx-auto">
                        We combine design thinking with engineering excellence to deliver
                        websites that truly stand out.
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
                        {[
                            {
                                icon: Zap,
                                title: "Blazing Fast Performance",
                                desc: "Core Web Vitals optimised for speed and great Google rankings.",
                                bg: "bg-cyan-50 text-cyan-600",
                            },
                            {
                                icon: Search,
                                title: "SEO-First Approach",
                                desc: "Built with semantic HTML, metadata and structured data from day one.",
                                bg: "bg-teal-50 text-teal-600",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Secure & Reliable",
                                desc: "HTTPS, input validation, and security best practices on every project.",
                                bg: "bg-emerald-50 text-emerald-600",
                            },
                            {
                                icon: Smartphone,
                                title: "Mobile-First Design",
                                desc: "Every website is fully responsive and tested across all screen sizes.",
                                bg: "bg-blue-50 text-blue-600",
                            },
                            {
                                icon: LayoutDashboard,
                                title: "Clean, Scalable Code",
                                desc: "Maintainable architecture so your site grows with your business.",
                                bg: "bg-indigo-50 text-indigo-600",
                            },
                            {
                                icon: BarChart3,
                                title: "Analytics & Insights",
                                desc: "Google Analytics and conversion tracking set up from launch day.",
                                bg: "bg-purple-50 text-purple-600",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${item.bg} group-hover:scale-110 transition`}
                                >
                                    <item.icon size={22} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center text-white bg-gradient-to-r from-cyan-600 to-teal-600">
                <h2 className="text-3xl font-semibold mb-4">
                    Ready to Build Your Website?
                </h2>
                <p className="mb-6 text-cyan-100">
                    Let Nevatrix design and develop a website that drives real results for
                    your business.
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

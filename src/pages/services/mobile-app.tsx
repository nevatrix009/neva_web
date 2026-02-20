import Image from "next/image";
import SEO from "@/components/SEO";
import {
    Smartphone,
    Layers3,
    Rocket,
    ShieldCheck,
    Workflow,
    Code2,
    CheckCircle
} from "lucide-react";

import type { Metadata } from "next";
import { getPageSEO } from "@/components/seoConfig";

export const metadata: Metadata = getPageSEO("mobile-app-development");

export default function MobileAppPage() {
    return (
        <>
            <SEO page="mobile-app" />
            {/* ================= HERO ================= */}
            <section className="relative min-h-[460px] py-28 overflow-hidden">

                <div className="absolute inset-0">
                    <Image
                        src="/mobile-app.jpg"
                        alt="Mobile app development services"
                        fill
                        priority
                        className="object-cover "
                    />
                </div>
                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* gradient tint (important for premium look) */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-blue-900/30 to-purple-900/40" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Mobile App Development Services
                    </h1>

                    <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
                        We design and develop scalable Android and iOS mobile applications
                        for startups and businesses using modern technologies and clean architecture.
                    </p>

                </div>
            </section>

            {/* ================= APP TYPES ================= */}
            {/* ================= APPS WE BUILD ================= */}
            <section className="relative py-32 overflow-hidden">

                {/* soft page background */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 -z-20" />

                {/* glow accents */}
                <div className="absolute -top-24 left-[-120px] w-[420px] h-[420px] bg-blue-200/35 blur-3xl rounded-full -z-10"/>
                <div className="absolute -bottom-24 right-[-120px] w-[420px] h-[420px] bg-purple-200/35 blur-3xl rounded-full -z-10"/>

                <div className="max-w-7xl mx-auto px-6">

                    {/* heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Apps We Build
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Tailored mobile applications designed for startups, businesses and service platforms.
                        </p>
                    </div>

                    {/* cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {[
                            {
                                title:"Startup MVP Apps",
                                desc:"Launch your idea quickly with a scalable MVP mobile application.",
                                icon:Layers3,
                                card:"from-blue-100/70 to-blue-50",
                                iconbg:"bg-blue-600"
                            },
                            {
                                title:"Business Applications",
                                desc:"Employee apps, dashboards and workflow automation platforms.",
                                icon:Workflow,
                                card:"from-indigo-100/70 to-indigo-50",
                                iconbg:"bg-indigo-600"
                            },
                            {
                                title:"Ecommerce Apps",
                                desc:"Mobile stores with cart, checkout, orders and notifications.",
                                icon:Smartphone,
                                card:"from-emerald-100/70 to-emerald-50",
                                iconbg:"bg-emerald-600"
                            },
                            {
                                title:"On-Demand Apps",
                                desc:"Booking, delivery and real-time service mobile applications.",
                                icon:Code2,
                                card:"from-purple-100/70 to-purple-50",
                                iconbg:"bg-purple-600"
                            }
                        ].map((item,i)=>(
                            <div
                                key={i}
                                className={`group relative rounded-3xl p-[1px] bg-gradient-to-br ${item.card}
          hover:-translate-y-4 hover:shadow-2xl transition duration-300`}
                            >
                                <div className="h-full rounded-3xl backdrop-blur-xl bg-white/60 p-8 border border-white/70">

                                    {/* icon */}
                                    <div className={`w-14 h-14 rounded-2xl ${item.iconbg} text-white
            flex items-center justify-center mb-6 shadow-md
            group-hover:scale-110 transition`}>
                                        <item.icon size={26}/>
                                    </div>

                                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* hover accent line */}
                                    <div className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full
                                    bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0
                                    group-hover:opacity-100 transition"/>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* ================= FEATURES ================= */}
            {/* ================= WHY CHOOSE OUR APPS ================= */}
            <section className="relative py-32 overflow-hidden">

                {/* light background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-indigo-50 -z-20" />

                {/* soft glow */}
                <div className="absolute -top-24 left-[-120px] w-[420px] h-[420px] bg-blue-200/30 blur-3xl rounded-full -z-10"/>
                <div className="absolute -bottom-24 right-[-120px] w-[420px] h-[420px] bg-indigo-200/30 blur-3xl rounded-full -z-10"/>

                <div className="max-w-6xl mx-auto px-6">

                    {/* heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Why Choose Our Apps
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We focus on performance, scalability and user experience to build applications people actually enjoy using.
                        </p>
                    </div>

                    {/* feature grid */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {[
                            {
                                title:"Fast & Smooth Performance",
                                desc:"Our apps are optimized for speed and responsiveness to provide seamless user experience.",
                                color:"border-blue-200 bg-blue-50",
                                icon:Rocket
                            },
                            {
                                title:"Scalable Architecture",
                                desc:"Built to handle growing users and business expansion without rebuilding the app.",
                                color:"border-indigo-200 bg-indigo-50",
                                icon:Layers3
                            },
                            {
                                title:"Secure Authentication",
                                desc:"Secure login systems, encrypted data storage and protected APIs.",
                                color:"border-emerald-200 bg-emerald-50",
                                icon:ShieldCheck
                            },
                            {
                                title:"App Store Deployment",
                                desc:"We publish your application to Google Play Store and Apple App Store.",
                                color:"border-purple-200 bg-purple-50",
                                icon:Smartphone
                            }
                        ].map((item,i)=>(
                            <div
                                key={i}
                                className={`group relative rounded-3xl p-8 border ${item.color}
          hover:-translate-y-3 hover:shadow-2xl transition duration-300`}
                            >

                                <div className="flex items-start gap-6">

                                    {/* icon */}
                                    <div className="w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center text-indigo-600 group-hover:scale-110 transition">
                                        <item.icon size={26}/>
                                    </div>

                                    {/* text */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>

                                {/* hover glow border */}
                                <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-indigo-300 transition pointer-events-none"/>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* ================= OUR MOBILE APP PROCESS ================= */}
            <section className="relative min-h-[460px] py-32 overflow-hidden">

                {/* soft background */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 -z-20" />

                {/* subtle glow */}
                <div className="absolute -top-24 left-[-120px] w-[420px] h-[420px] bg-blue-200/30 blur-3xl rounded-full -z-10"/>
                <div className="absolute -bottom-24 right-[-120px] w-[420px] h-[420px] bg-purple-200/30 blur-3xl rounded-full -z-10"/>

                <div className="max-w-7xl mx-auto px-6">

                    {/* heading */}
                    <div className="text-center mb-24">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Our Mobile App Process
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A clear workflow that takes your idea from concept to a published mobile application.
                        </p>
                    </div>

                    {/* process cards */}
                    <div className="relative">

                        {/* connector line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-full"/>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                            {[
                                {
                                    title:"Idea Discussion",
                                    desc:"We understand your app concept, users and core features.",
                                    color:"bg-blue-50 border-blue-100 text-blue-600",
                                    icon:Smartphone
                                },
                                {
                                    title:"UI/UX Design",
                                    desc:"We design app screens and user flows for the best usability.",
                                    color:"bg-indigo-50 border-indigo-100 text-indigo-600",
                                    icon:Layers3
                                },
                                {
                                    title:"App Development",
                                    desc:"We build frontend, backend APIs and app integrations.",
                                    color:"bg-emerald-50 border-emerald-100 text-emerald-600",
                                    icon:Code2
                                },
                                {
                                    title:"Launch & Support",
                                    desc:"We publish to Play Store & App Store and provide support.",
                                    color:"bg-purple-50 border-purple-100 text-purple-600",
                                    icon:Rocket
                                },
                            ].map((step,i)=>(
                                <div
                                    key={i}
                                    className="group relative rounded-3xl p-[1px] hover:-translate-y-4 transition duration-300"
                                >
                                    <div className={`h-full rounded-3xl border ${step.color} p-8 bg-white/90 backdrop-blur-xl hover:shadow-2xl`}>

                                        {/* icon */}
                                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${step.color} group-hover:scale-110 transition`}>
                                            <step.icon size={26}/>
                                        </div>

                                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                            {step.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {step.desc}
                                        </p>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-20 text-center text-white bg-gradient-to-r from-indigo-600 to-blue-600">

                <h2 className="text-3xl font-semibold mb-4">
                    Have a Mobile App Idea?
                </h2>

                <p className="mb-6 text-blue-100">
                    Let Nevatrix turn your idea into a real application used by customers.
                </p>

                <a
                    href="mailto:contact@nevatrix.com"
                    className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:scale-105 transition inline-flex items-center gap-2 shadow-lg"
                >
                    <CheckCircle size={18}/> Get Free Consultation
                </a>
            </section>
        </>
    );
}
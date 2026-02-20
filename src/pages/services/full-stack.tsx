import Image from "next/image";
import SEO from "@/components/SEO";
import {
    Layers,
    Database,
    Server,
    Cpu,
    CheckCircle,
    Rocket,
    Code2,
    Globe, ClipboardList, LayoutDashboard, ShieldCheck, CloudUpload } from "lucide-react";

import type { Metadata } from "next";
import { getPageSEO } from "@/components/seoConfig";

export const metadata: Metadata = getPageSEO("full-stack-development");

export default function FullStackPage() {
    return (
        <>
            <SEO page="full-stack" />

            {/* HERO */}
            <section className="relative min-h-[460px] py-28 overflow-hidden">

                <div className="absolute inset-0">
                    <Image
                        src="/full-stack.jpg"
                        alt="Full stack development services"
                        fill
                        priority
                        className="object-cover opacity-40"
                    />
                </div>
                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* gradient tint (important for premium look) */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-blue-900/30 to-purple-900/40" />


                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    <h1 className="text-5xl font-bold mb-6">
                        Full Stack Development Services
                    </h1>

                    <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
                        We build scalable web applications, SaaS platforms and custom
                        business software using modern frontend and backend technologies.
                    </p>

                </div>
            </section>

            {/* SERVICES */}
            {/* ================= WHAT WE DEVELOP ================= */}
            <section className="relative py-28 overflow-hidden">

                {/* light gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 -z-20" />

                {/* soft glow blobs */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 blur-3xl rounded-full -z-10"/>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200/40 blur-3xl rounded-full -z-10"/>

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                        What We Develop
                    </h2>
                    <p className="text-slate-600">
                        End-to-end application development from UI to backend and deployment.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {[
                        {
                            title:"Frontend Applications",
                            desc:"Modern responsive user interfaces using React & Next.js",
                            icon:Layers,
                            color:"bg-blue-50 text-blue-600 border-blue-100"
                        },
                        {
                            title:"Backend APIs",
                            desc:"Secure and scalable server-side architecture and APIs",
                            icon:Server,
                            color:"bg-indigo-50 text-indigo-600 border-indigo-100"
                        },
                        {
                            title:"Database Systems",
                            desc:"Efficient database design, performance & data management",
                            icon:Database,
                            color:"bg-emerald-50 text-emerald-600 border-emerald-100"
                        },
                        {
                            title:"Cloud Deployment",
                            desc:"Deployment, hosting and scaling using cloud infrastructure",
                            icon:Globe,
                            color:"bg-purple-50 text-purple-600 border-purple-100"
                        },
                    ].map((item,i)=>(
                        <div
                            key={i}
                            className={`group rounded-2xl p-[1px] bg-gradient-to-br from-white to-white hover:shadow-2xl transition duration-300 hover:-translate-y-3`}
                        >
                            <div className={`h-full rounded-2xl p-8 border ${item.color} backdrop-blur-xl`}>

                                {/* icon badge */}
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition`}>
                                    <item.icon size={28}/>
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
            {/* ================= TECHNOLOGY STACK ================= */}
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

            {/* PROCESS */}
            {/* ================= DEVELOPMENT APPROACH ================= */}
            {/* ================= DEVELOPMENT APPROACH ================= */}
            <section className="relative py-32 overflow-hidden">

                {/* soft elegant background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50 -z-20" />

                {/* subtle color glows */}
                <div className="absolute -top-32 -left-32 w-[460px] h-[460px] bg-blue-200/30 blur-3xl rounded-full -z-10"/>
                <div className="absolute -bottom-32 -right-32 w-[460px] h-[460px] bg-purple-200/30 blur-3xl rounded-full -z-10"/>

                <div className="max-w-7xl mx-auto px-6">

                    {/* heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Our Development Approach
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A structured workflow that ensures your application is scalable, secure and maintainable.
                        </p>
                    </div>

                    {/* cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {[
                            {
                                title:"Requirement Analysis",
                                desc:"Understanding business logic, user roles and project objectives.",
                                icon:ClipboardList,
                                color:"from-blue-400/20 to-indigo-400/10",
                                iconbg:"bg-blue-100 text-blue-600"
                            },
                            {
                                title:"UI/UX Planning",
                                desc:"Designing application flow, user experience and interface structure.",
                                icon:LayoutDashboard,
                                color:"from-indigo-400/20 to-purple-400/10",
                                iconbg:"bg-indigo-100 text-indigo-600"
                            },
                            {
                                title:"Secure Development",
                                desc:"Backend APIs, authentication and database architecture implementation.",
                                icon:ShieldCheck,
                                color:"from-emerald-400/20 to-teal-400/10",
                                iconbg:"bg-emerald-100 text-emerald-600"
                            },
                            {
                                title:"Deployment & Support",
                                desc:"Cloud deployment, monitoring and ongoing technical maintenance.",
                                icon:CloudUpload,
                                color:"from-purple-400/20 to-pink-400/10",
                                iconbg:"bg-purple-100 text-purple-600"
                            },
                        ].map((item,i)=>(
                            <div
                                key={i}
                                className={`group relative rounded-3xl p-[1px] bg-gradient-to-br ${item.color}
          hover:-translate-y-3 hover:shadow-2xl transition duration-300`}
                            >
                                {/* inner card */}
                                <div className="h-full rounded-3xl bg-white/80 backdrop-blur-xl border border-white p-8 relative overflow-hidden">

                                    {/* hover edge glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-white/40 via-transparent to-white/40"/>

                                    {/* icon */}
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${item.iconbg} group-hover:scale-110 transition`}>
                                        <item.icon size={28}/>
                                    </div>

                                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* bottom highlight bar */}
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-500"/>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center text-white bg-gradient-to-r from-indigo-600 to-blue-600">

                <h2 className="text-3xl font-semibold mb-4">
                    Have a Startup Idea?
                </h2>

                <p className="mb-6 text-blue-100">
                    Let Nevatrix build your web application or SaaS platform from scratch.
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
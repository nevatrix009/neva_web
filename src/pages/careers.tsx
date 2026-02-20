"use client";

import Image from "next/image";
import {
    Users,
    Laptop,
    Rocket,
    Palette,
    Mail,
    CheckCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function CareersPage() {

    /* ---------- FIX 1: Typed benefits array ---------- */
    const benefits: [string, string, LucideIcon, string][] = [
        ["Modern Tech Stack", "React, Next.js, Cloud & AI Projects", Laptop, "from-blue-500 to-indigo-500"],
        ["Creative Environment", "Design & development innovation culture", Palette, "from-pink-500 to-rose-500"],
        ["Career Growth", "Mentorship & real-world exposure", Rocket, "from-emerald-500 to-teal-500"],
        ["Friendly Team", "Supportive & collaborative workspace", Users, "from-purple-500 to-violet-500"],
    ];

    return (
        <>
            {/* ================= HERO WITH IMAGE ================= */}
            <section className="relative min-h-[460px] py-28 text-center text-white overflow-hidden">

                <div className="absolute inset-0">
                    <Image
                        src="/career.jpg"
                        alt="Nevatrix developers working on software projects"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-blue-900/30 to-purple-900/40" />

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                        Build Your Career at Nevatrix
                    </h1>

                    <p className="text-lg text-slate-100 leading-relaxed max-w-2xl mx-auto">
                        Work on real-world web applications, scalable platforms,
                        and AI-powered products used by global businesses.
                    </p>
                </div>
            </section>

            {/* ================= WHY WORK WITH US ================= */}
            <section className="relative py-24 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/60 via-white to-pink-100/60" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6">

                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-semibold text-nevDark mb-4">
                            Why You’ll Love Working Here
                        </h2>
                        <p className="text-slate-600">
                            Learn modern technologies, work on real products,
                            and grow your career with mentorship and guidance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {benefits.map(([title, desc, Icon, color], i) => (
                            <div key={i}
                                 className="group bg-white/60 backdrop-blur-2xl border border-white/50 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

                                <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center transition group-hover:scale-110`}>
                                    <Icon size={26}/>
                                </div>

                                <h3 className="text-lg font-semibold text-nevDark mb-2">{title}</h3>
                                <p className="text-slate-600 text-sm">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= OPEN POSITIONS ================= */}
            <section className="relative py-24 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />

                <div className="relative max-w-7xl mx-auto px-6">

                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-semibold text-nevDark mb-3">
                            Current Open Positions
                        </h2>
                        <p className="text-slate-600">
                            Explore opportunities and grow your career with Nevatrix.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {[
                            {role:"Frontend Developer", stack:"React / Next.js", exp:"1-3 Years", type:"Remote / Hybrid", color:"from-blue-500 to-indigo-500"},
                            {role:"UI/UX Designer", stack:"Figma / UX", exp:"1-2 Years", type:"Remote", color:"from-pink-500 to-rose-500"},
                            {role:"Backend Developer", stack:"Node.js / PHP / APIs", exp:"2+ Years", type:"Remote / Onsite", color:"from-emerald-500 to-teal-500"},
                        ].map((job,i)=>(
                            <div key={i}
                                 className="group rounded-2xl p-[1px] bg-gradient-to-br from-white/40 to-white/10 hover:from-blue-400/40 hover:to-purple-400/40 transition">

                                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-7 h-full shadow-lg transition group-hover:-translate-y-2 group-hover:shadow-2xl">

                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} text-white flex items-center justify-center mb-5 font-bold`}>
                                        {job.role[0]}
                                    </div>

                                    <h3 className="text-xl font-semibold text-nevDark mb-2">{job.role}</h3>
                                    <p className="text-sm text-slate-600 mb-4">{job.stack}</p>

                                    <div className="text-sm text-slate-500 space-y-1 mb-6">
                                        <p><strong>Experience:</strong> {job.exp}</p>
                                        <p><strong>Work Type:</strong> {job.type}</p>
                                    </div>

                                    <a href="mailto:careers@nevatrix.com"
                                       className="block text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:scale-[1.03] transition">
                                        <Mail size={16} className="inline mr-1"/> Apply Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= HIRING PROCESS ================= */}
            <section className="relative py-28 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-[#eef2ff] via-white to-[#ecfeff]" />
                <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300/20 blur-3xl rounded-full" />
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full" />

                <div className="relative max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold text-nevDark mb-3">
                            Our Hiring Process
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A simple and transparent process designed to understand your skills,
                            thinking approach, and potential — not just your resume.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">

                        {[
                            {step:"01",title:"Apply Online",desc:"Submit your resume and portfolio through our careers page or email.",color:"from-blue-500 to-indigo-500"},
                            {step:"02",title:"Technical Discussion",desc:"We discuss your fundamentals, projects, and problem-solving approach.",color:"from-purple-500 to-pink-500"},
                            {step:"03",title:"Practical Task",desc:"A small real-world task to understand your coding and thinking style.",color:"from-emerald-500 to-teal-500"},
                            {step:"04",title:"Final Selection",desc:"Offer discussion, onboarding guidance, and welcome to the team 🎉",color:"from-orange-500 to-amber-500"},
                        ].map((item,i)=>(
                            <div key={i} className="relative group">

                                {i !== 3 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-slate-300 to-slate-200" />
                                )}

                                <div className="h-full bg-white/70 backdrop-blur-2xl border border-white/60 rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-2xl">

                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-lg font-bold mb-6 shadow-md group-hover:scale-110 transition`}>
                                        {item.step}
                                    </div>

                                    <h3 className="text-xl font-semibold text-nevDark mb-3">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative py-20 text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B5CFF] via-[#7C3AED] to-[#EC4899]" />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative max-w-4xl mx-auto px-6 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold">Ready to Join Nevatrix?</h2>
                    <p className="text-slate-100">
                        Send your resume & portfolio — let’s build something amazing together.
                    </p>

                    <a href="mailto:careers@nevatrix.com"
                       className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-medium hover:scale-105 transition">
                        <CheckCircle size={18}/> Apply Now
                    </a>
                </div>
            </section>
        </>
    );
}
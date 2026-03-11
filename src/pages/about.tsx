"use client";

import Image from "next/image";
import { ShieldCheck, Users, Cpu, TrendingUp } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            {/* ================= HERO ================= */}

            <section className="relative py-28 text-center text-white overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/about-banner.jpg"
                        alt="Nevatrix banner"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-nevBlue/70 to-nevPink/70 -z-10" />

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/50 -z-10" />

                {/* Content */}
                <div className="relative max-w-5xl mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                        About Nevatrix
                    </h1>

                    <p className="text-lg leading-relaxed text-slate-100 drop-shadow">
                        At Nevatrix, we build intelligent, scalable, and future-ready
                        digital solutions that help businesses grow and innovate
                        with confidence.
                    </p>
                </div>

            </section>

            {/* ================= WHO WE ARE ================= */}
            {/* ================= ABOUT SECTION ================= */}
            <section className="relative py-28 overflow-hidden">

                {/* ── Background ── */}
                <div className="absolute inset-0 bg-[#f8f7ff]" />

                {/* Diagonal color split — bottom right */}
                <div className="absolute bottom-0 right-0 w-[55%] h-[60%] bg-gradient-to-tl from-nevBlue/8 via-indigo-50 to-transparent rounded-tl-[120px]" />

                {/* Dot grid texture top-left */}
                <div
                    className="absolute top-0 left-0 w-96 h-96 opacity-30"
                    style={{
                        backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />

                {/* Floating orbs */}
                <div className="absolute top-16 right-[38%] w-64 h-64 bg-nevBlue/10 blur-3xl rounded-full" />
                <div className="absolute bottom-16 left-[10%] w-48 h-48 bg-nevPink/15 blur-2xl rounded-full" />

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* ── Top label ── */}
                    <div className="flex items-center gap-3 mb-12">
                        <div className="h-px w-12 bg-indigo-400" />
                        <span className="text-indigo-500 font-semibold text-sm tracking-widest uppercase">
              Who We Are
            </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* ── LEFT: Text content — spans 7 cols ── */}
                        <div className="lg:col-span-7 space-y-8">

                            <h2 className="text-4xl md:text-5xl font-bold text-nevDark leading-tight">
                                Building Digital Products
                                <br />
                                <span className="relative inline-block">
                  <span className="relative z-10 text-indigo-600">That Actually Work</span>
                                    {/* Underline accent */}
                                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"/>
                  </svg>
                </span>
                            </h2>

                            <p className="text-slate-600 leading-relaxed text-base max-w-xl">
                                Nevatrix is a modern software development company providing
                                custom web application development, SaaS platforms, cloud solutions
                                and AI-powered systems for startups, small businesses and enterprises.
                                We specialize in React and Next.js development to build fast,
                                SEO-optimized and scalable applications.
                            </p>

                            <p className="text-slate-600 leading-relaxed text-base max-w-xl">
                                From idea validation and UI/UX design to development, deployment
                                and maintenance — we help organizations adopt modern technology
                                and grow digitally with long-term confidence.
                            </p>

                            {/* ── Feature pills ── */}
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "React & Next.js",
                                    "SaaS Platforms",
                                    "AI-Powered Systems",
                                    "Cloud Solutions",
                                    "Admin Dashboards",
                                    "SEO-Optimized",
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-indigo-100 text-indigo-700 shadow-sm hover:shadow-md hover:border-indigo-300 transition"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>

                        </div>

                        {/* ── RIGHT: Image stack — spans 5 cols ── */}
                        <div className="lg:col-span-5 relative h-[460px]">

                            {/* Main image */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-transparent to-nevPink/20 z-10" />
                                <Image
                                    src="/about-us.jpg"
                                    alt="Nevatrix software development team working on web and cloud solutions"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            {/* Floating card — top left */}
                            <div className="absolute -top-5 -left-6 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-indigo-50">
                                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                                    N
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 font-medium">Est.</div>
                                    <div className="text-sm font-bold text-slate-800">Since 2012</div>
                                </div>
                            </div>

                            {/* Floating card — bottom right */}
                            <div className="absolute -bottom-5 -right-4 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 border border-pink-50">
                                <div className="flex items-center gap-2 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <div className="text-xs font-semibold text-slate-700">4.9 / 5 Client Rating</div>
                                <div className="text-xs text-slate-400">02 Google Reviews</div>
                            </div>

                            {/* Decorative ring behind image */}
                            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-indigo-200/50 -z-10" />

                        </div>
                    </div>
                </div>
            </section>


            {/* ================= OUR COMMITMENT TO EXCELLENCE ================= */}
            <section className="relative py-28 bg-slate-50 overflow-hidden">

                {/* Soft background glow */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-4xl font-semibold text-slate-900 mb-4">
                            Our Commitment to Excellence
                        </h2>
                        <p className="text-lg text-slate-600">
                            At Nevatrix, excellence is embedded into how we think,
                            build, and deliver every solution.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Card 1 */}
                        <div className="group relative bg-white/80 backdrop-blur-xl
                rounded-2xl p-8 border border-slate-200
                shadow-sm transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl">

                            {/* Accent line */}
                            <div className="absolute inset-x-0 top-0 h-[3px]
                    bg-gradient-to-r from-blue-500 to-indigo-500
                    rounded-t-2xl opacity-70" />

                            {/* Icon */}
                            <div className="w-10 h-10 mb-5 rounded-lg
                    bg-blue-500/10 text-blue-600
                    flex items-center justify-center
                    transition-transform duration-300
                    group-hover:scale-110">
                                <ShieldCheck size={20} />
                            </div>

                            <h3 className="text-xl font-medium text-slate-900 mb-3">
                                Quality-Driven Delivery
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Every solution is engineered with precision, performance,
                                and long-term reliability in mind.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative bg-white/80 backdrop-blur-xl
                rounded-2xl p-8 border border-slate-200
                shadow-sm transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl">

                            <div className="absolute inset-x-0 top-0 h-[3px]
                    bg-gradient-to-r from-purple-500 to-pink-500
                    rounded-t-2xl opacity-70" />

                            <div className="w-10 h-10 mb-5 rounded-lg
                    bg-purple-500/10 text-purple-600
                    flex items-center justify-center
                    transition-transform duration-300
                    group-hover:scale-110">
                                <Users size={20} />
                            </div>

                            <h3 className="text-xl font-medium text-slate-900 mb-3">
                                Transparent Collaboration
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Clear communication, accountability, and trust
                                guide every partnership we build.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative bg-white/80 backdrop-blur-xl
                rounded-2xl p-8 border border-slate-200
                shadow-sm transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl">

                            <div className="absolute inset-x-0 top-0 h-[3px]
                    bg-gradient-to-r from-emerald-500 to-teal-500
                    rounded-t-2xl opacity-70" />

                            <div className="w-10 h-10 mb-5 rounded-lg
                    bg-emerald-500/10 text-emerald-600
                    flex items-center justify-center
                    transition-transform duration-300
                    group-hover:scale-110">
                                <Cpu size={20} />
                            </div>

                            <h3 className="text-xl font-medium text-slate-900 mb-3">
                                Modern Technology Focus
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                We adopt modern frameworks, cloud platforms,
                                and AI-driven technologies to stay future-ready.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative bg-white/80 backdrop-blur-xl
                rounded-2xl p-8 border border-slate-200
                shadow-sm transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl">

                            <div className="absolute inset-x-0 top-0 h-[3px]
                    bg-gradient-to-r from-orange-500 to-amber-500
                    rounded-t-2xl opacity-70" />

                            <div className="w-10 h-10 mb-5 rounded-lg
                    bg-orange-500/10 text-orange-600
                    flex items-center justify-center
                    transition-transform duration-300
                    group-hover:scale-110">
                                <TrendingUp size={20} />
                            </div>

                            <h3 className="text-xl font-medium text-slate-900 mb-3">
                                Continuous Improvement
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                We continuously refine our processes to improve
                                quality, efficiency, and measurable outcomes.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            
            {/* ================= EXPERIENCE ================= */}
            {/* ================= STATS SECTION ================= */}
            <section className="relative py-24 overflow-hidden bg-white">

                {/* Subtle light blobs */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-100/60 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-100/60 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-50/80 blur-3xl rounded-full pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* ── Header ── */}
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-5">
                            <div className="h-px w-10 bg-indigo-300" />
                            <span className="text-indigo-500 font-mono text-xs tracking-[0.3em] uppercase">
                By The Numbers
              </span>
                            <div className="h-px w-10 bg-indigo-300" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
                            Experience That{" "}
                            <span
                                className="text-transparent bg-clip-text"
                                style={{ backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)" }}
                            >
                Delivers
              </span>
                        </h2>
                        <p className="text-slate-500 leading-relaxed text-base">
                            Our experience spans industries, technologies and business models —
                            delivering reliable, scalable and high-quality digital products.
                        </p>
                    </div>

                    {/* ── Stats grid ── */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                num: "100+",
                                label: "Projects Delivered",
                                sub: "Web, mobile & SaaS",
                                cardBg: "from-indigo-50 to-blue-50",
                                cardBorder: "border-indigo-100",
                                grad: "from-indigo-500 to-indigo-600",
                                numColor: "from-indigo-500 to-indigo-700",
                                iconBg: "bg-indigo-100",
                                iconColor: "text-indigo-600",
                                barGrad: "from-indigo-400 to-indigo-600",
                                shadowColor: "hover:shadow-indigo-100",
                                icon: (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                    </svg>
                                ),
                            },
                            {
                                num: "50+",
                                label: "Trusted Clients",
                                sub: "India, USA & Canada",
                                cardBg: "from-purple-50 to-fuchsia-50",
                                cardBorder: "border-purple-100",
                                grad: "from-purple-500 to-purple-600",
                                numColor: "from-purple-500 to-purple-700",
                                iconBg: "bg-purple-100",
                                iconColor: "text-purple-600",
                                barGrad: "from-purple-400 to-purple-600",
                                shadowColor: "hover:shadow-purple-100",
                                icon: (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>
                                ),
                            },
                            {
                                num: "12+",
                                label: "Years Experience",
                                sub: "Since 2012",
                                cardBg: "from-pink-50 to-rose-50",
                                cardBorder: "border-pink-100",
                                grad: "from-pink-500 to-rose-500",
                                numColor: "from-pink-500 to-rose-600",
                                iconBg: "bg-pink-100",
                                iconColor: "text-pink-600",
                                barGrad: "from-pink-400 to-rose-500",
                                shadowColor: "hover:shadow-pink-100",
                                icon: (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                            },
                            {
                                num: "100%",
                                label: "Client Satisfaction",
                                sub: "4.9 / 5 Google rating",
                                cardBg: "from-emerald-50 to-teal-50",
                                cardBorder: "border-emerald-100",
                                grad: "from-emerald-500 to-teal-500",
                                numColor: "from-emerald-500 to-teal-600",
                                iconBg: "bg-emerald-100",
                                iconColor: "text-emerald-600",
                                barGrad: "from-emerald-400 to-teal-500",
                                shadowColor: "hover:shadow-emerald-100",
                                icon: (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                            },
                        ].map((s) => (
                            <div
                                key={s.label}
                                className={`group relative rounded-3xl p-7 flex flex-col justify-between overflow-hidden cursor-default
                  bg-gradient-to-br ${s.cardBg} border ${s.cardBorder}
                  shadow-sm hover:shadow-xl ${s.shadowColor}
                  transition-all duration-300 hover:-translate-y-2`}
                            >
                                {/* Corner blob */}
                                <div className={`absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br ${s.grad} blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-500 rounded-full`} />

                                {/* Icon */}
                                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-6 ${s.iconBg} ${s.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                    {s.icon}
                                </div>

                                {/* Number */}
                                <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${s.numColor} tracking-tight`}>
                                    {s.num}
                                </div>

                                {/* Label */}
                                <div className="text-slate-800 font-semibold text-base mt-2">{s.label}</div>

                                {/* Sub */}
                                <div className="text-slate-400 text-xs mt-1 font-mono tracking-wide">{s.sub}</div>

                                {/* Animated bottom bar */}
                                <div className={`mt-6 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r ${s.barGrad}`} />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= CREDIBILITY STRIP ================= */}
            {/* ================= WHY NEVATRIX SECTION ================= */}
            <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/40">

                {/* Soft background blobs */}
                <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-100/50 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-100/40 blur-3xl rounded-full pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* ── Header ── */}
                    <div className="mb-14">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-10 bg-indigo-400" />
                            <span className="text-indigo-500 font-mono text-xs tracking-[0.3em] uppercase">Why Choose Us</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight max-w-2xl">
                            Built Different.{" "}
                            <span
                                className="text-transparent bg-clip-text"
                                style={{ backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 60%, #ec4899 100%)" }}
                            >
                Delivered Right.
              </span>
                        </h2>
                    </div>

                    {/* ── BENTO GRID ── */}
                    <div className="grid grid-cols-12 gap-4">

                        {/* Card 1 — Proven Expertise — large, 5 cols */}
                        <div className="col-span-12 md:col-span-5 group relative rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 transition-all duration-300">
                            {/* Hover fill */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                            {/* Corner accent */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200/40 blur-2xl rounded-full group-hover:bg-indigo-300/50 transition-colors duration-500" />

                            {/* Icon badge */}
                            <div className="w-12 h-12 rounded-2xl bg-indigo-100 group-hover:bg-indigo-500 flex items-center justify-center text-indigo-600 group-hover:text-white transition-all duration-300 mb-6 shadow-sm group-hover:shadow-lg group-hover:shadow-indigo-200">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                                Proven Expertise
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                Delivering reliable, enterprise-grade applications with modern architectures,
                                performance optimization, and long-term maintainability.
                            </p>

                            {/* Animated pill tags */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {["React", "Next.js", "Node.js", "AWS"].map((t) => (
                                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100/80 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    {t}
                  </span>
                                ))}
                            </div>

                            {/* Bottom bar */}
                            <div className="mt-6 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600" />
                        </div>

                        {/* Card 2 — Why Nevatrix — tall, 4 cols */}
                        <div className="col-span-12 md:col-span-4 group relative rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-sm hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200/40 blur-2xl rounded-full group-hover:bg-purple-300/50 transition-colors duration-500" />

                            <div className="w-12 h-12 rounded-2xl bg-purple-100 group-hover:bg-purple-500 flex items-center justify-center text-purple-600 group-hover:text-white transition-all duration-300 mb-6 shadow-sm group-hover:shadow-lg group-hover:shadow-purple-200">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                                Why Nevatrix
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                Clean architecture, scalable systems, and transparent collaboration.
                                We partner with clients — not just build software.
                            </p>

                            {/* Checklist */}
                            <ul className="mt-6 space-y-2">
                                {["Clean Code", "On-time Delivery", "Post-launch Support"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-200">
                                        <div className="w-4 h-4 rounded-full bg-purple-100 group-hover:bg-purple-500 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                            <svg className="w-2.5 h-2.5 text-purple-500 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r from-purple-400 to-purple-600" />
                        </div>

                        {/* Card 3 — Global Impact — 3 cols, tall */}
                        <div className="col-span-12 md:col-span-3 group relative rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-pink-50 to-white border border-pink-100 shadow-sm hover:shadow-2xl hover:shadow-pink-100 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200/40 blur-2xl rounded-full group-hover:bg-pink-300/50 transition-colors duration-500" />

                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-pink-100 group-hover:bg-pink-500 flex items-center justify-center text-pink-600 group-hover:text-white transition-all duration-300 mb-6 shadow-sm group-hover:shadow-lg group-hover:shadow-pink-200">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                                    Global Impact
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    100+ solutions delivered across startups, enterprises and growing businesses worldwide.
                                </p>
                            </div>

                            {/* Big stat */}
                            <div className="mt-8 text-center">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-rose-600">
                                    100+
                                </div>
                                <div className="text-xs text-slate-400 font-mono mt-1 tracking-wide">Projects worldwide</div>
                            </div>

                            <div className="mt-6 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r from-pink-400 to-rose-500" />
                        </div>

                        {/* Card 4 — Innovative Approach — 6 cols wide, short */}
                        <div className="col-span-12 md:col-span-6 group relative rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-200/40 blur-2xl rounded-full group-hover:bg-cyan-300/50 transition-colors duration-500" />

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-cyan-100 group-hover:bg-cyan-500 flex items-center justify-center text-cyan-600 group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm group-hover:shadow-lg group-hover:shadow-cyan-200">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors duration-300">
                                        Innovative Approach
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed text-sm">
                                        We leverage React, Next.js, cloud platforms, and AI-powered workflows
                                        to create scalable and future-ready platforms.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {["AI-Powered", "Cloud-Native", "Future-Ready"].map((t) => (
                                            <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-100/80 text-cyan-700 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                        {t}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600" />
                        </div>

                        {/* Card 5 — Dedicated Team — 6 cols wide, short */}
                        <div className="col-span-12 md:col-span-6 group relative rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200/40 blur-2xl rounded-full group-hover:bg-emerald-300/50 transition-colors duration-500" />

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-100 group-hover:bg-emerald-500 flex items-center justify-center text-emerald-600 group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm group-hover:shadow-lg group-hover:shadow-emerald-200">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                                        Dedicated Team
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed text-sm">
                                        A passionate team of engineers, designers, and strategists
                                        committed to building long-term value and dependable partnerships.
                                    </p>
                                    {/* Avatar stack */}
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="flex -space-x-2">
                                            {["E", "D", "S", "A"].map((l, i) => (
                                                <div
                                                    key={i}
                                                    className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white group-hover:scale-110 transition-transform duration-300"
                                                    style={{
                                                        background: ["#6366f1","#a855f7","#ec4899","#10b981"][i],
                                                        transitionDelay: `${i * 40}ms`
                                                    }}
                                                >
                                                    {l}
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-xs text-slate-400 font-mono">Engineers · Designers · Strategists</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" />
                        </div>

                    </div>
                    {/* END BENTO */}

                </div>
            </section>

            {/* ================= WHY CHOOSE NEVATRIX ================= */}
            <section className="relative py-28 overflow-hidden">

                {/* COLORFUL BACKGROUND */}
                <div className="absolute inset-0 bg-gradient-to-br from-nevBlue/15 via-white to-nevPink/15" />

                {/* floating blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-nevBlue/20 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-nevPink/20 rounded-full blur-[120px]" />
                <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-[120px]" />

                <div className="relative max-w-7xl mx-auto px-4">

                    {/* HEADING (SEO IMPORTANT) */}
                    <div className="max-w-3xl mx-auto text-center mb-16">

                        <h2 className="text-3xl font-semibold text-nevDark mb-4">
                            Custom Software & Web Development Company
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed">
                            Nevatrix is a modern software development company specializing in
                            web applications, SaaS platforms, AI-powered systems, and scalable
                            cloud solutions. We help startups and enterprises build reliable,
                            high-performance digital products.
                        </p>
                    </div>


                    {/* FEATURE GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1 */}
                        <div className="group bg-white/80 backdrop-blur-xl
                border border-blue-100 rounded-2xl p-8
                shadow-sm transition-all duration-300
                hover:-translate-y-3 hover:shadow-2xl">

                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500
                    flex items-center justify-center text-white mb-6
                    transition group-hover:scale-110">
                                ⚙️
                            </div>

                            <h3 className="text-lg font-semibold text-nevDark mb-2">
                                Custom Software Development
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed">
                                We design and develop custom software solutions tailored
                                to your business workflows, automations, and operational needs.
                            </p>
                        </div>


                        {/* Card 2 */}
                        <div className="group bg-white/80 backdrop-blur-xl
                border border-purple-100 rounded-2xl p-8
                shadow-sm transition-all duration-300
                hover:-translate-y-3 hover:shadow-2xl">

                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500
                    flex items-center justify-center text-white mb-6
                    transition group-hover:scale-110">
                                🌐
                            </div>

                            <h3 className="text-lg font-semibold text-nevDark mb-2">
                                Web Application Development
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed">
                                High-performance web applications using React, Next.js,
                                and modern UI frameworks optimized for SEO and speed.
                            </p>
                        </div>


                        {/* Card 3 */}
                        <div className="group bg-white/80 backdrop-blur-xl
                border border-emerald-100 rounded-2xl p-8
                shadow-sm transition-all duration-300
                hover:-translate-y-3 hover:shadow-2xl">

                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500
                    flex items-center justify-center text-white mb-6
                    transition group-hover:scale-110">
                                ☁️
                            </div>

                            <h3 className="text-lg font-semibold text-nevDark mb-2">
                                Scalable Cloud Architecture
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed">
                                Secure and scalable infrastructure deployment on cloud
                                platforms with performance monitoring and CI/CD pipelines.
                            </p>
                        </div>


                        {/* Card 4 */}
                        <div className="group bg-white/80 backdrop-blur-xl
                border border-orange-100 rounded-2xl p-8
                shadow-sm transition-all duration-300
                hover:-translate-y-3 hover:shadow-2xl">

                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500
                    flex items-center justify-center text-white mb-6
                    transition group-hover:scale-110">
                                🤖
                            </div>

                            <h3 className="text-lg font-semibold text-nevDark mb-2">
                                AI & Automation Solutions
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed">
                                Integrating AI, automation workflows, and analytics dashboards
                                to improve productivity and decision making.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= CTA ================= */}
            <section className="relative py-20 text-center text-white overflow-hidden">

                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2BB0E6] to-[#E94BB8]" />

                {/* Dark Overlay for Contrast */}
                <div className="absolute inset-0 bg-black/45" />

                <div className="relative max-w-7xl mx-auto px-6 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold drop-shadow-lg">
                        Ready to transform your digital presence?
                    </h2>

                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center
                        bg-white text-black
                        px-8 py-3 rounded-lg font-medium
                        transition-all duration-300
                        hover:shadow-xl hover:scale-[1.03]"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

        </>
    );
}

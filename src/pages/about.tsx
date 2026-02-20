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
            <section className="relative py-24 overflow-hidden">

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-nevBlue/10 via-white to-nevPink/10" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nevBlue/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-nevPink/20 rounded-full blur-[120px]" />

                <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* TEXT CONTENT */}
                    <div>
                        <h2 className="text-3xl font-semibold text-nevDark mb-5">
                            About Nevatrix – Software Development & Digital Solutions Company
                        </h2>

                        <p className="text-slate-700 mb-5 leading-relaxed text-justify">
                            Nevatrix is a modern software development company providing
                            custom web application development, SaaS platforms, cloud solutions,
                            and AI-powered systems for startups, small businesses, and enterprises.
                            We specialize in React and Next.js development to build fast,
                            SEO-optimized, and scalable applications.
                        </p>

                        <p className="text-slate-700 mb-5 leading-relaxed text-justify">
                            Our team designs and develops secure, high-performance digital products
                            including business management systems, admin dashboards, enterprise portals,
                            and automation tools that improve operational efficiency.
                        </p>

                        <p className="text-slate-700 leading-relaxed text-justify">
                            At Nevatrix, we focus on long-term partnerships. From idea validation
                            and UI/UX design to development, deployment, and maintenance,
                            we help organizations adopt modern technology and grow digitally
                            with confidence.
                        </p>
                    </div>


                    {/* IMAGE */}
                    <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-2xl">

                        {/* image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-nevBlue/40 via-transparent to-nevPink/30 z-10" />

                        <Image
                            src="/about-us.jpg"
                            alt="Nevatrix software development team working on web and cloud solutions"
                            fill
                            priority
                            className="object-cover"
                        />
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
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 space-y-10 text-center">
                    <h2 className="text-3xl font-semibold text-nevDark">
                        Experience That Delivers
                    </h2>
                    <p className="max-w-4xl mx-auto text-slate-700 leading-relaxed">
                        Our experience spans across industries, technologies,
                        and business models — delivering reliable, scalable,
                        and high-quality digital products.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            ["100+", "Projects Delivered"],
                            ["50+", "Trusted Clients"],
                            ["10+", "Years of Experience"],
                            ["100%", "Client Satisfaction"],
                        ].map(([num, label]) => (
                            <div
                                key={label}
                                className="bg-gradient-to-br from-blue-50 to-white
                                border border-blue-100 rounded-xl p-6 shadow-sm
                                transition hover:shadow-md"
                            >
                                <h3 className="text-4xl font-bold text-nevBlue">
                                    {num}
                                </h3>
                                <p className="text-sm text-slate-700 mt-1">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CREDIBILITY STRIP ================= */}
            <section className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP ROW */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Proven Expertise */}
                        <div className="group bg-gradient-to-br from-indigo-50 via-white to-indigo-50
                border border-indigo-100 rounded-2xl p-8 shadow-sm
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300">

                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Proven Expertise
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                Delivering reliable, enterprise-grade applications with modern
                                architectures, performance optimization, and long-term maintainability.
                            </p>

                            <div className="mt-6 h-28 rounded-lg
                    bg-gradient-to-br from-indigo-100 to-indigo-50
                    flex items-center justify-center text-sm text-indigo-700 font-medium
                    group-hover:scale-105 transition">
                                Global Client Presence
                            </div>
                        </div>


                        {/* Why Nevatrix */}
                        <div className="group bg-gradient-to-br from-sky-50 via-white to-blue-50
                border border-blue-100 rounded-2xl p-8 shadow-sm
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300">

                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Why Nevatrix
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                Nevatrix focuses on clean architecture, scalable systems,
                                and transparent collaboration. We partner with clients,
                                not just build software.
                            </p>

                            <div className="mt-6 h-28 rounded-lg
                    bg-gradient-to-br from-blue-100 to-sky-50
                    flex items-center justify-center text-sm text-blue-700 font-medium
                    group-hover:scale-105 transition">
                                Client-First Approach
                            </div>
                        </div>


                        {/* Global Impact */}
                        <div className="group bg-gradient-to-br from-violet-50 via-white to-purple-50
                border border-purple-100 rounded-2xl p-8 shadow-sm
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-300">

                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Global Impact
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                Successfully delivered
                                <span className="font-semibold text-slate-900"> 100+ </span>
                                solutions across startups, enterprises, and growing businesses.
                            </p>

                            <div className="mt-6 h-28 rounded-lg
                    bg-gradient-to-br from-purple-100 to-violet-50
                    flex items-center justify-center text-sm text-purple-700 font-medium
                    group-hover:scale-105 transition">
                                Enterprise Delivery
                            </div>
                        </div>

                    </div>


                    {/* BOTTOM ROW */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

                        {/* Innovation */}
                        <div className="group bg-gradient-to-br from-cyan-50 via-white to-nevBlue/5
                border border-cyan-100 rounded-2xl p-8 shadow-sm
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-cyan-300">

                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Innovative Approach
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                We leverage React, Next.js, cloud platforms, and AI-powered workflows
                                to create scalable and future-ready platforms.
                            </p>
                        </div>


                        {/* Team */}
                        <div className="group bg-gradient-to-br from-emerald-50 via-white to-teal-50
                border border-emerald-100 rounded-2xl p-8 shadow-sm
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-300">

                            <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                Dedicated Team
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                A passionate team of engineers, designers, and strategists
                                committed to building long-term value and dependable partnerships.
                            </p>
                        </div>

                    </div>

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

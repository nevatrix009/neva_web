"use client";

import Image from "next/image";
import { Mail, Briefcase, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            {/* ========================= */}
            {/* CONTACT BANNER */}
            {/* ========================= */}
            <section className="relative h-[420px] md:h-[480px] w-full overflow-hidden">

                {/* Background Image */}
                <Image
                    src="/contact.jpg" // replace with your banner image
                    alt="Contact Nevatrix"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Glass Card */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-6 w-full flex justify-center">
                        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-10 md:p-14 max-w-3xl shadow-2xl text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Get in Touch with{" "}
                                <span className="text-nevPrimary">Nevatrix</span>
                            </h1>

                            <p className="text-slate-200 text-lg leading-relaxed">
                                We’d love to hear from you. Fill out the form below
                                or connect with our team to discuss how we can help
                                bring your ideas to life.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            {/* ========================= */}
            {/* CONTACT CONTENT */}
            {/* ========================= */}
            <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 py-20 overflow-hidden">

                {/* Decorative Background Blobs */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-14">

                        {/* LEFT — CONTACT OPTIONS */}
                        <div className="space-y-8 animate-fade-up">

                            {/* Inquiry */}
                            <div className="group relative flex items-center gap-4 p-6 rounded-xl
        bg-gradient-to-br from-blue-50 to-white
        border border-blue-100
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-md hover:border-blue-300">

                                <div className="w-12 h-12 rounded-lg
            bg-gradient-to-br from-blue-500 to-indigo-500
            flex items-center justify-center shrink-0
            transition-transform duration-300 group-hover:scale-105">
                                    <Mail size={22} className="text-white" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        General Inquiry
                                    </h3>
                                    <p className="text-sm text-slate-600 mt-1">
                                        Have a question? Reach out to us anytime.
                                    </p>
                                    <p className="text-sm text-slate-800 mt-2">
                                        info@nevatrix.com
                                    </p>
                                </div>
                            </div>

                            {/* Work With Us */}
                            <div className="group relative flex items-center gap-4 p-6 rounded-xl
        bg-gradient-to-br from-purple-50 to-white
        border border-purple-100
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-md hover:border-purple-300">

                                <div className="w-12 h-12 rounded-lg
            bg-gradient-to-br from-purple-500 to-pink-500
            flex items-center justify-center shrink-0
            transition-transform duration-300 group-hover:scale-105">
                                    <Briefcase size={22} className="text-white" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Work With Us
                                    </h3>
                                    <p className="text-sm text-slate-600 mt-1">
                                        Partnerships & career opportunities.
                                    </p>
                                    <p className="text-sm text-slate-800 mt-2">
                                        careers@nevatrix.com
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="group relative flex items-center gap-4 p-6 rounded-xl
                                bg-gradient-to-br from-emerald-50 to-white
                                border border-emerald-100
                                shadow-sm transition-all duration-300
                                hover:-translate-y-1 hover:shadow-md hover:border-emerald-300">

                                <div className="w-12 h-12 rounded-lg
                                    bg-gradient-to-br from-emerald-500 to-teal-500
                                    flex items-center justify-center shrink-0
                                    transition-transform duration-300 group-hover:scale-105">
                                    <Phone size={22} className="text-white" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Call Us
                                    </h3>
                                    <p className="text-sm text-slate-600 mt-1">
                                        Speak directly with our team.
                                    </p>
                                    <p className="text-sm text-slate-800 mt-2">
                                        +91 99891 83654
                                    </p>
                                </div>
                            </div>

                        </div>


                        {/* RIGHT — CONTACT FORM */}
                        <div className="bg-white p-10 rounded-2xl shadow-lg animate-fade-left">
                            <h2 className="text-2xl font-semibold text-slate-900 mb-8">
                                Let’s talk about your project
                            </h2>

                            <form name="Contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-6">

                                {/* NAME */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your full name"
                                        className="w-full rounded-lg
                                        bg-slate-50 border border-slate-300
                                        px-4 py-3
                                        transition-all duration-300
                                        focus:outline-none focus:bg-white
                                        focus:border-nevBlue focus:ring-2 focus:ring-nevBlue/30"
                                    />
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        className="w-full rounded-lg
                                        bg-slate-50 border border-slate-300
                                        px-4 py-3
                                        transition-all duration-300
                                        focus:outline-none focus:bg-white
                                        focus:border-nevPink focus:ring-2 focus:ring-nevPink/30"
                                    />
                                </div>

                                {/* PHONE */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full rounded-lg
                                        bg-slate-50 border border-slate-300
                                        px-4 py-3
                                        transition-all duration-300
                                        focus:outline-none focus:bg-white
                                        focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
                                    />
                                </div>

                                {/* SERVICE */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Service
                                    </label>
                                    <select
                                        className="w-full rounded-lg
                                        bg-slate-50 border border-slate-300
                                        px-4 py-3
                                        transition-all duration-300
                                        focus:outline-none focus:bg-white
                                        focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                                    >
                                        <option>Select a service</option>
                                        <option>Web Development</option>
                                        <option>Full Stack Development</option>
                                        <option>Mobile App Development</option>
                                        <option>AI & ML</option>
                                        <option>Digital Marketing</option>
                                    </select>
                                </div>

                                {/* COUNTRY */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Country
                                    </label>
                                    <select
                                        className="w-full rounded-lg
                                        bg-slate-50 border border-slate-300
                                        px-4 py-3
                                        transition-all duration-300
                                        focus:outline-none focus:bg-white
                                        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
                                    >
                                        <option>Select country</option>
                                        <option>India</option>
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                        <option>Australia</option>
                                    </select>
                                </div>

                                {/* MESSAGE */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your project…"
                                        className="w-full rounded-lg
                                        bg-slate-50 border border-slate-300
                                        px-4 py-3
                                        transition-all duration-300
                                        focus:outline-none focus:bg-white
                                        focus:border-nevBlue focus:ring-2 focus:ring-nevBlue/30"
                                    />
                                </div>

                                {/* SUBMIT */}
                                <button
                                    type="submit"
                                    className="w-full md:w-auto
                                    bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                                    text-white px-8 py-3 rounded-lg font-medium
                                    transition-all duration-300
                                    hover:shadow-xl hover:scale-[1.02]
                                    focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                                >
                                    Submit Request
                                </button>

                            </form>

                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

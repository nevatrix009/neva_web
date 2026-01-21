import { Monitor, BrainCircuit, Smartphone, Megaphone } from "lucide-react";

export default function WhatWeDo() {
    return (
        <section className="bg-white py-28">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

                {/* LEFT CONTENT */}
                <div className="lg:col-span-2">
                    <h2 className="text-4xl font-semibold text-slate-900">
                        What We Do
                    </h2>

                    <p className="mt-4 text-slate-600 max-w-xl">
                        Take a look at our services — designed to help businesses
                        build, scale, and grow with modern digital solutions.
                    </p>

                    {/* SERVICES GRID */}
                    <div className="mt-14 grid md:grid-cols-2 gap-12">

                        {/* CARD 1 */}
                        <div className="group relative bg-white rounded-2xl p-8
              border border-slate-200
              shadow-sm hover:shadow-xl
              hover:-translate-y-1
              transition-all duration-300">

                            {/* Default decorative line */}
                            <div className="absolute left-0 top-6 bottom-6 w-[3px]
                bg-gradient-to-b from-pink-400/40 to-transparent
                rounded-full" />

                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 rounded-2xl opacity-0
                group-hover:opacity-100 transition
                bg-gradient-to-br from-pink-50 via-transparent to-transparent" />

                            <div className="relative">
                                <div className="w-14 h-14 rounded-full
                  bg-pink-100 text-pink-600
                  ring-4 ring-pink-100/40
                  flex items-center justify-center
                  group-hover:scale-110 transition">
                                    <Monitor size={26} />
                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                    Web Development
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600 text-justify">
                                    Design and develop high-performance, SEO-friendly websites
                                    that attract customers and grow your digital presence.
                                </p>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="group relative bg-white rounded-2xl p-8
              border border-slate-200
              shadow-sm hover:shadow-xl
              hover:-translate-y-1
              transition-all duration-300">

                            <div className="absolute left-0 top-6 bottom-6 w-[3px]
                bg-gradient-to-b from-orange-400/40 to-transparent
                rounded-full" />

                            <div className="absolute inset-0 rounded-2xl opacity-0
                group-hover:opacity-100 transition
                bg-gradient-to-br from-orange-50 via-transparent to-transparent" />

                            <div className="relative">
                                <div className="w-14 h-14 rounded-full
                  bg-orange-100 text-orange-600
                  ring-4 ring-orange-100/40
                  flex items-center justify-center
                  group-hover:scale-110 transition">
                                    <BrainCircuit size={26} />
                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                    AI-Driven Software Development
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600 text-justify">
                                    Intelligent software solutions powered by AI, automation,
                                    and data-driven insights to accelerate business growth.
                                </p>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="group relative bg-white rounded-2xl p-8
              border border-slate-200
              shadow-sm hover:shadow-xl
              hover:-translate-y-1
              transition-all duration-300">

                            <div className="absolute left-0 top-6 bottom-6 w-[3px]
                bg-gradient-to-b from-sky-400/40 to-transparent
                rounded-full" />

                            <div className="absolute inset-0 rounded-2xl opacity-0
                group-hover:opacity-100 transition
                bg-gradient-to-br from-sky-50 via-transparent to-transparent" />

                            <div className="relative">
                                <div className="w-14 h-14 rounded-full
                  bg-sky-100 text-sky-600
                  ring-4 ring-sky-100/40
                  flex items-center justify-center
                  group-hover:scale-110 transition">
                                    <Smartphone size={26} />
                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                    Mobile Applications
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600 text-justify">
                                    User-friendly Android and iOS applications that enhance
                                    engagement and deliver seamless experiences.
                                </p>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="group relative bg-white rounded-2xl p-8
              border border-slate-200
              shadow-sm hover:shadow-xl
              hover:-translate-y-1
              transition-all duration-300">

                            <div className="absolute left-0 top-6 bottom-6 w-[3px]
                bg-gradient-to-b from-green-400/40 to-transparent
                rounded-full" />

                            <div className="absolute inset-0 rounded-2xl opacity-0
                group-hover:opacity-100 transition
                bg-gradient-to-br from-green-50 via-transparent to-transparent" />

                            <div className="relative">
                                <div className="w-14 h-14 rounded-full
                  bg-green-100 text-green-600
                  ring-4 ring-green-100/40
                  flex items-center justify-center
                  group-hover:scale-110 transition">
                                    <Megaphone size={26} />
                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                    Digital Marketing
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600 text-justify">
                                    SEO, performance marketing, and digital strategies that
                                    increase visibility, traffic, and conversions.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-gradient-to-br from-pink-500 via-orange-400 to-sky-500 rounded-2xl p-8 text-white shadow-xl">

                        <h3 className="text-2xl font-semibold">
                            Get Instant Quote
                        </h3>

                        <form className="mt-8 space-y-5">
                            <input
                                type="text"
                                placeholder="Your Name*"
                                className="w-full bg-transparent border-b border-white/50 placeholder-white/70 py-2 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email Address*"
                                className="w-full bg-transparent border-b border-white/50 placeholder-white/70 py-2 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Company"
                                className="w-full bg-transparent border-b border-white/50 placeholder-white/70 py-2 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Mobile No*"
                                className="w-full bg-transparent border-b border-white/50 placeholder-white/70 py-2 focus:outline-none"
                            />
                            <select
                                className="w-full bg-transparent border-b border-white/50 text-white py-2 focus:outline-none"
                            >
                                <option className="text-slate-900">Select Service</option>
                                <option className="text-slate-900">Web Development</option>
                                <option className="text-slate-900">AI Solutions</option>
                                <option className="text-slate-900">UI/UX Design</option>
                                <option className="text-slate-900">Digital Marketing</option>
                            </select>
                            <textarea
                                placeholder="Comments"
                                className="w-full bg-transparent border-b border-white/50 placeholder-white/70 py-2 focus:outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full mt-6 bg-white text-slate-900 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition"
                            >
                                Submit Request
                            </button>
                        </form>

                    </div>
                </div>

            </div>
        </section>
    );
}

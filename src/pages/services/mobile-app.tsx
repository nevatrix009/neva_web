import { useState } from "react";
import Image from "next/image";
import {
    Smartphone,
    Layers3,
    Rocket,
    ShieldCheck,
    Workflow,
    Code2,
    CheckCircle,
    Zap,
    Store,
    RefreshCw,
    HeadphonesIcon,
    ChevronDown,
} from "lucide-react";
import SEO from "@/components/SEO";

/* ─────────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────────── */
const faqs = [
    {
        q: "Which is the best mobile app development company in India?",
        a: "Nevatrix is a trusted mobile app development company in India, building Android and iOS applications for startups and businesses using React Native and Flutter. We have delivered apps across ecommerce, on-demand services, healthcare and business management for clients across India, USA and Canada.",
    },
    {
        q: "How much does it cost to build a mobile app in India?",
        a: "Mobile app development costs in India vary based on complexity, platform and features. A simple MVP app typically starts from ₹1,50,000 to ₹3,00,000. A full-featured Android and iOS app can range from ₹3,00,000 to ₹12,00,000+. Contact Nevatrix for a free project estimate based on your specific requirements.",
    },
    {
        q: "Does Nevatrix build Android and iOS apps?",
        a: "Yes. Nevatrix builds apps for both Android and iOS platforms using React Native and Flutter — cross-platform technologies that allow us to build once and deploy to both Google Play Store and Apple App Store, reducing development time and cost significantly.",
    },
    {
        q: "What is React Native and why is it used for mobile apps?",
        a: "React Native is a framework by Meta (Facebook) that lets developers build real native Android and iOS apps using JavaScript and React. It shares ~85% of code across platforms, resulting in faster development, lower cost and consistent performance on both Android and iOS — which is why Nevatrix recommends it for most business mobile app projects.",
    },
    {
        q: "How long does it take to develop a mobile app?",
        a: "A simple MVP mobile app typically takes 6–10 weeks. A full-featured app with backend, admin panel and third-party integrations usually takes 3–5 months. The timeline depends on the number of screens, features, API integrations and revision cycles.",
    },
    {
        q: "Will Nevatrix help publish my app to Google Play and App Store?",
        a: "Yes. Nevatrix handles the complete app store submission process — including setting up developer accounts, preparing store listing assets, meeting Apple and Google submission guidelines, and publishing your app to both the Google Play Store and Apple App Store.",
    },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function MobileAppPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);


    return (
        <>
            <SEO page="mobile-app" />
            {/* ══════════════════════════════════════
                HERO
            ══════════════════════════════════════ */}
            <section className="relative min-h-[460px] py-28 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/mobile-app.jpg"
                        // ✅ FIXED: keyword-rich alt
                        alt="Mobile app development company India - Android and iOS apps by Nevatrix"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-blue-900/30 to-purple-900/40" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    {/* ✅ FIXED: H1 targets primary keyword */}
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Mobile Application Development
                    </h1>
                    <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
                        Nevatrix designs and develops scalable Android and iOS mobile applications
                        for startups and businesses across India, USA and Canada — using
                        React Native and Flutter for fast, cost-effective cross-platform delivery.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════════
                APPS WE BUILD
            ══════════════════════════════════════ */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 -z-20" />
                <div className="absolute -top-24 left-[-120px] w-[420px] h-[420px] bg-blue-200/35 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-24 right-[-120px] w-[420px] h-[420px] bg-purple-200/35 blur-3xl rounded-full -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Mobile Apps We Build
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            From startup MVPs to full-scale business platforms — we build
                            cross-platform Android and iOS apps tailored to your industry and goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                title: "Startup MVP Apps",
                                // ✅ FIXED: expanded from 1 sentence to full description
                                desc: "We help startups validate their idea quickly with a production-ready MVP app built for Android and iOS. Clean architecture ensures the MVP can scale into a full product without rebuilding.",
                                icon: Layers3,
                                card: "from-blue-100/70 to-blue-50",
                                iconbg: "bg-blue-600",
                            },
                            {
                                title: "Business Applications",
                                desc: "Custom internal apps for employee management, field operations, workflow automation and real-time dashboards — built to integrate with your existing systems and data.",
                                icon: Workflow,
                                card: "from-indigo-100/70 to-indigo-50",
                                iconbg: "bg-indigo-600",
                            },
                            {
                                title: "Ecommerce Apps",
                                desc: "Feature-rich mobile shopping apps with product catalogs, cart, Razorpay/Stripe payments, order tracking, push notifications and admin dashboard — built for Android and iOS.",
                                icon: Smartphone,
                                card: "from-emerald-100/70 to-emerald-50",
                                iconbg: "bg-emerald-600",
                            },
                            {
                                title: "On-Demand Apps",
                                desc: "Real-time service apps for booking, delivery, ride-sharing and marketplace platforms — with GPS tracking, live updates, driver/provider panels and customer apps.",
                                icon: Code2,
                                card: "from-purple-100/70 to-purple-50",
                                iconbg: "bg-purple-600",
                            },
                        ].map((item, i) => (
                            <div key={i} className={`group relative rounded-3xl p-[1px] bg-gradient-to-br ${item.card} hover:-translate-y-4 hover:shadow-2xl transition duration-300`}>
                                <div className="h-full rounded-3xl backdrop-blur-xl bg-white/60 p-8 border border-white/70">
                                    <div className={`w-14 h-14 rounded-2xl ${item.iconbg} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition`}>
                                        <item.icon size={26} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed text-justify">{item.desc}</p>
                                    <div className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                TECH STACK  ✅ NEW SECTION
            ══════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                        Technologies We Use
                    </h2>
                    <p className="text-slate-600 mb-14 max-w-xl mx-auto">
                        We use React Native and Flutter for cross-platform Android and iOS
                        development — with Node.js backends and cloud infrastructure.
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
                        {[
                            {
                                title: "React Native",
                                desc: "Meta's cross-platform framework for building real native Android and iOS apps with JavaScript and React — used by Facebook, Instagram and Shopify.",
                                bg: "bg-blue-50 text-blue-600",
                                icon: Code2,
                            },
                            {
                                title: "Flutter",
                                desc: "Google's UI toolkit for building natively compiled Android, iOS and web apps from a single codebase — ideal for pixel-perfect custom UI designs.",
                                bg: "bg-indigo-50 text-indigo-600",
                                icon: Layers3,
                            },
                            {
                                title: "Node.js Backend",
                                desc: "Scalable REST APIs and real-time backends for your mobile app — with authentication, push notifications, file storage and payment integrations.",
                                bg: "bg-emerald-50 text-emerald-600",
                                icon: RefreshCw,
                            },
                            {
                                title: "Push Notifications",
                                desc: "Firebase Cloud Messaging (FCM) integration for real-time push notifications on Android and iOS — order updates, alerts, marketing messages.",
                                bg: "bg-orange-50 text-orange-600",
                                icon: Zap,
                            },
                            {
                                title: "App Store Publishing",
                                desc: "Complete submission to Google Play Store and Apple App Store — including store listing, screenshots, metadata and guideline compliance.",
                                bg: "bg-purple-50 text-purple-600",
                                icon: Store,
                            },
                            {
                                title: "Ongoing Support",
                                desc: "Post-launch bug fixes, OS update compatibility, feature additions and performance monitoring to keep your app healthy and up-to-date.",
                                bg: "bg-pink-50 text-pink-600",
                                icon: HeadphonesIcon,
                            },
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
                WHY CHOOSE OUR APPS
            ══════════════════════════════════════ */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-indigo-50 -z-20" />
                <div className="absolute -top-24 left-[-120px] w-[420px] h-[420px] bg-blue-200/30 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-24 right-[-120px] w-[420px] h-[420px] bg-indigo-200/30 blur-3xl rounded-full -z-10" />

                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Why Choose Nevatrix for Mobile App Development?
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We combine technical depth with product thinking to deliver apps
                            that users love and businesses can grow on.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            {
                                title: "Fast & Smooth Performance",
                                // ✅ FIXED: expanded descriptions
                                desc: "We optimize every layer of the app — rendering, API calls, image loading and navigation transitions — so your app feels instant and buttery smooth on all Android and iOS devices.",
                                color: "border-blue-200 bg-blue-50",
                                icon: Rocket,
                            },
                            {
                                title: "Scalable Architecture",
                                desc: "We build with modular, maintainable code and scalable backend infrastructure so your app can handle 100 or 1,00,000 users without a costly rebuild.",
                                color: "border-indigo-200 bg-indigo-50",
                                icon: Layers3,
                            },
                            {
                                title: "Secure Authentication",
                                desc: "We implement JWT tokens, biometric login, OTP verification, encrypted data storage and secure API communication — protecting your users and their data.",
                                color: "border-emerald-200 bg-emerald-50",
                                icon: ShieldCheck,
                            },
                            {
                                title: "App Store Deployment",
                                desc: "We manage the complete Google Play Store and Apple App Store submission — store listing optimization, screenshots, review response and post-launch updates.",
                                color: "border-purple-200 bg-purple-50",
                                icon: Smartphone,
                            },
                        ].map((item, i) => (
                            <div key={i} className={`group relative rounded-3xl p-8 border ${item.color} hover:-translate-y-3 hover:shadow-2xl transition duration-300`}>
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center text-indigo-600 group-hover:scale-110 transition flex-shrink-0">
                                        <item.icon size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-indigo-300 transition pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                PROCESS
            ══════════════════════════════════════ */}
            <section className="relative min-h-[460px] py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 -z-20" />
                <div className="absolute -top-24 left-[-120px] w-[420px] h-[420px] bg-blue-200/30 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-24 right-[-120px] w-[420px] h-[420px] bg-purple-200/30 blur-3xl rounded-full -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Our Mobile App Development Process
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A clear, structured workflow that takes your idea from concept
                            to a live, published mobile application.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-full" />

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {[
                                {
                                    title: "Idea Discussion",
                                    // ✅ FIXED: was 7 words
                                    desc: "We deep-dive into your app concept — defining target users, core features, platform requirements and technical architecture before any design begins.",
                                    color: "bg-blue-50 border-blue-100 text-blue-600",
                                    icon: Smartphone,
                                },
                                {
                                    title: "UI/UX Design",
                                    desc: "We design high-fidelity app screens, user flows and interactive prototypes to validate the experience before writing a line of code.",
                                    color: "bg-indigo-50 border-indigo-100 text-indigo-600",
                                    icon: Layers3,
                                },
                                {
                                    title: "App Development",
                                    desc: "We build the frontend app in React Native or Flutter, develop backend APIs in Node.js and integrate third-party services like payments and notifications.",
                                    color: "bg-emerald-50 border-emerald-100 text-emerald-600",
                                    icon: Code2,
                                },
                                {
                                    title: "Launch & Support",
                                    desc: "We submit your app to Google Play Store and Apple App Store, handle review and post-launch support — bug fixes, updates and new features.",
                                    color: "bg-purple-50 border-purple-100 text-purple-600",
                                    icon: Rocket,
                                },
                            ].map((step, i) => (
                                <div key={i} className="group relative rounded-3xl p-[1px] hover:-translate-y-4 transition duration-300">
                                    <div className={`h-full rounded-3xl border ${step.color} p-8 bg-white/90 backdrop-blur-xl hover:shadow-2xl`}>
                                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${step.color} group-hover:scale-110 transition`}>
                                            <step.icon size={26} />
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed text-justify">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ══════════════════════════════════════
                FAQ ACCORDION  ✅ NEW
            ══════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-10 text-center">
                        Frequently Asked Questions — Mobile App Development
                    </h2>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <div
                                    key={i}
                                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                                        isOpen
                                            ? "border-indigo-300 shadow-md shadow-indigo-50"
                                            : "border-slate-100 hover:border-slate-200"
                                    }`}
                                >
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
                                            className={`flex-shrink-0 text-indigo-500 transition-transform duration-300 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>

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
            <section className="py-20 text-center text-white bg-gradient-to-r from-indigo-600 to-blue-600">
                <h2 className="text-3xl font-semibold mb-4">
                    Have a Mobile App Idea?
                </h2>
                <p className="mb-6 text-blue-100">
                    Let Nevatrix turn your idea into a live Android and iOS app —
                    on time, on budget and built to scale.
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
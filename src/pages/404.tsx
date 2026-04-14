
import Link from "next/link";
import { ArrowRight, Home, Phone, Mail } from "lucide-react";
import Head from "next/head";

const services = [
    { label: "Web Development",       href: "/services/web-development"  },
    { label: "Digital Marketing",     href: "/services/digital-marketing"},
    { label: "Mobile App Development",href: "/services/mobile-app"       },
    { label: "AI Solutions",          href: "/services/ai-solutions"     },
    { label: "Ecommerce Development", href: "/services/ecommerce"        },
    { label: "Full Stack Development",href: "/services/full-stack"       },
];

export default function NotFound() {
    return (
        <>
            <Head>
                <title>Page Not Found | Nevatrix — Web Development Company Warangal</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Mulish:wght@300;400;500;600&display=swap');
                .nf-page { font-family: 'Mulish', sans-serif; }
                .nf-page h1, .nf-page h2 { font-family: 'Sora', sans-serif; }
                .nf-hero-bg {
                    background:
                        radial-gradient(ellipse 60% 50% at 20% 60%, rgba(37,99,235,.20) 0%, transparent 60%),
                        radial-gradient(ellipse 50% 55% at 80% 40%, rgba(8,145,178,.15) 0%, transparent 55%),
                        #061020;
                }
                @keyframes gridScroll { from{background-position:0 0;} to{background-position:48px 48px;} }
                .nf-grid {
                    background-image:
                        linear-gradient(rgba(37,99,235,.06) 1px, transparent 1px),
                        linear-gradient(90deg,rgba(37,99,235,.06) 1px, transparent 1px);
                    background-size: 48px 48px;
                    animation: gridScroll 12s linear infinite;
                }
                @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
                .fu1{animation:fadeUp .5s .1s ease both;}
                .fu2{animation:fadeUp .5s .25s ease both;}
                .fu3{animation:fadeUp .5s .4s ease both;}
                @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-12px);} }
                .nf-float { animation: float 4s ease-in-out infinite; }
                .nf-card { transition: transform .25s ease, box-shadow .25s ease; border: 1px solid #E2E8F0; }
                .nf-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px -12px rgba(15,23,42,.12); }
                .cta-main { transition: transform .2s ease, box-shadow .2s ease; }
                .cta-main:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(37,99,235,.38); }
            `}</style>

            <div className="nf-page min-h-screen flex flex-col">

                {/* ── Hero ── */}
                <section className="relative flex-1 flex items-center justify-center overflow-hidden nf-hero-bg py-20">
                    <div className="absolute inset-0 nf-grid opacity-50" />

                    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

                        {/* 404 number */}
                        <div className="nf-float fu1 text-[120px] md:text-[160px] font-extrabold leading-none select-none"
                            style={{
                                fontFamily: "'Sora', sans-serif",
                                background: "linear-gradient(135deg,#2563EB,#0891B2,#7C3AED)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                            404
                        </div>

                        <h1 className="fu2 text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 leading-tight">
                            Page Not Found
                        </h1>

                        <div className="fu2 h-[3px] w-24 rounded-full mx-auto mb-6"
                            style={{ background: "linear-gradient(90deg,#2563EB,#0891B2)" }} />

                        <p className="fu3 text-slate-300 text-base leading-relaxed max-w-xl mx-auto mb-10">
                            The page you're looking for doesn't exist or has been moved.
                            Let's get you back to something useful.
                        </p>

                        <div className="fu3 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/"
                                className="cta-main inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
                                style={{ background: "#2563EB" }}>
                                <Home size={16} /> Back to Homepage
                            </Link>
                            <Link href="/contact"
                                className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl border transition hover:bg-white/10"
                                style={{ color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>
                                Contact Us <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── Services Grid ── */}
                <section className="py-16 px-6" style={{ background: "linear-gradient(to bottom,#F8FAFC,#ffffff)" }}>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-2"
                            style={{ fontFamily: "'Sora', sans-serif" }}>
                            Explore Our Services
                        </h2>
                        <p className="text-slate-500 text-center text-sm mb-10">
                            Nevatrix — Web Development &amp; Digital Marketing Company in Warangal, Telangana
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {services.map((s) => (
                                <Link key={s.href} href={s.href}
                                    className="nf-card bg-white rounded-xl px-6 py-5 flex items-center justify-between">
                                    <span className="font-semibold text-slate-800 text-sm">{s.label}</span>
                                    <ArrowRight size={15} className="text-blue-500 shrink-0" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Quick Contact ── */}
                <section className="py-10 px-6 border-t border-slate-100 bg-white">
                    <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-600">
                        <a href="tel:+919989183654"
                            className="inline-flex items-center gap-2 hover:text-blue-600 transition font-medium">
                            <Phone size={15} className="text-blue-500" /> +91 99891 83654
                        </a>
                        <span className="hidden sm:block text-slate-300">|</span>
                        <a href="mailto:info@nevatrix.com"
                            className="inline-flex items-center gap-2 hover:text-blue-600 transition font-medium">
                            <Mail size={15} className="text-blue-500" /> info@nevatrix.com
                        </a>
                        <span className="hidden sm:block text-slate-300">|</span>
                        <span className="text-slate-500">Warangal, Telangana 506004</span>
                    </div>
                </section>

            </div>
        </>
    );
}

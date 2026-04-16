
import Link from "next/link";
import Head from "next/head";
import { ArrowRight, CheckCircle, MapPin, Phone, Mail } from "lucide-react";

const services = [
    { title: "Website Design & Development", desc: "Professional, mobile-friendly websites for businesses in Khammam — built to rank on Google.", href: "/services/web-development", color: "#0891B2" },
    { title: "SEO & Digital Marketing",       desc: "Local SEO, Google Ads and social media marketing targeting customers in Khammam district.", href: "/services/digital-marketing", color: "#2563EB" },
    { title: "Ecommerce Development",         desc: "Custom online stores with Razorpay integration to sell products across Khammam and Telangana.", href: "/services/ecommerce", color: "#059669" },
    { title: "Mobile App Development",        desc: "Android and iOS apps for Khammam businesses using React Native and Flutter.", href: "/services/mobile-app", color: "#7C3AED" },
    { title: "AI Solutions & Chatbots",       desc: "AI-powered chatbots, WhatsApp bots and business automation for Khammam enterprises.", href: "/services/ai-solutions", color: "#DC2626" },
    { title: "Full Stack Development",        desc: "Custom web applications, SaaS platforms and enterprise software development.", href: "/services/full-stack", color: "#D97706" },
];

const whyPoints = [
    "Serving Khammam businesses remotely with dedicated project managers",
    "12+ years of experience delivering digital solutions across Telangana",
    "100+ websites and apps built for Telangana businesses",
    "SEO-optimised websites built to rank for Khammam local searches",
    "Transparent pricing — no hidden charges, no surprises",
    "Fast delivery — business websites in 7–14 working days",
    "Ongoing support and maintenance after project delivery",
];

const faq = [
    { q: "Does Nevatrix serve businesses in Khammam?", a: "Yes. Nevatrix provides web development, digital marketing, mobile app development and AI solutions for businesses in Khammam, Telangana. We work remotely with Khammam clients and have delivered multiple digital projects for businesses in the Khammam district." },
    { q: "Which is the best web development company for Khammam businesses?", a: "Nevatrix is the top-rated web development and digital marketing company serving Khammam, Telangana. Based in Warangal (3 hours away), we provide the same professional digital services to Khammam businesses as we do locally." },
    { q: "Does Nevatrix offer SEO services in Khammam?", a: "Yes. We provide local SEO, Google Business Profile optimisation, Google Ads and social media marketing specifically targeting customers in Khammam and the surrounding districts." },
    { q: "How much does a website cost for a Khammam business?", a: "A professional business website starts from ₹8,000. Ecommerce stores start from ₹20,000 and custom web applications from ₹50,000. All projects include mobile-friendly design and basic SEO setup. Contact Nevatrix for a free quote." },
    { q: "How does Nevatrix work with clients in Khammam remotely?", a: "We work with Khammam clients fully remotely via video calls, WhatsApp and email. We provide regular project updates, screen-share demos and final delivery through our project management portal. All communication is prompt and transparent." },
];

export default function KhammamPage() {
    return (
        <>
            <Head>
                <title>Web Development Company in Khammam | Nevatrix</title>
                <meta name="description" content="Nevatrix provides web development, SEO and digital marketing services for businesses in Khammam, Telangana. Custom websites, mobile apps and AI solutions delivered by Telangana's leading IT company." />
                <meta name="keywords" content="web development company khammam, website design khammam, digital marketing agency khammam, seo services khammam, web designers khammam, mobile app development khammam, it company khammam telangana, ecommerce development khammam, website development company near me khammam, best web developers khammam, digital marketing company khammam, seo company khammam, website designers near me khammam" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
                <link rel="canonical" href="https://nevatrix.com/locations/khammam" />
                <meta name="geo.region" content="IN-TG" />
                <meta name="geo.placename" content="Khammam, Telangana, India" />
                <meta property="og:title" content="Web Development Company in Khammam | Nevatrix" />
                <meta property="og:description" content="Nevatrix — web development, SEO and digital marketing for Khammam businesses. Websites, apps and AI solutions from Telangana's leading IT company." />
                <meta property="og:url" content="https://nevatrix.com/locations/khammam" />
                <meta property="og:type" content="website" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    name: "Nevatrix",
                    description: "Web development and digital marketing company serving Khammam and Telangana.",
                    url: "https://nevatrix.com",
                    telephone: "+91-9989183654",
                    email: "info@nevatrix.com",
                    address: { "@type": "PostalAddress", streetAddress: "Kazipet", addressLocality: "Warangal", addressRegion: "Telangana", postalCode: "506004", addressCountry: "IN" },
                    areaServed: [{ "@type": "City", name: "Khammam" }, { "@type": "City", name: "Warangal" }, { "@type": "State", name: "Telangana" }],
                    sameAs: ["https://www.linkedin.com/company/nevatrix"],
                }) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Home", item: "https://nevatrix.com" },
                        { "@type": "ListItem", position: 2, name: "Locations", item: "https://nevatrix.com/locations/khammam" },
                        { "@type": "ListItem", position: 3, name: "Khammam", item: "https://nevatrix.com/locations/khammam" },
                    ],
                }) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
                }) }} />
            </Head>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Mulish:wght@300;400;500;600&display=swap');
                .loc-page { font-family: 'Mulish', sans-serif; color: #0F172A; }
                .loc-page h1,.loc-page h2,.loc-page h3 { font-family: 'Sora', sans-serif; }
                .loc-hero-bg {
                    background:
                        radial-gradient(ellipse 60% 50% at 15% 60%, rgba(37,99,235,.22) 0%, transparent 60%),
                        radial-gradient(ellipse 50% 55% at 85% 45%, rgba(8,145,178,.18) 0%, transparent 55%),
                        #061020;
                }
                @keyframes gridScroll { from{background-position:0 0;} to{background-position:48px 48px;} }
                .loc-grid {
                    background-image:
                        linear-gradient(rgba(37,99,235,.06) 1px, transparent 1px),
                        linear-gradient(90deg,rgba(37,99,235,.06) 1px, transparent 1px);
                    background-size: 48px 48px;
                    animation: gridScroll 12s linear infinite;
                }
                @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
                .fu1{animation:fadeUp .5s .1s ease both;} .fu2{animation:fadeUp .5s .25s ease both;} .fu3{animation:fadeUp .5s .4s ease both;}
                .svc-card { border:1px solid #E2E8F0; transition:transform .25s ease,box-shadow .25s ease; }
                .svc-card:hover { transform:translateY(-5px); box-shadow:0 18px 44px -12px rgba(15,23,42,.12); }
                .cta-btn { transition:transform .2s ease,box-shadow .2s ease; }
                .cta-btn:hover { transform:translateY(-3px); box-shadow:0 12px 28px rgba(37,99,235,.38); }
            `}</style>

            <div className="loc-page">

                {/* ── HERO ── */}
                <section className="relative min-h-[420px] flex items-center overflow-hidden loc-hero-bg">
                    <div className="absolute inset-0 loc-grid opacity-50" />
                    <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 w-full text-center">
                        <div className="fu1 inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase"
                            style={{ borderColor: "rgba(37,99,235,.35)", background: "rgba(37,99,235,.12)", color: "#93C5FD" }}>
                            <MapPin size={11} /> Khammam, Telangana
                        </div>
                        <h1 className="fu2 text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5 tracking-tight">
                            Web Development &amp; Digital Marketing<br />
                            <span style={{ color: "#60A5FA" }}>Company in Khammam</span>
                        </h1>
                        <div className="fu2 h-[3px] w-48 rounded-full mx-auto mb-6" style={{ background: "linear-gradient(90deg,#2563EB,#0891B2)" }} />
                        <p className="fu3 text-slate-300 text-base leading-relaxed max-w-2xl mx-auto mb-10">
                            Nevatrix delivers professional websites, mobile apps, SEO and AI solutions
                            for businesses in Khammam, Telangana. Get a free consultation today.
                        </p>
                        <div className="fu3 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact"
                                className="cta-btn inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
                                style={{ background: "#2563EB" }}>
                                Get a Free Quote <ArrowRight size={16} />
                            </Link>
                            <Link href="/services/web-development"
                                className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl border transition hover:bg-white/10"
                                style={{ color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>
                                Our Services
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── SERVICES ── */}
                <section className="py-20 px-6" style={{ background: "linear-gradient(to bottom,#F8FAFC,#ffffff)" }}>
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-3">
                            Our Services in Khammam
                        </h2>
                        <p className="text-slate-500 text-center max-w-2xl mx-auto mb-12 text-sm leading-relaxed">
                            From local retailers and schools to manufacturing businesses and startups,
                            we help Khammam businesses succeed online.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((s) => (
                                <article key={s.href} className="svc-card bg-white rounded-2xl overflow-hidden flex flex-col">
                                    <div className="h-[3px]" style={{ background: `linear-gradient(90deg,${s.color},${s.color}70)` }} />
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="font-bold text-slate-900 mb-2 text-base">{s.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{s.desc}</p>
                                        <Link href={s.href}
                                            className="inline-flex items-center gap-1 text-sm font-semibold"
                                            style={{ color: s.color }}>
                                            Learn More <ArrowRight size={13} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── WHY NEVATRIX ── */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                                Why Khammam Businesses<br />Choose Nevatrix
                            </h2>
                            <div className="h-[3px] w-20 rounded-full mb-6" style={{ background: "linear-gradient(90deg,#2563EB,#0891B2)" }} />
                            <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                As the most experienced IT company in Telangana, Nevatrix brings
                                world-class digital expertise to Khammam businesses. We understand
                                the local market and deliver results that matter.
                            </p>
                            <ul className="space-y-3">
                                {whyPoints.map((p, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                        <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: "#2563EB" }} />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact"
                                className="cta-btn mt-8 inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl"
                                style={{ background: "#2563EB" }}>
                                Talk to Us <ArrowRight size={15} />
                            </Link>
                        </div>
                        <div className="space-y-5">
                            {[
                                { label: "Clients Served",      value: "100+", sub: "businesses across Telangana" },
                                { label: "Years of Experience",  value: "12+",  sub: "delivering digital solutions" },
                                { label: "Average Delivery",     value: "14",   sub: "days for a business website" },
                                { label: "Client Satisfaction",  value: "4.9★", sub: "average Google rating" },
                            ].map((s) => (
                                <div key={s.label} className="p-5 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-5">
                                    <div className="text-3xl font-extrabold" style={{ color: "#2563EB", fontFamily: "'Sora',sans-serif" }}>{s.value}</div>
                                    <div>
                                        <div className="font-semibold text-slate-800 text-sm">{s.label}</div>
                                        <div className="text-slate-500 text-xs">{s.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-20 px-6" style={{ background: "#F8FAFC" }}>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-3">
                            {faq.map((item, i) => (
                                <details key={i} className="bg-white rounded-xl border border-slate-100 px-6 group">
                                    <summary className="py-4 font-semibold text-slate-800 cursor-pointer list-none flex justify-between items-center text-sm">
                                        {item.q}
                                        <span className="text-blue-500 text-lg ml-4 shrink-0 transition-transform group-open:rotate-45">+</span>
                                    </summary>
                                    <p className="pb-4 text-slate-500 text-sm leading-relaxed">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="relative py-20 overflow-hidden loc-hero-bg">
                    <div className="absolute inset-0 loc-grid opacity-40" />
                    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                            Ready to Grow Your<br />Khammam Business Online?
                        </h2>
                        <p className="text-slate-300 text-base mb-10 max-w-xl mx-auto">
                            Get a free consultation from Nevatrix. We'll design a digital strategy
                            tailored to your business goals and Khammam market.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <Link href="/contact"
                                className="cta-btn inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
                                style={{ background: "#2563EB" }}>
                                Get a Free Quote <ArrowRight size={16} />
                            </Link>
                            <a href="https://wa.me/919989183654?text=Hi%20Nevatrix%2C%20I%27m%20from%20Khammam%20and%20I%27d%20like%20a%20free%20quote"
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl border transition hover:bg-white/10"
                                style={{ color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>
                                WhatsApp Us
                            </a>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
                            <a href="tel:+919989183654" className="inline-flex items-center gap-2 hover:text-white transition">
                                <Phone size={14} /> +91 99891 83654
                            </a>
                            <a href="mailto:info@nevatrix.com" className="inline-flex items-center gap-2 hover:text-white transition">
                                <Mail size={14} /> info@nevatrix.com
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

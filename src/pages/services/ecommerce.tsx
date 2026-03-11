import Image from "next/image";
import SEO from "@/components/SEO";
import {
    ShoppingCart,
    CreditCard,
    Truck,
    Smartphone,
    Store,
    ShieldCheck,
    CheckCircle,
    MessageSquare, PenTool, Code2, Rocket,
} from "lucide-react";

export default function EcommercePage() {
    return (
        <>
            <SEO page="ecommerce" />
            {/* ================= HERO ================= */}
            <section className="relative min-h-[460px] py-28 overflow-hidden">

                <div className="absolute inset-0">
                    <Image
                        src="/ecommerce.jpg"
                        alt="Nevatrix ecommerce development services"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* gradient tint (important for premium look) */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-blue-900/30 to-purple-900/40" />


                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    <h1 className="text-5xl font-bold mb-6">
                        Ecommerce Website Development
                    </h1>

                    <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
                        We design and develop conversion-focused online stores that help
                        businesses sell products globally, automate operations and scale revenue.
                    </p>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="relative py-24 overflow-hidden">

                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300/30 blur-3xl rounded-full -z-10"/>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full -z-10"/>

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                        Our Ecommerce Services
                    </h2>
                    <p className="text-slate-600">
                        Everything you need to launch, manage and scale an online store.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {[
                        ["Custom Store Development", ShoppingCart, "from-blue-500/20 to-indigo-500/10 text-blue-600"],
                        ["Payment Gateway Integration", CreditCard, "from-indigo-500/20 to-purple-500/10 text-indigo-600"],
                        ["Shipping & Logistics Setup", Truck, "from-emerald-500/20 to-teal-500/10 text-emerald-600"],
                        ["Mobile Responsive Design", Smartphone, "from-pink-500/20 to-rose-500/10 text-pink-600"],
                        ["Multi-Vendor Marketplace", Store, "from-violet-500/20 to-purple-500/10 text-violet-600"],
                        ["Security & Speed Optimization", ShieldCheck, "from-orange-500/20 to-amber-500/10 text-orange-600"],
                    ].map(([title, Icon, color], i) => (
                        <div
                            key={i}
                            className={`group relative rounded-2xl p-[1px] bg-gradient-to-br ${color} transition duration-300 hover:-translate-y-3 hover:shadow-2xl`}
                        >
                            <div className="h-full bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/60">

                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6
                bg-gradient-to-br ${color} transition group-hover:scale-110 group-hover:rotate-6`}>
                                    <Icon size={28}/>
                                </div>

                                {/*<h3 className="text-lg font-semibold text-slate-800 mb-2">*/}
                                {/*    {title}*/}
                                {/*</h3>*/}

                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Optimized implementation ensuring high performance, better SEO
                                    ranking and smooth customer checkout experience.
                                </p>

                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500 group-hover:w-full"/>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= PLATFORMS ================= */}
            {/* ================= PLATFORMS ================= */}
            <section className="relative py-28 overflow-hidden">

                {/* soft background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-sky-50 -z-10" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full -z-10"/>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-300/20 blur-3xl rounded-full -z-10"/>

                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            Platforms We Specialize In
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We build scalable ecommerce stores using industry-leading platforms,
                            tailored to your business size and growth plans.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-10">

                        {/* SHOPIFY */}
                        <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-green-400/40 to-emerald-500/20 hover:shadow-2xl transition duration-300 hover:-translate-y-3">
                            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-10 h-full border border-white/70">

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition">
                                        S
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-800">
                                        Shopify Development
                                    </h3>
                                </div>

                                <ul className="space-y-3 text-slate-600 text-sm">
                                    <li>✔ Store setup & configuration</li>
                                    <li>✔ Theme customization</li>
                                    <li>✔ Payment & shipping integration</li>
                                    <li>✔ App integrations</li>
                                    <li>✔ Conversion optimization</li>
                                </ul>

                            </div>
                        </div>

                        {/* WOOCOMMERCE */}
                        <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-400/40 to-indigo-500/20 hover:shadow-2xl transition duration-300 hover:-translate-y-3">
                            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-10 h-full border border-white/70">

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition">
                                        W
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-800">
                                        WooCommerce Development
                                    </h3>
                                </div>

                                <ul className="space-y-3 text-slate-600 text-sm">
                                    <li>✔ WordPress ecommerce websites</li>
                                    <li>✔ Plugin customization</li>
                                    <li>✔ Payment gateways</li>
                                    <li>✔ Product & inventory management</li>
                                    <li>✔ SEO optimized store</li>
                                </ul>

                            </div>
                        </div>

                        {/* CUSTOM */}
                        <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-400/40 to-violet-500/20 hover:shadow-2xl transition duration-300 hover:-translate-y-3">
                            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-10 h-full border border-white/70">

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition">
                                        C
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-800">
                                        Custom Ecommerce
                                    </h3>
                                </div>

                                <ul className="space-y-3 text-slate-600 text-sm">
                                    <li>✔ Next.js custom stores</li>
                                    <li>✔ Multi-vendor marketplace</li>
                                    <li>✔ API integrations</li>
                                    <li>✔ High-traffic scalability</li>
                                    <li>✔ Advanced admin dashboards</li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= PROCESS ================= */}
            <section className="relative py-32 overflow-hidden">

                {/* light gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 -z-20" />

                {/* pastel glow blobs */}
                <div className="absolute top-[-100px] left-[-120px] w-[420px] h-[420px] bg-blue-200/40 blur-3xl rounded-full -z-10"/>
                <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-purple-200/40 blur-3xl rounded-full -z-10"/>

                <div className="max-w-7xl mx-auto px-6">

                    {/* heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                            How We Build Your Store
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A structured and transparent workflow designed to deliver a reliable and scalable ecommerce website.
                        </p>
                    </div>

                    {/* cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {[
                            {
                                title:"Consultation",
                                desc:"We understand your business model, products, audience and goals.",
                                icon:MessageSquare,
                                color:"from-blue-400/20 to-indigo-400/10 text-blue-600 bg-blue-50"
                            },
                            {
                                title:"UI/UX Design",
                                desc:"We design a modern store layout focused on usability and conversions.",
                                icon:PenTool,
                                color:"from-purple-400/20 to-pink-400/10 text-purple-600 bg-purple-50"
                            },
                            {
                                title:"Development",
                                desc:"We develop your ecommerce store with payments, shipping and admin dashboard.",
                                icon:Code2,
                                color:"from-emerald-400/20 to-teal-400/10 text-emerald-600 bg-emerald-50"
                            },
                            {
                                title:"Launch & Support",
                                desc:"We test, deploy and provide training and ongoing technical support.",
                                icon:Rocket,
                                color:"from-orange-400/20 to-amber-400/10 text-orange-600 bg-orange-50"
                            }
                        ].map((item,i)=>(
                            <div
                                key={i}
                                className={`group rounded-2xl p-[1px] bg-gradient-to-br ${item.color} hover:shadow-2xl transition duration-300 hover:-translate-y-3`}
                            >
                                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/70">

                                    {/* icon */}
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
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-20 text-center text-white bg-gradient-to-r from-indigo-600 to-blue-600">

                <h2 className="text-3xl font-semibold mb-4">
                    Start Selling Online Today
                </h2>

                <p className="mb-6 text-blue-100">
                    Talk with Nevatrix experts and get a free consultation for your ecommerce project.
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
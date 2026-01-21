import {
    BrainCircuit,
    Network,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="bg-slate-50 py-28">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10 items-start">

                {/* LEFT CONTENT */}
                <div className="lg:col-span-1">
                    <h2 className="text-4xl font-semibold text-slate-900">
                        About Nevatrix
                    </h2>

                    <p className="mt-6 text-slate-600 text-md leading-relaxed text-justify">
                        Nevatrix is a technology-driven digital solutions company helping
                        businesses build scalable web platforms, AI-powered systems, and
                        high-impact digital experiences. We combine strategy, design, and
                        engineering to deliver solutions that drive growth, efficiency,
                        and long-term success.
                    </p>

                    <Link
                        href="/about"
                        className="inline-block mt-8 px-6 py-3 rounded-full text-white text-sm font-medium
            bg-gradient-to-r from-pink-500 via-orange-400 to-sky-500
            hover:opacity-90 transition"
                    >
                        Learn More
                    </Link>
                </div>

                {/* RIGHT CARDS */}
                <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">

                    {/* CARD 1 */}
                    <div
                        className="group bg-white rounded-2xl p-8
            shadow-sm hover:shadow-xl
            hover:-translate-y-2
            transition-all duration-300"
                    >
                        <div
                            className="w-14 h-14 rounded-full flex items-center justify-center
              bg-pink-100 text-pink-600
              group-hover:scale-110 group-hover:rotate-6
              transition"
                        >
                            <BrainCircuit size={26} />
                        </div>

                        <h3
                            className="mt-6 text-lg font-semibold text-slate-900
              group-hover:text-pink-600 transition"
                        >
                            Tech-Driven Innovation
                        </h3>

                        <p className="mt-4 text-slate-600 text-md leading-relaxed text-justify">
                            We create modern web applications, AI solutions, and digital
                            platforms using the latest technologies to help businesses
                            innovate, scale, and stay ahead in a competitive digital
                            landscape.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div
                        className="group bg-white rounded-2xl p-8
            shadow-sm hover:shadow-xl
            hover:-translate-y-2
            transition-all duration-300"
                    >
                        <div
                            className="w-14 h-14 rounded-full flex items-center justify-center
              bg-orange-100 text-orange-600
              group-hover:scale-110 group-hover:rotate-6
              transition"
                        >
                            <Network size={26} />
                        </div>

                        <h3
                            className="mt-6 text-lg font-semibold text-slate-900
              group-hover:text-orange-600 transition"
                        >
                            Strategic Collaboration
                        </h3>

                        <p className="mt-4 text-slate-600 text-md leading-relaxed text-justify">
                            Our team works closely with clients to understand their goals
                            and challenges, delivering customized solutions through a
                            transparent, collaborative, and agile development process.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div
                        className="group bg-white rounded-2xl p-8
            shadow-sm hover:shadow-xl
            hover:-translate-y-2
            transition-all duration-300"
                    >
                        <div
                            className="w-14 h-14 rounded-full flex items-center justify-center
              bg-sky-100 text-sky-600
              group-hover:scale-110 group-hover:rotate-6
              transition"
                        >
                            <TrendingUp size={26} />
                        </div>

                        <h3
                            className="mt-6 text-lg font-semibold text-slate-900
              group-hover:text-sky-600 transition"
                        >
                            Focused Approach
                        </h3>

                        <p className="mt-4 text-slate-600 text-md leading-relaxed text-justify">
                            We focus on measurable outcomes by building SEO-friendly,
                            user-centric, and performance-driven digital solutions that
                            deliver real business results and long-term value.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

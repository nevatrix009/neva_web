import {
    Target,
    Zap,
    Lightbulb,
    ShieldCheck,
} from "lucide-react";

export default function MissionSection() {
    return (
        <section className="bg-slate-50 py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
                        Our mission is to deliver
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-sky-500">
      {" "}right-sized, right-scaled,
    </span>{" "}
                        and customized solutions
                    </h2>

                    <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
                        Nevatrix partners with businesses to build intelligent,
                        scalable, and future-ready digital solutions that
                        deliver measurable growth.
                    </p>
                </div>


                {/* Mission Pillars */}
                <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* CARD 1 */}
                    <div className="group relative rounded-2xl p-8
            bg-gradient-to-br from-pink-50 to-white
            border border-pink-200/40
            shadow-sm hover:shadow-xl
            hover:-translate-y-1
            transition-all duration-300">

                        {/* Accent bar */}
                        <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl
              bg-gradient-to-r from-pink-400 to-orange-300" />

                        <div className="relative">
                            <div className="w-12 h-12 rounded-xl
                bg-pink-100 text-pink-600
                ring-4 ring-pink-100/60
                flex items-center justify-center
                group-hover:scale-110 group-hover:rotate-3 transition">
                                <Target size={24} />
                            </div>

                            <h4 className="mt-6 text-lg font-semibold text-slate-900">
                                Tailored Solutions
                            </h4>

                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                Custom-built solutions aligned with your business goals,
                                challenges, and long-term vision.
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="group relative rounded-2xl p-8
            bg-gradient-to-br from-orange-50 to-white
            border border-orange-200/40
            shadow-sm hover:shadow-xl
            hover:-translate-y-1
            transition-all duration-300">

                        <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl
              bg-gradient-to-r from-orange-400 to-pink-400" />

                        <div className="relative">
                            <div className="w-12 h-12 rounded-xl
                bg-orange-100 text-orange-600
                ring-4 ring-orange-100/60
                flex items-center justify-center
                group-hover:scale-110 group-hover:-rotate-3 transition">
                                <Zap size={24} />
                            </div>

                            <h4 className="mt-6 text-lg font-semibold text-slate-900">
                                Rapid Delivery
                            </h4>

                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                Agile workflows and automation enable faster execution
                                without compromising quality or scalability.
                            </p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="group relative rounded-2xl p-8
            bg-gradient-to-br from-sky-50 to-white
            border border-sky-200/40
            shadow-sm hover:shadow-xl
            hover:-translate-y-1
            transition-all duration-300">

                        <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl
              bg-gradient-to-r from-sky-400 to-blue-400" />

                        <div className="relative">
                            <div className="w-12 h-12 rounded-xl
                bg-sky-100 text-sky-600
                ring-4 ring-sky-100/60
                flex items-center justify-center
                group-hover:scale-110 group-hover:rotate-3 transition">
                                <Lightbulb size={24} />
                            </div>

                            <h4 className="mt-6 text-lg font-semibold text-slate-900">
                                Innovation Mindset
                            </h4>

                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                We leverage emerging technologies and AI to deliver
                                smarter, future-ready digital solutions.
                            </p>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="group relative rounded-2xl p-8
            bg-gradient-to-br from-green-50 to-white
            border border-green-200/40
            shadow-sm hover:shadow-xl
            hover:-translate-y-1
            transition-all duration-300">

                        <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl
              bg-gradient-to-r from-green-400 to-emerald-400" />

                        <div className="relative">
                            <div className="w-12 h-12 rounded-xl
                bg-green-100 text-green-600
                ring-4 ring-green-100/60
                flex items-center justify-center
                group-hover:scale-110 group-hover:-rotate-3 transition">
                                <ShieldCheck size={24} />
                            </div>

                            <h4 className="mt-6 text-lg font-semibold text-slate-900">
                                Trusted Partnership
                            </h4>

                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                Long-term collaboration built on transparency,
                                accountability, and consistent delivery.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

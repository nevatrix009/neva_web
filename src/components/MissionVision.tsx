import Image from "next/image";

export default function AboutMissionVision() {
    return (
        <section className="bg-[#0B1437] py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* MAIN GRID: 30% | 70% */}
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-14 items-center">

                    {/* LEFT — 30% */}
                    <div className="space-y-14">
                        <div>
                            <h2 className="text-5xl font-semibold text-white/90 mb-6">
                                Our Mission
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To build long-term partnerships by delivering innovative,
                                scalable, and high-quality digital solutions that drive
                                measurable business success.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-semibold text-white/90 mb-6">
                                Our Vision
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To redefine how businesses engage with technology by setting
                                new benchmarks for innovation, quality, and impact.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT — 70% (SINGLE CARD) */}
                    <div className="bg-[#FFF7ED] rounded-2xl shadow-2xl overflow-hidden">

                        {/* INNER GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px]">

                            {/* VALUES */}
                            <div className="p-10">
                                <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
                                    Our Values
                                </h3>

                                <div className="space-y-7">
                                    {[
                                        {
                                            title: "Integrity",
                                            desc: "We uphold transparency and honesty in everything we do.",
                                        },
                                        {
                                            title: "Customer Focus",
                                            desc: "Your success drives every solution we build.",
                                        },
                                        {
                                            title: "Innovation",
                                            desc: "We embrace modern technologies to continuously improve.",
                                        },
                                        {
                                            title: "Excellence",
                                            desc: "We are committed to delivering exceptional outcomes.",
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="border-b border-gray-300/60 pb-5 last:border-none"
                                        >
                                            <h4 className="text-xl font-semibold text-[#0B1437] mb-2">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* IMAGE */}
                            <div className="relative min-h-[360px]">
                                <Image
                                    src="/merting.jpg"
                                    alt="Nevatrix Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import Link from "next/link";

export default function CTAImageSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative overflow-hidden rounded-3xl shadow-xl">

                    {/* Background Image */}
                    <Image
                        src="/cta.png"
                        alt="Nevatrix – Innovative Solutions for Your Business"
                        width={1920}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority
                    />

                    {/* Optional overlay (very light, keeps image visible) */}
                    <div className="absolute inset-0 bg-black/10" />

                    {/* CTA Button (optional but recommended) */}
                    <div className="absolute inset-0 flex items-end justify-center pb-10">
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full text-sm font-semibold
              text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg"
                        >
                            Get Started
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}

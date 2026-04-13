"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, ArrowUp, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const services = [
        { label: "Web Development",      href: "/services/web-development"   },
        { label: "Digital Marketing",    href: "/services/digital-marketing" },
        { label: "Full Stack Development", href: "/services/full-stack"      },
        { label: "Mobile App Development", href: "/services/mobile-app"      },
        { label: "Ecommerce Development", href: "/services/ecommerce"        },
        { label: "AI Solutions",         href: "/services/ai-solutions"      },
    ];

    const company = [
        { label: "About Us",   href: "/about"   },
        { label: "Blog",       href: "/blog"    },
        { label: "Careers",    href: "/careers" },
        { label: "Contact Us", href: "/contact" },
    ];

    return (
        <footer className="bg-slate-900 text-slate-300 relative">

            {/* ── Main Footer Grid ── */}
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Col 1: Brand */}
                <div className="space-y-4">
                    <Link href="/" aria-label="Nevatrix Homepage">
                        <Image
                            src="/Nevatrix_logo.png"
                            alt="Nevatrix - Web Development Company in Warangal"
                            width={150}
                            height={48}
                            className=""
                        />
                    </Link>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Nevatrix is a leading <strong className="text-slate-200">web development</strong> and{" "}
                        <strong className="text-slate-200">digital marketing company in Warangal</strong>,
                        Telangana. We build websites, mobile apps and AI solutions for businesses across
                        Warangal, Hanamkonda, Khammam, Nizamabad and globally.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 pt-1">
                        <Link
                            href="#"
                            aria-label="Follow Nevatrix on Instagram"
                            className="hover:text-white transition"
                        >
                            <Instagram size={18} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/nevatrix/"
                            aria-label="Connect with Nevatrix on LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            <Linkedin size={18} />
                        </Link>
                    </div>
                </div>

                {/* Col 2: Services */}
                <div>
                    <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                        Our Services
                    </h3>
                    <ul className="space-y-2">
                        {services.map((s) => (
                            <li key={s.href}>
                                <Link
                                    href={s.href}
                                    className="text-sm text-slate-400 hover:text-white transition"
                                >
                                    {s.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 3: Company */}
                <div>
                    <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                        Company
                    </h3>
                    <ul className="space-y-2">
                        {company.map((c) => (
                            <li key={c.href}>
                                <Link
                                    href={c.href}
                                    className="text-sm text-slate-400 hover:text-white transition"
                                >
                                    {c.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 4: Contact */}
                <div>
                    <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                        Contact Us
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-start gap-2">
                            <MapPin size={15} className="mt-0.5 shrink-0 text-slate-500" />
                            <span>Warangal, Telangana 506001, India</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={15} className="shrink-0 text-slate-500" />
                            <a
                                href="tel:+919989183654"
                                className="hover:text-white transition"
                                aria-label="Call Nevatrix"
                            >
                                +91 99891 83654
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={15} className="shrink-0 text-slate-500" />
                            <a
                                href="mailto:info@nevatrix.com"
                                className="hover:text-white transition"
                                aria-label="Email Nevatrix"
                            >
                                info@nevatrix.com
                            </a>
                        </li>
                    </ul>

                    {/* WhatsApp CTA */}
                    <a
                        href="https://wa.me/919989183654?text=Hi%20Nevatrix%2C%20I%27d%20like%20a%20free%20quote"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with Nevatrix on WhatsApp"
                        className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-lg transition"
                    >
                        {/* WhatsApp SVG icon */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp Us
                    </a>
                </div>

            </div>

            {/* ── Divider ── */}
            <div className="border-t border-slate-800" />

            {/* ── Bottom Bar ── */}
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
                <p>
                    © 2012–{new Date().getFullYear()}{" "}
                    <strong className="text-slate-400">Nevatrix Technologies Pvt. Ltd.</strong> | All Rights Reserved
                </p>
                <p className="text-center sm:text-right">
                    <strong className="text-slate-400">Web development company in Warangal</strong> providing website
                    design, <strong className="text-slate-400">SEO services in Warangal</strong>, mobile apps and
                    digital marketing across Warangal, Hanamkonda, Khammam &amp; Nizamabad.
                </p>
            </div>

            {/* ── Scroll to Top ── */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center hover:bg-slate-600 transition shadow-md"
            >
                <ArrowUp size={18} />
            </button>

        </footer>
    );
}

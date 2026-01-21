"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-slate-100 text-slate-700 relative">
            <div className="max-w-7xl mx-auto px-4 py-10 text-center">

                {/* LOGO */}
                <div className="flex justify-center mb-6">
                    <Image
                        src="/Nevatrix_logo.png"
                        alt="Nevatrix Logo"
                        width={170}
                        height={55}
                    />
                </div>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center gap-6 mb-12">
                    <Link href="#" aria-label="Facebook" className="hover:text-slate-900 transition">
                        <Facebook size={20} />
                    </Link>
                    <Link href="#" aria-label="Twitter" className="hover:text-slate-900 transition">
                        <Twitter size={20} />
                    </Link>
                    <Link href="#" aria-label="Instagram" className="hover:text-slate-900 transition">
                        <Instagram size={20} />
                    </Link>
                    <Link href="#" aria-label="LinkedIn" className="hover:text-slate-900 transition">
                        <Linkedin size={20} />
                    </Link>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-slate-300 mb-8" />

                {/* COPYRIGHT */}
                <p className="text-sm text-slate-600">
                    © 2012–{new Date().getFullYear()} Nevatrix Technologies Pvt. Ltd | All Rights Reserved
                </p>

                {/* SCROLL TO TOP */}
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition shadow-md"
                >
                    <ArrowUp size={18} />
                </button>

            </div>
        </footer>
    );
}

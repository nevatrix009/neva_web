import Image from "next/image";
import Link from "next/link";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-100 text-slate-700">
            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* TOP ROW: LOGO + SOCIAL */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* LOGO */}
                    <Image
                        src="/Nevatrix_logo.png"
                        alt="Nevatrix Logo"
                        width={160}
                        height={50}
                    />

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-5">
                        <Link href="#" aria-label="Facebook" className="hover:text-slate-900 transition">
                            <Facebook size={18} />
                        </Link>
                        <Link href="#" aria-label="Twitter" className="hover:text-slate-900 transition">
                            <Twitter size={18} />
                        </Link>
                        <Link href="#" aria-label="Instagram" className="hover:text-slate-900 transition">
                            <Instagram size={18} />
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="hover:text-slate-900 transition">
                            <Linkedin size={18} />
                        </Link>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-slate-300 mt-10 pt-12" />

                {/* FOUR SECTIONS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* SERVICES */}
                    <div>
                        <h4 className="text-slate-900 font-semibold mb-5">
                            Services
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services/web-development" className="hover:text-slate-900 transition">Web Development</Link></li>
                            <li><Link href="/services/ai-solutions" className="hover:text-slate-900 transition">AI Solutions</Link></li>
                            <li><Link href="/services/ui-ux-design" className="hover:text-slate-900 transition">UI / UX Design</Link></li>
                            <li><Link href="/services/digital-marketing" className="hover:text-slate-900 transition">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h4 className="text-slate-900 font-semibold mb-5">
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-slate-900 transition">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-slate-900 transition">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-slate-900 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* INSIGHTS */}
                    <div>
                        <h4 className="text-slate-900 font-semibold mb-5">
                            Insights
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/blog" className="hover:text-slate-900 transition">Blog</Link></li>
                            <li><Link href="/case-studies" className="hover:text-slate-900 transition">Case Studies</Link></li>
                            <li><Link href="/resources" className="hover:text-slate-900 transition">Resources</Link></li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-slate-900 font-semibold mb-5">
                            Contact
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-slate-500 mt-0.5" />
                                <span>India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-slate-500" />
                                <span>+91 9989183654 </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-slate-500" />
                                <span>info@nevatrix.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-slate-300 mt-16 pt-8 text-center text-sm text-slate-600">
                    © {new Date().getFullYear()} Nevatrix. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

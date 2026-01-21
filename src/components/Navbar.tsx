"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    BuildingOffice2Icon,
    BriefcaseIcon,
    ChevronDownIcon,
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    ShoppingCartIcon,
    CpuChipIcon,
    MegaphoneIcon,
    EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-white via-gray-50 to-white backdrop-blur border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/Nevatrix_logo.png"
                        alt="Nevatrix"
                        width={170}
                        height={55}
                        priority
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-12 text-base font-semibold text-gray-800">

                    {/* Company */}
                    <li className="relative group">
                        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition">
                            <BuildingOffice2Icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                            Company
                            <ChevronDownIcon className="w-4 h-4 text-blue-500 transition group-hover:rotate-180" />
                        </button>

                        <ul className="absolute top-full left-0 mt-4 w-56 bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            <li>
                                <Link href="/about" className="flex items-center gap-3 px-5 py-3 hover:bg-blue-100/50 rounded-lg transition">
                                    <BuildingOffice2Icon className="w-4 h-4 text-indigo-600" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="flex items-center gap-3 px-5 py-3 hover:bg-blue-100/50 rounded-lg transition">
                                    <BriefcaseIcon className="w-4 h-4 text-purple-600" />
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* Services */}
                    <li className="relative group">
                        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-50 transition">
                            <CodeBracketIcon className="w-5 h-5 text-purple-600 group-hover:text-purple-700" />
                            Services
                            <ChevronDownIcon className="w-4 h-4 text-purple-500 transition group-hover:rotate-180" />
                        </button>

                        <ul className="absolute top-full left-0 mt-4 w-72 bg-gradient-to-br from-white to-purple-50 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            <li><Link href="/services/ecommerce" className="flex items-center gap-3 px-5 py-3 hover:bg-purple-100/50 rounded-lg"><ShoppingCartIcon className="w-4 h-4 text-pink-600" />Ecommerce Development</Link></li>
                            <li><Link href="/services/full-stack" className="flex items-center gap-3 px-5 py-3 hover:bg-purple-100/50 rounded-lg"><CodeBracketIcon className="w-4 h-4 text-indigo-600" />Full Stack</Link></li>
                            <li><Link href="/services/cms" className="flex items-center gap-3 px-5 py-3 hover:bg-purple-100/50 rounded-lg"><BuildingOffice2Icon className="w-4 h-4 text-blue-600" />CMS Development</Link></li>
                            <li><Link href="/services/mobile-app" className="flex items-center gap-3 px-5 py-3 hover:bg-purple-100/50 rounded-lg"><DevicePhoneMobileIcon className="w-4 h-4 text-green-600" />Mobile App Development</Link></li>
                            <li><Link href="/services/ai-ml" className="flex items-center gap-3 px-5 py-3 hover:bg-purple-100/50 rounded-lg"><CpuChipIcon className="w-4 h-4 text-orange-600" />AI & ML</Link></li>
                            <li><Link href="/services/digital-marketing" className="flex items-center gap-3 px-5 py-3 hover:bg-purple-100/50 rounded-lg"><MegaphoneIcon className="w-4 h-4 text-red-600" />Digital Marketing</Link></li>
                        </ul>
                    </li>

                    {/* Contact */}
                    <li>
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-xl hover:scale-105 transition"
                        >
                            <EnvelopeIcon className="w-5 h-5" />
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-xl">
                    ☰
                </button>
            </nav>
        </header>
    );
}

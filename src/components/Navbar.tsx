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
    MegaphoneIcon,
    EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-white via-gray-50 to-white backdrop-blur border-b border-gray-200">

            {/* TOP BAR */}
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
                            <BuildingOffice2Icon className="w-5 h-5 text-blue-600" />
                            Company
                            <ChevronDownIcon className="w-4 h-4 text-blue-500 transition group-hover:rotate-180" />
                        </button>

                        <ul className="absolute top-full left-0 mt-4 w-56 bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            <li>
                                <Link href="/about" className="flex items-center gap-3 px-5 py-3 hover:bg-blue-100/50 rounded-lg">
                                    <BuildingOffice2Icon className="w-4 h-4 text-indigo-600" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="flex items-center gap-3 px-5 py-3 hover:bg-blue-100/50 rounded-lg">
                                    <BriefcaseIcon className="w-4 h-4 text-purple-600" />
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* Services */}
                    <li className="relative group">
                        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-50 transition">
                            <CodeBracketIcon className="w-5 h-5 text-purple-600" />
                            Services
                            <ChevronDownIcon className="w-4 h-4 text-purple-500 transition group-hover:rotate-180" />
                        </button>

                        <ul className="absolute top-full left-0 mt-4 w-72 bg-gradient-to-br from-white to-purple-50 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            <li>
                                <Link href="/services/ecommerce" className="flex items-center gap-3 px-5 py-3 hover:bg-purple-100/50 rounded-lg">
                                    <ShoppingCartIcon className="w-4 h-4 text-pink-600" />
                                    Ecommerce Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/full-stack" className="flex items-center gap-3 px-5 py-3 hover:bg-purple-100/50 rounded-lg">
                                    <CodeBracketIcon className="w-4 h-4 text-indigo-600" />
                                    Full Stack Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/mobile-app" className="flex items-center gap-3 px-5 py-3 hover:bg-purple-100/50 rounded-lg">
                                    <DevicePhoneMobileIcon className="w-4 h-4 text-green-600" />
                                    Mobile App Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/digital-marketing" className="flex items-center gap-3 px-5 py-3 hover:bg-purple-100/50 rounded-lg">
                                    <MegaphoneIcon className="w-4 h-4 text-red-600" />
                                    Digital Marketing
                                </Link>
                            </li>
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
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2"
                >
                    <span className="text-2xl">
                        {mobileOpen ? "✕" : "☰"}
                    </span>
                </button>
            </nav>

            {/* MOBILE MENU BELOW NAVBAR */}
            {mobileOpen && (
                <div className="md:hidden w-full bg-white border-t border-gray-200 shadow-lg relative z-40">

                    <ul className="flex flex-col p-6 gap-4 text-gray-800 font-semibold">

                        {/* Company */}
                        <li>
                            <button
                                onClick={() => setCompanyOpen(!companyOpen)}
                                className="flex items-center justify-between w-full py-3 px-2 rounded-lg hover:bg-gray-50"
                            >
                                <span className="flex items-center gap-2">
                                    <BuildingOffice2Icon className="w-5 h-5 text-blue-600" />
                                    Company
                                </span>
                                <ChevronDownIcon className={`w-5 h-5 transition ${companyOpen ? "rotate-180" : ""}`} />
                            </button>

                            {companyOpen && (
                                <ul className="pl-4 space-y-2 mt-2 border-l border-gray-200">
                                    <li>
                                        <Link href="/about" onClick={()=>setMobileOpen(false)} className="flex items-center gap-3 py-2 text-gray-700 hover:text-blue-600">
                                            <BuildingOffice2Icon className="w-5 h-5 text-indigo-600" />
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/careers" onClick={()=>setMobileOpen(false)} className="flex items-center gap-3 py-2 text-gray-700 hover:text-blue-600">
                                            <BriefcaseIcon className="w-5 h-5 text-purple-600" />
                                            Careers
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Services */}
                        <li>
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="flex items-center justify-between w-full py-3 px-2 rounded-lg hover:bg-gray-50"
                            >
                                <span className="flex items-center gap-2">
                                    <CodeBracketIcon className="w-5 h-5 text-purple-600" />
                                    Services
                                </span>
                                <ChevronDownIcon className={`w-5 h-5 transition ${servicesOpen ? "rotate-180" : ""}`} />
                            </button>

                            {servicesOpen && (
                                <ul className="pl-4 space-y-2 mt-2 border-l border-gray-200">

                                    <li>
                                        <Link href="/services/ecommerce" onClick={()=>setMobileOpen(false)} className="flex items-center gap-3 py-2 text-gray-700 hover:text-purple-600">
                                            <ShoppingCartIcon className="w-5 h-5 text-pink-600" />
                                            Ecommerce Development
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/services/full-stack" onClick={()=>setMobileOpen(false)} className="flex items-center gap-3 py-2 text-gray-700 hover:text-purple-600">
                                            <CodeBracketIcon className="w-5 h-5 text-indigo-600" />
                                            Full Stack Development
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/services/mobile-app" onClick={()=>setMobileOpen(false)} className="flex items-center gap-3 py-2 text-gray-700 hover:text-purple-600">
                                            <DevicePhoneMobileIcon className="w-5 h-5 text-green-600" />
                                            Mobile App Development
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/services/digital-marketing" onClick={()=>setMobileOpen(false)} className="flex items-center gap-3 py-2 text-gray-700 hover:text-purple-600">
                                            <MegaphoneIcon className="w-5 h-5 text-red-600" />
                                            Digital Marketing
                                        </Link>
                                    </li>

                                </ul>
                            )}
                        </li>

                        {/* Contact */}
                        <li className="pt-4 border-t border-gray-200 mt-2">
                            <Link
                                href="/contact"
                                onClick={()=>setMobileOpen(false)}
                                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                            >
                                <EnvelopeIcon className="w-5 h-5" />
                                Contact Us
                            </Link>
                        </li>

                    </ul>
                </div>
            )}
        </header>
    );
}
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="bg-white">
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Image
                    src="/Nevatrix_logo.png"
                    alt="Nevatrix"
                    width={160}
                    height={50}
                    priority
                />

                <ul className="hidden md:flex gap-8 text-sm font-medium text-nevDark">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services/web-development">Services</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

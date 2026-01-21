import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
    return (
        <div className="bg-gradient-to-r from-pink-500 via-orange-400 to-sky-500 text-white">
            <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-sm">

                {/* Left: Contact Info */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Mail size={14} />
                        <span>info@nevatrix.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone size={14} />
                        <span>+91 9989183654</span>
                    </div>
                </div>

                {/* Right: Social Icons */}
                <div className="flex items-center gap-4">
                    <Link href="#" aria-label="Facebook">
                        <Facebook size={16} />
                    </Link>
                    <Link href="#" aria-label="Twitter">
                        <Twitter size={16} />
                    </Link>
                    <Link href="#" aria-label="Instagram">
                        <Instagram size={16} />
                    </Link>
                    <Link href="#" aria-label="LinkedIn">
                        <Linkedin size={16} />
                    </Link>
                </div>

            </div>
        </div>
    );
}

import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="flex items-center">
                <Image src="/cartoon-developer.jpg" alt="Profile" width={128} height={128} className="w-20 h-20 rounded-full" />
            </div>
            <div className="flex items-center">
                <Navigation/>
            </div>
            <div className="flex space-x-4">
                <Link href="mailto:your-email@example.com">
                    <Image src="/gmail.png" alt="Email" width={64} height={64}   className="w-10 h-10" />
                </Link>
                <Link href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin.png" alt="LinkedIn" width={64} height={64} className="w-10 h-10" />
                </Link>
                <Link href="https://github.com/cristian-siguenza16" target="_blank" rel="noopener noreferrer">
                    <Image src="/github.png" alt="GitHub" width={64} height={64} className="w-10 h-10" />
                </Link>
            </div>
        </nav>
    );
};
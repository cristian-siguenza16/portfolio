"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex justify-between items-center p-4 bg-opacity-75 bg-black text-white ">
            <div className="flex space-x-4 items-center">
                <Link href="#">
                    <Image src="/facebook.png" alt="Email" width={64} height={64}   className="w-10 h-10" />
                </Link>
                <Link href="https://alex-siguenza" target="_blank" rel="noopener noreferrer">
                    <Image src="/instagram.png" alt="LinkedIn" width={64} height={64} className="w-10 h-10" />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image src="/discord.png" alt="GitHub" width={64} height={64} className="w-10 h-10" />
                </Link>
                <p>SOCIAL MEDIA</p>
            </div>
            <p>PRODUCED BY CRISTIAN SIGUENZA</p>
        </footer>
    );
};

export default Footer;
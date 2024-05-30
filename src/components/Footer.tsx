"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center p-4 bg-opacity-75 bg-black text-white space-y-4 md:space-y-0">
            <div className="flex justify-center md:justify-start space-x-4 items-center w-full md:w-auto">
                <Link href="https://www.facebook.com/cralsive16" target="_blank" rel="noopener noreferrer">
                    <Image src="/facebook.png" alt="Facebook" width={64} height={64} className="w-10 h-10" />
                </Link>
                <Link href="https://www.instagram.com/alex_siguenza_/" target="_blank" rel="noopener noreferrer">
                    <Image src="/instagram.png" alt="instagram" width={64} height={64} className="w-10 h-10" />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image src="/discord.png" alt="discord" width={64} height={64} className="w-10 h-10" />
                </Link>
                <p>SOCIAL MEDIA</p>
            </div>
            <p className="text-center md:text-right w-full md:w-auto">PRODUCED BY CRISTIAN SIGUENZA</p>
        </footer>
    );
};

export default Footer;
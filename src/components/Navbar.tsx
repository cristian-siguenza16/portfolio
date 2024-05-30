import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-opacity-75 bg-black text-white space-y-4 md:space-y-0">
      <div className="flex justify-center md:justify-start items-center w-full md:w-auto">
        <Link href="/my-profile">
          <Image src="/cartoon-developer.jpg" alt="Profile" width={128} height={128} className="w-20 h-20 rounded-full" />
        </Link>
      </div>
      <div className="flex justify-center md:justify-start items-center w-full md:w-auto">
        <Navigation />
      </div>
      <div className="flex justify-center md:justify-end space-x-4 w-full md:w-auto">
        <Link href="mailto:csiguenzavelasquez@gmail.com">
          <Image src="/gmail.png" alt="Email" width={64} height={64} className="w-10 h-10" />
        </Link>
        <Link href="https://linkedin.com/in/cristian-siguenza-6310b6281" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.png" alt="LinkedIn" width={64} height={64} className="w-10 h-10" />
        </Link>
        <Link href="https://github.com/cristian-siguenza16" target="_blank" rel="noopener noreferrer">
          <Image src="/github.png" alt="GitHub" width={64} height={64} className="w-10 h-10" />
        </Link>
      </div>
    </nav>
  );
};
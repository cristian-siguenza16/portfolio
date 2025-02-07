"use client"
import Image from "next/image";
import ButtonCopyClipboard from "./ButtonCopyClipboard";
import Link from "next/link";

/* className="bg-zinc-900 bg-opacity-90 rounded-lg shadow-md p-6 border border-gray-500 space-y-6 flex flex-col justify-between h-full" */

export default function AboutMeCard() {
    const emailText = "csiguenzavelasquez@gmail.com";

    return (
        <div className="relative w-full px-4">
            <div className="w-full h-full">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 flex justify-center items-center my-6 md:my-0">
                        <Image src="/perfil.jpeg" alt="Perfil" width={240} height={240} className="rounded-xl" />
                    </div>
                    <div className="w-full md:w-2/3 p-3 mt-7 md:mt-0 md:mr-6 space-y-4 text-lg md:text-xl">
                        <p>Hi, my name is Cristian Sigüenza. I am a full stack developer currently working at the pixela company. At 23 years old, I am a computer and information engineer who loves challenges and learning independently. I enjoy programming both backend and frontend. Additionally, I am fascinated by networks, telecommunications, and microcomponents...</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-lg md:text-xl">
                        <p><strong>EMAIL:</strong> {emailText}</p>
                        <ButtonCopyClipboard text={emailText} />
                    </div>
                    <Link href="/my-profile" className="border border-white bg-gray-800 bg-gradient-to-r hover:from-indigo-500 via-purple-500 hover:to-pink-500 p-2 rounded-md text-center md:text-left">MORE INFORMATION</Link>
                </div>
            </div>
        </div>
    );
}

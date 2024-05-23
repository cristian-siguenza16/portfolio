"use client"

import Image from "next/image";
import Link from "next/link";

// {/*style={{ backgroundImage: "url(/bg-home1.jpg)" }}*/}

export default function Home() {
  return (

    <main className="w-full h-screen relative">
      <div className="flex justify-center w-full h-full bg-cover bg-center bg-gray-900"

      >
        <div className="flex-col items-center">
          <h1 className="text-4xl font-bold md-1 m-10 text-center">MY PORTFOLIO</h1>
          <section className="border-gradient rounded-xl p-4 md-4 w-screen max-w-4xl relative bg-black bg-opacity-75 text-white">
            <h2 className="text-xl font-bold md-4 absolute -top-4 left-4 px-2">ABOUT ME!</h2>
            <div className="flex flex-col">
              <div className="flex py-6">
                <div className="w-1/3">
                  <div className="w-full h-60 flex items-center justify-center">
                    <Image src="/perfil.jpeg" alt="Perfil" width={128} height={128} className="w-60 rounded-xl" />
                  </div>
                </div>
                <div className="w-1/1 p-3 space-y-4 text-xl mt-6">
                  <p><strong>NAME:</strong> Cristian Siguenza</p>
                  <p><strong>PROFESSION:</strong> Computer and systems engineer</p>
                  <p><strong>MAIN SKILL:</strong> Full stack developer</p>
                  <p><strong>EMAIL:</strong> csiguenzavelasquez@gmail.com </p>
                </div>
              </div>
              <div>
                <p className="md-4 px-6 text-xl"><strong>DESCRIPTION:</strong>I am a person who likes challenges and likes to learn on
                  his own, I really like to program both backend and frontend, also the section on networks and
                  telecommunications catches my attention as microcomponents...
                </p>
              </div>
              <div className="grid justify-items-stretch p-3">
                <button className="border border-white bg-gray-800 bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 p-2 rounded-md justify-self-end">MORE INFORMATION</button>
              </div>
            </div>
          </section>
        </div>

        <footer className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 text-center text-white">
          <p>PRODUCED BY CRISTIAN SIGUENZA</p>
        </footer>
      </div>
    </main>
  );
}
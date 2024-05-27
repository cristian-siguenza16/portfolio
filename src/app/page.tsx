"use client"

import { useState } from "react";
import Image from "next/image";
import ButtonCopyClipboard from "@/components/ButtonCopyClipboard";
import { title } from "process";
import { GrNext, GrPrevious } from "react-icons/gr";


// {/*style={{ backgroundImage: "url(/bg-home1.jpg)" }}*/}


const allTechnologies = [
  {
    title: "Languages",
    technologies: [
      { name: 'Python', image: '/python.png' },
      { name: 'JavaScript', image: '/javascript.png' },
      { name: 'Java', image: '/java.png' },
      { name: 'TypeScript', image: '/typescript.png' },
      { name: 'C#', image: '/csharp.png' }
    ]
  },
  {
    title: "Frontend",
    technologies: [
      { name: 'React', image: '/react.png' },
      { name: 'NextJS', image: '/nextjs.png' },
      { name: 'CSS', image: '/css.png' },
      { name: 'HTML', image: '/html.png' },
      { name: 'Tailwind', image: '/tailwind.png' },
    ]
  },
  {
    title: "Backend",
    technologies: [
      { name: 'NodeJS', image: '/nodejs.png' },
      { name: 'NestJS', image: '/nestjs.png' },
      { name: 'Express', image: '/express.png' },
    ]
  },
  {
    title: "Databases",
    technologies: [
      { name: 'MySQL', image: '/mysql.png' },
      { name: 'MariaDB', image: '/mariadb.png' },
      { name: 'PostreSQL', image: '/postgresql.png' },
      { name: 'MongoDB', image: '/mongodb.png' },
    ]
  },
  {
    title: "Tools",
    technologies: [
      { name: 'Git', image: '/git.png' },
      { name: 'Docker', image: '/docker.png' },
      { name: 'VSCode', image: '/vscode.png' },
      { name: 'Kali Linux', image: '/kali.png' },
      { name: 'Windows 11', image: '/windows11.png' },
    ]
  }
]

export default function Home() {
  const [countTech, setTechList] = useState<number>(0);
  const emailText = "csiguenzavelasquez@gmail.com";

  const handleNextTech = () => {
    setTechList((prevState) => {
      if (prevState === 4) {
        return prevState = 0;
      }
      return prevState + 1;
    });
  };

  const handelPreviusTech = () => {
    setTechList((prevState) => {
      if (prevState === 0) {
        return prevState = 4;
      }
      return prevState - 1;
    });
  };

  return (
    <main>
      <div className="flex justify-center w-full min-h-screen bg-cover bg-center bg-gray-900">
        <div className="flex-col items-center">
          <h1 className="text-7xl my-10 text-center neon-text">MY PORTFOLIO</h1>
          <section className="border-gradient  rounded-xl my-8 p-4 md-4 w-screen max-w-4xl absolute bg-black bg-opacity-75 text-white">
            <h2 className="text-2xl font-bold md-4 absolute -top-3 left-4 px-4">ABOUT ME!</h2>
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
                  <div className="flex flex-row gap-8">
                    <p><strong>EMAIL:</strong> {emailText} </p>
                    <ButtonCopyClipboard text={emailText} />
                  </div>
                </div>
              </div>
              <div>
                <p className="md-4 px-6 text-xl"><strong>DESCRIPTION: </strong>I am a person who likes challenges and likes to learn on
                  his own, I really like to program both backend and frontend, also the section on networks and
                  telecommunications catches my attention as microcomponents...
                </p>
              </div>
              <div className="grid justify-items-stretch p-3">
                <button className="border border-white bg-gray-800 bg-gradient-to-r f hover:from-indigo-500 via-purple-500 hover:to-pink-500  p-2 rounded-md justify-self-end">MORE INFORMATION</button>
              </div>
            </div>
          </section>

          {/* TECHNOLOGIES SECTION */}
          <section className="border-gradient rounded-xl my-10 p-4 w-full max-w-4xl bg-black bg-opacity-75 text-white relative">
            <h2 className="text-2xl font-bold absolute -top-3 left-4 px-4">TECHNOLOGIES</h2>
            <div className="flex items-center justify-between mb-4 py-6">
              <button className="ml-2 hover:-translate-y-1 hover:scale-110" onClick={handelPreviusTech}>
                <GrPrevious className="w-12 h-12" />
              </button>
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-bold mb-4">{allTechnologies[countTech].title}</h3>
                <div className="flex space-x-4 items-center justify-center after:transition duration-700">
                  {allTechnologies[countTech].technologies.map((tech, index) => (
                    <div key={index} className="w-32 h-32 border border-white rounded-lg bg-gray-500 flex flex-col items-center justify-center gap-2 hover:animate-bounce">
                      <Image src={tech.image} alt={tech.name} width={48} height={48} className="object-fill w-16 h-16 rounded-md mx-auto" />
                      <p className="text-sm">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="mr-2 hover:-translate-y-1 hover:scale-110" onClick={handleNextTech}>
                <GrNext className="w-12 h-12" />
              </button>
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className={`w-3 h-3 rounded-full ${countTech === 0 ? "bg-white" : "bg-gray-500"}`} onClick={() => {setTechList(0);}}/>
                <button type="button" className={`w-3 h-3 rounded-full ${countTech === 1 ? "bg-white" : "bg-gray-500"}`} onClick={() => {setTechList(1);}}/>
                <button type="button" className={`w-3 h-3 rounded-full ${countTech === 2 ? "bg-white" : "bg-gray-500"}`} onClick={() => {setTechList(2);}}/>
                <button type="button" className={`w-3 h-3 rounded-full ${countTech === 3 ? "bg-white" : "bg-gray-500"}`} onClick={() => {setTechList(3);}}/>
                <button type="button" className={`w-3 h-3 rounded-full ${countTech === 4 ? "bg-white" : "bg-gray-500"}`} onClick={() => {setTechList(4);}}/>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section className="border-gradient rounded-xl my-10 p-4 w-full max-w-4xl bg-black bg-opacity-75 text-white relative">
            <h2 className="text-xl font-bold mb-4">PROJECTS</h2>
            <div className="space-y-4">
              <div className="border border-gray-600 p-4 rounded-lg">
                <p className="mb-2"><strong>Description:</strong> Project 1...</p>
                <p><strong>Technologies:</strong> React, Node.js...</p>
                <div className="flex justify-end">
                  <button className="border border-white bg-gray-800 hover:bg-gray-700 p-2 rounded-md">MORE...</button>
                </div>
              </div>
              <div className="border border-gray-600 p-4 rounded-lg">
                <p className="mb-2"><strong>Description:</strong> Project 2...</p>
                <p><strong>Technologies:</strong> Java, Spring...</p>
                <div className="flex justify-end">
                  <button className="border border-white bg-gray-800 hover:bg-gray-700 p-2 rounded-md">MORE...</button>
                </div>
              </div>
            </div>
          </section>

          {/* BLOG SECTION */}
          <section className="border-gradient rounded-xl my-10 p-4 w-full max-w-4xl bg-black bg-opacity-75 text-white relative">
            <h2 className="text-xl font-bold mb-4">BLOG</h2>
            <div className="border border-gray-600 p-4 rounded-lg">
              <p className="mb-2"><strong>Title:</strong> Blog Post 1</p>
              <p><strong>Description:</strong> Description of the blog post...</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

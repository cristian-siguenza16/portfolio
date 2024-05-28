import { useState } from "react";
import Image from "next/image";
import ButtonCopyClipboard from "@/components/ButtonCopyClipboard";
import { title } from "process";
import { GrNext, GrPrevious } from "react-icons/gr";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import TechnologiesCard from "@/components/TechnologiesCard";


/*{ style={{ backgroundImage: "url(/bg-home1.jpg)" }} } 

<section className="border-gradient rounded-xl my-8 p-4 md-4 w-screen max-w-5xl absolute bg-black bg-opacity-75 text-white">
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

*/

export default function Home() {
  const emailText = "csiguenzavelasquez@gmail.com";

  return (
    <main>
      <div className="flex justify-center items-center w-full min-h-screen bg-cover bg-center font-mono" style={{ backgroundImage: "url(/bg-home.jpg)" }}>
        <div className="flex-col items-center">
          <h1 className="text-7xl my-10 text-center p-4 md-4 max-w-5xl neon-text bg-black bg-opacity-95">FULL STACK DEVELOPER</h1>
          <section id="about-me" className="border-gradient rounded-xl my-8 p-4 md-4 w-screen max-w-5xl relative bg-black bg-opacity-75 text-white">
            <h2 className="text-2xl font-bold absolute -top-3 left-4 px-4">ABOUT ME!</h2>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 flex justify-center items-center my-6 md:mb-0">
                <Image src="/perfil.jpeg" alt="Perfil" width={240} height={240} className="rounded-xl" />
              </div>
              <div className="w-full md:w-2/3 p-3 mt-7 mr-6 space-y-4 text-xl">
                <p>Hi, my name is Cristian Siguenza. I am a full stack developer. At 22 years old, I am a computer and information engineer who loves challenges and learning independently. I enjoy programming both backend and frontend. Additionally, I am fascinated by networks, telecommunications, and microcomponents...</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-4 text-xl">
                <p><strong>EMAIL:</strong> {emailText}</p>
                <ButtonCopyClipboard text={emailText} />
              </div>
              <button className="border border-white bg-gray-800 bg-gradient-to-r f hover:from-indigo-500 via-purple-500 hover:to-pink-500  p-2 rounded-md justify-self-end">MORE INFORMATION</button>
            </div>
          </section>

          {/* TECHNOLOGIES SECTION */}
          <section id="technologies" className="border-gradient rounded-xl my-10 p-4 w-full max-w-5xl bg-black bg-opacity-75 text-white relative">
            <h2 className="text-2xl font-bold absolute -top-3 left-4 px-4">TECHNOLOGIES</h2>
            <TechnologiesCard />
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="border-gradient rounded-xl my-10 p-4 w-full max-w-5xl bg-black bg-opacity-75 text-white relative">
            <h2 className="text-2xl font-bold absolute -top-3 left-4 px-4">PROJECTS</h2>
            <div className="space-y-4 m-6 text-xl">
              <ProjectCard title="Dead Run"
                description="It's a platform game, with a multiplayer option for up to 4 players, 3 different worlds where each player has 3 lives and there are objects such as extra lives, diamonds that increase points and mysterious boxes that give powers to the player who caches it, the players They compete to reach the goal of each world, depending on where they arrive they obtain points that accumulate and at the end of the 3 worlds they know who is the winner of the game. In this project I was a third world developer, both backend and frontend, and I was also the project manager."
                technologies="Python, Git, Windows, PyCharm"
              />
              <ProjectCard title="Megatubos"
                description="It's a software made to measure for the megatube company, the application is developed in C# and has several modules that help the company to have control over its sales, products, customers, sales history and has a charts section. where you can view the best-selling product and the customer with the most purchases in the month.
              My role was to perform the CRUD for each module and perform the data analysis for the chart, as well as project manager."
                technologies="C#, Git, Windows, Visual Studio"
              />
              <div className="flex justify-end">
                <Link href="/my-projects" className="border border-white bg-gray-800 hover:bg-gray-700 p-2 rounded-md text-lg">MORE PROJECTS</Link>
              </div>
            </div>
          </section>

          {/* BLOG SECTION */}
          <section id="blog" className="border-gradient rounded-xl my-10 p-4 w-full max-w-5xl bg-black bg-opacity-75 text-white relative">
            <h2 className="text-2xl font-bold absolute -top-3 left-4 px-4">BLOG</h2>
            <div className="space-y-4 m-6 text-xl">
              <BlogCard title="The Silent Revolution That Is Transforming the World"
                description="In the modern era, the term 'Internet of Things' (IoT) has emerged as one of the most promising and transformative trends in the technological field. But what exactly is IoT and why is it so important in the evolution of today's world?..."
              />
              <div className="flex justify-end">
                <Link href="/my-blog" className="border border-white bg-gray-800 hover:bg-gray-700 p-2 rounded-md text-lg">READ BLOG</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

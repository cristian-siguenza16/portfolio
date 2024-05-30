"use client";

import Image from "next/image";
import Link from "next/link";

interface Project {
    id: string;
    title: string;
    technologies: string[];
    descriptionParagraphs: { text: string; image: string }[];
    github: string;
}

const allProjects = [
    {
        id: "1",
        title: "Dead Run",
        technologies: ["Python", "Git"],
        descriptionParagraphs: [{ text: "Hola mundo", image: "/bg.jpg" }],
        github: "https://github.com/cristian-siguenza16/intro-react"
    },
    {
        id: "2",
        title: "Megatubos",
        technologies: ["C#", "Git"],
        descriptionParagraphs: [{ text: "Hola mundo", image: "/bg.jpg" }],
        github: "https://github.com/cristian-siguenza16/Proyecto-MegaTubos-Ingenieria-Software"
    },
    {
        id: "3",
        title: "Big data",
        technologies: ["C#", "Git"],
        descriptionParagraphs: [{ text: "Hola mundo", image: "/bg.jpg" }],
        github: "https://github.com/Fernandavasquez/proyecto-bigdata"
    },
    {
        id: "4",
        title: "Rock paper scissors with AI",
        technologies: ["C#", "Git"],
        descriptionParagraphs: [{ text: "Hola mundo", image: "/bg.jpg" }],
        github: "https://github.com/cristian-siguenza16/intro-react"
    },
    {
        id: "5",
        title: "PDF Reader",
        technologies: ["C#", "Git"],
        descriptionParagraphs: [{ text: "Hola mundo", image: "/bg.jpg" }],
        github: "https://github.com/cristian-siguenza16/Proyecto_1_LectorPDF"
    },
    {
        id: "6",
        title: "Video Player",
        technologies: ["C#", "Git"],
        descriptionParagraphs: [{ text: "Hola mundo", image: "/bg.jpg" }],
        github: "https://github.com/cristian-siguenza16/intro-react"
    },
];

interface Props {
    params: {
        id: string;
    };
}

export default function ProjectProfile({ params }: Props) {
    function findProjectById(id: string): Project | undefined {
        return allProjects.find(project => project.id === id);
    }

    const project = findProjectById(params.id);

    if (project === undefined) {
        return (
            <main>
                <div className="flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-gray-900 font-mono" style={{ backgroundImage: "url(/bg-home.jpg)" }}>
                    <div className="container mx-auto p-8 rounded-xl my-8 p-4 md-4 w-screen max-w-7xl bg-black bg-opacity-75 text-white">
                        <h1 className="text-white text-5xl text-center">No se pudo encontrarl el proyecto</h1>
                    </div>
                </div>
            </main>
        );
    };

    return (
        <main>
            <div className="flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-gray-900 font-mono" style={{ backgroundImage: "url(/bg-home.jpg)" }}>
                <div className="container mx-auto p-8 border border-white rounded-xl my-8 p-4 md-4 w-screen max-w-7xl bg-black bg-opacity-75 text-white">
                    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

                    <div className="flex flex-wrap gap-4 mb-8 text-black">
                        {project.technologies.map((tech, index) => (
                            <div key={index} className="bg-gray-200 p-4 rounded-md">
                                <p>{tech}</p>
                            </div>
                        ))}
                    </div>

                    {project.descriptionParagraphs.map((paragraph, index) => (
                        <div key={index} className="mb-8 justify-center text-xl">
                            <p className="mb-4">{paragraph.text}</p>
                            <Image src={paragraph.image} alt={`Image ${project.title} ${index + 1}`} className="mb-4" width={1200} height={600} />
                        </div>
                    ))}

                    <div className="flex justify-between">
                        <Link href="/my-projects" className="border border-blue-600 bg-gray-800 hover:bg-gray-700 p-2 rounded-md text-sm">
                            Back to Main Page
                        </Link>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer" className="border border-blue-600 bg-gray-800 hover:bg-gray-700 p-2 rounded-md text-sm">
                            GitHub Repository
                        </Link>
                    </div>
                </div>
            </div>
        </main >

    );
}
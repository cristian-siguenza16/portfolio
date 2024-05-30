"use client";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Image from "next/image";

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

export default function TechnologiesCard() {
    const [countTech, setTechList] = useState<number>(0);

    const handleNextTech = () => {
        setTechList((prevState) => {
            if (prevState === 4) {
                return prevState = 0;
            }
            return prevState + 1;
        });
    };

    const handelPreviousTech = () => {
        setTechList((prevState) => {
            if (prevState === 0) {
                return prevState = 4;
            }
            return prevState - 1;
        });
    };
    return (
        <div className="flex flex-row items-center justify-between mb-4 py-6 md:space-y-0">
            <button className="ml-2 hover:-translate-y-1 hover:scale-110" onClick={handelPreviousTech}>
                <GrPrevious className="w-8 h-8 md:w-12 md:h-12" />
            </button>
            <div className="flex flex-col items-center md:items-start">
                <h3 className="text-base md:text-lg font-bold mb-4 text-center md:text-left">{allTechnologies[countTech].title}</h3>
                <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:space-x-4  items-center justify-center w-full">
                    {allTechnologies[countTech].technologies.map((tech, index) => (
                        <div key={index} className="w-24 h-24 md:w-32 md:h-32 border border-white rounded-lg bg-gray-500 bg-opacity-75 flex flex-col items-center justify-center gap-2 hover:scale-110">
                            <Image src={tech.image} alt={tech.name} width={48} height={48} className="object-fill w-12 h-12 md:w-16 md:h-16 rounded-md mx-auto" />
                            <p className="text-xs md:text-sm">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className="mr-2 hover:translate-y-1 hover:scale-110" onClick={handleNextTech}>
                <GrNext className="w-8 h-8 md:w-12 md:h-12" />
            </button>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-1 md:space-x-3 rtl:space-x-reverse">
                {[...Array(5)].map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${countTech === index ? "bg-white" : "bg-gray-500"}`}
                        onClick={() => { setTechList(index); }}
                    />
                ))}
            </div>
        </div>
    );

}
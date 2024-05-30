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
        technologies: ["Python", "Git", "Windows", "PyCharm"],
        descriptionParagraphs: [
            { 
                text: "This is a game developed in Python with the aim of using design patterns. It's a platform racing game, as shown in the menu image. The game features a multiplayer option and three worlds. In this project, my role was to develop the entire third world, both frontend and backend. I was also responsible for integrating all parts and unifying the game, as well as creating the game engine.",
                image: "/deadrun1.png" 
            },
            { 
                text: "The game is optimized so that up to four friends can play simultaneously with different controls. Player 1 uses the arrow keys (left-back, up-jump, down-slide, right-forward), Player 2 uses (a-back, w-jump, s-slide, d-forward), Player 3 uses (j-back, i-jump, k-slide, l-forward), and Player 4 uses the numpad keys (4-back, 8-jump, 5-slide, 6-forward).",
                image: "/deadrun2.png" 
            },
            { 
                text: "The game features three worlds, as mentioned earlier. Each player has three lives, which are lost if they hit obstacles in each world. If a player falls into the abyss, they die immediately and respawn in the next world. Each world has different obstacles and increasing complexity. There are also items players can collect, such as diamonds for points, extra lives, and mystery boxes that grant various abilities. For example, lightning bolts paralyze a random opponent, oil reduces the speed of a random player temporarily, and the jetpack increases the speed of the player who catches the mystery box. At the end of the three worlds, a results table is displayed to determine the winner.",
                image: "/deadrun3.png" 
            },
        ],
        github: "https://github.com/cristian-siguenza16/Dead-Run"
    },
    {
        id: "2",
        title: "Megatubos",
        technologies: ["C#", "Git", "Windows", "Visual Studio", "MySQL"],
        descriptionParagraphs: [
            { 
                text: "This is a custom software project featuring various modules such as Login, Clients, Sellers, Product, Sales, Sales History, and Charts. The project was developed in C# for the systematization of this company, with MySQL as the database. My role in this project was to create the database relationships with the necessary tables and fields, as well as some module functions, especially the sales module, sales history, and charts module for user interpretation and decision making. I was also the project manager and team leader.",
                image: "/megatubos1.png" 
            },
            { 
                text: "As shown in the image below, one of the most important modules is the Sales or Add Sales module. All modules have their respective CRUD operations, but the most important for the company is the Add Sales module, as it defines the company's revenue. When adding a sale, this interface is displayed to add client details, purchase details, and a brief description of the purchase. Upon completing the sale, the invoice is printed, and there is an option to quote products for better customer service.",
                image: "/megatubos2.png" 
            },
            { 
                text: "There is also a Sales History section, which is better understood with charts for easier data interpretation. As shown in the image, data was loaded into the database to simulate sales and clients, allowing users to see how the charts function and select the desired month for easier company decision making.",
                image: "/megatubos3.png" 
            },
        ],
        github: "https://github.com/cristian-siguenza16/Proyecto-MegaTubos-Ingenieria-Software"
    },
    {
        id: "3",
        title: "Big data",
        technologies: ["Python", "Git", "Windows", "PyCharm", "MySQL", "MongoDB", "AWS(DynamoDB)"],
        descriptionParagraphs: [
            { 
                text: "This project was developed to interpret data through the creation of graphs and extraction of important data to transform them into information. This information can then be analyzed by the user to make decisions based on their needs. We developed an application with three databases containing almost one million records each, including weather and currency exchange data from various countries. This project was entirely developed by me.",
                image: "/bigdata1.png" 
            },
            { 
                text: "As shown in the image, there are three databases with different response times. This was done to verify which database has the best response time, with MongoDB being the fastest. The user can also compare currency exchanges by selecting the months they want to compare. In the image, the exchange rate from dollar to quetzal is compared between January and August.",
                image: "/bigdata2.png" 
            },
            { 
                text: "The weather data is not only for the country but also for all the states or departments of the selected country. As shown in the image, Guatemala is selected, and the city of Quetzaltenango is being compared for the lowest temperatures in those two months. As expected, January is a very cold month in this city, which is demonstrated by the green graph showing lower temperatures compared to August, which is a rainy but warm month.",
                image: "/bigdata3.png" 
            },
        ],
        github: "https://github.com/Fernandavasquez/proyecto-bigdata"
    },
    {
        id: "4",
        title: "Rock paper scissors with AI",
        technologies: ["Python", "Git", "Windows", "Jupyter Notebook"],
        descriptionParagraphs: [
            { 
                text: "In this project, I handled functionality testing and was the project manager, assigning tasks and verifying their completion. This is an artificial intelligence project used to recognize hand silhouettes and interpret them as rock, paper, or scissors. The game can be played by two players or one player against the computer, as shown later.",
                image: "/ppt1.png" 
            },
            { 
                text: "The game involves placing hands in front of the camera for hand recognition. Press the S key to start the game, and the game detects movement when the hand passes the middle of the screen. There are two elevations, and on the third elevation, the player should show their choice (rock, paper, or scissors). The application immediately recognizes the gesture and compares it to determine the winner.",
                image: "/ppt2.png" 
            },
            { 
                text: "For the game to function correctly, good lighting is essential. The camera is also crucial, as the game cannot work without it. Libraries such as cv2 from opencv-python and mediapipe are used to interpret frames in real time and convert these images into AI-recognizable hand patterns to verify if they match the predefined gestures (rock, paper, or scissors).",
                image: "/ppt3.png" 
            },
        ],
        github: "https://github.com/cristian-siguenza16/proyecto_IA_PPT"
    },
    {
        id: "5",
        title: "PDF Reader",
        technologies: ["Java", "Git", "Windows", "Netbeans"],
        descriptionParagraphs: [
            { 
                text: "This project was created to read metadata from PDF files exclusively. Specific functions were developed to read the metadata of the files. As shown in the image, the application has two initial options: load previously selected and saved files or load new files to view their metadata. In this project, I was responsible for the entire backend and served as the project manager and team leader.",
                image: "/pdfreader1.png" 
            },
            { 
                text: "When selecting files, make sure to choose one with a .pdf extension for the application to work correctly. Once the file is selected, the application will extract the metadata and display it on the interface.",
                image: "/pdfreader2.png" 
            },
            { 
                text: "The user can choose multiple files or even a folder, and the program will automatically select the files with a .pdf extension for reading. The user can decide whether to save the metadata readings or discard them. When saved, the data is stored in a .txt file, which can be displayed by loading the data. In this option, there is a search feature to find the desired files by title or file name.",
                image: "/pdfreader3.png" 
            },
        ],
        github: "https://github.com/cristian-siguenza16/Proyecto_1_LectorPDF"
    },
    {
        id: "6",
        title: "Sermasoft",
        technologies: ["JavaScript", "Windows", "VSCode", "Express", "MongoDB"],
        descriptionParagraphs: [
            { 
                text: "This is a project developed with JavaScript using the Express framework and MongoDB database. It is a web application or system for managing clothing sales through Instagram. It is being developed to help users manage their business by keeping track of the clothes sold and customer requests via Instagram messages. The application has three modules: login, inventory, and sales. The complexity lies in integrating the Instagram API, linking products with Instagram images. This project was entirely developed by me, including backend, frontend, and database.",
                image: "/sermasoft1.png" 
            },
            { 
                text: "You can add clothing items using the 'Add Item' button, as shown in the image. When adding an item, it does not initially contain any photos, only a description and availability. This helps keep track of sold items and prevents selling out-of-stock items. Once added, the item appears on the left under available items, and the user can modify the description and price as needed.",
                image: "/sermasoft2.png" 
            },
            { 
                text: "When the user connect the application with Instagram, as shown in the image, the product now includes an image. This is done using a token obtained from Meta Developer. The image must match the product description in the Instagram post, including matching the product ID and brand. If the post contains a carousel of images, the application can handle it, providing image variability and better control of sold items through Instagram posts. The sales module is still under development.",
                image: "/sermasoft3.png" 
            },
        ],
        github: "#"
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
                <div className="container mx-4 p-8 border border-white rounded-xl my-8 p-4 md-4 w-screen max-w-7xl bg-black bg-opacity-75 text-white">
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
import ProjectCard from "@/components/ProjectCard";

export default function page() {
    return (
        <main>
            <div className="flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-gray-900 font-mono" style={{ backgroundImage: "url(/bg-home.jpg)" }}>
                <div className="container mx-auto px-4 py-8 text-white">
                    <h1 className="text-3xl font-bold mb-4">MY PROJECTS:</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg px-2">
                        <ProjectCard id="1"
                            title="Dead Run"
                            description="Platform game project, with a multiplayer option for up to 4 players, 3 different worlds and objects, the players They compete to reach the goal of each world, at the end of the 3 worlds they know who is the winner of the game. In this project I was a third world developer, both backend and frontend, and I was also the project manager."
                            technologies="Python, Git, Windows, PyCharm"
                        />
                        <ProjectCard id="2"
                            title="Megatubos"
                            description="It's a software made to measure for the megatube company, the application is developed in C# and has several modules that help the company to have control over its sales, products, customers, sales history and has a charts section. My role was to perform the CRUD for each module and perform the data analysis for the chart, as well as project manager."
                            technologies="C#, Git, Windows, Visual Studio"
                        />
                        <ProjectCard id="3"
                            title="Big data"
                            description="This project was carried out to interpret data such as climate and currency change of almost all of countries from January 2023 to September 2023, with almost 1 million data stored in 3 different databases, in this project i perform the part of the frontend or UI, the charts for the data per month and I was also the project manager."
                            technologies="Python, Git, Windows, PyCharm"
                        />
                        <ProjectCard 
                            id="4"
                            title="Rock paper scissors with AI"
                            description="It is a project with AI, it contains the multiplayer option of 2 people or 1 person against the computer, for its operation the computer camera is used to be able to visualize the figures of the hands, my role was to be the Project Manager and perform operating tests and optimize some functions."
                            technologies="Python, Git, Windows, PyCharm"
                        />
                        <ProjectCard 
                            id="5"
                            title="PDF Reader"
                            description="This project was carried out to be able to read the metadata of any PDF to the user's choice, the entire metadata from the most basic, which is the name, size, version, etc. to something more complex such as the Number of images, Fonts used, etc. In this project my role was to perform all the backend to read the metadata of the PDF."
                            technologies="Java, Git, Windows, Netbeans"
                        />
                        <ProjectCard id="6"
                            title="Sermasoft"
                            description="This project is a custom-made web application designed to systematize the sales of a clothing business through Instagram. The application contains three modules: login, sales, and inventory. It connects to Instagram via its API to retrieve photographs from posts and link them to the products. The project was entirely developed by myself."
                            technologies="Java, Git, Windows, Netbeans"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
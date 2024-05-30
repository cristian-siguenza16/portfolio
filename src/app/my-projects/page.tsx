import ProjectCard from "@/components/ProjectCard";

export default function page() {
    return (
        <main>
            <div className="flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-gray-900 font-mono" style={{ backgroundImage: "url(/bg-home.jpg)" }}>
                <div className="container mx-auto px-4 py-8 text-white">
                    <h1 className="text-3xl font-bold mb-4">MY PROJECTS:</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
                        <ProjectCard id="1"
                            title="Dead Run"
                            description="Platform game project, with a multiplayer option for up to 4 players, 3 different worlds and objects, the players They compete to reach the goal of each world, at the end of the 3 worlds they know who is the winner of the game. In this project I was a third world developer, both backend and frontend, and I was also the project manager."
                            technologies="Python, Git, Windows, PyCharm"
                        />
                        <ProjectCard id="2"
                            title="Megatubos"
                            description="It's a software made to measure for the megatube company, the application is developed in C# and has several modules that help the company to have control over its sales, products, customers, sales history and has a charts section. where you can view the best-selling product and the customer with the most purchases in the month.
                                         My role was to perform the CRUD for each module and perform the data analysis for the chart, as well as project manager."
                            technologies="C#, Git, Windows, Visual Studio"
                        />
                        <ProjectCard id="3"
                            title="Big data"
                            description="This project was carried out to interpret data such as climate and currency change of all the almost all of them from May 2023 to September 2023, with almost 1 million data stored in 3 different databases, all Databases had the same data and these if MySQL, Mongodb and AWS (Dynamodb), the purpose was to be able to agree on the databases and see their response times with several data, in this project i perform the part of the frontend or UI, the charts for the data per month and I was also the project manager."
                            technologies="Python, Git, Windows, PyCharm"
                        />
                        <ProjectCard 
                            id="4"
                            title="Rock paper scissors with AI"
                            description="It is a project with AI, it contains the multiplayer option of 2 people or 1 person against the computer, for its operation the computer camera is used to be able to visualize the figures of the hands and that the application interprets the figure of the hand for the hand for To be able to decide who won and show the winner on the screen, my role was to be the Project Manager and perform operating tests and optimize some functions."
                            technologies="Python, Git, Windows, PyCharm"
                        />
                        <ProjectCard 
                            id="5"
                            title="PDF Reader"
                            description="This project was carried out to be able to read the metadata of any PDF to the user's choice, the entire metadata from the most basic, which is the name, the number of pages and the size of the file to something more complex such as the Number of images, the number of text sources and keywords contained in the file. In this project my role was to perform all the backend to read the metadata of the PDF."
                            technologies="Java, Git, Windows, Netbeans"
                        />
                        <ProjectCard id="6"
                            title="Video Player"
                            description="This project is a video player, where the user can create their reproduction lists, the user can add videos to their choice in the created reproduction lists and be able to visualize them with our application, it has all the necessary controls, play, pause, next, previous and volume control, it was carried out using a data structure that were lists double linked for their proper operation, in this project my role was to perform the backend for video reproduction, storage and the functions for the controls."
                            technologies="Java, Git, Windows, Netbeans"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
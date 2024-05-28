import ProjectCard from "@/components/ProjectCard";

export default function page() {
    return (
        <main>
            <div className="flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-gray-900 font-mono" style={{ backgroundImage: "url(/bg-home.jpg)" }}>
                <div className="container mx-auto px-4 py-8 text-white">
                    <h1 className="text-3xl font-bold mb-4">MY PROJECTS:</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
                        <ProjectCard title="Dead Run"
                            description="Platform game project, with a multiplayer option for up to 4 players, 3 different worlds where each player has 3 lives and there are objects such as extra lives, diamonds that increase points and mysterious boxes that give powers to the player who caches it, the players They compete to reach the goal of each world, depending on where they arrive they obtain points that accumulate and at the end of the 3 worlds they know who is the winner of the game. In this project I was a third world developer, both backend and frontend, and I was also the project manager."
                            technologies="Python, Git, Windows, PyCharm"
                        />
                        <ProjectCard title="Megatubos"
                            description="It's a software made to measure for the megatube company, the application is developed in C# and has several modules that help the company to have control over its sales, products, customers, sales history and has a charts section. where you can view the best-selling product and the customer with the most purchases in the month.
                                         My role was to perform the CRUD for each module and perform the data analysis for the chart, as well as project manager."
                            technologies="C#, Git, Windows, Visual Studio"
                        />
                        <ProjectCard title="Dead Run"
                            description="Platform game project, with a multiplayer option for up to 4 players, 3 different worlds where each player has 3 lives and there are objects such as extra lives, diamonds that increase points and mysterious boxes that give powers to the player who caches it, the players They compete to reach the goal of each world, depending on where they arrive they obtain points that accumulate and at the end of the 3 worlds they know who is the winner of the game. In this project I was a third world developer, both backend and frontend, and I was also the project manager."
                            technologies="Python, Git, Windows, PyCharm"
                        />
                        <ProjectCard title="Dead Run"
                            description="Platform game project, with a multiplayer option for up to 4 players, 3 different worlds where each player has 3 lives and there are objects such as extra lives, diamonds that increase points and mysterious boxes that give powers to the player who caches it, the players They compete to reach the goal of each world, depending on where they arrive they obtain points that accumulate and at the end of the 3 worlds they know who is the winner of the game. In this project I was a third world developer, both backend and frontend, and I was also the project manager."
                            technologies="Python, Git, Windows, PyCharm"
                        />
                        <ProjectCard title="Dead Run"
                            description="Platform game project, with a multiplayer option for up to 4 players, 3 different worlds where each player has 3 lives and there are objects such as extra lives, diamonds that increase points and mysterious boxes that give powers to the player who caches it, the players They compete to reach the goal of each world, depending on where they arrive they obtain points that accumulate and at the end of the 3 worlds they know who is the winner of the game. In this project I was a third world developer, both backend and frontend, and I was also the project manager."
                            technologies="Python, Git, Windows, PyCharm"
                        />
                        <ProjectCard title="Dead Run"
                            description="Platform game project, with a multiplayer option for up to 4 players, 3 different worlds where each player has 3 lives and there are objects such as extra lives, diamonds that increase points and mysterious boxes that give powers to the player who caches it, the players They compete to reach the goal of each world, depending on where they arrive they obtain points that accumulate and at the end of the 3 worlds they know who is the winner of the game. In this project I was a third world developer, both backend and frontend, and I was also the project manager."
                            technologies="Python, Git, Windows, PyCharm"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
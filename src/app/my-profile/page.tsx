import Link from "next/link";

export default function page() {
    return (
        <main>
            <div className="flex justify-center items-center w-full min-h-screen bg-cover bg-center font-mono" style={{ backgroundImage: "url(/bg-home.jpg)" }}>
                <div className="relative border border-white rounded-xl my-8 p-4 md-4 w-screen max-w-7xl bg-black bg-opacity-90 text-white">
                    <div className="flex flex-col md:flex-row gap-4 mx-6 text-xl">
                        <div className="flex flex-col gap-4 py-3 z-[30] w-full md:w-1/2">
                            <p><strong>Name:</strong> Cristian Alexander Sigüenza Velásquez</p>
                            <p><strong>Nationality:</strong> Guatemalan</p>
                            <p><strong>Languages:</strong></p>
                            <ul className="ml-4 list-disc">
                                <li>Native Spanish</li>
                                <li>{`English B1+`}</li>
                            </ul>
                            <p><strong>Education:</strong></p>
                            <ul className="ml-4 list-disc">
                                <li>Computer Science and Systems Engineering <br />Rafael Landívar University <br /> {`(2020 - Currently studying the final year of the degree)`}</li>
                                <li>{`English B1+`} <br />{`IGA (National American Institute)`}<br />{`2014-2015`}</li>
                            </ul>
                            <p><strong>Skills:</strong></p>
                            <ul className="ml-4 list-disc">
                                <li>Communication</li>
                                <li>Problem Solving</li>
                                <li>Teamwork</li>
                                <li>Leadership</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 py-3 z-[30] w-full md:w-1/2">
                            <p><strong>Work Experience:</strong></p>
                            <ul className="ml-4 list-disc">
                                <li>{`Bootcamp, Cari Latin America (2023 - 1 month)`}</li>
                                <li>In this bootcamp, I developed the ability to communicate and work with people I didn't know and to carry out a project with filament, Laravel, PHP. My role was to develop the sales history module and statistics for the same module.</li>
                            </ul>
                            <p><strong>Hobbies:</strong></p>
                            <ul className="ml-4 list-disc">
                                <li>Playing video games</li>
                                <li>Traveling</li>
                                <li>Hanging out with friends</li>
                                <li>Watching series or movies, my favorites are science fiction, horror</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-end items-center mt-6">
                        <Link href="/" className="border border-white bg-gray-800 bg-gradient-to-r hover:from-indigo-500 via-purple-500 hover:to-pink-500 p-2 rounded-md text-center w-1/6">BACK</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
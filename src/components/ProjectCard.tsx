"use client"
type Props = {
    title: string;
    description: string;
    technologies: string;
}

export default function ProjectCard({ title, description, technologies }: Props) {
    return (
        <div className="bg-zinc-900 bg-opacity-90 rounded-lg shadow-md p-6 border border-gray-500 space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-6">
                <p><strong>Title: </strong>{title}</p>
                <p className="mb-2"><strong>Description: </strong>{description}</p>
                <p><strong>Technologies: </strong>{technologies}</p>
            </div>
            <div className="flex justify-end items-end mt-auto">
                <button className="border border-white bg-gray-800 hover:bg-gray-700 p-2 rounded-md text-sm">MORE...</button>
            </div>
        </div>
    );
}
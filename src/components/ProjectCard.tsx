"use client"

import Link from "next/link";

type Props = {
    id: string;
    title: string;
    description: string;
    technologies: string;
}

export default function ProjectCard({ id, title, description, technologies }: Props) {
    return (
        <div className="bg-zinc-900 bg-opacity-90 rounded-lg shadow-md p-6 border border-gray-500 space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-6">
                <p className="text-2xl"><strong>Title: </strong>{title}</p>
                <p className="mb-2"><strong>Description: </strong>{description}</p>
                <p><strong>Technologies: </strong>{technologies}</p>
            </div>
            <div className="flex justify-end items-end mt-auto">
                <Link href={`my-projects/${id}`} className="border border-blue-600 bg-gray-800 hover:bg-gray-700 p-2 rounded-md text-sm">MORE...</Link>
            </div>
        </div>
    );
}
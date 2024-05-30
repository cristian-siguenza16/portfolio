import Link from "next/link";

type Props = {
    title: string;
    description: string;
}

export default function ProjectCard({ title, description }: Props) {
    return (
        <div className="bg-zinc-900 bg-opacity-90 rounded-lg shadow-md p-6 border border-gray-500 space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-6">
                <p className="text-xl md:text-2xl"><strong>Title: </strong>{title}</p>
                <p className="mb-2 text-sm md:text-lg"><strong>Description: </strong>{description}</p>
                <div className="flex justify-end items-end mt-auto">
                    <Link href={`#`} className="border border-blue-600 bg-gray-800 hover:bg-gray-700 p-2 rounded-md text-xs md:text-sm">READ MORE...</Link>
                </div>
            </div>
        </div>
    );
}
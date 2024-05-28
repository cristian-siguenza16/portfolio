type Props = {
    title: string;
    description: string;
}

export default function ProjectCard( {title, description}: Props) {
    return (
        <div className="border border-gray-600 p-8 rounded-lg space-y-6 bg-zinc-900 bg-opacity-90">
            <p><strong>Title: </strong>{title}</p>
            <p className="mb-2"><strong>Description: </strong>{description}</p>
            <div className="flex justify-end">
                <button className="border border-white bg-gray-800 hover:bg-gray-700 p-2 rounded-md">READ MORE...</button>
            </div>
        </div>
    );
}
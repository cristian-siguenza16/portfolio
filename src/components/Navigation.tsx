"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RxDashboard, RxHome, RxPencil2 } from "react-icons/rx";

export const NavLinks = [
    {
        name: "/",
        icon: RxHome,
        link: "/",
        text: "Home",
    },
    {
        name: "/my-projects",
        icon: RxDashboard,
        link: "/my-projects",
        text: "Projects",
    },
    {
        name: "/my-blog",
        icon: RxPencil2,
        link: "/my-blog",
        text: "Blog",
    },
];

const Navigation = () => {
    const [isRouting, setisRouting] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState("/");

    useEffect(() => {
        if (prevPath !== path) {
            setisRouting(true);
        }
    }, [path, prevPath]);

    useEffect(() => {
        if (isRouting) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setisRouting(false);
            }, 1200);

            return () => clearTimeout(timeout);
        }
    }, [isRouting]);
    return (
        <div className="flex space-x-8">
            {isRouting}
            {NavLinks.map((nav) => (
                <Link key={nav.name} href={nav.link} className="flex items-center space-x-2 text-xl">
                    <nav.icon
                        className={`w-8 h-8 ${path === nav.link ? "text-indigo-400" : "text-white"
                            }`}
                    />
                    <span className={path === nav.link ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" : "text-white"}>
                        {nav.text}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default Navigation;
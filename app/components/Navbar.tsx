"use client";

import { useState } from "react";
import MenuButton from "./MenuButton";
import DropdownMenu from "./Dropdown";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-custom-indigo p-6">
            <div className="flex items-center justify-between">
                <div className="text-white mr-6">
                    <h1 className="text-2xl font-bold tracking-tight">My Portfolio</h1>
                </div>
                <div className="relative lg:hidden md:hidden">
                    <MenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
                    <DropdownMenu isOpen={isOpen} />
                </div>
                <div className="hidden lg:flex lg:items-center lg:gap-4 md:flex md:items-center md:gap-2">
                    <Link href="/">
                        <button className="text-white bg-custom-blue hover:bg-custom-blue/90 h-9 px-4 py-2 rounded mt-4 lg:mt-0">Home</button>
                    </Link>
                    <Link href="/about">
                        <button className="text-white bg-custom-blue hover:bg-custom-blue/90 h-9 px-4 py-2 rounded mt-4 lg:mt-0">About</button>
                    </Link>
                    <Link href="/projects">
                        <button className="text-white bg-custom-blue hover:bg-custom-blue/90 h-9 px-4 py-2 rounded mt-4 lg:mt-0">Projects</button>
                    </Link>
                    <Link href="/contact">
                        <button className="text-white bg-custom-blue hover:bg-custom-blue/90 h-9 px-4 py-2 rounded mt-4 lg:mt-0">Contact</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

"use client";

import { useState } from "react";
import MenuButton from "./MenuButton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-custom-indigo p-6">
            <div className="flex items-center justify-between">
                <div className="text-white mr-6">
                    <h1 className="text-2xl font-bold tracking-tight">My Portfolio</h1>
                </div>
                <div className="lg:hidden">
                    <MenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
                </div>
                <div className={`${isOpen ? 'flex' : 'hidden'} flex-col lg:flex-row lg:items-center lg:flex lg:gap-4`}>
                    <button className="text-white bg-custom-blue hover:bg-custom-blue/90 h-9 px-4 py-2 rounded mt-4 lg:mt-0">Home</button>
                    <button className="text-white bg-custom-blue hover:bg-custom-blue/90 h-9 px-4 py-2 rounded mt-4 lg:mt-0">About</button>
                    <button className="text-white bg-custom-blue hover:bg-custom-blue/90 h-9 px-4 py-2 rounded mt-4 lg:mt-0">Projects</button>
                    <button className="text-white bg-custom-blue hover:bg-custom-blue/90 h-9 px-4 py-2 rounded mt-4 lg:mt-0">Contact</button>
                </div>
            </div>
        </nav>
    );
}

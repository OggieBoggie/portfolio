"use client";

import { useState } from "react";
import MenuButton from "./MenuButton";
import DropdownMenu from "./Dropdown";
import Link from "next/link";
import { MotionButton } from "./MotionButton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-custom-indigo p-6">
            <div className="flex items-center justify-between">
                <div className="text-white mr-6">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-tight">My Portfolio</h1>
                </div>
                <div className="relative lg:hidden md:hidden">
                    <MenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
                    <DropdownMenu isOpen={isOpen} />
                </div>
                <div className="hidden lg:flex lg:items-center lg:gap-4 md:flex md:items-center md:gap-2">
                    <Link href="/">
                        <MotionButton
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.1 }}
                            className="text-white bg-custom-blue hover:bg-custom-blue/90 h-9 px-4 py-2 rounded mt-4 lg:mt-0">Home</MotionButton>
                    </Link>
                    <Link href="/about">
                        <MotionButton
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.1 }}
                            className="text-white bg-custom-blue hover:bg-custom-blue/90 h-9 px-4 py-2 rounded mt-4 lg:mt-0">About</MotionButton>
                    </Link>
                    <Link href="/projects">
                        <MotionButton
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.1 }}
                            className="text-white bg-custom-blue hover:bg-custom-blue/90 h-9 px-4 py-2 rounded mt-4 lg:mt-0">Projects</MotionButton>
                    </Link>
                    <Link href="/contact">
                        <MotionButton
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.1 }}
                            className="text-white bg-custom-blue hover:bg-custom-blue/90 h-9 px-4 py-2 rounded mt-4 lg:mt-0">Contact</MotionButton>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

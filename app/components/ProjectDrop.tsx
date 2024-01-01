"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import ProjectComponent from "./ProjectComponent";

export default function ProjectDrop({project}) {
    const [show, setShow] = useState(false);

    const variants = {
        open: { opacity: 1, height: "auto"},
        closed: { opacity: 0, height: 0}
    };

    return (
        <div className="m-4 text-white">
            <div className="flex flex-row items-center cursor-pointer" onClick={() => setShow(!show)}>
                <h2 className="text-xl md:text-3xl font-bold pr-2">{project.title}</h2>
                {show ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
            <motion.div
            initial="closed"
            animate={show ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            >
            {show && (
                <ProjectComponent
                    thumbnail={project.thumbnail}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    repo={project.repo}
                    video={project.video}
                    date={project.date}
                    screenshots={project.screenshots}
                />
            )}
            </motion.div>
        </div>
    )
}
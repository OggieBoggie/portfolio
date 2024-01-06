
import { MotionSpan } from "./MotionSpan";
import Image from "next/image"

type screenshot = {
    link: string;
    description: string;
}

interface ProjectProps {
    thumbnail: string;
    title: string;
    description: string;
    tags: string[];
    repo: string;
    video?: string[];
    date: string;
    screenshots?: screenshot[];

}

export default function ProjectComponent({ thumbnail, title, description, tags, repo, video, date, screenshots }: ProjectProps) {
    return (
        <div className="shadow-lg rounded-lg p-5 m-5 text-black bg-white bg-opacity-20">
            <Image
                src={thumbnail}
                alt="{title} thumbnail"
                className="rounded-lg"
                width={500}
                height={300}
                layout="responsive"
            />
            <div className="mt-4">
                <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
                <p className="mt-2 text-lg md:text-xl">{description}</p>
                <p className="mt-2 md:mt-4 text-md md:text-xl"><strong>Date</strong>: {date}</p>
                <div className="mt-2 text-md md:text-xl">
                    <strong>Related Tags:</strong>
                    <div className="flex flex-wrap gap-2 my-2 md:my-4">
                        {tags.map((tag, index) => (
                            <MotionSpan
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-blue-500 text-white text-s md:text-xl font-semibold mr-2 px-2.5 py-2 mb-2 rounded dark:bg-blue-700 dark:text-blue-200">
                                {tag}
                            </MotionSpan>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row gap-4 pb-2">
                    <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="repo.svg"
                            alt="github repository"
                            width={60}
                            height={24}
                            priority />
                    </a>
                    {video && (
                        video.map((video: string, index: number) => (
                            <a
                                key={index}
                                href={video}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="video.svg"
                                    alt="youtube video"
                                    width={60}
                                    height={24}
                                    priority />
                            </a>
                        ))
                    )}
                </div>
                <h2 className="text-2xl md:text-4xl font-bold">Screenshots</h2>
                {screenshots && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        {screenshots.map(({ link, description }, index) => (
                            <div key={index} className="rounded-lg overflow-hidden bg-white p-2 shadow-md">
                                <Image
                                    src={link}
                                    alt={`Screenshot ${index + 1} of ${title}`}
                                    width={250}
                                    height={150}
                                    layout="responsive"
                                    className="rounded-t-lg"
                                />
                                <p className="p-2 text-black text-md tracking-tight shadow-md">{description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )

}
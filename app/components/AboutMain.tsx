import AnimatedImg from "./AnimatedImg"
import { tools } from "../about/tools"


export default function AboutMain() {

    return (
        <div className="flex flex-col items-start p-6 bg-cyan">
            <h1 className="text-3xl font-bold text-white">About Me</h1>
            <p className="text-white text-lg mt-4">
                Hello my name is Tommy Nguyen, I was born in Vancouver, but 
                I am Vietnamese. I am able to fluently speak English and 
                am currently studying at BCIT in Computer Information 
                Technology. Growing up, I have always been interested in
                computers and technology, as I have always been fascinated
                with what they can do. I am eager to learn more about 
                developing applications and their architecture, so I aspire
                to become a full-stack developer or cloud engineer.
            </p>
            <h1 className="text-3xl font-bold text-white mt-6">Education</h1>
            <h2 className="text-white text-lg mt-4">
                BCIT CIT Diploma 2022-2024
                </h2>
                <ul className="list-disc ml-6 text-white text-lg mt-4">
                <li className="mb-2">
                    Created over 3 projects using the Agile principles.
                </li>
                <li className="mb-2">
                    Collaborated with industry sponsors to create 2 different projects.
                </li>
                <li className="mb-2">
                    Designed and deployed an architecture using AWS.
                </li>
                <li className="mb-2">
                    Managed an AD DS domain and created a network infrastructure.
                </li>
                <li className="mb-2">
                    Learned about Database Management Systems and SQL.
                </li>
                <li className="mb-2">
                    Created a cloud infrastructure using Azure, containing a Source Code Repository, 
                    CI/CD pipeline, Knowledge Base, and Apache.
                </li>
            </ul>
            <h1 className="text-3xl font-bold text-white mt-6">
                Tools and Technologies
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {tools.map((tool, index) => (
                        <AnimatedImg key={index} src={tool.src} alt={tool.alt} className="w-80 h-80 lg:w-96" />
                    )
                    )}
                </div>
        </div>
    )
}
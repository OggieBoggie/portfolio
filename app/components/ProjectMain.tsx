import { projects } from "app/projects/projects"
import ProjectDrop from "./ProjectDrop"

export default function ProjectMain() {
    return (
        <div className="flex flex-col item-start p-6 bg-cyan">
            <h1 className="text-xl md:text-3xl font-bold text-white">My Projects</h1>
            {projects.map((project, index) => (
        <ProjectDrop key={index} project={project} />
      ))}
        </div>
    )
}
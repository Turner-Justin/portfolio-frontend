type Project = {
    id: string
    title: string
    description: string
}

function ProjectCard({ project }: { project: Project }) {
    if (!project) {
        return null;
    }
    return (
        <li>
            <strong>{project.title}</strong>
            <p>{project.description}</p>
        </li>
    )
}

export default ProjectCard
import { ProjectType } from "@/data/singleProjectData";
import Link from "next/link";

const ProjectRelatedProjects = ({
    Projects,
}: ProjectType["RelatedProject"]) => {
    return (
        <div className="pt-10 mt-10 border-t-2 sm:pt-14 sm:mt-20 border-primary-light dark:border-secondary-dark">
            <p className="mb-10 text-3xl font-bold text-left font-general-regular text-primary-dark dark:text-primary-light sm:mb-14">
                Related Projects
            </p>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
                {Projects.map((project) => {
                    return (
                        <Link
                            key={project.id}
                            href={`/projects/${project.title
                                .split(" ")
                                .join("-")}`}
                        >
                            <div className="aspect-square">
                                <img
                                    src={project.img}
                                    className="cursor-pointer rounded-xl object-cover w-full h-full"
                                    alt={project.title}
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectRelatedProjects;

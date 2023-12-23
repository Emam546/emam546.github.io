import { useContext } from "react";
import { ProjectType } from "@/data/singleProjectData";
interface Props {
    ProjectImages: ProjectType["ProjectImages"];
}
const ProjectGallery = ({ ProjectImages }: Props) => {
    return (
        <div className="grid grid-cols-1 mt-12 sm:grid-cols-3 sm:gap-10">
            {ProjectImages.map((project) => {
                return (
                    <div
                        className="mb-10 sm:mb-0 aspect-[39/34] flex items-center shadow-lg overflow-hidden rounded-xl sm:shadow-none"
                        key={project.id}
                    >
                        <img
                            src={project.img}
                            className="w-full cursor-pointer object-cover h-full"
                            alt={project.title}
                            key={project.id}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectGallery;

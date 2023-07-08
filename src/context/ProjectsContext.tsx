import React, { useState, createContext } from "react";
import { ProjectData } from "@/data/projects";

// Create projects context
export const ProjectsContext = createContext<ProjectData[]>([]);
interface Props {
    children: React.ReactNode;
    data: ProjectData[];
}
// Create the projects context provider
export const ProjectsProvider = ({ data, children }: Props) => {
    const [projects] = useState(data);

    // Search projects by project title
    // const searchProjectsByTitle = projects.filter((item) => {
    //     const result = item.title
    //         .toLowerCase()
    //         .includes(searchProject.toLowerCase())
    //         ? item
    //         : searchProject === ""
    //         ? item
    //         : "";
    //     return result;
    // });

    // Select projects by project category
    // const selectProjectsByCategory = projects.filter((item) => {
    //     let category =
    //         item.category.charAt(0).toUpperCase() + item.category.slice(1);
    //     return category.includes(selectProject);
    // });

    return (
        <ProjectsContext.Provider value={data}>
            {children}
        </ProjectsContext.Provider>
    );
};

import { useState, createContext, ReactNode } from "react";
import { ProjectType } from "../data/singleProjectData";

const SingleProjectContext = createContext<ProjectType[]>([]);
interface Props {
    children: ReactNode;
    data: ProjectType[];
}
export const SingleProjectProvider = ({ children, data }: Props) => {
    return (
        <SingleProjectContext.Provider value={data}>
            {children}
        </SingleProjectContext.Provider>
    );
};

export default SingleProjectContext;

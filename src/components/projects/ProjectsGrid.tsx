import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectData } from "@/data/projects";
import ProjectsFilter from "./ProjectsFilter";
import classNames from "classnames";
export interface Props {
    projects: ProjectData[];
}
const ProjectsGrid = ({ projects }: Props) => {
    const [searchProject, setSearchProject] = useState("");
    const [selectProject, setSelectProject] = useState("");

    // Search projects by project title
    const searchProjectsByTitle = projects.filter((item) => {
        const result = item.title
            .toLowerCase()
            .includes(searchProject.toLowerCase())
            ? item
            : searchProject === ""
            ? item
            : "";
        return result;
    });

    // Select projects by project category
    const selectProjectsByCategory = projects.filter((item) => {
        let category =
            item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(selectProject);
    });
    return (
        <section className="py-5 mt-5 sm:py-10 sm:mt-10">
            <div className="text-center">
                <p className="mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light">
                    Projects portfolio
                </p>
            </div>

            <div className="mt-10 sm:mt-16">
                <h3 className="mb-3 text-center font-general-regular text-secondary-dark dark:text-ternary-light text-md sm:text-xl ">
                    Search projects by title or filter by category
                </h3>
                <div
                    className={classNames(
                        "flex justify-between border-b flex-wrap",
                        "border-primary-light dark:border-secondary-dark pb-3 gap-3"
                    )}
                >
                    <div className="w-full sm:w-fit">
                        <div className="flex justify-between w-full gap-2">
                            <span
                                className="hidden sm:block bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
                            >
                                <FiSearch className="w-5 h-5 text-ternary-dark dark:text-ternary-light"></FiSearch>
                            </span>
                            <input
                                onChange={(e) =>
                                    setSearchProject(e.target.value)
                                }
                                className="w-full py-2 pl-3 pr-1 text-sm border border-gray-200 rounded-lg font-general-medium sm:px-4 dark:border-secondary-dark sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                id="name"
                                name="name"
                                type="search"
                                required
                                placeholder="Search Projects"
                                aria-label="Name"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-fit">
                        <ProjectsFilter
                            options={projects
                                .map((val) => val.category)
                                .reduce((acc, val) => {
                                    if (!acc.includes(val)) acc.push(val);
                                    return acc;
                                }, [] as string[])}
                            setSelectProject={setSelectProject}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 ">
                {selectProject
                    ? selectProjectsByCategory.map((project) => (
                          <ProjectSingle
                              title={project.title}
                              category={project.category}
                              image={project.img}
                              key={project.id}
                          />
                      ))
                    : searchProject
                    ? searchProjectsByTitle.map((project) => (
                          <ProjectSingle
                              title={project.title}
                              category={project.category}
                              image={project.img}
                              key={project.id}
                          />
                      ))
                    : projects.map((project) => (
                          <ProjectSingle
                              title={project.title}
                              category={project.category}
                              image={project.img}
                              key={project.id}
                          />
                      ))}
            </div>
        </section>
    );
};

export default ProjectsGrid;

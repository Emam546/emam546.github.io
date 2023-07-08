import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectRelatedProjects from "@/components/projects/ProjectRelatedProjects";
import { motion } from "framer-motion";
import { ProjectType } from "@/data/singleProjectData";
import axios from "axios";
import { Data, RespondType } from "@/info";
import { getRandomValues } from "@/utils";
import ProjectInfo from "@/components/projects/ProjectInfo";
import Head from "next/head";

const ProjectSingle: NextPage<ProjectType> = (project) => {
    return (
        <>
            <Head>
                <title>{project.ProjectHeader.title}</title>
            </Head>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.6,
                    delay: 0.15,
                }}
                className="container mx-auto mt-5 sm:mt-10"
            >
                <ProjectHeader {...project.ProjectHeader} />
                <ProjectGallery ProjectImages={project.ProjectImages} />
                <ProjectInfo desc={project.desc} />
                <ProjectRelatedProjects {...project.RelatedProject} />
            </motion.div>
        </>
    );
};
export const getStaticPaths: GetStaticPaths = async () => {
    const {
        data: { data: projects },
    } = await axios.get<RespondType<Data["projects"]["data"]>>(
        "https://cv-builder-tobe.onrender.com/api/v1/data/projects/data",
        {
            params: {
                apikey: process.env.API_KEY,
            },
        }
    );
    const AllProjects = [...projects[2].data, ...projects[1].data];
    return {
        paths: AllProjects.map((val) => ({
            params: {
                name: val.name.split(" ").join("-"),
            },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<ProjectType> = async (ctx) => {
    const name = ctx.params!.name;
    if (typeof name != "string")
        return {
            redirect: {
                destination: "/",
                permanent: true,
            },
        };
    const {
        data: { data: projects },
    } = await axios.get<RespondType<Data["projects"]["data"]>>(
        "https://cv-builder-tobe.onrender.com/api/v1/data/projects/data",
        {
            params: {
                apikey: process.env.API_KEY,
            },
        }
    );
    const AllProjects = [...projects[2].data, ...projects[1].data];
    const project = AllProjects.find((val) =>
        val.name.split(" ").join("-").includes(name)
    )!;

    return {
        props: {
            ProjectHeader: {
                publishDate:
                    project.date.end || new Date().getFullYear().toString(),
                tags: project.technologies,
                title: project.name,
            },
            desc: project.desc,
            ProjectImages: project.images
                .filter((val) => val.widthRation / val.heightRation == 1)
                .map((val) => ({
                    id: val.id,
                    title: project.name,
                    img: val.image,
                })) as ProjectType["ProjectImages"],
            RelatedProject: {
                Projects: getRandomValues(AllProjects, 4, false).map((val) => ({
                    id: val.id,
                    img: val.images.find(
                        ({ heightRation, widthRation }) =>
                            heightRation / widthRation == 1
                    )!.image,
                    title: val.name,
                })),
            },
        },
    };
};

export default ProjectSingle;

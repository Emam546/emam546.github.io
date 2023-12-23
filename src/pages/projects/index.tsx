import PortfolioApi from "@/axios";
import ProjectsGrid, {
    Props as ProjectProps,
} from "@/components/projects/ProjectsGrid";
import { RespondType, Data } from "@/info";
import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
interface Props {
    projects: ProjectProps;
}
const Projects: NextPage<Props> = ({ projects }) => {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <div className="container mx-auto">
                <ProjectsGrid {...projects} />
            </div>
        </>
    );
};
export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const {
        data: { data: projects },
    } = await PortfolioApi.get<RespondType<Data["projects"]["data"]>>(
        "/projects/data"
    );
    const allProjects = [...projects[1].data, ...projects[2].data];
    return {
        props: {
            projects: {
                projects: allProjects.map((val) => ({
                    id: val.id,
                    img: val.images.find(
                        ({ widthRation, heightRation }) =>
                            widthRation / heightRation == 1
                    )!.image,
                    category: val.kind,
                    title: val.name,
                })),
            },
        },
    };
};
export default Projects;

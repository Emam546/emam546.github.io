import Project, { Props as ProjectType } from "@src/components/Project";
import PageHeader from "@src/components/PageHeader";
import { GetStaticProps, NextPage } from "next";
import { Data } from "@src/info";
import axios from "axios";
import fs from "fs/promises";
import { ReactNode } from "react";

interface Props {
    projects: ProjectType[];
    sideProjects: ProjectType[];
}
function ProjectsHolder({ children }: { children: ReactNode }) {
    return (
        <div className="tw-grid lg:tw-grid-cols-2 tw-w-full tw-pb-24 tw-gap-3">
            {children}
        </div>
    );
}
const Portfolio: NextPage<Props> = ({ projects, sideProjects }) => {
    return (
        <section className="tw-my-12 md:tw-py-12 tw-overflow-hidden tw-container tw-mx-auto tw-px-4">
            <PageHeader
                title="Portfolio"
                description="View my work"
                className="mx-auto"
            />
            <ProjectsHolder>
                {projects.map((project, i) => (
                    <Project
                        key={i}
                        {...project}
                    />
                ))}
            </ProjectsHolder>

            <PageHeader
                title="Single Page Applications"
                description="View my work"
                className="mx-auto"
            />
            <ProjectsHolder>
                {sideProjects.map((project, i) => (
                    <Project
                        key={i}
                        {...project}
                    />
                ))}
            </ProjectsHolder>
        </section>
    );
};
type ReturnedData = Data["projects"]["data"][0]["data"];
const colors = [
    "#f37737",
    "#29cbe0",
    "#6c4bf4",
    "#f85781",
    "#ffcc33",
    "#3e67ff",
];
// Function to check if a folder exists
const folderExists = async (folderPath: string) => {
    try {
        const stats = await fs.stat(folderPath);
        return stats.isDirectory();
    } catch (error: any) {
        if (error.code === "ENOENT") {
            return false;
        }
        throw error;
    }
};
const fileExists = async (folderPath: string) => {
    try {
        const stats = await fs.stat(folderPath);
        return stats.isFile();
    } catch (error: any) {
        if (error.code === "ENOENT") {
            return false;
        }
        throw error;
    }
};
export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    if (!(await folderExists("public/projectsImages")))
        await fs.mkdir("public/projectsImages");

    const res = await axios.get(
        "https://cv-builder-tobe.onrender.com/api/v1/data/projects/data",
        {
            params: {
                apikey: process.env.API_KEY,
            },
        }
    );
    const downloadAndReplaceImages = async (imageUrl?: string) => {
        if (!imageUrl) return;
        const fileName = decodeURIComponent(imageUrl.split("/").pop() || "");
        const localPath = `public/projectsImages/${fileName}`;
        if (await fileExists(localPath)) return `/projectsImages/${fileName}`;
        const response = await axios.get(imageUrl, {
            responseType: "arraybuffer",
        });
        const imageBuffer = Buffer.from(response.data, "binary");

        await fs.writeFile(localPath, imageBuffer);
        return `/projectsImages/${fileName}`;
    };
    async function getData(val: ReturnedData[0], i: number) {
        const image = await downloadAndReplaceImages(
            val.images.find(
                ({ heightRation, widthRation }) =>
                    widthRation == 4 && heightRation == 3
            )?.image
        );

        return {
            color: colors[i % colors.length],
            id: i,
            image,
            description: val.desc,
            technologies: val.technologies.slice(0, 3).join(" | "),
            title: val.name,
            deployed: val.links.find((v) =>
                v.label.toLocaleLowerCase().includes("live")
            )?.link,
            github: val.links.find((v) =>
                v.label.toLocaleLowerCase().includes("github")
            )?.link,
        } as ProjectType;
    }
    const mainProjects: ProjectType[] = await Promise.all(
        (res.data.data[0].data as ReturnedData).map(getData)
    );
    const sideProjects: ProjectType[] = await Promise.all(
        (res.data.data[1].data as ReturnedData).map(getData)
    );

    return {
        props: {
            projects: mainProjects,
            sideProjects,
        },
    };
};

export default Portfolio;

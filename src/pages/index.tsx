import AppBanner, {
    Props as AppPannerProps,
} from "@/components/shared/AppBanner";
import ProjectsGrid, {
    Props as ProjectProps,
} from "@/components/projects/ProjectsGrid";
import Button from "@/components/reusable/Button";
import { Data, RespondType } from "@/info";
import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
interface Props {
    projects: ProjectProps;
    banner: AppPannerProps;
}
const Home: NextPage<Props> = ({ projects, banner }) => {
    return (
        <div className="container mx-auto">
            <AppBanner {...banner} />
            <ProjectsGrid {...projects} />
            <div className="mt-8 sm:mt-10 flex justify-center">
                <Link
                    href="/projects"
                    className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
                    aria-label="More Projects"
                >
                    <Button title="More Projects" />
                </Link>
            </div>
        </div>
    );
};
export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const {
        data: { data: info },
    } = await axios.get<RespondType<Data["info"]["data"]>>(
        "https://cv-builder-tobe.onrender.com/api/v1/data/info/data",
        {
            params: {
                apikey: process.env.API_KEY,
            },
        }
    );
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
    return {
        props: {
            projects: {
                projects: projects[2]!.data.slice(0,6).map((val) => ({
                    id: val.id,
                    img: val.images.find(
                        ({ widthRation, heightRation }) =>
                            widthRation / heightRation == 1
                    )!.image,
                    category: val.kind,
                    title: val.name,
                })),
            },
            banner: {
                jobTitle: info.jobTitle,
                name: `${info.firstName} ${info.lastName}`,
                pdf: info.cv,
            },
        },
    };
};
export default Home;

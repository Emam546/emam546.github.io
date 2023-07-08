import { Props as ProjectInfoProps } from "@/components/projects/ProjectInfo";
export interface ProjectType {
    ProjectHeader: {
        title: string;
        publishDate: string;
        tags: string[];
    };
    ProjectInfo: ProjectInfoProps;
    ProjectImages: {
        id: string;
        title: string;
        img: string; // Assuming the 'img' property contains the path to the image file
    }[];
    RelatedProject: {
        Projects: {
            id: string;
            title: string;
            img: string; // Assuming the 'img' property contains the path to the image file
        }[];
    };
}

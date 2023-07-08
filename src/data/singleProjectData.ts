export interface ProjectType {
    ProjectHeader: {
        title: string;
        publishDate: string;
        tags: string[];
    };
    desc: string;
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

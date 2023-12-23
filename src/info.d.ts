export type Data = {
    info: {
        head: string;
        data: {
            email: string;
            imgUrl: string;
            address: string;
            city: string;
            country: string;
            firstName: string;
            jobTitle: string;
            lastName: string;
            nationality: string;
            phone: string;
            placeOfBirth: string;
            postalCode: string;
            availability: string;
            cv: string;
        };
    };
    paragraph: {
        head: string;
        data: {
            id: string;
            title: string;
            desc: string;
        }[];
    };
    employ: {
        head: string;
        data: Array<unknown>;
    };
    links: {
        head: string;
        data: Array<{
            id: string;

            label: string;
            link: string;
        }>;
    };
    skills: {
        head: string;
        data: Array<{
            id: string;

            label: string;
            skills: Array<{
                label: string;
                level: number;
            }>;
        }>;
    };
    references: {
        head: string;
        data: Array<{
            id: string;
            company: string;
            email: string;
            name: string;
            phone: string;
            label: string;
            institution: string;
        }>;
    };
    team: {
        head: string;
        data: Array<unknown>;
    };
    projects: {
        head: string;
        data: Array<{
            label: string;
            data: Array<{
                kind: string;
                id: string;
                links: Array<{
                    id: string;
                    label: string;
                    link: string;
                }>;
                name: string;
                desc: string;
                kind: string;
                date: {
                    start: string;
                    end: string;
                };
                team: Array<unknown>;
                images: Array<{
                    id: string;

                    heightRation: number;
                    widthRation: number;
                    image: string;
                }>;
                progress: number;
                technologies: Array<string>;
                teamSize: number;
                budget: {
                    num: number;
                    unit: string;
                };
                lessons: Array<{
                    id: string;

                    title: string;
                    desc: string;
                }>;
            }>;
        }>;
    };
    images: {
        head: string;
        data: Array<{
            id: string;
            images: Array<{
                id: string;
                heightRation: number;
                widthRation: number;
                image: string;
            }>;
        }>;
    };
};
export interface RespondType<T = unknown> {
    status: boolean;
    msg: string;
    data: T;
}

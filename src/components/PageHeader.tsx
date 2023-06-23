import { HTMLAttributes } from "react";
export interface Props {
    description: string;
    title: string;
}
const PageHeader = ({
    title,
    description,
    ...props
}: HTMLAttributes<HTMLDivElement> & Props) => (
    <div
        {...props}
        className={`tw-w-fit ${props.className} tw-text-center`}
    >
        <p className="tw-text-sm tw-text-gray-300">{description}</p>
        <h3 className="pageTitle">{title}</h3>
    </div>
);

export default PageHeader;

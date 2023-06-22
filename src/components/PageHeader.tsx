const PageHeader = ({ title, description }: any) => (
    <>
        <p className="tw-text-sm tw-text-gray-300">{description}</p>
        <h3 className="pageTitle">{title}</h3>
    </>
);

export default PageHeader;

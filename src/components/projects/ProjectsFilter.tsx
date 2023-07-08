interface Props {
    setSelectProject: (val: string) => any;
    options: string[];
}
const ProjectsFilter = ({ setSelectProject, options }: Props) => {
    return (
        <select
            onChange={(e) => {
                setSelectProject(e.target.value);
            }}
            className="w-full px-4 py-2 text-sm border rounded-lg font-general-medium sm:px-6 dark:border-secondary-dark sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light "
        >
            <option
                value=""
                className="text-sm sm:text-md"
            >
                All Projects
            </option>

            {options.map((option) => (
                <option
                    className="text-normal sm:text-md first-letter:caption-top"
                    key={option}
                >
                    {option}
                </option>
            ))}
        </select>
    );
};

export default ProjectsFilter;

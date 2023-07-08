import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
    title: string;
    category: string;
    image: string;
}
const ProjectSingle = ({ title, category, image }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.7,
                delay: 0.15,
            }}
            className="h-full"
        >
            <Link
                href={`/projects/${title.split(" ").join("-")}`}
                aria-label="Single Project"
            >
                <div className="flex flex-col items-stretch h-full overflow-hidden shadow-lg cursor-pointer rounded-xl hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                    <div className="aspect-[39/34] overflow-hidden flex items-center bg-gray-400 rounded-t-xl">
                        <img
                            src={image}
                            className="w-full border-none "
                            alt="Single Project"
                        />
                    </div>
                    <div className="px-2 pt-5 pb-3 text-center ">
                        <p className="text-lg font-general-medium md:text-xl text-ternary-dark dark:text-ternary-light">
                            {title}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-end flex-1 pb-4">
                        <p className="text-lg text-ternary-dark dark:text-ternary-light">
                            {category}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectSingle;

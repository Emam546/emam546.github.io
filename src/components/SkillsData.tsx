import { FaReact, FaNodeJs, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
    SiRedux,
    SiCss3,
    SiNextdotjs,
    SiTypescript,
    SiPostman,
    SiBootstrap,
    SiMui,
    SiPwa,
    SiElectron,
    SiTailwindcss,
    SiMongodb,
    SiMongoose,
    SiSqlite,
    SiHeroku,
    SiDocker,
    SiVite,
    SiWebpack,
    SiRedis,
    SiExpress,
} from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { ImGit } from "react-icons/im";
import { IconType } from "react-icons";

interface SkillsType {
    name: string;
    icon: IconType;
    link: string;
}

export const SkillsData: SkillsType[] = [
    {
        name: "Mongoose",
        icon: SiMongoose,
        link: "https://mongoosejs.com/",
    },
    {
        name: "Express",
        icon: SiExpress,
        link: "https://expressjs.com/",
    },
    {
        name: "Redis",
        icon: SiRedis,
        link: "https://redis.io/",
    },
    {
        name: "Heroku",
        icon: SiHeroku,
        link: "https://www.heroku.com/",
    },
    {
        name: "Webpack",
        icon: SiWebpack,
        link: "https://webpack.js.org/",
    },
    {
        name: "Vite",
        icon: SiVite,
        link: "https://vitejs.dev/",
    },
    {
        name: "Vite",
        icon: SiVite,
        link: "https://vitejs.dev/",
    },
    {
        name: "Sql",
        icon: SiSqlite,
        link: "https://www.sqlite.org/index.html",
    },
    {
        name: "Docker",
        icon: SiDocker,
        link: "https://www.docker.com/",
    },
    {
        name: "Mongodb",
        icon: SiMongodb,
        link: "https://www.mongodb.com/",
    },
    {
        name: "Tailwindcss",
        icon: SiTailwindcss,
        link: "https://tailwindcss.com/",
    },
    {
        name: "JavaScript",
        icon: IoLogoJavascript,
        link: "https://www.javascript.com/",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        link: "https://www.typescriptlang.org/",
    },
    {
        name: "React",
        icon: FaReact,
        link: "https://reactjs.org/",
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        link: "https://nextjs.org/",
    },
    {
        name: "Redux",
        icon: SiRedux,
        link: "https://redux.js.org/",
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        link: "https://nodejs.org/",
    },
    {
        name: "Android",
        icon: AiFillAndroid,
        link: "https://developer.android.com/",
    },
    {
        name: "HTML",
        icon: FaHtml5,
        link: "https://www.w3schools.com/html/",
    },
    {
        name: "CSS",
        icon: SiCss3,
        link: "https://www.w3schools.com/css/",
    },
    {
        name: "SASS",
        icon: FaSass,
        link: "https://sass-lang.com/",
    },
    {
        name: "Bootstrap",
        icon: SiBootstrap,
        link: "https://getbootstrap.com/",
    },
    {
        name: "Material-Ui",
        icon: SiMui,
        link: "https://mui.com/",
    },
    {
        name: "PWA",
        icon: SiPwa,
        link: "https://web.dev/progressive-web-apps/",
    },
    {
        name: "Electron.js",
        icon: SiElectron,
        link: "https://www.electronjs.org/",
    },
    {
        name: "Git",
        icon: ImGit,
        link: "https://git-scm.com/",
    },
    {
        name: "Postman",
        icon: SiPostman,
        link: "https://www.postman.com/",
    },
];

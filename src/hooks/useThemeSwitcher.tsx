import { useEffect, useState } from "react";

const useThemeSwitcher = (): ReturnType<typeof useState<string>> => {
    const [theme, setTheme] = useState("light");
    const activeTheme = theme === "dark" ? "light" : "dark";
    useEffect(() => {
        const lItem = localStorage.getItem("theme");
        if (lItem) setTheme(lItem);
    }, []);
    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(activeTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme, activeTheme]);

    return [activeTheme, setTheme as any];
};

export default useThemeSwitcher;

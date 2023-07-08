import { useEffect } from "react";

const BackToTop = () => {
    const userScrollPosition = 0;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [userScrollPosition]);

    return <></>;
};

export default BackToTop;

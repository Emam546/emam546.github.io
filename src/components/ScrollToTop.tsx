// NOTE: This scroll to top is the default react scroll to top behavior when visiting a new route.
// For the scroll to top behavior on a click event I have created a custom hook with the name of useScrollToTop under the hooks folder that scrolls use to the top of the page when they scroll down on the page.

import { useRouter } from "next/router";
import { useEffect } from "react";
const ScrollToTop = () => {
    const { pathname } = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return null;
};

export default ScrollToTop;

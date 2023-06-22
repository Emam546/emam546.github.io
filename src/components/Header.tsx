import NavLinks from "./NavLinks";
import Mlogo from "../images/logo.svg";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "@src/context";

const Header = () => {
    const { firstName, lastName } = useContext(Context).info;
    const name = `${firstName} ${lastName}`;

    return (
        <header className="header flex tw-items-start tw-ml-4">
            <Image
                className="tw-h-[30px] tw-w-fit"
                src={Mlogo}
                alt={`${name} Logo`}
            />
            <NavLinks />
        </header>
    );
};

export default Header;

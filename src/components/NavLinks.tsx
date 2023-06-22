import { useState } from "react";


import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";
import Image from "next/image";
import Link from "next/link";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <Image className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <Image className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link href="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>
          Portfolio
        </Link>
        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </nav>
    </>
  );
};

export default NavLinks;

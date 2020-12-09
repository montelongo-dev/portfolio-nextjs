import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import Width from "./Width";

export default function Nav() {
  const [menuState, setMenuState] = useState(false);

  const closeMenu = () => {
    setMenuState(!menuState);
  };

  const isMenuOpen = (isOpen) => {
    setMenuState(isOpen.isOpen);
  };

  const navLinks = () => {
    return (
      <>
        <Link
          to="home"
          smooth={true}
          onClick={() => closeMenu()}
          delay={250}
          duration={1000}
          className="nav__link"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          offset={25}
          onClick={() => closeMenu()}
          delay={250}
          duration={1000}
          className="nav__link"
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          offset={25}
          onClick={() => closeMenu()}
          delay={250}
          duration={1000}
          className="nav__link"
        >
          Skills
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={25}
          onClick={() => closeMenu()}
          delay={250}
          duration={1000}
          className="nav__link"
        >
          Contact
        </Link>
      </>
    );
  };

  const mobileMenu = () => {
    return (
      <div>
        <Menu
          right
          width={"11rem"}
          disableAutoFocus
          isOpen={menuState}
          onStateChange={isMenuOpen}
        >
          {navLinks()}
        </Menu>
      </div>
    );
  };

  return <div className="navBar navbar-sticky">{navLinks()}</div>;
  // return <div>{mobileMenu()}</div>;

  // return Width().width < Width().breakpoint ? (
  //   <div>{mobileMenu()}</div>
  // ) : (
  //   <div className="navBar navbar-sticky">{navLinks()}</div>
  // );
}

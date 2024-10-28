import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { TbLetterT } from "react-icons/tb";
import { TbLetterR } from "react-icons/tb";
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "home", // Use section ID
  },
  {
    label: "ABOUT ME",
    to: "about",
  },
  {
    label: "RESUME",
    to: "resume",
  },
  {
    label: "PORTFOLIO",
    to: "portfolio",
  },
  {
    label: "CONTACT",
    to: "contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleLinkClick = () => {
    setToggleIcon(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link
            to="home"
            className="navbar__container__logo"
            smooth={true} // Enable smooth scrolling
            duration={500} // Set scroll duration
          >
            <TbLetterR size={30} />
            <TbLetterT size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, index) => (
            <li key={index} className="navbar__container__menu__item">
              <Link
                to={item.to}
                className="navbar__container__menu__item__links"
                smooth={true} // Enable smooth scrolling
                duration={500} // Set scroll duration
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

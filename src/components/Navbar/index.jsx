import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images, navigation_config } from "../../constants";
import "./styles.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      {/* <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div> */}
      <ul className="app__navbar-links">
        {navigation_config.map((el) => (
          <li key={`link-${el.name}`} className="app__flex p-text">
            <div />
            <a href={`#${el.path}`}>{el.name}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navigation_config.map((el) => (
                <li key={el.name}>
                  <a href={`#${el.path}`} onClick={() => setToggle(false)}>
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

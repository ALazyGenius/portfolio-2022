/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { navigation_config } from "../../constants";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navigation_config.map((el) => (
        <a
          key={el.name}
          href={`#${el.path}`}
          className="app__navigation-dot"
          style={active.toLowerCase() === el.name.toLowerCase() ? { backgroundColor: "#313bac" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;

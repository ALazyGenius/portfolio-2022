import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { portfolio } from "../../constants";
import "./styles.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState(
    portfolio[portfolio.length - 1]
  );
  const [animateCard, setAnimateCard] = useState({
    y: 0,
    opacity: 1
  });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (
        item.name?.toLowerCase() ===
        portfolio[portfolio.length - 1].name.toLowerCase()
      ) {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags?.includes(item.name)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> <br /> Section{" "}
      </h2>
      <div className="app__works-filter">
        {portfolio.map((item) => (
          <div
            key={`portfolio-${item.name}`}
            onClick={() => handleWorkFilter(item)}
            className={`app__works-filter-item app__flex p-text ${
              activeFilter?.name?.toLowerCase() === item?.name?.toLowerCase()
                ? "item-active"
                : ""
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__works-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__works-item app__flex" key={`work-${index}`}>
            <div className="app__works-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5
                }}
                className="app__works-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__works-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__works-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
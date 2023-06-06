import Card from "./Card";
import styles from "./work.module.scss";
import React from "react";
import { data } from "./data";
import Footer from "../footer/Footer";
const Work = () => {
  return (
    <div className={styles.work}>
      <p className={styles.title}>PROJECTS</p>
      {data.map((obj) => {
        return (
          <Card
            key={obj.id}
            title={obj.title}
            stack={obj.stack}
            description={obj.description}
            link={obj.link}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default Work;

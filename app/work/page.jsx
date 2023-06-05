import React from "react";
import styles from "./work.module.scss";
import Work from "../components/work/Work";

export const metadata = {
  title: "Seyi - software engineer",
  description: "portfolio website for software engineer.",
};

const WorkPage = () => {
  return (
    <div className={styles.work}>
      <Work />
    </div>
  );
};

export default WorkPage;

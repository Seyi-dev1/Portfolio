import React from "react";
import styles from "./work.module.scss";
import Work from "../components/work/Work";

const WorkPage = () => {
  return (
    <div className={styles.work}>
      <Work />
    </div>
  );
};

export default WorkPage;

import styles from "./card.module.scss";
import React from "react";
import { BsEyeFill } from "react-icons/bs";

const Card = ({ title, stack, description, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        {" "}
        <h1>{title}</h1>
      </div>
      <div className={styles.stack}>
        <p>{stack}</p>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles.btn}>
        <a href={link} target="_blank">
          <p>
            <BsEyeFill /> Live
          </p>
        </a>
      </div>
    </div>
  );
};

export default Card;

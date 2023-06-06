"use client";
import styles from "./bio.module.scss";

import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
// import avatar1 from "../assets/seyiportrait.jpg";
import avatar2 from "../../../assets/fotor-ai-2023060322410.jpg";
import avatar3 from "../../../assets/IMG-20230123-WA0001~3.jpg";
import { useEffect, useState } from "react";

const Bio = () => {
  const [width, setWidth] = useState(1300);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    function preventScroll(e) {
      e.preventDefault();
      e.stopPropagation();

      return false;
    }
    width > 1200 &&
      document.querySelector("#bio").addEventListener("wheel", preventScroll, {
        passive: false,
      });

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.static}>
          <div className={styles.staticContent}>
            <h1 className={styles.greeting}>
              Hello, I'm <br /> Oluwaseyi Samuel.
            </h1>
            <p className={styles.intro}>
              I'm a <span>software engineer</span> who loves making cool and fun{" "}
              <span>web apps</span>. I know how to use HTML, CSS, JavaScript,
              and a bunch of <span>frontend frameworks</span> like{" "}
              <span>React</span>, <span>Angular</span>, <span>Vue</span>, and{" "}
              <span>Svelte</span>. I'm always curious about new stuff and how to
              make the web better for <span>everyone</span>.
            </p>
            <div className={styles.list}>
              <div className={`${styles.listItem} ${styles.active}`}>
                <div className={styles.number}>
                  <p>01</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.text}>
                  <p>WORK</p>
                </div>
              </div>
              <div className={styles.listItem}>
                <div className={styles.number}>
                  <p>02</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.text}>
                  <p>LINKED IN</p>
                </div>
              </div>
            </div>
            <div className={styles.socials}>
              <span className={styles.image}>
                <Image src={avatar3} alt="avatar" />
              </span>
              <span className={styles.socialLink}>
                <span>
                  <BsGithub className={styles.icon} />
                </span>
                <span>Github</span>
                <span className={styles.arrowUp}>
                  <BsArrowUpRight className={styles.icon} />
                </span>
              </span>
              <span className={styles.socialLink}>
                <span>
                  <BsTwitter className={styles.icon} />
                </span>
                <span>Twitter</span>
                <span className={styles.arrowUp}>
                  <BsArrowUpRight className={styles.icon} />
                </span>
              </span>
              <span className={styles.socialLink}>
                <span>
                  <MdEmail className={styles.icon} />
                </span>
                <span>Email</span>
                <span className={styles.arrowUp}>
                  <BsArrowUpRight className={styles.icon} />
                </span>
              </span>
            </div>
            <div className={styles.inspo}>
              <p>
                Inspired by <span>Kadet</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;

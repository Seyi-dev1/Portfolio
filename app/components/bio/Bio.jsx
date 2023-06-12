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
import Link from "next/link";

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
    width > 1100 &&
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
                  <p>00</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.text}>
                  <p>WORK</p>
                </div>
              </div>
              <Link target="_blank" href={"/seyidev resume.pdf"}>
                <div className={styles.listItem}>
                  <div className={styles.number}>
                    <p>01</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.text}>
                    <p>RESUME</p>
                  </div>
                </div>
              </Link>
              <a
                href="https://www.linkedin.com/in/samuel-oluwaseyi-26883a195/"
                target="_blank"
              >
                <div className={styles.listItem}>
                  <div className={styles.number}>
                    <p>02</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.text}>
                    <p>LINKED IN</p>
                  </div>
                </div>
              </a>
            </div>
            <div className={styles.socials}>
              <span className={styles.image}>
                <Image src={avatar3} alt="avatar" />
              </span>
              <a href="https://github.com/Seyi-dev1" target="_blank">
                <span className={styles.socialLink}>
                  <span>
                    <BsGithub className={styles.icon} />
                  </span>
                  <span>Github</span>
                  <span className={styles.arrowUp}>
                    <BsArrowUpRight className={styles.icon} />
                  </span>
                </span>
              </a>
              <a href="https://twitter.com/oswagz19" target="_blank">
                <span className={styles.socialLink}>
                  <span>
                    <BsTwitter className={styles.icon} />
                  </span>
                  <span>Twitter</span>
                  <span className={styles.arrowUp}>
                    <BsArrowUpRight className={styles.icon} />
                  </span>
                </span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=samoluwaseyi25@gmail.com"
                target="_blank"
              >
                <span className={styles.socialLink}>
                  <span>
                    <MdEmail className={styles.icon} />
                  </span>
                  <span>Email</span>
                  <span className={styles.arrowUp}>
                    <BsArrowUpRight className={styles.icon} />
                  </span>
                </span>
              </a>
            </div>
            <div className={styles.inspo}>
              <p>
                Inspired by{" "}
                <a href="https://twitter.com/kadetXx" target="_blank">
                  <span>Kadet</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;

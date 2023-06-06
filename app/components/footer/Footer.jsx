import Link from "next/link";
import styles from "./footer.module.scss";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsTwitter, BsFillPlayFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <Link href={"/"}>
          <button className={styles.linkbtn}>Home</button>
        </Link>
        <Link target="_blank" href={"/seyidev resume.pdf"}>
          <button className={styles.linkbtn}>Resume</button>
        </Link>
      </div>
      <div className={styles.socials}>
        <div className={styles.socialLink}>
          <span>
            <a href="https://github.com/Seyi-dev1" target="_blank">
              <BsGithub className={styles.icon} />
            </a>
          </span>
        </div>
        <div className={styles.socialLink}>
          <span>
            <a href="https://twitter.com/oswagz19">
              <BsTwitter className={styles.icon} />
            </a>
          </span>
        </div>
        <div className={styles.socialLink}>
          <span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samoluwaseyi25@gmail.com"
              target="_blank"
            >
              <MdEmail className={styles.icon} />
            </a>
          </span>
        </div>
        <div className={styles.socialLink}>
          <span>
            <a href="https://www.linkedin.com/in/samuel-oluwaseyi-26883a195/">
              <FaLinkedinIn className={styles.icon} />
            </a>
          </span>
        </div>
      </div>
      <div className={styles.inspo}>
        <p>
          Inspired by <span>Kadet</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

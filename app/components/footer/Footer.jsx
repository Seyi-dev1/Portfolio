import Link from "next/link";
import styles from "./footer.module.scss";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsTwitter, BsFillPlayFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <Link href={"/"}>
          <button className={styles.linkbtn}>Home</button>
        </Link>
        <Link href={"/work"}>
          <button className={styles.linkbtn}>Linked in</button>
        </Link>
      </div>
      <div className={styles.socials}>
        <div className={styles.socialLink}>
          <span>
            <BsGithub className={styles.icon} />
          </span>
        </div>
        <div className={styles.socialLink}>
          <span>
            <BsTwitter className={styles.icon} />
          </span>
        </div>
        <div className={styles.socialLink}>
          <span>
            <MdEmail className={styles.icon} />
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

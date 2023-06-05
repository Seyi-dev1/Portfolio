"use client";
import styles from "./responsiveBio.module.scss";
import avatar2 from "../../../assets/fotor-ai-2023060322410.jpg";
import { BsGithub } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { BsTwitter, BsFillPlayFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const ResponsiveBio = () => {
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
            <div className={styles.heroImage}>
              <Image src={avatar2} alt="avatar" />
            </div>
            <h1 className={styles.greeting}>Hello, I'm Oluwaseyi Samuel.</h1>
            <p className={styles.intro}>
              I'm a <span>software engineer</span> who loves making cool and fun{" "}
              <span>web apps</span>. I know how to use HTML, CSS, JavaScript,
              and a bunch of <span>frontend frameworks</span> like{" "}
              <span>React</span>, <span>Angular</span>, <span>Vue</span>, and{" "}
              <span>Svelte</span>. I'm always curious about new stuff and how to
              make the web better for <span>everyone</span>.
            </p>
            <div className={styles.explorebtn}>
              <Link href={"/work"}>
                <button>
                  Explore
                  <BsFillPlayFill className={styles.icon} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveBio;

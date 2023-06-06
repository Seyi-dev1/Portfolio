"use client";
import styles from "./globals.module.scss";
import { Montserrat } from "next/font/google";
import Bio from "./components/bio/Bio";
import Navbar from "./components/navbar/Navbar";
import { BsGithub } from "react-icons/bs";
import { BsTwitter, BsFillPlayFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { usePathname } from "next/navigation";

const poppins = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className={`${poppins.className} ${styles.body}`}>
        <div className={styles.nav}>
          <Navbar />
        </div>
        <div className={styles.layout}>
          <div id="bio" className={styles.bio}>
            <Bio />
          </div>
          <div className={styles.outlet}>{children}</div>
        </div>
        {path === "/" && (
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
                <a href="https://twitter.com/oswagz19" target="_blank">
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
                <a
                  href="https://www.linkedin.com/in/samuel-oluwaseyi-26883a195/"
                  target="_blank"
                >
                  <FaLinkedinIn className={styles.icon} />
                </a>
              </span>
            </div>
          </div>
        )}
        {path === "/" && (
          <div className={styles.inspo}>
            <p>
              Inspired by{" "}
              <a href="https://twitter.com/kadetXx" target="_blank">
                <span>Kadet</span>
              </a>
            </p>
          </div>
        )}
      </body>
    </html>
  );
}

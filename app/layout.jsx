"use client";
import styles from "./globals.module.scss";
import { Montserrat } from "next/font/google";
import Bio from "./components/bio/Bio";
import Navbar from "./components/navbar/Navbar";
import { BsGithub } from "react-icons/bs";
import { BsTwitter, BsFillPlayFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
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
        {/* <div className={styles.nav}>
          <Navbar />
        </div> */}
        {/* <div className={styles.layout}>
          <div id="bio" className={styles.bio}>
            <Bio />
          </div>
          <div className={styles.outlet}>{children}</div>
        </div> */}
        {path === "/" && (
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
        )}
      </body>
    </html>
  );
}

import styles from "./page.module.scss";
import Work from "./components/work/Work";
import ResponsiveBio from "./components/responsive home/ResponsiveBio";

export const metadata = {
  title: "Seyi - software engineer",
  description: "portfolio website for software engineer.",
};
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.work}>
        <Work />
      </div>
      <div className={styles.responsiveBio}>
        <ResponsiveBio />
      </div>
    </div>
  );
}

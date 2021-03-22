import Link from "next/link";
import "normalize.css/normalize.css";

import styles from "./about.module.scss";

import SongPlayer from "../components/SongPlayer";

const About = () => (
  <div className={styles.container}>
    <h3>
      Like everybody, I am always altering so this is always changing so please{" "}
      &nbsp;
      <Link href="https://www.linkedin.com/in/mohammadjavad-nouri-575367101/">
        <a> Click here </a>
      </Link>{" "}
      &nbsp; to see my linkedin account.
    </h3>
    <h4>
      You can also &nbsp;
      <a href="/My Resume.pdf" download>
        Click here
      </a>
      &nbsp; to download my Resume.
    </h4>
    <p>Just in case to hear something real:</p>
    <h5>
      <SongPlayer />
    </h5>
  </div>
);

export default About;

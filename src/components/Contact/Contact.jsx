import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
            <a href="mailto:danitzavazquez991@gmail.com">danitzavazquez991@gmail.com</a>
        </li>
      </ul>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/igIcon.png")} alt="Instagram icon"/>
            <a href="https://www.instagram.com/dany09vs">dany09vs</a>
        </li>
      </ul>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
            <a href="https://www.github.com/DanitzaVasquez">DanitzaVasquez</a>
        </li>
      </ul>
    </footer>
  );
};

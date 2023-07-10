import React from "react";
import type { Props } from "@theme/Footer/Copyright";
import CopyrightIcons from "@site/static/img/icons_cc-by-sa-4-0.svg";
import styles from "./Copyright.module.css";

export default function FooterCopyright({ copyright }: Props): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <p className={styles.p}>
        Inhalte verfügbar als{" "}
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.a}
        >
          CC BY-SA 4.0
        </a>
      </p>
      <CopyrightIcons />
    </div>
  );
}

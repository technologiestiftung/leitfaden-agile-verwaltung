import React, { ReactNode } from "react";
import { FC } from "react";
import styles from "./HighlightedLink.module.css";

interface HighlightedLinkProps {
  label: string;
  href: string;
}

export const HighlightedLink: FC<HighlightedLinkProps> = ({ label, href }) => {
  return (
    <a href={href} className={styles.a}>
      {label}
    </a>
  );
};

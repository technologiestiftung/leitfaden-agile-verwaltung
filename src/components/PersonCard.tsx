import React, { FC } from "react";
import styles from "./PersonCard.module.css";

export interface PersonCardProps {
  name: string;
  email?: string;
  description: string;
  imageUrl: string;
}

export const PersonCard: FC<PersonCardProps> = ({
  name,
  email,
  description,
  imageUrl,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
      </div>
      <div>
        <p className={styles.name}>{name}</p>
        {email && (
          <a href={`mailto:${email}`} className={styles.email}>
            {email}
          </a>
        )}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

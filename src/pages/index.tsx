import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <div className={styles.wrapperOuter}>
        <div className={styles.wrapperMain}>
          <div className={styles.main}>
            <div className={styles.texts}>
              <h1 className={styles.headline}>{siteConfig.title}</h1>
              <p className={styles.tagline}>{siteConfig.tagline}</p>
              <a href="/docs/einfuehrung" className={styles.button}>
                Zur Einführung
              </a>
            </div>
            <img src="/img/agile-viz.svg" alt="" className={styles.viz} />
          </div>
        </div>
        <div className={styles.wrapperLogos}>
          <div className={styles.logos}>
            <img
              src="/img/tsb_logo_outlines.svg"
              alt=""
              style={{ width: "140px" }}
            />
            <img
              src="/img/citylab_logo_outlines.svg"
              alt=""
              style={{ width: "200px" }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

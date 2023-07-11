import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import TsbLogo from "@site/static/img/tsb_logo_outlines.svg";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <div className={styles.wrapperOuter}>
        <div className={styles.wrapperMain}>
          <div className={styles.main}>
            <div className={styles.texts}>
              <h1 className={styles.headline}>{siteConfig.title}</h1>
              <p className={styles.tagline}>{siteConfig.tagline}</p>
              <a href="/leitfaden/einfuehrung" className={styles.button}>
                Zum Leitfaden
              </a>
            </div>
            <img src="/img/agile-viz.svg" alt="" className={styles.viz} />
          </div>
        </div>
        <div className={styles.wrapperLogos}>
          <div className={styles.logos}>
            <TsbLogo
              style={{ width: "140px", height: "auto", color: "#fff" }}
            />
            <img
              src="/img/citylab_logo_outlines.svg"
              alt="Logo des CityLAB Berlin"
              style={{ width: "200px" }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

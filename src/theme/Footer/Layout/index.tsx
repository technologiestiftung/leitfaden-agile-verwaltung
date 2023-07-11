import React from "react";
import type { Props } from "@theme/Footer/Layout";
import SenatskanzleiLogo from "@site/static/img/logo_senatskanzlei.svg";
import TsbLogo from "@site/static/img/tsb_logo_outlines.svg";
import CitylabLogo from "@site/static/img/logo_citylab_color.svg";
import SenwebLogo from "@site/static/img/logo_senweb.svg";
import { VisualLink } from "@site/src/components/VisualLink";
import styles from "./Layout.module.css";

export default function FooterLayout({ links, copyright }: Props): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logoGrid}>
          <div>
            <p>Erstellung Leitfaden:</p>
            <VisualLink
              url="https://www.technologiestiftung-berlin.de/"
              title="Technologiestiftung Berlin"
              visual={
                <TsbLogo
                  style={{ width: "180px", height: "auto", color: "#1F3E85" }}
                />
              }
            />
          </div>
          <div>
            <p>Gefördert durch:</p>
            <VisualLink
              url="https://www.berlin.de/sen/web/"
              title="Senatsverwaltung für Wirtschaft, Energie und Betriebe"
              visual={<SenwebLogo style={{ width: "120px", height: "auto" }} />}
            />
          </div>
        </div>
        <div className={styles.logoGrid}>
          <div>
            <p>Erstellung Website:</p>
            <VisualLink
              url="https://www.technologiestiftung-berlin.de/"
              title="Technologiestiftung Berlin"
              visual={
                <CitylabLogo
                  style={{ width: "180px", height: "auto", color: "#1F3E85" }}
                />
              }
            />
          </div>
          <div>
            <p>Gefördert durch:</p>
            <VisualLink
              url="https://www.berlin.de/rbmskzl/"
              title="Der Regierende Bürgermeister von Berlin - Senatskanzlei"
              visual={
                <SenatskanzleiLogo style={{ width: "120px", height: "auto" }} />
              }
            />
          </div>
        </div>
      </div>

      <div className={styles.legalGrid}>
        {links}
        {copyright}
      </div>
    </footer>
  );
}

import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import type { Props } from "@theme/Footer/LinkItem";
import styles from "./LinkItem.module.css";

export default function FooterLinkItem({ item }: Props): JSX.Element {
  const { to, href, label, prependBaseUrlToHref, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <Link
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
      className={styles.a}
    >
      {label}
    </Link>
  );
}

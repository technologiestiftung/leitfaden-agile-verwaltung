// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Agil durch den Verwaltungsalltag",
  tagline:
    "Ein praktischer Leitfaden zur Entwicklung digitaler Verwaltungsangebote",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://agile-verwaltung.citylab-berlin.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  plugins: [
    async function MatomoPlugin() {
      const isProd = process.env.NODE_ENV === "production";
      return {
        name: "matomo-plugin",
        getClientModules() {
          return isProd
            ? [path.resolve(__dirname, "./lib/matomoPlugin.js")]
            : [];
        },
      };
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/leitfaden",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-image.png",
      navbar: {
        style: "dark",
        title: "Agil durch den Verwaltungsalltag",
        logo: {
          alt: "CityLAB Icon",
          src: "img/citylab_icon_outlines.svg",
        },
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        links: [
          {
            label: "Kontakt",
            href: "/leitfaden/autorinnen",
          },
          {
            label: "Quellcode",
            href: "https://github.com/technologiestiftung/leitfaden-agile-verwaltung",
          },
          {
            label: "Datenschutz",
            href: "https://www.technologiestiftung-berlin.de/datenschutz",
          },
          {
            label: "Impressum",
            href: "https://www.technologiestiftung-berlin.de/impressum",
          },
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;

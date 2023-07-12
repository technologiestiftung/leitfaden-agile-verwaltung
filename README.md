# Leitfaden Agile Verwaltung

This repository contains the source code for _Agil durch den Verwaltungsalltag_, a (German-language) guide to the development of digital services for public administrations.

> This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Requirements

- Node.js (version defined in `.nvmrc`)

## Installation

Make sure to have the Node version defined in `.nvmrc` installed. Then install all dependencies:

```bash
npm ci
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Project structure

This project was bootstrapped via Docusaurus, so the folder structure mostly follows their conventions.

Noteworthy might be that we adjusted some of their default components (`/src/theme/`), created custom components (`/src/components/`), and did considerable styling changes (`/src/css/custom.css` and throughout the various `*.module.css` files in the directories).

Static assets are defined in `static/`.

## Deployment

This project is deployed to [Netlify](https://www.netlify.com/). Updates to the `main` branch will automatically trigger a new deploy.

If you don't want an update to trigger a new deploy, you can use the flag `[skip ci]` in your commit message and Netlify will ignore it. This can be useful for chores such as updating the README file.

Example:

```bash
git commit -m "docs: update README [skip ci]"
```

## Matomo

We use Matomo to collect (anonymous) usage data. Find the relevant code in `docusaurus.config.js` and `lib/matomoPlugin.js`.

# Leitfaden Agile Verwaltung

This repository contains the source code for the _Leitfaden Agile Verwaltung_, a (German-language) guide to the development of digital services for public administrations.

> This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
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

## Deployment

This project is deployed to [Netlify](https://www.netlify.com/). Updates to the `main` branch will automatically trigger a new deploy.

If you don't want an update to trigger a new deploy, you can use the flag `[skip ci]` in your commit message and Netlify will ignore it. This can be useful for chores such as updating the README file.

Example:

```bash
git commit -m "docs: update README [skip ci]"
```

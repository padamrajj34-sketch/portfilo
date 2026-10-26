# Darbin Joshi Portfolio

A responsive React portfolio built with Vite and ready for GitHub Pages.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The production site is written to `dist/`.

## Deploy to GitHub Pages

1. Push this repository to GitHub on the `main` branch.
2. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the source.
3. The included `.github/workflows/deploy.yml` builds and deploys the site after each push to `main`.
4. Find the live URL in **Settings → Pages** or the successful Actions run.

The build automatically uses the correct repository path for a project site.

## Update portfolio content

Edit project and profile content in `src/App.jsx`. Replace `assets/files/Darbin_Joshi_CV.pdf` with an updated résumé using the same filename. Add project demo and repository URLs as they become available. Skill progress bars are a visual learning snapshot; adjust their stages and values in `src/App.jsx` as your experience grows.

The contact form opens the visitor's email app with the message filled in.

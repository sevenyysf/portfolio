# Pretri Seveny — Portfolio

Website: https://sevenyysf.github.io/portfolio/

Repository: https://github.com/sevenyysf/portfolio

To update the site, edit the files in `site/` and push to `main`. The GitHub Actions workflow checks and publishes the changes.

A complete static portfolio for GitHub Pages. The site lives in `site/` and does not need a framework, database, or runtime dependency. All project images and the CV are included locally. Paths are relative, so repository hosting and a personal `username.github.io` site both work.

## Publish from Pretri’s GitHub

1. Create a GitHub repository in Pretri’s account. Use `portfolio` for a project site, or the exact repository name `sevenyysf.github.io` for her main site. These are naming instructions, not live URLs.
2. Upload the contents of this project folder, including `.github/workflows/pages.yml`, `.aislop/config.yml`, `package.json`, `package-lock.json`, `scripts/`, and `site/`. Do not upload `node_modules`, `.openai`, or the separate private media archive.
3. Ensure the default branch is named `main`.
4. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
5. In **Actions**, run **Publish portfolio to GitHub Pages**, or push another commit to `main`.
6. Open the URL reported by the deployment. GitHub Pages will display the actual URL in Settings → Pages as well.

No hostname is hardcoded. If you use a different branch, update the workflow’s `branches` value. A custom domain is optional and can be configured in GitHub Pages settings later.

## Preview and check

Node.js 22 is recommended.

```sh
npm ci
npm run check
npm run scan
npm run quality
npm run preview
```

Open the local address printed by the preview server. `npm run check` validates local links, assets, section anchors, and JavaScript syntax. `aislop` runs as a development/CI dependency; it is not sent to visitors. Telemetry is disabled in `.aislop/config.yml`. The deployment workflow requires its quality gate to pass.

## Edit the portfolio

- **Text and experience:** `site/index.html`. Content stays readable even with JavaScript disabled.
- **Projects:** edit the four `<article class="project">` elements. Use `data-category="analysis"`, `"communication"`, or both for filters. Update the All work count if adding projects.
- **Images and CV:** replace files in `site/assets/`, preserving names, or update the corresponding relative links.
- **Colors, spacing and layout:** `site/styles.css`.
- **Filters and image viewer:** `site/app.js`.
- **Contact:** email and LinkedIn links are in `site/index.html`.

Project notes use native disclosure elements. Images link directly to original files and have an enhanced keyboard-accessible viewer. The CV is an actual downloadable PDF. No fake form, placeholder project link, or unavailable project-code download is included.

## Content sources and review

The portfolio is based on Pretri’s updated CV shared on 10 November 2026 and the two images she supplied for the portfolio: FOKASI insights and the SATRIA DATA carbon-market poster. Team outcomes are labeled as team outcomes. The Big Data Challenge result is a 96.7% macro F1 score on the competition platform's hidden test set, as documented in `sevenyysf/waste-classification-bdc-satdat2026` (the CV calls it accuracy). The portfolio does not claim a placement.

The updated CV (11 November 2026) lists the infographic entry as the SATRIA DATA 2026 Statistics Infographic Challenge, and the portfolio uses that category. The diabetes ordinal-logit project is a two-person course project with Mutiara Meisya Fadila; its notes, code link (`sevenyysf/determinan-diabet-ordinal-logit`), and RPubs report link come from the project repository and paper, including the paper's own stated limitations. Pretri confirmed her GitHub username as `sevenyysf`; the profile was checked and is linked. Her portfolio repository is `sevenyysf/portfolio`. Add verified project links when published. Six activity photos shared later on 10 November are included in the campus-and-community gallery. Captions describe visible context without identifying people in group photos.

This package includes her original CV with its contact details. Review the CV and portfolio before publishing them publicly. Unrelated WhatsApp attachments remain outside this project.

## Verification

`npm run check` passed. `aislop` 0.20.0 scored 100/100 across all three JavaScript files, with no findings. Desktop browser checks passed for local assets at both `/` and `/portfolio/`, filtering, project disclosures, and image-viewer opening/closing with focus restored. The page has no horizontal overflow at the tested 1433px viewport. Follow-up checks passed at a 390px mobile viewport with no horizontal overflow. Escape closes the viewer and restores focus. All six gallery photos return HTTP 200 and decode successfully. Full results: `verification.json`.

GitHub Pages is configured for this repository. See the Actions tab for the status of the latest deployment.

For the `portfolio` repository under `sevenyysf`, the expected address after deployment is `https://sevenyysf.github.io/portfolio/`. For the repository `sevenyysf.github.io`, it is `https://sevenyysf.github.io/`. This repository uses the first address; the root-site address would require a different repository.

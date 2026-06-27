# PDFMint

PDFMint is a private, on-device Image to PDF Converter for Android. It converts
images, scans documents, merges PDFs, and compresses files without uploading
the user's documents to a server.

## Official website

The production static website is in `website/`. It uses HTML5, CSS3, and vanilla
JavaScript and is generated from this README and the Markdown sources in
`docs/legal/`.

Regenerate it with one command:

```powershell
node tool/build-site.js
```

Do not edit generated HTML content directly. Update the Markdown sources and run
the generator. Layout and component changes belong in `website/css/style.css`,
`website/js/app.js`, or `tool/build-site.js`.

## Deploy to GitHub Pages

1. Run `node tool/build-site.js` and commit the generated files.
2. Push to `main`.
3. Open the repository's **Settings → Pages** and choose **GitHub Actions**.

The workflow at `.github/workflows/deploy-website.yml` regenerates the site and
deploys the `website/` directory. The public URL will be:

```text
https://vmalviya2.github.io/pdfmint-website/
```

## Configuration before release

- GitHub username or repository path: update `canonicalBase` in
  `tool/build-site.js` and `AppUrls.baseWebsite` in Flutter.
- Play Store: update `AppUrls.playStore`, then set
  `AppUrls.playStorePublished` to `true` only after the listing is public.
- Support email: update all legal Markdown references and
  `AppUrls.supportEmail`, then regenerate the website.
- Legal review: verify the privacy policy and terms match the final app and
  applicable law.

## Move to a custom domain later

Add `website/CNAME` containing the domain, point the domain's DNS records to
GitHub Pages, replace `canonicalBase` with the HTTPS custom-domain URL, update
`AppUrls.baseWebsite`, and regenerate the site. GitHub's Pages settings can then
enforce HTTPS.

## Flutter development

Install dependencies and run the normal checks:

```powershell
flutter pub get
flutter analyze
flutter test
```

The Android application ID is `com.pdfmint.pdfmint`.

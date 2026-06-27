# PDFMint website operations

The generated files in `website/` are deployable static assets. The authoritative
page content remains in the project Markdown files and should not be edited in
the generated HTML.

## Regenerate

From the repository root:

```powershell
node tool/build-site.js
```

The script reads `README.md` and every file in `docs/legal/`, rebuilds all HTML,
updates SEO files, and refreshes the website logo.

Validate the generated pages with:

```powershell
node tool/validate-site.js
```

## GitHub Pages

1. Run the build command and commit the generated `website/` directory.
2. Push to `main`. The included GitHub Actions workflow deploys `website/`.
3. In repository **Settings → Pages**, select **GitHub Actions** as the source.

## Configuration

- Custom domain: add a `website/CNAME` file containing the domain, update
  `canonicalBase` in `tool/build-site.js`, update `AppUrls.baseWebsite`, then
  configure the DNS records documented by GitHub Pages.
- Play Store: update `AppUrls.playStore` and set `playStorePublished` to `true`
  after the listing is public.
- Support email: update `docs/legal/support.md`, the other legal Markdown files,
  and `AppUrls.supportEmail`, then regenerate the site.

The privacy policy and terms are templates, not legal advice. Review them
against the released app and applicable law before publishing.

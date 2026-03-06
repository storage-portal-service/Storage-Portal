# Storage Portal Desktop

Desktop client that opens the [Storage Portal](https://www.storage-portal.com) web app in a dedicated window and adds a built-in “Recommended downloaders” page. Use the Dashboard inside the app to paste file-host links and get direct download URLs, then grab them with JDownloader, FDM, IDM, or 迅雷. Below: supported link format per host and how to use it in the client.

---

## Rapidgator Downloader

**Link format:** URLs containing `rapidgator.net` or `rg.to`, e.g. `https://rapidgator.net/file/...` or `https://rg.to/...`.

Paste one of these links into the Dashboard input box. The service returns a direct link; use it in your download manager for full-speed download. No Rapidgator premium needed.

---

## NitroFlare Downloader

**Link format:** Links that contain `nitroflare.com` or `nitroflare.net`, e.g. `https://nitroflare.com/view/...` or `https://nitroflare.net/...`.

Submit the link in the Dashboard input box. You get a direct download URL — open it in JDownloader, FDM, IDM, or 迅雷 to bypass NitroFlare’s free-tier limits.

---

## Turbobit Downloader

**Link format:** URLs with `turbobit.net` or the short domain `trbt.cc`, e.g. `https://turbobit.net/xxxxx.html` or `https://trbt.cc/...`.

Enter the link in the Dashboard input box. After processing, copy the generated direct link and add it to your download manager. Works without a Turbobit premium account.

---

## Keep2share / K2S Downloader

**Link format:** Links containing `keep2share.cc` or `k2s.cc`, e.g. `https://keep2share.cc/file/...` or `https://k2s.cc/...`.

Paste the URL into the Dashboard input box. Use the returned direct link in JDownloader 2, FDM, IDM, or 迅雷 for full-speed K2S downloads without a premium subscription.

---

## Fileboom Downloader

**Link format:** URLs containing `fboom.me`, e.g. `https://fboom.me/file/...`.

Submit your Fileboom (Fboom) link in the Dashboard input box. Once the transfer is ready, use the provided direct link in any download manager for full-speed download without Fileboom premium.

---

## UploadGig Downloader

**Link format:** Links that contain `uploadgig.com`, e.g. `https://uploadgig.com/file/download/...`.

Enter the UploadGig file URL in the Dashboard input box. The service returns a direct download link; grab it with JDownloader 2, FDM, IDM, or 迅雷. No UploadGig premium required.

---

## Katfile Downloader

**Link format:** URLs containing one of `katfile.online`, `katfile.com`, `katfile.cloud`, or `katfile.vip`, e.g. `https://katfile.com/...` or `https://katfile.vip/...`.

Paste the link into the Dashboard input box. Use the resulting direct link in your download manager for full-speed download without a Katfile premium account.

---

## Upstore Downloader

**Link format:** Links containing `upstore.net`, e.g. `https://upstore.net/...`.

Put your Upstore URL into the Dashboard input box. After processing, copy the direct link and add it to JDownloader 2, FDM, IDM, or 迅雷 to download at full speed without an Upstore premium subscription.

---

## Tezfiles Downloader

**Link format:** URLs containing `tezfiles.com`, e.g. `https://tezfiles.com/...`.

Paste the Tezfiles link into the Dashboard input box. The service will give you a direct download link; use it in JDownloader 2, FDM, IDM, or 迅雷. No Tezfiles premium needed.

---

## 1fichier Downloader

**Link format:** Links from 1fichier or its mirror domains: `1fichier.com`, `alterupload.com`, `cjoint.net`, `desfichiers.com`, `dfichiers.com`, `megadl.fr`, `mesfichiers.org`, `piecejointe.net`, `pjointe.com`, `tenvoi.com`, `dl4free.com`. Example: `https://1fichier.com/?xxxxx`.

Paste one of these URLs into the Dashboard input box. You’ll get a direct link; download with JDownloader 2, FDM, IDM, or 迅雷 at full speed without 1fichier premium.

---

## FileJoker Downloader

**Link format:** URLs containing `filejoker.net`, e.g. `https://filejoker.net/...`.

Enter your FileJoker link in the Dashboard input box. Once the transfer is ready, use the generated direct link in JDownloader, FDM, IDM, or 迅雷 for full-speed FileJoker downloads without a premium account.

---

## Supported file hosts (summary)

Rapidgator, FileJoker, Keep2share (K2S), Fileboom, UploadGig, NitroFlare, Turbobit, Katfile, Upstore, Tezfiles, 1fichier. Link format for each is described in the sections above.

---

## About this app

- **Portal view** — Loads the Storage Portal web app inside the app window (same as using the portal in a browser).
- **Downloader recommendations** — In-app page with links to JDownloader 2, Free Download Manager (FDM), Internet Download Manager (IDM), and 迅雷 (Xunlei).

The portal is available at [www.storage-portal.com](https://www.storage-portal.com); the same service is also offered at [www.file-debrid.com](https://www.file-debrid.com). You can use either in a browser or in this desktop client.

---

## Requirements

- Node.js 18+
- npm or yarn

## Run from source

```bash
npm install
npm start
```

## Build

```bash
npm run dist
```

Output is in the `dist` folder.

## macOS: “无法验证开发者” / “Apple 无法验证……”

The app is not notarized by Apple, so Gatekeeper may show: *Apple 无法验证「Storage Portal Desktop」是否包含可能危害 Mac 安全或泄漏隐私的恶意软件。*

**How to open:** Right-click (or Control-click) the app → **Open** → in the dialog click **Open** again. You only need to do this once; afterward it will open normally. Alternatively: **System Settings → Privacy & Security** → under “Security” you may see the blocked app and an **Open Anyway** button.

## Releasing on GitHub

To publish a new version (e.g. v1.0.0, v1.1.0):

1. **Update version** in `package.json` (e.g. `"version": "1.1.0"`).
2. **Commit and push** your changes.
3. **Create a tag and push it:**
   ```bash
   git tag v1.1.0
   git push origin v1.1.0
   ```
4. The **Release** workflow will run: it builds the app on macOS, Windows, and Linux, then creates a GitHub Release for that tag and attaches the installers (.dmg, .exe, .AppImage, etc.). You can add release notes on the [Releases](https://github.com/storage-portal-service/Storage-Portal/releases) page after the run finishes.

To release without CI (manual): build locally with `npm run dist`, then on GitHub go to **Releases → Draft a new release**, choose the tag (or create one), and upload the files from `dist/`.

## License

MIT

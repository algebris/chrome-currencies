import packageJson from "./package.json";

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  action: {
    default_popup: "src/pages/popup/static/index.html",
  },
  icons: {
    "16": "icons/ticker-16.png",
    "32": "icons/ticker-32.png",
    "48": "icons/ticker-48.png",
    "128": "icons/ticker-128.png",
  },
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "assets/img/*",
      ],
      matches: ["*://*/*"],
    },
  ],
  permissions: ["storage"],
};

export default manifest;

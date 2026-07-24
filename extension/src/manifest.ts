import type { ManifestV3Export } from "@crxjs/vite-plugin";

const manifest: ManifestV3Export = {
  manifest_version: 3,
  name: "ClaimSift",
  short_name: "ClaimSift",
  description: "Overlay timestamped fact checks over YouTube videos.",
  version: "0.1.2",

  permissions: ["storage"],

  host_permissions: ["https://www.youtube.com/*", "http://localhost:8080/*", "https://claimsift-backend.onrender.com/*"],

  content_scripts: [
    {
      matches: ["https://www.youtube.com/*"],
      js: ["src/content/content-script.tsx"],
      run_at: "document_idle",
    },
  ],

  web_accessible_resources: [
    {
      resources: ["images/claim-sift-logo.png"],
      matches: ["https://www.youtube.com/*"],
    },
  ],
};

export default manifest;

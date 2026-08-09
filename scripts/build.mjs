import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  firebaseConfig,
  isValidFirebaseWebConfig,
} from "../js/firebase-config.js";

const root = process.cwd();
const outDir = join(root, "dist");

function requireFile(path) {
  if (!existsSync(path)) throw new Error(`Missing required file: ${path}`);
}

for (const rel of [
  "index.html",
  "js/main.js",
  "js/firebase.js",
  "js/firebase-config.js",
  "js/firebase-init.js",
  "js/site-behavior.js",
  "js/particle-config.js",
  "js/particle-settings.js",
]) {
  requireFile(join(root, rel));
}

const html = readFileSync(join(root, "index.html"), "utf8");
if (!/Parker Memorial Fund|Memorial Fund/i.test(html)) {
  throw new Error("index.html missing Parker Memorial Fund branding");
}
if (!html.includes('src="js/firebase.js"')) {
  throw new Error("index.html must load js/firebase.js as a module");
}
if (!isValidFirebaseWebConfig(firebaseConfig)) {
  throw new Error("firebase config invalid");
}

const manifest = {
  builtAt: new Date().toISOString(),
  projectId: firebaseConfig.projectId,
  appId: firebaseConfig.appId,
};

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`Wrote ${join(outDir, "manifest.json")} for ${manifest.projectId}`);

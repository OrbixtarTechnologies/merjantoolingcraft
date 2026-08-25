import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

process.env.HOST ??= "0.0.0.0";

const root = dirname(fileURLToPath(import.meta.url));
const serverEntry = join(root, ".output", "server", "index.mjs");

await import(pathToFileURL(serverEntry).href);

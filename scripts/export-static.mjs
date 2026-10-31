import { cp, access, readdir } from "node:fs/promises";
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";

// Keep the framework's deployment output while exposing a conventional static root.
export async function exportStatic(outputDirectory = "dist") {
  const output = resolve(outputDirectory);
  const client = join(output, "client");
  await access(join(client, "index.html"));
  for (const entry of await readdir(client)) {
    if (["client", "server", ".lovable"].includes(entry)) {
      throw new Error(`Static asset conflicts with reserved build directory: ${entry}`);
    }
    await cp(join(client, entry), join(output, entry), { recursive: true });
  }
  console.log("Static website exported to dist/index.html. Deploy the HTML, assets and public files; no application server is required.");
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await exportStatic();
}
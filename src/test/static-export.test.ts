// @vitest-environment node
import { mkdtemp, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";

const temporaryDirectories: string[] = [];
afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map((path) => rm(path, { recursive: true, force: true })));
});

describe("Static build export", () => {
  it("exports index.html and assets to the dist root and retains deployment output", async () => {
    const { exportStatic } = await import("../../scripts/export-static.mjs");
    const directory = await mkdtemp(join(tmpdir(), "vareon-static-"));
    temporaryDirectories.push(directory);
    const dist = join(directory, "dist");
    await mkdir(join(dist, "client", "assets"), { recursive: true });
    await mkdir(join(dist, "server"), { recursive: true });
    await writeFile(join(dist, "client", "index.html"), '<html><script src="/assets/app.js"></script></html>');
    await writeFile(join(dist, "client", "assets", "app.js"), "console.log('VAREON')");
    await writeFile(join(dist, "server", "index.js"), "deployment entry");
    await exportStatic(dist);
    expect(await readFile(join(dist, "index.html"), "utf8")).toBe('<html><script src="/assets/app.js"></script></html>');
    expect(await readFile(join(dist, "assets", "app.js"), "utf8")).toBe("console.log('VAREON')");
    expect(await readFile(join(dist, "server", "index.js"), "utf8")).toBe("deployment entry");
  });

  it("fails instead of exporting an incomplete build without index.html", async () => {
    const { exportStatic } = await import("../../scripts/export-static.mjs");
    const directory = await mkdtemp(join(tmpdir(), "vareon-static-"));
    temporaryDirectories.push(directory);
    await expect(exportStatic(join(directory, "dist"))).rejects.toMatchObject({ code: "ENOENT" });
  });
});
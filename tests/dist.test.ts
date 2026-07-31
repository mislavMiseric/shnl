import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { cities } from "../src/data/cities";

const DIST = "dist";

function htmlFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return htmlFiles(full);
    return full.endsWith(".html") ? [full] : [];
  });
}

describe.skipIf(!existsSync(DIST))("built site", () => {
  it("contains a page for every city", () => {
    for (const c of cities) {
      expect(existsSync(join(DIST, c.slug, "index.html")), c.slug).toBe(true);
    }
  });

  it("lists every city page in the sitemap", () => {
    const sitemap = readFileSync(join(DIST, "sitemap-0.xml"), "utf8");
    for (const c of cities) {
      expect(sitemap).toContain(`https://shnl.hr/${c.slug}/`);
    }
  });

  it("links every city from the homepage", () => {
    const home = readFileSync(join(DIST, "index.html"), "utf8");
    for (const c of cities) {
      expect(home).toContain(`href="/${c.slug}/"`);
    }
  });

  it("shows the facility phone on each city page", () => {
    for (const c of cities) {
      const html = readFileSync(join(DIST, c.slug, "index.html"), "utf8");
      expect(html, c.slug).toContain(c.facility.phone);
    }
  });

  it("links the self-exclusion register on the homepage and every city page", () => {
    const home = readFileSync(join(DIST, "index.html"), "utf8");
    expect(home).toContain('href="https://hana.hzjz.hr"');
    for (const c of cities) {
      const html = readFileSync(join(DIST, c.slug, "index.html"), "utf8");
      expect(html, c.slug).toContain('href="https://hana.hzjz.hr"');
    }
  });

  it("contains no em dash in any generated page", () => {
    for (const file of htmlFiles(DIST)) {
      expect(readFileSync(file, "utf8"), file).not.toContain("\u2014");
    }
  });
});

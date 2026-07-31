import { describe, expect, it } from "vitest";
import { cities, VIEWBOX } from "../src/data/cities";

describe("cities data", () => {
  it("has 8 cities", () => {
    expect(cities).toHaveLength(8);
  });

  it("has unique, url-safe slugs", () => {
    const slugs = cities.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z][a-z-]*$/);
  });

  it("keeps every marker inside the map viewBox", () => {
    for (const c of cities) {
      expect(c.mapX).toBeGreaterThan(0);
      expect(c.mapX).toBeLessThan(VIEWBOX.width);
      expect(c.mapY).toBeGreaterThan(0);
      expect(c.mapY).toBeLessThan(VIEWBOX.height);
    }
  });

  it("has complete facility data and at least one club per city", () => {
    for (const c of cities) {
      expect(c.name.length).toBeGreaterThan(0);
      expect(c.nameLoc.length).toBeGreaterThan(0);
      expect(c.clubs.length).toBeGreaterThan(0);
      expect(c.facility.name.length).toBeGreaterThan(0);
      expect(c.facility.address).toMatch(/\d/);
      expect(c.facility.phone).toMatch(/^0\d[\d ]+$/);
      expect(c.facility.url).toMatch(/^https:\/\//);
      expect(c.facility.description.length).toBeGreaterThan(20);
    }
  });

  it("contains no em dash anywhere in the data", () => {
    expect(JSON.stringify(cities)).not.toContain("—");
  });
});

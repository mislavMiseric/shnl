import { expect, it } from "vitest";
import { EPOCH, elapsedSeconds } from "../src/lib/elapsed";

it("returns 0 at the epoch", () => {
  expect(elapsedSeconds(EPOCH)).toBe(0);
});

it("floors partial seconds", () => {
  expect(elapsedSeconds(EPOCH + 1999)).toBe(1);
});

it("counts a full day", () => {
  expect(elapsedSeconds(EPOCH + 86_400_000)).toBe(86400);
});

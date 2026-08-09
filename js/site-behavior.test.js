import { describe, expect, it } from "vitest";
import {
  COUNTDOWN_FINAL_DATE,
  detailsBottomPx,
  goTopShouldShow,
  nextTabIndex,
  overlayOpacity,
  pad2,
  prevTabIndex,
  remainingParts,
} from "./site-behavior.js";

describe("site-behavior", () => {
  it("pads single-digit countdown values", () => {
    expect(pad2(0)).toBe("00");
    expect(pad2(9)).toBe("09");
    expect(pad2(10)).toBe("10");
  });

  it("computes remaining countdown parts", () => {
    const finalMs = new Date(COUNTDOWN_FINAL_DATE).getTime();
    const parts = remainingParts(finalMs, finalMs - 90_000);
    expect(parts.expired).toBe(false);
    expect(parts.minutes).toBe("01");
    expect(parts.seconds).toBe("30");

    expect(remainingParts(finalMs, finalMs + 1).expired).toBe(true);
  });

  it("computes overlay opacity across the intro checkpoint", () => {
    expect(overlayOpacity(0, 100)).toBe(1);
    expect(overlayOpacity(50, 100)).toBe(0.5);
    expect(overlayOpacity(100, 100)).toBe(0);
    expect(overlayOpacity(150, 100)).toBe(0);
    expect(overlayOpacity(10, 0)).toBe(0);
  });

  it("gates back-to-top visibility", () => {
    expect(goTopShouldShow(800)).toBe(true);
    expect(goTopShouldShow(799)).toBe(false);
  });

  it("positions details relative to the viewport", () => {
    expect(detailsBottomPx(900, 400)).toBe(500);
  });

  it("wraps tab keyboard navigation", () => {
    expect(nextTabIndex(0, 3)).toBe(1);
    expect(nextTabIndex(2, 3)).toBe(0);
    expect(prevTabIndex(0, 3)).toBe(2);
    expect(prevTabIndex(1, 3)).toBe(0);
    expect(nextTabIndex(0, 0)).toBe(0);
    expect(prevTabIndex(0, 0)).toBe(0);
  });
});

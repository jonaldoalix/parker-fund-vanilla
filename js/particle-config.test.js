import { describe, expect, it } from "vitest";
import { JSDOM } from "jsdom";
import { hasParticlesTarget, particlesConfig } from "./particle-config.js";

describe("particle-config", () => {
  it("exports retina-ready particle options", () => {
    expect(particlesConfig.retina_detect).toBe(true);
    expect(particlesConfig.particles.number.value).toBe(160);
    expect(particlesConfig.interactivity.events.onhover.mode).toBe("bubble");
  });

  it("detects the particles canvas host", () => {
    const withTarget = new JSDOM('<div id="particles-js"></div>');
    const without = new JSDOM("<div></div>");
    expect(hasParticlesTarget(withTarget.window.document)).toBe(true);
    expect(hasParticlesTarget(without.window.document)).toBe(false);
  });
});

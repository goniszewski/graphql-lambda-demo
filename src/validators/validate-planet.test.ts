import { describe, expect, it } from "@jest/globals";

import { validatePlanet } from "./validate-planet";

describe("validatePlanet", () => {
  const validPlanetStub = "Tatooine";
  const invalidPlanetStub = "";

  it("should not throw an error if the planet is valid", () => {
    const call = () => validatePlanet(validPlanetStub);
    expect(call).not.toThrow();
  });

  it("should throw an error if the planet is invalid", () => {
    const call = () => validatePlanet(invalidPlanetStub);
    expect(call).toThrow();
  });
});

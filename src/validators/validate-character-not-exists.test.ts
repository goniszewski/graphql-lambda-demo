import { describe, expect, it } from "@jest/globals";
import { validateCharacterNotExists } from "./validate-character-not-exists";

describe("validateCharacterExists", () => {
  const charactersStub = [
    { name: "Luke Skywalker", episodes: ["NEWHOPE"] },
    { name: "Darth Vader", episodes: ["NEWHOPE"] },
  ];
  const existingCharacterNameStub = "Luke Skywalker";
  const nonExistingCharacterNameStub = "Han Solo";

  it("should throw an error if the character exists", () => {
    const call = () =>
      validateCharacterNotExists(charactersStub, existingCharacterNameStub);

    expect(call).toThrow();
  });

  it("should not throw an error if the character does not exist", () => {
    const call = () =>
      validateCharacterNotExists(charactersStub, nonExistingCharacterNameStub);
    expect(call).not.toThrow();
  });
});

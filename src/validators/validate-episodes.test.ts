import { describe, expect, it } from "@jest/globals";
import { validateEpisodes } from "./validate-episodes";

describe("validateEpisodes", () => {
  const validEpisodesStub = ["NEWHOPE", "EMPIRE", "JEDI"];
  const invalidEpisodesStub = ["FOO"];
  it("should not throw an error if the episodes are valid", () => {
    const call = () => validateEpisodes(validEpisodesStub);
    expect(call).not.toThrow();
  });

  it("should throw an error if the episodes are invalid", () => {
    const callForInvalidEpisodes = () => validateEpisodes(invalidEpisodesStub);
    expect(callForInvalidEpisodes).toThrow();

    const callForPartialInvalidEpisodes = () =>
      validateEpisodes([...validEpisodesStub, ...invalidEpisodesStub]);
    expect(callForPartialInvalidEpisodes).toThrow();
  });
});

import { CharacterModel } from "../models";
import { returnMutationResponse } from "./return-mutation-response";
import { describe, expect, it } from "@jest/globals";

describe("returnMutationResponse", () => {
  const successCharacterStub = {
    character: {
      name: "Luke Skywalker",
      episodes: ["NEWHOPE"],
      planet: "Tatooine",
    },
  };
  const errorCharacterStub = null;
  const successStub = true;
  const errorStub = false;
  const successMessageStub = "Character added";
  const errorMessageStub = "Character not added";

  it("should return a successful mutation response", () => {
    const call = () =>
      returnMutationResponse<CharacterModel, "character">(
        successStub,
        successMessageStub,
        successCharacterStub
      );
    expect(call()).toMatchObject({
      ...successCharacterStub,
      code: 200,
      success: true,
      message: successMessageStub,
    });
  });

  it("should return an unsuccessful mutation response", () => {
    const call = () =>
      returnMutationResponse<CharacterModel, "character">(
        errorStub,
        errorMessageStub,
        errorCharacterStub
      );
    expect(call()).toMatchObject({
      ...errorCharacterStub,
      code: 400,
      success: false,
      message: errorMessageStub,
    });
  });

  it("should return a object with associated field name", () => {
    const call = () =>
      returnMutationResponse<
        {
          name: string;
        },
        "planet"
      >(successStub, successMessageStub, {
        planet: { name: "Tatooine" },
      });

    expect(call()).toMatchObject({
      planet: { name: "Tatooine" },
      code: 200,
      success: true,
      message: successMessageStub,
    });
  });
});

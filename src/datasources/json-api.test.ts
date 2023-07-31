import { describe, expect, it } from "@jest/globals";
import { JsonAPI } from "./json-api";
import { characters } from "../json/characters.json";
import { CharacterModel } from "../models";

describe("JsonAPI", () => {
  describe("getCharacters", () => {
    it("should return first 10 characters", async () => {
      const jsonAPI = new JsonAPI();
      const fetchedCharacters = jsonAPI.getCharacters(0, 10);

      expect(fetchedCharacters).toMatchObject(characters.slice(0, 10));
    });
  });

  describe("getCharacter", () => {
    it("should return a character", async () => {
      const jsonAPI = new JsonAPI();
      const fetchedCharacter = jsonAPI.getCharacter("Han Solo");

      const expectedCharacter = characters.find(
        (character) => character.name === "Han Solo"
      );

      expect(fetchedCharacter).toMatchObject(expectedCharacter);
    });

    it("should throw an error if the character does not exist", async () => {
      const jsonAPI = new JsonAPI();
      const fetchedCharacter = jsonAPI.getCharacter("Jar Jar Binks");

      expect(fetchedCharacter).toBeUndefined();
    });
  });

  describe("addCharacter", () => {
    it("should add a character", async () => {
      const jsonAPI = new JsonAPI();
      const character = jsonAPI.addCharacter(
        "Jar Jar Binks",
        ["NEWHOPE"],
        "Naboo"
      ).character;

      const fetchedCharacters = jsonAPI.getCharacters(0, 100);
      expect(character).toMatchObject(
        fetchedCharacters.find(
          (character) => character.name === "Jar Jar Binks"
        )
      );
    });

    it("should return an error if the character already exists", async () => {
      const jsonAPI = new JsonAPI();
      const { character, success } = jsonAPI.addCharacter(
        "Han Solo",
        ["NEWHOPE"],
        "Corellia"
      );

      expect(character).toBeNull();
      expect(success).toBe(false);
    });
  });

  describe("updateCharacter", () => {
    it("should update a character", async () => {
      const jsonAPI = new JsonAPI();
      const { character, success } = jsonAPI.updateCharacter(
        "Han Solo",
        ["NEWHOPE"],
        "Corellia"
      );

      const fetchedCharacters = jsonAPI.getCharacters(0, 100);

      expect(character).toMatchObject(
        fetchedCharacters.find((character) => character.name === "Han Solo")
      );
      expect(success).toBe(true);
    });

    it("should return an error if the character does not exist", async () => {
      const jsonAPI = new JsonAPI();
      const { character, success } = jsonAPI.updateCharacter(
        "Jar Jar Binks",
        ["NEWHOPE"],
        "Naboo"
      );

      expect(character).toBeNull();
      expect(success).toBe(false);
    });
  });

  describe("deleteCharacter", () => {
    it("should delete a character", async () => {
      const jsonAPI = new JsonAPI();
      const { character, success } = jsonAPI.deleteCharacter("Han Solo");

      const fetchedCharacters = jsonAPI.getCharacters(0, 100);

      expect(fetchedCharacters).not.toContain(character);
      expect(success).toBe(true);
    });

    it("should return an error if the character does not exist", async () => {
      const jsonAPI = new JsonAPI();
      const { character, success } = jsonAPI.deleteCharacter("Boba Fett");

      expect(character).toBeNull();
      expect(success).toBe(false);
    });
  });
});

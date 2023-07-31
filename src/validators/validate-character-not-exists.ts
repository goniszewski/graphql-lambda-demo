import { Character } from "../types";

export function validateCharacterNotExists(
  characters: Character[],
  characterName: string
) {
  if (characters.some((character) => character.name === characterName)) {
    throw new Error(`Character with name ${name} not found`);
  }
}

import { characters } from "../json/characters.json";
import { CharacterModel } from "../models";
import { Character } from "../types";
import {
  validateCharacterNotExists,
  validateEpisodes,
  validatePlanet,
} from "../validators";

function returnMutationResponse<T, S extends string>(
  success: boolean,
  message: string,
  object: Record<S, T>
): {
  code: number;
  success: boolean;
  message: string;
} & Record<S, T | null> {
  return {
    code: success ? 200 : 400,
    success,
    message,
    ...object,
  };
}

export class JsonAPI {
  local = [...characters];

  getCharacters(offset: number, limit: number): Character[] {
    return this.local.slice(offset, offset + limit);
  }

  getCharacter(name: string): Character {
    return this.local.find((character) => character.name === name);
  }

  addCharacter(name: string, episodes: string[], planet?: string) {
    const character = { name, episodes, planet };

    try {
      validateEpisodes(episodes);
      validatePlanet(planet);
      validateCharacterNotExists(this.local, name);

      this.local.push(character);

      return returnMutationResponse<CharacterModel, "character">(
        true,
        `Character with name ${name} added`,
        {
          character,
        }
      );
    } catch (e) {
      return returnMutationResponse<CharacterModel, "character">(
        false,
        e.message,
        {
          character: null,
        }
      );
    }
  }

  updateCharacter(name: string, episodes: string[], planet?: string) {
    const character = { name, episodes, planet };

    try {
      validateEpisodes(episodes);
      validatePlanet(planet);

      const index = this.local.findIndex((c) => c.name === name);

      if (index === -1) {
        throw new Error(`Character with name ${name} not found`);
      }

      this.local[index] = character;

      return returnMutationResponse<CharacterModel, "character">(
        true,
        `Character with name ${name} updated`,
        {
          character,
        }
      );
    } catch (e) {
      return returnMutationResponse<CharacterModel, "character">(
        false,
        e.message,
        {
          character: null,
        }
      );
    }
  }

  deleteCharacter(name: string) {
    const character = this.local.find((c) => c.name === name);

    if (character) {
      this.local = this.local.filter((c) => c.name !== name);

      return returnMutationResponse<CharacterModel, "character">(
        true,
        `Character with name ${name} deleted`,
        { character }
      );
    } else {
      return returnMutationResponse<CharacterModel, "character">(
        false,
        `Character with name ${name} not found`,
        { character: null }
      );
    }
  }
}

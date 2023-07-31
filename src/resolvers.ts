import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    characters: async (
      _source,
      { offset = 0, limit = 10 },
      { dataSources }
    ) => {
      return dataSources.jsonAPI.getCharacters(offset, limit);
    },
    character: async (_source, { name }, { dataSources }) => {
      return dataSources.jsonAPI.getCharacter(name);
    },
  },
  Mutation: {
    addCharacter: async (
      _source,
      { name, episodes, planet },
      { dataSources }
    ) => {
      return dataSources.jsonAPI.addCharacter(name, episodes, planet);
    },
    updateCharacter: async (
      _source,
      { name, episodes, planet },
      { dataSources }
    ) => {
      return dataSources.jsonAPI.updateCharacter(name, episodes, planet);
    },
    deleteCharacter: async (_source, { name }, { dataSources }) => {
      return dataSources.jsonAPI.deleteCharacter(name);
    },
  },
};

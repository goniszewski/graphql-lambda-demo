import gql from "graphql-tag";

export const schema = gql`
  type Query {
    "Query to get all characters"
    characters(offset: Int, limit: Int): [Character]!
    "Query to get a specific character by name"
    character(name: String!): Character
  }

  type Mutation {
    "Mutation to add a new character"
    addCharacter(
      name: String!
      episodes: [String!]!
      planet: String
    ): MutateCharacterResponse!
    "Mutation to update an existing character"
    updateCharacter(
      name: String!
      episodes: [String!]!
      planet: String
    ): MutateCharacterResponse!
    "Mutation to delete an existing character"
    deleteCharacter(name: String!): MutateCharacterResponse!
  }

  type MutateCharacterResponse {
    "200 if the mutation was successful, 400 otherwise"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Character that was deleted"
    character: Character
  }

  type Character {
    "Full name of the character"
    name: String!
    "Episodes the character appears in, e.g. 'NEWHOPE'"
    episodes: [String!]!
    "Planet the character is from, e.g. 'Tatooine'"
    planet: String
  }
`;

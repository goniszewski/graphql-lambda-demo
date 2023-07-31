import { startStandaloneServer } from "@apollo/server/standalone";

import { JsonAPI } from "./datasources/json-api";
import { server } from "./server";

async function startApolloServer() {
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      return {
        dataSources: {
          jsonAPI: new JsonAPI(),
        },
      };
    },
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();

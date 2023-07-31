import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
import { server } from "./server";
import { JsonAPI } from "./datasources/json-api";

export const requestHandler =
  handlers.createAPIGatewayProxyEventV2RequestHandler();

export const handler = startServerAndCreateLambdaHandler(
  server,
  requestHandler,
  {
    context: async () => {
      return {
        dataSources: {
          jsonAPI: new JsonAPI(),
        },
      };
    },
  }
);

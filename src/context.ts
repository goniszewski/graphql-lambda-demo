import { JsonAPI } from "./datasources/json-api";

export type DataSourceContext = {
  dataSources: {
    jsonAPI: JsonAPI;
  };
};

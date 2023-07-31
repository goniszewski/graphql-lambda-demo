# GraphQL Lambda Demo Project

This project is a demonstration of GraphQL API implementation using AWS Lambda and Serverless framework. It focuses mainly on the GraphQL API implementation and not on the data storage. The data is stored in a simple JSON file to allow for easy local development and testing.

## Getting Started

### Prerequisites

- Node.js `16.19.0` or higher
- npm `8.1.0` or higher

### Installing

#### 1. Clone the repository

```bash
git clone git@gitlab.com:goniszewski/graphql-demo.git
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Start the local development server or call the lambda function locally using the serverless framework

```bash
npm run start:node-local
```

And then open [http://localhost:4000/](http://localhost:4000/) to view the GraphQL Playground in the browser.

OR

```bash
npm run start:serverless-local
```

And check the output in the terminal.

## Running the tests

Run the tests using the following command:

```bash
npm run test
```

All validators and the JSON API datasource are tested. The tests are run using the [Jest](https://jestjs.io/) framework.

You can also find code coverage report in the `coverage/` directory.

## Deployment

The project is deployed to AWS Lambda using the [Serverless](https://www.serverless.com/) framework. Keep in mind that the project is not configured to use any real data storage, so the data will only be available during the lifetime of the lambda function.

Ideally, the project should use a real data storage, such as DynamoDB. For more information about this integration, pleas refer to the [Amazon DynamoDB and Serverless](https://www.serverless.com/guides/dynamodb) guide.

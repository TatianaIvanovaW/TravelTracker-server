const express = require("express");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const models = require("./models/index");
const { ApolloServer } = require("apollo-server-express");

const app = express();
const port = 4000;

console.log("What is USer", models.user);

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

server.applyMiddleware({ app });
app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:ocalhost:${port}${server.graphqlPath}`
  )
);

const express = require("express");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const models = require("./models/index");
const { ApolloServer } = require("apollo-server-express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");

const authRouter = require("./routers/auth");

const app = express();
const port = 4000;

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());
app.use("/", authRouter);

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

server.applyMiddleware({ app });
app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:ocalhost:${port}${server.graphqlPath}`
  )
);

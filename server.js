const express = require("express");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const models = require("./models/index");
const { ApolloServer } = require("apollo-server-express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");

const authRouter = require("./routers/auth");
const addCountry = require("./routers/add");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());
app.use("/", authRouter);
app.use("/", addCountry);

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

app.get("/test", async (req, res, next) => {
  res.json("user.toDoLists");
});

server.applyMiddleware({ app });
app.listen(PORT, () =>
  console.log(
    `🚀 Server ready at http://localhost:ocalhost:4000${server.graphqlPath}`
  )
);

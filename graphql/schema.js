const { gql } = require("apollo-server-express");

const rootType = gql`
  type User {
    id: Int
    name: String!
  }
  type Country {
    code: String!
    name: String!
  }

  type Visit {
    userId: Int!

    countryId: String!
  }

  type Query {
    countries: [Country!]!
    users: [User!]!
    visits: [Visit!]!
  }
`;

module.exports = [rootType];

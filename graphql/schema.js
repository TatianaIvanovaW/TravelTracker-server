const { gql } = require("apollo-server-express");

const rootType = gql`
  type User {
    id: Int
    name: String
    visits: [Visit]
  }
  type Country {
    code: String!
    name: String!
  }
  type UserV {
    id: User
    visits: [Visit]
  }
  type Visit {
    userId: Int!

    countryId: String!
  }

  type Query {
    countries: [Country!]!
    users: [User!]!
    visits: [Visit!]!
    userVisits: [UserV]
  }
`;

module.exports = [rootType];

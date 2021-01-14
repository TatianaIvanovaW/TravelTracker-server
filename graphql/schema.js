const { gql } = require("apollo-server-express");

const rootType = gql`
  type User {
    id: ID!
    name: String
  }
  type Country {
    code: String!
    name: String!
    visit: Visit
  }

  type Visit {
    userId: Int!
    countryId: String!
  }

  type UserV {
    id: Int
    name: String
    countries: [Country]
  }

  type CountryV {
    name: String
    code: String
    users: [User]
  }

  type Query {
    countries: [Country!]!
    users: [User!]!
    visits: [Visit!]!
    userVisits: [UserV]
    countryUsers: [CountryV]
  }
`;

module.exports = [rootType];

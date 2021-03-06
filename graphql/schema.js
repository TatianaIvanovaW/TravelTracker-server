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
    id: Int!
    userId: Int!
    countryId: String
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
    user(id: Int): UserV
  }
`;

module.exports = [rootType];
// type Mutation {
//   visit(id: Int, userId: Int, countryId: String): Visit
// }

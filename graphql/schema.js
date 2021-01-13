const { gql } = require("apollo-server-express");

const rootType = gql`
  type Query {
    getAllCountries: [Country!]!
    getAllVisits: [Visit!]!
  }
  type Country {
    name: String
    code: String
  }
  type Visit {
    userId: Int
    countryId: String
  }
`;

module.exports = [rootType];

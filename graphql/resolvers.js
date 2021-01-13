const resolvers = {
  Query: {
    async getAllCountries(root, args, { models }) {
      return models.country.findAll();
    },
    async getAllVisits(root, args, { models }) {
      return models.visit.findAll();
    },
  },
};

module.exports = resolvers;

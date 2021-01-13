const resolvers = {
  Query: {
    countries: (parent, args, { models }, info) => models.country.findAll(),
    users: (parent, args, { models }, info) => models.user.findAll(),
    visits: (parent, args, { models }, info) => models.visit.findAll(),
  },
};

module.exports = resolvers;

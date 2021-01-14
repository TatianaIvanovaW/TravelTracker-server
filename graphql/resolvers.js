const resolvers = {
  User: {
    visits: (parent, args, context, info) => {
      console.log(parent);
      parent.getVisits();
    },
  },
  Query: {
    countries: (parent, args, { models }, info) => models.country.findAll(),
    users: (parent, args, { models }, info) => models.user.findAll(),
    visits: (parent, args, { models }, info) => models.visit.findAll(),
    userVisits: (parent, args, { models }, info) => {
      return models.user.findAll({ include: [models.country] });
    },
  },
};

module.exports = resolvers;

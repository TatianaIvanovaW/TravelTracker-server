const resolvers = {
  Query: {
    countries: (parent, args, { models }, info) => models.country.findAll(),
    users: (parent, args, { models }, info) => models.user.findAll(),
    visits: (parent, args, { models }, info) => models.visit.findAll(),
    user: (parent, { id }, { models }, info) =>
      models.user.findOne({
        where: { id },

        include: [models.visit],
      }),
    userVisits: (parent, args, { models }, info) => {
      return models.user.findAll({
        include: [models.country],
      });
    },
    countryUsers: (parent, args, { models }, info) => {
      return models.country.findAll({
        include: [models.user],
      });
    },
  },
  // Mutation: {
  //   // 2
  //   visit: (parent, args, { models }) => {
  //     const visit = {
  //       id: parseInt(Math.random() * 100),
  //       userId: args.userId,
  //       countryId: args.countryId,
  //     };
  //     models.visit.findAll().push(visit);
  //     return visit;
  //   },
  // },
};
module.exports = resolvers;

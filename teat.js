const fs = require("fs");
const models = require("./models");

const something = async () => {
  const jj = await models.user.findAll({ include: [models.country] });
  console.log(jj);
  fs.writeFileSync("output.json", JSON.stringify(jj, null, 4));
};

something();

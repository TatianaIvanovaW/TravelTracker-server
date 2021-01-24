const { Router } = require("express");

const router = new Router();
const Visit = require("../models").visit;

const Country = require("../models").country;

const authMiddleWare = require("../auth/middleware");

router.post("/add", authMiddleWare, async (req, res, next) => {
  const { countryCode } = req.body;

  try {
    const addCountry = await Visit.create({
      userId: req.user.id,
      countryId: countryCode,
    });

    res.send(addCountry);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/user", authMiddleWare, async (req, res, next) => {
  console.log(`user id`, req.user.id);
  try {
    const user = await Visit.findAll({
      where: { userId: parseInt(req.user.id) },
    });
    res.send(user);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.delete("/visit/:id", authMiddleWare, async (req, res, next) => {
  console.log(`what is that`, req.body);
  console.log(`user id`, req.user.id);
  const id = req.params.id;
  try {
    await Visit.destroy({ where: { countryID: id, userId: req.params.id } });

    res.send("visit deleted");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;

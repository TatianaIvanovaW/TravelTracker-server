const { Router } = require("express");

const router = new Router();
const Visit = require("../models").visit;

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

module.exports = router;

const router = require("express").Router();
const { createUser, authUser } = require("../service/user.service");

router.post("/reg", async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    res.status(201).send(data);
  } catch (error) {
    res.status(405).send(error.message);
  }
});

router.post("/auth", async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const data = await authUser(email, pwd);

    res.status(201).send(data);
  } catch (error) {
    res.status(405).send(error.message);
  }
});

module.exports = router;

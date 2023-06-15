const router = require('express').Router();
const createToken = require('../helper/jwt');
const buildResponse = require('../helper/buildResponse');
const { isValidUserData } = require('../helper/validation');
const { createUser, authUser } = require('../service/user.service');

router.post('/reg', isValidUserData, async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.post('/auth', isValidUserData, async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const data = await authUser(email, pwd);
    const token = createToken(data);

    res.setHeader('authorization', [`bearer ${token}`]);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = router;

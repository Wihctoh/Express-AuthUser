function isValidUserData(req, res, next) {
  const { name, surname, email, pwd } = req.body;

  if (!name) throw new Error('name not found!');
  if (!surname) throw new Error('surname not found!');
  if (!email) throw new Error('email not found');
  if (!pwd) throw new Error('pwd not found!');

  if (!isNaN(name)) throw new Error('incorrect name!');
  if (!isNaN(surname)) throw new Error('incorrect surname!');
  // eslint-disable-next-line no-useless-escape
  if (!/^[\w\.\-]+@[a-z]{4,}\.[a-z]{2,}$/gm.test(email)) throw new Error('incorrect email!');
  if (pwd.length < 8) throw new Error('password less then 8-th letters!');

  next();
}

module.exports = { isValidUserData };

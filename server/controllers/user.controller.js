const userService = require('../services/user.service');

const getUsers = async (req, res) => {
  res.send(await userService.getAllUsers());
};

const createUser = async (req, res) => {
  try {
    const createdUser = await userService.createUser(req.body);
    res.status(201).send(createdUser);
  } catch (e) {
    res.status(e.statusCode).send(e.body);
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userService.getUserById(userId);
    res.send(user);
  } catch (e) {
    res.status(e.statusCode).send(e.body);
  }
};

const updateUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const updatedUser = await userService.updateUserById(userId, req.body);
    res.send(updatedUser);
  } catch (e) {
    res.status(e.statusCode).send(e.body);
  }
};

const deleteUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await userService.deleteUserById(userId);
    res.send(deletedUser);
  } catch (e) {
    res.status(e.statusCode).send(e.body);
  }
};

module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
module.exports.getUserById = getUserById;
module.exports.updateUserById = updateUserById;
module.exports.deleteUserById = deleteUserById;

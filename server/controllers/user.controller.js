const userService = require('../services/user.service');

const getUsers = async (req, res, next) => {
  try {
    res.send(await userService.getAllUsers());
  } catch (e) {
    next(e);
  }
};

const createUser = async (req, res, next) => {
  try {
    const createdUser = await userService.createUser(req.body);
    res.status(201).send(createdUser);
  } catch (e) {
    next(e);
  }
};

const getUserById = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await userService.getUserById(userId);
    res.send(user);
  } catch (e) {
    next(e);
  }
};

const updateUserById = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const updatedUser = await userService.updateUserById(userId, req.body);
    res.send(updatedUser);
  } catch (e) {
    next(e);
  }
};

const deleteUserById = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const deletedUser = await userService.deleteUserById(userId);
    res.send(deletedUser);
  } catch (e) {
    next(e);
  }
};

module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
module.exports.getUserById = getUserById;
module.exports.updateUserById = updateUserById;
module.exports.deleteUserById = deleteUserById;

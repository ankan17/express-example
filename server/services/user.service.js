const users = require('../data/users');
const NotFoundException = require('../utils/errors/NotFoundException');

const getAllUsers = () => new Promise((resolve) => resolve(users));

const createUser = (userDetails) => {
  const lastUserId = users[users.length - 1]?.id || 0;
  const id = lastUserId + 1;
  const newUserDetails = { id, ...userDetails };
  users.push(newUserDetails);
  return new Promise((resolve) => {
    resolve(newUserDetails);
  });
};

const getUserById = (id) => {
  const userToFind = users.find((user) => user.id === parseInt(id));
  if (!userToFind) {
    throw new NotFoundException(`No user found with id ${id}`);
  }
  return new Promise((resolve) => {
    resolve(userToFind);
  });
};

const updateUserById = (id, userDetails) => {
  const updatedUserDetails = {
    id,
    ...userDetails,
  };
  const idx = users.findIndex((user) => user.id === parseInt(id));
  if (idx === -1) {
    throw new NotFoundException(`No user found with id ${id}`);
  }
  users[idx] = updatedUserDetails;
  return new Promise((resolve) => {
    resolve(updatedUserDetails);
  });
};

const deleteUserById = (id) => {
  const userDetails = getUserById(id);
  const idx = users.findIndex((user) => user.id === parseInt(id));
  users.splice(idx, 1);
  return new Promise((resolve) => {
    resolve(userDetails);
  });
};

module.exports.getAllUsers = getAllUsers;
module.exports.createUser = createUser;
module.exports.getUserById = getUserById;
module.exports.updateUserById = updateUserById;
module.exports.deleteUserById = deleteUserById;

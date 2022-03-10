const express = require('express');

const userController = require('./user.controller');
const { createUserValidationMiddleware, updateUserValidationMiddleware } = require('./user.middleware');

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);

userRouter.get('/:id', userController.getUserById);

userRouter.post(
  '/',
  createUserValidationMiddleware,
  userController.createUser,
);

userRouter.put(
  '/:id',
  updateUserValidationMiddleware,
  userController.updateUserById,
);

userRouter.delete('/:id', userController.deleteUserById);

module.exports = userRouter;

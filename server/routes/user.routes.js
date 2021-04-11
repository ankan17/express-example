const express = require('express');

const userRouter = express.Router();
const userController = require('../controllers/user.controller');
const validationMiddleware = require('../middlewares/validator');

userRouter.get('/', userController.getUsers);

userRouter.post(
  '/',
  (req, res, next) => validationMiddleware('user', req, res, next),
  userController.createUser
);

userRouter.get('/:id', userController.getUserById);

userRouter.put(
  '/:id',
  (req, res, next) => validationMiddleware('user', req, res, next),
  userController.updateUserById
);

userRouter.delete('/:id', userController.deleteUserById);

module.exports = userRouter;

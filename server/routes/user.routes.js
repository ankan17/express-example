const express = require('express');

const userRouter = express.Router();
const userController = require('../controllers/user.controller');

userRouter.get('/', userController.getUsers);

userRouter.post('/', userController.createUser);

userRouter.get('/:id', userController.getUserById);

userRouter.put('/:id', userController.updateUserById);

userRouter.delete('/:id', userController.deleteUserById);

module.exports = userRouter;

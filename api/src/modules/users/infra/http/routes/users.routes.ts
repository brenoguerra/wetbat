import { Router } from "express";

import { validationFields } from "../../../../../shared/infra/http/middlewares/validationFields";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { ISignInUserDTO } from "../../../dtos/ISignInUserDTO";

import UserController from "../controllers/UserController";

const usersRouter = Router();
const userController = new UserController();

usersRouter.post('/signup', validationFields(ICreateUserDTO), userController.signUp)
usersRouter.post('/signin', validationFields(ISignInUserDTO), userController.signIn)

export default usersRouter

import { Router } from "express";
import { CreateUserController } from "../users/useCases/createUser/CreateUserController";

const  createUserController = new CreateUserController()

const userRoutes = Router()

userRoutes.post("/", createUserController.handle) //criacao do post

export { userRoutes }

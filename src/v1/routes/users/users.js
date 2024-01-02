import { Router } from "express";

// here we imports the controllers and middlewares
import { UserController } from '../../controllers/users/users.controllers.js'

export const usersRoutes = Router();
export const userController = new UserController()

usersRoutes.post("/", userController.createUser);

usersRoutes.get("/", userController.findUsers);

usersRoutes.put("/", userController.updateUser);

usersRoutes.delete("/", userController.deleteUser);

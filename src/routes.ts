import { Router } from "express";

import { ensureAuthenticate } from "./middleware/ensureAuthenticate"

import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { UpdateNameController } from "./controllers/UpdateNameController";
import { UpdatePasswordController } from "./controllers/UpdatePasswordController";
import { DeleteUserController } from "./controllers/DeleteUserController";

const routes = Router()

const authenticateUserController = new AuthenticateUserController()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()
const updateNameController = new UpdateNameController()
const updatePasswordController = new UpdatePasswordController()
const deleteUsersController = new DeleteUserController()

routes.post("/login", authenticateUserController.handle)

routes.post("/users", createUserController.handle)
routes.get("/users", listUsersController.handle)
routes.put("/users/name/:id", updateNameController.handle)
routes.put("/users/password/:id", updatePasswordController.handle)
routes.delete("/users/:id", ensureAuthenticate, deleteUsersController.handle)

export { routes }
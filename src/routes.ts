import { Router } from "express";

import { ensureAuthenticate } from "./middleware/ensureAuthenticate"

import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";

const routes = Router()

const authenticateUserController = new AuthenticateUserController()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()
const updateUserController = new UpdateUserController()
const deleteUsersController = new DeleteUserController()

routes.post("/login", authenticateUserController.handle)

routes.post("/users", createUserController.handle)
routes.get("/users", listUsersController.handle)
routes.put("/users/name/:id", ensureAuthenticate, updateUserController.updateName)
routes.put("/users/email/:id", ensureAuthenticate, updateUserController.updateEmail)
routes.put("/users/password/:id", ensureAuthenticate, updateUserController.updatePassword)
routes.delete("/users/:id", ensureAuthenticate, deleteUsersController.handle)

export { routes }
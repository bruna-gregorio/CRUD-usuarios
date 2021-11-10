import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { UpdateNameController } from "./controllers/UpdateNameController";
import { UpdatePasswordController } from "./controllers/UpdatePasswordController";

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
routes.put("/users/:id", updateNameController.handle)
routes.patch("/users/:id", updatePasswordController.handle)
routes.delete("/users/:id", deleteUsersController.handle)

export { routes }
import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { ListUsersController } from "./controllers/ListUsersController";

const routes = Router()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()
const deleteUsersController = new DeleteUserController()

routes.post("/users", createUserController.handle)
routes.get("/users", listUsersController.handle)
routes.delete("/users/:id", deleteUsersController.handle)

export { routes }
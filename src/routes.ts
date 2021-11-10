import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";

const routes = Router()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()

routes.post("/users", createUserController.handle)
routes.get("/users", listUsersController.handle)

export { routes }
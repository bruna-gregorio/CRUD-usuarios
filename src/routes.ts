import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { UpdateNameController } from "./controllers/UpdateNameController";
import { UpdatePasswordController } from "./controllers/UpdatePasswordController";

const routes = Router()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()
const updateNameController = new UpdateNameController()
const updatePasswordController = new UpdatePasswordController()
const deleteUsersController = new DeleteUserController()

routes.post("/users", createUserController.handle)
routes.get("/users", listUsersController.handle)
routes.put("/users/:id", updateNameController.handle)
routes.patch("/users/:id", updatePasswordController.handle)
routes.delete("/users/:id", deleteUsersController.handle)

export { routes }
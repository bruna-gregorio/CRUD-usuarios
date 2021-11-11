import { Request, Response } from "express";

import { UpdateUserService } from "../services/UpdateUserService";


class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { name, email, password } = request.body

    const updateUserService = new UpdateUserService()

    await updateUserService.execute({ id, name, email, password })

    const userUpdate = {
      message: "User updated successfully!",
      userUpdated: {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
      }
    }

    return response.json(userUpdate)
  }
}

export { UpdateUserController }
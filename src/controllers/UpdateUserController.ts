import { Request, Response } from "express";

import { UpdateUserService } from "../services/UpdateUserService";


class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { name, email, password } = request.body

    const updateUserService = new UpdateUserService()

    await updateUserService.execute({ id, name, email, password })

    return response.json({
      "message": "User updated successfully!"
    })
  }
}

export { UpdateUserController }
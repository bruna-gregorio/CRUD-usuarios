import { Request, Response } from "express";

import { UpdateUserService } from "../services/UpdateUserService";


class UpdateUserController {
  async updateName(request: Request, response: Response) {
    const { id } = request.params
    const { name } = request.body

    const updateUserService = new UpdateUserService()

    await updateUserService.updateName({ id, name })

    const userUpdate = {
      message: "Name updated successfully!",
      userNameUpdated: {
        name: request.body.name,
      }
    }

    return response.json(userUpdate)
  }

  async updateEmail(request: Request, response: Response) {
    const { id } = request.params
    const { email } = request.body

    const updateUserService = new UpdateUserService()

    await updateUserService.updateEmail({ id, email })

    const userUpdate = {
      message: "Email updated successfully!",
      userEmailUpdated: {
        email: request.body.email,
      }
    }

    return response.json(userUpdate)
  }

  async updatePassword(request: Request, response: Response) {
    const { id } = request.params
    const { password } = request.body

    const updateUserService = new UpdateUserService()

    await updateUserService.updatePassword({ id, password })

    const userUpdate = {
      message: "Password updated successfully!",
      userPasswordUpdated: {
        password: request.body.password,
      }
    }

    return response.json(userUpdate)
  }
}

export { UpdateUserController }
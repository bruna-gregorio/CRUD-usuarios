import { Request, Response } from "express";

import { UpdatePasswordService } from "../services/UpdatePasswordService";


class UpdatePasswordController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { password } = request.body

    const updatePasswordService = new UpdatePasswordService()

    await updatePasswordService.execute(id, password)

    return response.json({
      "message": "Password updated successfully!"
    })
  }
}

export { UpdatePasswordController }
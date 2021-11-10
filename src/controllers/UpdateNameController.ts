import { Request, Response } from "express";

import { UpdateNameService } from "../services/UpdateNameService";


class UpdateNameController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { name } = request.body

    const updateNameService = new UpdateNameService()

    await updateNameService.execute(id, name)

    return response.json({
      "message": "Name updated successfully!"
    })
  }
}

export { UpdateNameController }
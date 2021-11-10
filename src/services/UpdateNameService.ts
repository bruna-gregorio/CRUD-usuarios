import { getCustomRepository } from "typeorm"

import { UserRepositories } from "../repositories/UserRepositories"


class UpdateNameService {
  async execute(id: string, name: string) {
    const userRepositories = getCustomRepository(UserRepositories)

    const updateUser = await userRepositories.update({
      id
    }, {
      name
    })

    return updateUser
  }
}

export { UpdateNameService }
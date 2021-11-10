import { getCustomRepository } from "typeorm"

import { UserRepositories } from "../repositories/UserRepositories"


class ListUsersService {
  async execute() {
    const userRepositories = getCustomRepository(UserRepositories)

    const listUsers = await userRepositories.find()

    return listUsers
  }
}

export { ListUsersService }
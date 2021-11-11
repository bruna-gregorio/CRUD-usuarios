import { getCustomRepository, Repository } from "typeorm"

import { UserRepositories } from "../repositories/UserRepositories"
import { User } from "../entities/User"


class ListUsersService {
  private userRepositories: Repository<User>

  constructor() {
    this.userRepositories = getCustomRepository(UserRepositories)
  }

  async execute() {
    const listUsers = await this.userRepositories.find()

    return listUsers
  }
}

export { ListUsersService }
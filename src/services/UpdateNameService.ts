import { getCustomRepository, Repository } from "typeorm"

import { UserRepositories } from "../repositories/UserRepositories"
import { User } from "../entities/User"


class UpdateNameService {
  private userRepositories: Repository<User>

  constructor() {
    this.userRepositories = getCustomRepository(UserRepositories)
  }

  async execute(id: string, name: string) {
    const updateUser = await this.userRepositories.update({
      id
    }, {
      name
    })

    return updateUser
  }
}

export { UpdateNameService }
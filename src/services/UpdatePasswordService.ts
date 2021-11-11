import { getCustomRepository, Repository } from "typeorm"
import { hash } from "bcryptjs"

import { UserRepositories } from "../repositories/UserRepositories"
import { User } from "../entities/User"


class UpdatePasswordService {
  private userRepositories: Repository<User>

  constructor() {
    this.userRepositories = getCustomRepository(UserRepositories)
  }

  async execute(id: string, password: string) {
    const passwordHash = await hash(password, 10)

    const updateUser = await this.userRepositories.update({
      id
    }, {
      password: passwordHash
    })

    return updateUser
  }
}

export { UpdatePasswordService }
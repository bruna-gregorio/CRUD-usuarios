import { getCustomRepository } from "typeorm"
import { hash } from "bcryptjs"

import { UserRepositories } from "../repositories/UserRepositories"


class UpdatePasswordService {
  async execute(id: string, password: string) {
    const userRepositories = getCustomRepository(UserRepositories)

    const passwordHash = await hash(password, 10)

    const updateUser = await userRepositories.update({
      id
    }, {
      password: passwordHash
    })

    return updateUser
  }
}

export { UpdatePasswordService }
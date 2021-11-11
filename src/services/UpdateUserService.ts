import { getCustomRepository, Repository } from "typeorm"

import { UserRepositories } from "../repositories/UserRepositories"
import { User } from "../entities/User"
import { hash } from "bcryptjs"


interface IUserUpdate {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}

class UpdateUserService {
  private userRepositories: Repository<User>

  constructor() {
    this.userRepositories = getCustomRepository(UserRepositories)
  }

  async execute({ id, name, email, password }: IUserUpdate) {
    const passwordHash = await hash(password, 10)

    const updateUser = await this.userRepositories.update({
      id
    }, {
      name,
      email,
      password: passwordHash
    })

    return updateUser
  }
}

export { UpdateUserService }
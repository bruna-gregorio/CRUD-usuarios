import { getCustomRepository, Repository } from "typeorm"

import { UserRepositories } from "../repositories/UserRepositories"
import { User } from "../entities/User"


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
    const updateUser = await this.userRepositories.update({
      id
    }, {
      name,
      email,
      password
    })

    return updateUser
  }
}

export { UpdateUserService }
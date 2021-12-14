import { getCustomRepository, Repository } from "typeorm"
import { hash } from "bcryptjs"

import { UserRepositories } from "../repositories/UserRepositories"
import { User } from "../entities/User"


interface IUserUpdate {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UpdateUserService {
  private userRepositories: Repository<User>

  constructor() {
    this.userRepositories = getCustomRepository(UserRepositories)
  }

  async execute({ id, name, email, password }: IUserUpdate) {
    const user = await this.userRepositories.findOne(id)

    if (!user) {
      throw new Error("This user does not exists!")
    }

    const passwordHash = await hash(password, 10)

    user.name = name ? name : user.name
    user.email = email ? email : user.email
    user.password = password ? password = passwordHash : user.password

    return user
  }
}

export { UpdateUserService }
import { getCustomRepository, Repository } from "typeorm"
import { hash } from "bcryptjs"

import { UserRepositories } from "../repositories/UserRepositories"
import { User } from "../entities/User"


interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  private userRepositories: Repository<User>

  constructor() {
    this.userRepositories = getCustomRepository(UserRepositories)
  }

  async execute({ name, email, password }: IUserCreate) {
    if (!email) {
      throw new Error("Email Incorrect!")
    }

    const userExists = await this.userRepositories.findOne({
      email
    })

    if (userExists) {
      throw new Error("User already exists!")
    }

    const passwordHash = await hash(password, 10)

    const user = this.userRepositories.create({
      name,
      email,
      password: passwordHash
    })

    await this.userRepositories.save(user)

    return user
  }
}

export { CreateUserService }
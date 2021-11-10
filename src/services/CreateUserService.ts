import { getCustomRepository } from "typeorm"
import { hash } from "bcryptjs"

import { UserRepositories } from "../repositories/UserRepositories"


interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IUserCreate) {
    const userRepositories = getCustomRepository(UserRepositories)

    if (!email) {
      throw new Error("Email Incorrect!")
    }

    const userExists = await userRepositories.findOne({
      email
    })

    if (userExists) {
      throw new Error("User already exists!")
    }

    const passwordHash = await hash(password, 10)

    const user = userRepositories.create({
      name,
      email,
      password: passwordHash
    })

    await userRepositories.save(user)

    return user
  }
}

export { CreateUserService }
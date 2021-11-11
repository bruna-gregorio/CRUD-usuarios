import { getCustomRepository, Repository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

import { UserRepositories } from "../repositories/UserRepositories"
import { User } from "../entities/User"


interface IAuthenticateUser {
  email: string;
  password: string;
}

class AuthenticateUserService {
  private userRepositories: Repository<User>

  constructor() {
    this.userRepositories = getCustomRepository(UserRepositories)
  }

  async execute({ email, password }: IAuthenticateUser) {
    const user = this.userRepositories.findOne({
      email
    })

    if (!user) {
      throw new Error("Email/Password incorrect!")
    }

    const passwordMatch = await compare(password, (await user).password)

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect!")
    }

    const token = sign(
      {
        email: (await user).email,
      },
      process.env.JWT_SECRET,
      {
        subject: (await user).id, expiresIn: "1d"
      }
    )

    return token
  }
}

export { AuthenticateUserService }
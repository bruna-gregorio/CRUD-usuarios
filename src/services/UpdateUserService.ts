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

  // async execute({ id, name, email, password }: IUserUpdate) {
  //   const passwordHash = await hash(password, 10)

  //   const updateUser = await this.userRepositories.update({
  //     id
  //   }, {
  //     name,
  //     email,
  //     password: passwordHash
  //   })

  //   return updateUser
  // }

  async updateName({ id, name }: IUserUpdate) {
    const updateName = await this.userRepositories.update({
      id,
    }, {
      name
    })

    return updateName
  }

  async updateEmail({ id, email }: IUserUpdate) {
    const updateEmail = await this.userRepositories.update({
      id,
    }, {
      email
    })

    return updateEmail
  }

  async updatePassword({ id, password }: IUserUpdate) {
    const passwordHash = await hash(password, 10)

    const updatePassword = await this.userRepositories.update({
      id,
    }, {
      password: passwordHash
    })

    return updatePassword
  }
}

export { UpdateUserService }
import { getCustomRepository, Repository } from "typeorm"

import { UserRepositories } from "../repositories/UserRepositories"
import { User } from "../entities/User"


class DeleteUserService {
  private userRepositories: Repository<User>

  constructor() {
    this.userRepositories = getCustomRepository(UserRepositories)
  }

  async execute(id: string) {
    const idExists = await this.userRepositories.findOne(id)

    if (!idExists) {
      throw new Error("Sorry, this user doesn't exists!")
    }

    const deleteUser = await this.userRepositories.delete({
      id,
    })

    return deleteUser

    // await userRepositories
    //   .createQueryBuilder()
    //   .delete()
    //   .from(User)
    //   .where("id = :id", {
    //     id
    //   })
    //   .execute()
  }
}

export { DeleteUserService }
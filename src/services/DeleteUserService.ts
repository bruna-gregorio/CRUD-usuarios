import { getCustomRepository, Repository } from "typeorm"

import { UserRepositories } from "../repositories/UserRepositories"
import { User } from "../entities/User"


class DeleteUserService {
  private userRepositories: Repository<User>

  constructor() {
    this.userRepositories = getCustomRepository(UserRepositories)
  }

  async execute(id: string) {
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
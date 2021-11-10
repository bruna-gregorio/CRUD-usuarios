import { getCustomRepository } from "typeorm"

import { UserRepositories } from "../repositories/UserRepositories"


class DeleteUserService {
  async execute(id: string) {
    const userRepositories = getCustomRepository(UserRepositories)

    const deleteUser = await userRepositories.delete({
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
import { z } from 'zod'
import usersRepository from '../../repositories/users.repository'
import { UsernameAlreadyExists } from '../../errors/users/usernameAlreadyExists'
import { UserNotFound } from '../../errors/users/userNotFound.error'
import { IUser } from '../../model/usersRoutes.model'
import { compare, hash } from 'bcrypt'
import { InvalidCredentials } from '../../errors/users/invalidCredentials.error'

class UsersServices {
  async create(user: IUser) {
    const registerSchema = z.object({
      name: z.string(),
      username: z.string(),
      email: z.string(),
      password: z.string(),
    })

    const newUser = registerSchema.parse(user)

    const { username, email } = newUser

    const userWithSameUsername = await usersRepository.getUserName(username)

    const userWithSameEmail = await usersRepository.getEmailUser(email)

    if (userWithSameUsername) {
      throw new UsernameAlreadyExists()
    }

    if (userWithSameEmail) {
      throw new UsernameAlreadyExists()
    }

    if (newUser.password) {
      newUser.password = await hash(user.password, 10)
    }

    await usersRepository.create(newUser)
  }

  async authorization(email: string, password: string) {
    const user = await usersRepository.getEmailUser(email)

    if (!user) {
      throw new UserNotFound()
    }

    const result = await compare(password, user.password)
    if (result) {
      return user
    } else {
      throw new InvalidCredentials()
    }
  }

  async getAll() {
    const users = await usersRepository.getAll()

    return users
  }

  async getByUser(username: string) {
    const user = await usersRepository.getUserName(username)
    if (!user) {
      throw new UserNotFound()
    }

    return user
  }

  async updateUser(username: string, user: Partial<IUser>) {
    const newUser = await usersRepository.getUserName(username)
    if (!newUser) {
      throw new UserNotFound()
    }
    const registerSchema = z.object({
      name: z.string(),
      username: z.string(),
      email: z.string(),
      password: z.string(),
    })

    const userUpdated = registerSchema.parse(user)

    return usersRepository.update(username, userUpdated)
  }

  async deleteUser(username: string) {
    const user = await usersRepository.getUserName(username)

    if (!user) {
      throw new UserNotFound()
    }

    return await usersRepository.remove(username)
  }
}

export default new UsersServices()

// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { faker } from '@faker-js/faker'

import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const users = await User.all()

    return users
  }

  public async addRandomUser() {
    const users = await User.create({
      email: faker.internet.email(),
      name: faker.name.fullName(),
      password: '123456',
    })

    return users
  }
}

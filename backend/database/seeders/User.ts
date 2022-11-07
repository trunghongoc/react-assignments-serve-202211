import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await User.createMany([
      {
        email: 'a@gmail.com',
        name: faker.name.fullName(),
        password: '123456',
      },
      {
        email: 'b@gmail.com',
        name: faker.name.fullName(),
        password: '123456',
      },
    ])
  }
}

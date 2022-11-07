"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const faker_1 = require("@faker-js/faker");
class default_1 extends Seeder_1.default {
    async run() {
        await User_1.default.createMany([
            {
                email: 'a@gmail.com',
                name: faker_1.faker.name.fullName(),
                password: '123456',
            },
            {
                email: 'b@gmail.com',
                name: faker_1.faker.name.fullName(),
                password: '123456',
            },
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=User.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async index() {
        const users = await User_1.default.all();
        return users;
    }
    async addRandomUser() {
        const users = await User_1.default.create({
            email: faker_1.faker.internet.email(),
            name: faker_1.faker.name.fullName(),
            password: '123456',
        });
        return users;
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map
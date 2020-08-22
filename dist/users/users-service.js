"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const xss_1 = tslib_1.__importDefault(require("xss"));
class UsersService {
    constructor() {
        this.getAllUsers = (knex) => {
            return knex.select('*').from('users');
        };
        this.getUser = (knex, id) => {
            return knex.select('*').from('users').where({ id }).first();
        };
        this.isUsernameTaken = async (knex, username) => {
            const user = await knex('users').where({ username }).first();
            return !!user;
        };
        this.addNewUser = async (knex, newUser) => {
            const user = await knex.insert(newUser).into('users').returning('*');
            return user;
        };
        this.validatePassword = (password) => {
            const pw_regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/;
            if (password.length <= 10) {
                throw new Error('Error: password must be 10 characters or more!');
            }
            else if (password.length > 28) {
                throw new Error('Error: password must be less than 28 characters!');
            }
            else if (password.startsWith(' ') || password.endsWith(' ')) {
                throw new Error('Error: password cannot start or end with a blank space!');
            }
            else if (!pw_regex.test(password)) {
                throw new Error('Error: password must contain one uppercase, one lowercase, one number, and one special character!');
            }
            else {
                return null;
            }
        };
        this.hashPassword = (password) => {
            return bcrypt_1.default.hash(password, 12);
        };
        this.serializeInput = (user) => {
            return {
                username: xss_1.default(user.username),
                email: xss_1.default(user.email),
            };
        };
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users-service.js.map
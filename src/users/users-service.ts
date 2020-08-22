import bcrypt from 'bcrypt';
import Knex from 'knex';
import xss from 'xss';

export class UsersService {
  public getAllUsers = (knex: Knex) => {
    return knex.select('*').from('users');
  };
  public getUser = (knex: Knex, id: string | number) => {
    return knex.select('*').from('users').where({ id }).first();
  };
  public isUsernameTaken = async (knex: Knex, username: string) => {
    const user = await knex('users').where({ username }).first();
    return !!user;
  };
  public addNewUser = async (knex: Knex, newUser: any) => {
    const user = await knex.insert(newUser).into('users').returning('*');
    return user;
  };
  public validatePassword = (password: string) => {
    const pw_regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/;
    if (password.length <= 10) {
      throw new Error('Error: password must be 10 characters or more!');
    } else if (password.length > 28) {
      throw new Error('Error: password must be less than 28 characters!');
    } else if (password.startsWith(' ') || password.endsWith(' ')) {
      throw new Error(
        'Error: password cannot start or end with a blank space!'
      );
    } else if (!pw_regex.test(password)) {
      throw new Error(
        'Error: password must contain one uppercase, one lowercase, one number, and one special character!'
      );
    } else {
      return null;
    }
  };
  public hashPassword = (password: string) => {
    return bcrypt.hash(password, 12);
  };
  public serializeInput = (user: any) => {
    return {
      username: xss(user.username),
      email: xss(user.email),
    };
  };
}

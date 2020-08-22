import Knex from 'knex';
export declare class UsersService {
    getAllUsers: (knex: Knex) => Knex.QueryBuilder<unknown, {
        _base: unknown;
        _hasSelection: false;
        _keys: string;
        _aliases: {};
        _single: false;
        _intersectProps: {};
        _unionProps: never;
    }[]>;
    getUser: (knex: Knex, id: string | number) => Knex.QueryBuilder<unknown, {
        _base: unknown;
        _hasSelection: false;
        _keys: string;
        _aliases: {};
        _single: false;
        _intersectProps: {};
        _unionProps: undefined;
    }>;
    isUsernameTaken: (knex: Knex, username: string) => Promise<boolean>;
    addNewUser: (knex: Knex, newUser: any) => Promise<any[]>;
    validatePassword: (password: string) => null;
    hashPassword: (password: string) => Promise<string>;
    serializeInput: (user: any) => {
        username: string;
        email: string;
    };
}

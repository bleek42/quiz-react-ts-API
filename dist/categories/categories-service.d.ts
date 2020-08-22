import Knex from 'knex';
export declare class CategoriesService {
    getAll: (knex: Knex) => Knex.QueryBuilder<unknown, {
        _base: unknown;
        _hasSelection: false;
        _keys: string;
        _aliases: {};
        _single: false;
        _intersectProps: {};
        _unionProps: never;
    }[]>;
}

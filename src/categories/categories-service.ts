import Knex from 'knex';

export class CategoriesService {
  public getAll = (knex: Knex) => {
    return knex.select('*').from('categories');
  };
}

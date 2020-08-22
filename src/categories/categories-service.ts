import Knex from 'knex';

export class CategoriesService {
  public getAll = (knex: Knex) => {
    return knex.from('categories').select('*');
  };
}

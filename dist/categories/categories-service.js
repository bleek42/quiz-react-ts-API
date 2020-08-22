"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
class CategoriesService {
    constructor() {
        this.getAll = (knex) => {
            return knex.select('*').from('categories');
        };
    }
}
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories-service.js.map
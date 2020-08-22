"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const categories_service_1 = require("./categories-service");
const categoriesRouter = express_1.default.Router();
const categoryService = new categories_service_1.CategoriesService();
categoriesRouter
    .route('/categories')
    .get(async (req, res, next) => {
    try {
        const data = await categoryService.getAll(req.app.get('knex'));
        res.status(200).json(data);
    }
    catch (error) {
        res.status(error.statusCode).send(error.message);
    }
    finally {
        next();
    }
});
exports.default = categoriesRouter;
//# sourceMappingURL=categories-router.js.map
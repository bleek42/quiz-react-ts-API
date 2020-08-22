import Express, { Router, Request, Response, NextFunction } from 'express';
import { CategoriesService } from './categories-service';

const categoriesRouter: Router = Express.Router();
const categoryService = new CategoriesService();

categoriesRouter
  .route('/categories')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await categoryService.getAll(req.app.get('knex'));
      res.status(200).json(data);
    } catch (error) {
      res.status(error.statusCode).send(error.message);
    } finally {
      next();
    }
  });

export default categoriesRouter;

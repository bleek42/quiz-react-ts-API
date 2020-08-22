import Express, { Router, Request, Response, NextFunction } from 'express';
import { UsersService } from './users-service';
import path from 'path';

const usersRouter: Router = Express.Router();
const usersService = new UsersService();

usersRouter
  .route('/users')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await usersService.getAllUsers(req.app.get('knex'));
      res.status(200).json(data);
    } catch (error) {
      res.status(error.statusCode).send(error.message);
    } finally {
      next();
    }
  });

usersRouter
  .route('/users/:id')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await usersService.getUser(req.app.get('knex'), id);
    } catch (error) {
      res.status(error.statusCode).send(error.message);
    } finally {
      next();
    }
  });

usersRouter
  .route('/new_user')
  .post(async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;
    for (const values of ['username', 'email', 'password']) {
      if (!req.body[values]) {
        res.status(400).json({
          Error: `${values} missing in request body!`,
        });
      }
    }
    try {
      const passwordError = await usersService.validatePassword(password);
      if (passwordError) {
        res.status(400).json({
          Error: passwordError,
        });
      }
      const isExistingUser = await usersService.isUsernameTaken(
        req.app.get('knex'),
        username
      );
      if (isExistingUser) {
        res
          .status(400)
          .json({ Error: 'Sorry, but that username has already been taken!' });
      }
      const hashPassword = await usersService.hashPassword(password);
      const newUser = {
        username,
        email,
        password: hashPassword,
      };
      const user = await usersService.addNewUser(req.app.get('knex'), newUser);
      res
        .status(201)
        .location(path.posix.join('/login'))
        .json(usersService.serializeInput(user));
    } catch (error) {
    } finally {
      next();
    }
  });

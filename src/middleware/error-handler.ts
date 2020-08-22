import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../utils/http-exception';

const errorHandler = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.statusCode || 500;
  const message = error.message || 'Internal Server Error!';

  res.status(status).send(message);
  next();
};

export default errorHandler;

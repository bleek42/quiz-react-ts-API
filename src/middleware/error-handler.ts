import { Errback, Request, Response, NextFunction } from 'express';

const errorHandler = (
  error: Errback,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'Server error' } };
  } else {
    response = { message: error };
  }

  res.status(500).json(response);
};

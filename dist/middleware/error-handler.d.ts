import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/http-exception';
declare const errorHandler: (error: HttpException, req: Request, res: Response, next: NextFunction) => void;
export default errorHandler;

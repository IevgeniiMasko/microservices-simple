import { NextFunction, Request, Response } from 'express';
import logger from '../../shared/logger';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  logger.error(err.message);
  res.status(500).json({ errors: [{ message: 'Something went wrong' }] });
};

export default errorHandler;

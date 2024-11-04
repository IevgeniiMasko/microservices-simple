import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export const validateDto = (dtoClass: any, source: 'body' | 'query') => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dtoInstance = plainToInstance(dtoClass, req[source]);
      const errors = await validate(dtoInstance);

      if (errors.length > 0) {
        res.status(400).json({ message: 'Invalid input data', errors });
        return;
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

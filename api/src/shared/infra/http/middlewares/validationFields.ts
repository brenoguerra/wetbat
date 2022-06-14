import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import AppError from '../../../errors/AppError';

export const validationFields = (dtoClass: any) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const output: any = plainToClass(dtoClass, request.body);
    try {
      const errors = await validate(output, { skipMissingProperties: true });

      if (errors.length >= 1) {
        throw new AppError(Object.values(errors[0].constraints!)[0])
      }

      return next();
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message);
      }
    }
  };
}

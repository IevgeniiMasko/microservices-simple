import { NextFunction, Request, Response } from 'express';
import { CreateUserDto, UpdateUserDto } from './dto';
import * as userService from '../app/user.service';

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { page, limit } = req.query;
    const pageNumber = parseInt(page as string);
    const limitNumber = parseInt(limit as string);

    const users = await userService.getUsers(pageNumber, limitNumber);

    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const userId: string = req.params.id;
    const user = await userService.getUserById(userId);

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const createUserDto: CreateUserDto = req.body;
    const userExists = await userService.getUserByEmail(createUserDto.email);
    if (userExists) {
      res.status(409).json({ errors: [{ message: 'User already exists' }] });
      return;
    }
    const user = await userService.createUser(createUserDto);

    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const userId: string = req.params.id;
    const updateUserDto: UpdateUserDto = req.body;
    const user = await userService.updateUser(userId, updateUserDto);
    if (!user) {
      res.status(404).json({ errors: [{ message: 'Incorrect user id' }] });
      return;
    }

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const userId: string = req.params.id;
    const user = await userService.deleteUser(userId);

    if (!user) {
      res.status(404).json({ errors: [{ message: 'Incorrect user id' }] });
      return;
    }

    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    next(error);
  }
};

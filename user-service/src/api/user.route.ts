import { Router } from 'express';
import * as userController from './user.controller';
import { validateDto } from './middleware/dto-validation';
import { CreateUserDto, UpdateUserDto, GetUsersDto } from './dto';

const router = Router();

router.post('/', validateDto(CreateUserDto, 'body'), userController.createUser);

router.get('/', validateDto(GetUsersDto, 'query'), userController.getUsers);

router.get('/:id', userController.getUserById);

router.put(
  '/:id',
  validateDto(UpdateUserDto, 'body'),
  userController.updateUser,
);

router.delete('/:id', userController.deleteUser);

export default router;

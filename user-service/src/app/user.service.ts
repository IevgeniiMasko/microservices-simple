import { CreateUserDto, UpdateUserDto } from '../api/dto';
import { UserModel } from './user.model';
import * as queue from '../shared/queue';
import { IUser } from '../shared/types';

export const createUser = async (
  createUserDto: CreateUserDto,
): Promise<IUser> => {
  const user = new UserModel(createUserDto);
  await user.save();
  await queue.publish('user', JSON.stringify({ action: 'create', user }));
  return user;
};

export const getUserById = async (id: string) => {
  return await UserModel.findById(id);
};

export const getUserByEmail = async (email: string) => {
  return await UserModel.findOne({ email });
};

export const getUsers = async (
  page: number,
  limit: number,
): Promise<IUser[]> => {
  const skip = (page - 1) * limit;
  const users = await UserModel.find().skip(skip).limit(limit).exec();

  return users;
};

export const updateUser = async (
  id: string,
  updateUserDto: UpdateUserDto,
): Promise<IUser | null> => {
  return await UserModel.findByIdAndUpdate(id, updateUserDto).exec();
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  const user = await UserModel.findByIdAndDelete(id).exec();

  if (user) {
    await queue.publish('user', JSON.stringify({ action: 'delete', user }));
  }
  return user;
};

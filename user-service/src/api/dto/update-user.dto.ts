import { IsString, IsEmail, IsOptional } from 'class-validator';

import { IUser } from '../../shared/types/user.types';

type UpdateUser = Partial<Pick<IUser, 'name' | 'email'>>;

export class UpdateUserDto implements UpdateUser {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}

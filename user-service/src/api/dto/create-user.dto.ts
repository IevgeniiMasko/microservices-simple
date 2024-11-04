import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { IUser } from '../../shared/types/user.types';

type CreateUser = Pick<IUser, 'name' | 'email'>;

export class CreateUserDto implements CreateUser {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;
}

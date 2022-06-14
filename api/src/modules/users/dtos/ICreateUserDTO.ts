import { IsDefined, IsNotEmpty, IsEmail } from 'class-validator';
import { Expose } from 'class-transformer'

export class ICreateUserDTO {
  @IsDefined({ message: 'Name is required' })
  @IsNotEmpty({ message: 'Name should not be empty' })
  @Expose()
  name: string;

  @IsDefined({ message: 'E-mail is required' })
  @IsEmail({}, { message: 'E-mail must be an valid e-mail' })
  @IsNotEmpty({ message: 'E-mail should not be empty' })
  @Expose()
  email: string;

  @IsDefined({ message: 'Password is required' })
  @IsNotEmpty({ message: 'Password should not be empty' })
  @Expose()
  password: string;

  @IsDefined({ message: 'Password confirmation is required' })
  @IsNotEmpty({ message: 'Password confirmation should not be empty' })
  @Expose()
  passwordConfirmation: string;
}

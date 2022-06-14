import { IsDefined, IsNotEmpty, IsEmail } from 'class-validator';
import { Expose } from 'class-transformer'

export class ISignInUserDTO {
  @IsDefined({ message: 'E-mail is required' })
  @IsEmail({}, { message: 'E-mail must be an valid e-mail' })
  @IsNotEmpty({ message: 'E-mail should not be empty' })
  @Expose()
  email: string;

  @IsDefined({ message: 'Password is required' })
  @IsNotEmpty({ message: 'Password should not be empty' })
  @Expose()
  password: string;
}

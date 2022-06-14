import { IsDefined, IsNotEmpty, IsEmail } from 'class-validator';
import { Expose } from 'class-transformer'

export class ICreateQuoteDTO {
  @IsDefined({ message: 'From is required' })
  @IsNotEmpty({ message: 'From should not be empty' })
  @Expose()
  from: string;

  @IsDefined({ message: 'Destination is required' })
  @IsNotEmpty({ message: 'Destination should not be empty' })
  @Expose()
  destination: string;

  @IsDefined({ message: 'Depart date is required' })
  @IsNotEmpty({ message: 'Depart date should not be empty' })
  @Expose()
  departDate: string;

  @IsDefined({ message: 'Return date is required' })
  @IsNotEmpty({ message: 'Return date should not be empty' })
  @Expose()
  returnDate: string;

  @IsDefined({ message: 'People is required' })
  @IsNotEmpty({ message: 'People should not be empty' })
  @Expose()
  people: number;

  @IsDefined({ message: 'Transportation is required' })
  @IsNotEmpty({ message: 'Transportation should not be empty' })
  @Expose()
  transportation: string;

  @IsDefined({ message: 'Name is required' })
  @IsNotEmpty({ message: 'Name should not be empty' })
  @Expose()
  name: string;
}

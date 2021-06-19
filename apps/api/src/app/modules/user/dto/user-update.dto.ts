import { IsNotEmpty, Length } from 'class-validator';

export class UserUpdateDto {
  @IsNotEmpty({ message: 'Campo nome é obrigatório!' })
  name: string;

  @IsNotEmpty({ message: 'Campo email é obrigatório!' })
  email: string;

  @IsNotEmpty({ message: 'Campo senha é obrigatório!' })
  password: string;

  @IsNotEmpty({ message: 'Campo CPF é obrigatório!' })
  @Length(14)
  cpf: string;

  @IsNotEmpty({ message: 'Campo de validação é obrigatório!' })
  isValit: boolean;
}

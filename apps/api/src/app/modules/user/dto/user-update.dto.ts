import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class UserUpdateDto {
  @IsNotEmpty({ message: 'Campo nome é obrigatório!' })
  @Length(0, 100, { message: 'Campo nome deve ter no máximo 100 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'Campo email é obrigatório!' })
  @Length(0, 100, { message: 'Campo email deve ter no máximo 100 caracteres' })
  @IsEmail({}, { message: 'Campo email deve conter um email valido ' })
  email: string;

  @IsNotEmpty({ message: 'Campo senha é obrigatório!' })
  password: string;

  @IsNotEmpty({ message: 'Campo CPF é obrigatório!' })
  @Length(14, 14, { message: 'Campo CPF deve ter 14 caracteres' })
  cpf: string;

  @IsNotEmpty({ message: 'Campo de validação é obrigatório!' })
  isValit: boolean;
}

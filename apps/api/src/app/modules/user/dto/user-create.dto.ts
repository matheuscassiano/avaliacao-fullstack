import { IsArray, IsNotEmpty, Length } from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty({ message: 'Campo nome é obrigatório!' })
  name: string;

  @IsNotEmpty({ message: 'Campo email é obrigatório!' })
  email: string;

  @IsNotEmpty({ message: 'Campo senha é obrigatório!' })
  password: string;

  @IsNotEmpty({ message: 'Campo CPF é obrigatório!' })
  @Length(14, 14)
  cpf: string;

  @IsArray({ message: 'Este item deverá ser enviado como array' })
  knowledge: number[];
}

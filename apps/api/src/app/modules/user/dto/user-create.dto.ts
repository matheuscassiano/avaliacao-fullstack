import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';

export class UserCreateDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Campo nome é obrigatório!' })
  @Length(0, 100, { message: 'Campo nome deve ter no máximo 100 caracteres' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Campo email é obrigatório!' })
  @Length(0, 100, { message: 'Campo email deve ter no máximo 100 caracteres' })
  @IsEmail({}, { message: 'Campo email deve conter um email valido ' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Campo senha é obrigatório!' })
  password: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Campo CPF é obrigatório!' })
  @Length(14, 14, { message: 'Campo CPF deve ter 14 caracteres' })
  cpf: string;

  @ApiProperty()
  @IsArray({ message: 'Este item deverá ser enviado como array' })
  @ArrayMinSize(1, { message: 'Deve haver ao menos 1 item em sua lista' })
  @ArrayMaxSize(3, { message: 'Deve haver no máximo 3 itens em sua lista' })
  knowledge: number[];

  @ApiProperty()
  @IsOptional()
  phoneNumber: string;
}

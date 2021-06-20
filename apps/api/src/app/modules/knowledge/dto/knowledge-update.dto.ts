import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class KnowledgeUpdateDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Campo nome é obrigatório!' })
  name: string;
}

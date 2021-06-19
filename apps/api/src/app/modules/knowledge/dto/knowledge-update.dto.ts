import { IsNotEmpty } from 'class-validator';

export class KnowledgeUpdateDto {
  @IsNotEmpty({ message: 'Campo nome é obrigatório!' })
  name: string;
}

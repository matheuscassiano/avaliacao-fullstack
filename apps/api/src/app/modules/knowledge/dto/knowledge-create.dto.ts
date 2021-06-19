import { IsNotEmpty } from 'class-validator';

export class KnowledgeCreateDto {
  @IsNotEmpty({ message: 'Campo nome é obrigatório!' })
  name: string;
}

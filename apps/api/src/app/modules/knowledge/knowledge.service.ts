import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KnowledgeCreateDto } from './dto/knowledge-create.dto';
import { KnowledgeUpdateDto } from './dto/knowledge-update.dto';
import { Knowledge } from './entities/knowledge.entity';

@Injectable()
export class KnowledgeService {
  constructor(
    @InjectRepository(Knowledge)
    private knowledgeRepository: Repository<Knowledge>
  ) {}

  async findAll(): Promise<Knowledge[]> {
    try {
      return await this.knowledgeRepository.find();
    } catch (error) {
      throw new HttpException(
        { message: 'Itens de conhecimento não encontrados!' },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async create(body: KnowledgeCreateDto): Promise<Knowledge> {
    try {
      const entity = Object.assign(new Knowledge(), body);
      return await this.knowledgeRepository.save(entity);
    } catch (error) {
      throw new HttpException(
        { message: 'Erro ao cadastrar itens de conhecimento!' },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async update(
    id: number,
    body: KnowledgeUpdateDto
  ): Promise<{ knowledge: Knowledge; message: string }> {
    try {
      const entity = await this.knowledgeRepository.findOneOrFail(id);
      Object.assign(entity, body);
      const knowledge = await this.knowledgeRepository.save(entity);
      return {
        knowledge,
        message: 'Item de conhecimento atualizado com sucesso!',
      };
    } catch (error) {
      throw new HttpException(
        { message: 'Erro ao atualizar itens de conhecimento!' },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.knowledgeRepository.findOneOrFail(id);
      await this.knowledgeRepository.delete(id);
      return { message: 'Item de conhecimento removido com sucesso!' };
    } catch (error) {
      throw new HttpException(
        { message: 'Erro ao remover itens de conhecimento!' },
        HttpStatus.BAD_REQUEST
      );
    }
  }
}

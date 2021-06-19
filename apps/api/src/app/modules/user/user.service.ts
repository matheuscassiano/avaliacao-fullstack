import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new HttpException(
        { message: 'Usuários não encontrados!' },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async findOne(id: number): Promise<User> {
    try {
      return await this.userRepository.findOneOrFail(id);
    } catch (error) {
      throw new HttpException(
        { message: 'Usuários não encontrados!' },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async create(body: UserCreateDto): Promise<User> {
    try {
      const entity = Object.assign(new User(), body);
      return await this.userRepository.save(entity);
    } catch (error) {
      throw new HttpException(
        { message: 'Erro ao cadastrar usuário!' },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async update(
    id: number,
    body: UserUpdateDto
  ): Promise<{ user: User; message: string }> {
    try {
      const entity = await this.userRepository.findOneOrFail(id);
      Object.assign(entity, body);
      const user = await this.userRepository.save(entity);
      return { user, message: 'Usuário atualizado com sucesso!' };
    } catch (error) {
      throw new HttpException(
        { message: 'Erro ao atualizar usuário!' },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    try {
      await this.userRepository.findOneOrFail(id);
      await this.userRepository.delete(id);
      return { message: 'Usuário removido com sucesso!' };
    } catch (error) {
      throw new HttpException(
        { message: 'Erro ao remover usuário!' },
        HttpStatus.BAD_REQUEST
      );
    }
  }
}

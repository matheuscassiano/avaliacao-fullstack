import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  async create(body): Promise<User[]> {
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
}

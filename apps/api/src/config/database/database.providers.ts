import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Knowledge } from '../../app/modules/knowledge/entities/knowledge.entity';
import { UserKnowledge } from '../../app/modules/user/entities/user-knowledge.entity';
import { User } from '../../app/modules/user/entities/user.entity';

export const databaseProviders: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'avaliacao',
  entities: [User, Knowledge, UserKnowledge],
  synchronize: true,
};

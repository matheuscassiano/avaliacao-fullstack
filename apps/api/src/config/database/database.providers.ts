import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Knowledge } from '../../app/modules/knowledge/entities/knowledge.entity';
import { UserKnowledge } from '../../app/modules/user/entities/user-knowledge.entity';
import { User } from '../../app/modules/user/entities/user.entity';

export const databaseProviders: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [User, Knowledge, UserKnowledge],
  synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
};

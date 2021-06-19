import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../../app/modules/user/entities/user.entity';

export const databaseProviders: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'avaliacao',
  entities: [User],
  synchronize: true,
}

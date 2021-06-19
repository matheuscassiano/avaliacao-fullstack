import { Module } from '@nestjs/common';
import { DatabaseModule } from '../config/database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { KnowledgeModule } from './modules/knowledge/knowledge.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [KnowledgeModule, UserModule, AuthModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

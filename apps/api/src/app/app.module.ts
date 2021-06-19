import { Module } from '@nestjs/common';
import { DatabaseModule } from '../config/database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnowledgeModule } from './modules/knowledge/knowledge.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [KnowledgeModule, UserModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

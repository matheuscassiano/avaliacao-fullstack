/* eslint-disable @typescript-eslint/no-explicit-any */
import { getConnection } from 'typeorm';
import { Seeder } from 'typeorm-seeding';

export default class CreateUserKnowledge implements Seeder {
  public async run(): Promise<any> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into('user_knowledge', ['user_id', 'knowledge_id'])
      .values([
        {
          user_id: 1,
          knowledge_id: 1,
        },
        {
          user_id: 1,
          knowledge_id: 2,
        },
        {
          user_id: 1,
          knowledge_id: 3,
        },
        {
          user_id: 2,
          knowledge_id: 1,
        },
        {
          user_id: 2,
          knowledge_id: 2,
        },
        {
          user_id: 2,
          knowledge_id: 3,
        },
        {
          user_id: 3,
          knowledge_id: 1,
        },
        {
          user_id: 3,
          knowledge_id: 2,
        },
        {
          user_id: 3,
          knowledge_id: 3,
        },
        {
          user_id: 4,
          knowledge_id: 1,
        },
        {
          user_id: 4,
          knowledge_id: 2,
        },
        {
          user_id: 4,
          knowledge_id: 3,
        },
      ])
      .execute();
  }
}

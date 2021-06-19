/* eslint-disable @typescript-eslint/no-explicit-any */
import { getConnection } from 'typeorm';
import { Seeder } from 'typeorm-seeding';

export default class CreateKnowledge implements Seeder {
  public async run(): Promise<any> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into('knowledge', ['id', 'name'])
      .values([
        {
          id: 1,
          name: 'Git',
        },
        {
          id: 2,
          name: 'React',
        },
        {
          id: 3,
          name: 'PHP',
        },
        {
          id: 4,
          name: 'NodeJS',
        },
        {
          id: 5,
          name: 'DevOps',
        },
        {
          id: 6,
          name: 'Banco de Dados',
        },
        {
          id: 7,
          name: 'TypeScript',
        },
      ])
      .execute();
  }
}

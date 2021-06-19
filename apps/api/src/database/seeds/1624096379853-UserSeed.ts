/* eslint-disable @typescript-eslint/no-explicit-any */
import { getConnection } from 'typeorm';
import { Seeder } from 'typeorm-seeding';

export default class CreateUser implements Seeder {
  public async run(): Promise<any> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into('users', [
        'id',
        'name',
        'email',
        'password',
        'cpf',
        'phone_number',
        'validated_at',
      ])
      .values([
        {
          id: 1,
          name: 'Matheus Cassiano',
          email: 'matheuscassiano9@gmail.com',
          password: 'ded0e81a920c15f56aef422a39fd82ed',
          cpf: '324.145.234-20',
          phone_number: '(82) 987391037',
          validated_at: '2021-06-19 10:51:43.000000',
        },
      ])
      .execute();
  }
}

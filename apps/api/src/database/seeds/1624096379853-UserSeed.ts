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
          password: '25f9e794323b453885f5181f1b624d0b',
          cpf: '324.145.234-20',
          phone_number: '(82) 987391037',
          validated_at: '2021-06-19 10:51:43.000000',
        },
        {
          id: 2,
          name: 'Emilly Stella Sophia',
          email: 'emillystella@gmail.com',
          password: '25f9e794323b453885f5181f1b624d0b',
          cpf: '032.224.191-08',
          phone_number: '(95) 99775-1350',
          validated_at: '',
        },
        {
          id: 3,
          name: 'Vera Brenda Silveira',
          email: 'verabrenda@gmail.com',
          password: '25f9e794323b453885f5181f1b624d0b',
          cpf: '205.440.758-54',
          phone_number: '(68) 99677-5063',
          validated_at: '2021-06-19 10:51:43.000000',
        },
        {
          id: 4,
          name: 'Yago Caleb Baptista',
          email: 'yagocaleb@gmail.com',
          password: '25f9e794323b453885f5181f1b624d0b',
          cpf: '977.212.178-65',
          phone_number: '(61) 98483-5921',
          validated_at: '',
        },
      ])
      .execute();
  }
}

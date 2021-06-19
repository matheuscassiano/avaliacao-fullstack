import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1624096379853 implements MigrationInterface {
  private userTable = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'INTEGER',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'VARCHAR',
        length: '100',
      },
      {
        name: 'email',
        type: 'VARCHAR',
        length: '100',
        isUnique: true,
      },
      {
        name: 'password',
        type: 'VARCHAR',
        length: '255',
      },
      {
        name: 'cpf',
        type: 'VARCHAR',
        length: '14',
        isUnique: true,
      },
      {
        name: 'phone_number',
        type: 'VARCHAR',
        length: '50',
        isNullable: true,
      },
      {
        name: 'validated_at',
        type: 'TIMESTAMP',
        isNullable: true,
      },
      {
        name: 'created_at',
        type: 'TIMESTAMP',
        default: 'NOW()',
      },
      {
        name: 'updated_at',
        type: 'TIMESTAMP',
        default: 'NOW() ON UPDATE CURRENT_TIMESTAMP()',
      },
      {
        name: 'deleted_at',
        type: 'TIMESTAMP',
        isNullable: true,
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.userTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.userTable);
  }
}

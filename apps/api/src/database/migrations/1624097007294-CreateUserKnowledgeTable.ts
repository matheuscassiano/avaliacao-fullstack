import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateUserKnowledgeTable1624097007294
  implements MigrationInterface {
  private userKnowledgeTable = new Table({
    name: 'user_knowledge',
    columns: [
      {
        name: 'user_id',
        type: 'INTEGER',
      },
      {
        name: 'knowledge_id',
        type: 'INTEGER',
      },
    ],
  });

  private userIdForeignKey = new TableForeignKey({
    name: 'fk_program_id',
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
    onDelete: 'CASCADE',
  });

  private knowledgeIdForeignKey = new TableForeignKey({
    name: 'fk_knowledge_id',
    columnNames: ['knowledge_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'knowledge',
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.userKnowledgeTable);
    await queryRunner.createForeignKey('user_knowledge', this.userIdForeignKey);
    await queryRunner.createForeignKey(
      'user_knowledge',
      this.knowledgeIdForeignKey
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'user_knowledge',
      this.knowledgeIdForeignKey
    );
    await queryRunner.dropForeignKey('user_knowledge', this.userIdForeignKey);
    await queryRunner.dropTable(this.userKnowledgeTable);
  }
}

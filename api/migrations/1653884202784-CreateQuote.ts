import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateQuote1653884202784 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'quotes',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'from',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'destination',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'depart_date',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'return_date',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'people',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'transportation',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('quotes');
  }
}

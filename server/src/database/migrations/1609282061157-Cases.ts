import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Cases1609282061157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createTable(new Table({
        name: 'cases',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar'
          },
          {
            name: 'genre',
            type: 'varchar'
          },
          {
            name: 'description',
            type: 'varchar'
          },
          {
            name: 'website',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'open_source',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'banner',
            type: 'varchar'
          },
        ]
      }));

      await queryRunner.createTable(new Table({
        name: 'case_images',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'path',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'caseId',
            type: 'integer'
          },
        ],
        foreignKeys: [
          {
            name: 'case_images',
            columnNames: ['caseId'],
            referencedTableName: 'cases',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        ]
      }));

      await queryRunner.createTable(new Table({
      name: 'case_technologies',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'technologie',
          type: 'varchar'
        },
        {
          name: 'caseId',
          type: 'integer'
        },
      ],
      foreignKeys: [
        {
          name: 'case_technologies',
          columnNames: ['caseId'],
          referencedTableName: 'cases',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('cases');
      await queryRunner.dropTable('case_images');
      await queryRunner.dropTable('cases_technologies');
    }

}

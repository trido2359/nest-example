import { MigrationInterface, QueryRunner } from "typeorm";

export class todo1661268343148 implements MigrationInterface {
    name = 'todo1661268343148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`todo\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`isDone\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`todo\``);
    }

}

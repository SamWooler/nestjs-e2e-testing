import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddInitialTables1769947496503 implements MigrationInterface {
  name = 'AddInitialTables1769947496503';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "car" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "brandId" integer, CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "brand" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "country" character varying NOT NULL, CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "car" ADD CONSTRAINT "FK_728700aee449838965f5cf87cee" FOREIGN KEY ("brandId") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "car" DROP CONSTRAINT "FK_728700aee449838965f5cf87cee"`,
    );
    await queryRunner.query(`DROP TABLE "brand"`);
    await queryRunner.query(`DROP TABLE "car"`);
  }
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMeetingTable1734688472424 implements MigrationInterface {
    name = 'CreateMeetingTable1734688472424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`meeting\` (\`id\` int NOT NULL AUTO_INCREMENT, \`unit\` varchar(255) NOT NULL, \`ruang_meeting\` varchar(255) NOT NULL, \`kapasitas\` int NOT NULL, \`tanggal_rapat\` date NOT NULL, \`waktu_mulai\` date NOT NULL, \`waktu_selesai\` date NOT NULL, \`jumlah_peserta\` int NOT NULL, \`snack_siang\` tinyint NOT NULL, \`makan_siang\` tinyint NOT NULL, \`snack_sore\` tinyint NOT NULL, \`nominal_konsumsi\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`meeting\``);
    }

}

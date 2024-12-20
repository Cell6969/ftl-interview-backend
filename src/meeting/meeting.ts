import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'meeting' })
export class Meeting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  unit: string;

  @Column({ type: 'varchar', length: 255 })
  ruang_meeting: string;

  @Column({ type: 'int' })
  kapasitas: number;

  @Column({ type: 'date' })
  tanggal_rapat: Date;

  @Column({ type: 'date' })
  waktu_mulai: Date;

  @Column({ type: 'date' })
  waktu_selesai: Date;

  @Column({ type: 'int' })
  jumlah_peserta: number;

  @Column({ type: 'boolean' })
  snack_siang: boolean;

  @Column({ type: 'boolean' })
  makan_siang: boolean;

  @Column({ type: 'boolean' })
  snack_sore: boolean;

  @Column({ type: 'int' })
  nominal_konsumsi: number;
}

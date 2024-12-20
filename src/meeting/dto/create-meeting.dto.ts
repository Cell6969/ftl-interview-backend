import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateMeetingDto {
  @IsNotEmpty()
  @IsString()
  unit: string;

  @IsNotEmpty()
  @IsString()
  ruang_meeting: string;

  @IsInt()
  kapasitas: number;

  @IsDate()
  tanggal_rapat: Date;

  @IsDate()
  waktu_mulai: Date;

  @IsDate()
  waktu_selesai: Date;

  @IsInt()
  jumlah_peserta: number;

  @IsBoolean()
  snack_siang: boolean;

  @IsBoolean()
  makan_siang: boolean;

  @IsBoolean()
  snack_sore: boolean;

  @IsInt()
  nominal_konsumsi: number;
}

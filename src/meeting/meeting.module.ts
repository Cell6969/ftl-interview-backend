import { Module } from '@nestjs/common';
import { MeetingController } from './meeting.controller';
import { MeetingService } from './meeting.service';
import { DataSource } from 'typeorm';
import { Meeting } from './meeting';
import { DB } from '../database/database';

@Module({
  controllers: [MeetingController],
  providers: [
    MeetingService,
    {
      provide: 'MEETING_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Meeting),
      inject: [DB],
    },
  ],
})
export class MeetingModule {}

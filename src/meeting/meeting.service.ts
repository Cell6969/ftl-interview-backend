import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Meeting } from './meeting';
import { CreateMeetingDto } from './dto/create-meeting.dto';

@Injectable()
export class MeetingService {
  constructor(
    @Inject('MEETING_REPOSITORY')
    private readonly meetingRepository: Repository<Meeting>,
  ) {}

  public async create(data: CreateMeetingDto) {
    const meeting = this.meetingRepository.create(data);
    return await this.meetingRepository.save(meeting);
  }

  public async findAll() {
    const meeting = await this.meetingRepository.find();
    return meeting;
  }
}

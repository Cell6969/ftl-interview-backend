import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';

@Controller('meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @HttpCode(200)
  @Post()
  public async createMeeting(@Body() data: CreateMeetingDto) {
    const meeting = await this.meetingService.create(data);
    return {
      statusCode: 200,
      message: 'Successfully create meeting',
      data: meeting,
    };
  }

  @HttpCode(200)
  @Get()
  public async findAllMeeting() {
    const meeting = await this.meetingService.findAll();
    return {
      statusCode: 200,
      message: 'Successfully find all meeting',
      data: meeting,
    };
  }
}

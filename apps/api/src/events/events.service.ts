import { PrismaService } from '@larpcalendar/models';
import { Injectable } from '@nestjs/common';
import { Event } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async getData(): Promise<Event[]> {
    const events = (await this.prisma.event.findMany()) || [];
    return events;
  }
}

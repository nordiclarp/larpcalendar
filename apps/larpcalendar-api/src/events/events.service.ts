import { Injectable } from '@nestjs/common';
import { Event } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async getData(): Promise<Event[]> {
    const events = (await this.prisma.event.findMany()) || [];
    console.log(events);
    return events;
  }
}

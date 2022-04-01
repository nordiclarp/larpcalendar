import { PrismaService } from '@larpcalendar/prisma';
import { Injectable } from '@nestjs/common';
import { Event } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Event[]> {
    const events =
      (await this.prisma.event.findMany({ orderBy: { startDate: 'asc' } })) ||
      [];
    return events;
  }

  async getOne(id: string): Promise<Event> {
    return await this.prisma.event.findUnique({ where: { id } });
  }
}

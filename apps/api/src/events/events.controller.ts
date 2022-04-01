import { Controller, Get, Param } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  getAll() {
    return this.eventsService.getAll();
  }

  @Get(':id')
  getOne(@Param() params) {
    return this.eventsService.getOne(params.id);
  }
}

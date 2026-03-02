import { MissionService } from './mission.service';
import { Controller, Get } from '@nestjs/common';

@Controller('missions')
export class MissionController {
  constructor(private missionService: MissionService) {}

  @Get('summary')
  summary() {
    return this.missionService.getSummary();
  }
}

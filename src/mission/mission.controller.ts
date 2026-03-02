import {MissionService} from './mission.service'
import { Controller, Get } from '@nestjs/common';

@Controller('data')
export class MissionController {
    constructor(private missionService: MissionService) {}
    
    @Get()
    summary() {
        return this.missionService.getSummary()
    }
}
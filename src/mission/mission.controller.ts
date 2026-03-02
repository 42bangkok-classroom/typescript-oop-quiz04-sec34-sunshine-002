import {MissionService} from './mission.service'

export class MissionController {
    constructor(private missionService: MissionService) {}
    summary() {
        return this.missionService.getSummary()
    }
}
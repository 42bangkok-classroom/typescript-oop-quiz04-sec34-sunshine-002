import { Injectable } from '@nestjs/common';

@Injectable()
export class MissionService {
    private readonly missions = [
  { id: 1, codename: 'OPERATION_STORM', status: 'ACTIVE' },
  { id: 2, codename: 'SILENT_SNAKE', status: 'COMPLETED' },
  { id: 3, codename: 'RED_DAWN', status: 'FAILED' },
  { id: 4, codename: 'BLACKOUT', status: 'ACTIVE' },
  { id: 5, codename: 'ECHO_FALLS', status: 'COMPLETED' },
  { id: 6, codename: 'GHOST_RIDER', status: 'COMPLETED' }
];
    getSummary() {
        const sum : {[key: string]: number} = {}
            for(const mission of this.missions) {
                if(sum[mission.status] === null) {
                    sum[mission.status] = 0
                }
                sum[mission.status] ++
            }
            return sum        
    }
}
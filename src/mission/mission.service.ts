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
        let active = 0
        let completed = 0
        let failed = 0
        this.missions.map(s => {
            if(s.status === "ACTIVE") {
                active ++
            }
            if(s.status === "COMPLETED") {
                completed ++
            }
            if(s.status === "FAILED") {
                failed ++
            }
        })
        return {
            "ACTIVE": active,
            "COMPLETED": completed,
            "FAILED": failed
        }
    }
}
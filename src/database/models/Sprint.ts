export class Sprint {
    sprintNumber?: number;
    duration: number; // Sprint duration is expressed in weeks
    projectManagementSoftwareId: number;

    constructor(duration: number, projectManagementSoftwareId: number) {
        this.duration = duration;
        this.projectManagementSoftwareId = projectManagementSoftwareId;
    }
}

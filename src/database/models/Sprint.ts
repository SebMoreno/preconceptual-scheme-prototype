export class Sprint {
    sprintNumber?: number;
    duration: number;
    projectManagementSoftwareId: number;

    constructor(duration: number, projectManagementSoftwareId: number) {
        this.duration = duration;
        this.projectManagementSoftwareId = projectManagementSoftwareId;
    }
}

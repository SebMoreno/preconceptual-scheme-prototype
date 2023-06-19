export class Sprint {
    sprintNumber?: number;
    // Sprint duration expressed in weeks
    duration: number;
    projectManagementSoftwareId: number;

    constructor(duration: number, projectManagementSoftwareId: number) {
        this.duration = duration;
        this.projectManagementSoftwareId = projectManagementSoftwareId;
    }
}

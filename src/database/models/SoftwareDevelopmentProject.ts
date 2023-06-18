export class SoftwareDevelopmentProject {
    id?: number;
    deadline: Date;
    projectManagementSoftwareId: number;
    constructor(deadline: Date, projectManagementSoftwareId: number) {
        this.deadline = deadline;
        this.projectManagementSoftwareId = projectManagementSoftwareId;
    }
}

export class SoftwareDevelopmentProject {
    id?: number;
    deadline: string;
    projectManagementSoftwareId: number;
    qualityAssuranceToolId: string;
    developmentTeamId: number;
    applicationId: number;

    constructor(deadline: string, projectManagementSoftwareId: number, qualityAssuranceToolId: string, developmentTeamId: number, applicationId: number) {
        this.deadline = deadline;
        this.projectManagementSoftwareId = projectManagementSoftwareId;
        this.qualityAssuranceToolId = qualityAssuranceToolId;
        this.developmentTeamId = developmentTeamId;
        this.applicationId = applicationId;
    }
}

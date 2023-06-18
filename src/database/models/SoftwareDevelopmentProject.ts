export class SoftwareDevelopmentProject {
    id?: number;
    deadline: string;
    projectManagementSoftwareId: number;
    qualityAssuranceToolName: string;
    developmentTeamId: number;
    applicationId: number;

    constructor(deadline: string, projectManagementSoftwareId: number, qualityAssuranceToolName: string, developmentTeamId: number, applicationId: number) {
        this.deadline = deadline;
        this.projectManagementSoftwareId = projectManagementSoftwareId;
        this.qualityAssuranceToolName = qualityAssuranceToolName;
        this.developmentTeamId = developmentTeamId;
        this.applicationId = applicationId;
    }
}

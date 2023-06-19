export class Defect {
    id?: number;
    ocurrenceDate: string;
    description: string;
    violationId: number;
    releaseVersionNumber: number;

    constructor(ocurrenceDate: string, description: string, violationId: number, releaseVersionNumber: number) {
        this.ocurrenceDate = ocurrenceDate;
        this.description = description;
        this.violationId = violationId;
        this.releaseVersionNumber = releaseVersionNumber;
    }
}

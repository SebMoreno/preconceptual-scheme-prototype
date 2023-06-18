export class Defect {
    id?: number;
    ocurrenceDate: string;
    description: string;
    type: string;
    violationId: number;
    releaseVersionNumber: number;

    constructor(ocurrenceDate: string, description: string, type: string, violationId: number, releaseVersionNumber: number) {
        this.ocurrenceDate = ocurrenceDate;
        this.description = description;
        this.type = type;
        this.violationId = violationId;
        this.releaseVersionNumber = releaseVersionNumber;
    }
}

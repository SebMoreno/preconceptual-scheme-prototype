export class Code {
    id?: number;
    linesOfCode: number;
    // technicalDebt are represented in days
    technicalDebt: number;
    applicationId: number;

    constructor(linesOfCode: number, technicalDebt: number, applicationId: number) {
        this.linesOfCode = linesOfCode;
        this.technicalDebt = technicalDebt;
        this.applicationId = applicationId;
    }
}

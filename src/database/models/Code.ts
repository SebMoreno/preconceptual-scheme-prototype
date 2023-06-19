export class Code {
    id?: number;
    linesOfCode: number;
    technicalDebt: number; // technicalDebt is represented in days
    applicationId: number;

    constructor(linesOfCode: number, technicalDebt: number, applicationId: number) {
        this.linesOfCode = linesOfCode;
        this.technicalDebt = technicalDebt;
        this.applicationId = applicationId;
    }
}

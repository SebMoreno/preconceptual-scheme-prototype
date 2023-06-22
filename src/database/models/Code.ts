export class Code {
    id?: number;
    totalLinesOfCode: number;
    technicalDebt: number; // technicalDebt is represented in days
    applicationId: number;

    constructor(linesOfCode: number, technicalDebt: number, applicationId: number) {
        this.totalLinesOfCode = linesOfCode;
        this.technicalDebt = technicalDebt;
        this.applicationId = applicationId;
    }
}

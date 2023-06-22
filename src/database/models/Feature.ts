export class Feature {
    id?: number;
    description: string;
    codeId: number;
    linesOfCode: number;

    constructor(description: string, codeId: number, linesOfCode: number) {
        this.description = description;
        this.codeId = codeId;
        this.linesOfCode = linesOfCode;
    }
}

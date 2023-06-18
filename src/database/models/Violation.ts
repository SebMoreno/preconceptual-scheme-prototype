export class Violation {
    id?: number;
    qualityRuleName: string;
    codeId: number;

    constructor(qualityRuleName: string, codeId: number) {
        this.qualityRuleName = qualityRuleName;
        this.codeId = codeId;
    }
}

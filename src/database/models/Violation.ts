export class Violation {
    id?: number;
    qualityRuleId: string;
    codeId: number;

    constructor(qualityRuleId: string, codeId: number) {
        this.qualityRuleId = qualityRuleId;
        this.codeId = codeId;
    }
}

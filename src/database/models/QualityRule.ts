export class QualityRule {
    id?: number;
    name: string;
    compliance: string;
    ruleType: string;
    interest: number | string;
    principal: number | string;
    qualityAssuranceToolName: string;

    constructor(name: string, compliance: string, ruleType: string, interest: number | string, principal: number | string, qualityAssuranceToolName: string) {
        this.name = name;
        this.compliance = compliance;
        this.ruleType = ruleType;
        this.interest = interest;
        this.principal = principal;
        this.qualityAssuranceToolName = qualityAssuranceToolName;
    }
}

export class Feature {
    id?: number;
    description: string;
    codeId: number;

    constructor(description: string, codeId: number) {
        this.description = description;
        this.codeId = codeId;
    }
}

export class Release {
    versionNumber?: number;
    codeId: number;

    constructor(codeId: number) {
        this.codeId = codeId;
    }
}

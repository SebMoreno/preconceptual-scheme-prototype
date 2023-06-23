export class Application {
    id?: number;
    versionControlSystemId: number;
    codeId: number;

    constructor(versionControlSystemId: number, codeId: number) {
        this.versionControlSystemId = versionControlSystemId;
        this.codeId = codeId;
    }
}

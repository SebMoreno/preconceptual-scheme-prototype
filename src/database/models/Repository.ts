export class Repository {
    id?: number;
    versionControlSystemId: number;

    constructor(versionControlSystemId: number) {
        this.versionControlSystemId = versionControlSystemId;
    }
}

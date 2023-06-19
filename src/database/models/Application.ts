export class Application {
    id?: number;
    versionControlSystemId: number;

    constructor(versionControlSystemId: number) {
        this.versionControlSystemId = versionControlSystemId;
    }
}

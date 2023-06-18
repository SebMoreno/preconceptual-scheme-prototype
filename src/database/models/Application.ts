export class Application {
    id?: number;
    versonControlSystemId: number;

    constructor(versonControlSystemId: number) {
        this.versonControlSystemId = versonControlSystemId;
    }
}

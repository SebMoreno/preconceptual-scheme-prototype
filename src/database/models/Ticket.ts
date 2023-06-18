export class Ticket {
    key?: number;
    definitionOfDone: string;
    title: string;
    points: number;
    asignee: string;
    sprintNumber: number;
    featureId: number;

    constructor(definitionOfDone: string, title: string, points: number, asignee: string, sprintNumber: number, featureId: number) {
        this.definitionOfDone = definitionOfDone;
        this.title = title;
        this.points = points;
        this.asignee = asignee;
        this.sprintNumber = sprintNumber;
        this.featureId = featureId;
    }
}

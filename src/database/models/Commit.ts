export class Commit {
    hash?: number;
    message: string;
    ticketKey: number;
    repositoryId: number;

    constructor(message: string, ticketKey: number, repositoryId: number) {
        this.message = message;
        this.ticketKey = ticketKey;
        this.repositoryId = repositoryId;
    }
}

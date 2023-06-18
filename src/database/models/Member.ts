export class Member {
    id?: number;
    role: string;
    name: string;
    developmentTeamId: number;

    constructor(role: string, name: string, developmentTeamId: number) {
        this.role = role;
        this.name = name;
        this.developmentTeamId = developmentTeamId;
    }
}

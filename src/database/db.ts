import Dexie, { Table } from 'dexie';
import {
    Application,
    Code,
    Commit,
    Defect,
    DevelopmentTeam,
    Feature,
    Member,
    ProjectManagementSoftware,
    QualityAssuranceTool,
    QualityRule,
    Release,
    Repository,
    SoftwareDevelopmentProject,
    Sprint,
    Ticket,
    VersionControlSystem,
    Violation
} from "./models";
import defaultData from "./data.json";

export class EPDataBase extends Dexie {
    Application!: Table<Application>;
    Code!: Table<Code>;
    Commit!: Table<Commit>;
    Defect!: Table<Defect>;
    DevelopmentTeam!: Table<DevelopmentTeam>;
    Feature!: Table<Feature>;
    Member!: Table<Member>;
    ProjectManagementSoftware!: Table<ProjectManagementSoftware>;
    QualityAssuranceTool!: Table<QualityAssuranceTool>;
    QualityRule!: Table<QualityRule>;
    Release!: Table<Release>;
    Repository!: Table<Repository>;
    SoftwareDevelopmentProject!: Table<SoftwareDevelopmentProject>;
    Sprint!: Table<Sprint>;
    Ticket!: Table<Ticket>;
    VersionControlSystem!: Table<VersionControlSystem>;
    Violation!: Table<Violation>;

    constructor() {
        super('EPDataBase');
        this.version(1).stores({
            Application: "++id",
            Code: "++id",
            Commit: "++hash",
            Defect: "++id",
            DevelopmentTeam: "++id",
            Feature: "++id",
            Member: "++id, role",
            ProjectManagementSoftware: "++id",
            QualityAssuranceTool: "++id",
            QualityRule: "++id",
            Release: "++versionNumber",
            Repository: "++id",
            SoftwareDevelopmentProject: "++id",
            Sprint: "++sprintNumber",
            Ticket: "++key",
            VersionControlSystem: "++id",
            Violation: "++id"
        });
        this.Application.mapToClass(Application);
        this.Code.mapToClass(Code);
        this.Commit.mapToClass(Commit);
        this.Defect.mapToClass(Defect);
        this.DevelopmentTeam.mapToClass(DevelopmentTeam);
        this.Feature.mapToClass(Feature);
        this.Member.mapToClass(Member);
        this.ProjectManagementSoftware.mapToClass(ProjectManagementSoftware);
        this.QualityAssuranceTool.mapToClass(QualityAssuranceTool);
        this.QualityRule.mapToClass(QualityRule);
        this.Release.mapToClass(Release);
        this.Repository.mapToClass(Repository);
        this.SoftwareDevelopmentProject.mapToClass(SoftwareDevelopmentProject);
        this.Sprint.mapToClass(Sprint);
        this.Ticket.mapToClass(Ticket);
        this.VersionControlSystem.mapToClass(VersionControlSystem);
        this.Violation.mapToClass(Violation);
        this.loadDataFromObject();
    }

    async loadDataFromObject(obj: { [key: string]: unknown[] } = defaultData) {
        await this.delete();
        await this.open();
        Object.entries(obj)
            .forEach(([key, value]) => this.table(key).bulkPut(value));
    }

    async getAllData() {
        const allData: { [key: string]: unknown[] } = {};
        for (const table of this.tables) {
            allData[table.name] = await table.toArray();
        }
        return allData;
    }
}

export const db = new EPDataBase();

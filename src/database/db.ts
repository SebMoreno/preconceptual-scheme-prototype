import Dexie, { Table } from 'dexie';
import { ProjectManagementSoftware } from "./models/ProjectManagementSoftware.ts";
import { SoftwareDevelopmentProject } from "./models/SoftwareDevelopmentProject.ts";
import jsonData from "./data.json";

export class EPDataBase extends Dexie {
    ProjectManagementSoftwares!: Table<ProjectManagementSoftware>;
    SoftwareDevelopmentProjects!: Table<SoftwareDevelopmentProject>;

    constructor() {
        super('EPDataBase');
        this.version(1).stores({
            ProjectManagementSoftwares: '++id',
            SoftwareDevelopmentProjects: '++id'
        });
        this.ProjectManagementSoftwares.mapToClass(ProjectManagementSoftware);
        this.SoftwareDevelopmentProjects.mapToClass(SoftwareDevelopmentProject);
        this.loadDataFromJson();
    }

    async loadDataFromJson() {
        await this.delete();
        await this.open();
        Object.entries(jsonData)
            .forEach(([key, value]) => this.table(key).bulkPut(value));
    }
}

export const db = new EPDataBase();

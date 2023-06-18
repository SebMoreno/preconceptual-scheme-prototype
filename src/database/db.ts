import Dexie, { Table } from 'dexie';
import { ProjectManagementSoftware } from "./models/ProjectManagementSoftware.ts";
import { SoftwareDevelopmentProject } from "./models/SoftwareDevelopmentProject.ts";

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
    }
}

export const db = new EPDataBase();

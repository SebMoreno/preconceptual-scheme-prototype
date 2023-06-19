import './App.css'
import { TableDataGrid } from "./components/TableDataGrid.tsx";
import { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { PreconceptualScheme } from "./components/PreconceptualScheme.tsx";


export const App = () => {
    const [tableName, setTableName] = useState("ProjectManagementSoftwares")
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenTable = (tableName: string) => {
        setTableName(tableName)
        setIsOpen(true)
    }
    return (
        <>
            <PreconceptualScheme onOpenTable={handleOpenTable}/>
            {/*<div style={{display: 'flex', flexDirection: 'column'}}>
                <Button >
                    Application
                </Button>
                <Button onClick={() => onOpenTable("Code")}>
                    Code
                </Button>
                <Button>
                    Commit
                </Button>
                <Button onClick={() => onOpenTable("Defect")}>
                    Defect
                </Button>
                <Button>
                    DevelopmentTeam
                </Button>
                <Button onClick={() => onOpenTable("Feature")}>
                    Feature
                </Button>
                <Button onClick={() => onOpenTable("Member")}>
                    Member
                </Button>
                <Button>
                    ProjectManagementSoftware
                </Button>
                <Button onClick={() => onOpenTable("QualityAssuranceTool")}>
                    QualityAssuranceTool
                </Button>
                <Button onClick={() => onOpenTable("QualityRule")}>
                    QualityRule
                </Button>
                <Button onClick={() => onOpenTable("Release")}>
                    Release
                </Button>
                <Button onClick={() => onOpenTable("Repository")}>
                    Repository
                </Button>
                <Button onClick={() => onOpenTable("SoftwareDevelopmentProject")}>
                    SoftwareDevelopmentProject
                </Button>
                <Button onClick={() => onOpenTable("Sprint")}>
                    Sprint
                </Button>
                <Button onClick={() => onOpenTable("Ticket")}>
                    Ticket
                </Button>
                <Button onClick={() => onOpenTable("VersionControlSystem")}>
                    VersionControlSystem
                </Button>
                <Button onClick={() => onOpenTable("Violation")}>
                    Violation
                </Button>
            </div>*/}
            <Dialog
                maxWidth="lg"
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <DialogContent sx={{px: 5, py: 3}}>
                    <TableDataGrid tableName={tableName}/>
                </DialogContent>
            </Dialog>
        </>
    )
}

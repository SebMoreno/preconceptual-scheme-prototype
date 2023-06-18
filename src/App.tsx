import './App.css'
import { TableDataGrid } from "./components/TableDataGrid.tsx";
import { useState } from "react";
import { Button, Dialog, DialogContent } from "@mui/material";


export const App = () => {
    const [tableName, setTableName] = useState("ProjectManagementSoftwares")
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenTable = (tableName: string) => {
        setTableName(tableName)
        setIsOpen(true)
    }
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {/*<PreconceptualScheme onOpenTable={handleOpenTable}/>*/}
                <Button onClick={() => handleOpenTable("Application")}>
                    Application
                </Button>
                <Button onClick={() => handleOpenTable("Code")}>
                    Code
                </Button>
                <Button onClick={() => handleOpenTable("Commit")}>
                    Commit
                </Button>
                <Button onClick={() => handleOpenTable("Defect")}>
                    Defect
                </Button>
                <Button onClick={() => handleOpenTable("DevelopmentTeam")}>
                    DevelopmentTeam
                </Button>
                <Button onClick={() => handleOpenTable("Feature")}>
                    Feature
                </Button>
                <Button onClick={() => handleOpenTable("Member")}>
                    Member
                </Button>
                <Button onClick={() => handleOpenTable("ProjectManagementSoftware")}>
                    ProjectManagementSoftware
                </Button>
                <Button onClick={() => handleOpenTable("QualityAssuranceTool")}>
                    QualityAssuranceTool
                </Button>
                <Button onClick={() => handleOpenTable("QualityRule")}>
                    QualityRule
                </Button>
                <Button onClick={() => handleOpenTable("Release")}>
                    Release
                </Button>
                <Button onClick={() => handleOpenTable("Repository")}>
                    Repository
                </Button>
                <Button onClick={() => handleOpenTable("SoftwareDevelopmentProject")}>
                    SoftwareDevelopmentProject
                </Button>
                <Button onClick={() => handleOpenTable("Sprint")}>
                    Sprint
                </Button>
                <Button onClick={() => handleOpenTable("Ticket")}>
                    Ticket
                </Button>
                <Button onClick={() => handleOpenTable("VersionControlSystem")}>
                    VersionControlSystem
                </Button>
                <Button onClick={() => handleOpenTable("Violation")}>
                    Violation
                </Button>
            </div>
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

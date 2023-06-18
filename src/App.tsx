import './App.css'
import { TableDataGrid } from "./components/TableDataGrid.tsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { Button, Dialog, DialogContent } from "@mui/material";

const darkTheme = createTheme({palette: {mode: 'dark'}});

export const App = () => {
    const [tableName, setTableName] = useState("ProjectManagementSoftwares")
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenTable = (tableName: string) => {
        setTableName(tableName)
        setIsOpen(true)
    }
    return (
        <ThemeProvider theme={darkTheme}>
            {/*<PreconceptualScheme onOpenTable={handleOpenTable}/>*/}
            <Button onClick={() => handleOpenTable("ProjectManagementSoftwares")}>
                Open modal for ProjectManagementSoftwares
            </Button>
            <Button onClick={() => handleOpenTable("SoftwareDevelopmentProjects")}>
                Open modal for ProjectManagementSoftwares
            </Button>
            <Dialog
                maxWidth="lg"
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <DialogContent sx={{px: 5, py: 3}}>
                    <TableDataGrid tableName={tableName}/>
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    )
}

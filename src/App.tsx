import './App.css'
import { TableDataGrid } from "./components/TableDataGrid.tsx";
import { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { PreconceptualScheme } from "./components/PreconceptualScheme.tsx";


export const App = () => {
    const [tableName, setTableName] = useState("")
    const [message, setMessage] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenTable = (newTableName: string, newMessage?: string) => {
        setTableName(newTableName)
        setIsOpen(true)
        setMessage(newMessage ?? "")
    }
    return (
        <>
            <PreconceptualScheme onOpenTable={handleOpenTable}/>
            <Dialog
                maxWidth="lg"
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <DialogContent sx={{px: 5, py: 3}}>
                    <TableDataGrid tableName={tableName} message={message}/>
                </DialogContent>
            </Dialog>
        </>
    )
}

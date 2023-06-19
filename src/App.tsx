import { TableDataGrid, TableDataGridProps } from "./components/TableDataGrid.tsx";
import { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { PreconceptualScheme } from "./components/PreconceptualScheme.tsx";


export const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tableDataGridProps, setTableDataGridProps] = useState<TableDataGridProps>({
        tableName: "",
        message: ""
    });
    const handleOpenTable = (newTableDataGridProps: TableDataGridProps) => {
        setIsOpen(true);
        setTableDataGridProps(newTableDataGridProps);
    };
    return (
        <>
            <PreconceptualScheme onOpenTable={handleOpenTable}/>
            <Dialog
                maxWidth="lg"
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <DialogContent sx={{px: 5, py: 3}}>
                    <TableDataGrid
                        tableName={tableDataGridProps.tableName}
                        message={tableDataGridProps.message}
                        query={tableDataGridProps.query}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};
